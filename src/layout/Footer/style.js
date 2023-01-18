import styled from "styled-components";

export const Container = styled.footer`
  position: fixed;
  bottom: 0px;
  right: 0px;
  width: 100%;
  height: 150px;
  padding: 0px 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.button`
  width: 155px;
  height: 114px;
  padding: 10px 12px;
  border: none;
  border-radius: 5px;
  background-color: var(--lightpurple);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  cursor: pointer;
  ion-icon {
    width: 27px;
    height: 27px;
  }
  p {
    max-width: 64px;
    font-size: 17px;
    font-weight: 700;
    text-align: start;
  }
`;
