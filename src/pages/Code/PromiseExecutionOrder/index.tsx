import React, { useEffect, useState } from 'react';
import { PageHeader } from '@ant-design/pro-components';

import CodeDisplay from '@/components/CodeDisplay';
import { Button } from 'antd';

const PromiseExecutionOrder = () => {
  const [refresh, setRefresh] = useState(false);
  const code = `const p1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('resolve3');
    console.log('timer1');
  }, 0);
  resolve('resovle1');
  resolve('resolve2');
})
  .then((res) => {
    console.log(res);
    setTimeout(() => {
      console.log(p1);
    }, 1000);
  })
  .finally(() => {
    console.log('finally');
  });
  
  // resovle1
  // finally
  // timer1
  // Promise {<fulfilled>: undefined}
  `;

  useEffect(() => {
    const p1 = new Promise((resolve) => {
      setTimeout(() => {
        resolve('resolve3');
        console.log('timer1');
      }, 0);
      resolve('resovle1');
      resolve('resolve2');
    })
      .then((res) => {
        console.log(res);
        setTimeout(() => {
          console.log(p1);
        }, 1000);
      })
      .finally(() => {
        console.log('finally');
      });
  }, [refresh]);

  return (
    <PageHeader
      title="Promise执行顺序"
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

export default PromiseExecutionOrder;
