import styled from "styled-components";

const Notification = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  animation: fadeout 0.5s;
  font-size: 16px;
  top: 30px;
  justify-content: center;
  user-select: none;
  border-radius: 3px;
  height: 40px;
  position: absolute;
  animation-delay: 3s;
  padding: 0px 20px;
  font-family: "Ubuntu", sans-serif !important;
  display: flex;
  color: white;
  align-items: center;
`;

export default Notification;
