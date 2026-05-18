// src/pages/api/jquery-min-js.ts
import fs from 'fs';
import path from 'path';

export async function GET() {
  const filePath = path.resolve('src/pages/html/jquery.min.js');
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  
  return new Response(fileContent, {
    headers: {
      'Content-Type': 'application/javascript; charset=utf-8',
    },
  });
}