// Prompt Quizzer – A Quiz Game

// 1. Quiz Questions Array
const quizQuestions = [
    { question: "How many hattricks did Cristiano Ronaldo score at madrid and in how many games?", answer: "44 hattricks in 438 games" },
    { question: "What kind of injury made Neymar JR unable to continue in 2014 WC?", answer: "Spinal Injury" },
    { question: "Who scored 91 goals in 2012?", answer: "Lionel Messi" },
    { question: "Who did Zidane headbutt in 2006 WC final?", answer: "Marco Matterazzi" },
    { question: "Who is the greatest Striker of our generation", answer: "Robert Lewandowski" }
];

// 2. Function to Run the Quiz
function runQuiz() {
    let score = 0; // Score initialization

    for (let i = 0; i < quizQuestions.length; i++) {
        let userAnswer = prompt(quizQuestions[i].question);

        if (!userAnswer) {
            alert("No answer entered. Moving to the next question.");
            continue;
        }

        // Normalize Input
        userAnswer = userAnswer.toLowerCase().trim();
        let correctAnswer = quizQuestions[i].answer.toLowerCase().trim();

        // Check Answer
        if (userAnswer === correctAnswer) {
            score++;
            alert("Correct!");
        } else {
            alert(`Wrong! The correct answer is: ${quizQuestions[i].answer}`);
        }
    }

    // Final Score
    alert(`Quiz Finished!\nYour final score is ${score} out of ${quizQuestions.length}.`);
}

// Run the quiz
runQuiz();