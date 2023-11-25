export const getRandomBirthdate = (minAge, maxAge) => {
  const age = Math.floor(Math.random() * (maxAge - minAge + 1) + minAge)
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()
  const currentMonth = currentDate.getMonth()
  const currentDay = currentDate.getDate()

  let birthYear = currentYear - age

  const month = Math.floor(Math.random() * 12)
  const daysInMonth = new Date(birthYear, month + 1, 0).getDate()

  const day = Math.floor(Math.random() * daysInMonth) + 1

  // Adjusting the birth year: If the randomly generated birthday hasn't happened yet this year,
  // we go back one year to align with the age range.
  // Fun fact: If we land on Feb 29 in a leap year, JavaScript smartly shifts it to Mar 1st –
  // which neatly fits our requirements. ( this only happens if we have to subtract the year on a leap year of 29th )
  if (month > currentMonth || (month === currentMonth && day > currentDay))
    birthYear -= 1

  const birthdate = new Date(birthYear, month, day)
  return birthdate.toISOString()
}
