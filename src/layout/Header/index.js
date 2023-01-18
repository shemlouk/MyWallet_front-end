import { Link } from "react-router-dom";
import * as S from "./style";

const Header = ({ children, hideButton }) => {
  return (
    <S.Container>
      <S.PageTitle>{children}</S.PageTitle>
      <S.Button hideButton={hideButton}>
        <Link to="/">
          <ion-icon name="exit-outline"></ion-icon>
        </Link>
      </S.Button>
      <S.Button hideButton={!hideButton}>
        <Link to="/home">
          <ion-icon name="arrow-back-outline"></ion-icon>
        </Link>
      </S.Button>
    </S.Container>
  );
};

export default Header;
