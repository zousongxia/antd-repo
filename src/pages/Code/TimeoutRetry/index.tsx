import React, { useEffect, useState } from 'react';
import { PageHeader } from '@ant-design/pro-components';

import { requestWithRetry } from './timeoutRetry';
import CodeDisplay from '@/components/CodeDisplay';
import { Button } from 'antd';

const TimeoutRetry = () => {
  const [refresh, setRefresh] = useState(false);
  const code = `function requestWithRetry(url: string, maxRetries: number = 3, timeout: number = 5000) {
  let retries = 1;

  function timeoutPromise() {
    return new Promise((_, reject) => {
      setTimeout(() => reject('请求超时'), timeout);
    });
  }

  function mockPromise() {
    return new Promise((resolve, reject) => {
      const radom = Math.random();
      setTimeout(() => {
        if (radom > 0.5) {
          resolve('请求成功');
        } else {
          reject('请求失败');
        }
      }, 6000);
    });
  }

  return new Promise((resolve, reject) => {
    function run() {
      // 初始请求及重试时判断超时
      Promise.race([mockPromise(), timeoutPromise()])
        .then(() => {
          resolve('请求成功');
        })
        .catch((error) => {
          console.log('Promise.race.error', error);
          if (retries <= maxRetries && error === '请求超时') {
            retries++;
            run();
          } else {
            reject(error);
          }
        });
    }
    run();
  });
}`;

  useEffect(() => {
    // 使用示例
    const url = '/api/code/timeout-retry';
    const maxRetries = 3;
    const timeout = 5000; // 5秒

    requestWithRetry(url, maxRetries, timeout)
      .then((response) => {
        console.log('Success:', response);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, [refresh]);

  return (
    <PageHeader
      title="接口超时重试"
      extra={
        <Button type="primary" onClick={() => setRefresh(!refresh)}>
          刷新
        </Button>
      }
    >
      <CodeDisplay code={code} />
    </PageHeader>
  );
};

export default TimeoutRetry;
