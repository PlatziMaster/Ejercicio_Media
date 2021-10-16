const listArray = [12, 6, 7, 3, 15, 10, 18, 5];

function average(listNumbers) {
  const sumOfTerms = listNumbers.reduce((prev, current) => prev + current, 0);
  const totalOfTerms = listNumbers.length;

  return sumOfTerms / totalOfTerms;
}

function variance(average, listNumbers) {
  const totalSumOfTerms = listNumbers.reduce((prev, current) => {
    const diff = current - average;
    const sumOfCurrentTerm = Math.pow(diff, 2);

    return prev + sumOfCurrentTerm;
  }, 0);

  const totalOfTerms = listNumbers.length - 1;

  return totalSumOfTerms / totalOfTerms;
}

const averageCalculated = average(listArray);
const varianceCalculated = variance(averageCalculated, listArray);

console.log(`Average: ${averageCalculated}`);
console.log(`Population variance: ${varianceCalculated}`);
