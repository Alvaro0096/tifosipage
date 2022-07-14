import React, { useContext } from 'react';
import { CardImg, CardContainer, DateCardTifosi } from './Card.style';
import tifosiImg from '../assets/tifosi.png';
import { Context } from '../context/Context';

const Card = () => {
  const date = useContext(Context);
  console.log(date)
  return (
    <>
        {/* <CardContainer>
            <CardImg src={tifosiImg} alt="tifosi" />
        </CardContainer> */}
        <div className="container">
          Formulario:
          <DateCardTifosi>{date.dayName}</DateCardTifosi>
          <DateCardTifosi>{date.dayNum}</DateCardTifosi>
        </div>
    </>
  )
}

export default Card