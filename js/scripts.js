function beepBoop(input){
  for (i = 0; i <= input; i++) {
    if ((i+'').indexOf('3') > -1){
      console.log("neighbor")
    }
    else if ((i+'').indexOf('2') > -1){
      console.log("boop")
    }
      else if ((i+'').indexOf('1') > -1){
        console.log("beep")
      }
    else {console.log(i)}; }
  }


  $(document).ready(function() {
    $("#robotRogers").submit(function(event) {
      const input = parseInt($("input#number").val());
      // console.log(year);
      console.log(beepBoop(input));
      event.preventDefault();
    })
  })