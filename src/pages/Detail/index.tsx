import React, { useState, useEffect } from 'react';
import { history } from 'umi';
import { message } from 'antd';
import data from '@/service/cardData.json';
import HeaderContainer from '@/component/Header';
import DetailContent from '@/component/DetailContent/index';
import FooterContainer from '@/component/Footer';
import styles from './index.less';

export default function DetailContainer() {
  let scrollTop = 0;
  let topValue = 0;

  // @ts-ignore
  const [id] = useState<number>(Number(history.location.query.id));
  const [detailInfo, setDetailInfo] = useState<any>({});

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

  // 首次加载
  useEffect(() => {
    window.addEventListener('scroll', bindHandleScroll);
    return () => {
      window.removeEventListener('scroll', bindHandleScroll);
    };
  }, []);

  useEffect(() => {
    let detail = {};
    data.map((item: any) => {
      if (item.id == id) {
        detail = item;
      }
    });
    setDetailInfo(detail);
  });

  return (
    <div className={styles.detail_wrapper}>
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
      <div
        className={styles.PC_bg}
        style={{ backgroundImage: `url('${detailInfo.img}')` }}
      >
        <h5 className={styles.PC_title}>{detailInfo.title}</h5>
      </div>
      <div className={styles.detail_bg}>
        <DetailContent detailId={id} />
      </div>
      <FooterContainer />
    </div>
  );
}
