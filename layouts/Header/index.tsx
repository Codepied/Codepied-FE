import ToggleTheme from 'layouts/ToggleTheme';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import { userNicknameAtom } from 'atoms/atom';
import { useEffect, useState } from 'react';
import styles from './header.module.scss';

function Header() {
  const [nick, setNick] = useState('');
  const user = useRecoilValue(userNicknameAtom);

  useEffect(() => {
    if (user) {
      localStorage.setItem('nickname', user);
    }
  }, [user]);

  useEffect(() => {
    const nickName = localStorage.getItem('nickname');

    setNick(nickName || '');
  }, []);

  return (
    <header className={styles.header}>
      Codepied
      <Link href="login">
        <a>Login</a>
      </Link>
      <ToggleTheme />
      {nick}
    </header>
  );
}

export default Header;
