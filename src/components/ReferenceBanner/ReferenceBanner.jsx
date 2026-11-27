import styles from './ReferenceBanner.module.css';

export default function ReferenceBanner({
  image,
  alt,
  className,
  description,
  cta,
  loading = 'lazy',
}) {
  const cardClass = [styles.card, className].filter(Boolean).join(' ');

  function moveWithPointer(event) {
    if (event.pointerType === 'touch') return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;

    event.currentTarget.style.setProperty('--pointer-x', `${(x * 100).toFixed(1)}%`);
    event.currentTarget.style.setProperty('--pointer-y', `${(y * 100).toFixed(1)}%`);
    event.currentTarget.style.setProperty('--tilt-x', `${((0.5 - y) * 1.2).toFixed(2)}deg`);
    event.currentTarget.style.setProperty('--tilt-y', `${((x - 0.5) * 1.6).toFixed(2)}deg`);
  }

  function resetPointer(event) {
    event.currentTarget.style.setProperty('--pointer-x', '50%');
    event.currentTarget.style.setProperty('--pointer-y', '50%');
    event.currentTarget.style.setProperty('--tilt-x', '0deg');
    event.currentTarget.style.setProperty('--tilt-y', '0deg');
  }

  return (
    <div className={cardClass}>
      <figure
        className={styles.banner}
        onPointerMove={moveWithPointer}
        onPointerLeave={resetPointer}
      >
        <img
          className={`${styles.image} img-fluid`}
          src={image}
          alt={alt}
          loading={loading}
          draggable="false"
        />
      </figure>

      <div className={styles.cardFooter}>
        <p className={styles.description}>{description}</p>

        <button
          className={styles.ctaButton}
          type="button"
          aria-label={`${cta.label} — visual preview only; no action is connected`}
          title={`${cta.label} — visual preview only`}
        >
          <span>{cta.label}</span>
          <span className={styles.ctaArrow} aria-hidden="true">
  <svg viewBox="0 0 20 20" focusable="false">
    <path d="M5 15 15 5M6 5h9v9" />
  </svg>
</span>

        </button>
      </div>
    </div>
  );
}
