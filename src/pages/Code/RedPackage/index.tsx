import React, { useEffect, useState } from 'react';
import { PageHeader } from '@ant-design/pro-components';

import { redPackage } from './redPackage';
import CodeDisplay from '@/components/CodeDisplay';
import { Button } from 'antd';

const RedPackage = () => {
  const [refresh, setRefresh] = useState(false);
  const code = `function redPackage(total = 100, count = 10) {
  // 初始化一个长度为 count 的数组，每个元素先分配1元
  const packets = Array(count).fill(1);

  // 计算初始分配后剩余的金额
  let remaining = total - count;

  // 随机分发剩余金额给各个红包
  for (let i = 0; i < count - 1; i++) {
      // 在剩余金额范围内随机生成一个金额（注意范围要减去剩余未分配的红包数目）
      const amount = Math.floor(Math.random() * remaining / (count - i - 1));
      // 将这个金额加入当前红包中
      packets[i] += amount;
      // 更新剩余金额
      remaining -= amount;
  }

  // 最后一个红包的金额即为剩余的金额
  packets[count - 1] += remaining;

  return packets;
}`;

  useEffect(() => {
    const result = redPackage(100, 10);
    const sum = result.reduce((pre, cur) => pre + cur, 0);
    console.log('随机红包:', result, '红包总金额', sum); // 输出一个包含10个元素的数组，总和为100
  }, [refresh]);

  return (
    <PageHeader
      title="随机分配红包"
      subTitle="实现一个随机分发红包的函数function redPackage(total = 100,count = 10){} //返回一个数组a,a.length = count，且元素总和为100"
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

export default RedPackage;
