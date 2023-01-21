import setNotificationTimeout from "../../services/utils/setNotificationTimeout";
import { Fragment, useCallback, useContext, useRef, useState } from "react";
import isSessionExpired from "../../services/utils/isSessionExpired";
import { useLocation, useNavigate } from "react-router-dom";
import { INPUTS, TYPES } from "../../services/constants";
import * as F from "../../components/FormComponents";
import AuthContext from "../../hooks/AuthContext";
import { useForm } from "react-hook-form";
import Header from "../../layout/Header";
import Form from "../../layout/Form";
import Main from "../../layout/Main";
import URL from "../../config";
import dayjs from "dayjs";
import axios from "axios";

const formInputs = INPUTS.filter((i) => i.forms.includes("addrecord"));

const AddRecord = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const today = dayjs().format("YYYY-MM-DD");
  const config = useContext(AuthContext);
  const { type } = useLocation().state;
  const navigate = useNavigate();
  const timeRef = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { date: today } });

  const submit = useCallback(
    async ({ value, description, date }) => {
      setIsLoading(true);
      try {
        await axios.post(
          `${URL}/record`,
          { value, description, date, type },
          config
        );
        navigate("/home", {
          state: { message: `Nova ${TYPES[type].name} registrada!` },
        });
      } catch ({ response: { status } }) {
        setIsLoading(false);
        isSessionExpired(status, navigate);
        setNotificationTimeout(timeRef, setMessage);
        setMessage("Não foi possível fazer registro!");
      }
    },
    [config, navigate, type]
  );

  return (
    <>
      <Header hideButton>Nova {TYPES[type].name}</Header>
      <Main flexStart {...{ message, isLoading }}>
        <Form submitFunction={handleSubmit(submit)}>
          {formInputs.map((input, index) => (
            <Fragment key={index}>
              <F.Input
                {...register(
                  input.field,
                  input.field === "value"
                    ? {
                        valueAsNumber: true,
                        validate: {
                          isGreaterThanZero: (value) =>
                            value > 0 || input.error,
                        },
                      }
                    : { required: input.error }
                )}
                type={input.type}
                disabled={isLoading}
                placeholder={input.placeholder}
                max={input.field === "date" ? today : ""}
                step={input.field === "value" ? ".01" : ""}
              />
              {errors[input.field] && <p>{errors[input.field].message}</p>}
            </Fragment>
          ))}
          <F.Submit type="submit" value={`Salvar ${TYPES[type].name}`} />
        </Form>
      </Main>
    </>
  );
};

export default AddRecord;
