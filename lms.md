-1: 
===================================
const isPrime = (n) => {
  let divisionsQuantity = 0

  for(let i = 1; i <= n; i++) {
    if(n % i === 0){
      divisionsQuantity++
    }
  }
  return divisionsQuantity === 2 ? true : false
}

===================================

-2 ==> [a]

-3 ==> [c]

-4 ==> [e]

-5 ==> [e]

-6 ==> [a]