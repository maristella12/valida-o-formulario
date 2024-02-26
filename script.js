const isValidEmail = (email) => {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return regex.test(String(email).toLowerCase());
}

const isValidCPF = (cpf) => {
const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/
return regex.test(String(cpf))
}

const form = document.querySelector('form') 
const input = document.querySelector('input[name="name"]') 

//const message = document.querySelector('thanks')
//const inputEmail = document.querySelector('input[name="e-mail"]')

// VALIDAÇÃO

//let isValidForm =false

//FORMS EVENTS
//VALIDAÇÃO
const validateInput = () => {
if(!input.value){ 
input.classList.remove('invalid')
input.nextElementSibling.classList.remove('error-hidden')//agarre o próximo elemento 'o nome é... e remove
//isValidForm =true
//abaixo quando fizermos o submit e não houver valor removemos o error-hidden e exibe a frase em vermelho
// o error-hidden (tira do esconderijo)'
                }
                           }
//EVENTO
form.addEventListener('submit', (e) =>{ 
e.preventDefault() //paralisa o evento pois é necessário quando há manipulação de dados
validateInput()
console.log('passou')
//VALIDAÇÃO CONTINUA...

//if(isValidForm){
//POST -    Backend
//form.remove()
//message.classList.remove('error-hidden')
//console.log('Valido enviou')
//}
//FORMS EVENTS
})
//EVENTO II
input.addEventListener("input", () => {
validateInput()
input.classList.remove('invalid')
input.nextElementSibling.classList.add('error-hidden')
})