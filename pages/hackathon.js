import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HackathonPage = () => {
  return (
    <>
      <Head>
        <title>Hackathon - IndabaX Madagascar 2024</title>
        <meta name="description" content="Hackathon for IndabaX Madagascar 2024" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="comingSoon">
        <h1>Hackathon</h1>
        <p>Coming Soon</p>
      </div>
      <Footer />
    </>
  );
};

export default HackathonPage;
