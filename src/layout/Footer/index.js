import * as S from "./style";

const Footer = () => {
  return (
    <S.Container>
      <S.Button>
        <ion-icon name="add-circle-outline"></ion-icon>
        <p>Nova entrada</p>
      </S.Button>
      <S.Button>
        <ion-icon name="remove-circle-outline"></ion-icon>
        <p>Nova saída</p>
      </S.Button>
    </S.Container>
  );
};

export default Footer;
