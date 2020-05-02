import generator from './passwordGenerator'
import template from '../templates/index.hbs'

const letters = 'abcdefghijklmnopqrstuvwxyz'
const capitalsLetters = letters.toUpperCase()
const digits = '0123456789'
const symbols = '~@#$%^&*()_-+={}|/[]<>?'

//const source = [letters, capitalsLetters, digits, symbols]

const content = {
  letters: letters,
  capitalsLetters: capitalsLetters,
  digits: digits,
  symbols: symbols
}

const passwordLength = 8

const result = {
    password: generator(passwordLength, content)

}
template(result)

