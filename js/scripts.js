function beepBoop(input){
  for (i = 0; i <= input; i++) {
    if ((i+'').indexOf('3') > -1){
      console.log("neighbor")
    }else if ((i+'').indexOf('2') > -1){
      console.log("boop")}
    else {console.log(i)}; }
  }
