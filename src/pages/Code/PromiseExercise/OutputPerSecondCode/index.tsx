import React, { useEffect } from 'react';

import CodeDisplay from '@/components/CodeDisplay';
import { outputPerSecond } from './outputPerSecond';

const OutputPerSecondCode = () => {
  const outputPerSecondCode = `function outputPerSecond() {
  const arr = [1, 2, 3];
  arr.reduce(
    (p, k) =>
      p.then(() => {
        return new Promise((resolve) => {
          setTimeout(() => {
            console.log(k);
            resolve();
          }, 1000);
        });
      }),
    Promise.resolve(),
  );
}}`;

  useEffect(() => {
    outputPerSecond();
  }, []);

  return <CodeDisplay code={outputPerSecondCode} />;
};

export default OutputPerSecondCode;
