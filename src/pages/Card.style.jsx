import styled from '@emotion/styled'

export const CardContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ccc;
`

export const CardImg = styled.img`
    width: 500px;
    @media (max-width: 700px){
        width: 100%;
    }
`

export const DateCardTifosi = styled.div`
    font-size: 30px;
`
