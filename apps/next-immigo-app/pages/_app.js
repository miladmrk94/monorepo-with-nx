import Head from 'next/head';
import './styles.css';
function CustomApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Welcome to next-immigo-app!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}
export default CustomApp;
