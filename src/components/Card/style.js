import styled from "styled-components";

export const Container = styled.li`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  font-size: 16px;
`;

export const Date = styled.p`
  width: 40px;
  color: var(--lightgray);
  margin-right: 10px;
`;

export const Value = styled.p`
  width: 60px;
  text-align: end;
  font-family: "Roboto", sans-serif !important;
  color: ${({ color }) => "var(--" + color + ")"};
`;

export const Description = styled.p`
  flex: 1;
  font-weight: 500;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
