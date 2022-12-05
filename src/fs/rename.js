import { rename as fsRename } from 'node:fs';
import getPathFromFile from '../utils/getPathFromFile.js';
import { FS_ERROR_MESSAGE } from '../const/const.js';

const wrongFilePath = getPathFromFile(import.meta.url, '/files/wrongFilename.txt');
const filePath = getPathFromFile(import.meta.url, '/files/properFilename.md');

const callback = (err) => {
  if (err) throw new Error(FS_ERROR_MESSAGE);
}

export const rename = async () => {
  fsRename(wrongFilePath, filePath, callback); 
};

rename();