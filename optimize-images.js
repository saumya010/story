const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const albumsDir = path.join(__dirname, 'public/images/albums');
const maxWidth = 1600;
const quality = 80; // JPEG/WebP quality

function isImage(file) {
  return /\.(jpe?g|png|webp)$/i.test(file);
}

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const buffer = fs.readFileSync(filePath);
  let pipeline = sharp(buffer).resize({ width: maxWidth, withoutEnlargement: true });
  if (ext === '.jpg' || ext === '.jpeg') {
    pipeline = pipeline.jpeg({ quality });
  } else if (ext === '.png') {
    pipeline = pipeline.png({ quality });
  } else if (ext === '.webp') {
    pipeline = pipeline.webp({ quality });
  }
  const optimized = await pipeline.toBuffer();
  fs.writeFileSync(filePath, optimized);
  console.log(`Optimized: ${filePath}`);
}

function walkDir(dir, cb) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath, cb);
    } else if (isImage(fullPath)) {
      cb(fullPath);
    }
  });
}

(async () => {
  walkDir(albumsDir, (imgPath) => {
    optimizeImage(imgPath).catch(console.error);
  });
})(); 