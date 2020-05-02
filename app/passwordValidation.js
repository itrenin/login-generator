import isEmpty from './isEmpty'

export default function validator(password, parameters) {

if (!password.length || isEmpty(parameters)) {
    return false
}

  let valid = false
  let param = ''

  for (const item in parameters) {
    for (let i = 0; i < password.length; i++) {
      if (parameters[item].includes(password[i])) {
        valid = true
        break
      } else {
        valid = false
        param = parameters[item]
      }
    }
  }
  if (valid === false) {
    console.log(`параметр вылета: ${param}`)
  }
  return valid
}
