import styled from "styled-components";

export const Main = styled.main`
  width: 375px;
  height: 810px;
`;

export const DivNome = styled.div`
  width: 375px;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 24px;
  

  h1 {
    font-size: 26px;
    font-weight: 700;
    font-style: bold;
    line-height: 30.52px;
    color: #FFFFFF;
  }
`;

export const DivInputs = styled.div`
   width: 375px;
   height: 120px;
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
   background-color: #FFFFFF;
   border-radius: 5px;
   border: none;
   margin-bottom: 12px; 
   font-size: 20px;

   &::placeholder {
      color: #000000;
      font-family: 'Raleway', sans-serif;
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
   margin-top: 13px;
`;