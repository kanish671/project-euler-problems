
function isPrime(no) {
	if (no % 2 == 0) {
		return false;
	}
	for(i=3; i<= Math.sqrt(no); i = i+2) {
		if(no%i == 0) {
			return false;
		}
	}
	return true;
}

sum = 2
for(j=3; j < 20; j=j+2) {
	if (isPrime(j)) {
		sum = sum + j;
	}
}
console.log(sum)
