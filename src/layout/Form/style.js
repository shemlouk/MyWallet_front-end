import styled from "styled-components";

const Container = styled.form`
  width: 100%;
  margin-bottom: 36px;
  display: flex;
  align-items: center;
  flex-direction: column;
  p {
    font-family: "Ubuntu", sans-serif !important;
    font-weight: 500;
    font-size: 14px;
    color: white;
    width: 100%;
    min-width: 326px;
    max-width: 426px;
    margin-bottom: 7px;
    ::before {
      margin-right: 5px;
      display: inline;
      content: "●";
    }
  }
`;

export default Container;
