import image from '../../assets/reference/enhanced/exchange-center-reference.png';
import ReferenceBanner from '../ReferenceBanner/ReferenceBanner.jsx';
import styles from './ExchangeCenterBanner.module.css';

export default function ExchangeCenterBanner({ description }) {
  return (
    <ReferenceBanner
      className={styles.card}
      image={image}
      alt="Exact Exchange Center reference: convert Gems to VEs, with Gem and VE cards, conversion symbol, and exchange call to action."
      description={description}
      cta={{ label: 'Open Exchange Center' }}
    />
  );
}
