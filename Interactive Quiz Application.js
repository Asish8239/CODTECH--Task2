const quiz = document.getElementById('quiz');
const results = document.getElementById('results');
const nextButton = document.getElementById('.next-btn');
const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const answers = [];
    const questions = quiz.querySelectorAll('.question');

    questions.forEach((question, index) => {
        const radios = question.querySelectorAll('input[type="radio"]');
        let answer;

        radios.forEach((radio) => {
            if (radio.checked) {
                answer = radio.value;
            }
        });

        answers.push(answer);
    });

    const correctAnswers = ['New-Delhi', 'Narendra Modi', 'Vatican City','Kerala','Nirmala Sitaraman','Indian Space Research Organisation'];
   
    let score = 0;

    answers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score++;
        }
    });

    results.innerHTML = `You scored ${score} out of ${answers.length}`;

  //for displaying answers
    questions.forEach((question, index) => {
        const radios = question.querySelectorAll('input[type="radio"]');
        const correctAnswer = correctAnswers[index];

        radios.forEach((radio) => {
            if (radio.value === correctAnswer) {
                radio.parentNode.classList.add('correct');
            } else {
                radio.parentNode.classList.add('incorrect');
            }
        });
    });
});
