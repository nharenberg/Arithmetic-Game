document.addEventListener("DOMContentLoaded", init);
var userAnswer = '';
var answer = 0;
function init ()
{
  var number1;
  var number2;
  getRandom();
  console.log('number1',number1, ', number2', number2);
  answer = number1 + number2;
  console.log('answer',answer);
  //console.log('ready');
  //typeAnswer(answer);

  let buttons = document.getElementsByClassName('button')

  for(var i = 0; i < buttons.length; i++)
  {
    buttons[i].addEventListener('click', buttonClicked);
  }

  function getRandom()
  {
    number1 = Math.floor((Math.random() * 100));
    number2 = Math.floor((Math.random() * 100));

    document.getElementById('num1').textContent = number1;
    document.getElementById('num2').textContent = number2;

  }
    let submit = document.getElementById("submit");
    submit.addEventListener('click', pressSubmit);

    let clear = document.getElementById("reset");
    clear.addEventListener('click', pressReset);

}

function buttonClicked(event)
{

  userAnswer += (event.target.textContent);

  //alert(userAnswer);
  document.getElementById("answer").innerHTML = userAnswer;
}

function pressSubmit()
{
  userAnswer = parseInt(userAnswer);
 console.log('user answer', userAnswer);
    if (userAnswer == answer){
    alert("YOU WIN");
  }
  else{
    alert("YOU LOSE :(")
    document.getElementById("answer").innerHTML = answer;
  }
}

function pressReset(){
  document.getElementById("answer").innerHTML ='';
  userAnswer = '';
  init();
}