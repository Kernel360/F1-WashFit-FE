import { CSSProperties, useMemo } from 'react';

interface FlexProps {
  align?: CSSProperties['alignItems']
  justify?: CSSProperties['justifyContent']
  direction?: CSSProperties['flexDirection']
  children: React.ReactNode
  gap?: number
  className?: string
}

function Flex({
  align, justify, direction, children, className, gap = 0,
}: FlexProps) {
  const styles = useMemo(() => {
    return {
      display: 'flex', alignItems: align, justifyContent: justify, flexDirection: direction, gap: `${gap}px`,
    };
  }, [align, justify, direction, gap]);

  return (
    <div style={styles} className={className}>
      {children}
    </div>
  );
}

export default Flex;
