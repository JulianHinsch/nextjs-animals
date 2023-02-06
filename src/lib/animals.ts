import db from './db';
import { Animal } from '@/types/Animal';

export async function getAll() {
    return await db<Animal[]>`
      SELECT * FROM animals;
    `;
}

export async function getByName(name: string) {
    return await db<Animal[]>`
      SELECT * FROM animals
      WHERE name = ${ name };
    `;
}