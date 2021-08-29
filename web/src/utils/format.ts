export function toCurrency(value: number | undefined) {
  if (!value) return;

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}
