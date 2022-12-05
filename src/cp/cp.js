import { spawn } from 'node:child_process';
import getPathFromFile from '../utils/getPathFromFile.js';

const scriptPath = getPathFromFile(import.meta.url, '/files/script.js');

export const spawnChildProcess = async (args) => {
  spawn('node', args, {
    stdio: ['inherit', 'inherit', 'inherit', 'ipc'],
  }).on('message', function(data) {
    console.log(data);
  });
};

spawnChildProcess([scriptPath, 'first-argument', 'second-argument'])
