// simple variables
let deposit = document.querySelector(`#deposit`)
let withdraw = document.querySelector(`#withdraw`)
let balance = document.querySelector(`#balance`)

//deposit all main variables
let inputDeposit = document.querySelector(`#deposit-field`)
let btnDeposti = document.querySelector(`#btn-deposit`)

//withdraw main variables
let inputWithdraw = document.querySelector(`#withdraw-field`)
let btnWithdraw = document.querySelector(`#btn-withdraw`)

btnDeposti.addEventListener('click', function (e) {
  e.preventDefault()
  if (isNaN(inputDeposit.value)) {
    alert('Please Enter A Valid Amount !')
    inputDeposit.value=''
    return
  }
  //deposit functionality
  let previousDeposit = parseFloat(deposit.innerText)
  let currentDeposit = parseFloat(inputDeposit.value)
  let totalDeposit = previousDeposit + currentDeposit
  //balanced functionality
  let previousBalanced = parseFloat(balance.innerText)
  let currentBalanced = parseFloat(inputDeposit.value)
  let totalBalanced = previousBalanced + currentBalanced


  balance.innerText=totalBalanced
  deposit.innerText = totalDeposit
  inputDeposit.value=''

})

// withdraw functionality
btnWithdraw.addEventListener('click', function (e) {
  e.preventDefault()
  if (isNaN(inputWithdraw.value)) {
    alert('Please Enter A Valid Amount !')
    inputWithdraw.value = ''
    return
  }

  //deposit functionality
  let previousWithdraw = parseFloat(withdraw.innerText)
  let currentWithdraw = parseFloat(inputWithdraw.value)
  //balanced functionality
  let previousBalanced = parseFloat(balance.innerText)
  let currentBalanced = parseFloat(inputWithdraw.value)
  if (inputWithdraw.value > previousBalanced) {
    alert('Ahaa Tor Baper Bank A Ato Taka Nai 🏦')
    inputWithdraw.value = ''
    return
  }
  let totalWithdraw = previousWithdraw + currentWithdraw
  let totalBalanced = previousBalanced - currentBalanced
  balance.innerText = totalBalanced
  withdraw.innerText = totalWithdraw
  inputWithdraw.value = ''

})




