import { createWriteStream } from 'fs';
import getPathFromFile from '../utils/getPathFromFile.js';

const filePath = getPathFromFile(import.meta.url, '/files/fileToWrite.txt');

export const write = async () => {
  const writeStream = createWriteStream(filePath);
  process.stdin.pipe(writeStream);
};

write();