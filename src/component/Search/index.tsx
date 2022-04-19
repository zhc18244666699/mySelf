import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

type propsType = {
  style?: Object;
  textColor?: string;
};

export default function SearchContainer(props: propsType) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const { textColor = '#000' } = props;
  return (
    <React.Fragment>
      <Button onClick={showModal} type="link" style={{ color: textColor }}>
        <SearchOutlined style={{ color: textColor }} />
        搜索
      </Button>
      <Modal
        footer={false}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        sad
      </Modal>
    </React.Fragment>
  );
}
