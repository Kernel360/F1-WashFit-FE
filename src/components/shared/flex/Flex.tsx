import { CSSProperties, useMemo } from 'react';

interface FlexProps {
  align?: CSSProperties['alignItems']
  justify?: CSSProperties['justifyContent']
  direction?: CSSProperties['flexDirection']
  children: React.ReactNode
  className?: string
}

function Flex({
  align, justify, direction, children, className,
}: FlexProps) {
  const styles = useMemo(() => {
    return {
      display: 'flex', alignItems: align, justifyContent: justify, flexDirection: direction,
    };
  }, [align, justify, direction]);

  return (
    <div style={styles} className={className}>
      {children}
    </div>
  );
}

export default Flex;
