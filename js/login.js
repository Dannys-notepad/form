const form = document.querySelector('form')
const nameInput = document.querySelector('.name')
const passwordInput = document.querySelector('.password')
const btn = document.querySelector('button')

function validInputs(){
  if(nameInput.value === '' && passwordInput.value === ''){
    nameInput.style.border = '2px solid red'
    passwordInput.style.border = '2px solid red'
    
    setInterval(() => {
      nameInput.style.border = ''
      passwordInput.style.border = ''
    }, 3000);
  }else if(nameInput.value === '' && passwordInput.value !== ''){
     nameInput.style.border = '2px solid red'
     
     setInterval(() => {
       nameInput.style.border = ''
     }, 2000)
     return false
     nameInput.focus()
  }else if(passwordInput.value === '' && nameInput.value !== ''){
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
  passwordInput.value = ''
}

form.addEventListener("submit", (e) =>{
  e.preventDefault()
  validInputs()
})
