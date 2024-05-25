import React, { useEffect } from 'react';

import CodeDisplay from '@/components/CodeDisplay';
import { limitLoad, loadImage } from './loadImage';

const LoadImage = () => {
  const trafficLightsCode = `function loadImage(url: string) {
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
}`;

  useEffect(() => {
    const urls = [
      'https://cdn.pixabay.com/photo/2024/05/15/08/23/bird-8763079_1280.jpg',
      'https://cdn.pixabay.com/photo/2023/09/02/03/15/water-8228076_1280.jpg',
      'https://cdn.pixabay.com/photo/2024/05/15/12/31/lake-8763490_1280.jpg',
      'https://cdn.pixabay.com/photo/2024/05/09/22/54/penguin-8751952_1280.jpg',
      'https://cdn.pixabay.com/photo/2024/04/29/12/18/nature-8727795_1280.jpg',
      'https://cdn.pixabay.com/photo/2021/07/24/07/25/chow-chow-6488849_1280.jpg',
      'https://cdn.pixabay.com/photo/2024/05/20/17/33/sky-8775846_960_720.png',
      'https://cdn.pixabay.com/photo/2023/11/20/13/21/shape-8401083_1280.png',
      'https://cdn.pixabay.com/photo/2024/03/31/06/16/bird-8666099_1280.jpg',
      'https://cdn.pixabay.com/photo/2021/07/24/07/23/chow-chow-6488846_1280.jpg',
      'https://cdn.pixabay.com/photo/2023/06/14/15/00/sunset-8063358_960_720.jpg',
      'https://cdn.pixabay.com/photo/2023/06/16/15/14/sunset-8068208_1280.jpg',
    ];
    limitLoad(urls, loadImage, 3);
    // limitLoad(requestURL, request, 3);
  }, []);

  return <CodeDisplay code={trafficLightsCode} />;
};

export default LoadImage;
