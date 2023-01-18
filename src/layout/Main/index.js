import Container from "./style";

const Main = ({ children, flexStart }) => {
  return <Container {...{ flexStart }}>{children}</Container>;
};

export default Main;
