'use client';

import { ButtonHTMLAttributes, useState } from 'react';

import classNames from 'classnames/bind';

import Expand from '@components/icons/Expand';
import useOutsideClick from '@hooks/useOutsideClick';
import Text from '@shared/text/Text';

import styles from './Dropdown.module.scss';

const cx = classNames.bind(styles);

interface IOption {
  label: string
  value: string | number | undefined
}

interface DropdownProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  options: IOption[]
  selectedLabel: string | number
  type: 'favorite' | 'profile'
  handleSelectedValue: (value: string | number) => void
}

function Dropdown({
  selectedLabel,
  type,
  options,
  handleSelectedValue,
  ...props
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openDropdownMenu = () => {
    setIsOpen((prev) => { return !prev; });
  };

  const closeDropdownMenu = () => {
    setIsOpen(false);
  };

  const containerRef = useOutsideClick(closeDropdownMenu);

  const onClickDropdownItem = (value: string | number) => {
    handleSelectedValue(value);
    closeDropdownMenu();
  };

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
                <button type="button" onClick={() => { return onClickDropdownItem(option.label); }} {...props}>{option.label}</button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
