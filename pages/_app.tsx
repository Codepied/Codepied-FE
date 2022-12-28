import 'styles/reset.scss';
import 'styles/color.scss';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

import Layout from 'layouts/Layout';
import Header from 'layouts/Header';

function App({ Component, pageProps }: AppProps) {
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
