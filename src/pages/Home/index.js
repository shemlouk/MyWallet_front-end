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
            <Card
              date="30/11"
              text="Some expensive purchase"
              value="39,90"
              type="expense"
            />
            <S.ListFooter>
              SALDO <p>{"2849,96"}</p>
            </S.ListFooter>
          </S.List>
        </S.Container>
      </Main>
      <Footer />
    </>
  );
};

export default Home;
