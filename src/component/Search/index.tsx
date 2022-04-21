import React, { useState, useEffect } from 'react';
import { Button, Modal, Input, Card } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import dataSource from '@/service/cardData.json';
import { history } from 'umi';
import styles from './index.less';

const { Search } = Input;

type propsType = {
  style?: Object;
  textColor?: string;
};

export default function SearchContainer(props: propsType) {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [searchKey, setSearchKey] = useState<string>('');
  const [data] = useState<any>(dataSource);

  const renderHighLightText = (text: string) => {
    if (
      searchKey &&
      searchKey.length &&
      text.indexOf(searchKey) > -1 &&
      searchKey !== text
    ) {
      const temp = text.split(searchKey);
      const dom = [];
      for (let i = 0; i < temp.length - 0.5; i += 0.5) {
        if (Math.floor(i) !== i) {
          dom.push(
            <span key={i} style={{ margin: '0', color: '#3370FF' }}>
              {searchKey}
            </span>,
          );
        } else if (temp[i].length) {
          dom.push(
            <span style={{ margin: '0' }} key={i}>
              {temp[i]}
            </span>,
          );
        }
      }
      return dom;
    } else {
      return (
        <span
          style={{ color: text == searchKey ? '#3370FF' : '', margin: '0' }}
        >
          {text}
        </span>
      );
    }
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleOnSearch = (e: string) => {
    history.push(`/detail?id=${e}`);
  };
  const handleOnChange = (e: any) => {
    setSearchKey(e?.target?.value);
  };

  const handleOnClick = (id: number) => {
    history.push(`/detail?id=${id}`);
  };

  useEffect(() => {}, [searchKey]);

  const { textColor = '#000' } = props;
  return (
    <React.Fragment>
      <Button onClick={showModal} type="link" style={{ color: textColor }}>
        <SearchOutlined style={{ color: textColor }} />
        搜索
      </Button>
      <Modal
        width={700}
        footer={false}
        visible={isModalVisible}
        onOk={handleOk}
        closable={false}
        onCancel={handleCancel}
        style={{ borderRadius: '8px' }}
      >
        <div className={styles.search_input}>
          <Search
            placeholder="来找一找，你想要到的。"
            onSearch={handleOnSearch}
            enterButton
            onChange={handleOnChange}
          />
        </div>
        {searchKey !== '' && (
          <div className={styles.search_content}>
            {data.map((item: any) => {
              return (
                <Card
                  key={item.id}
                  onClick={() => {
                    handleOnClick(item.id);
                  }}
                  className={styles.search_content_card}
                >
                  <h5>{renderHighLightText(item.title)}</h5>
                  <p>{renderHighLightText(item.content)}</p>
                </Card>
              );
            })}
          </div>
        )}
      </Modal>
    </React.Fragment>
  );
}
