import React, { useState } from 'react';
import { SearchOutlined, MenuOutlined, HomeOutlined } from '@ant-design/icons';
import { Drawer, Avatar, Button, Divider } from 'antd';
import styles from './index.less';
import { history } from 'umi';

type propsType = {
  textColor?: string;
  style?: Object;
};

export default function MobileHeaderContainer(props: propsType) {
  const [visible, setVisible] = useState<boolean>(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const { textColor, style } = props;
  return (
    <header style={style} className={styles.M_header_wrapper}>
      <div className={styles.M_header_left}>
        <h5 style={{ color: textColor }}>栀桥</h5>
      </div>
      <div className={styles.M_header_right}>
        <SearchOutlined
          style={{ color: textColor }}
          className={styles.M_header_search}
        />
        <MenuOutlined
          onClick={() => showDrawer()}
          style={{ color: textColor }}
          className={styles.M_header_menu}
        />
      </div>
      <Drawer
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
        size="default"
        width="45%"
        key="right"
      >
        <dl className={styles.M_header_user}>
          <dt>
            <Avatar
              style={{
                border: '2px solid #eee',
                width: '100%',
                height: '100%',
              }}
              src="https://i.postimg.cc/wMtwHDxn/20220317105728.png"
            />
            <h5>栀桥</h5>
          </dt>
          <dd></dd>
        </dl>
        <Divider className={styles.M_header_divider}>目录</Divider>
        <div className={styles.M_header_menu}>
          <Button
            onClick={() => {
              history.push('/');
              onClose();
            }}
            key="home"
            type="link"
          >
            <HomeOutlined /> 首页
          </Button>
          <Button
            onClick={() => {
              history.push('/class');
              onClose();
            }}
            key="classes"
            type="link"
          >
            <MenuOutlined /> 分类
          </Button>
        </div>
      </Drawer>
    </header>
  );
}
