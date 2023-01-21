import LoadingSpinner from "../../components/LoadingSpinner";
import Notification from "../../components/Notification";
import Container from "./style";

const Main = ({ children, flexStart, message, isLoading }) => {
  return (
    <Container {...{ flexStart }}>
      {isLoading && <LoadingSpinner />}
      {message && <Notification>{message}</Notification>}
      {children}
    </Container>
  );
};

export default Main;
