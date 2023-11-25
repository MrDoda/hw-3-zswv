import { names } from './czechNames.js'
import { getRandomBirthdate } from './getRandomBirthdate.js'

const gender = ['male', 'female']

const workload = [10, 20, 30, 40]

export const createEmployee = ({ min, max }) => {
  const randomName =
    names[Math.floor(Math.random() * names.length)].name.split(' ')

  return {
    gender: gender[Math.floor(Math.random() * gender.length)],
    birthdate: getRandomBirthdate(min, max),
    name: randomName[0],
    surname: randomName[1],
    workload: workload[Math.floor(Math.random() * workload.length)],
  }
}
