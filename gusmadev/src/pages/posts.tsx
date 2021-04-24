import Head from 'next/head';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { Blog } from '../components/Blog';

import styles from './posts.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Gusmadev</title>
      </Head>
      <main className={styles.container}>
        <Navbar />
        <Blog />
        <Footer />
      </main>
    </>
  );
}
