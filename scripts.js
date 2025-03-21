// Obter os elementos do form
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")

//Manipular o input amount para receber somente números
amount.addEventListener("input", ()=>{
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, "")
})


// Capturar o evento de submit(enviar) do formulário
form.onsubmit = (event) => {
  event.preventDefault()
  console.log(currency.value)
}




