import '@/styles/globals.css'
import '@/styles/spa.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
