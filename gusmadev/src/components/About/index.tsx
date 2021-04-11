import styles from './styles.module.scss';

export function About() {
  return (
    <div id='about' className={styles.container}>
      <div className={styles.content}>
        <div>
          <h1>Hello, world!</h1>
          <p>
            Hi there! I'm Arthur, a full stack developer. I love to code since
            my first "Hello, world". I created this website from scratch to show
            a part of my knowloweg in web development, also to have fun and
            practice a little more on my skils (wich I'm always developing). You
            can check here all my medias and all the places you can contact me.
          </p>
          <a
            href='https://www.linkedin.com/in/arthur-gusmao-13451017b/'
            target='_blank'
            type='button'
          >
            <i></i> Linkedin
          </a>
          <a
            type='button'
            href='https://github.com/arthurgusma'
            target='_blank'
          >
            <i></i> GitHub
          </a>
          <a
            type='button'
            href='https://www.instagram.com/gusmadev/'
            target='_blank'
          >
            <i></i> Instagram
          </a>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.instagram}>
          <h1>Instagram</h1>
          <div className='elfsight-app-6cc5ba3f-2262-47b4-8d5d-b6213c38f0b0'></div>
        </div>
      </div>
    </div>
  );
}
