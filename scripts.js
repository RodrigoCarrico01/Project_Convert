// Cotação de moedas do dia (valores hipoteticos)
const USD = 4.87
const EUR = 5.32
const GBP = 6.08

// Obter os elementos do form
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

//Manipular o input amount para receber somente números
amount.addEventListener("input", ()=>{
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, "")
})


// Capturar o evento de submit(enviar) do formulário
form.onsubmit = (event) => {
  event.preventDefault()

  switch (currency.value){
    case "USD":
      convertCurrency(amount.value, USD, "US$")
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "£")
      break;
    default: 
      console.log("Inválido")
      break;
  }
}

// Função para converter a moeda.
function convertCurrency(amount, pricing, symbol){
  try {
    //Exibir a cotação da moeda selecionada
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(pricing)}`

    // Calcula o total
    let total = amount * pricing

    // Verifica se o resultado não é um número
    if(isNaN(total)){
      return alert("Por favor, escreve um valor corretamente para converter!")
    }

    //Formatar o valor total.
    total = formatCurrencyBRL(total).replace("R$", "")
    

    // Exibe o resultado total.
    result.textContent = `${total} Reais`

    // Aplica a class que exibe o footer com o resultado
    footer.classList.add("show-result") 
  } catch(error) {
    // Remove a class que exibe o footer. (Ou seja, tira o footer da tela)
    footer.classList.remove("show-result") 

    console.log(error)
    alert("Não foi possível converter. Tente novamente mais tarde.")
  }
} 

//Formata a moeda em reais zuka
function formatCurrencyBRL(value){
  //converte para numero para utilizar o tolocalestring para formatar no padrão BRL(R$ 00,00).
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  } )
}



