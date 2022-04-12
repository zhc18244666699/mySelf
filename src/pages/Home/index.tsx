import React, { useState, useEffect } from 'react';
import PCContainer from '../PC/index';
import MobileContainer from '../Mobile/index';
import styles from './index.less';
import './default.less';

export default function HomeContainer() {
  const getWindowSize = () => ({
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
  });

  const [windowSize, setWindowSize] = useState(getWindowSize());

  const handleResize = () => {
    setWindowSize(getWindowSize());
  };

  useEffect(() => {
    // 监听
    window.addEventListener('resize', handleResize);
    // 销毁
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.home_wrapper}>
      {windowSize.innerWidth <= 600 ? <MobileContainer /> : <PCContainer />}
    </div>
  );
}
