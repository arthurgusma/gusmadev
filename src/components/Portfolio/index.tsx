import { MyCarousel } from '../Carousel';
import styles from './styles.module.scss';

import { ImEnter, ImGithub } from 'react-icons/im';

export function Portfolio() {
  return (
    <div id='projects' className={styles.container}>
      <div className={styles.containerWrapper}>
        <div className={styles.description}>
          <h1>My Projects</h1>
          <p>Here you'll see a list with my latest projects. Check it out!</p>
          <ul>
          <li>
              <p>TradeMap Ações</p>
              <button className={`${styles.greenButton} button`}>
                <a target='_blank' href='https://trademap-acoes.vercel.app/'>
                  <ImEnter /> Acess
                </a>
              </button>
              <button className={`${styles.grayButton} button`}>
                <a
                  target='_blank'
                  href='https://github.com/arthurgusma/desafio-frontend'
                >
                  <ImGithub /> Github
                </a>
              </button>
            </li>
            <li>
              <p>Quem Paga a Conta?</p>
              <button className={`${styles.greenButton} button`}>
                <a
                  target='_blank'
                  href='https://quem-paga-conta.herokuapp.com/'
                >
                  <ImEnter /> Acess
                </a>
              </button>
              <button className={`${styles.grayButton} button`}>
                <a
                  target='_blank'
                  href='https://github.com/arthurgusma/quem-paga-conta'
                >
                  <ImGithub /> Github
                </a>
              </button>
            </li>
            </ul>
        </div>
        <div className={styles.carousel}>
          <MyCarousel />
        </div>
      </div>
    </div>
  );
}
