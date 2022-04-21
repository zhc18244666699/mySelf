import React from 'react';
import { Button } from 'antd';
import { history } from 'umi';

export default function NonePage() {
  const handleToHome = () => {
    history.replace('/');
  };
  return (
    <div>
      404
      <Button onClick={handleToHome}>返回首页</Button>
    </div>
  );
}
