import Flex from '@shared/flex/Flex';
import Spacing from '@shared/spacing/Spacing';
import Text from '@shared/text/Text';

interface DescriptionProps {
  main: string
  sub: string
}

function Description({ main, sub }: DescriptionProps) {
  return (
    <Flex direction="column" justify="center" align="center">
      <Text typography="t3" wordBreak="keep-all" textAlign="center" fontWeight={600}>{main}</Text>
      <Spacing size={10} />
      <Text typography="t6" color="tertiary">{sub}</Text>
    </Flex>
  );
}

export default Description;
