import styled from "styled-components";

const Container = styled.main`
  height: 100vh;
  padding-top: 80px;
  padding-bottom: 150px;
  margin: 0px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${({ flexStart }) => (flexStart ? "flex-start" : "center")};
`;

export default Container;
