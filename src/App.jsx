import ReferEarnBanner from './components/ReferEarnBanner/ReferEarnBanner.jsx';
import SwapCenterBanner from './components/SwapCenterBanner/SwapCenterBanner.jsx';
import BonusVEsBanner from './components/BonusVEsBanner/BonusVEsBanner.jsx';
import CaptchaTasksBanner from './components/CaptchaTasksBanner/CaptchaTasksBanner.jsx';
import ExchangeCenterBanner from './components/ExchangeCenterBanner/ExchangeCenterBanner.jsx';
import styles from './styles/App.module.css';

const COLLECTION = [
  { number: '01', eyebrow: 'SHARE THE GOOD', title: 'Refer & Earn', Component: ReferEarnBanner },
  { number: '02', eyebrow: 'MOVE YOUR BALANCE', title: 'Swap Center', Component: SwapCenterBanner },
  { number: '03', eyebrow: 'MORE TO DISCOVER', title: 'Bonus VEs', Component: BonusVEsBanner },
  { number: '04', eyebrow: 'TASKS THAT COUNT', title: 'Captcha Tasks', Component: CaptchaTasksBanner },
  { number: '05', eyebrow: 'MAKE IT YOURS', title: 'Exchange Center', Component: ExchangeCenterBanner },
];

export default function App() {
  return (
    <main className={styles.page}>
      <header className={styles.masthead}>
        <div className={styles.brand} aria-label="VELOOP Rewards">
          <span className={styles.brandMark} aria-hidden="true">V</span>
          <span className={styles.brandType}><strong>VELOOP</strong><small>REWARDS</small></span>
        </div>
        <div className={styles.collectionBadge}><span />VISUAL COLLECTION <i /> 05 BANNERS</div>
      </header>

      <section className={styles.intro} aria-labelledby="page-title">
        <p className={styles.kicker}><span />THE VELOOP REWARDS EXPERIENCE</p>
        <div className={styles.introGrid}>
          <h1 id="page-title">One collection.<br /><span>Five reward stories.</span></h1>
          <p className={styles.introCopy}>A considered look at the ways to share, earn, convert, and exchange across VELOOP Rewards.</p>
        </div>
        <div className={styles.introFoot}>
          <span className={styles.introRule} />
          <span>DESIGNED TO EXPLORE</span>
          <span className={styles.introCount}>01 <i /> 05</span>
        </div>
      </section>

      <section className={styles.collection} aria-label="Five VELOOP Rewards banners">
        {COLLECTION.map(({ number, eyebrow, title, Component }) => (
          <article className={styles.bannerSection} key={number} aria-labelledby={`banner-title-${number}`}>
            <header className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>{number}</span>
              <span className={styles.sectionRule} />
              <div className={styles.sectionCopy}>
                <p>{eyebrow}</p>
                <h2 id={`banner-title-${number}`}>{title}</h2>
              </div>
              <span className={styles.sectionIndex}>{number} <i /> 05</span>
            </header>
            <Component />
          </article>
        ))}
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerBrand}><span className={styles.footerMark}>V</span><span>VELOOP <i>REWARDS</i></span></div>
        <p>Five reference banners <span /> One considered collection</p>
        <span className={styles.footerEnd}>END OF COLLECTION <b>✦</b></span>
      </footer>
    </main>
  );
}
