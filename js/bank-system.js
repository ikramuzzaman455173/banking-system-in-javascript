// target on id html element
function getIdAllElements(getId) {
  let id = document.getElementById(getId)
  return id
}

// get the value of text
function getTextValue(textValue) {
  let valueText = getIdAllElements(textValue)
  let valueTexts = parseFloat(valueText.innerText)
  return valueTexts
}

// get the all input value

function getInputValue(inputValue) {
  let inputField = getIdAllElements(inputValue)
  let valueInput = parseFloat(inputField.value)
  inputField.value=''
  return valueInput
}


// get set value of text

function getSetValue(textValue, setValue) {
  let valueText = getIdAllElements(textValue)
  valueText.innerText=setValue
}

// deposit functionality
document.querySelector(`#btn-deposit`).addEventListener('click', function () {
  let previousDeposit = getTextValue('deposit')
  let currentDeposit = getInputValue('deposit-field')
  if (isNaN(currentDeposit)) {
    swal("Sorry Amount Not Found!", "Please Enter A Valid Amount !", "warning", {
      button: "Close",
    });
    currentDeposit = ' '
    return
  }

  // connection with balanced
  let previousBalance = getTextValue('balance')

  let totalBalance = currentDeposit + previousBalance
  let totalDeposit = previousDeposit + currentDeposit
  currentDeposit=''
  getSetValue('deposit', totalDeposit)
  getSetValue('balance',totalBalance)
})


// withdraw functionaliy
document.querySelector(`#btn-withdraw`).addEventListener('click', function () {
  let previousWithdraw = getTextValue('withdraw')
  let currentWithdraw = getInputValue('withdraw-field')

  if (isNaN(currentWithdraw)) {
    swal("Sorry Amount Not Found!", "Please Enter A Valid Amount !", "warning", {
      button: "Close",
    });
    currentWithdraw = ' '
    return
  }
  // connect with balanced
  let previousBalance = getTextValue('balance')
  if (currentWithdraw>previousBalance) {
    swal("Don't Have Enough Money !", "Please Deposit First Extra Amount !", "warning", {
      button: "Close",
    })
    currentWithdraw = ''
    return
  }

  let totalWithdraw = previousWithdraw + currentWithdraw
  let totalBalance = previousBalance - currentWithdraw
  getSetValue('withdraw',totalWithdraw)
  getSetValue('balance',totalBalance)
  currentWithdraw=''

  })









