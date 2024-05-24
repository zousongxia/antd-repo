import React, { useEffect, useState } from 'react';
import { PageHeader } from '@ant-design/pro-components';

import CodeDisplay from '@/components/CodeDisplay';
import { Button, Tabs } from 'antd';
import { outputPerSecond } from './outputPerSecond';
import type { TabsProps } from 'antd';

const PromiseExercise = () => {
  const [refresh, setRefresh] = useState(false);

  const outputPerSecondCode = `function outputPerSecond() {
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
}}`;

  useEffect(() => {
    // const p1 = new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve('resolve3');
    //     console.log('timer1');
    //   }, 0);
    //   resolve('resovle1');
    //   resolve('resolve2');
    // })
    //   .then((res) => {
    //     console.log(res);
    //     setTimeout(() => {
    //       console.log(p1);
    //     }, 1000);
    //   })
    //   .finally(() => {
    //     console.log('finally');
    //   });
    outputPerSecond();
  }, [refresh]);

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: '每秒输出',
      children: <CodeDisplay code={outputPerSecondCode} />,
    },
    {
      key: '2',
      label: 'Tab 2',
      children: 'Content of Tab Pane 2',
    },
    {
      key: '3',
      label: 'Tab 3',
      children: 'Content of Tab Pane 3',
    },
  ];

  return (
    <PageHeader
      title="Promise面试题"
      extra={
        <Button type="primary" onClick={() => setRefresh(!refresh)}>
          刷新
        </Button>
      }
    >
      <Tabs defaultActiveKey="1" items={items} />
    </PageHeader>
  );
};

export default PromiseExercise;
