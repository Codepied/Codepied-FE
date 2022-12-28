import { useState, useEffect } from 'react';
import styles from './toggleTheme.module.scss';

function ToggleTheme() {
  const [current, setCurrent] = useState<string | null>(null);
  const [mode, setMode] = useState<string | null>(null);

  useEffect(() => {
    setCurrent(localStorage.getItem('theme'));
  }, []);

  useEffect(() => {
    const theme = localStorage.getItem('theme');

    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  useEffect(() => {
    const currentTheme = document.documentElement.getAttribute('data-theme');

    let targetTheme = 'light';

    if (currentTheme === 'light') {
      targetTheme = 'dark';
    }

    document.documentElement.setAttribute('data-theme', targetTheme);
    localStorage.setItem('theme', targetTheme);
  }, [mode]);

  const handleTheme = () => {
    if (mode === 'dark' || current === 'dark') {
      setMode('light');
      setCurrent('light');
    } else {
      setMode('dark');
      setCurrent('dark');
    }
  };

  return (
    <button className={styles.toggle} type="button" onClick={handleTheme}>
      {mode === null ? current : mode}
    </button>
  );
}

export default ToggleTheme;
