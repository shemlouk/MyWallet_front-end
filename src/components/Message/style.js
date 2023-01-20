import styled from "styled-components";

const Container = styled.div`
  height: 40px;
  display: flex;
  padding: 0px 20px;
  border-radius: 3px;
  align-items: center;
  justify-content: center;
  font-family: "Ubuntu", sans-serif !important;
  user-select: none;
  font-size: 16px;
  color: white;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 30px;
  animation: ${({ fade }) => fade && "fadeout .5s"};
`;

export default Container;
