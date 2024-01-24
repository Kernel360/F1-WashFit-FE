import {
  useCallback, useEffect, useMemo, useRef, useState,
} from 'react';

import { throttle } from 'lodash';

function useScrollToTop() {
  const [showButton, setShowButton] = useState(false);
  const scrollY = useRef(0);

  const handleScroll = useMemo(() => {
    return throttle(() => {
      if (scrollY.current > 800) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
      scrollY.current = window.scrollY;
    }, 300);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return { showButton, scrollToTop };
}

export default useScrollToTop;
