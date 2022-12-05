import zlib from 'zlib';
import fs from 'fs';
import getPathFromFile from '../utils/getPathFromFile.js';

const filePath = getPathFromFile(import.meta.url, '/files/fileToCompress.txt');
const outPath = getPathFromFile(import.meta.url, '/files/archive.gz');

export const compress = async () => {
  const gzip = zlib.createGzip();
  const readable = fs.createReadStream(filePath);
  const writable = fs.createWriteStream(outPath);
  readable.pipe(gzip).pipe(writable);
};

compress();