import { readdir, mkdir, copyFile } from 'fs/promises';
import getPathFromFile from '../utils/getPathFromFile.js';
import { FS_ERROR_MESSAGE } from '../const/const.js';

const sourceFolder = getPathFromFile(import.meta.url, '/files');
const destFolder = getPathFromFile(import.meta.url, '/files_copy');

export const copy = async () => {
  try {
    await mkdir(destFolder);
    const dirFiles = await readdir(sourceFolder);
    await Promise.all(dirFiles.map((i) => copyFile(`${sourceFolder}/${i}`, `${destFolder}/${i}`)));
  } catch (err) {
    throw new Error(FS_ERROR_MESSAGE);
  }
};

copy();