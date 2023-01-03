import Login from 'components/Login';
import styles from './login.module.scss';

function login() {
  const kakaoAuth = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&response_type=code`;

  return (
    <div className={styles.loginContainer}>
      <Login />
      <a href={kakaoAuth}>KAKAO</a>
    </div>
  );
}

export default login;
