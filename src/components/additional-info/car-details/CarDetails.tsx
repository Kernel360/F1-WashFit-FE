import { FieldValues, UseFormRegister } from 'react-hook-form';

import dynamic from 'next/dynamic';

import Description from '@components/additional-info/description/Description';
import { IAdditionalInfo } from '@remote/api/types/additional-info';
import Flex from '@shared/flex/Flex';
import Radio from '@shared/radio/Radio';
import Spacing from '@shared/spacing/Spacing';

const FixedBottomButton = dynamic(() => { return import('@shared/fixedBottomButton/FixedBottomButton'); }, {
  ssr: false,
});

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
    <section className="mainContainer">
      <Description main={main} sub={sub} />
      <Spacing size={40} />
      <div style={{ margin: '0 20px' }}>
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
      </div>
      <FixedBottomButton
        disabled={!dirtyFields[options[0].upperName] ?? false}
        onClick={onClick}
      >
        계속하기
      </FixedBottomButton>
    </section>
  );
}

export default CarDetails;
