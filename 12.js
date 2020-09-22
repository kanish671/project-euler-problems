for(var a = 1; true ;a++) {
  var n = a*(a+1)/2
  var c = 0;
  for(var i = 1; i <= Math.sqrt(n); i++) {
    if(n%i == 0) {
      if(n/i == i) {
        c++;
      } else {
        c = c+2;
      }
    }
  }
  if(c > 500) {
    console.log(`${n} : ${a} : ${c}`)
    break;
  }
}
