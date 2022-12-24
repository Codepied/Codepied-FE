import styles from './layout.module.scss';

interface IProps {
  children: JSX.Element;
}

function Layout({ children }: IProps) {
  return <main className={styles.main}>{children}</main>;
}

export default Layout;
