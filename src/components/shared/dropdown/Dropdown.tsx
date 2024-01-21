'use client';

import { InputHTMLAttributes, forwardRef, useState } from 'react';

import classNames from 'classnames/bind';

import useOutsideClick from '@/hooks/useOutsideClick';
import Expand from '@components/icons/Expand';
import Text from '@shared/text/Text';

import styles from './Dropdown.module.scss';

const cx = classNames.bind(styles);

interface Option {
  label: string
  value: string | number | undefined
}

interface DropdownProps extends InputHTMLAttributes<HTMLInputElement> {
  options: Option[]
  selectedLabel: string | number
  value?: string | number
  type: 'favorite'
  setSelectedLabel: React.Dispatch<React.SetStateAction<string>>
}

const Dropdown = forwardRef<HTMLInputElement, DropdownProps>(({
  selectedLabel,
  type,
  options,
  value,
  setSelectedLabel,
  ...props
}, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  const openDropdownMenu = () => {
    setIsOpen((prev) => { return !prev; });
  };

  const closeDropdownMenu = () => {
    setIsOpen(false);
  };

  const handleLabelClick = (newLabel: string) => {
    setSelectedLabel(() => { return newLabel; });
    closeDropdownMenu();
  };

  const containerRef = useOutsideClick(closeDropdownMenu);

  return (
    <div className={cx('container', { [type]: true })} ref={containerRef}>
      <button onClick={openDropdownMenu} className={cx('selectedValue', { [type]: true })}>
        <Text typography="t6" color="tertiary400">{selectedLabel}</Text>
        <Expand isRotate={isOpen} color="tertiary400" />
      </button>
      {isOpen && (
        <ul className={cx('menu', { [type]: true })}>
          {options.map((option) => {
            return (
              <li key={option.value} className={cx('item', { [type]: true })}>
                <input
                  className={cx('input')}
                  id={option.label}
                  type="radio"
                  ref={ref}
                  value={option.value}
                  checked={selectedLabel === option.label}
                  {...props}
                />
                <label
                  className={cx('label', { [type]: true })}
                  htmlFor={option.label}
                  onClick={() => { return handleLabelClick(option.label); }}
                  role="presentation"
                >
                  {option.label}
                </label>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
});

export default Dropdown;
