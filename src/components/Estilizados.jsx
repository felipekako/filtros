import styled from 'styled-components'

export const Fundo =styled.div`
background-color:#29F2CD;
`;

export const Quadro = styled.div`
background-color:#F2B705;
width:350px;
margin-bottom:25px;
border-radius:25px;
display: flex;
flex-direction:column;
justify-content:center;
align-items:center;
`;

export const Foto = styled.img`
width: 200px;
height: 200px;
border-radius:50%;
`;

export const TextoPerfil = styled.p`
font-size: 32px;
color:#fff
`;

export const Galeria = styled.div`
    padding-top:25px;
    display: flex;
    flex-direction:row;
    flex-wrap: wrap;
    justify-content: space-around;
    text-align:center;
`;
export const ModalBackground = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: aqua;
    position: fixad;
    display:flex;
    justify-content: center;
    align-items: center;
`
export const ModalContainer = styled.div`
    width:500px;
    height:500px ;
    border-radius: 12px;
    background-color: brown;
    box-shadow:rgba(0,0,0,0.35)  0px;
    ddisplay: flex;
    flex-direction: column;
    padding: 25px
`
export const TitltBTN = styled.div`
    display: flex;
    justyfy-content: end
`;

export const Texto = styled.p`
    color: white;
`