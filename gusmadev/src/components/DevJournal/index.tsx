import styles from './styles.module.scss';

export function DevJournal() {
  return (
    <div id='blog' className={styles.container}>
      <div className={styles.description}>
        <h1>Dev Journal</h1>
        <p>
          This is my my personal blog, here I'll make posts about what i'm
          learning and any tech topics that I find intersting to publush.
        </p>
        <button className={`${styles.descriptionButton} button`}>
          <a href='/posts'>See all posts</a>
        </button>
      </div>
      <div className={styles.description}>
        <ul>
          <li>
            <h2>
              <a>Titulo 0</a>
            </h2>
            <p>askdmaslkdnaskjbdalsjkdbalksj</p>
          </li>
          <li>
            <h2>
              <a>Titulo 1</a>
            </h2>
            <p>askdmaslkdnaskjbdalsjkdbalksj</p>
          </li>
          <li>
            <h2>
              <a>Titulo 02</a>
            </h2>
            <p>askdmaslkdnaskjbdalsjkdbalksj</p>
          </li>
        </ul>

        {/* <% for (let i=0; i < 3; i++) { %>
                  <h2>
                    <a href="/read/<%= posts[i].title %>"><%= posts[i].title %></a>
                  </h2>
                  <p><%= posts[i].content.substring(0,30) + " ..."%></p>
                  <% } %> */}
      </div>
    </div>
  );
}
