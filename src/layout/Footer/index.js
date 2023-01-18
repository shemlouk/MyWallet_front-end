import { Link } from "react-router-dom";
import * as S from "./style";

const Footer = () => {
  return (
    <S.Container>
      <Link to="/nova-entrada">
        <S.Button>
          <ion-icon name="add-circle-outline"></ion-icon>
          <p>Nova entrada</p>
        </S.Button>
      </Link>
      <Link to="/nova-saida">
        <S.Button>
          <ion-icon name="remove-circle-outline"></ion-icon>
          <p>Nova saída</p>
        </S.Button>
      </Link>
    </S.Container>
  );
};

export default Footer;
