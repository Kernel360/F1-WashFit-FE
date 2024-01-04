import Flex from '@shared/flex/Flex';
import Spacing from '@shared/spacing/Spacing';
import Text from '@shared/text/Text';
import { Colors } from '@styles/colorPalette';

interface TitleProps {
  title: string
  description?: string
  descriptionColor?: Colors
  titleIcon?: React.ReactNode
  size?: number
}

function Title({
  title, description, descriptionColor, titleIcon, size = 10,
}: TitleProps) {
  return (
    <Flex direction="column">
      <Flex justify="space-between" align="center">
        <Text typography="t1" bold>{title}</Text>
        {titleIcon}
      </Flex>
      <Spacing size={size} />
      <Text color={descriptionColor}>{description}</Text>
    </Flex>
  );
}

export default Title;
