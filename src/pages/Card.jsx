import React from 'react';
import { CardImg, CardTifosi } from './Card.style';
import tifosiImg from '../assets/tifosi.png';

const Card = () => {
  return (
    <>
        <div className="container mt-4 mb-4">
            <h1>card</h1>
            <CardTifosi>
                <CardImg src={tifosiImg} alt="tifosi" />
                {/* <img src={tifosiImg} alt="tifosi" /> */}
            </CardTifosi>
        </div>
    </>
  )
}

export default Card