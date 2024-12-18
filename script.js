document.addEventListener('DOMContentLoaded', () =>{

    const startBtn = document.getElementById("start-btn");
    const nextBtn = document.getElementById("next-btn");
    const restartBtn = document.getElementById("restart-btn");
    const questionContainer = document.getElementById("question-container");
    const questionText = document.getElementById("question-text");
    const choicesList = document.getElementById("choices-list");
    const resultContainer = document.getElementById("result-container");
    const scoreDisplay = document.getElementById("score");


    const questions = [
    {
        question: "What is the name of Doraemon's best friend?",
        choices: ["Shizuka", "Nobita", "Gian", "Suneo"],
        answer: "Nobita",
    },
    {
        question: "What is the name of the gadget that allows flying?",
        choices: ["Anywhere Door", "Bamboo Copter", "Time Machine", "Invisibility Clock"],
        answer: "Bamboo Copter", 
    },
    {
        question: "Who is bullying Nobita?",
        choices: ["Gian and Suneo", "Shizuka and Suneo", "Doreamon and Shizuka", "Gian and Doraemon"],
        answer: "Gian and Suneo",
    },
    {
        question: "What gadget helps you travel anywhere instantly?",
        choices: ["Time Machine", "Memory Bread", "Anywhere Door", "Translator Jelly"],
        answer: "Anywhere Door",
    },
    {
        question: "Who is doraemon's little sister?",
        choices: ["Shizuka", "Mimi", "Dorami", "Sue"],
        answer: "Dorami",
    },
    {
        question: "What is Nobita's biggest weakness?",
        choices: ["Sports", "Studying", "Both a and b", "Cooking"],
        answer: "Studying",
    },
    {
        question: "What was Doraemon's original color before turning blue?",
        choices: ["Green", "White", "Blue", "Yellow"],
        answer: "Yellow",
    },
    {
        question: "What is the full name of Nobita?",
        choices: ["Nobita Nobi", "Nobita Matsumoto", "Nobita Shizuo", "Nobita Tamako"],
        answer: "Nobita Nobi",
    },
    {
        question: "Where is Doraemon's pocket located?",
        choices: ["On his back", "On his chest", "On his belly", "He doesn't have a pocket"],
        answer: "On his belly",
    },
    {
        question: "What is Doraemon's favorite food",
        choices: ["Sushi", "Doracake", "Pizza", "Ramen"],
        answer: "Doracake",
    },
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    startBtn.addEventListener('click', startQuiz);

    nextBtn.addEventListener('click', () => {
        currentQuestionIndex++;
        if(currentQuestionIndex < questions.length) {
            showQuestion();
        }else {
            showResult();
        }
    });

    restartBtn.addEventListener('click', () => {
        score = 0;
        resultContainer.classList.add('hidden')
        startQuiz();
    });


    function startQuiz(){
        startBtn.classList.add('hidden');
        resultContainer.classList.add('hidden');
        questionContainer.classList.remove('hidden')
        showQuestion()
    }

        function showQuestion(){
            nextBtn.classList.add('hidden');
            questionText.textContent = questions[currentQuestionIndex].question
            choicesList.innerHTML = ""
            questions[currentQuestionIndex].choices.forEach(choice => {
                const li = document.createElement('li')
                li.textContent = choice
                li.addEventListener('click', () => selectAnswer(choice))
                choicesList.appendChild(li);
            })
        }

        function selectAnswer(choice){
            const correctAnswer = questions[currentQuestionIndex].answer;
            if(choice === correctAnswer){
                score++;
            }
            
            nextBtn.classList.remove('hidden');
        }

        function showResult(){
            questionContainer.classList.add('hidden')
            resultContainer.classList.remove('hidden')
            scoreDisplay.textContent = `${score} out of ${questions.length}`
        }
});