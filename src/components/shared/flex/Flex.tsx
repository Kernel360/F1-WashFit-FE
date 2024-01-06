import { CSSProperties, useMemo } from 'react';

interface FlexProps {
  align?: CSSProperties['alignItems']
  justify?: CSSProperties['justifyContent']
  direction?: CSSProperties['flexDirection']
  children: React.ReactNode
}

function Flex({
  align, justify, direction, children,
}: FlexProps) {
  const styles = useMemo(() => {
    return {
      display: 'flex', alignItems: align, justifyContent: justify, flexDirection: direction,
    };
  }, [align, justify, direction]);

  return (
    <div style={styles}>
      {children}
    </div>
  );
}

export default Flex;
