import sharp from 'sharp';
import { stat } from 'fs/promises';

const inputPath = 'src/assets/organizations/BaqiStaff.webp';
const outputPath = 'src/assets/organizations/BaqiStaff-opt.webp';

console.log('Re-compressing BaqiStaff with aggressive settings...\n');

await sharp(inputPath)
  .resize(1200, null, { withoutEnlargement: true }) // Max width 1200px
  .webp({ quality: 70, effort: 6 })
  .toFile(outputPath);

const inputStat = await stat(inputPath);
const outputStat = await stat(outputPath);
const reduction = ((1 - outputStat.size / inputStat.size) * 100).toFixed(1);

console.log(`✓ ${inputPath}`);
console.log(`  ${(inputStat.size / 1024).toFixed(1)}KB → ${(outputStat.size / 1024).toFixed(1)}KB (${reduction}% smaller)`);
console.log('\nReplace the original manually if satisfied');
