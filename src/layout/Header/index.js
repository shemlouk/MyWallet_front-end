import * as S from "./style";

const Header = ({ children, hideButton }) => {
  return (
    <S.Container>
      <S.PageTitle>{children}</S.PageTitle>
      <S.Button hideButton={hideButton}>
        <ion-icon name="exit-outline"></ion-icon>
      </S.Button>
      <S.Button hideButton={!hideButton}>
        <ion-icon name="arrow-back-outline"></ion-icon>
      </S.Button>
    </S.Container>
  );
};

export default Header;
