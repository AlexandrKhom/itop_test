import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  background-color: #000000b8;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 250px;
  background-color: #49b8d7;
  border: black 1px solid;
  border-radius: 11px;
  padding-top: 1%;
`;

export const Display = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 30%;
  font-size: 42px;
  background-color: #61dafb;
  border: black 1px solid;
  border-radius: 50px;
`;

export const Button = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: space-around;
  justify-content: space-around;
  width: 90%;
  height: 55%;

  button {
    border-radius: 11px;
    background-color: #66b5ed;
    width: 30%;
    height: 20%;

    :hover {
      cursor: pointer;
      background-color: #459bd7;
    }
  }
`;





