import collection from "../collection.config.js";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <a className={styles.brand} href="#top" aria-label={`${collection.name} home`}>
          <span className={styles.brandMark} aria-hidden="true">
            K
          </span>
          <span>
            <strong>{collection.name}</strong>
            <small>Khmer Living Archive</small>
          </span>
        </a>

        <nav className={styles.nav} aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#provenance">Provenance</a>
        </nav>
      </header>

      <section className={styles.hero} id="top">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>
            <span aria-hidden="true" /> Preserving Cambodia, one dish at a time
          </p>
          <h1>{collection.name}</h1>
          <p className={styles.intro}>{collection.description}</p>

          <div className={styles.heroActions}>
            <a className={styles.primaryAction} href="#about">
              Explore the story <span aria-hidden="true">↘</span>
            </a>
            <p className={styles.status}>
              <span aria-hidden="true" /> Archive in progress · Fall 2026
            </p>
          </div>
        </div>

        <div className={styles.heroArtwork} aria-hidden="true">
          <div className={styles.artworkTopline}>
            <span>Living culture</span>
            <span>01 / 03</span>
          </div>
          <div className={styles.plate}>
            <div className={styles.plateInner}>
              <span className={styles.leafOne} />
              <span className={styles.leafTwo} />
              <span className={styles.spiceOne} />
              <span className={styles.spiceTwo} />
              <span className={styles.spiceThree} />
              <p>ម្ហូបខ្មែរ</p>
            </div>
          </div>
          <p className={styles.artworkCaption}>Recipes hold the memory of a place.</p>
        </div>
      </section>

      <section className={styles.about} id="about">
        <div className={styles.sectionLabel}>
          <span>01</span>
          <p>Why this archive exists</p>
        </div>

        <div className={styles.aboutCopy}>
          <p className={styles.khmerAccent} lang="km">
            រសជាតិ · រឿងរ៉ាវ · មរតក
          </p>
          <h2>Food carries more than flavor. It carries memory.</h2>
          <p>
            This growing archive celebrates the knowledge, ingredients, and stories
            held in Khmer cooking. It is a place to document what is shared at the
            table so it can keep moving between generations.
          </p>
        </div>
      </section>

      <section className={styles.provenance} id="provenance">
        <div className={styles.sectionLabel}>
          <span>02</span>
          <p>Archive provenance</p>
        </div>

        <div className={styles.detailGrid}>
          <article className={styles.detailCard}>
            <p className={styles.cardNumber}>A</p>
            <div>
              <p className={styles.cardLabel}>Curated by</p>
              <h3>{collection.curator}</h3>
              <p>The person gathering and caring for this collection.</p>
            </div>
          </article>

          <article className={styles.detailCard}>
            <p className={styles.cardNumber}>B</p>
            <div>
              <p className={styles.cardLabel}>Knowledge source</p>
              <h3>{collection.source}</h3>
              <p>The community and lived experience behind the archive.</p>
            </div>
          </article>
        </div>
      </section>

      <section className={styles.comingSoon}>
        <p className={styles.eyebrow}>
          <span aria-hidden="true" /> The collection is growing
        </p>
        <div>
          <h2>First entries coming soon.</h2>
          <p>
            This semester, the archive will grow to include browsable stories,
            community contributions, and carefully reviewed entries.
          </p>
        </div>
        <span className={styles.zero} aria-label="Zero published entries">
          00
        </span>
      </section>

      <footer className={styles.footer}>
        <div>
          <span className={styles.brandMark} aria-hidden="true">
            K
          </span>
          <p>{collection.name}</p>
        </div>
        <p>ICT 340 · American University of Phnom Penh · Fall 2026</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
