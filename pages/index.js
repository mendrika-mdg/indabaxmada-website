import Head from 'next/head';

const DeepLearningIndabaPage = () => {
  return (
    <>
      <Head>
        <title>Deep Learning Indaba Madagascar 2024</title>
        <meta name="description" content="L'IA pour le développement de Madagascar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="background"></div>
      <div className="content">
        <div className="container">
          <div className="logoContainer">
            <img src="/logo-madagascar.png" alt="Deep Learning Indaba Madagascar Logo" className="logo" />
            <img src="/logo-indaba.png" alt="Deep Learning Indaba Logo" className="logo" />
          </div>
          
          <div className="year">2024</div>
          
          <h2 className="mainTitle">
            L'<span className="highlight">IA</span> POUR LE<br/>
            DÉVELOPPEMENT DE<br/>
            <span className="highlight">MADAGASCAR</span>
          </h2>
          
          <p className="date">13 - 14 - 15 DEC</p>
          
          <button className="stayTuned">
            STAY TUNED
          </button>
          
          <p className="email">
            indabaxmadagascar@gmail.com
          </p>
        </div>
      </div>
    </>
  );
};

export default DeepLearningIndabaPage;