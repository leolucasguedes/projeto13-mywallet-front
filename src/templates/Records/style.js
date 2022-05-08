import styled from "styled-components";

export const Main = styled.main`
  width: 375px;
  height: 810px;
`;

export const DivNome = styled.div`
  width: 375px;
  height: 76px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  

  h1 {
    font-size: 26px;
    font-weight: 700;
    font-style: bold;
    line-height: 30.52px;
    color: #FFFFFF;
    margin-left: 24px;
  }

  ion-icon{
    font-size: 24px;
    color: #FFFFFF;
    margin-right: 24px;
   }
`;

export const DivRegistros = styled.div`
   width: 326px;
   height: 446px;
   display: flex;
   justify-content: center;
   flex-direction: column;
   background-color: #FFFFFF;
   border-radius: 5px;
   margin-left: 25px;
`;

export const NoRecords = styled.div`
   width: 180px;
   height: 48px;
   display: flex;
   margin-left: 73px;

   p{
    font-size: 20px;
    font-weight: 400;
    font-style: normal;
    line-height: 23.48px;
    text-align: center;
    color: #868686;
   }
`;

export const DivBot = styled.div`
  width: 340px;
  height: 114px;
  display: flex;
  justify content: space-between;
  margin-top: 13px;
  margin-left: 25px;
  
`;

export const DivButton = styled.div`
  width: 155px;
  height: 114px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  border-radius: 5px;
  background-color: #A328D6;
  margin-right: 15px;
  
  ion-icon{
    font-size: 22px;
    color: #FFFFFF;
    margin-top: 9.56px;
    margin-left: 10.56px;
  }

  p {
    font-size: 17px;
    font-weight: 700;
    font-style: bold;
    line-height: 19.96px;
    color: #FFFFFF;
    margin-bottom: 10px;
    margin-left: 10px;
  }
`;