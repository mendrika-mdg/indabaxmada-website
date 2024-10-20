import '../styles/globals.css';
import { CountdownProvider } from '../components/CountdownContext';

function MyApp({ Component, pageProps }) {
  return (
    <CountdownProvider>
      <Component {...pageProps} />
    </CountdownProvider>
  );
}

export default MyApp;
