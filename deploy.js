import { Client } from 'ssh2';
import * as fs from 'fs';
import * as path from 'path';

const conn = new Client();

const config = {
  host: '89.117.188.170',
  port: 65002,
  username: 'u244945997',
  password: 'Jawairock@1234',
  tryKeyboard: true
};

const localDistDir = path.resolve('dist');

function getLocalFiles(dir) {
  const dirents = fs.readdirSync(dir, { withFileTypes: true });
  const files = dirents.map((dirent) => {
    const res = path.join(dir, dirent.name);
    return dirent.isDirectory() ? getLocalFiles(res) : res;
  });
  return Array.prototype.concat(...files);
}

// Check remote directory existence and create it if not exists
function makeRemoteDir(sftp, remoteDir) {
  return new Promise((resolve, reject) => {
    sftp.mkdir(remoteDir, (err) => {
      if (err) {
        // If it already exists, ignore error
        resolve();
      } else {
        console.log(`Created remote directory: ${remoteDir}`);
        resolve();
      }
    });
  });
}

// Ensure parent directories exist on remote
async function ensureRemoteParentDirs(sftp, remotePath) {
  const parts = remotePath.split('/');
  // Remove the file name part
  parts.pop();
  let currentPath = '';
  for (const part of parts) {
    if (!part) {
      currentPath += '/';
      continue;
    }
    if (currentPath && currentPath !== '/') {
      currentPath += '/';
    }
    currentPath += part;
    await makeRemoteDir(sftp, currentPath);
  }
}

conn.on('ready', () => {
  console.log('SSH connection established successfully.');
  
  conn.sftp(async (err, sftp) => {
    if (err) {
      console.error('SFTP session error:', err);
      conn.end();
      return;
    }

    try {
      // List root directory to find where public_html resides
      sftp.readdir('.', async (err, list) => {
        if (err) {
          console.error('Failed to read remote root directory:', err);
          conn.end();
          return;
        }

        const folders = list.map(item => item.filename);
        console.log('Remote directories found:', folders);

        let targetDir = 'public_html';
        
        // If domains folder exists, inspect it for specific domain folder
        if (folders.includes('domains')) {
          targetDir = 'domains/jawairockresort.com/public_html';
          console.log(`Found 'domains' folder. Defaulting target path to: ${targetDir}`);
        } else if (folders.includes('public_html')) {
          targetDir = 'public_html';
          console.log(`Found 'public_html' folder. Defaulting target path to: ${targetDir}`);
        } else {
          console.log(`Could not find standard public_html folder. Using root path: ${targetDir}`);
        }

        const localFiles = getLocalFiles(localDistDir);
        console.log(`Found ${localFiles.length} files to upload from local 'dist'.`);

        for (const localFile of localFiles) {
          const relativePath = path.relative(localDistDir, localFile).replace(/\\/g, '/');
          const remoteFile = `${targetDir}/${relativePath}`;

          console.log(`Uploading: ${relativePath} -> ${remoteFile}`);
          
          await ensureRemoteParentDirs(sftp, remoteFile);

          await new Promise((resolve, reject) => {
            sftp.fastPut(localFile, remoteFile, (err) => {
              if (err) {
                console.error(`Failed to upload: ${relativePath}`, err);
                reject(err);
              } else {
                resolve();
              }
            });
          });
        }

        console.log('Deployment completed successfully!');
        conn.end();
      });
    } catch (deployError) {
      console.error('Error during deployment:', deployError);
      conn.end();
    }
  });
}).on('error', (err) => {
  console.error('SSH Connection Error:', err.message);
}).on('keyboard-interactive', (name, instructions, instructionsLang, prompts, finish) => {
  console.log('Keyboard-interactive prompt received:', prompts);
  finish([config.password]);
}).connect(config);
