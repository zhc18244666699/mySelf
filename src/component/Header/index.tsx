import { Button } from 'antd';
import { SearchOutlined, HomeOutlined } from '@ant-design/icons';
import { history } from 'umi';
import styles from './index.less';

type propsType = {
  style?: Object;
  textColor?: string;
};

export default function HeaderContainer(props: propsType) {
  const { style, textColor } = props;
  return (
    <div style={style} className={styles.header_wrapper}>
      <div className={styles.header_wrapper_left}>
        <span
          onClick={() => {
            history.push('/');
          }}
          style={{ cursor: 'pointer', color: textColor }}
        >
          栀桥
        </span>
        <span style={{ color: '#ccc', fontSize: '12px', marginLeft: '10px' }}>
          记录一点
        </span>
      </div>
      <div className={styles.header_wrapper_right}>
        <Button type="link" style={{ color: textColor }}>
          <SearchOutlined style={{ color: textColor }} />
          搜索
        </Button>
        <Button
          onClick={() => {
            history.push('/');
          }}
          type="link"
          style={{ color: textColor }}
        >
          <HomeOutlined style={{ color: textColor }} />
          首页
        </Button>
      </div>
    </div>
  );
}
