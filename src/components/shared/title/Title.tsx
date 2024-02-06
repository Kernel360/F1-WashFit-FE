import { Typography } from '@/styles/typography';
import Flex from '@shared/flex/Flex';
import Spacing from '@shared/spacing/Spacing';
import Text from '@shared/text/Text';
import { Colors } from '@styles/colorPalette';

interface TitleProps {
  title: React.ReactNode
  titleSize?: Typography
  description?: React.ReactNode
  descriptionColor?: Colors
  titleIcon?: React.ReactNode
  size?: number
}

function Title({
  title, titleSize = 't1', description, descriptionColor, titleIcon, size = 8,
}: TitleProps) {
  return (
    <Flex direction="column">
      <Flex justify="space-between" align="center">
        <Text typography={titleSize} bold>{title}</Text>
        {titleIcon}
      </Flex>
      <Spacing size={size} />
      <Text typography="t6" color={descriptionColor}>{description}</Text>
    </Flex>
  );
}

export default Title;
