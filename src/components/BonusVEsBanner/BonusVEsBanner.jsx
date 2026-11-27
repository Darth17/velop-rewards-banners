import image from '../../assets/reference/enhanced/bonus-ves-reference.png';
import ReferenceBanner from '../ReferenceBanner/ReferenceBanner.jsx';
import styles from './BonusVEsBanner.module.css';

export default function BonusVEsBanner({ description }) {
  return (
    <ReferenceBanner
      className={styles.card}
      image={image}
      alt="Exact Bonus VEs reference: VE balance bonus opportunities, activities, a bonus medallion, reward vault, and coins."
      description={description}
      cta={{ label: 'Explore Bonuses' }}
    />
  );
}
