import Login from 'components/Login';
import styles from './login.module.scss';

function login() {
  return (
    <div className={styles.loginContainer}>
      <Login />
    </div>
  );
}

export default login;
