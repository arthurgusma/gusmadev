import Head from 'next/head';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

export default function Posts() {
  return (
        <>
    <Head>
      <title>Posts | Gusmadev</title>
    </Head>
    <Navbar/>
    <Footer/>
    </>
  );
}
