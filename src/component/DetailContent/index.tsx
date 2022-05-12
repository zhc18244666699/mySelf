import React, { useState, useEffect } from 'react';
import DetailContainer_1 from './1';
import DetailContainer_2 from './2';
import DetailContainer_3 from './3';
import styles from './index.less';

type propsType = {
  detailId: number;
};

export default function DetailContent(props: propsType) {
  const [id, setId] = useState<any>(props.detailId);

  const renderDetail = (id: any) => {
    switch (id) {
      case 1:
        return <DetailContainer_1 />;
      case 2:
        return <DetailContainer_2 />;
      case 3:
        return <DetailContainer_3 />;
      default:
        return <DetailContainer_1 />;
    }
  };

  return (
    <div className={styles.detail_content_wrapper}>{renderDetail(id)}</div>
  );
}
