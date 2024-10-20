import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const IdeathonPage = () => {
  return (
    <>
      <Head>
        <title>Ideathon - IndabaX Madagascar 2024</title>
        <meta name="description" content="Ideathon for IndabaX Madagascar 2024" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="comingSoon">
        <h1>Ideathon</h1>
        <p>Coming Soon</p>
      </div>
      <Footer />
    </>
  );
};

export default IdeathonPage;
