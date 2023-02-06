import type { Animal } from '@/types/Animal';
import styles from '@/styles/Animal.module.scss';
import { GetServerSideProps } from 'next';
import { getByName as getAnimalsByName } from '@/lib/animals';
import Link from 'next/link';

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const name = String(query.name);
    const results = await getAnimalsByName(name);
    return {
        props: {
            animal: results[0],
        }
    }
}

export default function Animal({ animal }: { animal: Animal }) {
    return (
        <main className={styles.main}>
            <h1>{animal.name}</h1>
            <table>
                <tbody>
                    <tr>
                        <th>Legs</th>
                        <td>{animal.legs}</td>
                    </tr>
                    <tr>
                        <th>Wings</th>
                        <td>{animal.wings}</td>
                    </tr>
                </tbody>
            </table>
            <Link href="/">Back</Link>
        </main>
    );
}