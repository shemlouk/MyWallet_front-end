import * as F from "../../components/FormComponents";
import AppLogo from "../../components/AppLogo";
import Form from "../../layout/Form/index";
import Main from "../../layout/Main/index";
import { Link } from "react-router-dom";
import { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <Main>
      <AppLogo />
      <Form>
        <F.Input type="email" placeholder="E-mail" required></F.Input>
        <F.Input type="password" placeholder="Senha" required></F.Input>
        <F.Submit type="submit" value="Entrar"></F.Submit>
      </Form>
      <Link to="/cadastro">Primeira vez? Cadastre-se!</Link>
    </Main>
  );
};

export default SignIn;
