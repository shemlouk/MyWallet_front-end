import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 80px;
  padding: 0px 25px 22px 25px;
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export const PageTitle = styled.h1`
  color: white;
  font-size: 26px;
  font-weight: 700;
  user-select: none;
`;

export const Button = styled.div`
  display: ${({ hideButton }) => hideButton && "none"};
  height: 30px;
  ion-icon {
    width: 30px;
    height: 30px;
    color: white;
    cursor: pointer;
  }
`;
