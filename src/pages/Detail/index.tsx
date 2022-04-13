import React from 'react';
import { history } from 'umi';
import styles from './index.less';

export default function DetailContainer() {
  const { location } = history;
  console.log(location, 'sadasd');
  return (
    <div className={styles.detail_wrapper}>
      <div className={styles.detail_bg}></div>
    </div>
  );
}
