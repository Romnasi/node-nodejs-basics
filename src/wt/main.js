import { Worker } from 'worker_threads';
import os from 'os';
import getPathFromFile from '../utils/getPathFromFile.js';

const START_VALUE = 10;

const filePath = getPathFromFile(import.meta.url, '/worker.js');

const startWorker = (value) => new Promise((resolve) => {
  const worker = new Worker(filePath, { workerData: value});
  worker.on('message', (data) => {
    resolve({ status: 'resolved', data });
  });
  worker.on('error', (err) => {
    console.error(err);
    resolve({ status: 'error', data: null });
  })
})

export const performCalculations = async () => {
    const logicalCpuNumber = os.cpus().length;
    const calcNumbers = [];
    
    for (let i = 0; i < logicalCpuNumber; i++) {
      calcNumbers.push(START_VALUE + i);
    }

    const threads = calcNumbers.map((number) => startWorker(number));
    Promise.all(threads).then(responses => console.log(responses));
};

performCalculations();