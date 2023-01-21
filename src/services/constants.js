export const INPUTS = [
  {
    forms: ["signup"],
    field: "name",
    type: "text",
    placeholder: "Nome",
    error: "Nome é obrigatório!",
  },
  {
    forms: ["signup", "signin"],
    field: "email",
    type: "email",
    placeholder: "Email",
    error: "Email é obrigatório!",
  },
  {
    forms: ["signup", "signin"],
    field: "password",
    type: "password",
    placeholder: "Senha",
    error: "Senha é obrigatória!",
  },
  {
    forms: ["signup"],
    field: "confirmPassword",
    type: "password",
    placeholder: "Confirme a senha",
    error: "As senhas devem ser iguais!",
  },
  {
    forms: ["addrecord"],
    field: "value",
    type: "number",
    placeholder: "Valor",
    error: "Valor não pode ser nulo ou negativo!",
  },
  {
    forms: ["addrecord"],
    field: "description",
    type: "text",
    placeholder: "Descrição",
    error: "Descrição é obrigatória!",
  },
  {
    forms: ["addrecord"],
    field: "date",
    type: "date",
    placeholder: "",
    error: "Data é obrigatória!",
  },
];

export const DELAY = 3500;

export const TYPES = {
  income: {
    color: "green",
    name: "entrada",
  },
  expense: {
    color: "red",
    name: "saída",
  },
};
