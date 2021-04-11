import { MyCarousel } from '../Carousel';
import styles from './styles.module.scss';

export function Portfolio() {
  return (
    <div id='projects' className={styles.container}>
      <div className={styles.description}>
        <h1>My Projects</h1>
        <p>Here you'll see a list with my latest projects. Check it out!</p>
        <ul>
          <li>
            <p>Quem Paga a Conta?</p>
            <a target='_blank' href='https://quem-paga-conta.herokuapp.com/'>
              <i>Acces</i>
            </a>
            <a
              target='_blank'
              href='https://github.com/arthurgusma/quem-paga-conta'
            >
              <i>GitHub</i>
            </a>
          </li>
          <li>
            <p>TradeMap Ações</p>
            <a target='_blank' href='https://trademap-acoes.vercel.app/'>
              <i>Acces</i>
            </a>
            <a
              target='_blank'
              href='https://github.com/arthurgusma/desafio-frontend'
            >
              <i>GitHub</i>
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.carousel}>
        <MyCarousel />
      </div>
    </div>
  );
}
