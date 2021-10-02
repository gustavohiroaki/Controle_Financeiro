export function currencyMask(value: string) {
  let tempValue = value;

  tempValue = tempValue?.replace(/\D/g, "");
  tempValue = tempValue?.replace(/(\d)(\d{2})$/, "$1,$2");
  tempValue = tempValue?.replace(/(?=(\d{3})+(\D))\B/g, ".");

  return tempValue;
}
