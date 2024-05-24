import { history } from '@umijs/max';
import { Button, Result } from 'antd';
import React from 'react';

const NoFoundPage: React.FC = () => (
  <Result
    status="404"
    title="404"
    subTitle="页面不存在"
    extra={
      <Button type="primary" onClick={() => history.push('/')}>
        返回主页面
      </Button>
    }
  />
);

export default NoFoundPage;
