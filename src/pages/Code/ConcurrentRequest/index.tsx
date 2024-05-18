import { PageHeader } from '@ant-design/pro-components';
import { Card } from 'antd';
import React, { useEffect } from 'react';
import { myLimitPromise } from './concurrentRequest';

const requestURL = Array.from({ length: 10 }, (_, k) => `/api/code/concurrent?key=${k + 1}`);

function ConcurrentRequest() {
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
  }, []);

  return (
    <PageHeader title="并发请求">
      <Card />
    </PageHeader>
  );
}

export default ConcurrentRequest;
