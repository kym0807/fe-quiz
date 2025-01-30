import { Quiz } from '@/types/quiz.type';

export const quiz: Quiz = {
  title: '클로저(Closure) 퀴즈',
  description:
    '자바스크립트의 핵심 개념인 클로저에 대한 이해도를 평가하는 퀴즈입니다.',
  categories: [
    {
      title: '클로저의 기본 개념',
      description: '클로저의 정의와 기본 개념에 대한 질문',
      questions: [
        {
          id: 1,
          question: '클로저(Closure)의 정의는 무엇인가요?',
          options: [
            '함수와 그 함수가 선언된 렉시컬 환경의 조합',
            '객체와 그 객체의 프로퍼티의 조합',
            '비동기 함수의 실행 컨텍스트',
            '자바스크립트의 기본 데이터 타입 중 하나',
          ],
          correctAnswer: 0,
          explanation:
            '클로저는 함수와 그 함수가 선언된 렉시컬 환경의 조합을 의미합니다.',
        },
        {
          id: 2,
          question: '클로저가 중요한 이유는 무엇인가요?',
          options: [
            '함수 외부의 변수를 은닉할 수 있기 때문에',
            '함수의 실행 속도를 빠르게 하기 위해',
            '객체 지향 프로그래밍을 지원하기 위해',
            '비동기 처리를 가능하게 하기 위해',
          ],
          correctAnswer: 0,
          explanation:
            '클로저는 함수 외부의 변수를 은닉하고 데이터 프라이버시를 구현할 수 있게 해줍니다.',
        },
      ],
    },
    {
      title: '렉시컬 스코핑',
      description: '렉시컬 스코핑의 개념과 클로저와의 관계에 대한 질문',
      questions: [
        {
          id: 3,
          question: '렉시컬 스코핑이란 무엇인가요?',
          options: [
            '변수가 함수 내 어디에서 선언되었는지에 따라 접근 가능 범위가 결정되는 것',
            '변수의 타입에 따라 접근 가능 범위가 결정되는 것',
            '비동기 함수의 실행 순서를 결정하는 것',
            '객체의 프로퍼티 접근 방식을 정의하는 것',
          ],
          correctAnswer: 0,
          explanation:
            '렉시컬 스코핑은 변수가 코드 내 어디에서 선언되었는지를 기준으로 그 변수의 사용 범위가 결정된다는 것을 의미합니다.',
        },
        {
          id: 4,
          question: '다음 중 렉시컬 스코핑의 예시는 무엇인가요?',
          options: [
            '내부 함수가 외부 함수의 변수에 접근할 수 있다.',
            '함수가 호출될 때마다 새로운 실행 컨텍스트가 생성된다.',
            '비동기 함수가 호출된 후에도 외부 변수를 사용할 수 있다.',
            '객체의 메서드가 객체의 프로퍼티에 접근할 수 있다.',
          ],
          correctAnswer: 0,
          explanation:
            '내부 함수가 외부 함수의 변수에 접근할 수 있는 것은 렉시컬 스코핑의 예시입니다.',
        },
      ],
    },
    {
      title: 'ES6의 let과 const',
      description: 'let과 const의 블록 스코프에 대한 질문',
      questions: [
        {
          id: 5,
          question: 'ES6에서 도입된 let과 const의 주요 차이점은 무엇인가요?',
          options: [
            'let은 변수 재할당이 가능하지만, const는 불가능하다.',
            'const는 변수 재할당이 가능하지만, let은 불가능하다.',
            'let과 const 모두 변수 재할당이 가능하다.',
            'let과 const 모두 변수 재할당이 불가능하다.',
          ],
          correctAnswer: 0,
          explanation:
            'let은 변수 재할당이 가능하지만, const는 재할당이 불가능합니다.',
        },
        {
          id: 6,
          question: 'let과 const는 어떤 스코프를 가지나요?',
          options: ['블록 스코프', '함수 스코프', '전역 스코프', '모듈 스코프'],
          correctAnswer: 0,
          explanation:
            'let과 const는 블록 스코프를 가지며, 중괄호로 둘러싸인 블록 내에서만 접근 가능합니다.',
        },
      ],
    },
    {
      title: '클로저의 실제 동작',
      description: '클로저의 실제 예제와 동작 방식에 대한 질문',
      questions: [
        {
          id: 7,
          question:
            '다음 코드에서 myFunc()를 호출하면 무엇이 출력되나요?\n```javascript\nfunction makeFunc() {\n  const name = "Mozilla";\n  function displayName() {\n    console.log(name);\n  }\n  return displayName;\n}\n\nconst myFunc = makeFunc();\nmyFunc();\n```',
          options: [
            '"Mozilla"',
            'undefined',
            '참조 오류가 발생한다.',
            '"name"',
          ],
          correctAnswer: 0,
          explanation:
            'makeFunc 함수가 종료된 후에도 displayName 함수는 name 변수에 접근할 수 있어 "Mozilla"가 출력됩니다.',
        },
        {
          id: 8,
          question: '클로저를 사용하면 어떤 이점을 얻을 수 있나요?',
          options: [
            '데이터 은닉과 캡슐화가 가능하다.',
            '함수의 실행 속도가 빨라진다.',
            '메모리 사용량이 줄어든다.',
            '비동기 처리가 쉬워진다.',
          ],
          correctAnswer: 0,
          explanation:
            '클로저를 사용하면 데이터 은닉과 캡슐화를 통해 객체지향 프로그래밍의 주요 이점을 제공합니다.',
        },
      ],
    },
    {
      title: '실용적인 클로저 예제',
      description: '카운터와 덧셈 함수 예제를 통한 클로저 이해',
      questions: [
        {
          id: 9,
          question:
            '다음 카운터 예제에서 counter.value()를 두 번 호출한 후의 값은 얼마인가요?\n```javascript\nconst counter = (function() {\n  let privateCounter = 0;\n  \n  function changeBy(val) {\n    privateCounter += val;\n  }\n\n  return {\n    increment() { changeBy(1); },\n    decrement() { changeBy(-1); },\n    value() { return privateCounter; }\n  };\n})();\n\nconsole.log(counter.value()); // 0\ncounter.increment();\ncounter.increment();\nconsole.log(counter.value()); // ?\n```',
          options: ['0', '1', '2', '3'],
          correctAnswer: 2,
          explanation:
            '두 번 increment()를 호출하여 privateCounter가 2가 됩니다.',
        },
        {
          id: 10,
          question:
            'makeAdder 함수의 add5(2) 호출 결과는 무엇인가요?\n```javascript\nfunction makeAdder(x) {\n  return function(y) {\n    return x + y;\n  };\n}\n\nconst add5 = makeAdder(5);\nconsole.log(add5(2)); // ?\n```',
          options: ['5', '7', '10', 'undefined'],
          correctAnswer: 1,
          explanation:
            'add5는 x가 5인 클로저를 반환하므로 add5(2)는 5 + 2 = 7을 출력합니다.',
        },
      ],
    },
    {
      title: '클로저와 스코프 체인',
      description: '클로저와 스코프 체인의 관계에 대한 질문',
      questions: [
        {
          id: 11,
          question: '클로저가 스코프 체인에서 가지는 역할은 무엇인가요?',
          options: [
            '모든 외부 함수의 스코프에 접근할 수 있게 해준다.',
            '함수의 실행 속도를 증가시킨다.',
            '비동기 함수의 실행 순서를 결정한다.',
            '객체의 프로퍼티 접근을 제한한다.',
          ],
          correctAnswer: 0,
          explanation:
            '클로저는 모든 외부 함수의 스코프에 접근할 수 있어 스코프 체인에서 중요한 역할을 합니다.',
        },
        {
          id: 12,
          question:
            '다음 코드에서 sum(1)(2)(3)(4)의 결과는 얼마인가요?\n```javascript\nconst e = 10;\nfunction sum(a) {\n  return function(b) {\n    return function(c) {\n      return function(d) {\n        return a + b + c + d + e;\n      };\n    };\n  };\n}\n\nconsole.log(sum(1)(2)(3)(4)); // ?\n```',
          options: ['10', '20', '30', 'Undefined'],
          correctAnswer: 1,
          explanation: '1 + 2 + 3 + 4 + 10 = 20이 출력됩니다.',
        },
      ],
    },
    {
      title: '모듈에서의 클로저',
      description: '클로저를 활용한 모듈 패턴에 대한 질문',
      questions: [
        {
          id: 13,
          question: '모듈에서 클로저를 사용하면 어떤 이점을 얻을 수 있나요?',
          options: [
            '모듈 스코프의 변수를 캡슐화할 수 있다.',
            '모듈의 실행 속도를 빠르게 할 수 있다.',
            '모듈 간의 비동기 통신을 쉽게 할 수 있다.',
            '모듈의 크기를 줄일 수 있다.',
          ],
          correctAnswer: 0,
          explanation:
            '클로저를 사용하면 모듈 스코프의 변수를 캡슐화하면서 외부에서 제어할 수 있는 인터페이스를 제공할 수 있습니다.',
        },
        {
          id: 14,
          question:
            '다음 import 예제에서 getX() 호출 시 출력되는 값은 무엇인가요?\n```javascript\n// myModule.js\nlet x = 5;\nexport const getX = () => x;\nexport const setX = (val) => {\n  x = val;\n};\n```\n```javascript\nimport { getX, setX } from "./myModule.js";\n\nconsole.log(getX()); // ?\nsetX(6);\nconsole.log(getX()); // ?\n```',
          options: ['5과 5', '5과 6', '6과 5', '6과 6'],
          correctAnswer: 1,
          explanation:
            '처음 getX()는 5를, setX(6) 후의 getX()는 6을 출력합니다.',
        },
      ],
    },
    {
      title: '루프에서의 클로저 사용',
      description: '루프 내 클로저 사용 시 주의사항에 대한 질문',
      questions: [
        {
          id: 15,
          question:
            '다음 잘못된 예제에서 발생하는 문제는 무엇인가요?\n```javascript\nfunction setupHelp() {\n  const helpText = [\n    { id: "email", help: "이메일 주소를 입력하세요" },\n    { id: "name", help: "이름을 입력하세요" },\n    { id: "age", help: "나이를 입력하세요" }\n  ];\n\n  for (var i = 0; i < helpText.length; i++) {\n    var item = helpText[i];\n    document.getElementById(item.id).onfocus = function() {\n      showHelp(item.help);\n    };\n  }\n}\n```',
          options: [
            '모든 onfocus 핸들러가 마지막 helpText 항목만 참조하게 된다.',
            '함수 실행 속도가 느려진다.',
            '변수가 블록 스코프를 가지지 않아 참조 오류가 발생한다.',
            '클로저가 생성되지 않아 도움말이 표시되지 않는다.',
          ],
          correctAnswer: 0,
          explanation:
            'var를 사용하여 루프 변수를 선언하면 모든 onfocus 핸들러가 마지막 항목을 참조하게 됩니다.',
        },
        {
          id: 16,
          question: '위 문제를 해결하기 위한 올바른 방법은 무엇인가요?',
          options: [
            'var 대신 let을 사용하여 블록 스코프를 적용한다.',
            '함수를 사용하지 않고 전역 변수를 사용한다.',
            '클로저를 사용하지 않는다.',
            'helpText 배열을 함수 내부에서 선언하지 않는다.',
          ],
          correctAnswer: 0,
          explanation:
            'let을 사용하면 각 루프 반복마다 블록 스코프가 생성되어 문제를 해결할 수 있습니다.',
        },
      ],
    },
    {
      title: '성능 고려사항',
      description: '클로저 사용 시 성능 최적화에 대한 질문',
      questions: [
        {
          id: 17,
          question:
            '다음 비효율적인 방식의 예제에서 문제가 되는 부분은 무엇인가요?\n```javascript\nfunction MyObject(name, message) {\n  this.name = name.toString();\n  this.message = message.toString();\n  this.getName = function() {\n    return this.name;\n  };\n  this.getMessage = function() {\n    return this.message;\n  };\n}\n```',
          options: [
            '메서드가 매번 새로운 함수로 생성된다.',
            '변수가 문자열로 변환되지 않았다.',
            '객체 생성 시 name과 message를 설정하지 않았다.',
            '프로토타입을 사용하지 않았다.',
          ],
          correctAnswer: 0,
          explanation:
            'getName과 getMessage 메서드가 매번 새로운 함수로 생성되어 메모리 사용량이 증가합니다.',
        },
        {
          id: 18,
          question: '위 문제를 해결하기 위한 효율적인 방법은 무엇인가요?',
          options: [
            '프로토타입을 사용하여 메서드를 한 번만 정의한다.',
            '함수 내부에서 변수를 선언하지 않는다.',
            '클로저를 사용하지 않는다.',
            '함수를 비동기로 만든다.',
          ],
          correctAnswer: 0,
          explanation:
            '프로토타입을 사용하면 메서드를 한 번만 정의하여 메모리 사용을 최적화할 수 있습니다.',
        },
        {
          id: 19,
          question: '프로토타입을 활용하면 어떤 이점을 얻을 수 있나요?',
          options: [
            '메모리 사용량과 실행 속도를 개선할 수 있다.',
            '비동기 처리를 쉽게 할 수 있다.',
            '클로저를 사용하지 않고도 데이터 은닉이 가능하다.',
            '모듈 간의 의존성을 줄일 수 있다.',
          ],
          correctAnswer: 0,
          explanation:
            '프로토타입을 활용하면 메모리 사용량과 실행 속도를 개선할 수 있습니다.',
        },
      ],
    },
    {
      title: '추가 개념',
      description: '클로저와 관련된 추가적인 개념에 대한 질문',
      questions: [
        {
          id: 20,
          question:
            '클로저를 사용하여 프라이빗 변수를 구현하는 이유는 무엇인가요?',
          options: [
            '데이터를 은닉하고 외부에서 직접 접근하지 못하게 하기 위해',
            '변수의 타입을 제한하기 위해',
            '비동기 함수의 실행 순서를 제어하기 위해',
            '모듈 간의 의존성을 줄이기 위해',
          ],
          correctAnswer: 0,
          explanation:
            '클로저를 사용하면 데이터 프라이버시를 구현하여 외부에서 직접 접근하지 못하게 할 수 있습니다.',
        },
        {
          id: 21,
          question: "클로저와 관련된 개념 중 '캡슐화'는 무엇을 의미하나요?",
          options: [
            '데이터와 메서드를 하나의 단위로 묶는 것',
            '비동기 함수를 동기적으로 실행하는 것',
            '변수의 타입을 변경하는 것',
            '함수의 실행 컨텍스트를 분리하는 것',
          ],
          correctAnswer: 0,
          explanation:
            '캡슐화는 데이터와 메서드를 하나의 단위로 묶어 외부에서의 직접 접근을 제한하는 것을 의미합니다.',
        },
      ],
    },

    {
      title: '추가 개념',
      description: '클로저와 관련된 추가적인 개념에 대한 질문',
      questions: [
        {
          id: 22,
          question:
            '즉시 실행 함수 표현식(IIFE)을 클로저와 함께 사용하는 이유는 무엇인가요?',
          options: [
            '변수의 유효 범위를 제한하여 전역 네임스페이스 오염을 방지하기 위해',
            '비동기 처리를 위해',
            '함수의 실행 속도를 높이기 위해',
            '프로토타입을 확장하기 위해',
          ],
          correctAnswer: 0,
          explanation:
            'IIFE를 사용하면 변수를 지역적으로 제한하여 전역 네임스페이스 오염을 방지할 수 있으며, 이는 클로저와 함께 사용될 때 유용합니다.',
        },
        {
          id: 23,
          question: '클로저가 가비지 컬렉션에 미치는 영향은 무엇인가요?',
          options: [
            '클로저는 사용되지 않는 변수를 가비지 컬렉션이 회수하지 못하게 할 수 있다.',
            '클로저는 가비지 컬렉션을 활성화시킨다.',
            '클로저는 가비지 컬렉션과 무관하다.',
            '클로저는 가비지 컬렉션의 속도를 증가시킨다.',
          ],
          correctAnswer: 0,
          explanation:
            '클로저는 함수가 외부 변수에 대한 참조를 유지하기 때문에, 해당 변수가 사용되지 않더라도 가비지 컬렉션이 회수하지 못할 수 있습니다.',
        },
        {
          id: 24,
          question:
            "클로저 내부에서 'this' 키워드를 사용할 때 주의해야 할 점은 무엇인가요?",
          options: [
            "클로저 내부의 'this'는 외부 함수의 'this'와 다를 수 있다.",
            "클로저에서는 'this'를 사용할 수 없다.",
            "클로저는 'this' 키워드를 자동으로 바인딩한다.",
            "클로저 내부의 'this'는 항상 전역 객체를 가리킨다.",
          ],
          correctAnswer: 0,
          explanation:
            "클로저 내부의 'this'는 외부 함수의 'this'와 다를 수 있으며, 필요한 경우 .bind()나 화살표 함수를 사용하여 적절히 바인딩해야 합니다.",
        },
      ],
    },

    {
      title: '추가 개념',
      description: '클로저와 관련된 추가적인 개념에 대한 질문',
      questions: [
        {
          id: 25,
          question:
            '클로저를 사용하여 데이터 프라이버시를 구현할 수 있는 이유는 무엇인가요?',
          options: [
            '클로저를 통해 외부에서 함수 내부의 변수에 직접 접근할 수 없기 때문에',
            '클로저는 비동기 처리를 지원하기 때문에',
            '클로저는 변수의 타입을 제한하기 때문에',
            '클로저는 실행 속도를 빠르게 하기 때문에',
          ],
          correctAnswer: 0,
          explanation:
            '클로저를 통해 외부에서 함수 내부의 변수에 직접 접근할 수 없게 되어 데이터 프라이버시를 구현할 수 있습니다.',
        },
        {
          id: 26,
          question:
            'ES6의 let과 const를 사용하여 블록 스코프를 적절히 활용하는 이유는 무엇인가요?',
          options: [
            '변수의 유효 범위를 명확히 하여 오류를 줄이기 위해',
            '변수의 타입을 자동으로 변환하기 위해',
            '함수의 실행 속도를 높이기 위해',
            '비동기 함수의 실행을 동기적으로 만들기 위해',
          ],
          correctAnswer: 0,
          explanation:
            'let과 const는 블록 스코프를 제공하여 변수의 유효 범위를 명확히 함으로써 오류를 줄일 수 있습니다.',
        },
        {
          id: 27,
          question:
            '루프에서 클로저를 사용할 때 블록 스코프 변수를 사용하는 이유는 무엇인가요?',
          options: [
            '각 반복마다 새로운 스코프를 생성하여 변수 참조 문제를 방지하기 위해',
            '함수의 실행 속도를 높이기 위해',
            '클로저를 비동기적으로 만들기 위해',
            '프로토타입 체인을 단순화하기 위해',
          ],
          correctAnswer: 0,
          explanation:
            '블록 스코프 변수를 사용하면 각 반복마다 새로운 스코프가 생성되어 클로저가 올바른 변수를 참조하게 됩니다.',
        },
        {
          id: 28,
          question: '성능을 고려할 때 프로토타입을 활용하는 이유는 무엇인가요?',
          options: [
            '메모리 사용량과 실행 속도를 개선할 수 있기 때문에',
            '클로저를 더 쉽게 만들 수 있기 때문에',
            '함수의 실행 컨텍스트를 줄일 수 있기 때문에',
            '비동기 처리를 지원하기 때문에',
          ],
          correctAnswer: 0,
          explanation:
            '프로토타입을 활용하면 메모리 사용량과 실행 속도를 개선할 수 있습니다.',
        },
      ],
    },
  ],
};
