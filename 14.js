var max = 1
var maxc = 1
for(var i = 3; i < 1000000; i= i+2) {
	var	a = i;
	var c = 1;
	while (a != 1) {
		c++;
		if (a%2 ==0) {
			a = a/2;
		} else {
			a = 3*a + 1;
		}
	}
	if(c > maxc) {
		maxc = c;
		max = i;
	}
}
console.log(`${max}: ${maxc}`)
