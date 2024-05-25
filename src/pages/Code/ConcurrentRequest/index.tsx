import { PageHeader } from '@ant-design/pro-components';
import React, { useEffect, useState } from 'react';
import { myLimitPromise } from './concurrentRequest';
import CodeDisplay from '@/components/CodeDisplay';
import { Button } from 'antd';

export const requestURL = Array.from({ length: 10 }, (_, k) => `/api/code/concurrent?key=${k + 1}`);

function ConcurrentRequest() {
  const [refresh, setRefresh] = useState(false);
  const code = `function myLimitPromise(urls: string[] = [], limit: number = 3) {
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
}`;
  useEffect(() => {
    // limitConcurrency(requestURL, 3)
    //   .then((responses: any[]) => {
    //     console.log('All requests completed');
    //     responses.forEach((response) => console.log(response));
    //   })
    //   .catch((error: any) => {
    //     console.error('Some request failed', error);
    //   });
    myLimitPromise(requestURL, 3)
      .then((responses: any[]) => {
        console.log('All requests completed');
        responses.forEach((response) => console.log(response));
      })
      .catch((error: any) => {
        console.error('Some request failed', error);
      });
  }, [refresh]);

  return (
    <PageHeader
      title="并发请求"
      extra={
        <Button type="primary" onClick={() => setRefresh(!refresh)}>
          刷新
        </Button>
      }
    >
      <CodeDisplay code={code} />
    </PageHeader>
  );
}

export default ConcurrentRequest;
