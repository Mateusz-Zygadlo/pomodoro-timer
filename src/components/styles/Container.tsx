import styled from "styled-components";

export const Container = styled.div`
  width: 600px;
  height: auto;
  margin: 40px auto;
  background-color: pink;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media(max-width: 640px){
    width: 450px;
  }
`;