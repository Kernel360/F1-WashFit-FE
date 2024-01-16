import BackArrow from '@components/icons/BackArrow';
import Text from '@components/shared/text/Text';

interface LeftIconProps {
  className: string;
  displayRightIcon?: boolean;
}

function LeftIcon({ className, displayRightIcon }: LeftIconProps) {
  return (
    <ul className={className}>
      <li>
        <BackArrow />
      </li>
      {displayRightIcon && (
      <li>
        <Text>홈</Text>
      </li>
      )}
    </ul>
  );
}
export default LeftIcon;
