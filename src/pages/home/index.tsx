import React from 'react';
import styles from './index.less';

// import { Label, Section } from 'anice-ui';
import { Button, message } from 'antd';

export default () => {
  return (
    <div style={{ padding: 20 }}>
      <h1 className={styles.title}>Page index</h1>
      {/* <Section title="测试" iconType="house">
        <Label title="title" value="ranguangyu" />
        <Button type="primary" onClick={() => message.success("测试测试....")}>press me</Button>
      </Section> */}
    </div>
  );
};
