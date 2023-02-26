

function myFunction() {

    var x = Number.MAX_SAFE_INTEGER + 1, text;
    x = document.getElementById("numb").value;
    var fizzBuzz = document.getElementById("fizz");

    if (isNaN(x) || x < 1) {
      text = "Input not valid", fizzBuzz.style.display = "none";
      } else if 
      (x % 15 == 0) {
      text = "FizzBuzz", fizzBuzz.style.display = "block";
        } else if 
      (x % 5 == 0) {
      text = "Buzz", fizzBuzz.style.display = "none";
        } else if 
          (x % 3 == 0) {
      text = "Fizz", fizzBuzz.style.display = "none";
    } else {
      text = "Try Again", fizzBuzz.style.display = "none";
    }
    document.getElementById("answer").innerHTML = text;
  }

  