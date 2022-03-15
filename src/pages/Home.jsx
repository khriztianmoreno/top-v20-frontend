import { useState, useEffect } from 'react';

import data from '../assets/data.json';

import Card from '../components/Card/Card';

function HomePage() {
  const [characters, setCharacters] = useState(data);

  useEffect(() => {
    // llamar a la  API rickandmorty
    fetch('https://rickandmortyapi.com/api/character/')
      .then((res) => res.json())
      .then(({ results }) => {
        setCharacters(results);
      });
  }, []);

  // renderizar el component
  return (
    <div>
      <h1>Home</h1>
      {
        characters.map((character) => (
          <Card key={character.id} character={character} />
        ))
      }

    </div>
  );
}

export default HomePage;
