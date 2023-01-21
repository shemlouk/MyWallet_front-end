import setNotificationTimeout from "../../services/utils/setNotificationTimeout";
import { useCallback, useEffect, useState, useRef, Fragment } from "react";
import { INPUTS } from "../../services/constants";
import { Link, useNavigate } from "react-router-dom";
import * as F from "../../components/FormComponents";
import AppLogo from "../../components/AppLogo";
import Form from "../../layout/Form/index";
import Main from "../../layout/Main/index";
import { useForm } from "react-hook-form";
import URL from "../../config";
import axios from "axios";

const formInputs = INPUTS.filter((i) => i.forms.includes("signup"));

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const timeRef = useRef();
  const {
    setFocus,
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = useCallback(async ({ name, email, password }) => {
    setIsLoading(true);
    try {
      await axios.post(`${URL}/signup`, { name, email, password });
      navigate("/", { state: { message: "Cadastro realizado com sucesso!" } });
    } catch ({ response }) {
      setNotificationTimeout(timeRef, setMessage);
      setIsLoading(false);
      switch (response?.status) {
        case 409:
          setMessage("Email já cadastrado!");
          break;
        default:
          setMessage("Não foi possível realizar cadastro!");
      }
    }
  });

  useEffect(() => {
    message === "Email já cadastrado!" &&
      setFocus("email", { shouldSelect: true });
  }, [message]);

  return (
    <Main {...{ message, isLoading }}>
      <AppLogo />
      <Form submitFunction={handleSubmit(submit)}>
        {formInputs.map((input, index) => (
          <Fragment key={index}>
            <F.Input
              {...register(
                input.field,
                input.field === "confirmPassword"
                  ? {
                      validate: {
                        matchesPassword: (value) =>
                          getValues().password === value || input.error,
                      },
                    }
                  : { required: input.error }
              )}
              type={input.type}
              disabled={isLoading}
              placeholder={input.placeholder}
            />
            {errors[input.field] && <p>{errors[input.field].message}</p>}
          </Fragment>
        ))}
        <F.Submit type="submit" value="Cadastrar" />
      </Form>
      <Link to="/">Já tem uma conta? Entre agora!</Link>
    </Main>
  );
};

export default SignUp;
