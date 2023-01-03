import 'styles/reset.scss';
import 'styles/color.scss';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { useRouter } from 'next/router';

import Layout from 'layouts/Layout';
import Header from 'layouts/Header';

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  if (router.pathname.startsWith('/login') || router.pathname.startsWith('/sign-up')) {
    return (
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    );
  }

  return (
    <RecoilRoot>
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}

export default App;
