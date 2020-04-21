const formatValue = (value: number): string =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value); // TODO

export default formatValue;
