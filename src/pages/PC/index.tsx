import React from 'react';
import HeaderContainer from '@/component/Header/index';
import styles from './index.less';

export default function PCContainer() {
  return (
    <div className={styles.PC_wrapper}>
      <HeaderContainer />
      <div className={styles.PC_bg}>
        <h5 className={styles.PC_title}>栀 桥</h5>
      </div>
      PC
    </div>
  );
}
