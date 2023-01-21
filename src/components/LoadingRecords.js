import { MutatingDots } from "react-loader-spinner";
import styled from "styled-components";

const LoadingRecords = () => {
  return (
    <Container>
      <MutatingDots
        height="100"
        width="100"
        color="var(--purple)"
        secondaryColor="var(--lightpurple)"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-color: white;
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

export default LoadingRecords;
