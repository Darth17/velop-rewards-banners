import image from '../../assets/reference/enhanced/exchange-center-reference.png';
import ReferenceBanner from '../ReferenceBanner/ReferenceBanner.jsx';
import styles from './ExchangeCenterBanner.module.css';

export default function ExchangeCenterBanner() {
  return <ReferenceBanner className={styles.banner} image={image} alt="Exact Exchange Center reference: convert Gems to VEs, with Gem and VE cards, conversion symbol, and exchange call to action." cta={{ label: 'Open Exchange Center', left: 3.5, top: 46, width: 26, height: 15 }} />;
}
