import { generateEmployeeData } from './src/generateEmployeeData.js'
import { getEmployeeStatistics } from './src/getEmployeeStatistics.js'

export const main = (params) => {
  const employees = generateEmployeeData(params)
  const employeeStatistics = getEmployeeStatistics(employees)

  return employeeStatistics
}

const dtoIn = {
  count: 50,
  age: {
    min: 19,
    max: 35,
  },
}

console.log('Vstup: ', dtoIn)

const dtoOut = main(dtoIn)

console.log('Výstup: ', dtoOut)
