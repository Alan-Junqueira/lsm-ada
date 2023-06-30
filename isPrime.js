const isPrime = (n) => {
  let divisionsQuantity = 0

  for(let i = 1; i <= n; i++) {
    if(n % i === 0){
      divisionsQuantity++
    }
  }
  return divisionsQuantity === 2 ? true : false
}

//* Teste com os números primos de 1 a 100
// const numbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
// numbers.forEach(n => {
//   const isPrimeResult = isPrime(n)

//   console.log(isPrimeResult)
// })