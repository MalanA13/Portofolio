import sharp from 'sharp';
import { stat } from 'fs/promises';

const input = 'src/assets/profile/alan.webp';
const output = 'src/assets/profile/alan-tiny.webp';

console.log('Ultra-compressing alan.webp...\n');

await sharp(input)
  .resize(800, null, { withoutEnlargement: true })
  .webp({ quality: 75, effort: 6 })
  .toFile(output);

const before = await stat(input);
const after = await stat(output);
const reduction = ((1 - after.size / before.size) * 100).toFixed(1);

console.log(`${(before.size / 1024).toFixed(1)}KB → ${(after.size / 1024).toFixed(1)}KB (${reduction}% smaller)`);
console.log('\nReplace if acceptable quality');
