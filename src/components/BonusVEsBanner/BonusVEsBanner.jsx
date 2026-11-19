import image from '../../assets/reference/enhanced/bonus-ves-reference.png';
import ReferenceBanner from '../ReferenceBanner/ReferenceBanner.jsx';
import styles from './BonusVEsBanner.module.css';

export default function BonusVEsBanner() {
  return <ReferenceBanner className={styles.banner} image={image} alt="Exact Bonus VEs reference: VE balance bonus opportunities, activities, a bonus medallion, reward vault, and coins." cta={{ label: 'Explore Bonuses', left: 5.5, top: 69.5, width: 27, height: 13 }} />;
}
