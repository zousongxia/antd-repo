import { request } from '@umijs/max';

function limitConcurrency(urls: string[] = [], maxConcurrency: number = 3) {
  let index = 0;
  const results: Promise<any>[] = [];
  const activeRequests: Promise<any>[] = [];

  function next(): Promise<any> {
    if (index >= urls.length) {
      return Promise.resolve();
    }

    const url = urls[index++];
    const result = request(url);

    results.push(result);

    const requestPromise = result.then(() => {
      activeRequests.splice(activeRequests.indexOf(requestPromise), 1);
    });

    activeRequests.push(requestPromise);

    let concurrencyPromise = Promise.resolve();

    if (activeRequests.length >= maxConcurrency) {
      concurrencyPromise = Promise.race(activeRequests);
    }

    return concurrencyPromise.then(next);
  }

  return next().then(() => Promise.all(results));
}

function myLimitPromise(urls: string[] = [], limit: number = 3) {
  let index = 0;
  const requestArr: any[] = [];
  const activeArr: any[] = [];

  function run(): Promise<any> {
    if (index >= urls.length) {
      return Promise.resolve();
    }
    const currentRequest = request(urls[index++]);
    requestArr.push(currentRequest);

    const currentRequestPromise = currentRequest.then(() => {
      activeArr.splice(activeArr.indexOf(currentRequestPromise), 1);
    });

    activeArr.push(currentRequestPromise);

    let currentPromise = Promise.resolve();

    if (activeArr.length >= limit) {
      currentPromise = Promise.race(activeArr);
    }

    return currentPromise.then(run);
  }

  return run()?.then(() => Promise.all(requestArr));
}

export { limitConcurrency, myLimitPromise };
