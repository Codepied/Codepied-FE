import Button from 'components/Button';
import LoginInput from 'components/LoginInput';
import useInput from 'customHooks/useInput';
import { useRouter } from 'next/router';
import styles from './login.module.scss';

function Login() {
  const id = useInput('id');
  const password = useInput('password');

  const router = useRouter();

  const handleRegistration = (url: string) => router.push(url);

  return (
    <div className={styles.login}>
      <div className={styles.form}>
        <LoginInput value={id.value} onChange={id.handler} />
        <LoginInput value={password.value} onChange={password.handler} />
        <Button width="50px" height="25px" background="#008000">
          로그인
        </Button>
        <Button
          width="200px"
          height="40px"
          background="#008000"
          onClick={() => handleRegistration('sign-up')}
        >
          회원가입
        </Button>
      </div>
      <div className={styles.image}>1</div>
    </div>
  );
}

export default Login;
