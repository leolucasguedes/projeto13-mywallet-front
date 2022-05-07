import styled from "styled-components";

export const Main = styled.main`
  width: 375px;
  height: 810px;
`;

export const DivLogo = styled.div`
  width: 375px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 95px;

  h1 {
    font-family: 'Saira Stencil One', cursive;
    font-size: 32px;
    font-weight: 400;
    font-style: normal;
    line-height: 50.37px;
    color: #FFFFFF;
  }
`;

export const DivInputs = styled.div`
   width: 375px;
   height: 270px;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   margin-top: 20px;
`;

export const Input = styled.input`
   width: 326px;
   height: 58px;
   padding-left: 15px;
   background-color: ${props => props.disabled ? "#F2F2F2":"#FFFFFF"};
   border: none;
   border-radius: 5px;
   margin-bottom: 12px; 
   font-size: 20px;

   &::placeholder {
      color: ${props => props.disabled ? "#AFAFAF":"#000000"}
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 23.48px;
`;

export const Entrar = styled.button`
   width: 326px;
   height: 46px;
   background-color: #A328D6;
   border: none;
   border-radius: 5px;
   font-family: 'Raleway', sans-serif;
   font-size: 20px;
   font-weight: 700;
   font-style: bold;
   line-height: 23.48px;
   text-align: center;
   color: #FFFFFF;
   margin-left: 23px;
   margin-top: 10px;
   opacity:${props => props.disabled ? "0.5" : ""}; 
`;


export const DivTexto = styled.div`
  width: 375px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 35px;
  
  p {
    font-size: 15px;
    font-weight: 700;
    font-style: bold;
    line-height: 17.61px;
    text-align: center;
    color: #FFFFFF;
    text-decoration: none;
  }
`;