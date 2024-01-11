function logOnDev(message: string) {
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line
    console.log(message);
  }
}

export default logOnDev;
