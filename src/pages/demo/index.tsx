import React from 'react';
import styles from './index.less';

import { CellLimit } from 'anice-ui';

export default () => {
  return (
    <div style={{ padding: 20 }}>
      <h1 className={styles.title}>Page index</h1>
      {/* <Section title="测试" iconType="power">
        
      </Section> */}

      <CellLimit width={200}>
        我的内容很长很长很长很长很长很长很长很长很长
      </CellLimit>
    </div>
  );
};
