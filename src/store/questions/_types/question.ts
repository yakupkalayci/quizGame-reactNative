export interface IQuestion {
    category: string
    type: string
    difficulty: string
    question: string
    correct_answer: string
    incorrect_answers: string[]
    users_answer: {
        selected: string,
        result: any
    }
} 