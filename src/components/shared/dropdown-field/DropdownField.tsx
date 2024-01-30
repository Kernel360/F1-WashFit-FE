import { InputHTMLAttributes, forwardRef } from 'react';

import Dropdown from '@shared/dropdown/Dropdown';
import Spacing from '@shared/spacing/Spacing';
import Text from '@shared/text/Text';

interface Option {
  label: string
  value: string | number | undefined
}

interface DropdownFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  options: Option[]
  selectedLabel: string | number
  type: 'favorite' | 'profile'
}

// eslint-disable-next-line max-len
const DropdownField = forwardRef<HTMLInputElement, DropdownFieldProps>(({
  label, options, selectedLabel, type, ...props
}, ref) => {
  return (
    <div>
      <Text typography="t6" display="block" color="gray500" css={{ marginLeft: '15px' }}>{label}</Text>
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
