import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.18);

  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8.7px);
  -webkit-backdrop-filter: blur(8.7px);
  border: 2px solid rgba(255, 255, 255, 0.3);
  width: max-content;
  padding: 5px 10px;
  border-radius: 10px;

  background-color: black;

  @media ${(props) => props.theme.phoneAndSmaller} {
    width: 100%;
    flex-direction: column;
    gap: 4px;
    background: transparent;
    border: none;
  }
`;

export const ChipRightContent = styled.div`
  width: 50px;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media ${(props) => props.theme.phoneAndSmaller} {
    width: 100%;
    flex-direction: row;
    justify-content: center;
  }
`;

export const ChipText = styled.p`
  font-size: clamp(1rem, 3vw + 1rem, 3rem);
  color: #fff;
  cursor: default;
  @media ${(props) => props.theme.phoneAndSmaller} {
    text-align: center;
  }
`;

export const Blue = styled.div`
  background-color: hsl(200deg 85% 70%);
  height: 12px;

  @media ${(props) => props.theme.phoneAndSmaller} {
    width: 33.3333%;
    height: 5px;
  }
`;

export const White = styled.div`
  background: white;
  height: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  @media ${(props) => props.theme.phoneAndSmaller} {
    width: 33.3333%;
    height: 5px;
  }
`;
