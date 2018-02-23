module.exports = function getZerosCount(number, base) {
  var zeros = 0, tmpzeros = 0;
  var i, limit, lejandr = [];
  limit = Math.sqrt(base);
  if (base == 2){lejandr.push([2,1]);}
  for (i = 2; i <= limit; i++) {
    count = 0;
    while (base % i == 0) {
      base /= i;
      count++;
      if (base == 1){
        base*=i;
        break;
      }  
    }
  if (count > 0) {lejandr.push([i,count]);}
}

if (base > i) {lejandr.push([base,1]);}

  for (i = 0; i < lejandr.length; i++){
	tmpnumber = number; 
    
	while(tmpnumber){
      tmpnumber = (tmpnumber/lejandr[i][0])|0;
      tmpzeros+=tmpnumber;
	}

  	tmpzeros=(tmpzeros/lejandr[i][1])|0;

  	if ((zeros > tmpzeros) || (zeros == 0)){
      zeros = tmpzeros;
  	}
  	tmpzeros = 0;
  }
  return(zeros);
}