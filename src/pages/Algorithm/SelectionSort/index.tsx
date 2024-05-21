import React, { useEffect, useState } from 'react';
import { PageHeader } from '@ant-design/pro-components';
import { Button } from 'antd';

import { selectionSort } from './selectionSort';
import CodeDisplay from '@/components/CodeDisplay';

const SelectionSort = () => {
  const [refresh, setRefresh] = useState(false);
  const code = `function selectionSort(arr: Array<number>) {
  const sortArr = [...arr];
  for (let i = 0; i < sortArr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < sortArr.length; j++) {
      if (sortArr[j] < sortArr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      [sortArr[i], sortArr[min]] = [sortArr[min], sortArr[i]];
    }
  }
  return sortArr;
}`;

  useEffect(() => {
    const originArr = [56, 23, 34, 144, 1, 23, 112, 86, 55, 55];
    const selectionSortArr = selectionSort(originArr);
    console.log('原数组', originArr);
    console.log('选择排序', selectionSortArr);
  }, [refresh]);

  return (
    <PageHeader
      title="选择排序"
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

export default SelectionSort;
