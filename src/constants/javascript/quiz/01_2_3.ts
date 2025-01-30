import { Quiz } from '@/types/quiz.type';

export const quiz: Quiz = {
  title: 'JavaScript Classes Quiz',
  description:
    'Test your understanding of JavaScript classes, inheritance, and encapsulation',
  categories: [
    {
      title: '클래스 기본 개념',
      description:
        '자바스크립트 클래스의 기본적인 개념과 사용법을 테스트합니다.',
      questions: [
        {
          id: 1,
          question: '자바스크립트에서 클래스의 주요 목적은 무엇인가요?',
          options: [
            '데이터베이스 연결을 관리하기 위해',
            '객체를 생성하기 위한 템플릿으로 사용하기 위해',
            '비동기 작업을 처리하기 위해',
            'DOM 조작을 쉽게 하기 위해',
          ],
          correctAnswer: 1,
          explanation:
            '클래스는 객체를 생성하기 위한 템플릿 역할을 하며, 이를 통해 동일한 구조의 객체를 쉽게 생성할 수 있습니다.',
        },
        {
          id: 2,
          question: '다음 중 constructor 메서드의 특징으로 올바르지 않은 것은?',
          options: [
            '클래스의 인스턴스를 초기화하는 특별한 메서드이다',
            '클래스당 하나만 존재할 수 있다',
            '생략하면 빈 constructor가 자동으로 생성된다',
            '다른 메서드처럼 여러 번 선언할 수 있다',
          ],
          correctAnswer: 3,
          explanation:
            'constructor는 클래스당 하나만 존재할 수 있으며, 여러 번 선언하면 SyntaxError가 발생합니다.',
        },
        {
          id: 3,
          question: '클래스 상속 시 super() 호출의 목적은 무엇인가요?',
          options: [
            '새로운 인스턴스를 생성하기 위해',
            '부모 클래스의 constructor를 호출하기 위해',
            '자식 클래스의 메서드를 초기화하기 위해',
            'static 메서드를 상속받기 위해',
          ],
          correctAnswer: 1,
          explanation:
            'super()는 부모 클래스의 constructor를 호출하여 부모 클래스의 초기화 로직을 실행합니다.',
        },
        {
          id: 4,
          question: 'private 필드를 선언하는 올바른 방법은?',
          options: [
            'private keyword 사용',
            '_ (언더스코어) 접두사 사용',
            '# (해시) 접두사 사용',
            'protected keyword 사용',
          ],
          correctAnswer: 2,
          explanation:
            '자바스크립트에서는 # 접두사를 사용하여 private 필드를 선언합니다.',
        },
        {
          id: 5,
          question:
            "다음 코드의 실행 결과는?\n```javascript\nclass Animal {\n  speak() {\n    return 'Animal speaks';\n  }\n}\n\nclass Dog extends Animal {\n  speak() {\n    return 'Dog barks';\n  }\n}\n\nconst dog = new Dog();\nconsole.log(dog.speak());\n```",
          options: ['Animal speaks', 'Dog barks', 'undefined', 'TypeError'],
          correctAnswer: 1,
          explanation:
            "메서드 오버라이딩으로 인해 Dog 클래스의 speak 메서드가 호출되어 'Dog barks'가 출력됩니다.",
        },
        {
          id: 6,
          question: 'private 메서드에 대한 설명으로 올바른 것은?',
          options: [
            '클래스 외부에서 직접 호출이 가능하다',
            '상속된 클래스에서 접근할 수 있다',
            '클래스 내부에서만 호출이 가능하다',
            'prototype에 추가된다',
          ],
          correctAnswer: 2,
          explanation:
            'private 메서드는 클래스 내부에서만 호출이 가능하며, 외부나 상속된 클래스에서는 접근할 수 없습니다.',
        },
        {
          id: 7,
          question:
            '자바스크립트 클래스에서 생성자를 생략했을 때 일어나는 일은?',
          options: [
            '에러가 발생한다',
            '빈 생성자가 자동으로 추가된다',
            'undefined가 반환된다',
            '부모 클래스의 생성자가 직접 호출된다',
          ],
          correctAnswer: 1,
          explanation:
            '생성자를 생략하면 빈 constructor가 자동으로 클래스에 추가됩니다.',
        },
      ],
    },

    {
      title: '클래스 고급 개념',
      description:
        '자바스크립트 클래스의 고급 기능과 실제 활용을 테스트합니다.',
      questions: [
        {
          id: 8,
          question:
            '다음 코드에서 발생하는 문제점은?\njavascript\nclass Counter {\n  count = 0;\n  increment() {\n    setInterval(function() {\n      this.count++;\n      console.log(this.count);\n    }, 1000);\n  }\n}\nconst counter = new Counter();\ncounter.increment();\n',
          options: [
            'setInterval이 작동하지 않음',
            'this 바인딩 문제로 인한 TypeError',
            'count가 private이 아님',
            '메모리 누수 발생',
          ],
          correctAnswer: 1,
          explanation:
            '일반 함수에서 this는 전역 객체를 가리키므로, 클래스의 this에 접근할 수 없습니다. 화살표 함수나 bind를 사용해야 합니다.',
        },
        {
          id: 9,
          question:
            '클래스의 static 메서드와 인스턴스 메서드의 차이점으로 올바른 것은?',
          options: [
            'static 메서드는 클래스의 인스턴스 없이 호출 가능하다',
            '인스턴스 메서드만 this를 사용할 수 있다',
            'static 메서드는 상속되지 않는다',
            '인스턴스 메서드는 프로토타입 체인에 없다',
          ],
          correctAnswer: 0,
          explanation:
            'static 메서드는 클래스의 인스턴스를 생성하지 않고도 클래스 자체에서 직접 호출할 수 있습니다.',
        },
        {
          id: 10,
          question: '다음 중 클래스 필드의 초기화 순서로 올바른 것은?',
          options: [
            '1. static 필드 2. 인스턴스 필드 3. constructor',
            '1. constructor 2. 인스턴스 필드 3. static 필드',
            '1. static 필드 2. constructor 3. 인스턴스 필드',
            '1. 인스턴스 필드 2. static 필드 3. constructor',
          ],
          correctAnswer: 0,
          explanation:
            '클래스 필드는 static 필드가 먼저 초기화되고, 그 다음 인스턴스 필드가 초기화된 후, constructor가 실행됩니다.',
        },
        {
          id: 11,
          question: 'private 클래스 필드를 사용할 때의 장점이 아닌 것은?',
          options: [
            '캡슐화 강화',
            '실행 속도 향상',
            '네임스페이스 충돌 방지',
            '리팩토링 용이성',
          ],
          correctAnswer: 1,
          explanation:
            'private 필드는 캡슐화, 네임스페이스 보호, 리팩토링 용이성을 제공하지만, 실행 속도와는 관련이 없습니다.',
        },
        {
          id: 12,
          question:
            "다음 코드의 문제점은?\njavascript\nclass Base {\n  constructor() {\n    this.print();\n  }\n  print() {\n    console.log('Base');\n  }\n}\n\nclass Derived extends Base {\n  #message = 'Derived';\n  print() {\n    console.log(this.#message);\n  }\n}\n\nnew Derived();\n",
          options: [
            '문법 오류',
            'private 필드가 초기화되기 전에 접근하여 에러 발생',
            'super() 호출 누락',
            '메서드 오버라이딩 불가',
          ],
          correctAnswer: 1,
          explanation:
            '생성자에서 private 필드가 초기화되기 전에 print 메서드를 호출하면 오류가 발생합니다.',
        },
        {
          id: 13,
          question: 'WeakMap을 사용한 private 데이터 구현과 # 문법의 차이점은?',
          options: [
            'WeakMap은 메모리 관리가 자동으로 된다',
            '# 문법은 상속이 불가능하다',
            'WeakMap은 런타임에 private 상태를 변경할 수 있다',
            '# 문법은 성능이 더 좋다',
          ],
          correctAnswer: 2,
          explanation:
            'WeakMap을 사용하면 런타임에 private 상태를 동적으로 변경할 수 있지만, # 문법은 컴파일 타임에 고정됩니다.',
        },
        {
          id: 14,
          question:
            '클래스 필드 제안(Class Fields Proposal)에서 제공하는 기능이 아닌 것은?',
          options: [
            'Public 필드 선언',
            'Private 필드 선언',
            'Static 필드 선언',
            'Protected 필드 선언',
          ],
          correctAnswer: 3,
          explanation:
            '자바스크립트의 클래스 필드 제안은 public, private, static 필드를 지원하지만, protected 접근 제어자는 지원하지 않습니다.',
        },
      ],
    },
  ],
};
