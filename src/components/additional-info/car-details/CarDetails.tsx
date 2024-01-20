import { FieldValues, UseFormRegister } from 'react-hook-form';

import Description from '@components/additional-info/description/Description';
import { IAdditionalInfo } from '@remote/api/types/additional-info';
import FixedBottomButton from '@shared/fixedBottomButton/FixedBottomButton';
import Flex from '@shared/flex/Flex';
import Radio from '@shared/radio/Radio';
import Spacing from '@shared/spacing/Spacing';

interface CarDetailsProps {
  onClick: () => void
  main: string
  sub: string
  options: IAdditionalInfo[]
  register: UseFormRegister<FieldValues>
  dirtyFields: Record<string, boolean>
}

function CarDetails({
  onClick,
  main,
  sub,
  options,
  register,
  dirtyFields,
}: CarDetailsProps) {
  return (
    <>
      <Description main={main} sub={sub} />
      <Spacing size={40} />
      <Flex direction="column" gap={10}>
        {options?.map((option) => {
          return (
            <Radio
              key={option.codeNo}
              type="additionalInfo"
              label={option.description}
              value={option.codeName}
              {...register(option.upperName, {
                required: true,
              })}
            />
          );
        })}
      </Flex>
      <FixedBottomButton
        disabled={!dirtyFields[options[0].upperName] ?? false}
        onClick={onClick}
      >
        계속하기
      </FixedBottomButton>
    </>
  );
}

export default CarDetails;
