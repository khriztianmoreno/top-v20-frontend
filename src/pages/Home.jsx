import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getInvoices } from '../assets/invoices'
import data from '../assets/data.json';

import Card from '../components/Card/Card';

const HomePage = (props) => {
  const [width, setWidth] = useState(document.body.clientWidth);
  const [characters, setCharacters] = useState(data);

  const updateWidth = () => {
    const wt = document.body.clientWidth;
    setWidth(wt);
  }

  // useEffect
  // Obtiene los datos de la API
  // subcribirme algun evento del dom
  // realizar una accion dependiendo de unas dependencias []

  useEffect(() => {
    // updateWidth();
    window.addEventListener('resize', updateWidth)

    // limpieza (subcription)
    return () => {
      window.removeEventListener('resize', updateWidth)
    }
  })

  useEffect(() => {
    // llamar a la  API rickandmorty
    fetch('https://rickandmortyapi.com/api/character/')
      .then(res => res.json())
      .then(data => {
        setCharacters(data.results)
      })

  }, [])


  // renderizar el component
  return(
    <div>
      <h1>Home</h1>
      {
        characters.map(character => {
          return(
            <Card key={character.id} character={character} />
          )
        })
      }

    </div>
  )

}

export default HomePage
