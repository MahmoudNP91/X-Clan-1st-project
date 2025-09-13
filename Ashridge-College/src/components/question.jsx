import { useEffect, useState } from 'react';
import '../CSS/quiz.css'

function Question({ question, ans1, ans2, ans3, correct }) {
    const [answered, setAnswered] = useState(false);
    const [chosen, setChosen] = useState(null);

    const handleClick = (idx) => {
        if (answered) return;
        setChosen(idx);
        setAnswered(true);
    };

    const getClass = (idx) => {
        if (!answered) return "";
        if (idx === correct) return "correct";
        if (idx === chosen) return "wrong";
        return "";
    };

    return (
        <div className="question">
            <h2>{question}</h2>
            <button
                className={getClass(1)}
                onClick={() => handleClick(1)}
                disabled={answered}
            >
                {ans1}
            </button>
            <button
                className={getClass(2)}
                onClick={() => handleClick(2)}
                disabled={answered}
            >
                {ans2}
            </button>
            <button
                className={getClass(3)}
                onClick={() => handleClick(3)}
                disabled={answered}
            >
                {ans3}
            </button>

        </div>
    );
}

export default Question;
