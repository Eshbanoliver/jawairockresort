import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.join(__dirname, 'public', 'images');

// Create the directory if it doesn't exist
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
  console.log(`Created directory: ${imagesDir}`);
}

const imagesToDownload = [
  { url: "https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=800", filename: "jawai_dam.jpg" },
  { url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800", filename: "luxury_cottage.jpg" },
  { url: "https://images.unsplash.com/photo-1581888227599-779811939961?q=80&w=800", filename: "jungle_safari.jpg" },
  { url: "https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?q=80&w=800", filename: "leopard_wild.jpg" },
  { url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=800", filename: "campfires.jpg" },
  { url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800", filename: "granite_hills.jpg" },
  { url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800", filename: "sunset_view.jpg" },
  { url: "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?q=80&w=800", filename: "nature_banner.jpg" },
  { url: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800", filename: "contact_banner.jpg" },
  { url: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?q=80&w=800", filename: "leopard_safari.jpg" },
  { url: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=800", filename: "luxury_villa.jpg" },
  { url: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=800", filename: "swimming_pool.jpg" },
  { url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800", filename: "eco_resort.jpg" },
  { url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800", filename: "fine_dining.jpg" },
  { url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=800", filename: "private_villa.jpg" },
  { url: "https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?q=80&w=800", filename: "recreation.jpg" },
  { url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=800", filename: "birthday_party.jpg" },
  { url: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800", filename: "corporate_events.jpg" },
  { url: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800", filename: "resort_pool.jpg" },
  { url: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?q=80&w=800", filename: "safari_tent.jpg" }
];

function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
      }
    };
    
    https.get(url, options, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        // Follow redirect
        downloadImage(res.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to download from ${url}. Status code: ${res.statusCode}`));
        return;
      }

      const fileStream = fs.createWriteStream(dest);
      res.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`Successfully downloaded: ${path.basename(dest)}`);
        resolve();
      });
      
      fileStream.on('error', (err) => {
        fs.unlink(dest, () => {}); // Delete the file on error
        reject(err);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function run() {
  console.log("Starting image downloads...");
  for (const item of imagesToDownload) {
    const destPath = path.join(imagesDir, item.filename);
    try {
      await downloadImage(item.url, destPath);
    } catch (err) {
      console.error(`Error downloading ${item.filename}: ${err.message}`);
    }
  }
  console.log("All image downloads completed!");
}

run();
