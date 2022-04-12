import React, { useState, useEffect } from 'react';
import MobileHeaderContainer from '@/component/MHeader';
import CardContainer from '@/component/Card';
import dataJson from '@/service/cardData.json';
import styles from './index.less';

export default function MobileContainer() {
  let scrollTop = 0;
  let topValue = 0;

  const [data, setData] = useState<any>(dataJson);
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
    <div className={styles.MO_wrapper}>
      <MobileHeaderContainer
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
      <div className={styles.MO_bg}>
        <h5 className={styles.MO_title}>栀 桥</h5>
      </div>
      <div className={styles.MO_content}>
        {data.map((item: any) => {
          return <CardContainer item={item} />;
        })}
      </div>
    </div>
  );
}
