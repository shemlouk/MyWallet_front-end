export default function formatToLocale(num) {
  return Math.abs(num).toLocaleString("pt-BR", { minimumFractionDigits: 2 });
}
