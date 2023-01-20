import { InfinitySpin } from "react-loader-spinner";
import styled from "styled-components";

const LoadingSpinner = () => {
  return (
    <Container>
      <InfinitySpin width="200" color="#fff" />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0px;
  left: 0px;
`;

export default LoadingSpinner;
