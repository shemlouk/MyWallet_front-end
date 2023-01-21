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
];

export const DELAY = 3500;
