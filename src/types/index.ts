export interface IQuestion {
    id: string
    question: string
    answers: IAnswer[]
}

export interface IAnswer {
    id: string
    text: string
    isCorrect: boolean
}
