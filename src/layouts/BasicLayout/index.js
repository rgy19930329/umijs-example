import styles from './index.less';
import classNames from 'classnames';

function BasicLayout(props) {
  return (
    <div>
      <h1 className={classNames(styles.normal, styles.title)}>
        Yay! Welcome to umi!
      </h1>
      {props.children}
    </div>
  );
}

export default BasicLayout;
