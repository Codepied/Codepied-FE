import Link from 'next/link';
import styles from './header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      Codepied
      <Link href="login">
        <a>Login</a>
      </Link>
    </header>
  );
}

export default Header;
