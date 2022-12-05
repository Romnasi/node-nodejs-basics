import { readFile } from 'node:fs/promises';
import { createHash } from 'crypto';
import getPathFromFile from '../utils/getPathFromFile.js';

const filePath = getPathFromFile(import.meta.url, '/files/fileToCalculateHashFor.txt');

export const calculateHash = async () => {
  try {
    const fileContent = await readFile(filePath, 'utf8');
    const hash = createHash('sha256').update(fileContent).digest('hex');
    console.log(hash);
  } catch (err) {
    console.error(err);
  }
};

calculateHash();