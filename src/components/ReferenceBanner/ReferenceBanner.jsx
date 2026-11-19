import styles from './ReferenceBanner.module.css';

export default function ReferenceBanner({ image, alt, className, cta, loading = 'lazy' }) {
  const rootClass = [styles.banner, className].filter(Boolean).join(' ');

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
    <figure className={rootClass} onPointerMove={moveWithPointer} onPointerLeave={resetPointer}>
      <img className={`${styles.image} img-fluid`} src={image} alt={alt} loading={loading} draggable="false" />
      <button
        className={styles.ctaHotspot}
        type="button"
        aria-label={`${cta.label} (visual preview only; no action is connected)`}
        title={`${cta.label} — visual preview only`}
        style={{ left: `${cta.left}%`, top: `${cta.top}%`, width: `${cta.width}%`, height: `${cta.height}%` }}
      />
    </figure>
  );
}
