import { useState } from "react";
import Container from "./style";

const Message = ({ children }) => {
  const [fade, setFade] = useState(false);

  setTimeout(() => {
    setFade(true);
  }, 3000);

  return <Container fade={fade}>{children}</Container>;
};

export default Message;
