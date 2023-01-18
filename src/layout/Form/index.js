import Container from "./style";

const Form = ({ children, submitFunction }) => {
  return (
    <Container
      onSubmit={(e) => {
        e.preventDefault();
        submitFunction();
      }}
    >
      {children}
    </Container>
  );
};

export default Form;
