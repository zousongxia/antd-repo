import React, { useEffect, useState } from 'react';
import { PageHeader } from '@ant-design/pro-components';
import { Button } from 'antd';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { quickSort } from './quickSort';

const CodeEditor = ({ code, setCode }: { code: string; setCode: (value: string) => void }) => {
  return (
    <CodeMirror
      value={code}
      extensions={[javascript()]}
      onChange={(value) => {
        console.log('value', value);
        setCode(value);
      }}
    />
  );
};

const CodeDisplay = ({ code }: { code: string }) => {
  return (
    <SyntaxHighlighter language="javascript" style={oneLight}>
      {code}
    </SyntaxHighlighter>
  );
};

const App = () => {
  const [edit, setEdit] = useState(false);
  const [code, setCode] = useState(
    `export function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }
  const pivot = arr.splice(Math.floor(arr.length / 2), 1)[0];

  const left = [];
  const right = [];
  for (const item of arr) {
    if (item < pivot) {
      left.push(item);
    } else {
      right.push(item);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}`,
  );
  // const [savedCode, setSavedCode] = useState('');

  // const handleSave = () => {
  //   setSavedCode(code);
  // };

  useEffect(() => {
    const originArr = [56, 23, 34, 144, 1, 23, 112, 86, 55, 55];
    const sortArr = quickSort(originArr);
    console.log('originArr', originArr);
    console.log('sortArr', sortArr);
  }, []);

  return (
    <PageHeader
      title="快速排序"
      extra={
        <Button type="primary" onClick={() => setEdit(!edit)}>
          {edit ? '取消' : '编辑'}
        </Button>
      }
    >
      {edit ? <CodeEditor code={code} setCode={setCode} /> : <CodeDisplay code={code} />}
    </PageHeader>
  );
};

export default App;
