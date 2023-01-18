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
            {"Records goes here"}
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
