import Head from 'next/head';
import Link from 'next/link';
import styles from '@/styles/Home.module.scss';
import { getAll as getAllAnimals } from '@/lib/animals';
import { Animal } from '@/types/Animal';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const results = await getAllAnimals();
  return {
    props: {
      animals: results,
    }
  }
}

export default function Home({ animals }: { animals: Animal[] }) {
  return (
    <div>
      <Head>
        <title>Animals</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Animals</h1>
        <ul className={styles.animalList}>
          {animals.map((animal: Animal) => (
            <li key={animal.name}>
              <Link href={`/animals/${animal.name}`}>{animal.name}</Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}
