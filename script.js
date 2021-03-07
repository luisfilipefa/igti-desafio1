// selectors
const slider = document.querySelector('.slider')
const numText = document.querySelector('.num')
const numExtent = document.querySelector('.extent')

// event listeners
slider.addEventListener('input', updateNumText)

// functions
function updateNumText(event) {
  currentValue = event.target.value
  numText.value = currentValue
  convertNumToExtent(currentValue)
}

function convertNumToExtent(num) {
  const units = ['zero', 'um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove']
  const specialDozens = ['dez', 'onze', 'doze', 'treze', 'quatorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove']
  const dozens = ['dez', 'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa']
  const hundreds = ['cem', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos']

  
  if(num < 10) {
    let splittedNum = String(num).split('')
    let firstDigit = splittedNum[0]
    numExtent.value = units[num]
  }
  if(num >= 10 && num < 20){
    let splittedNum = String(num).split('')
    let firstDigit = splittedNum[0]
    let secondDigit = splittedNum[1]
    numExtent.value = specialDozens[secondDigit]
  }
  if(num >= 20 && num < 100) {
    let splittedNum = String(num).split('')
    let firstDigit = splittedNum[0]
    let secondDigit = splittedNum[1]
    if(secondDigit === '0') {
      numExtent.value = dozens[firstDigit-1]
    } else {
      numExtent.value = dozens[firstDigit-1] + ' e ' + units[secondDigit]
    }
  }
  if(num >= 100 && num < 1000) {
    let splittedNum = String(num).split('')
    let firstDigit = Number(splittedNum[0])
    let secondDigit = Number(splittedNum[1])
    let thirdDigit = Number(splittedNum[2])
    if(firstDigit >= 1 && secondDigit === 0 && thirdDigit === 0) {
      numExtent.value = hundreds[firstDigit-1]
    }
    if(firstDigit === 1 && secondDigit === 0 && thirdDigit > 0 && thirdDigit <= 9) {
      numExtent.value = 'cento e ' + units[thirdDigit] 
    }
    if(firstDigit === 1 && secondDigit === 1 && thirdDigit <= 9) {
      numExtent.value = 'cento e ' + specialDozens[thirdDigit]
    } 
    if(firstDigit === 1 && secondDigit > 1) {
      numExtent.value = 'cento e ' + dozens[secondDigit-1] + ' e ' + units[thirdDigit]
    }
    if(firstDigit > 1 && secondDigit === 0 && thirdDigit > 0 && thirdDigit <= 9) {
      numExtent.value = hundreds[firstDigit-1] + ' e ' + units[thirdDigit] 
    }
    if(firstDigit > 1 && secondDigit === 1) {
      numExtent.value = hundreds[firstDigit-1] + ' e ' + specialDozens[thirdDigit] 
    }
    if(firstDigit > 1 && secondDigit > 1) {
      numExtent.value = hundreds[firstDigit-1] + ' e ' + dozens[secondDigit-1] + ' e ' + units[thirdDigit]
    }
  }
}