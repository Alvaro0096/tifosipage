import styled from '@emotion/styled';

export const CardContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CardImg = styled.img`
    width: 500px;
    @media (max-width: 700px){
        width: 100%;
    }
`

export const DateCardTifosi = styled.p`
    position: absolute;
    font-size: 2.2em;
    text-transform: uppercase;
    top: 40%;
    color: ${props => props.theme.textTifosi};
    @media (max-width: 700px){
        top: 40%;
    }
    @media (max-width: 500px){
        font-size: 2em;
        top: 40%;
    }
    @media (max-width: 400px){
        font-size: 1.5em;
        top: 40%;
    }
`

export const HourCardTifosi = styled.p`
    position: absolute;
    font-size: 3.5em;
    text-transform: uppercase;
    font-weight: 600;
    top: 45%;
    color: ${props => props.theme.textTifosi};
    @media (max-width: 700px){
        top: 46%;
    }
    @media (max-width: 500px){
        font-size: 2.5em;
        top: 46.5%;
    }
    @media (max-width: 400px){
        top: 46%;
    }
`

export const PlaceCardTifosi = styled.p`
    position: absolute;
    font-size: 2.2em;
    text-transform: uppercase;
    font-weight: 500;
    top: 55%;
    color: ${props => props.theme.textTifosi};
    @media (max-width: 700px){
        top: 55%;
    }
`

export const AddressCardTifosi = styled.p`
    position: absolute;
    font-size: 2.2em;
    text-transform: uppercase;
    font-weight: 500;
    top: 60%;
    color: ${props => props.theme.textTifosi};
    @media (max-width: 700px){
        font-size: 2em;
        top: 60%;
    }
`