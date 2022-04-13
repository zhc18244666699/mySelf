import React, { useState, useEffect } from 'react';
import MobileHeaderContainer from '@/component/MHeader';
import CardContainer from '@/component/Card';
import { CaretUpFilled } from '@ant-design/icons';
import { message } from 'antd';
import cardJson from '@/service/cardData.json';
import CalendarContainer from '@/component/Calendar';
import UserCard from '@/component/UserCard';
import FooterContainer from '@/component/Footer';
import styles from './index.less';

export default function MobileContainer() {
  let scrollTop = 0;
  let topValue = 0;

  const [data, setData] = useState<any>(cardJson);
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

  const handletoTop = () => {
    message.error('不好意思，暂时还不可以回到顶部，动动您的手指把！');
    // if (document?.getElementsByTagName("body") && document?.getElementsByTagName("body")[0]) {
    //   console.log(document?.getElementsByTagName("body")[0], 'asd')
    //   document?.getElementsByTagName("body")[0]?.scrollTo({ top: 0, behavior: "smooth" });
    // }
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
        <div className={styles.MO_content_left}>
          {data.map((item: any) => {
            return <CardContainer key={item.id} flex={false} item={item} />;
          })}
        </div>
        <div className={styles.MO_content_right}>
          <div className={styles.MO_content_right_userInfo}>
            <UserCard avatarWidth="20%" />
          </div>
          <div className={styles.MO_content_right_calendar}>
            <CalendarContainer />
          </div>
        </div>
      </div>
      <FooterContainer />
      <div
        style={{ right: pageY > 30 ? '4px' : '-28px' }}
        className={styles.MO_scroll}
      >
        <CaretUpFilled
          onClick={() => {
            handletoTop();
          }}
        />
      </div>
    </div>
  );
}
