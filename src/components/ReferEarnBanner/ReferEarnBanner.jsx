import image from '../../assets/reference/enhanced/refer-earn-reference.png';
import ReferenceBanner from '../ReferenceBanner/ReferenceBanner.jsx';
import styles from './ReferEarnBanner.module.css';

export default function ReferEarnBanner({ description }) {
  return (
    <ReferenceBanner
      className={styles.card}
      image={image}
      loading="eager"
      alt="Refer Friends, Earn Rewards: the exact reference artwork with the sample referral code, two friends, a gift, example reward values, and four sharing benefits."
      description={description}
      cta={{ label: 'Invite Now' }}
    />
  );
}
