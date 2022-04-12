import { Typography } from 'antd';

const { Paragraph } = Typography;
import styles from './index.less';

type propsType = {
  item?: itemType;
  flex?: boolean;
};

type itemType = {
  title: string;
  content: string;
  time: string;
  img: string;
};

export default function CardContainer(props: propsType) {
  const { item, flex } = props;
  return (
    <div className={styles.card_wrapper}>
      <dl
        className={styles.card_wrapper_dl}
        style={{ display: flex ? 'flex' : '' }}
      >
        <dt className={styles.card_wrapper_dt}>
          <img src={item?.img} alt="" />
        </dt>
        <dd className={styles.card_wrapper_dd}>
          <h5>{item?.title}</h5>
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
