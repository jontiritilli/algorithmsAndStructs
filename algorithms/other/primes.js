const PrimeMaker = horizon => {
  const primes = [];
  for(let i = 0; i<=horizon; i++){
      if(isPrime(i))
          primes.push(i);
      else
          continue;
  }
  console.log(`primes: ${primes}, primes b/t 0-${horizon}: ${primes.length}`)
}

const isPrime = num => {
  for(let i = 2, max = Math.sqrt(num); i <= max; i++){
      if(num % i === 0) return false
  }
  return num > 1
}