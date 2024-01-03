import { useMemo } from 'react';

import { Colors, colors } from '@styles/colorPalette';

interface SpacingProps {
  size: number
  direction?: 'vertical' | 'horizontal'
  backgroundColor?: Colors
}

function Spacing({ size = 10, direction = 'horizontal', backgroundColor }: SpacingProps) {
  const styles = useMemo(() => {
    return {
      width: direction === 'horizontal' ? '100%' : `${size}px`,
      height: direction === 'vertical' ? '100%' : `${size}px`,
      backgroundColor: backgroundColor && colors[backgroundColor],
    };
  }, [size, direction, backgroundColor]);
  return (
    <div style={styles} />
  );
}

export default Spacing;
