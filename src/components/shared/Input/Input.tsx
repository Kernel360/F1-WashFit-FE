import { forwardRef } from 'react';
import './Input.module.scss';

// eslint-disable-next-line prefer-arrow-callback
const Input = forwardRef<HTMLInputElement>(function Input(props, ref) {
  return <input {...props} ref={ref} />;
});

export default Input;
