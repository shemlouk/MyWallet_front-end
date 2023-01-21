import formatToLocale from "../../services/utils/formatToLocale";
import { useCallback, useContext, useState } from "react";
import AuthContext from "../../hooks/AuthContext";
import { TYPES } from "../../services/constants";
import LoadingDelete from "../LoadingDelete";
import URL from "../../config";
import * as S from "./style";
import dayjs from "dayjs";
import axios from "axios";

const Card = ({ _id, date, description, value, type, getData, setMessage }) => {
  const [isLoading, setIsLoading] = useState(false);
  const config = useContext(AuthContext);
  const removeRecord = useCallback(async () => {
    setIsLoading(true);
    try {
      await axios.delete(`${URL}/record/${_id}`, config);
      getData();
    } catch (err) {
      setMessage("Não foi possível deletar!");
      setIsLoading(false);
    }
  }, [_id, config, getData, setMessage]);
  return (
    <S.Container>
      <S.Date>{dayjs(date).format("DD/MM")}</S.Date>
      <S.Description>{description}</S.Description>
      <S.Value color={TYPES[type].color}>{formatToLocale(value)}</S.Value>
      {isLoading ? (
        <LoadingDelete />
      ) : (
        <ion-icon onClick={removeRecord} name="close" />
      )}
    </S.Container>
  );
};

export default Card;
