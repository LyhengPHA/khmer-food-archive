import styles from "./EntryCard.module.css";

// One archived dish in the Khmer Food collection.
// `entry` shape — see data/sampleEntries.js:
// { slug, title, khmerName, category, contributor, region, summary }
export default function EntryCard({ entry, index }) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <article className={styles.card}>
      <header className={styles.top}>
        <span className={styles.number}>{number}</span>
        <span className={styles.category}>{entry.category}</span>
      </header>

      <div className={styles.body}>
        <h3 className={styles.title}>
          {entry.title}
          <span className={styles.khmerName} lang="km">
            {entry.khmerName}
          </span>
        </h3>
        <p className={styles.summary}>{entry.summary}</p>
      </div>

      <footer className={styles.footer}>
        <span>{entry.contributor} · {entry.region}</span>
        <span className={styles.arrow} aria-hidden="true">
          ↗
        </span>
      </footer>
    </article>
  );
}
