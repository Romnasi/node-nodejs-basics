import zlib from 'zlib';
import fs from 'fs';
import getPathFromFile from '../utils/getPathFromFile.js';

const filePath = getPathFromFile(import.meta.url, '/files/archive.gz');
const outPath = getPathFromFile(import.meta.url, '/files/fileToCompress.txt');

export const decompress = async () => {
  const unzip = zlib.createUnzip();
  const readable = fs.createReadStream(filePath);
  const writable = fs.createWriteStream(outPath);
  readable.pipe(unzip).pipe(writable);
};

decompress();