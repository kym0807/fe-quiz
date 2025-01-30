import { Quiz } from '@/types/quiz.type';

export const quiz: Quiz = {
  title: 'Object-Oriented Programming Quiz',
  description:
    'Test your understanding of OOP concepts and their JavaScript implementation',
  categories: [
    {
      title: 'OOP 기본 개념',
      description: '객체 지향 프로그래밍의 기본 개념과 특징을 테스트합니다.',
      questions: [
        {
          id: 1,
          question:
            "객체 지향 프로그래밍에서 '클래스'와 '인스턴스'의 관계를 가장 잘 설명한 것은?",
          options: [
            '클래스는 인스턴스의 복사본이다',
            '클래스는 객체의 설계도이고, 인스턴스는 이를 바탕으로 만들어진 실제 객체이다',
            '인스턴스는 클래스의 상위 개념이다',
            '클래스와 인스턴스는 동일한 개념이다',
          ],
          correctAnswer: 1,
          explanation:
            '클래스는 객체의 설계도 역할을 하며, 인스턴스는 이 설계도를 바탕으로 실제로 생성된 구체적인 객체입니다.',
        },
        {
          id: 2,
          question: '다음 중 캡슐화(Encapsulation)의 주요 목적이 아닌 것은?',
          options: [
            '데이터 은닉',
            '코드의 실행 속도 향상',
            '내부 구현 보호',
            '인터페이스를 통한 접근 제어',
          ],
          correctAnswer: 1,
          explanation:
            '캡슐화의 주요 목적은 데이터 은닉, 내부 구현 보호, 인터페이스를 통한 접근 제어이며, 실행 속도 향상은 주요 목적이 아닙니다.',
        },
        {
          id: 3,
          question: '자바스크립트의 OOP 구현 방식의 특징으로 올바른 것은?',
          options: [
            '항상 클래스를 먼저 정의해야만 객체를 생성할 수 있다',
            '프로토타입 체인을 통한 상속 구현이 불가능하다',
            '객체 리터럴과 함수를 활용한 유연한 객체 생성이 가능하다',
            'private 속성을 직접 지원한다',
          ],
          correctAnswer: 2,
          explanation:
            '자바스크립트는 프로토타입 기반으로, 클래스 없이도 객체 리터럴과 함수를 활용하여 유연하게 객체를 생성할 수 있습니다.',
        },
        {
          id: 4,
          question: '다음 중 상속(Inheritance)의 주요 이점이 아닌 것은?',
          options: [
            '코드 재사용성 향상',
            '계층적 관계 표현 가능',
            '데이터베이스 성능 최적화',
            '유지보수성 향상',
          ],
          correctAnswer: 2,
          explanation:
            '상속의 주요 이점은 코드 재사용, 계층 구조 표현, 유지보수성 향상이며, 데이터베이스 성능과는 직접적인 관련이 없습니다.',
        },
        {
          id: 5,
          question:
            'ES6 클래스와 프로토타입 기반 상속의 관계를 올바르게 설명한 것은?',
          options: [
            'ES6 클래스는 프로토타입 기반 상속을 완전히 대체한다',
            'ES6 클래스는 프로토타입 기반 상속의 문법적 설탕이다',
            'ES6 클래스와 프로토타입 기반 상속은 전혀 다른 메커니즘이다',
            'ES6 클래스는 프로토타입 체인을 사용하지 않는다',
          ],
          correctAnswer: 1,
          explanation:
            'ES6 클래스는 프로토타입 기반 상속을 더 쉽게 사용할 수 있도록 하는 문법적 설탕으로, 내부적으로는 여전히 프로토타입 메커니즘을 사용합니다.',
        },
        {
          id: 6,
          question: '다음 중 OOP의 다형성(Polymorphism)을 가장 잘 설명한 예는?',
          options: [
            '같은 클래스의 여러 객체가 각각 다른 상태를 가지는 것',
            '하나의 인터페이스나 메서드가 다양한 형태로 동작하는 것',
            '객체의 내부 상태를 외부로부터 숨기는 것',
            '부모 클래스의 속성을 자식 클래스가 물려받는 것',
          ],
          correctAnswer: 1,
          explanation:
            '다형성은 동일한 인터페이스나 메서드가 문맥에 따라 다르게 동작할 수 있는 능력을 의미합니다.',
        },
        {
          id: 7,
          question:
            '자바스크립트에서 private 필드를 구현하는 가장 현대적인 방법은?',
          options: [
            '변수 이름 앞에 언더스코어(_) 붙이기',
            '클로저 사용하기',
            '#을 필드 이름 앞에 붙이기',
            'Object.defineProperty() 사용하기',
          ],
          correctAnswer: 2,
          explanation:
            'ES2022부터 도입된 private 필드 문법인 # 프리픽스를 사용하는 것이 가장 현대적인 방법입니다.',
        },
      ],
    },

    {
      title: 'OOP 고급 개념과 실전',
      description:
        '객체 지향 프로그래밍의 고급 개념과 실제 적용을 테스트합니다.',
      questions: [
        {
          id: 8,
          question:
            "다음 코드의 출력 결과는 무엇인가요?\njavascript\nclass Animal {\n  constructor(name) {\n    this.name = name;\n  }\n  speak() {\n    return `${this.name} makes a sound`;\n  }\n}\n\nclass Dog extends Animal {\n  speak() {\n    return `${super.speak()} - woof!`;\n  }\n}\n\nconst dog = new Dog('Rex');\nconsole.log(dog.speak());\n",
          options: [
            'Rex makes a sound',
            'Rex makes a sound - woof!',
            'undefined - woof!',
            'TypeError: super is not defined',
          ],
          correctAnswer: 1,
          explanation:
            'super 키워드를 사용하여 부모 클래스의 메서드를 호출하고, 그 결과에 추가 문자열을 연결합니다.',
        },
        {
          id: 9,
          question:
            'SOLID 원칙 중 단일 책임 원칙(Single Responsibility Principle)을 가장 잘 설명한 것은?',
          options: [
            '클래스는 하나의 책임만 가져야 하며, 그 책임을 완전히 캡슐화해야 한다',
            '상속을 받은 클래스는 부모 클래스를 완전히 대체할 수 있어야 한다',
            '인터페이스는 클라이언트에 특화되어 있어야 한다',
            '고수준 모듈은 저수준 모듈에 의존해서는 안 된다',
          ],
          correctAnswer: 0,
          explanation:
            '단일 책임 원칙은 클래스가 변경되어야 하는 이유가 오직 하나여야 함을 의미합니다.',
        },
        {
          id: 10,
          question:
            "다음 중 '컴포지션(Composition)'을 상속 대신 사용해야 하는 가장 적절한 경우는?",
          options: [
            '코드 재사용이 필요한 모든 경우',
            '부모-자식 관계가 명확한 경우',
            '객체가 여러 다른 객체의 기능을 필요로 하는 경우',
            '성능 최적화가 필요한 경우',
          ],
          correctAnswer: 2,
          explanation:
            "컴포지션은 객체가 여러 다른 객체의 기능을 필요로 하거나, 'is-a' 관계보다 'has-a' 관계가 더 적절한 경우에 사용하는 것이 좋습니다.",
        },
        {
          id: 11,
          question:
            '자바스크립트에서 메모리 누수를 일으킬 수 있는 클래스 구현 패턴은?',
          options: [
            '이벤트 리스너를 클래스 메서드로 바인딩하고 제거하지 않는 경우',
            'static 메서드 사용',
            'getter/setter 사용',
            'constructor에서 super() 호출',
          ],
          correctAnswer: 0,
          explanation:
            '이벤트 리스너를 바인딩한 메서드를 제거하지 않으면, 객체가 더 이상 필요하지 않아도 메모리에서 해제되지 않을 수 있습니다.',
        },
        {
          id: 12,
          question: 'Mixin 패턴의 주요 장점이 아닌 것은?',
          options: [
            '다중 상속의 대안으로 사용 가능',
            '코드 재사용성 향상',
            '강한 결합도 감소',
            '객체 생성 시간 단축',
          ],
          correctAnswer: 3,
          explanation:
            'Mixin 패턴은 코드 재사용과 유연성을 제공하지만, 객체 생성 시간과는 직접적인 관련이 없습니다.',
        },
        {
          id: 13,
          question:
            "다음 중 '인터페이스 분리 원칙(Interface Segregation Principle)'을 위반하는 경우는?",
          options: [
            '작은 크기의 인터페이스를 여러 개 만드는 경우',
            '하나의 큰 인터페이스에 모든 메서드를 정의하는 경우',
            '클라이언트별로 다른 인터페이스를 제공하는 경우',
            '인터페이스 간에 상속을 사용하는 경우',
          ],
          correctAnswer: 1,
          explanation:
            '인터페이스 분리 원칙은 클라이언트가 자신이 사용하지 않는 메서드에 의존하지 않아야 한다고 명시합니다.',
        },
        {
          id: 14,
          question:
            '자바스크립트의 프라이빗 필드(#)와 클로저를 사용한 프라이빗 변수의 주요 차이점은?',
          options: [
            '성능 차이',
            '문법적 차이만 있을 뿐 기능은 동일',
            '클로저는 런타임에 프라이버시를 제공하고, #은 컴파일 타임에 제공',
            '클로저는 상속이 가능하고 #은 불가능',
          ],
          correctAnswer: 2,
          explanation:
            '프라이빗 필드(#)는 컴파일 타임에 강제되는 진정한 프라이버시를 제공하는 반면, 클로저는 런타임에 스코프를 통한 프라이버시를 제공합니다.',
        },
      ],
    },
  ],
};
