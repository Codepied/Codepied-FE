import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';
import { userNicknameAtom } from 'atoms/atom';

function kakao() {
  const [kakaoAuth, setKaKaoAuth] = useState<string | null>('');

  const router = useRouter();
  const setNickname = useSetRecoilState(userNicknameAtom);

  const handleChangeNickname = (nickname: string) => setNickname(nickname);

  useEffect(() => {
    const auth = new URL(window.location.href).searchParams.get('code');

    setKaKaoAuth(auth);
  }, []);

  useEffect(() => {
    if (kakaoAuth) {
      const data = {
        authorizationCode: kakaoAuth,
      };
      axios
        .post('http://localhost:8080/api/users/auths/login?type=KAKAO', data)
        .then((res) => {
          console.log(res);
          localStorage.setItem('accessToken', res.data.data.accessToken);
          localStorage.setItem('refreshToken', res.data.data.refreshToken);
          handleChangeNickname(res.data.data.nickname);
          router.push('/');
        })
        .catch((error) => console.log(error));
    }
  }, [kakaoAuth]);

  return <div>kakao</div>;
}

export default kakao;
