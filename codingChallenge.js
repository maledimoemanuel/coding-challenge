function sumOfEvenNumbers(arr) {
    return arr.reduce((sum, num) => {
      if (num % 2 === 0) {

        return sum + num;
      } else {
        return sum;
      }
    }, 0);
  }
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const result = sumOfEvenNumbers(numbers);
  console.log(result);
  