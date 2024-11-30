import { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

const HackathonPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Handle the toggle of active FAQ
  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close the active FAQ if clicked again
    } else {
      setActiveIndex(index); // Open the selected FAQ
    }
  };

  return (
    <>
      <Head>
        <title>Hackathon - IndabaX Madagascar 2024</title>
        <meta name="description" content="Hackathon for IndabaX Madagascar 2024" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="hackathon">

          <section className="info">

            <h1>HACKATHON: Nowcasting Thunderstorms in Nosy Be with Machine Learning</h1>

            <p>
              Thunderstorm nowcasting is the process of predicting thunderstorms, which are weather events with thunder, lightning, heavy rain, and strong winds, in the next few hours using real-time data.
              Nowcasting with machine learning is one of the most active and rapidly evolving topics in weather forecasting.
            </p>



            <Image 
              src="/images/hackathon/Hackathon-NosyBe.png"
              alt="Target Nosy Be" 
              width={500}
              height={400}
              priority
            />


            <p>
              Nosy Be (red plus sign), with its airport, significant population, and economic importance, is prone to thunderstorms (coloured blob) that often cause flooding and severe damage.
            </p>  

            <p>
              The goal of this hackathon is to predict the probability of a storm in Nosy Be within 1 and 3 hours, using real-time data. This includes the time of observation (t<sub>0</sub>), latitude and longitude, and the intensity and size of the nearest storm at t<sub>0</sub>, all extracted from satellite observations.
            </p>   



            <p className="alert-box">
               To learn more, read the FAQ's below.
            </p>


          </section>
       
          {/* Frequently Asked Questions Section */}
          <section className="faq">

            <h1 className="alert-box">FREQUENTLY ASKED QUESTIONS</h1>

            <div className="faq-item">
              <button className="faq-question" onClick={() => toggleFAQ(1)}>
                <h3>1. Who can participate?</h3>
              </button>
              {activeIndex === 1 && (
                <div className="faq-answer">
                  <p>
                  The hackathon is open to everyone! Whether you're an individual, part of a team, a student, an enthusiast, or a professional, you can participate. 
                  
                  All you need is a computer, an internet connection, and the ability to work with Python or R.
                  </p>
                </div>
              )}
            </div>

            <div className="faq-item">
              <button className="faq-question" onClick={() => toggleFAQ(2)}>
                <h3>2. How can I participate?</h3>
              </button>
              {activeIndex === 2 && (
                <div className="faq-answer">
                  <p>
                    Check regularly this website, also our <a href="https://www.facebook.com/people/IndabaX-Madagascar/100093269167333/" style={{ marginRight: '10px', marginLeft: '10px'}}>Facebook</a> 
                    and <a href="https://www.linkedin.com/company/indabax-madagascar/posts/?feedView=all" style={{ marginLeft: '10px' }}>LinkedIn</a> for updates.
                  </p>
                </div>
              )}
            </div>            


            <div className="faq-item">
              <button className="faq-question" onClick={() => toggleFAQ(3)}>
                <h3>3. What is my task in the hackathon?</h3>
              </button>
              {activeIndex === 3 && (
                <div className="faq-answer">
                  <p>
                  Your task is to develop machine learning models to predict the likelihood of thunderstorms occurring in Nosy Be within 1 and 3 hours, and submit your results on the designated portal.
                  </p>
                </div>
              )}
            </div>

            <div className="faq-item">
              <button className="faq-question" onClick={() => toggleFAQ(4)}>
                <h3>4. What data will I be working with?</h3>
              </button>
              {activeIndex === 4 && (
                <div className="faq-answer">
                  
                  <p>
                    You will work with real-time data extracted from satellite observations, including storm intensity, size, location (latitude and longitude), and the time of observation. 
                  </p>

                  <p>
                    The data will be provided in tabular format for analysis.   
                  </p>

                  <p>
                    The training data will cover the period from 2004 to 2019, while the testing data will span from 2020 to 2024. (November - April)               
                  </p>

                </div>
              )}
            </div>

            
            <div className="faq-item">
              <button className="faq-question" onClick={() => toggleFAQ(5)}>
                <h3>5. How will my work be evaluated?</h3>
              </button>
              {activeIndex === 5 && (
                <div className="faq-answer">
                  <p>
                    Two key metrics, AUC ROC and Brier Skill Score, will be used to evaluate your model. The performance of your model will be compared to that of an operational nowcasting system, and your rank will be determined based on this comparison.
                  </p>
                </div>
              )}
            </div>      


            <div className="faq-item">
              <button className="faq-question" onClick={() => toggleFAQ(6)}>
                <h3>6. Are there prizes?</h3>
              </button>
              {activeIndex === 6 && (
                <div className="faq-answer">
                  <p>
                    The five best solutions will receive money prizes from our international and national sponsors, as well as our partners. 
                    
                    The winning solutions will also be featured in future publications of the event.
                  </p>

                </div>
              )}
            </div>    


          



          </section>
      </div>

      <Footer />
    </>
  );
};

export default HackathonPage;
