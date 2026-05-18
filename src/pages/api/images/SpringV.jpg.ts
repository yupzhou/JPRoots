// src/pages/api/images/SpringV.jpg.ts
import fs from 'fs';
import path from 'path';

export async function GET() {
  const imagePath = path.resolve('src/assets/images/SpringV.jpg');
  const imageBuffer = fs.readFileSync(imagePath);
  return new Response(imageBuffer, {
    headers: {
      'Content-Type': 'image/jpeg',
      'Cache-Control': 'public, max-age=31536000, immutable'
    }
  });
}