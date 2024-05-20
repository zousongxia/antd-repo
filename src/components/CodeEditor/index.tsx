import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

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

export default CodeEditor;
