function convert() {
  const exchangeRates = {
    usd: 1.00,
    quetzal: 8.57,
    lempira: 24.82,
  };
  const amount = document.querySelector("input[name='amount']").value;
  const from = document.querySelector("#from").value;
  const to = document.querySelector("#to").value;
  const result = amount * exchangeRates[to] / exchangeRates[from];
  document.querySelector("#result").innerHTML = `${amount} ${from.toUpperCase()} = ${result.toFixed(2)} ${to.toUpperCase()}`;
}