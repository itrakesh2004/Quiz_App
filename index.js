
const qeizcontainer= document.getElementById("Quiz")
const submitButton= document.getElementById("submit");
const resultsContainer= document.getElementById("results");

const myQuestions = [
    {
        question:"what is capital of france?",
        answers:{
            a:"paris",
            b:"london",
            c:"new yourk"
        },
        correctAnswer:"a"
    },
    {
        question:"what is the largest country in the world?",
        answers:{
            a:"Russia",
            b:"china",
            c:"united state"
        },
        correctAnswer:"b"
    },
   {
        question:"what is capital of india?",
        answers:{
            a:"paris",
            b:"london",
            c:"dilhi"
        },
        correctAnswer:"c"
    }
    ,
    {question:"what is capital of india?",
        answers:{
            a:"paris",
            b:"london",
            c:"dilhi"
        },
        correctAnswer:"c"}
]

function buildQuiz(){
    const output = []

    myQuestions.forEach((currentqestion,questionNumber) => { 

        const answers=[]

        for(letter in currentqestion.answers){
            answers.push(
                
                  `<label>  <input type="radio" name="question${questionNumber}" value="${letter}"/>${letter}
                    ${currentqestion.answers[letter]} </label>`
          )
        }
        // console.log(answers)
        output.push(
            `
            <div class="question">${currentqestion.question} </div>
             <div class="answers">${answers.join('')} </div>
             `
        )
       
     })
    qeizcontainer.innerHTML=output.join('')
}

function showResults(){
   const answercontainers=qeizcontainer.querySelectorAll('.answers');

   let numCorrect=0;

   myQuestions.forEach((currentqestion,questionNumber) => {
    const answercontainer=answercontainers[questionNumber]
   const selector= `input[name=question${questionNumber}]:checked`
   const userAnswer=(answercontainer.querySelector(selector) || {}).value
   
   if (userAnswer===currentqestion.correctAnswer){
    numCorrect++
    answercontainers[questionNumber].style.color="green"

   }else{
    answercontainers[questionNumber].style.color='red'
   }
   
   })
   resultsContainer.innerHTML=`${numCorrect} out of ${myQuestions.length}`
}

buildQuiz()

submitButton.addEventListener('click', showResults)

