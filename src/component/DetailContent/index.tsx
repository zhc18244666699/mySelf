import React, { useState, useEffect } from 'react';
import DetailContainer_1 from './1';
import styles from './index.less';

type propsType = {
  id: number;
};

export default function DetailContent(props: propsType) {
  const [id, setId] = useState<any>(props.id);

  const renderDetail = (id: any) => {
    switch (id) {
      case 1:
        return <DetailContainer_1 />;
      default:
        return <DetailContainer_1 />;
    }
  };

  return (
    <div className={styles.detail_content_wrapper}>{renderDetail(id)}</div>
  );
}
