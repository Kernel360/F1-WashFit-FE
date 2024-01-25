/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

import throttle from 'lodash/throttle';

const useScroll = (): boolean => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      setIsScrolled(() => {
        return window.scrollY > 1;
      });
    }, 300);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isScrolled;
};

export default useScroll;
