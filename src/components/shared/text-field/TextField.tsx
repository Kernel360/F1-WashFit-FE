/* eslint-disable jsx-a11y/aria-props */
import {
  InputHTMLAttributes, forwardRef, useState, FocusEventHandler,
} from 'react';

import Input from '@shared/Input/Input';
import Spacing from '@shared/spacing/Spacing';
import Text from '@shared/text/Text';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode
  hasError?: boolean
  helpMessage?: React.ReactNode
  required?: boolean
  isPasswordType?: boolean
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(({
  label, hasError, helpMessage, required, onFocus, onBlur, isPasswordType = false, ...props
}, ref) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [focused, setFocused] = useState(false);

  const handleFocus: FocusEventHandler<HTMLInputElement> = (event) => {
    setFocused(true);
    onFocus?.(event);
  };

  const handleBlur: FocusEventHandler<HTMLInputElement> = (event) => {
    setFocused(false);
    onBlur?.(event);
  };

  // eslint-disable-next-line no-nested-ternary
  return (
    <div>
      {label && <Text typography="t6" display="inline-block" color="gray500" css={{ marginLeft: '15px' }}>{label}</Text>}
      {required && <Text typography="t6" display="inline-block" color="red">*</Text>}
      <Spacing size={4} />
      <Input
        ref={ref}
        aria-invalid={hasError}
        onFocus={handleFocus}
        onBlur={handleBlur}
        isPasswordType={isPasswordType}
        {...props}
      />
      {hasError ? <Spacing size={5} /> : <Spacing size={24} />}
      {hasError && (
        <>
          <Text typography="t8" color="red" display="inline-block" css={{ marginLeft: '15px' }}>{helpMessage}</Text>
          <Spacing size={7} />
        </>
      )}
    </div>
  );
});

export default TextField;
