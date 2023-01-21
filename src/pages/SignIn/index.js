import setNotificationTimeout from "../../services/utils/setNotificationTimeout";
import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import * as F from "../../components/FormComponents";
import { INPUTS } from "../../services/constants";
import AppLogo from "../../components/AppLogo";
import Form from "../../layout/Form/index";
import Main from "../../layout/Main/index";
import { useForm } from "react-hook-form";
import URL from "../../config";
import axios from "axios";

const formInputs = INPUTS.filter((i) => i.forms.includes("signin"));

const SignIn = ({ setKey }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { state } = useLocation();
  const navigate = useNavigate();
  const timeRef = useRef();
  const {
    setFocus,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = useCallback(
    async ({ email, password }) => {
      setIsLoading(true);
      try {
        const {
          data: { token },
        } = await axios.post(`${URL}/signin`, { email, password });
        setKey({ headers: { Authorization: `Bearer ${token}` } });
        navigate("/home");
      } catch ({ response }) {
        setNotificationTimeout(timeRef, setMessage);
        setIsLoading(false);
        switch (response?.status) {
          case 404:
            setMessage("Email não cadastrado!");
            break;
          case 401:
            setMessage("Senha incorreta!");
            break;
          default:
            setMessage("Não foi possível fazer login!");
        }
      }
    },
    [navigate, setKey]
  );

  useEffect(() => {
    if (!state?.message) return;
    setMessage(state.message);
    setNotificationTimeout(timeRef, setMessage);
  }, []);

  useEffect(() => {
    switch (message) {
      case "Email não cadastrado!":
        setFocus("email", { shouldSelect: true });
        break;
      case "Senha incorreta!":
        setFocus("password", { shouldSelect: true });
        break;
    }
  }, [message]);

  return (
    <Main {...{ message, isLoading }}>
      <AppLogo />
      <Form submitFunction={handleSubmit(submit)}>
        {formInputs.map((input, index) => (
          <Fragment key={index}>
            <F.Input
              {...register(input.field, { required: input.error })}
              type={input.type}
              disabled={isLoading}
              placeholder={input.placeholder}
            />
            {errors[input.field] && <p>{errors[input.field].message}</p>}
          </Fragment>
        ))}
        <F.Submit type="submit" value="Entrar"></F.Submit>
      </Form>
      <Link to="/cadastro">Primeira vez? Cadastre-se!</Link>
    </Main>
  );
};

export default SignIn;
