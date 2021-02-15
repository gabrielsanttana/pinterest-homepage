import styles from './App.module.scss';

const App: React.FC = () => {
  return (
    <>
      <header>
        <h3>Pinterest</h3>

        <nav>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Business</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>

          <button className={styles.login}>Log in</button>
          <button className={styles.signup}>Sign up</button>
        </nav>
      </header>

      <div className={styles.heading}>
        <h1 className={styles.phrase}>Get your next</h1>

        <div className={styles.phrasesWrapper}>
          <div className={styles.offset}>
            <h2 className={`${styles.phrase} ${styles.animationBefore}`}>
              summer outfit ideais
            </h2>
          </div>

          <div className={styles.offset}>
            <h2 className={`${styles.phrase} ${styles.animationBefore}`}>
              activity for kids
            </h2>
          </div>

          <div className={styles.offset}>
            <h2 className={`${styles.phrase} ${styles.animationBefore}`}>
              DYI project
            </h2>
          </div>

          <div className={styles.offset}>
            <h2 className={`${styles.phrase} ${styles.animationBefore}`}>
              idea for special dinner
            </h2>
          </div>
        </div>
      </div>

      <div className={styles.gridContainer}>
        <div className={styles.grid}>
          <div className={`${styles.column} ${styles.animationBefore}`}>
            <div className={styles.item}></div>

            <div className={styles.item}></div>

            <div className={styles.item}></div>

            <div className={styles.item}></div>

            <div className={styles.item}></div>
          </div>

          <div className={`${styles.column} ${styles.animationBefore}`}>
            <div className={styles.item}></div>

            <div className={styles.item}></div>

            <div className={styles.item}></div>

            <div className={styles.item}></div>

            <div className={styles.item}></div>
          </div>

          <div className={`${styles.column} ${styles.animationBefore}`}>
            <div className={styles.item}></div>

            <div className={styles.item}></div>

            <div className={styles.item}></div>

            <div className={styles.item}></div>

            <div className={styles.item}></div>
          </div>

          <div className={`${styles.column} ${styles.animationBefore}`}>
            <div className={styles.item}></div>

            <div className={styles.item}></div>

            <div className={styles.item}></div>

            <div className={styles.item}></div>

            <div className={styles.item}></div>
          </div>

          <div className={`${styles.column} ${styles.animationBefore}`}>
            <div className={styles.item}></div>

            <div className={styles.item}></div>

            <div className={styles.item}></div>

            <div className={styles.item}></div>

            <div className={styles.item}></div>
          </div>

          <div className={`${styles.column} ${styles.animationBefore}`}>
            <div className={styles.item}></div>

            <div className={styles.item}></div>

            <div className={styles.item}></div>

            <div className={styles.item}></div>

            <div className={styles.item}></div>
          </div>

          <div className={`${styles.column} ${styles.animationBefore}`}>
            <div className={styles.item}></div>

            <div className={styles.item}></div>

            <div className={styles.item}></div>

            <div className={styles.item}></div>

            <div className={styles.item}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
