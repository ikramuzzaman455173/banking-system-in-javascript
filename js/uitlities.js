// input field value find
function inputGetValue(inputValue) {
  let inputField = document.getElementById(inputValue)
  let getInputValue = parseFloat(inputField.value)
  inputField.value=''
  return getInputValue
}

// get text element value
function getTextElementvalue(textValue) {
  let getValueText = document.getElementById(textValue)
  let valueText = parseFloat(getValueText.innerText)
  return valueText
}


// set text element value
function setTextValue(valueText, setValue) {
  let valueTexts = document.getElementById(valueText)
  valueTexts.innerText=setValue
}

// deposit functionality
document.querySelector(`#btn-deposit`).addEventListener('click', function () {
  let previousDeposit = getTextElementvalue('deposit')
  let currentDeposit = inputGetValue('deposit-field')
  if (isNaN(currentDeposit)) {
    alert('Please Enter A Valid Number!')
    // swal("Good job!", "You clicked the button!", "success");
    currentDeposit = ''
    return
  }
  let totalDeposit = previousDeposit + currentDeposit

  // connect with balnced

  let previousBalance = getTextElementvalue('balance')
  let totalBalance = previousBalance + currentDeposit


  currentDeposit=''
  setTextValue('deposit',totalDeposit)
  setTextValue('balance',totalBalance)
})

// withdraw functionality

document.querySelector(`#btn-withdraw`).addEventListener('click', function () {
  let previousWithdraw = getTextElementvalue('withdraw')
  let currentWithdraw = inputGetValue('withdraw-field')
  if (isNaN(currentWithdraw)) {
    alert('Please Enter A Valid Number!')
    currentWithdraw = ''
    return
  }
  // connect with balnced
  let previousBalanced = getTextElementvalue('balance')
  if (currentWithdraw > previousBalanced) {
    alert("Sorry Don't Have Enough Money !")
    return
  }
  let totalBalance=previousBalanced - currentWithdraw
  let totalWithdraw = previousWithdraw + currentWithdraw
  currentWithdraw=''
  setTextValue('withdraw',totalWithdraw)
  setTextValue('balance',totalBalance)
})
