import styles from './styles.module.scss';

import { AiOutlineArrowDown } from 'react-icons/ai';

export function Header() {
  return (
    <div id='home' className={styles.container}>
      <div className={styles.contentWrapper}>
        <div>
          <h1>&lt;gusmadev/&gt;</h1>
          <p>.com</p>
          <p>A Web Developer Website.</p>
        </div>
      </div>
      <AiOutlineArrowDown />
    </div>
  );
}
