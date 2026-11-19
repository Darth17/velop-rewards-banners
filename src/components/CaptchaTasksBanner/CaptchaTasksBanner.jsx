import image from '../../assets/reference/enhanced/captcha-tasks-reference.png';
import ReferenceBanner from '../ReferenceBanner/ReferenceBanner.jsx';
import styles from './CaptchaTasksBanner.module.css';

export default function CaptchaTasksBanner() {
  return <ReferenceBanner className={styles.banner} image={image} alt="Exact Captcha Tasks reference: solve captchas, earn gems, with a verification screen, keyboard, gems, and task process." cta={{ label: 'Start Task', left: 5.5, top: 54.5, width: 27, height: 12 }} />;
}
