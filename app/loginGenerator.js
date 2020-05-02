import cyrillicToTranslit from 'cyrillic-to-translit-js/CyrillicToTranslit'

export default function login(string) {
  let loginString = []
  let tempString = cyrillicToTranslit().transform(string, ' ').toLowerCase()

  tempString = tempString.split(' ')
  //console.log(tempString)

  loginString.push(tempString[1].slice(0, 1))
  loginString.push(tempString[0])
  return loginString.toString().replace(',', '.')
}