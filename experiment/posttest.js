///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////THIS A LOGIC TO IMPLEMENT THE QUIZ///////////////////////////////////////////////////////////
var currentQuestion= 0;
var score = 0;
var totQuestion = parseInt(questions.length);
var container= document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');
function loadQuestion(questionIndex)
{
  var q = questions[questionIndex];
  questionEl.textContent = (questionIndex + 1)+ '.' + q.question;
  opt1.textContent = q.option1;
  opt2.textContent = q.option2;
  opt3.textContent = q.option3;
  opt4.textContent = q.option4;
}
 function loadNextQuestion()
 {
  var selectedOption = document.querySelector('input[type=radio]:checked');
  if(!selectedOption)
  {
  alert("Please select your answer!");
  return;
   };

var answer = selectedOption.value;
if(questions[currentQuestion].answer == answer){
score += 10;
}
selectedOption.checked = false;
currentQuestion++;
if(currentQuestion === totQuestion-1)
{
	nextButton.textContent='Finish';
}
if(currentQuestion == totQuestion)
{
 container.style.display ='none';
 resultCont.style.display ='';
 resultCont.textContent ='Your Score:' + score;
 return;
}
loadQuestion(currentQuestion);
}
loadQuestion(currentQuestion);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////THIS IS A ARRAY OF 10 QUESTIONS  WRITE EXACTLY SAME AS WRITTEN/////////////////////////////////////////
var questions = [{
	"question":"What is the Focal length of convex lens ?",
	"option1": "Positive",
	"option2":"Negative",
	"option3":"Zero",
	"option4":"None of the above",
	"answer":"1"
},{
	"question":"What is the Focal length of concave lens ?",
	"option1": "Positive",
	"option2":"Negative",
	"option3":"Zero",
	"option4":"None of the above",
	"answer":"2"
},{
	"question":"What is 'F' stand in lens formula ?",
	"option1": "Object distance",
	"option2":"Image distance",
	"option3":"Focal length",
	"option4":"Radius of curvature",
	"answer":"3"
},{
	"question":"What is 'V' stand in lens formula ?",
	"option1": "Image distance",
	"option2":"Object distance",
	"option3":"Focal length",
	"option4":"Radius of curvature",
	"answer":"1"
},{
	"question":"What is 'U' stand in lens formula ?",
	"option1": "Image distance",
	"option2":"Object distance",
	"option3":"Focal length",
	"option4":"Radius of curvature",
	"answer":"2"
},{
	"question":"What is 'R' stand in lens formula ?",
	"option1": "Image distance",
	"option2":"Object distance",
	"option3":"Focal length",
	"option4":"Radius of curvature",
	"answer":"4"
},{
	"question":"What is the Nature of convex lens ?",
	"option1": "Converging",
	"option2":"Diverging",
	"option3":"Don't know",
	"option4":"None of the above",
	"answer":"1"
},{
	"question":"What is the Nature of concave lens ?",
	"option1": "Converging",
	"option2":"Diverging",
	"option3":"Don't know",
	"option4":"None of the above",
	"answer":"2"
},{
	"question":"In which condition the convex lens formed image at infinite  ?",
	"option1": "U=R",
	"option2":"U=V",
	"option3":"U=F",
	"option4":"U=0",
	"answer":"3"
},{
	"question":"What is the condition  virtual image in  convex lens ?",
	"option1": "U>R",
	"option2":"F<U<R",
	"option3":"U<F",
	"option4":"None of the above",
	"answer":"3"
}]


