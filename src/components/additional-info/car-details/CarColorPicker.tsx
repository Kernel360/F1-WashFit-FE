import { FieldValues, UseFormRegister } from 'react-hook-form';

import classNames from 'classnames/bind';
import dynamic from 'next/dynamic';

import ColorPicker from '@components/additional-info/car-details/color-picker/ColorPicker';
import Description from '@components/additional-info/description/Description';
import { AdditionalInfoType } from '@remote/api/types/additional-info';
import Spacing from '@shared/spacing/Spacing';

import styles from './CarColorPicker.module.scss';

const FixedBottomButton = dynamic(() => { return import('@shared/fixedBottomButton/FixedBottomButton'); }, {
  ssr: false,
});

const cx = classNames.bind(styles);

interface CarColorPickerProps {
  onClick: () => void
  main: string
  sub: string
  options: AdditionalInfoType
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
        {options.value.map((option) => {
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
        disabled={!dirtyFields[options.value[0].upperName] ?? false}
        onClick={onClick}
      >
        계속하기
      </FixedBottomButton>
    </>
  );
}

export default CarColorPicker;
