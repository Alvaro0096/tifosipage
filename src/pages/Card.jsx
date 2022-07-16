import React, { useContext } from 'react';
import { CardImg, CardContainer, DateCardTifosi } from './Card.style';
import tifosiImg from '../assets/tifosi.png';
import { UserContext } from '../context/UserContext';

const Card = () => {
  const {formData} = useContext(UserContext);

  return (
    <>
        {/* <CardContainer>
            <CardImg src={tifosiImg} alt="tifosi" />
        </CardContainer> */}
        <div className="container">
          Formulario:
          <p>{formData.dayName}</p>
          <p>{formData.dayNum}</p>
          <p>{formData.month}</p>
          <p>{formData.hourBegin}</p>
          <p>{formData.hourEnd}</p>
          <p>{formData.place}</p>
          <p>{formData.address}</p>
        </div>
    </>
  )
}

export default Card