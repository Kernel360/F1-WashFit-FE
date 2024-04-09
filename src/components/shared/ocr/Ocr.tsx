'use client';

/* eslint-disable @next/next/no-async-client-component */
import { createWorker } from 'tesseract.js';

const Ocr = async () => {
  // const tesseract = require('node-tesseract-ocr');

  const worker = await createWorker('eng+kor', 1, {});
  const Img = async ({ file }: { file: File }) => {
    const {
      data: { text },
    } = await worker.recognize(file);
    // console.log(text);
    await worker.terminate();
    return text;
  };

  return { Img };
};

export default Ocr;
