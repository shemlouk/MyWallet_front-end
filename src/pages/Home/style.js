import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 23px 12px 40px 12px;
  background-color: white;
  border-radius: 5px;
`;

export const List = styled.ul`
  width: 100%;
  height: 100%;
  padding-bottom: 10px;
  overflow-y: scroll;
`;

export const ListFooter = styled.div`
  width: 100%;
  height: 40px;
  padding: 0px 12px;
  position: absolute;
  bottom: 0px;
  right: 0px;
  border-top: 1px solid var(--lightgray);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 17px;
  font-weight: 700;
  p {
    font-family: "Roboto", sans-serif !important;
    font-weight: 400;
    color: ${({ color }) => "var(--" + color + ")"};
  }
`;

export const Message = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  display: ${({ hide }) => (hide ? "none" : "flex")};
  align-items: center;
  justify-content: center;
  background-color: white;
  color: var(--gray);
  font-size: 20px;
  z-index: 1;
  p {
    user-select: none;
    text-align: center;
    width: 180px;
  }
`;
