import { useState } from 'react';
import '../CSS/quiz.css'
import NavImg from '../components/navImg'
import { MdAccessAlarms } from "react-icons/md";
import Question from '../components/question';
function Quiz() {
    const [questions, setQuestions] = useState([
        {
            question: "Which document officially authorizes a project?",
            ans1: "Work Breakdown Structure",
            ans2: "Project Charter",
            ans3: "Project Scope Statement",
            correct: 2,
        },
        {
            question: "Which of the following is a key output of the Define Scope process?",
            ans1: "Scope Statement",
            ans2: "Project Charter",
            ans3: "Risk Register",
            correct: 1,
        },
        {
            question: "In project management, which constraint is known as the “triple constraint”?",
            ans1: "Quality, Cost, Procurement",
            ans2: "Scope, Time, Cost",
            ans3: "Stakeholder, Time, Resources",
            correct: 2,
        },
        {
            question: "During which process group is the majority of a project’s budget spent?",
            ans1: "Initiating",
            ans2: "Closing",
            ans3: "Executing",
            correct: 3,
        },
        {
            question: "Which tool is used to break down project deliverables into smaller components?",
            ans1: "Stakeholder Analysis",
            ans2: "Work Breakdown Structure (WBS)",
            ans3: "Responsibility Assignment Matrix",
            correct: 2,
        },
    ]);

    return (
        <section>
            <div className="quiz-nav">
                <NavImg />
            </div>
            <div className="quiz-header">
                <div className="header-text">
                    <h1>PMP Practice Test</h1>
                    <h1>Project Management Basics</h1>
                </div>
                <span>30 Min <MdAccessAlarms /></span>
            </div>

            <div className="quiz">
                {questions.map((q, index) => (
                    <Question
                        key={index}
                        question={q.question}
                        ans1={q.ans1}
                        ans2={q.ans2}
                        ans3={q.ans3}
                        correct={q.correct}
                    />
                ))}
                <button className='finish-btn'>Finish</button>
            </div>
            
        </section>
    )
}
export default Quiz;