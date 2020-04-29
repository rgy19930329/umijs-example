import React from 'react';
import styles from './index.less';

import { Label } from 'anice-ui';
import { Button } from 'antd';

export default () => {
  return (
    <div style={{ padding: 20 }}>
      <h1 className={styles.title}>Page index</h1>
      <div>
        <Label title="title" value="ranguangyu" />
        <Button type="primary">test</Button>
      </div>
    </div>
  );
};
