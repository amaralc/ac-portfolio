import Head from 'next/head';
// import Image from 'next/image' //-> can't use yarn export with next images
import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Amaral, C.</title>
        <link rel="shortcut icon" href="/ac." type="image/jpg" />
      </Head>
      <div className={styles.contentContainer}>
        <main>
          <section>
            <a href="https://www.linkedin.com/in/calil-amaral-84005b67/" target="_blank" rel="noreferrer">
              <img src="/images/ac.jpg" alt="Amaral, C." width={300} height={300} />
            </a> 
          </section>
        </main>
      </div>
    </>
  );
}
