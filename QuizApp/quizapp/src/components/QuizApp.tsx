import { useState } from "react";

export default function QuizApp() {
    let quizapp = [
        {
            id: 1,
            question: "What does HTML stand for?",
            answer: "Hyper Text Markup Language",
            options: [
                "Hyper Text Markup Language",
                "Hyper Tag Markup Language",
                "Hyperlinking Text Markup Language",
                "Hyper Text Mark Language"
            ]
        },
        {
            id: 2,
            question: "What does CSS stand for?",
            answer: "Cascading Style Sheet",
            options: [
                "Cascading Sheet Style",
                "Cascading Style Sheet",
                "Center Style Sheet",
                "Center Sheet Style"
            ]
        },
        {
            id: 3,
            question: "What does JS stand for?",
            answer: "Javascript",
            options: [
                "Java Sheet",
                "Javascript School",
                "Javascript",
                "Java Style"
            ]
        },
        {
            id: 4,
            question: "Who Invented HTML?",
            answer: "Tim Berners-Lee",
            options: [
                "Brendan Eich",
                "Wium Lieript",
                "Tim Berners-Lee"
            ]
        },
        {
            id: 5,
            question: "Who Invented CSS?",
            answer: "Wium Lieript",
            options: [
                "Brendan Eich",
                "Wium Lieript",
                "Tim Berners-Lee",
            ]
        },
        {
            id: 6,
            question: "Who Invented Javascript?",
            answer: "Brendan Eich",
            options: [
                "Brendan Eich",
                "Wium Lieript",
                "Tim Berners-Lee",
            ]
        },
    ];

    const [currentIndex, setCurrentIndex] = useState<any>(0);
    const [count, setCount] = useState<any>(0);
    const [quizCompleted, setQuizCompleted] = useState<boolean>(false);

    const checkAnswer = (answer: any) => {
        if (answer === quizapp[currentIndex].answer) {
            setCount(count + 1);
        }
    }

    const handleSubmit = (answer: any) => {
        checkAnswer(answer);
        if (currentIndex === quizapp.length - 1) {
            setQuizCompleted(true);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    }

    return (
        <div className="container">
            <h1>Quiz App</h1>
            <h1>Correct {count}</h1>
            <div className="questions">
                <h1>{currentIndex + 1}/{quizapp.length}</h1>
                <p>{quizapp[currentIndex].question}</p>
            </div>
            {!quizCompleted && (
                <div className="options">
                    <div className="row">
                        {quizapp[currentIndex].options.map((item: any, index: any) => (
                            <div className="col-md-6" key={index}>
                                <button onClick={() => handleSubmit(item)}>{item}</button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {quizCompleted && (
                <div>
                    <h2>Quiz Completed!</h2>
                    <p>Total Correct Answers: {count}</p>
                    {/* Add any additional UI for showing results */}
                </div>
            )}
        </div>
    )
}