import React from 'react'

import './card.styles.scss'

const Card = (props) => {
  return (
    <article className="characterCard__Wrapper">
      <div className="characterCard__ImgWrapper">
        <img src="https://rickandmortyapi.com/api/character/avatar/50.jpeg" alt="Blim Blam" />
      </div>
      <div className="characterCard__ContentWrapper">
        <div className="section">
          <a href="https://rickandmortyapi.com/api/character/50" rel="nofollow noopener noreferrer" target="_blank" className="externalLink__ExternalLink-sc-1lixk38-0 bQJGkk">
            <h2>Blim Blam</h2>
          </a>
          <span className="status">
            <span className="status__icon"></span>
            Alive - Alien
          </span>
        </div>
        <div className="section">
          <span className="text-gray">Last known location:</span>
          <a href="https://rickandmortyapi.com/api/location/20" rel="nofollow noopener noreferrer" target="_blank" className="externalLink__ExternalLink-sc-1lixk38-0 bQJGkk">
            Earth (Replacement Dimension)
          </a>
        </div>
        <div className="section">
          <span className="text-gray">First seen in:</span>
          <a href="https://rickandmortyapi.com/api/episode/14" rel="nofollow noopener noreferrer" target="_blank" className="externalLink__ExternalLink-sc-1lixk38-0 bQJGkk">
            Auto Erotic Assimilation
          </a>
        </div>
      </div>
    </article>
  )
}

export default Card
