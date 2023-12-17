export const median = (array, sortFunction) => {
  const sortedArray = [...array].sort(sortFunction)

  const mid = Math.floor(sortedArray.length / 2)

  if (sortedArray.length % 2 !== 0) {
    return sortedArray[mid]
  }

  return (sortedArray[mid - 1] + sortedArray[mid]) / 2
}
