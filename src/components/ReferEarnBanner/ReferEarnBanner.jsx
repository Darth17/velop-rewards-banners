import image from '../../assets/reference/enhanced/refer-earn-reference.png';
import ReferenceBanner from '../ReferenceBanner/ReferenceBanner.jsx';
import styles from './ReferEarnBanner.module.css';

export default function ReferEarnBanner() {
  return <ReferenceBanner className={styles.banner} image={image} loading="eager" alt="Refer Friends, Earn Rewards: the exact reference artwork with the sample referral code, two friends, a gift, example reward values, and four sharing benefits." cta={{ label: 'Invite Now', left: 5.5, top: 53, width: 21.5, height: 10.5 }} />;
}
