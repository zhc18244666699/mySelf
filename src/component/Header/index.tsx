import { Button } from 'antd';
import { SearchOutlined, HomeOutlined } from '@ant-design/icons';
import { history } from 'umi';
import styles from './index.less';

export default function HeaderContainer() {
  return (
    <div className={styles.header_wrapper}>
      <div
        onClick={() => {
          history.push('/');
        }}
        className={styles.header_wrapper_left}
      >
        栀桥
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
