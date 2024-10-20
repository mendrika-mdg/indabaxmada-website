import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PosterSessionsPage = () => {
  return (
    <>
      <Head>
        <title>Poster Sessions - IndabaX Madagascar 2024</title>
        <meta name="description" content="Poster Sessions for IndabaX Madagascar 2024" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="comingSoon">
        <h1>Poster Sessions</h1>
        <p>Coming Soon</p>
      </div>
      <Footer />
    </>
  );
};

export default PosterSessionsPage;
