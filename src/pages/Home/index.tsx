import HeaderContainer from '@/component/Header';
import styles from './index.less';
import { DownOutlined } from '@ant-design/icons';
import './default.less';

export default function HomeContainer() {
  return (
    <div className={styles.home_wrapper}>
      <HeaderContainer />
      <div id={styles.home_bg_id} className={styles.home_bg}>
        <h5>栀桥</h5>
        <DownOutlined className={styles.home_down} />
      </div>
      <div className={styles.home_content}>
        <ul>
          <li>sadasd</li>
          <li>sadasd</li>
          <li>sadasd</li>
          <li>sadasd</li>
        </ul>
      </div>
    </div>
  );
}
