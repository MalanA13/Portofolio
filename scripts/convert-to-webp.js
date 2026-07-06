#!/usr/bin/env node
import { execSync } from 'child_process';
import { readdirSync, statSync, existsSync, mkdirSync } from 'fs';
import { join, extname, basename } from 'path';

const assetsDir = 'src/assets';
const imageExts = ['.png', '.jpg', '.jpeg'];

function convertImage(inputPath, outputPath) {
  try {
    // ImageMagick convert with quality optimization
    execSync(`magick "${inputPath}" -quality 85 -define webp:method=6 "${outputPath}"`, {
      stdio: 'inherit'
    });
    console.log(`✓ ${inputPath} → ${outputPath}`);
  } catch (err) {
    console.error(`✗ Failed: ${inputPath}`, err.message);
  }
}

function walkDir(dir) {
  const files = readdirSync(dir);
  
  for (const file of files) {
    const filePath = join(dir, file);
    const stat = statSync(filePath);
    
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (imageExts.includes(extname(file).toLowerCase())) {
      const outputPath = filePath.replace(/\.(png|jpe?g)$/i, '.webp');
      convertImage(filePath, outputPath);
    }
  }
}

console.log('Converting images to WebP...\n');
walkDir(assetsDir);
console.log('\nDone!');
