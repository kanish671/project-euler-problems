n = 600851475143;

function find(no) {
	l = 0;
	while (no%2 ==0) {
		l=2
		no = no/2
	}
	for(i=3; i< Math.sqrt(no); i = i+2) {
		while (no%i == 0) {
			no = no/i;
			l = i;
		}
	}
	if(no>2)
		l = no
	console.log(l)
	return l;
}

find(n)
