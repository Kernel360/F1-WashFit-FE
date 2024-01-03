import { useMemo } from 'react';

import { Colors, colors } from '@styles/colorPalette';

interface SpacingProps {
  size: number
  direction?: 'vertical' | 'horizontal'
  backgroundColor?: Colors
}

function Spacing({ size, direction = 'vertical', backgroundColor }: SpacingProps) {
  const styles = useMemo(() => {
    return {
      width: direction === 'vertical' ? '100%' : `${size}px`,
      height: direction === 'vertical' ? `${size}px` : '100%',
      backgroundColor: backgroundColor && colors[backgroundColor],
    };
  }, [size, direction, backgroundColor]);
  return (
    <div style={styles} />
  );
}

export default Spacing;
