import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About - IndabaX Madagascar 2024</title>
        <meta name="description" content="About IndabaX Madagascar 2024" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="comingSoon">
        <h1>About</h1>
        <p>Coming Soon</p>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
