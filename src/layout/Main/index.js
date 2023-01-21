import Notification from "../../components/Notification";
import Container from "./style";

const Main = ({ children, flexStart, message }) => {
  return (
    <Container {...{ flexStart }}>
      {message && <Notification>{message}</Notification>}
      {children}
    </Container>
  );
};

export default Main;
