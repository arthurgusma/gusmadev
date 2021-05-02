import { fileURLToPath } from 'node:url';
import React from 'react';
import ReactCardCarousel from 'react-card-carousel';

import styles from './styles.module.scss';

export function MyCarousel() {
  return (
    <div className={styles.container}>
      <ReactCardCarousel autoplay={true} autoplay_speed={3000}>
        <div className={styles.carouselCard}>
          <img src='./images/quem-paga-00.png' alt='project image' />
        </div>
        <div className={styles.carouselCard}>
          <img src='./images/quem-paga-01.png' alt='project image' />
        </div>
        <div className={styles.carouselCard}>
          <img src='./images/trade-00.png' alt='project image' />
        </div>
        <div className={styles.carouselCard}>
          <img src='./images/trade-01.png' alt='project image' />
        </div>
      </ReactCardCarousel>
    </div>
  );
}
