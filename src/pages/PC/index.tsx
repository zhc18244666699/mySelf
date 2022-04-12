import React, { useState, useEffect } from 'react';
import HeaderContainer from '@/component/Header/index';
import styles from './index.less';

export default function PCContainer() {
  let scrollTop = 0;
  let topValue = 0;

  const [pageY, setPageY] = useState<number>(0);
  const [scrollBack, setScrollBack] = useState<boolean>(false);

  const getScollTop = () => {
    let scrollTop = 0;
    if (document?.documentElement && document?.documentElement?.scrollTop) {
      scrollTop = document?.documentElement.scrollTop;
    } else if (document?.body) {
      scrollTop = document?.body.scrollTop;
    }
    return scrollTop;
  };

  const bindHandleScroll = () => {
    scrollTop = getScollTop();
    console.log(scrollTop, 'sad');
    if (scrollTop == 0) setScrollBack(false);
    if (scrollTop <= topValue) {
      setScrollBack(true);
    } else {
      setScrollBack(false);
    }
    setPageY(scrollTop);
    setTimeout(function () {
      topValue = scrollTop;
    }, 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', bindHandleScroll);
    return () => {
      window.removeEventListener('scroll', bindHandleScroll);
    };
  }, []);

  return (
    <div className={styles.PC_wrapper}>
      <HeaderContainer
        textColor={scrollBack && pageY ? '#000' : '#FFF'}
        style={{
          color: scrollBack && pageY ? '#000' : '#FFF',
          position: scrollBack ? 'fixed' : 'absolute',
          background:
            scrollBack && pageY
              ? 'rgba(255, 255, 255, 0.7)'
              : 'rgba(255, 255, 255, 0)',
        }}
      />
      <div className={styles.PC_bg}>
        <h5 className={styles.PC_title}>栀 桥</h5>
      </div>
      <div className={styles.PC_content}>
        <div className={styles.PC_content_left}></div>
        <div className={styles.PC_content_right}></div>
      </div>
      PC
    </div>
  );
}
