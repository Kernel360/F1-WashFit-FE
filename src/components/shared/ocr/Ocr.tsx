'use client';

/* eslint-disable @next/next/no-async-client-component */
import { createWorker } from 'tesseract.js';

const Ocr = async () => {
  const worker = await createWorker('eng+kor', 1, {});
  const Img = async () => {
    const {
      data: { text },
    } = await worker.recognize(
      'https://tesseract.projectnaptha.com/img/eng_bw.png',
    );

    // console.log(text);
    await worker.terminate();
    return text;
  };

  return { Img };
};

export default Ocr;
