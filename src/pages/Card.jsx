import React, { useContext } from 'react';
import { CardImg, CardContainer, DateCardTifosi, HourCardTifosi, PlaceCardTifosi, AddressCardTifosi } from './Card.style';
import tifosiImg from '../assets/tifosi.png';
import { UserContext } from '../context/UserContext';
import es from 'date-fns/locale/es';

const Card = () => {
  const { format } = require("date-fns");
  const {formData} = useContext(UserContext);
  
  return (
    <>
        <CardContainer>
            <CardImg src={tifosiImg} alt="tifosi" />
            <DateCardTifosi>EL DÍA {format(formData.date, "EEEE", {locale: es})} {format(formData.date, "dd")} DE {format(formData.date, "MMMM", {locale: es})}</DateCardTifosi>
            <HourCardTifosi>DE {formData.hourBegin} A {formData.hourEnd} HS</HourCardTifosi>
            <PlaceCardTifosi>EN {formData.place}</PlaceCardTifosi>
            <AddressCardTifosi>{formData.address}</AddressCardTifosi>
        </CardContainer>
    </>
  )
}

export default Card