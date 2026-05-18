// src/pages/api/fonts/fontawesome-webfont.eot.ts
import fs from 'fs';
import path from 'path';

export async function GET() {
  const fontPath = path.resolve('src/pages/html/fontawesome-webfont.eot');
  const fontBuffer = fs.readFileSync(fontPath);
  return new Response(fontBuffer, {
    headers: {
      'Content-Type': 'application/vnd.ms-fontobject',
      'Cache-Control': 'public, max-age=31536000, immutable'
    }
  });
}