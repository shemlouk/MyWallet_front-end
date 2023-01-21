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
  width: 200px;
  height: 200px;
  display: flex;
  border-radius: 7px;
  position: absolute;
  align-items: center;
  top: calc(50% - 100px);
  left: calc(50% - 100px);
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
`;

export default LoadingSpinner;
