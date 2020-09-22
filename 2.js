getSumEvenFibonacci = () => {
  sum = 0
  prev = 1
  for(i = 1; i < 4000000;) {
    if (i % 2 === 0) {
      sum = sum + i
    }
    x = i
    i = i + prev
    prev = x
  }
  return sum
}
