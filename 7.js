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

p = 3
l = 3;
for(j = 1; j <= 10000;) {
	if (isPrime(p)) {
		console.log(p)
		p = p + 2;
		l = p;
		j++;
	} else  {
		p = p + 2;
	}
}
