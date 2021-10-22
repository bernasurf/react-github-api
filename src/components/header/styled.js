import styled from "styled-components";

export const WrapperHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding: 6px;

  input {
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 16px;
    border: 0.2px solid #ccc;
    width: 70%;
    height: 6vh;
    margin-left: 4px;
    padding-left: 20px;
    
  }

  button {
    background-color: #ccc;
    padding: 4px;
    border-radius: 8px;
    font-size: 12px;
    text-align: center;
    width: 20%;
    
    &:hover {
      background-color: #2c5282;
      color: #ffffff;
      box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
    }
    
    span {
      font-weight: bold;
      color: #ffff;
    } 
  }
`;