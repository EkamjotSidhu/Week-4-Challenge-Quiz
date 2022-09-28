var questions = [{ question: 'Inside which HTML element do we put the JavaScript?', choice1: 'Js', choice2: 'Scripting', choice3: 'Javascript', choice4: 'Script' }, { question: 'What is the correct syntax for referring to an external script called \"scr.js\"?', choice1: 'script src=\'scr.js\'', choice2: 'script href="scr.js"', choice3: 'script name="scr.js"', choice4: 'script link="scr.js"' }, { question: 'How do you find the minimum of x and y using JavaScript?', choice1: 'min(x,y);', choice2: 'Math.min(x,y)', choice3: 'Math.min(xy)', choice4: 'min(xy);' }, { question: 'Which JavaScript label catches all the values, except for the ones specified?', choice1: 'catch', choice2: 'label', choice3: 'try', choice4: 'default' }]
var correctAnswers = ['Script', 'script src=\'scr.js\'', 'Math.min(x,y)', 'default']
var firstQ = document.createElement('div');
var choice1 = document.getElementById('choice1');
var choice2 = document.getElementById('choice2');
var choice3 = document.getElementById('choice3');
var choice4 = document.getElementById('choice4');
var page = document.getElementById('main-page')
var countDown = document.getElementById('timer');
var quizStart = document.getElementById('quizStart')
var choiceButtons = document.querySelectorAll('.choice')
var answerStat = document.getElementById('answer')

function startQ() {
    var score = 0
    var time = 90;
    currentQues = 0
    var timeout = setInterval(function countdown() {
        countDown.textContent = 'Time: ' + time;
        time--
        if (time <= 0) {
            countDown.textContent = 'Time over ';
            clearInterval(timeout)
            page.innerText = 'Your final score score: ' + score + '\n' + 'Enter your name: '
            choice1.style.display = "none"
            choice2.style.display = "none"
            choice3.style.display = "none"
            choice4.style.display = "none"
            answerStat.style.display = 'none'
            var name = document.createElement('input')
            name.setAttribute('type', 'text')
            page.appendChild(name)
            var submit = document.createElement('button')
            submit.textContent = 'Submit'
            page.appendChild(submit)
            submit.addEventListener('click', () => {
                localStorage.setItem('userName', name.value)
                localStorage.setItem('score', time)

                page.innerText = 'HIGHSCORE \n' + name.value + '\t' + score
            })
        }
    }, 1000)
    page.textContent = questions[currentQues].question
    quizStart.style.display = "none"
    choice1.style.display = "block"
    choice1.textContent = questions[currentQues].choice1
    choice2.style.display = "block"
    choice2.textContent = questions[currentQues].choice2
    choice3.style.display = "block"
    choice3.textContent = questions[currentQues].choice3
    choice4.style.display = "block"
    choice4.textContent = questions[currentQues].choice4
    for (var j = 2; j < questions.length; j++) {
        for (i = 0; i < choiceButtons.length; i++) {
            choiceButtons[i].onclick = function check() {

                if (correctAnswers.includes(this.textContent)) {
                    answerStat.style.display = 'block'
                    answerStat.textContent = 'Correct'
                    if (currentQues == 3) {
                        function Submit() {
                            score = time
                            page.innerText = 'Your final score score: ' + score + '\n' + 'Enter your name: '
                            choice1.style.display = "none"
                            choice2.style.display = "none"
                            choice3.style.display = "none"
                            choice4.style.display = "none"
                            answerStat.style.display = 'none'
                            var name = document.createElement('input')
                            name.setAttribute('type', 'text')
                            page.appendChild(name)
                            var submit = document.createElement('button')
                            submit.textContent = 'Submit'
                            page.appendChild(submit)
                            submit.addEventListener('click', () => {
                                localStorage.setItem('userName', name.value)
                                localStorage.setItem('score', time)

                                page.innerText = 'HIGHSCORE \n' + name.value + '\t' + score
                            })
                        }
                        Submit()
                        clearInterval(timeout)
                        return

                    }

                    score = time
                    page.textContent = questions[currentQues + 1].question

                    choice1.textContent = questions[currentQues + 1].choice1

                    choice2.textContent = questions[currentQues + 1].choice2

                    choice3.textContent = questions[currentQues + 1].choice3

                    choice4.textContent = questions[currentQues + 1].choice4
                    if (currentQues < 4) {
                        currentQues++
                    }
                }

                else {
                    time = time - 10
                    answerStat.style.display = 'block'
                    answerStat.textContent = 'Wrong'
                }
            }
        }
    }
}

quizStart.addEventListener('click', startQ)
var HS = document.getElementsByClassName = 'high-score'
HS.addEventListener('click', (e) => {
    e.preventDefault()
    page.innerText = localStorage.getItem('userName') + '\t' +
        localStorage.getItem('score')
})



