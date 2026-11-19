import image from '../../assets/reference/enhanced/swap-center-reference.png';
import ReferenceBanner from '../ReferenceBanner/ReferenceBanner.jsx';
import styles from './SwapCenterBanner.module.css';

export default function SwapCenterBanner() {
  return <ReferenceBanner className={styles.banner} image={image} alt="Exact Swap Center reference: VE and SVE reward currency cards with arrows illustrating balance conversion." cta={{ label: 'Open Swap Center', left: 5.5, top: 65.5, width: 27, height: 13 }} />;
}
