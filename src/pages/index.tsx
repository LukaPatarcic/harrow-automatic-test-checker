import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";
import questions from '../server/questions'
import Question from "~/components/Question";
import {isClosingParenToken} from "@typescript-eslint/utils/dist/ast-utils";

const totalCorrectQuestions = questions.reduce((sum, current) => {
  const answerSum = current.answers.reduce((sum, answer) => {
    if (answer.isCorrect) {
      return sum + 1;
    }
    return sum;
  }, 0);

  return sum + answerSum;
}, 0)

const Home: NextPage = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = formData.entries();
    const answers = [];
    for (const entry of data) {
      const split = entry[0].split('_')
      answers.push({ questionId: split[0], answerId: split[1] })
    }
    const results = { correct: 0, incorrect: 0 }
    answers.forEach((answer) => {
      const question = questions.find(q => q.id === answer.questionId);
      if(question) {
        const a = question.answers.find(b => b.id === answer.answerId);
        if(a?.isCorrect) {
          results.correct++;
        } else {
          results.incorrect++;
        }
      }
    })

    alert(`correct: ${results.correct} incorrect:${results.incorrect} total: ${totalCorrectQuestions}`);
  }
  return <div>
    <form onSubmit={onSubmit}>
      ${questions.map((question) => <Question key={question.id} question={question} />)}
      <button type="submit">Submit</button>
    </form>
  </div>
};

export default Home;
