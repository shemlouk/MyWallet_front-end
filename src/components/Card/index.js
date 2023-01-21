import formatToLocale from "../../services/utils/formatToLocale";
import { COLORS } from "../../services/constants";
import * as S from "./style";
import dayjs from "dayjs";

const Card = ({ date, description, value, type }) => {
  return (
    <S.Container>
      <S.Date>{dayjs(date).format("DD/MM")}</S.Date>
      <S.Description>{description}</S.Description>
      <S.Value color={COLORS[type]}>{formatToLocale(value)}</S.Value>
      <ion-icon name="close" />
    </S.Container>
  );
};

export default Card;
