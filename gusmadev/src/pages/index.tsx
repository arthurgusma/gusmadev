import Head from 'next/head';

import styles from './home.module.scss';
import { Header } from '../components/Home';
import { Navbar } from '../components/Navbar';
import { DevJournal } from '../components/DevJournal';
import { Portfolio } from '../components/Portfolio';
import { About } from '../components/About';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Gusmadev</title>
      </Head>
      <main className={styles.container}>
        <Navbar />
        <Header />
        <DevJournal />
        <Portfolio />
        <About />
        <Footer />
      </main>
    </>
  );
}
