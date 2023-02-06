exports.up = async function (db) {
  await db`
    CREATE TABLE IF NOT EXISTS animals (
      id SERIAL PRIMARY KEY NOT NULL,
      name CHARACTER VARYING(255) NOT NULL,
      legs INTEGER NOT NULL,
      wings INTEGER NOT NULL
    );
    INSERT INTO animals ( Name, Legs, Wings ) VALUES (
      'dog',
      4,
      0
    ), (
      'flamingo',
      2,
      2
    );
  `
}

exports.down = async function (db) {
  await db`
    DROP TABLE IF EXISTS animals;
  `
}