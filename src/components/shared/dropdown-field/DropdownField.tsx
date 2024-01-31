import { InputHTMLAttributes, forwardRef } from 'react';

import Dropdown from '@shared/dropdown/Dropdown';
import Spacing from '@shared/spacing/Spacing';
import Text from '@shared/text/Text';
import { COMMON_FIELD_MARGIN } from '@styles/variable';

interface Option {
  label: string
  value: string | number | undefined
}

interface DropdownFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  options: Option[]
  selectedLabel: string | number
  type: 'favorite' | 'profile'
  required?: boolean
}

// eslint-disable-next-line max-len
const DropdownField = forwardRef<HTMLInputElement, DropdownFieldProps>(({
  label, required, options, selectedLabel, type, ...props
}, ref) => {
  return (
    <div>
      {label && <Text typography="t6" display="inline-block" color="gray500" css={{ marginLeft: COMMON_FIELD_MARGIN }}>{label}</Text>}
      {required && <Text typography="t6" display="inline-block" color="red">*</Text>}
      <Spacing size={4} />
      <Dropdown
        selectedLabel={selectedLabel}
        type={type}
        options={options}
        {...props}
        ref={ref}
      />
    </div>
  );
});

export default DropdownField;
