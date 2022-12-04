import styles from './header.module.scss';
import { ReactComponent as Logo }  from '../../../assets/next-blue-logo.svg';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <div className={styles['header']}>
      <Logo className={styles['logo']} title="Logo" />
    </div>
  );
}

export default Header;
