import { Client } from 'ssh2';

const conn = new Client();
conn.on('ready', () => {
  console.log('SUCCESS!');
  conn.end();
}).on('error', (err) => {
  console.log('ERROR:', err.message);
}).on('keyboard-interactive', (name, instructions, instructionsLang, prompts, finish) => {
  console.log('Keyboard-interactive prompt received:', prompts);
  finish(['Jawai@1234']);
}).on('debug', (info) => {
  console.log('DEBUG:', info);
}).connect({
  host: '89.117.188.170',
  port: 65002,
  username: 'u244945997',
  password: 'Jawai@1234',
  tryKeyboard: true,
  debug: (msg) => console.log(msg)
});
