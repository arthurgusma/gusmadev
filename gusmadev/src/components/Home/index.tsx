import styles from './styles.module.scss';

export function Header() {
  return (
    <>
      <div className={styles.container}>
        <div>
          <h1>&lt;gusmadev/&gt;</h1>
          <p>.com</p>
          <p>A Web Developer Website.</p>
        </div>
      </div>
    </>
  );
}
