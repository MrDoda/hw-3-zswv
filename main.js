import { createEmployee } from './src/createEmployee.js'

/**
 * Generates random employee data based on the provided parameters.
 *
 * @param {Object} params
 * @param {number} params.count - The number of employees to be generated.
 * @param {Object} params.age - Object containing age constraints.
 * @param {number} params.age.min - Minimum age of the employees.
 * @param {number} params.age.max - Maximum age of the employees.
 * @returns {Array<Object>} An array of employee objects. Each employee object contains:
 * - {string} gender - The gender of the employee ("male" or "female").
 * - {string} birthdate - The birthdate of the employee in ISO format.
 * - {string} name - The first name of the employee.
 * - {string} surname - The surname of the employee.
 * - {number} workload - The workload of the employee.
 */
export const main = (params) => {
  const result = []

  for (let i = 0; i < params.count; i++) {
    result.push(createEmployee(params.age))
  }

  return result
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
