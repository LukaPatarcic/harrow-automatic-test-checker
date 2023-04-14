import React from "react";
import {IQuestion} from "~/types";

interface Props {
    question: IQuestion
}

const Question: React.FC<Props> = ({ question }) => {

    return (
            <div className="max-w-md rounded overflow-hidden shadow-lg mb-5">
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{question.id}. {question.question}</div>
                        {question.answers.map((answer) => (
                            <div key={answer.id}>
                                <input id={`${question.id}_${answer.id}`} name={`${question.id}_${answer.id}`} type="checkbox" value={`${question.id}_${answer.id}`}/>{" "}
                                <label htmlFor={`${question.id}_${answer.id}`}>{answer.text}</label>
                            </div>
                        ))}
                    </div>
            </div>
    );
};

export default Question;
