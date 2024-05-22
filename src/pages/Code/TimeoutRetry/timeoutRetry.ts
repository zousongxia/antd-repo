import { request } from '@umijs/max';

function requestWithRetry(url: string, maxRetries: number = 3, timeout: number = 5000) {
  let retries = 1;

  function timeoutPromise() {
    return new Promise((_, reject) => {
      setTimeout(() => reject('请求超时'), timeout);
    });
  }

  // function mockPromise() {
  //   return new Promise((resolve, reject) => {
  //     const radom = Math.random();
  //     setTimeout(() => {
  //       if (radom > 0.5) {
  //         resolve('请求成功');
  //       } else {
  //         reject('请求失败');
  //       }
  //     }, 6000);
  //   });
  // }

  function requestPromise() {
    return new Promise((resolve) => {
      request(url, { timeout: 5000 }).then(() => {
        resolve('请求成功');
      });
    });
  }

  return new Promise((resolve, reject) => {
    function run() {
      // 初始请求及重试时判断超时
      Promise.race([requestPromise(), timeoutPromise()])
        .then(() => {
          resolve('请求成功');
        })
        .catch((error) => {
          console.log('Promise.race.error', error);
          if (retries <= maxRetries && error === '请求超时') {
            console.log(`第${retries}次重试`);
            retries++;
            run();
          } else {
            reject(error);
          }
        });
    }
    run();
  });
}

export { requestWithRetry };
