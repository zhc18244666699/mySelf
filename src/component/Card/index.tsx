import React, { useState } from 'react';
import { Typography } from 'antd';
import { history } from 'umi';

const { Paragraph } = Typography;
import styles from './index.less';

type propsType = {
  item?: itemType;
  flex?: boolean;
};

type itemType = {
  title?: string;
  content?: string;
  time?: string;
  img?: string;
  id?: number | string;
};

export default function CardContainer(props: propsType) {
  const { item, flex } = props;
  const isOdd = Number(item?.id) % 2 === 0 && flex;
  return (
    <div
      style={{ height: flex ? '150px' : '' }}
      className={styles.card_wrapper}
    >
      <dl
        className={`${styles.card_wrapper_dl}, ${
          isOdd ? styles.card_wrapper_dl_reverse : ''
        }`}
        style={{ height: flex ? '100%' : '', display: flex ? 'flex' : '' }}
      >
        <dt
          style={{ width: flex ? '45%' : '100%' }}
          className={styles.card_wrapper_dt}
        >
          <img
            onClick={() => {
              history.push({
                pathname: '/detail',
                ...item,
              });
            }}
            style={{ borderRadius: flex ? '8px 0 0 8px' : '8px 8px 0 0' }}
            src={item?.img}
          />
        </dt>
        <dd className={styles.card_wrapper_dd}>
          <h5
            onClick={() => {
              history.push(`/detail?id=${item?.id}`);
            }}
          >
            {item?.title}
          </h5>
          <div className={styles.card_content}>
            <Paragraph ellipsis={{ rows: 3, expandable: true, symbol: 'more' }}>
              {item?.content}
            </Paragraph>
          </div>
          <div className={styles.card_footer}>
            <span>{item?.time}</span>
          </div>
        </dd>
      </dl>
    </div>
  );
}
