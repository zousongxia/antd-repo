import React, { useState } from 'react';
import { PageHeader } from '@ant-design/pro-components';

import { Button, Tabs } from 'antd';
import type { TabsProps } from 'antd';
import OutputPerSecondCode from './OutputPerSecondCode';
import TrafficLights from './TrafficLights';

const PromiseExercise = () => {
  const [refresh, setRefresh] = useState(false);

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: '每秒输出',
      children: <OutputPerSecondCode />,
    },
    {
      key: '2',
      label: '红绿灯',
      children: <TrafficLights />,
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
