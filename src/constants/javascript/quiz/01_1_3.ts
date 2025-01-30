import { Quiz } from '@/types/quiz.type';

export const quiz: Quiz = {
  title: 'JavaScript 함수 완벽 가이드 퀴즈',
  description:
    'JavaScript 함수의 기본 개념부터 고급 기능까지 테스트하는 종합 퀴즈입니다.',
  categories: [
    {
      title: '함수의 기초',
      description: '함수의 기본 개념과 선언 방식에 대한 이해를 테스트합니다.',
      questions: [
        {
          id: 1,
          question:
            '다음 중 객체를 매개변수로 전달할 때 발생하는 현상으로 올바른 것은?',
          options: [
            '객체의 복사본이 전달되어 원본이 변경되지 않는다',
            '객체의 참조가 전달되어 원본이 변경될 수 있다',
            '객체가 자동으로 문자열로 변환되어 전달된다',
            '객체의 프로토타입만 전달된다',
          ],
          correctAnswer: 1,
          explanation:
            'JavaScript에서 객체는 참조로 전달되므로, 함수 내에서 객체를 수정하면 원본 객체도 변경됩니다.',
        },
        {
          id: 2,
          question:
            'JavaScript에서 함수를 선언하는 방법 중 호이스팅이 발생하는 것은?',
          options: [
            'const func = () => {};',
            'const func = function() {};',
            'function func() {};',
            'let func = () => {};',
          ],
          correctAnswer: 2,
          explanation:
            '함수 선언문(function declaration)만이 호이스팅되며, 함수 표현식은 호이스팅되지 않습니다.',
        },
        {
          id: 3,
          question: '다음 중 올바르지 않은 함수 선언 방식은?',
          options: [
            'function myFunc() { return 1; }',
            'const myFunc = function() { return 1; };',
            'const myFunc = () => return 1;',
            'const myFunc = () => 1;',
          ],
          correctAnswer: 2,
          explanation:
            '화살표 함수에서 한 줄로 반환할 때는 return 키워드를 사용하지 않습니다. return을 사용하려면 중괄호가 필요합니다.',
        },
      ],
    },
    {
      title: '함수 표현식과 화살표 함수',
      description: '다양한 함수 표현 방식과 특징을 테스트합니다.',
      questions: [
        {
          id: 4,
          question: '다음 중 화살표 함수의 특징이 아닌 것은?',
          options: [
            'lexical this 바인딩을 가진다',
            'arguments 객체를 가진다',
            'new 연산자로 호출할 수 없다',
            '더 간결한 문법을 제공한다',
          ],
          correctAnswer: 1,
          explanation:
            '화살표 함수는 자체 arguments 객체를 가지지 않습니다. 대신 상위 스코프의 arguments를 참조합니다.',
        },
        {
          id: 5,
          question:
            '다음 코드의 출력값은? let x = 0; const obj = { x: 10, test: () => console.log(this.x) };obj.test();',
          options: ['0', '10', 'undefined', 'ReferenceError'],
          correctAnswer: 2,
          explanation:
            '화살표 함수는 자신만의 this를 가지지 않고 렉시컬 스코프의 this를 사용하므로, 객체 메서드로 사용될 때 예상과 다르게 동작할 수 있습니다.',
        },
      ],
    },
    {
      title: '클로저와 스코프',
      description: '클로저의 개념과 스코프 체인에 대한 이해를 테스트합니다.',
      questions: [
        {
          id: 6,
          question: '다음 중 클로저를 활용한 올바른 설명은?',
          options: [
            '클로저는 가비지 컬렉션을 방지하는 유일한 방법이다',
            '클로저는 외부 함수의 변수를 캡처하여 private 변수처럼 사용할 수 있게 한다',
            '클로저는 항상 메모리 누수를 발생시킨다',
            '클로저는 오직 화살표 함수에서만 동작한다',
          ],
          correctAnswer: 1,
          explanation:
            '클로저는 외부 함수의 변수를 캡처하여 접근을 제어할 수 있게 해주므로, private 변수를 구현하는 데 활용될 수 있습니다.',
        },
        {
          id: 7,
          question:
            '다음 코드의 실행 결과는? function outer() { let x = 1; return function() { console.log(x); }; } const fn = outer(); fn();',
          options: ['undefined', '1', 'ReferenceError', 'null'],
          correctAnswer: 1,
          explanation:
            '클로저로 인해 내부 함수는 outer 함수의 x 변수에 계속 접근할 수 있습니다.',
        },
      ],
    },
    {
      title: '매개변수 활용',
      description: '함수의 매개변수 특성과 고급 기능을 테스트합니다.',
      questions: [
        {
          id: 8,
          question:
            '나머지 매개변수(...args)에 대한 설명으로 올바르지 않은 것은?',
          options: [
            '함수 선언의 마지막 매개변수로만 사용할 수 있다',
            '실제 배열로 전달된다',
            '여러 개의 나머지 매개변수를 사용할 수 있다',
            '전달된 인자의 개수에 제한이 없다',
          ],
          correctAnswer: 2,
          explanation:
            '나머지 매개변수는 함수당 하나만 사용할 수 있으며, 반드시 마지막 매개변수여야 합니다.',
        },
        {
          id: 9,
          question:
            '다음 코드의 출력값은? function test(a, b = 1) { return a * b; } console.log(test(5));',
          options: ['5', '1', 'undefined', 'NaN'],
          correctAnswer: 0,
          explanation:
            '기본값 매개변수가 설정되어 있어 b는 1이 되므로, 5 * 1 = 5가 출력됩니다.',
        },
        {
          id: 10,
          question: 'arguments 객체에 대한 설명으로 올바른 것은?',
          options: [
            '화살표 함수에서 사용할 수 있다',
            '실제 배열이다',
            '함수에 전달된 모든 인자를 포함하는 유사 배열 객체이다',
            'ES6에서 제거된 레거시 기능이다',
          ],
          correctAnswer: 2,
          explanation:
            'arguments는 유사 배열 객체로, 함수에 전달된 모든 인자를 포함하지만 실제 배열은 아닙니다.',
        },
      ],
    },
    {
      title: '함수형 프로그래밍',
      description: '함수형 프로그래밍 패턴과 모범 사례를 테스트합니다.',
      questions: [
        {
          id: 11,
          question: '순수 함수(Pure Function)의 특징으로 올바르지 않은 것은?',
          options: [
            '동일한 입력에 대해 항상 동일한 출력을 반환한다',
            '외부 상태를 변경하지 않는다',
            '비동기 작업을 수행할 수 없다',
            '내부에서 Date.now()를 사용할 수 있다',
          ],
          correctAnswer: 3,
          explanation:
            '순수 함수는 동일한 입력에 대해 항상 동일한 출력을 반환해야 하므로, Date.now()와 같은 비순수한 작업을 포함할 수 없습니다.',
        },
        {
          id: 12,
          question: '다음 중 함수형 프로그래밍의 장점이 아닌 것은?',
          options: [
            '코드의 예측 가능성이 높아진다',
            '테스트가 용이하다',
            '상태 관리가 쉬워진다',
            '항상 더 나은 성능을 제공한다',
          ],
          correctAnswer: 3,
          explanation:
            '함수형 프로그래밍이 항상 더 나은 성능을 제공하지는 않습니다. 상황에 따라 명령형 프로그래밍이 더 효율적일 수 있습니다.',
        },
        {
          id: 13,
          question: '재귀 함수 사용시 주의해야 할 점으로 가장 적절한 것은?',
          options: [
            '항상 반복문보다 느리다',
            '스택 오버플로우가 발생할 수 있다',
            '브라우저에서만 사용할 수 있다',
            '비동기 코드와 함께 사용할 수 없다',
          ],
          correctAnswer: 1,
          explanation:
            '재귀 함수를 사용할 때는 호출 스택의 깊이가 너무 깊어져 스택 오버플로우가 발생할 수 있으므로 주의해야 합니다.',
        },
      ],
    },
    {
      title: '고급 개념과 디버깅',
      description: '함수의 고급 개념과 일반적인 문제 해결 방법을 테스트합니다.',
      questions: [
        {
          id: 14,
          question: '다음 중 메모리 누수를 일으킬 수 있는 상황은?',
          options: [
            '순수 함수 사용',
            '화살표 함수 사용',
            '클로저에서 더 이상 필요 없는 참조 유지',
            '함수 선언문 사용',
          ],
          correctAnswer: 2,
          explanation:
            '클로저에서 더 이상 필요 없는 외부 변수에 대한 참조를 유지하면 메모리 누수가 발생할 수 있습니다.',
        },
        {
          id: 15,
          question: '다음 중 this 바인딩에 대한 설명으로 올바른 것은?',
          options: [
            '화살표 함수는 항상 전역 객체를 this로 가진다',
            'call 메서드는 this를 영구적으로 바인딩한다',
            '일반 함수의 this는 호출 방식에 따라 결정된다',
            '클래스 메서드의 this는 항상 클래스 인스턴스를 가리킨다',
          ],
          correctAnswer: 2,
          explanation:
            '일반 함수의 this는 함수가 어떻게 호출되었는지에 따라 동적으로 결정됩니다.',
        },
      ],
    },
  ],
};
