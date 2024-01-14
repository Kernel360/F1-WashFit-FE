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

// eslint-disable-next-line prefer-arrow-callback
const TextField = forwardRef<HTMLInputElement, TextFieldProps>(function TextField({
  label, hasError, helpMessage, required, onFocus, onBlur, isPasswordType = false, ...props
}, ref) {
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
  const labelColor = hasError ? 'red' : focused ? 'primary' : undefined;
  return (
    <div>
      {label && <Text typography="t6" display="inline-block" color={labelColor}>{label}</Text>}
      {required && <Text typography="t6" display="inline-block" color="red">*</Text>}
      <Spacing size={12} />
      <Input
        ref={ref}
        aria-vaild={hasError}
        onFocus={handleFocus}
        onBlur={handleBlur}
        isPasswordType={isPasswordType}
        {...props}
      />
      {hasError ? <Spacing size={6} /> : <Spacing size={20} />}
      {hasError && (
        <>
          <Text typography="t7" color={labelColor} display="inline-block">{helpMessage}</Text>
          <Spacing size={6} />
        </>
      )}
    </div>
  );
});

export default TextField;
