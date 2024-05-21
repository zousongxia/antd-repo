import React, { useEffect } from 'react';
import { PageHeader } from '@ant-design/pro-components';
// import { Button } from 'antd';

import { quickSort } from './quickSort';
// import CodeEditor from '@/components/CodeEditor';
import CodeDisplay from '@/components/CodeDisplay';

const App = () => {
  // const [edit, setEdit] = useState(false);
  const code = `function quickSort(arr: number[]): number[] {
  const sortArr = [...arr];
  if (sortArr.length <= 1) {
    return sortArr;
  }

  const pivot = sortArr.splice(Math.floor(sortArr.length / 2), 1)[0];

  const left = [];
  const right = [];
  for (const item of sortArr) {
    if (item < pivot) {
      left.push(item);
    } else {
      right.push(item);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}`;
  // const [savedCode, setSavedCode] = useState('');

  // const handleSave = () => {
  //   setSavedCode(code);
  // };

  useEffect(() => {
    const originArr = [56, 23, 34, 144, 1, 23, 112, 86, 55, 55];
    const sortArr = quickSort(originArr);
    console.log('原数组', originArr);
    console.log('快速排序', sortArr);
  }, []);

  return (
    <PageHeader
      title="快速排序"
      // extra={
      //   <Button type="primary" onClick={() => setEdit(!edit)}>
      //     {edit ? '取消' : '编辑'}
      //   </Button>
      // }
    >
      {/* {edit ? <CodeEditor code={code} setCode={setCode} /> : <CodeDisplay code={code} />} */}
      <CodeDisplay code={code} />
    </PageHeader>
  );
};

export default App;
