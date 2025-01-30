import {
  react01_1_1,
  react01_1_2,
  react01_1_3,
  react01_1_4,
  react01_1_5,
  react01_1_6,
  react01_1_7,
} from './react/code-quiz';
import {
  tsQuiz2,
  tsQuiz3,
  tsQuiz4,
  tsQuiz5,
  tsQuiz6_1,
  tsQuiz6_2,
  tsQuiz6_3,
  tsQuiz6_4,
  tsQuiz7,
  tsQuiz8,
} from './typescript/code-quiz';

export const quizMap = {
  javascript: {},
  typescript: {
    '02': tsQuiz2,
    '03': tsQuiz3,
    '04': tsQuiz4,
    '05': tsQuiz5,
    '06_1': tsQuiz6_1,
    '06_2': tsQuiz6_2,
    '06_3': tsQuiz6_3,
    '06_4': tsQuiz6_4,
    '07': tsQuiz7,
    '08': tsQuiz8,
  },
  react: {
    '01_1_1': react01_1_1,
    '01_1_2': react01_1_2,
    '01_1_3': react01_1_3,
    '01_1_4': react01_1_4,
    '01_1_5': react01_1_5,
    '01_1_6': react01_1_6,
    '01_1_7': react01_1_7,
  },
} as const;
