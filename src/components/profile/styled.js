import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  font-family: roboto, sans-serif;
`;

export const WrapperImage = styled.img`
  border-radius: 50%;
  height: 180px;
  margin: 24px 4px;
`;

export const WrapperInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: 2px;
  height: 200px;
  h1 {
    font-size: 30px;
  }
  h3 {
    font-size: 18px;
  }
  h4 {
    font-size: 16px;
  }
`;

export const WrapperUserItem = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3px;
  margin-left: 4px;
  a, span {
    margin-left: 8px;
  }
  a {
    color: blue;
  }
`;
export const WrapperUserNumbers = styled.div`
  display: flex;
  align-items: center;
  div {
    margin: 0px 8px;
    text-align: center;
  }
`;