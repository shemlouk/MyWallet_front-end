import * as F from "../../components/FormComponents";
import Header from "../../layout/Header";
import Form from "../../layout/Form";
import Main from "../../layout/Main";

const IncomeForm = () => {
  return (
    <>
      <Header hideButton>Nova entrada</Header>
      <Main flexStart>
        <Form>
          <F.Input type="number" placeholder="Valor" />
          <F.Input type="text" placeholder="Descrição" />
          <F.Submit type="submit" value="Salvar entrada" />
        </Form>
      </Main>
    </>
  );
};

export default IncomeForm;
