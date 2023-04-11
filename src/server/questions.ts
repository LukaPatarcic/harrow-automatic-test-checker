import {IQuestion} from "~/types";

const questions: IQuestion[] = [
    {
        "id": "1",
        "question": "What is the capital of France?",
        "answers": [
            {
                "id": "1",
                "text": "Paris",
                "isCorrect": true
            },
            {
                "id": "2",
                "text": "Madrid",
                "isCorrect": false
            },
            {
                "id": "3",
                "text": "Berlin",
                "isCorrect": false
            }
        ]
    },
    {
        "id": "2",
        "question": "What is the largest country in the world by area?",
        "answers": [
            {
                "id": "1",
                "text": "Russia",
                "isCorrect": true
            },
            {
                "id": "2",
                "text": "China",
                "isCorrect": false
            },
            {
                "id": "3",
                "text": "United States",
                "isCorrect": false
            }
        ]
    },
    {
        "id": "3",
        "question": "What is the highest mountain in the world?",
        "answers": [
            {
                "id": "1",
                "text": "Mount Everest",
                "isCorrect": true
            },
            {
                "id": "2",
                "text": "K2",
                "isCorrect": false
            },
            {
                "id": "3",
                "text": "Makalu",
                "isCorrect": false
            }
        ]
    },
    {
        "id": "4",
        "question": "What is the largest ocean in the world?",
        "answers": [
            {
                "id": "1",
                "text": "Atlantic Ocean",
                "isCorrect": false
            },
            {
                "id": "2",
                "text": "Pacific Ocean",
                "isCorrect": true
            },
            {
                "id": "3",
                "text": "Indian Ocean",
                "isCorrect": true
            },
            {
                "id": "4",
                "text": "Arctic Ocean",
                "isCorrect": false
            }
        ]
    },
    {
        "id": "5",
        "question": "What is the highest mountain in North America?",
        "answers": [
            {
                "id": "1",
                "text": "Mount Kilimanjaro",
                "isCorrect": false
            },
            {
                "id": "2",
                "text": "Denali (Mount McKinley)",
                "isCorrect": true
            },
            {
                "id": "3",
                "text": "Mount Everest",
                "isCorrect": false
            },
            {
                "id": "4",
                "text": "Mount Elbert",
                "isCorrect": true
            }
        ]
    },
    {
        "id": "6",
        "question": "What is the smallest country in the world?",
        "answers": [
            {
                "id": "1",
                "text": "Monaco",
                "isCorrect": false
            },
            {
                "id": "2",
                "text": "Nauru",
                "isCorrect": true
            },
            {
                "id": "3",
                "text": "Vatican City",
                "isCorrect": true
            },
            {
                "id": "4",
                "text": "San Marino",
                "isCorrect": false
            }
        ]
    }
]

export default questions;
