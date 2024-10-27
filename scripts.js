// Seleciona os elementos do formulário.

const amount = document.getElementById("amount")

// Captura o evento de imput para formatar o valor.
amount.oninput = () => {
let value = amount.value.replace(/\D/g, "")
amount.value = value
}