import Card from "../../components/Card";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import Main from "../../layout/Main";
import * as S from "./style";

const Home = () => {
  return (
    <>
      <Header>Olá, Fulano!</Header>
      <Main>
        <S.Container>
          <S.List>
            <Card date="30/11" text="Salário" value="4569,90" type="income" />
            <Card date="30/11" text="Almoço" value="39,90" type="expense" />
            <Card date="30/11" text="Janta" value="59,90" type="expense" />
            <S.ListFooter>
              SALDO <p>{"2849,96"}</p>
            </S.ListFooter>
          </S.List>
          <S.Message hide>
            <p>Não há registros de entrada ou saída</p>
          </S.Message>
        </S.Container>
      </Main>
      <Footer />
    </>
  );
};

export default Home;
