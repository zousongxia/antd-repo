import React, { useEffect } from 'react';
import { PageHeader } from '@ant-design/pro-components';

import { bubbleSort } from './bubbleSort';
import CodeDisplay from '@/components/CodeDisplay';

const BubbleSort = () => {
  const code = `function bubbleSort(arr: number[]) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}`;

  useEffect(() => {
    const originArr = [56, 23, 34, 144, 1, 23, 112, 86, 55, 55];
    const sortArr = bubbleSort(originArr);
    console.log('原数组', originArr);
    console.log('冒泡排序', sortArr);
  }, []);

  return (
    <PageHeader title="冒泡排序">
      <CodeDisplay code={code} />
    </PageHeader>
  );
};

export default BubbleSort;
