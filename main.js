import { createStudent } from './src/create-student.js'

/**
 * Generates random student data based on the provided parameters.
 *
 * @param {Object} params
 * @param {number} params.count - The number of students to be generated.
 * @param {Object} params.age - Object containing age constraints.
 * @param {number} params.age.min - Minimum age of the students.
 * @param {number} params.age.max - Maximum age of the students.
 * @returns {Array<Object>} An array of student objects. Each student object contains:
 * - {string} gender - The gender of the student ("male" or "female").
 * - {string} birthdate - The birthdate of the student in ISO format.
 * - {string} name - The first name of the student.
 * - {string} surname - The surname of the student.
 * - {number} workload - The workload of the student.
 */
export const main = (params) => {
  const result = []

  for (let i = 0; i < params.count; i++) {
    result.push(createStudent(params.age))
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
