import Link from 'next/link';
import styles from './header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      Codepied
      <Link href="login">Login</Link>
    </header>
  );
}

export default Header;
