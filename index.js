//ARRAYS
// Dados o seguinte conjunto de números: 
const numbers = "0,1,4,6,8"
const fullName = "Gabriel Machado"

// 1) Obtenha um array onde cada posição é um número desse conjunto
const numbersArray = numbers.split(',').map(number => Number(number))
const nameArray = fullName.split(' ')

// 2) Obtenha um conjunto que contenha o dobro de cada número
const doubleNumbers = numbersArray.map(number => {
  return number * 2
})

// 3) Obtenha um conjunto com os valores que são maiores que 4
const filteredNumbers = numbersArray.filter(number => {
  return number > 4
})

// OBJETOS
// Dado o seguinte objeto: 
const user = {
  name: "Gabriel",
  phone: "51999999999",
  email: "gabriel.teste@teste.com"
}

// 1) Adicione a propriedade "endereco" ao usuário, com qualquer valor
user.endereco = 'Rua Teste, 345'

// 2) Remova a propriedade "phone"
delete user.phone

// 3) Copie esse usuário para outro e faça uma alteração qualquer em alguma propriedade somente na cópia
// destructure
// spread operator ...
const newUser = { ...user }
newUser.name = 'Jeorge'

// HTML
// O usuário precisa preencher 2 valores e escolher uma opção entre
// - somar
// - subtrair
// - multiplicar
// - dividir
// O resultado deve aparecer em algum lugar
// Obs.: Pense no fluxo completo dessas operações

// Solução
const resultBox = document.getElementById('resultado')

function somar() {
  const number1 = document.getElementById('number-one')
  const number2 = document.getElementById('number-two')
  const resultado = Number(number1.value) + Number(number2.value)
  resultBox.innerHTML = resultado
}