import * as S from "./style";

const Header = ({ children, hideButton }) => {
  return (
    <S.Container>
      <S.PageTitle>{children}</S.PageTitle>
      <S.SignOutButton {...{ hideButton }}>
        <ion-icon name="exit-outline"></ion-icon>
      </S.SignOutButton>
    </S.Container>
  );
};

export default Header;
