export const getRandomBirthdate = (minAge, maxAge) => {
  const age = Math.floor(Math.random() * (maxAge - minAge + 1) + minAge)
  const currentYear = new Date().getFullYear()
  const birthYear = currentYear - age

  // Generate a random month (0-11) and a random day (1-28)
  // Note: For simplicity, we're assuming every month has 28 days. You can extend this to be more accurate.
  const month = Math.floor(Math.random() * 12)
  const day = Math.floor(Math.random() * 28) + 1

  const birthdate = new Date(birthYear, month, day)
  return birthdate.toISOString()
}
