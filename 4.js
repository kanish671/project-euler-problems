
for (i=999; i>=900 ; i--) {

	for(j=999; j>=900;j--) {
		p = i*j;
		if(isPalindrome(p)) {
			console.log(p);
			break;
		}
	}
}

function isPalindrome(x) {
	y = x.toString()
	for(k=0, l=y.length-1; k<l; k++, l--) {
		if(y[k] !== y[l])
			return false;
	}
	return true;
}
