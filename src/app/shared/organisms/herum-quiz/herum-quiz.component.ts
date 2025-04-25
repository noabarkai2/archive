import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'herum-quiz',
  templateUrl: './herum-quiz.component.html',
  styleUrls: ['./herum-quiz.component.scss'],
})
export class HerumQuizComponent implements OnChanges {
  @Input() quizData: QuizData = {
    minGrade: 66,
    attemptsCount: 3,
    isSubmitted: false,
    currentQuestion: 0,
    resourceName: 'מבחן לדוגמא',
    questions: [
      {
        id: '1',
        isSkipped: false,
        question: 'מי חיפף בעיצוב של המבחנים?',
        index: 0,
        answers: [
          {
            id: '1',
            content: 'אביקס',
            isCorrect: true,
          },
          {
            id: '2',
            content: 'עמיאל',
            isCorrect: false,
          },
          {
            id: '3',
            content: 'אופיר',
            isCorrect: false,
          },
          {
            id: '4',
            content: 'טל',
            isCorrect: false,
          },
        ],
      },
      {
        question: 'מי חיפף ביואיקס של המבחנים?',
        id: '2',
        index: 1,
        isSkipped: false,
        answers: [
          {
            id: '1',
            content: 'אביקס',
            isCorrect: true,
          },
          {
            id: '2',
            content:
              ' עמיאל עמיאל עמיאל עמיאל עמיאל עמיאלעמיאלל עמיאל עמיאל עמיאל',
            isCorrect: false,
          },
        ],
      },
      {
        question: 'מי לא עדכן את האפיון מאז השמיני באוקטובר?',
        id: '3',
        index: 2,
        isSkipped: false,
        answers: [
          {
            id: '1',
            content: 'אנשי השמיני באוקטובר',
            isCorrect: true,
          },
          {
            id: '2',
            content: 'עמיאל',
            isCorrect: true,
          },
          {
            id: '3',
            content: 'אופיר',
            isCorrect: false,
          },
          {
            id: '4',
            content: 'טל',
            isCorrect: false,
          },
        ],
      },
      {
        question: 'Question text',
        id: '4',
        index: 3,
        isSkipped: false,
        answers: [
          {
            id: '1',
            content: 'content 1',
            isCorrect: true,
          },
          {
            id: '2',
            content: 'content 2',
            isCorrect: false,
          },
          {
            id: '3',
            content: 'content 3',
            isCorrect: false,
          },
          {
            id: '4',
            content: 'content 4',
            isCorrect: false,
          },
        ],
      },
      {
        question: 'Question text',
        id: '5',
        index: 4,
        isSkipped: false,
        answers: [
          {
            id: '1',
            content: 'content 1',
            isCorrect: true,
          },
          {
            id: '2',
            content: 'content 2',
            isCorrect: false,
          },
          {
            id: '3',
            content: 'content 3',
            isCorrect: false,
          },
          {
            id: '4',
            content: 'content 4',
            isCorrect: false,
          },
        ],
      },
      {
        id: '6',
        question: 'What is the capital of France?',
        index: 5,
        isSkipped: false,
        answers: [
          {
            id: '1',
            content: 'Paris',
            isCorrect: true,
          },
          {
            id: '2',
            content: 'London',
            isCorrect: false,
          },
          {
            id: '3',
            content: 'Berlin',
            isCorrect: false,
          },
          {
            id: '4',
            content: 'Rome',
            isCorrect: false,
          },
        ],
      },
      {
        id: '7',
        question: 'What is the largest planet in our solar system?',
        index: 6,
        isSkipped: false,
        answers: [
          {
            id: '1',
            content: 'Jupiter',
            isCorrect: true,
          },
          {
            id: '2',
            content: 'Saturn',
            isCorrect: false,
          },
          {
            id: '3',
            content: 'Mars',
            isCorrect: false,
          },
          {
            id: '4',
            content: 'Earth',
            isCorrect: false,
          },
        ],
      },
      {
        id: '8',
        question: 'What is the largest planet in our solar system?',
        index: 7,
        isSkipped: false,
        answers: [
          {
            id: '1',
            content: 'Jupiter',
            isCorrect: true,
          },
          {
            id: '2',
            content: 'Saturn',
            isCorrect: false,
          },
          {
            id: '3',
            content: 'Mars',
            isCorrect: false,
          },
          {
            id: '4',
            content: 'Earth',
            isCorrect: false,
          },
        ],
      },
      {
        id: '9',
        isSkipped: false,
        question: 'מי חיפף בעיצוב של המבחנים?',
        index: 8,
        answers: [
          {
            id: '1',
            content: 'אביקס',
            isCorrect: true,
          },
          {
            id: '2',
            content: 'עמיאל',
            isCorrect: false,
          },
          {
            id: '3',
            content: 'אופיר',
            isCorrect: false,
          },
          {
            id: '4',
            content: 'טל',
            isCorrect: false,
          },
        ],
      },
      {
        question: 'מי חיפף ביואיקס של המבחנים?',
        id: '10',
        index: 9,
        isSkipped: false,
        answers: [
          {
            id: '1',
            content: 'אביקס',
            isCorrect: true,
          },
          {
            id: '2',
            content: 'עמיאל',
            isCorrect: true,
          },
        ],
      },
      {
        question: 'מי לא עדכן את האפיון מאז השמיני באוקטובר?',
        id: '11',
        index: 10,
        isSkipped: false,
        answers: [
          {
            id: '1',
            content: 'אנשי השמיני באוקטובר',
            isCorrect: true,
          },
          {
            id: '2',
            content: 'עמיאל',
            isCorrect: true,
          },
          {
            id: '3',
            content: 'אופיר',
            isCorrect: false,
          },
          {
            id: '4',
            content: 'טל',
            isCorrect: false,
          },
        ],
      },
      {
        id: '12',
        question: 'What is the capital of Japan?',
        index: 11,
        isSkipped: false,
        answers: [
          {
            id: '1',
            content: 'Tokyo',
            isCorrect: true,
          },
          {
            id: '2',
            content: 'Seoul',
            isCorrect: false,
          },
          {
            id: '3',
            content: 'Beijing',
            isCorrect: false,
          },
          {
            id: '4',
            content: 'Bangkok',
            isCorrect: false,
          },
        ],
      },
      {
        id: '13',
        question: 'Which element has the chemical symbol "H"?',
        index: 12,
        isSkipped: false,
        answers: [
          {
            id: '1',
            content: 'Hydrogen',
            isCorrect: true,
          },
          {
            id: '2',
            content: 'Helium',
            isCorrect: false,
          },
          {
            id: '3',
            content: 'Oxygen',
            isCorrect: false,
          },
          {
            id: '4',
            content: 'Carbon',
            isCorrect: false,
          },
        ],
      },
      {
        id: '14',
        question: 'Which planet is known as the "Red Planet"?',
        index: 13,
        isSkipped: false,
        answers: [
          {
            id: '1',
            content: 'Mars',
            isCorrect: true,
          },
          {
            id: '2',
            content: 'Jupiter',
            isCorrect: false,
          },
          {
            id: '3',
            content: 'Venus',
            isCorrect: false,
          },
          {
            id: '4',
            content: 'Mercury',
            isCorrect: false,
          },
        ],
      },
      {
        id: '15',
        question: 'What is the largest ocean on Earth?',
        index: 14,
        isSkipped: false,
        answers: [
          {
            id: '1',
            content: 'Pacific Ocean',
            isCorrect: true,
          },
          {
            id: '2',
            content: 'Atlantic Ocean',
            isCorrect: false,
          },
          {
            id: '3',
            content: 'Indian Ocean',
            isCorrect: false,
          },
          {
            id: '4',
            content: 'Arctic Ocean',
            isCorrect: false,
          },
        ],
      },
      {
        id: '16',
        question: 'In which year did World War II end?',
        index: 15,
        isSkipped: false,
        answers: [
          {
            id: '1',
            content: '1945',
            isCorrect: true,
          },
          {
            id: '2',
            content: '1939',
            isCorrect: false,
          },
          {
            id: '3',
            content: '1950',
            isCorrect: false,
          },
          {
            id: '4',
            content: '1941',
            isCorrect: false,
          },
        ],
      },
      {
        id: '17',
        question: 'Who wrote "Romeo and Juliet"?',
        index: 16,
        isSkipped: false,
        answers: [
          {
            id: '1',
            content: 'William Shakespeare',
            isCorrect: true,
          },
          {
            id: '2',
            content: 'Jane Austen',
            isCorrect: false,
          },
          {
            id: '3',
            content: 'Charles Dickens',
            isCorrect: false,
          },
          {
            id: '4',
            content: 'Leo Tolstoy',
            isCorrect: false,
          },
        ],
      },
      {
        id: '18',
        question: 'What is the currency of Brazil?',
        index: 17,
        isSkipped: false,
        answers: [
          {
            id: '1',
            content: 'Brazilian Real',
            isCorrect: true,
          },
          {
            id: '2',
            content: 'Peso',
            isCorrect: false,
          },
          {
            id: '3',
            content: 'Dollar',
            isCorrect: false,
          },
          {
            id: '4',
            content: 'Euro',
            isCorrect: false,
          },
        ],
      },
      {
        id: '19',
        question: 'Which planet is closest to the Sun?',
        index: 18,
        isSkipped: false,
        answers: [
          {
            id: '1',
            content: 'Mercury',
            isCorrect: true,
          },
          {
            id: '2',
            content: 'Venus',
            isCorrect: false,
          },
          {
            id: '3',
            content: 'Earth',
            isCorrect: false,
          },
          {
            id: '4',
            content: 'Mars',
            isCorrect: false,
          },
        ],
      },
      {
        id: '20',
        question: 'Who painted the Mona Lisa?',
        index: 19,
        isSkipped: false,
        answers: [
          {
            id: '1',
            content: 'Leonardo da Vinci',
            isCorrect: true,
          },
          {
            id: '2',
            content: 'Vincent van Gogh',
            isCorrect: false,
          },
          {
            id: '3',
            content: 'Pablo Picasso',
            isCorrect: false,
          },
          {
            id: '4',
            content: 'Michelangelo',
            isCorrect: false,
          },
        ],
      },
      {
        id: '21',
        question: 'What is the largest mammal on Earth?',
        index: 20,
        isSkipped: false,
        answers: [
          {
            id: '1',
            content: 'Blue Whale',
            isCorrect: true,
          },
          {
            id: '2',
            content: 'Elephant',
            isCorrect: false,
          },
          {
            id: '3',
            content: 'Giraffe',
            isCorrect: false,
          },
          {
            id: '4',
            content: 'Hippopotamus',
            isCorrect: false,
          },
        ],
      },
      {
        id: '22',
        question: 'Who wrote "To Kill a Mockingbird"?',
        index: 21,
        isSkipped: false,
        answers: [
          {
            id: '1',
            content: 'Harper Lee',
            isCorrect: true,
          },
          {
            id: '2',
            content: 'J.K. Rowling',
            isCorrect: false,
          },
          {
            id: '3',
            content: 'George Orwell',
            isCorrect: false,
          },
          {
            id: '4',
            content: 'Mark Twain',
            isCorrect: false,
          },
        ],
      },
      {
        id: '23',
        question: 'What is the largest desert in the world?',
        index: 22,
        isSkipped: false,
        answers: [
          {
            id: '1',
            content: 'Antarctica',
            isCorrect: true,
          },
          {
            id: '2',
            content: 'Sahara',
            isCorrect: false,
          },
          {
            id: '3',
            content: 'Gobi',
            isCorrect: false,
          },
          {
            id: '4',
            content: 'Arabian',
            isCorrect: false,
          },
        ],
      },
      {
        id: '24',
        question: 'What is the main ingredient in guacamole?',
        index: 23,
        isSkipped: false,
        answers: [
          {
            id: '1',
            content: 'Avocado',
            isCorrect: true,
          },
          {
            id: '2',
            content: 'Tomato',
            isCorrect: false,
          },
          {
            id: '3',
            content: 'Onion',
            isCorrect: false,
          },
          {
            id: '4',
            content: 'Lime',
            isCorrect: false,
          },
        ],
      },
      {
        id: '25',
        question: 'Who discovered penicillin?',
        index: 24,
        isSkipped: false,
        answers: [
          {
            id: '1',
            content: 'Alexander Fleming',
            isCorrect: true,
          },
          {
            id: '2',
            content: 'Marie Curie',
            isCorrect: false,
          },
          {
            id: '3',
            content: 'Louis Pasteur',
            isCorrect: false,
          },
          {
            id: '4',
            content: 'Albert Einstein',
            isCorrect: false,
          },
        ],
      },
    ],
  };

