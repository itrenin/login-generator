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
  return password
}
function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min //Максимум не включается, минимум включается
}
