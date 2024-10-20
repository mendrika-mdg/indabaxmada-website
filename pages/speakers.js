import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SpeakersPage = () => {
  return (
    <>
      <Head>
        <title>Speakers - IndabaX Madagascar 2024</title>
        <meta name="description" content="Speakers for IndabaX Madagascar 2024" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="comingSoon">
        <h1>Speakers</h1>
        <p>Coming Soon</p>
      </div>
      <Footer />
    </>
  );
};

export default SpeakersPage;
