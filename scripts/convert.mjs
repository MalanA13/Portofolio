import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname } from 'path';

const assetsDir = 'src/assets';
const imageExts = ['.png', '.jpg', '.jpeg'];

async function convertImage(inputPath) {
  try {
    const outputPath = inputPath.replace(/\.(png|jpe?g)$/i, '.webp');
    
    await sharp(inputPath)
      .webp({ quality: 85, effort: 6 })
      .toFile(outputPath);
    
    const inputStat = await stat(inputPath);
    const outputStat = await stat(outputPath);
    const reduction = ((1 - outputStat.size / inputStat.size) * 100).toFixed(1);
    
    console.log(`✓ ${inputPath}`);
    console.log(`  ${(inputStat.size / 1024).toFixed(1)}KB → ${(outputStat.size / 1024).toFixed(1)}KB (${reduction}% smaller)\n`);
  } catch (err) {
    console.error(`✗ Failed: ${inputPath}`, err.message);
  }
}

async function walkDir(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    
    if (entry.isDirectory()) {
      await walkDir(fullPath);
    } else if (imageExts.includes(extname(entry.name).toLowerCase())) {
      await convertImage(fullPath);
    }
  }
}

console.log('Converting images to WebP...\n');
await walkDir(assetsDir);
console.log('Done!');
