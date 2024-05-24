function red() {
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

function trafficLightsRun() {
  const date = Date.now();
  console.log('date', date);

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
        const now = Date.now();
        console.log('now', now, now - date);
        if (now - date < 10 * 1000) {
          return step();
        }
      });
  }
  step();
}

export { trafficLightsRun };
