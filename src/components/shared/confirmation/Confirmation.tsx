'use client';

import { useRouter } from 'next/navigation';

import { ConfirmationType } from '@constants/completeMessage';
import Button from '@shared/button/Button';
import Flex from '@shared/flex/Flex';
import Spacing from '@shared/spacing/Spacing';
import Text from '@shared/text/Text';

import './Confirmation.scss';

interface ConfirmationProps extends ConfirmationType {}

function Confirmation({ options, title, description }:ConfirmationProps) {
  const router = useRouter();

  return (
    <div className="confirmationContainer">
      <div className="titleWrapper">
        <Text typography="t1" bold display="block" textAlign="start">
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
    </div>
  );
}
export default Confirmation;
