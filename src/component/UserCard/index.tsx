import React from 'react';
import { Avatar } from 'antd';
import styles from './index.less';

type propsType = {
  style?: Object;
  avatarWidth?: string;
};

export default function UserCard(props: propsType) {
  return (
    <div className={styles?.userCard} style={props?.style}>
      <Avatar
        style={{
          border: '2px solid #eee',
          width: props?.avatarWidth,
          height: '40%',
        }}
        src="https://i.postimg.cc/wMtwHDxn/20220317105728.png"
      />
      <h5>栀桥</h5>
    </div>
  );
}
