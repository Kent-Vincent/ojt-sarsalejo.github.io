import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div className={styles.top}>
        <ul>
          <a href="" className={styles.spacing15}>About</a>
          <a href="" className={styles.spacing15}>Skills</a>
          <a href="" className={styles.spacing15}>Experience</a>
          <a href="" className={styles.spacing15}>Projects</a>
          <a href="" className={styles.spacing15}>Certificates</a>
          <a href="" className={styles.spacing15}>Education</a>
        </ul>
      </div>
    </main>
  );
}
