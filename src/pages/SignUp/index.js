import * as F from "../../components/FormComponents";
import AppLogo from "../../components/AppLogo";
import Form from "../../layout/Form/index";
import Main from "../../layout/Main/index";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <Main>
      <AppLogo />
      <Form>
        <F.Input type="text" placeholder="Nome" />
        <F.Input type="email" placeholder="Email" />
        <F.Input type="password" placeholder="Senha" />
        <F.Input type="password" placeholder="Confirme a senha" />
        <F.Submit type="submit" value="Cadastrar" />
      </Form>
      <Link to="/">Já tem uma conta? Entre agora!</Link>
    </Main>
  );
};

export default SignUp;
