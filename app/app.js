import generator from './passwordGenerator'
import login from './loginGenerator'
import render from '../templates/result.hbs'
import isEmpty from './isEmpty'

const resultDiv = document.querySelector('#result')
const fullNameField = document.querySelector('#full-name')
const resultButton = document.querySelector('#result-button')
const passwordButton = document.querySelector('#password-button')
const checkLetters = document.querySelector('#letters')
const checkUpper = document.querySelector('#upper')
const checkDigits = document.querySelector('#digits')
const checkSymbols = document.querySelector('#symbols')
const numberOfSymbols = document.querySelector('#number-of-symbols')

const letters = 'abcdefghijklmnopqrstuvwxyz'
const capitalsLetters = letters.toUpperCase()
const digits = '0123456789'
const symbols = '~@#$%^&*()_-+={}|/[]<>?'

resultButton.addEventListener('click', (e) => {
  e.preventDefault()

  // console.log(checkLetters.checked)
  // console.log(checkUpper.checked)
  // console.log(checkDigits.checked)
  // console.log(checkSymbols.checked)

  let content = {}

  checkLetters.checked && (content.letters = letters)
  checkUpper.checked && (content.capitalsLetters = capitalsLetters)
  checkDigits.checked && (content.digits = digits)
  checkSymbols.checked && (content.symbols = symbols)

  const passwordLength = numberOfSymbols.value
  let result = {}

  if (!fullNameField.value) {
    result = {
      error: 'Введите ФИО полностью без сокращений в поле ввода ФИО',
    }
  } else if (!fullNameField.value.includes(' ')) {
    result = {
      error:
        'В ФИО должно быть введено минимум 2 слова: фамилия и имя через пробел',
    }
  } else if (isEmpty(content)) {
    result = {
      error:
        'Для пароля должен быть указан хотя бы один параметр генерации (чекбокс сверху)',
    }
  } else {
    result = {
      password1: generator(passwordLength, content),
      password2: generator(passwordLength, content),
      password3: generator(passwordLength, content),
      password4: generator(passwordLength, content),
      password5: generator(passwordLength, content),
      login: login(fullNameField.value.toString()),
      fullName: fullNameField.value.toString(),
    }
  }

  console.log(result)
  fullNameField.value = ''

  resultDiv.innerHTML = render(result)
})
passwordButton.addEventListener('click', (e) => {
  e.preventDefault()
  const passwordLength = numberOfSymbols.value

  let content = {}

  checkLetters.checked && (content.letters = letters)
  checkUpper.checked && (content.capitalsLetters = capitalsLetters)
  checkDigits.checked && (content.digits = digits)
  checkSymbols.checked && (content.symbols = symbols)

  const result = {
    password1: generator(passwordLength, content),
    password2: generator(passwordLength, content),
    password3: generator(passwordLength, content),
    password4: generator(passwordLength, content),
    password5: generator(passwordLength, content)
  }

  resultDiv.innerHTML = render(result)
})
