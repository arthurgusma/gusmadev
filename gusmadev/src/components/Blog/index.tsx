import styles from './styles.module.scss';

export function Blog() {
  return (
    <div className={styles.container}>
      <div className={styles.containerWrapper}>
        <div className={styles.content}>
          <h1>Lifetime posts</h1>
          <p>
            In this section you can find everything I've ever wrote. Try
            searching for some topic you're interest in.
          </p>
          <form action='/posts' method='POST'>
            <input
              type='text'
              id='post'
              name='topic'
              placeholder='Search for a topic'
            />
          </form>
        </div>
        <div className={styles.content}>
          <h2>
            <a href='/read/<%= post.title %>'>Titulo do post </a>
          </h2>
          <p>primeiros 50 caracteres.</p>
        </div>
      </div>
    </div>
  );
}