  constructor() {}

  get currentQuestionIndex() {
    return this.quizData.currentQuestion - 1;
  }

  getCorrectAnswersCount(question: Question) {
    return question.answers.filter((answer) => answer.isCorrect).length;
  }

  ngOnChanges(): void {
    this.quizData.currentQuestion = this.quizData.currentQuestion || 0;
  }

  _nextQuestion(isSkipped: boolean = false) {
    if (this.quizData.questions[this.quizData.currentQuestion - 1])
      this.quizData.questions[this.quizData.currentQuestion - 1].isSkipped =
        isSkipped;

    if (this.quizData.currentQuestion == this.quizData.questions.length + 1) {
      this.quizData.isSubmitted = true;
      this.quizData.currentQuestion = 1;
    } else this.quizData.currentQuestion++;

    this.quizData = { ...this.quizData };
  }

  _getUserAnswers(questionId: string): any {
    let res = this.quizData.userAnswers?.find(
      (userAnswer) => userAnswer.questionId == questionId
    );
    return res ? res : { questionId: questionId, answerIds: [] };
  }

  _previousQuestion() {
    this.quizData.currentQuestion--;
  }

  _selectQuestion(questionIndex: number) {
    this.quizData.currentQuestion = questionIndex + 1;
  }

  _onAnswersChange(userAnswers: string[], questionId: string) {
    if (!this.quizData.userAnswers) this.quizData.userAnswers = [];

    let question = this.quizData.userAnswers?.find(
      (userAnswer) => userAnswer.questionId == questionId
    );

    if (question?.answerIds) question.answerIds = userAnswers;
    else {
      this.quizData.userAnswers!.push({
        questionId: questionId,
        answerIds: userAnswers,
      });
    }
  }

  get nextButtonText() {
    return this.quizData.currentQuestion == 0
      ? 'התחל מבחן'
      : this.quizData.currentQuestion == this.quizData.questions.length
      ? 'סיים מבחן'
      : this.quizData.currentQuestion == this.quizData.questions.length + 1
      ? 'הגשת מבחן'
      : 'לשאלה הבאה';
  }

  get isValidQuiz() {
    if (!this.quizData?.userAnswers) return false;
    return this.quizData.questions.length == this.quizData.userAnswers!.length;
  }

  get isLastQuestion(){
    return this.quizData.currentQuestion == this.quizData.questions.length + 1;
  }
}

export type QuizData = {
  minGrade: number;
  resourceName: string;
  questions: Question[];
  attemptsCount: number;
  isSubmitted: boolean;
  userAnswers?: QuizUserAnswer[];
  currentQuestion: number;
  grade?:number;
};

export type Question = {
  id: string;
  question: string;
  index: number;
  isSkipped: boolean;
  answers: Answer[];
};

export type Answer = {
  id: string;
  content: string;
  isCorrect: boolean;
};

export type QuizUserAnswer = {
  questionId: string;
  answerIds: string[];
  status?: boolean;
};
