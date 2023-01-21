const STATUS = 401;

export default function isSessionExpired(statusCode, navegateFunction) {
  if (statusCode !== STATUS) return;
  navegateFunction("/", { state: { message: "Sessão expirada!" } });
}
