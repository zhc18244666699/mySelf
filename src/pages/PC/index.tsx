import React, { useState, useEffect } from 'react';
import HeaderContainer from '@/component/Header/index';
import { message } from 'antd';
import { CaretUpFilled } from '@ant-design/icons';
import cardJson from '@/service/cardData.json';
import CardContainer from '@/component/Card';
import CalendarContainer from '@/component/Calendar';
import UserCard from '@/component/UserCard';
import FooterContainer from '@/component/Footer';
import styles from './index.less';

export default function PCContainer() {
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
        <div className={styles.PC_content_left}>
          {data.map((item: any) => {
            return <CardContainer key={item.id} item={item} flex={true} />;
          })}
        </div>
        <div className={styles.PC_content_right}>
          <div className={styles.PC_content_right_userInfo}>
            <UserCard avatarWidth="40%" />
          </div>
          <div className={styles.PC_content_right_calendar}>
            <CalendarContainer />
          </div>
        </div>
      </div>
      <FooterContainer />
      <div
        style={{ right: pageY > 30 ? '4px' : '-28px' }}
        className={styles.PC_scroll}
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
