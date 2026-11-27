import image from '../../assets/reference/enhanced/swap-center-reference.png';
import ReferenceBanner from '../ReferenceBanner/ReferenceBanner.jsx';
import styles from './SwapCenterBanner.module.css';

export default function SwapCenterBanner({ description }) {
  return (
    <ReferenceBanner
      className={styles.card}
      image={image}
      alt="Exact Swap Center reference: VE and SVE reward currency cards with arrows illustrating balance conversion."
      description={description}
      cta={{ label: 'Open Swap Center' }}
    />
  );
}
