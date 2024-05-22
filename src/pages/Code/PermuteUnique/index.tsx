import React, { useEffect, useState } from 'react';
import { PageHeader } from '@ant-design/pro-components';

import { permuteUnique } from './permuteUnique';
import CodeDisplay from '@/components/CodeDisplay';
import { Button } from 'antd';

const PermuteUnique = () => {
  const [refresh, setRefresh] = useState(false);
  const code = `function permuteUnique(str: string) {
  const result: string[] = [];

  // 将字符串转换为数组并排序，以便去除重复元素
  const chars = str.split('').sort();

  // 递归函数来生成排列
  function permuteHelper(current: string[], remaining: string[]) {
    if (remaining.length === 0) {
      result.push(current.join(''));
      return;
    }

    for (let i = 0; i < remaining.length; i++) {
      // 如果当前字符与前一个相同，则跳过，以避免重复排列
      if (i > 0 && remaining[i] === remaining[i - 1]) continue;

      const next = current.concat(remaining[i]);
      const nextRemaining = remaining.slice(0, i).concat(remaining.slice(i + 1));
      permuteHelper(next, nextRemaining);
    }
  }

  permuteHelper([], chars);

  return result;
}`;

  useEffect(() => {
    const inputString = 'abc';
    const permutations = permuteUnique(inputString);
    console.log(permutations);
  }, [refresh]);

  return (
    <PageHeader
      title="字符串全排列"
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

export default PermuteUnique;
