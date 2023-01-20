import LoadingSpinner from "../../components/LoadingSpinner";
import Message from "../../components/Message/index";
import { Link, useNavigate } from "react-router-dom";
import * as F from "../../components/FormComponents";
import AppLogo from "../../components/AppLogo";
import Form from "../../layout/Form/index";
import Main from "../../layout/Main/index";
import { useForm } from "react-hook-form";
import { useState } from "react";
import URL from "../../config";
import axios from "axios";

const SignUp = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const {
    reset,
    setFocus,
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = ({ name, email, password }) => {
    setIsLoading(true);
    axios
      .post(`${URL}/signup`, { name, email, password })
      .then(() => {
        navigate("/");
      })
      .catch(({ response }) => {
        setIsLoading(false);
        if (response.status === 409) {
          setShowMessage(true);
          setTimeout(() => setShowMessage(false), 3500);
          setFocus("email");
          reset({ email: "" });
        }
      });
  };

  return (
    <Main>
      {isLoading && <LoadingSpinner />}
      {showMessage && <Message>Email já cadastrado!</Message>}
      <AppLogo />
      <Form submitFunction={handleSubmit(submit)}>
        <F.Input
          {...register("name", { required: "Nome é obrigatório!" })}
          placeholder="Nome"
          disabled={isLoading}
        />
        {errors.name && <p>{errors.name.message}</p>}
        <F.Input
          {...register("email", { required: "Email é obrigatório!" })}
          type="email"
          placeholder="Email"
          disabled={isLoading}
        />
        {errors.email && <p>{errors.email.message}</p>}
        <F.Input
          {...register("password", { required: "Senha é obrigatório!" })}
          type="password"
          placeholder="Senha"
          disabled={isLoading}
        />
        {errors.password && <p>{errors.password.message}</p>}
        <F.Input
          {...register("confirmPassword", {
            validate: {
              matchesPassword: (value) =>
                getValues().password === value || "As senhas devem ser iguais!",
            },
          })}
          type="password"
          placeholder="Confirme a senha"
          disabled={isLoading}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        <F.Submit type="submit" value="Cadastrar" />
      </Form>
      <Link to="/">Já tem uma conta? Entre agora!</Link>
    </Main>
  );
};

export default SignUp;
