import { useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const DeepLearningIndabaPage = () => {
  return (
    <div className="page-wrapper">
      <Head>
        <title>IndabaX Madagascar 2024</title>
        <meta name="description" content="L'IA pour le développement de Madagascar, annual." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
      </Head>

      <div className="background">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>
      
      <Header />

      <main className="content content-shifted">
        <div className="container">
          <div className="year">2024</div>

          <h2 className="mainTitle">
            L'<span className="highlight">IA</span> POUR LE<br/>
            DÉVELOPPEMENT DE<br/>
            <span className="highlight">MADAGASCAR</span>
          </h2>

          <p className="date">
            <FontAwesomeIcon icon={faCalendarAlt} size="sm" /> 13 - 14 - 15 DEC 2024</p>

          <p className="location">
            <FontAwesomeIcon icon={faMapMarkerAlt} size="sm" /> Rubik Services - Lot III Q 60 Bis Andoharano Tsimbazaza, Antananarivo 101
          </p>

          <button className="stayTuned">
            STAY TUNED
          </button>

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d943.5236212954717!2d47.52892752847283!3d-18.927211498885786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21f07d7f6d200e19%3A0xdf10bc00fd70e5aa!2sRubik%20Services!5e0!3m2!1sen!2smg!4v1732377490827!5m2!1sen!2smg"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DeepLearningIndabaPage;
