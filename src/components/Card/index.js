import * as S from "./style";

const colors = { income: "green", expense: "red" };

const Card = ({ date, text, value, type }) => {
  return (
    <S.Container>
      <S.Date>{date}</S.Date>
      <S.Description>{text}</S.Description>
      <S.Value color={colors[type]}>{value}</S.Value>
    </S.Container>
  );
};

export default Card;
