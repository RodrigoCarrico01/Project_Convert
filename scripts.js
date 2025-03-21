// Obter os elementos do form
const amount = document.getElementById("amount")

//Manipular o input amount para receber somente números
amount.addEventListener("input", ()=>{
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, "")
})





