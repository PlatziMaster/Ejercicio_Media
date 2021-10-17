const listArray = [12, 6, 7, 3, 15, 10, 18, 5];
const form = document.querySelector('#form');

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

function stringToNumberList(valueInput) {
  const formatedString = valueInput.replace(/[\[\]]|\s/g, '');
  const listOfString = formatedString.split(',');

  return listOfString.map((el) => parseInt(el));
}

function renderResults(average, variance, listOfNums) {
  const resultsContainer = document.querySelector('.results');

  if (resultsContainer.classList.contains('d-none'))
    resultsContainer.classList.remove('d-none');

  resultsContainer.innerHTML = `<h2 class="results-title">Results</h2>
  <p><strong>List of numbers: </strong>${listOfNums}</p>
  <p><strong>Average: </strong>${average.toFixed(4)}</p>
  <p><strong>Population variance: </strong>${variance.toFixed(4)}</p>`;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const input = document.querySelector('#input-values');
  const valueInput = input.value;

  if (!valueInput) return;

  const listOfNums = stringToNumberList(valueInput);

  const averageCalculated = average(listOfNums);
  const varianceCalculated = variance(averageCalculated, listOfNums);

  renderResults(averageCalculated, varianceCalculated, valueInput);
});
