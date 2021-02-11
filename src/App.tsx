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

          <button>Log in</button>
          <button>Sign up</button>
        </nav>
      </header>

      <div className={styles.heading}>
        <h1 className={styles.phrase}>Get your next</h1>

        <div className={styles.phrasesWrapper}>
          <div className={styles.offset}>
            <h2 className={styles.phrase}>summer outfit ideais</h2>
          </div>

          <div className={styles.offset}>
            <h2 className={styles.phrase}>activity for kids</h2>
          </div>

          <div className={styles.offset}>
            <h2 className={styles.phrase}>DYI project</h2>
          </div>

          <div className={styles.offset}>
            <h2 className={styles.phrase}>idea for special dinner</h2>
          </div>
        </div>
      </div>

      <div className={styles.gridContainer}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <div className={styles.item}></div>

            <div className={styles.item}></div>

            <div className={styles.item}></div>

            <div className={styles.item}></div>

            <div className={styles.item}></div>
          </div>

          <div className={styles.column}>
            <div className={styles.item}></div>

            <div className={styles.item}></div>

            <div className={styles.item}></div>

            <div className={styles.item}></div>

            <div className={styles.item}></div>
          </div>

          <div className={styles.column}>
            <div className={styles.item}></div>

            <div className={styles.item}></div>

            <div className={styles.item}></div>

            <div className={styles.item}></div>

            <div className={styles.item}></div>
          </div>

          <div className={styles.column}>
            <div className={styles.item}></div>

            <div className={styles.item}></div>

            <div className={styles.item}></div>

            <div className={styles.item}></div>

            <div className={styles.item}></div>
          </div>

          <div className={styles.column}>
            <div className={styles.item}></div>

            <div className={styles.item}></div>

            <div className={styles.item}></div>

            <div className={styles.item}></div>

            <div className={styles.item}></div>
          </div>

          <div className={styles.column}>
            <div className={styles.item}></div>

            <div className={styles.item}></div>

            <div className={styles.item}></div>

            <div className={styles.item}></div>

            <div className={styles.item}></div>
          </div>

          <div className={styles.column}>
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
