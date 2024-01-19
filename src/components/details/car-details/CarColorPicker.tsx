import { FieldValues, UseFormRegister } from 'react-hook-form';

import classNames from 'classnames/bind';

import ColorPicker from '@details/color-picker/ColorPicker';
import Description from '@details/description/Description';
import { IDetails } from '@remote/api/types/details';
import FixedBottomButton from '@shared/fixedBottomButton/FixedBottomButton';
import Spacing from '@shared/spacing/Spacing';

import styles from './CarColorPicker.module.scss';

const cx = classNames.bind(styles);

interface CarColorPickerProps {
  onClick: () => void
  main: string
  sub: string
  options: IDetails[]
  register: UseFormRegister<FieldValues>;
  dirtyFields: Record<string, boolean>
}

function CarColorPicker({
  onClick,
  main,
  sub,
  options,
  register,
  dirtyFields,
}: CarColorPickerProps) {
  return (
    <>
      <Description main={main} sub={sub} />
      <Spacing size={40} />
      <div className={cx('colorPickerContainer')}>
        {options?.map((option) => {
          return (
            <ColorPicker
              key={option.codeNo}
              label={option.description}
              value={option.codeName}
              color={option.codeName}
              {...register(option.upperName, {
                required: true,
              })}
            />
          );
        })}
      </div>
      <Spacing size={190} />
      <FixedBottomButton
        disabled={!dirtyFields[options[0].upperName] ?? false}
        onClick={onClick}
      >
        계속하기
      </FixedBottomButton>
    </>
  );
}

export default CarColorPicker;
