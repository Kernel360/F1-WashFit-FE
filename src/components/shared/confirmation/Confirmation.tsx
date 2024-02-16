'use client';

import { useRouter } from 'next/navigation';

import { ConfirmationType } from '@constants/completeMessage';
import Button from '@shared/button/Button';
import Flex from '@shared/flex/Flex';
import Spacing from '@shared/spacing/Spacing';
import Text from '@shared/text/Text';

import './Confirmation.scss';

interface ConfirmationProps extends ConfirmationType {
  topMargin:number
  bottomMargin:number
  isHeader?:boolean
}

function Confirmation({
  options, title, description, topMargin, bottomMargin, isHeader = false,
}:ConfirmationProps) {
  const router = useRouter();
  const mainContainerStyle = {
    height: `calc(100vh - ${topMargin + bottomMargin + (isHeader ? 44 : 0)}px)`,
  };

  return (
    <main className="mainContainer">
      <Spacing size={topMargin} />
      <section className="confirmationContainer" style={mainContainerStyle}>
        <div className="titleWrapper">
          <Text typography="t3" bold color="gray900" display="block" textAlign="start">
            {title}
          </Text>
          <Spacing size={8} />
          <Text display="block" typography="t6" color="gray500" textAlign="start">
            {description}
          </Text>
        </div>
        <Flex direction="column" gap={12} className="buttonWrapper">
          {Object.entries(options).map(([key, value]) => {
            return (
              <Button key={key} size="large" full onClick={() => { return router.push(`/${key}`); }}>
                {value}
              </Button>
            );
          })}
        </Flex>
      </section>
      <Spacing size={bottomMargin} />
    </main>
  );
}
export default Confirmation;
