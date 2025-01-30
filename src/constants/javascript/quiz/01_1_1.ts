import { Quiz } from '@/types/quiz.type';

export const quiz: Quiz = {
  title: 'JavaScript 제어 흐름과 에러 처리 퀴즈 - Part 1',
  description:
    'JavaScript의 기본 제어 구조와 조건문에 대한 이해도를 테스트합니다.',
  categories: [
    {
      title: '기본 블록과 스코프',
      description: 'JavaScript의 블록 구문과 스코프에 대한 이해',
      questions: [
        {
          id: 1,
          question: '다음 중 var로 선언된 변수의 특징으로 올바른 것은?',
          options: [
            '블록 스코프를 가진다',
            '함수 스코프를 가지며 블록 외부에서도 접근 가능하다',
            'let과 동일한 스코프 규칙을 따른다',
            'const와 동일한 스코프 규칙을 따른다',
          ],
          correctAnswer: 1,
          explanation:
            'var로 선언된 변수는 함수 스코프를 가지며, 블록 외부에서도 접근이 가능합니다. 이는 let이나 const와 다른 특징입니다.',
        },
        {
          id: 2,
          question:
            '다음 코드의 실행 결과는?\n```javascript\n{\n  var x = 1;\n  let y = 2;\n}\nconsole.log(x);\nconsole.log(y);\n```',
          options: [
            '1, 2 출력',
            '1 출력, y is not defined 에러',
            'x is not defined 에러',
            '둘 다 undefined 출력',
          ],
          correctAnswer: 1,
          explanation:
            'var로 선언된 x는 블록 외부에서 접근 가능하지만, let으로 선언된 y는 블록 스코프를 가져 외부에서 접근하면 ReferenceError가 발생합니다.',
        },
      ],
    },
    {
      title: '조건문과 Falsy 값',
      description: '조건문과 JavaScript의 Falsy 값들에 대한 이해',
      questions: [
        {
          id: 3,
          question: '다음 중 JavaScript에서 Falsy 값이 아닌 것은?',
          options: ["빈 문자열 ('')", '0', '빈 배열 ([])', 'undefined'],
          correctAnswer: 2,
          explanation:
            '빈 배열([])은 객체이므로 Truthy 값입니다. 나머지 옵션들(빈 문자열, 0, undefined)은 모두 Falsy 값입니다.',
        },
        {
          id: 4,
          question:
            "다음 코드의 결과는?\n```javascript\nconst b = new Boolean(false);\nif (b) {\n  console.log('true');\n} else {\n  console.log('false');\n}\n```",
          options: [
            "'false' 출력",
            "'true' 출력",
            'TypeError 발생',
            '아무것도 출력하지 않음',
          ],
          correctAnswer: 1,
          explanation:
            "new Boolean()으로 생성된 객체는 값과 관계없이 항상 truthy입니다. 따라서 'true'가 출력됩니다.",
        },
        {
          id: 5,
          question: 'switch 문에서 break를 생략하면 어떤 일이 발생하나요?',
          options: [
            'SyntaxError가 발생한다',
            '다음 case문으로 실행이 이어진다 (fall-through)',
            '자동으로 default로 이동한다',
            '프로그램이 종료된다',
          ],
          correctAnswer: 1,
          explanation:
            'break가 없으면 매칭된 case 이후의 모든 case문이 순차적으로 실행됩니다 (fall-through 현상).',
        },
      ],
    },

    {
      title: '예외 처리',
      description: 'try-catch 구문과 에러 처리에 대한 이해',
      questions: [
        {
          id: 6,
          question: 'finally 블록의 특징으로 올바르지 않은 것은?',
          options: [
            'try나 catch에서 return을 해도 실행된다',
            '에러 발생 여부와 관계없이 실행된다',
            'finally에서의 return은 try/catch의 return을 덮어쓴다',
            'catch 블록이 있어야만 finally 블록을 사용할 수 있다',
          ],
          correctAnswer: 3,
          explanation:
            'finally 블록은 catch 블록 없이도 사용할 수 있습니다. try-finally 구조도 유효합니다.',
        },
        {
          id: 7,
          question: '다음 중 Error 객체의 기본 속성이 아닌 것은?',
          options: ['name', 'message', 'stack', 'type'],
          correctAnswer: 3,
          explanation:
            'Error 객체의 기본 속성은 name(에러 종류), message(상세 메시지), stack(호출 스택)입니다. type은 기본 속성이 아닙니다.',
        },
      ],
    },
    {
      title: '고급 에러 처리',
      description: '에러 객체와 디버깅에 대한 심화 내용',
      questions: [
        {
          id: 8,
          question: '다음 중 브라우저 환경에서 발생할 수 있는 에러 타입은?',
          options: [
            'BrowserError',
            'WindowError',
            'DOMException',
            'DocumentError',
          ],
          correctAnswer: 2,
          explanation:
            'DOMException은 브라우저 환경에서 DOM 조작 중 발생할 수 있는 대표적인 에러 타입입니다.',
        },
        {
          id: 9,
          question: 'console.trace()의 주요 용도는 무엇인가요?',
          options: [
            '변수의 값을 추적한다',
            '현재 스택 트레이스를 출력한다',
            '실행 시간을 측정한다',
            '메모리 사용량을 분석한다',
          ],
          correctAnswer: 1,
          explanation:
            'console.trace()는 현재 코드의 실행 위치까지의 호출 스택을 출력하여 디버깅을 돕습니다.',
        },
        {
          id: 10,
          question:
            '중첩된 try-catch 구문에서 내부 try 블록에 catch가 없다면 어떻게 해야 하나요?',
          options: [
            '외부 catch만 있으면 된다',
            '반드시 finally 블록이 있어야 한다',
            '내부 try는 catch 없이 사용할 수 없다',
            '아무것도 하지 않아도 된다',
          ],
          correctAnswer: 1,
          explanation:
            '내부 try 블록에 catch가 없다면 반드시 finally 블록이 있어야 합니다. 처리되지 않은 에러는 외부 catch 블록으로 전달됩니다.',
        },
      ],
    },
    {
      title: '실전 응용',
      description: '실제 상황에서의 에러 처리 적용',
      questions: [
        {
          id: 11,
          question: '다음 중 커스텀 에러를 만들 때의 모범 사례는?',
          options: [
            'Error 객체를 상속받아 구현한다',
            '일반 객체로 생성한다',
            '문자열로 처리한다',
            'Number 타입으로 처리한다',
          ],
          correctAnswer: 0,
          explanation:
            '커스텀 에러는 Error 객체를 상속받아 만들어야 스택 트레이스 등의 유용한 기능을 활용할 수 있습니다.',
        },
      ],
    },
  ],
};
