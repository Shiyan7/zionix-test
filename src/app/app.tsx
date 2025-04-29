import type { AppProps } from 'next/app';
import { withProviders } from './providers';
import Head from 'next/head';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Dice Game</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default withProviders(App);
