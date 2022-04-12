import { Button } from 'antd';
import { SearchOutlined, HomeOutlined } from '@ant-design/icons';
import { history } from 'umi';
import styles from './index.less';

export default function HeaderContainer() {
  return (
    <div className={styles.header_wrapper}>
      <div className={styles.header_wrapper_left}>
        <span
          onClick={() => {
            history.push('/');
          }}
          style={{ cursor: 'pointer' }}
        >
          栀桥
        </span>
        <span style={{ color: '#ccc', fontSize: '12px', marginLeft: '10px' }}>
          记录一点
        </span>
      </div>
      <div className={styles.header_wrapper_right}>
        <Button type="link">
          <SearchOutlined />
          搜索
        </Button>
        <Button
          onClick={() => {
            history.push('/');
          }}
          type="link"
        >
          <HomeOutlined />
          首页
        </Button>
      </div>
    </div>
  );
}
