-1: 
===================================
const isPrime = (n) => {
  if (n < 0) {
    console.log('Não é possível verificar se este número é primo')
    return
  }
  let divisionsQuantity = 0

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      divisionsQuantity++
    }
  }
  return divisionsQuantity === 2
}

===================================

-2 ==> [a]

-3 ==> [c]

-4 ==> [e]

-5 ==> [e]

-6 ==> [a]