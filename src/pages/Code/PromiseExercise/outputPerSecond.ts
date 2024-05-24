function outputPerSecond() {
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
}

export { outputPerSecond };
