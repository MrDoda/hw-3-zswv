import { names } from './czech-names.js'
import { getRandomBirthdate } from './get-random-birth-date.js'

const gender = ['male', 'female']

const workload = [10, 20, 30, 40]

export const createStudent = ({ min, max }) => {
  const randomName =
    names[Math.floor(Math.random() * names.length)].name.split(' ')

  return {
    gender: gender[Math.floor(Math.random() * 2)],
    birthdate: getRandomBirthdate(min, max),
    name: randomName[0],
    surname: randomName[1],
    workload: workload[Math.floor(Math.random() * workload.length)],
  }
}
