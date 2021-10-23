import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 6px;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin: 16px 16px;
  width: 400px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
  
  h2 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 4px;
  }
  a {
    color: blue;
  }
  p {
    margin 10px 2px;
  }
`;
