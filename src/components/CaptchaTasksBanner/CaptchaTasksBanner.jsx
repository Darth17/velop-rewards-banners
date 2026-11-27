import image from '../../assets/reference/enhanced/captcha-tasks-reference.png';
import ReferenceBanner from '../ReferenceBanner/ReferenceBanner.jsx';
import styles from './CaptchaTasksBanner.module.css';

export default function CaptchaTasksBanner({ description }) {
  return (
    <ReferenceBanner
      className={styles.card}
      image={image}
      alt="Exact Captcha Tasks reference: solve captchas, earn gems, with a verification screen, keyboard, gems, and task process."
      description={description}
      cta={{ label: 'Start Task' }}
    />
  );
}
