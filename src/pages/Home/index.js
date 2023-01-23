import setNotificationTimeout from "../../services/utils/setNotificationTimeout";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import isSessionExpired from "../../services/utils/isSessionExpired";
import formatUserName from "../../services/utils/formatUserName";
import formatToLocale from "../../services/utils/formatToLocale";
import LoadingRecords from "../../components/LoadingRecords";
import { useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../../hooks/AuthContext";
import UserContext from "../../hooks/UserContext";
import { TYPES } from "../../services/constants";
import Card from "../../components/Card";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import Main from "../../layout/Main";
import URL from "../../config";
import * as S from "./style";
import axios from "axios";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [records, setRecords] = useState([]);
  const [balance, setBalance] = useState();
  const userName = useContext(UserContext);
  const config = useContext(AuthContext);
  const { state } = useLocation();
  const navigate = useNavigate();
  const timeRef = useRef();

  const getData = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(`${URL}/record`, config);
      setIsLoading(false);
      setRecords(data);
      const sum = data.reduce(
        (result, { type, value }) =>
          type === "income" ? result + value : result - value,
        0
      );
      setBalance({
        type: sum > 0 ? "income" : "expense",
        value: formatToLocale(sum),
      });
    } catch ({ response: { status } }) {
      setIsLoading(false);
      isSessionExpired(status, navigate);
      setMessage("Não foi possível carregar os dados!");
    }
  }, [config, navigate]);

  useEffect(() => {
    getData();
    if (!state?.message) return;
    setMessage(state.message);
  }, []);

  useEffect(() => {
    setNotificationTimeout(timeRef, setMessage);
  }, [message]);

  return (
    <>
      <Header {...{ setMessage, setIsLoading }}>
        Olá, {userName && formatUserName(userName)}
      </Header>
      <Main {...{ message, isLoading }}>
        <S.Container>
          {isLoading && <LoadingRecords />}
          <S.List>
            {records.length &&
              records.map((record) => (
                <Card
                  {...record}
                  key={record._id}
                  {...{ getData, setMessage }}
                />
              ))}
            <S.ListFooter color={TYPES[balance?.type]?.color}>
              SALDO <p>{"R$ " + balance?.value}</p>
            </S.ListFooter>
          </S.List>
          <S.Message hide={records.length}>
            <p>Não há registros de entrada ou saída</p>
          </S.Message>
        </S.Container>
      </Main>
      <Footer />
    </>
  );
};

export default Home;
