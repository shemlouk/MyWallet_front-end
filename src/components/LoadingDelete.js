import { RotatingSquare } from "react-loader-spinner";

const LoadingDelete = () => {
  return (
    <RotatingSquare
      height="30"
      width="30"
      color="var(--lightpurple)"
      ariaLabel="rotating-square-loading"
      strokeWidth="4"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};

export default LoadingDelete;
