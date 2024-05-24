import React, { useEffect } from 'react';

import CodeDisplay from '@/components/CodeDisplay';
import { trafficLightsRun } from './trafficLights';

const TrafficLights = () => {
  const trafficLightsCode = `function red() {
  console.log('red');
}
function green() {
  console.log('green');
}
function yellow() {
  console.log('yellow');
}

function trafficLights(fn: () => void, time: number) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      fn();
      resolve();
    }, time);
  });
}

function step() {
  Promise.resolve()
    .then(() => {
      return trafficLights(red, 3000);
    })
    .then(() => {
      return trafficLights(yellow, 2000);
    })
    .then(() => {
      return trafficLights(green, 1000);
    })
    .then(() => {
      return step();
    });
}
step();`;

  useEffect(() => {
    trafficLightsRun();
  }, []);

  return <CodeDisplay code={trafficLightsCode} />;
};

export default TrafficLights;
