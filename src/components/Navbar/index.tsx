import styles from './styles.module.scss';

export function Navbar() {
  return (
    <div className={styles.container}>
      <nav>
        <b className={styles.navbarBrand}>&lt;gusmadev/&gt;</b>

        <ul>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/#projects'>Projects</a>
          </li>
          <li>
            <a href='/#about'>About</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
