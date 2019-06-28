const howManySmaller = (arr, n) =>
  arr.filter(num => Number(num.toFixed(2)) < n).length
