import React, { useState } from 'react';
import { CheckOutlined, CopyOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import styles from './index.module.less';

const CodeBlockWithCopy = ({ code }: { code: string }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div style={{ position: 'relative' }}>
      <SyntaxHighlighter language="javascript" style={oneLight}>
        {code}
      </SyntaxHighlighter>
      <CopyToClipboard text={code}>
        <Tooltip title={isCopied ? '复制成功' : '复制'}>
          {isCopied ? (
            <CheckOutlined className={styles['copy-icon']} />
          ) : (
            <CopyOutlined className={styles['copy-icon']} onClick={handleCopy} />
          )}
        </Tooltip>
      </CopyToClipboard>
    </div>
  );
};

export default CodeBlockWithCopy;
