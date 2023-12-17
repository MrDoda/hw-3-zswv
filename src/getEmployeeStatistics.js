import { calculateAgeFromIsoDate } from './calculateAgeFromIso.js'
import { median } from './median.js'

/**
 * @typedef {Object} Employee
 * @property {string} gender - The gender of the employee.
 * @property {Date} birthdate - The birthdate of the employee.
 * @property {string} name - The first name of the employee.
 * @property {string} surname - The surname of the employee.
 * @property {number} workload - The workload of the employee.
 */

/**
 * @typedef {Object} Statistics
 * @property {number} [averageAge] - The average age of the employees.
 * @property {Object.<string, number>} [genderDistribution] - The distribution of genders among the employees.
 * // Add more properties as per the actual statistics returned by the function
 */

/**
 * Calculates and returns statistics based on the provided array of employees.
 *
 * @param {Employee[]} employees - An array of employee objects.
 */
export const getEmployeeStatistics = (employees) => {
  const statistics = {
    workload10: 0,
    workload20: 0,
    workload30: 0,
    workload40: 0,
    minAge: Number.MAX_SAFE_INTEGER,
    maxAge: 0,
  }

  statistics.total = employees.length

  let ageSum = 0
  let womenWorkloadSum = 0
  let womanCount = 0

  const employeesWorkloadList = []
  const employeesAgeList = []

  for (const employee of employees) {
    statistics[`workload${employee.workload}`] += 1
    const age = calculateAgeFromIsoDate(employee.birthdate)
    ageSum += age

    if (age >= statistics.maxAge) {
      statistics.maxAge = age
    }

    if (age <= statistics.minAge && statistics.minAge !== 0) {
      statistics.minAge = age
    }

    if (employee.gender === 'female') {
      womanCount++
      womenWorkloadSum += employee.workload
    }

    employeesWorkloadList.push(employee.workload)
    employeesAgeList.push(age)
  }

  statistics.total = employees.length
  statistics.averageAge = ageSum / employees.length
  statistics.medianAge = median(employeesAgeList)
  statistics.medianWorkload = median(employeesWorkloadList)
  statistics.averageWomenWorkload = womenWorkloadSum / womanCount
  statistics.sortedByWorkload = [...employees].sort(
    (employeeA, employeeB) => employeeA.workload - employeeB.workload
  )

  return statistics
}
