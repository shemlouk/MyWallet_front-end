import setNotificationTimeout from "../../services/utils/setNotificationTimeout";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import formatToLocale from "../../services/utils/formatToLocale";
import LoadingRecords from "../../components/LoadingRecords";
import AuthContext from "../../hooks/AuthContext";
import { COLORS } from "../../services/constants";
import Card from "../../components/Card";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import Main from "../../layout/Main";
import URL from "../../config";
import * as S from "./style";
import axios from "axios";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [records, setRecords] = useState([]);
  const [balance, setBalance] = useState();
  const config = useContext(AuthContext);
  const timeRef = useRef();

  const getData = useCallback(async () => {
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
    } catch (err) {
      setIsLoading(false);
      setNotificationTimeout(timeRef, setMessage);
      setMessage("Não foi possível carregar os dados!");
    }
  });

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header>Olá, {}</Header>
      <Main {...{ message }}>
        <S.Container>
          {isLoading && <LoadingRecords />}
          <S.List>
            {records.length &&
              records.map((record) => <Card key={record._id} {...record} />)}
            <S.ListFooter color={COLORS[balance?.type]}>
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
