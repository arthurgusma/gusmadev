import styles from './styles.module.scss';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';

export function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <div className={styles.container}>
      <footer>
        <p>
          Arthur Gusmao <AiOutlineCopyrightCircle /> {currentYear}
        </p>
      </footer>
    </div>
  );
}
