import styled from "styled-components";

export const Container = styled.header`
  height: 80px;
  margin: 0px 25px;
  padding-bottom: 22px;
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

export const SignOutButton = styled.div`
  display: ${({ hideButton }) => hideButton && "none"};
  ion-icon {
    width: 30px;
    height: 30px;
    color: white;
    cursor: pointer;
  }
`;
