import styled from "styled-components";

export const ButtonWrapper = styled.div`
  width: 100%;
  z-index: 2;
  position: relative;
  margin-top: 40px;
`;

export const MessageLine = styled.div`
  width: 106%;
  height: 6px;
  background-color: red;
  margin-top: 20px;
`;

export const Message = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  font-size: 2.5rem;
  flex-flow: column;
  text-align: center;
  justify-content: center;
  text-align: center;
  word-wrap: nowrap;
  z-index: 3;
`;

export const MessageButton = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  position: relative;
  z-index: 2;
  margin-top: -45px;
`;

export const Number = styled.div`
  width: 90%;
  color: darkblue;
  font-size: 10.625rem;
  text-align: center;

  font-weight: 700;
  z-index: 1;
  text-align: center;
  margin: 0 auto;
`;

export const ErrorNumberAndMessage = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  position: relative;
  text-align: center;
`;

export const ErrorContainer = styled.section`
  width: 100%;
  height: 100vh;
  align-items: center;
  display: flex;
  justify-content: center;
`;
