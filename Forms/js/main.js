const form = document.querySelector('form')
const nameInput = document.querySelector('.name')
const emailInput = document.querySelector('.email')
const passwordInput = document.querySelector('.password')
const btn = document.querySelector('button')

function validInputs(){
  if(nameInput.value === '' && emailInput.value === '' && passwordInput.value === ''){
    nameInput.style.border = '2px solid red'
    emailInput.style.border = '2px solid red'
    passwordInput.style.border = '2px solid red'
    
    setInterval(() => {
      nameInput.style.border = ''
      emailInput.style.border = ''
      passwordInput.style.border = ''
    }, 3000);
  }else if(nameInput.value === '' && emailInput.value !== '' && passwordInput.value !== ''){
     nameInput.style.border = '2px solid red'
     
     setInterval(() => {
       nameInput.style.border = ''
     }, 2000)
     return false
     nameInput.focus()
  }else if(emailInput.value === '' && nameInput.value !== '' && passwordInput.value !== ''){
     emailInput.style.border = '2px solid red'
     
     setInterval(() => {
       emailInput.style.border = ''
     }, 2000)
     return false
     nameInput.focus()
  }else if(passwordInput.value === '' && emailInput.value !== '' && nameInput.value !== ''){
     passwordInput.style.border = '2px solid red'
     
     setInterval(() => {
       passwordInput.style.border = ''
     }, 2000)
     return false
     nameInput.focus()
  }
  clearFields()
}

function clearFields(){
  nameInput.value = ''
  emailInput.value = ''
  passwordInput.value = ''
}

form.addEventListener("submit", (e) =>{
  e.preventDefault()
  validInputs()
})
