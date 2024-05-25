function loadImage(url: string) {
  return new Promise((resolve, reject) => {
    const img = new Image();

    img.onload = () => {
      resolve(img);
    };
    img.onerror = () => {
      reject('加载失败' + url);
    };
    img.src = url;
  });
}

function limitLoad(urls: string[], handler: typeof loadImage, limit: number) {
  const queue = [...urls];
  const promise = queue.splice(0, limit).map((url, idx) => {
    return handler(url).then(() => {
      return idx;
    });
  });

  queue
    .reduce((pre, url) => {
      return pre
        .then(() => {
          return Promise.race(promise);
        })
        .then((idx) => {
          promise[idx] = handler(url).then(() => {
            return idx;
          });
        });
    }, Promise.resolve())
    .then(() => Promise.all(promise));
}

export { limitLoad, loadImage };
