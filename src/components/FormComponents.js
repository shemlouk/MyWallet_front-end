import styled from "styled-components";

export const Input = styled.input`
  min-width: 326px;
  max-width: 426px;
  width: 100%;
  height: 58px;
  border: none;
  border-radius: 5px;
  background-color: white;
  padding: 18px 15px;
  font-size: 20px;
  margin-bottom: 13px;
  :focus {
    outline: none;
  }
`;

export const Submit = styled.input`
  min-width: 326px;
  max-width: 426px;
  width: 100%;
  height: 46px;
  border: none;
  border-radius: 5px;
  background-color: var(--lightpurple);
  color: white;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
`;
