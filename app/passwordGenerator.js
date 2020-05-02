import validator from './passwordValidation'

export default function generator(length, content) {
  let expression = ''

  for (let item in content) {
    expression += content[item]
  }

  const maxPosition = expression.length - 1
  let password = ''
  for (let i = 0; i <= length; i++) {
    password += expression[getRandomInt(0, maxPosition)]
  }

  console.log(`Валидность пароля: ${validator(password, content)}`)
  // if (!validator(password, content)) {
  //   generator(length, content)
  // } else {
  //   return password
  // }
  return password
}

export function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min //Максимум не включается, минимум включается
}
