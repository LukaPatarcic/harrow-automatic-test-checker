import React from "react";
import {IQuestion} from "~/types";

interface Props {
    question: IQuestion
}

const Question: React.FC<Props> = ({ question }) => {

    return (
        <>
            <div>
                {question.id}. {question.question}
            </div>
            <div className="ml-5">
                {question.answers.map((answer) => (
                <div key={answer.id}>
                    <input id={`${question.id}_${answer.id}`} name={`${question.id}_${answer.id}`} type="checkbox" value={`${question.id}_${answer.id}`}/>{" "}
                    <label htmlFor={`${question.id}_${answer.id}`}>{answer.text}</label>
                </div>
            ))}
            </div>
        </>
    );
};

export default Question;
