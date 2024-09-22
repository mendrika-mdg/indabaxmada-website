import { useEffect } from 'react';
import Head from 'next/head';

const DeepLearningIndabaPage = () => {
  useEffect(() => {
    const eventDate = new Date('2024-12-13T00:00:00'); // Set the target event date
    
    const updateCountdown = () => {
      const now = new Date();
      const diff = eventDate - now;

      // Time calculations
      const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
      const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      // Display result in the span
      document.getElementById('countdown').innerHTML =
        `${months} mois, ${days} jours, ${hours} heures, ${minutes} minutes, ${seconds} secondes`;

      // If the countdown is over
      if (diff < 0) {
        document.getElementById('countdown').innerHTML = "The event has started!";
      }
    };

    // Update countdown every second
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <>
      <Head>
        <title>Deep Learning Indaba Madagascar 2024</title>
        <meta name="description" content="L'IA pour le développement de Madagascar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="background">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>
      
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
          
          {/* Countdown Timer */}
          <p className="countdown"> <span id="countdown"></span></p>

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
