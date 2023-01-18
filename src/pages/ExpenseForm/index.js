import * as F from "../../components/FormComponents";
import Header from "../../layout/Header";
import Form from "../../layout/Form";
import Main from "../../layout/Main";

const ExpenseForm = () => {
  return (
    <>
      <Header hideButton>Nova saída</Header>
      <Main flexStart>
        <Form>
          <F.Input type="number" placeholder="Valor" />
          <F.Input type="text" placeholder="Descrição" />
          <F.Submit type="submit" value="Salvar saída" />
        </Form>
      </Main>
    </>
  );
};

export default ExpenseForm;
