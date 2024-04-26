// components/CountingSection.js

import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Counting = ({utama=160, koma=5}) => {
  const [ref, inView] = useInView();
  const [count, setCount] = useState(1.0);
  const [countKoma, setCountKoma] = useState(1.0);

  useEffect(() => {
    let currentNumber = 1;
    let currentKoma = 0;
    const targetNumber = utama;
    const targetKoma = koma
    const animationSpeed = 0.1; // milliseconds

    const intervalId = setInterval(() => {
      currentNumber += 1;
      currentKoma += 1
      setCount(currentNumber);
      setCountKoma(prevCount => (prevCount + 1) % 10)
      if (currentNumber >= targetNumber) {
        setCountKoma(targetKoma)
        clearInterval(intervalId);
      }
    }, animationSpeed);

    return () => {
      clearInterval(intervalId);
    };
  }, [inView]);

  return (
    <div ref={ref}>
      {inView && `${count}${countKoma && `,${countKoma}`}`}
    </div>
  );
};

export default Counting;
