function calc(valor1, valor2, operator) {
  switch (operator) {
    case '+':
      return parseInt(valor1) + parseInt(valor2);
    case '-':
      return valor1 - valor2;
    case '*':
      return valor1 * valor2;
    case '/':
      return valor1 / valor2;
  }
}

calc(8,8,'+');