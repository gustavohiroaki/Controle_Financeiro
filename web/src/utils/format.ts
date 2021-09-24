export function toCurrency(value: number | undefined) {
  if (!value) return;

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

export function toDate(value: string) {
  if (!value) return;
  const date = new Date(value);
  return new Intl.DateTimeFormat("pt-BR").format(date);
}
