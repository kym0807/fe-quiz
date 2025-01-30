import { Quiz } from '@/types/quiz.type';

export const quiz: Quiz = {
  title: '자바스크립트 메모리 관리 퀴즈',
  description:
    '자바스크립트의 메모리 관리 방식과 가비지 컬렉션에 대한 이해도를 평가하는 퀴즈입니다.',
  categories: [
    {
      title: '메모리 관리의 기본 개념',
      description:
        '메모리 관리의 기본 개념과 자바스크립트의 자동 메모리 관리에 대한 질문',
      questions: [
        {
          id: 1,
          question:
            '자바스크립트에서 메모리 관리가 자동으로 이루어지는 이유는 무엇인가요?',
          options: [
            '개발자가 메모리를 직접 할당하고 해제하지 않아도 되기 때문',
            '메모리 관리가 필요하지 않기 때문',
            '자바스크립트가 저수준 언어이기 때문',
            '브라우저가 모든 메모리를 관리하기 때문',
          ],
          correctAnswer: 0,
          explanation:
            '자바스크립트는 자동으로 메모리를 할당하고 해제하여 개발자가 직접 메모리를 관리할 필요가 없게 합니다.',
        },
        {
          id: 2,
          question: '메모리 생명 주기의 세 단계는 무엇인가요?',
          options: [
            '할당, 사용, 해제',
            '생성, 참조, 제거',
            '초기화, 실행, 종료',
            '배치, 실행, 정리',
          ],
          correctAnswer: 0,
          explanation:
            '메모리 생명 주기는 필요한 메모리를 할당하고, 할당된 메모리를 사용한 후, 더 이상 필요하지 않을 때 메모리를 해제하는 세 단계로 구성됩니다.',
        },
        {
          id: 3,
          question: '자바스크립트에서 메모리를 해제하는 시점은 언제인가요?',
          options: [
            '더 이상 참조되지 않을 때',
            '변수가 재할당될 때',
            '함수가 호출될 때',
            '프로그램이 종료될 때',
          ],
          correctAnswer: 0,
          explanation:
            '자바스크립트는 더 이상 참조되지 않는 객체를 가비지 컬렉션을 통해 자동으로 해제합니다.',
        },
      ],
    },
    {
      title: '자바스크립트의 메모리 할당',
      description: '자바스크립트에서 메모리가 어떻게 할당되는지에 대한 질문',
      questions: [
        {
          id: 4,
          question:
            '다음 중 자바스크립트에서 메모리가 할당되는 예시는 무엇인가요?\n```javascript\nconst o = { a: 1, b: null };\n```',
          options: [
            '객체와 그 내부 값들을 위한 메모리 할당',
            '함수 호출 시 메모리 할당',
            '전역 변수의 메모리 할당',
            '프로토타입의 메모리 할당',
          ],
          correctAnswer: 0,
          explanation:
            '객체 리터럴을 사용하여 객체와 그 내부 값들(a: 1, b: null)을 위한 메모리가 할당됩니다.',
        },
        {
          id: 5,
          question: '함수를 통해 메모리를 할당하는 예시는 무엇인가요?',
          options: [
            '```javascript\nconst d = new Date();\n```',
            '```javascript\nconst a = [1, 2, 3];\n```',
            '```javascript\nconst s = "hello";\n```',
            '```javascript\nconst n = 42;\n```',
          ],
          correctAnswer: 0,
          explanation:
            '`new Date()`를 사용하여 Date 객체를 생성하면 메모리가 할당됩니다.',
        },
        {
          id: 6,
          question:
            '다음 코드에서 새로운 문자열이 생성되는 이유는 무엇인가요?\n```javascript\nconst s = "string";\nconst s2 = s.substr(0, 3);\n```',
          options: [
            'substr 메서드가 새로운 문자열을 반환하기 때문',
            's 변수가 재할당되었기 때문',
            's2 변수가 존재하기 때문',
            '문자열이 불변이기 때문',
          ],
          correctAnswer: 0,
          explanation:
            'substr 메서드는 원본 문자열을 변경하지 않고 새로운 문자열을 반환하므로 새로운 메모리가 할당됩니다.',
        },
      ],
    },
    {
      title: '가비지 컬렉션의 기본 원리',
      description: '가비지 컬렉션의 기본 원리와 참조 개념에 대한 질문',
      questions: [
        {
          id: 7,
          question: '가비지 컬렉션이 객체를 해제하는 기준은 무엇인가요?',
          options: [
            '더 이상 도달할 수 없는 객체',
            '객체의 크기가 커졌을 때',
            '객체가 일정 시간 동안 사용되지 않았을 때',
            '객체가 메모리 한도를 초과했을 때',
          ],
          correctAnswer: 0,
          explanation:
            '가비지 컬렉션은 더 이상 도달할 수 없는 객체, 즉 참조되지 않는 객체를 해제합니다.',
        },
        {
          id: 8,
          question: '자바스크립트에서 객체 간의 참조는 어떻게 이루어지나요?',
          options: [
            '명시적 참조와 암시적 참조를 통해',
            '전역 변수만을 통해',
            '함수 호출을 통해',
            '클래스 상속을 통해',
          ],
          correctAnswer: 0,
          explanation:
            '객체는 명시적 참조(프로퍼티를 통해)와 암시적 참조(프로토타입 체인이나 스코프 체인을 통해)로 다른 객체를 참조할 수 있습니다.',
        },
        {
          id: 9,
          question: '다음 중 암시적 참조의 예시는 무엇인가요?',
          options: [
            '프로토타입 체인을 통한 참조',
            '객체의 프로퍼티를 통한 참조',
            '변수에 직접 할당된 참조',
            '함수의 매개변수를 통한 참조',
          ],
          correctAnswer: 0,
          explanation:
            '암시적 참조는 프로토타입 체인이나 스코프 체인을 통해 이루어지는 참조를 의미합니다.',
        },
      ],
    },
    {
      title: '참조 카운팅 방식',
      description: '참조 카운팅 방식과 그 한계에 대한 질문',
      questions: [
        {
          id: 10,
          question: '참조 카운팅 방식의 주요 한계는 무엇인가요?',
          options: [
            '순환 참조를 해결하지 못함',
            '객체의 크기를 측정할 수 없음',
            '메모리 해제가 느림',
            '비동기 처리를 지원하지 않음',
          ],
          correctAnswer: 0,
          explanation:
            '참조 카운팅 방식은 순환 참조를 해결하지 못하여 메모리 누수가 발생할 수 있습니다.',
        },
        {
          id: 11,
          question:
            '현대의 자바스크립트 엔진이 참조 카운팅을 사용하지 않는 이유는 무엇인가요?',
          options: [
            '순환 참조 문제를 해결하지 못하기 때문',
            '참조 카운팅이 느려서',
            '참조 카운팅이 복잡해서',
            '참조 카운팅이 메모리 효율적이지 않아서',
          ],
          correctAnswer: 0,
          explanation:
            '순환 참조 문제를 해결하지 못하기 때문에 현대의 자바스크립트 엔진들은 참조 카운팅 대신 다른 가비지 컬렉션 방식을 사용합니다.',
        },
        {
          id: 12,
          question:
            '참조 카운팅 방식에서 객체가 메모리에서 해제되기 위해 필요한 조건은 무엇인가요?',
          options: [
            '객체에 대한 모든 참조가 제거될 때',
            '객체가 일정 시간 동안 사용되지 않을 때',
            '객체의 크기가 줄어들었을 때',
            '객체가 함수의 반환값으로 사용되지 않을 때',
          ],
          correctAnswer: 0,
          explanation:
            '참조 카운팅 방식에서는 객체에 대한 모든 참조가 제거되면 해당 객체가 메모리에서 해제됩니다.',
        },
      ],
    },
    {
      title: 'Mark-and-sweep 알고리즘',
      description: 'Mark-and-sweep 알고리즘의 동작 원리와 특징에 대한 질문',
      questions: [
        {
          id: 13,
          question:
            'Mark-and-sweep 알고리즘은 어떤 방식을 사용하여 가비지를 수집하나요?',
          options: [
            '도달 가능성을 기반으로 객체를 표시하고, 표시되지 않은 객체를 해제',
            '참조 카운트를 기반으로 객체를 해제',
            '객체의 크기를 기준으로 해제',
            '객체의 생성 시간을 기준으로 해제',
          ],
          correctAnswer: 0,
          explanation:
            'Mark-and-sweep 알고리즘은 도달 가능성을 기반으로 객체를 표시하고, 표시되지 않은 객체를 메모리에서 해제합니다.',
        },
        {
          id: 14,
          question: 'Mark 단계에서 수행되는 작업은 무엇인가요?',
          options: [
            '도달 가능한 모든 객체를 표시',
            '도달할 수 없는 객체를 해제',
            '새로운 객체를 할당',
            '참조 카운트를 업데이트',
          ],
          correctAnswer: 0,
          explanation:
            'Mark 단계에서는 루트에서 시작하여 도달 가능한 모든 객체를 표시합니다.',
        },
        {
          id: 15,
          question: 'Sweep 단계에서 수행되는 작업은 무엇인가요?',
          options: [
            '표시되지 않은 객체를 메모리에서 해제',
            '도달 가능한 객체를 다시 마킹',
            '새로운 객체를 할당',
            '참조 카운트를 재설정',
          ],
          correctAnswer: 0,
          explanation:
            'Sweep 단계에서는 Mark 단계에서 표시되지 않은 객체들을 메모리에서 해제합니다.',
        },
      ],
    },
    {
      title: '메모리 관리를 돕는 데이터 구조',
      description:
        'WeakMap, WeakSet, WeakRef와 같은 데이터 구조의 역할과 특징에 대한 질문',
      questions: [
        {
          id: 16,
          question: 'WeakMap의 주요 특징은 무엇인가요?',
          options: [
            '객체에 대한 약한 참조를 제공하여 가비지 컬렉션을 방해하지 않는다.',
            '모든 키가 문자열이어야 한다.',
            '객체의 키-값 쌍을 순회할 수 있다.',
            '객체의 프로토타입을 변경할 수 있다.',
          ],
          correctAnswer: 0,
          explanation:
            'WeakMap은 객체에 대한 약한 참조를 제공하여 해당 객체가 가비지 컬렉션의 대상이 될 수 있게 합니다.',
        },
        {
          id: 17,
          question: 'WeakSet과 WeakMap의 공통점은 무엇인가요?',
          options: [
            '약한 참조를 제공하여 가비지 컬렉션을 방해하지 않는다.',
            '모든 요소가 고유해야 한다.',
            '순회가 가능하다.',
            '키와 값이 모두 객체여야 한다.',
          ],
          correctAnswer: 0,
          explanation:
            'WeakSet과 WeakMap은 모두 약한 참조를 제공하여 객체가 가비지 컬렉션의 대상이 될 수 있도록 합니다.',
        },
        {
          id: 18,
          question: 'WeakRef는 무엇을 제공하나요?',
          options: [
            '객체에 대한 약한 참조를 제공',
            '객체의 깊은 복사를 제공',
            '객체의 속성을 강제로 유지',
            '객체의 프로토타입을 변경',
          ],
          correctAnswer: 0,
          explanation:
            'WeakRef는 객체에 대한 약한 참조를 제공하여 객체가 가비지 컬렉션의 대상이 될 수 있게 합니다.',
        },
      ],
    },
    {
      title: 'FinalizationRegistry와 메모리 정리',
      description: 'FinalizationRegistry의 역할과 메모리 정리에 대한 질문',
      questions: [
        {
          id: 19,
          question: 'FinalizationRegistry는 어떤 목적으로 사용되나요?',
          options: [
            '객체가 가비지 컬렉션될 때 정리 작업을 수행하기 위해',
            '객체의 참조 카운트를 관리하기 위해',
            '객체의 프로토타입을 변경하기 위해',
            '객체의 메서드를 자동으로 등록하기 위해',
          ],
          correctAnswer: 0,
          explanation:
            'FinalizationRegistry는 객체가 가비지 컬렉션될 때 특정 정리 작업을 수행할 수 있도록 합니다.',
        },
        {
          id: 20,
          question: 'FinalizationRegistry에 등록된 콜백은 언제 호출되나요?',
          options: [
            '객체가 가비지 컬렉션된 후',
            '객체가 생성될 때',
            '객체의 프로퍼티가 변경될 때',
            '객체가 함수에 전달될 때',
          ],
          correctAnswer: 0,
          explanation:
            'FinalizationRegistry에 등록된 콜백은 객체가 가비지 컬렉션된 후에 호출됩니다.',
        },
        {
          id: 21,
          question:
            'FinalizationRegistry를 사용할 때 주의해야 할 점은 무엇인가요?',
          options: [
            '가비지 컬렉션의 타이밍이 보장되지 않는다.',
            '모든 객체에 대해 반드시 등록해야 한다.',
            'FinalizationRegistry는 동기적으로 작동한다.',
            'FinalizationRegistry는 프로토타입을 변경할 수 없다.',
          ],
          correctAnswer: 0,
          explanation:
            'FinalizationRegistry는 가비지 컬렉션의 타이밍을 보장하지 않으므로 중요한 리소스 관리는 명시적으로 해야 합니다.',
        },
      ],
    },
    {
      title: '실제 응용 예제',
      description: '캐시 시스템과 자동 정리를 위한 예제에 대한 질문',
      questions: [
        {
          id: 22,
          question: 'createSmartCache 함수의 주요 목적은 무엇인가요?',
          options: [
            '캐시된 데이터를 약한 참조로 관리하여 메모리 누수를 방지',
            '데이터를 동기적으로 가져오기',
            '캐시된 데이터를 강한 참조로 유지',
            '메모리 사용량을 무시하고 데이터를 저장',
          ],
          correctAnswer: 0,
          explanation:
            'createSmartCache 함수는 캐시된 데이터를 WeakRef로 관리하여 객체가 가비지 컬렉션될 수 있게 합니다.',
        },
        {
          id: 23,
          question:
            'ResourceManager 클래스에서 FinalizationRegistry가 수행하는 역할은 무엇인가요?',
          options: [
            '객체가 가비지 컬렉션될 때 리소스를 정리',
            '객체의 참조 카운트를 증가',
            '객체의 프로토타입을 설정',
            '객체의 메서드를 등록',
          ],
          correctAnswer: 0,
          explanation:
            'FinalizationRegistry는 객체가 가비지 컬렉션될 때 해당 리소스를 정리하는 역할을 수행합니다.',
        },
        {
          id: 24,
          question:
            'createCache 함수에서 WeakRef를 사용하는 이유는 무엇인가요?',
          options: [
            '메모리 최적화를 위해 캐시된 값이 가비지 컬렉션될 수 있도록 하기 위해',
            '캐시된 값을 강하게 참조하기 위해',
            '비동기 함수를 동기적으로 만들기 위해',
            '객체의 프로토타입을 변경하기 위해',
          ],
          correctAnswer: 0,
          explanation:
            'WeakRef를 사용하면 캐시된 값이 더 이상 필요하지 않을 때 가비지 컬렉션될 수 있어 메모리 최적화에 도움이 됩니다.',
        },
      ],
    },
    {
      title: '성능 고려사항',
      description: '메모리 관리 도구의 성능과 관련된 질문',
      questions: [
        {
          id: 25,
          question:
            'WeakRef와 FinalizationRegistry를 사용할 때 주의해야 할 점은 무엇인가요?',
          options: [
            '가비지 컬렉션의 타이밍이 보장되지 않는다.',
            '모든 객체에 대해 반드시 등록해야 한다.',
            'WeakRef는 객체의 프로토타입을 변경할 수 있다.',
            'FinalizationRegistry는 객체의 메서드를 자동으로 등록한다.',
          ],
          correctAnswer: 0,
          explanation:
            'WeakRef와 FinalizationRegistry는 가비지 컬렉션의 타이밍을 보장하지 않으므로 중요한 리소스 관리는 명시적으로 해야 합니다.',
        },
        {
          id: 26,
          question:
            '메모리 최적화를 위해 WeakMap을 사용하는 이유는 무엇인가요?',
          options: [
            '객체가 가비지 컬렉션될 수 있도록 약한 참조를 제공하기 위해',
            '객체를 강하게 참조하여 메모리 누수를 방지하기 위해',
            '모든 키가 문자열이어야 하기 때문에',
            '객체의 프로토타입을 변경하기 위해',
          ],
          correctAnswer: 0,
          explanation:
            'WeakMap은 객체에 대한 약한 참조를 제공하여 객체가 가비지 컬렉션될 수 있도록 하여 메모리 누수를 방지합니다.',
        },
        {
          id: 27,
          question:
            'FinalizationRegistry를 사용할 때 중요한 리소스 관리를 위해 권장되는 방법은 무엇인가요?',
          options: [
            'try...finally와 같은 명시적인 방법을 사용하는 것',
            '모든 객체를 FinalizationRegistry에 등록하는 것',
            '프로토타입을 자주 변경하는 것',
            'WeakRef를 사용하지 않는 것',
          ],
          correctAnswer: 0,
          explanation:
            'FinalizationRegistry는 가비지 컬렉션의 타이밍을 보장하지 않으므로, 중요한 리소스 관리는 try...finally와 같은 명시적인 방법을 사용하는 것이 좋습니다.',
        },
      ],
    },
    {
      title: '메모리 관리 모범 사례',
      description: '메모리 관리의 모범 사례와 관련된 질문',
      questions: [
        {
          id: 28,
          question:
            '메모리 누수를 방지하기 위해 큰 객체나 배열을 더 이상 필요하지 않을 때 어떻게 처리해야 하나요?',
          options: [
            '명시적으로 null 처리하기',
            '객체의 프로토타입을 변경하기',
            '함수를 비동기적으로 호출하기',
            'WeakMap에 추가하기',
          ],
          correctAnswer: 0,
          explanation:
            '큰 객체나 배열을 더 이상 필요하지 않을 때 명시적으로 null을 할당하여 참조를 제거하면 가비지 컬렉션이 가능합니다.',
        },
        {
          id: 29,
          question:
            '이벤트 리스너를 정리하지 않으면 어떤 문제가 발생할 수 있나요?',
          options: [
            '메모리 누수가 발생할 수 있다.',
            '프로토타입 체인이 깨질 수 있다.',
            '함수의 실행 속도가 빨라질 수 있다.',
            '객체의 프로퍼티가 사라질 수 있다.',
          ],
          correctAnswer: 0,
          explanation:
            '이벤트 리스너를 정리하지 않으면 해당 리스너가 객체를 계속 참조하게 되어 메모리 누수가 발생할 수 있습니다.',
        },
        {
          id: 30,
          question:
            'WeakMap을 사용하여 캐시 데이터를 관리하는 이유는 무엇인가요?',
          options: [
            '캐시된 데이터가 필요 없을 때 자동으로 가비지 컬렉션되도록 하기 위해',
            '캐시된 데이터를 강하게 참조하여 메모리를 유지하기 위해',
            '캐시 데이터를 순회할 수 있도록 하기 위해',
            '캐시 데이터를 문자열 키로 저장하기 위해',
          ],
          correctAnswer: 0,
          explanation:
            'WeakMap은 캐시된 데이터에 대한 약한 참조를 제공하여, 필요 없을 때 자동으로 가비지 컬렉션될 수 있게 합니다.',
        },
      ],
    },
    {
      title: '추가 개념',
      description: '메모리 관리와 관련된 추가적인 개념에 대한 질문',
      questions: [
        {
          id: 31,
          question:
            "메모리 관리에서 '순환 참조(Circular Reference)'란 무엇인가요?",
          options: [
            '두 객체가 서로를 참조하는 상황',
            '객체가 자신을 참조하는 상황',
            '함수가 자신을 반복적으로 호출하는 상황',
            '프로토타입 체인이 무한히 이어지는 상황',
          ],
          correctAnswer: 0,
          explanation:
            '순환 참조는 두 객체가 서로를 참조하는 상황을 의미하며, 참조 카운팅 방식에서는 가비지 컬렉션이 어려워집니다.',
        },
        {
          id: 32,
          question: 'WeakRef를 사용하면 어떤 장점을 얻을 수 있나요?',
          options: [
            '객체가 가비지 컬렉션될 수 있도록 약한 참조를 제공',
            '객체의 프로토타입을 변경할 수 있다.',
            '객체의 속성을 빠르게 검색할 수 있다.',
            '객체의 메서드를 자동으로 등록할 수 있다.',
          ],
          correctAnswer: 0,
          explanation:
            'WeakRef는 객체에 대한 약한 참조를 제공하여 객체가 가비지 컬렉션될 수 있도록 합니다.',
        },
        {
          id: 33,
          question:
            'FinalizationRegistry를 사용할 때 등록된 콜백이 실행되는 시점을 정확하게 예측할 수 있나요?',
          options: [
            '아니요, 가비지 컬렉션의 타이밍은 예측할 수 없습니다.',
            '네, 객체가 가비지 컬렉션되기 직전에 실행됩니다.',
            '네, 객체가 생성된 후 즉시 실행됩니다.',
            '아니요, 콜백은 객체가 생성될 때마다 실행됩니다.',
          ],
          correctAnswer: 0,
          explanation:
            'FinalizationRegistry의 콜백은 객체가 가비지 컬렉션될 때 실행되지만, 그 시점을 정확하게 예측할 수 없습니다.',
        },
      ],
    },

    {
      title: '추가 개념',
      description: '메모리 관리와 관련된 추가적인 개념에 대한 질문',
      questions: [
        {
          id: 34,
          question:
            "메모리 관리에서 '순환 참조(Circular Reference)'란 무엇인가요?",
          options: [
            '두 객체가 서로를 참조하는 상황',
            '객체가 자신을 참조하는 상황',
            '함수가 자신을 반복적으로 호출하는 상황',
            '프로토타입 체인이 무한히 이어지는 상황',
          ],
          correctAnswer: 0,
          explanation:
            '순환 참조는 두 객체가 서로를 참조하는 상황을 의미하며, 참조 카운팅 방식에서는 가비지 컬렉션이 어려워집니다.',
        },
        {
          id: 35,
          question: 'WeakRef를 사용하면 어떤 장점을 얻을 수 있나요?',
          options: [
            '객체가 가비지 컬렉션될 수 있도록 약한 참조를 제공',
            '객체의 프로토타입을 변경할 수 있다.',
            '객체의 속성을 빠르게 검색할 수 있다.',
            '객체의 메서드를 자동으로 등록할 수 있다.',
          ],
          correctAnswer: 0,
          explanation:
            'WeakRef는 객체에 대한 약한 참조를 제공하여 객체가 가비지 컬렉션될 수 있도록 합니다.',
        },
        {
          id: 36,
          question:
            'FinalizationRegistry를 사용할 때 등록된 콜백이 실행되는 시점을 정확하게 예측할 수 있나요?',
          options: [
            '아니요, 가비지 컬렉션의 타이밍은 예측할 수 없습니다.',
            '네, 객체가 가비지 컬렉션되기 직전에 실행됩니다.',
            '네, 객체가 생성된 후 즉시 실행됩니다.',
            '아니요, 콜백은 객체가 생성될 때마다 실행됩니다.',
          ],
          correctAnswer: 0,
          explanation:
            'FinalizationRegistry의 콜백은 객체가 가비지 컬렉션될 때 실행되지만, 그 시점을 정확하게 예측할 수 없습니다.',
        },
        {
          id: 37,
          question:
            '프로토타입 기반 상속과 클래스 기반 상속의 주요 차이점은 무엇인가요?',
          options: [
            '자바스크립트는 프로토타입 기반 상속을 사용하며, 클래스는 문법적 설탕일 뿐입니다.',
            '프로토타입 기반 상속은 속도 면에서 클래스 기반 상속보다 빠릅니다.',
            '클래스 기반 상속은 자바스크립트에서만 사용됩니다.',
            '프로토타입 기반 상속은 다중 상속을 지원합니다.',
          ],
          correctAnswer: 0,
          explanation:
            '자바스크립트의 클래스 문법은 프로토타입 기반 상속을 문법적으로 쉽게 사용할 수 있도록 한 것입니다.',
        },
        {
          id: 38,
          question: 'hasOwnProperty 메서드는 무엇을 확인하는 데 사용되나요?',
          options: [
            '객체가 특정 속성을 자신의 속성으로 가지고 있는지',
            '객체가 프로토타입 체인에 특정 속성을 가지고 있는지',
            '객체가 함수인지 확인하는지',
            '객체의 메서드가 제대로 작동하는지',
          ],
          correctAnswer: 0,
          explanation:
            'hasOwnProperty 메서드는 객체가 특정 속성을 자신의 속성으로 가지고 있는지 확인하는 데 사용됩니다.',
        },
        {
          id: 39,
          question:
            '프로토타입 체인이 길어질수록 성능에 어떤 영향을 미칠 수 있나요?',
          options: [
            '속성 검색 시간이 길어질 수 있습니다.',
            '메모리 사용량이 줄어듭니다.',
            '함수 실행 속도가 빨라집니다.',
            '객체 생성 속도가 증가합니다.',
          ],
          correctAnswer: 0,
          explanation:
            '프로토타입 체인이 길어질수록 속성을 찾는 시간이 길어질 수 있습니다.',
        },
      ],
    },
    {
      title: '실제 응용 예제',
      description: '캐시 시스템과 자동 정리를 위한 예제에 대한 질문',
      questions: [
        {
          id: 40,
          question: 'createSmartCache 함수의 주요 목적은 무엇인가요?',
          options: [
            '캐시된 데이터를 약한 참조로 관리하여 메모리 누수를 방지',
            '데이터를 동기적으로 가져오기',
            '캐시된 데이터를 강한 참조로 유지',
            '메모리 사용량을 무시하고 데이터를 저장',
          ],
          correctAnswer: 0,
          explanation:
            'createSmartCache 함수는 캐시된 데이터를 WeakRef로 관리하여 객체가 가비지 컬렉션될 수 있게 합니다.',
        },
        {
          id: 41,
          question:
            'ResourceManager 클래스에서 FinalizationRegistry가 수행하는 역할은 무엇인가요?',
          options: [
            '객체가 가비지 컬렉션될 때 리소스를 정리',
            '객체의 참조 카운트를 증가',
            '객체의 프로토타입을 설정',
            '객체의 메서드를 등록',
          ],
          correctAnswer: 0,
          explanation:
            'FinalizationRegistry는 객체가 가비지 컬렉션될 때 해당 리소스를 정리하는 역할을 수행합니다.',
        },
        {
          id: 42,
          question:
            'createCache 함수에서 WeakRef를 사용하는 이유는 무엇인가요?',
          options: [
            '메모리 최적화를 위해 캐시된 값이 가비지 컬렉션될 수 있도록 하기 위해',
            '캐시된 값을 강하게 참조하기 위해',
            '비동기 함수를 동기적으로 만들기 위해',
            '객체의 프로토타입을 변경하기 위해',
          ],
          correctAnswer: 0,
          explanation:
            'WeakRef를 사용하면 캐시된 값이 더 이상 필요하지 않을 때 가비지 컬렉션될 수 있어 메모리 최적화에 도움이 됩니다.',
        },
      ],
    },
    {
      title: '성능 고려사항',
      description: '메모리 관리 도구의 성능과 관련된 질문',
      questions: [
        {
          id: 43,
          question:
            'WeakRef와 FinalizationRegistry를 사용할 때 주의해야 할 점은 무엇인가요?',
          options: [
            '가비지 컬렉션의 타이밍이 보장되지 않는다.',
            '모든 객체에 대해 반드시 등록해야 한다.',
            'WeakRef는 객체의 프로토타입을 변경할 수 있다.',
            'FinalizationRegistry는 객체의 메서드를 자동으로 등록한다.',
          ],
          correctAnswer: 0,
          explanation:
            'WeakRef와 FinalizationRegistry는 가비지 컬렉션의 타이밍을 보장하지 않으므로 중요한 리소스 관리는 명시적으로 해야 합니다.',
        },
        {
          id: 44,
          question:
            '메모리 최적화를 위해 WeakMap을 사용하는 이유는 무엇인가요?',
          options: [
            '객체가 가비지 컬렉션될 수 있도록 약한 참조를 제공하기 위해',
            '객체를 강하게 참조하여 메모리 누수를 방지하기 위해',
            '캐시 데이터를 순회할 수 있도록 하기 위해',
            '객체의 프로토타입을 변경하기 위해',
          ],
          correctAnswer: 0,
          explanation:
            'WeakMap은 객체에 대한 약한 참조를 제공하여 객체가 가비지 컬렉션될 수 있도록 하여 메모리 누수를 방지합니다.',
        },
        {
          id: 45,
          question:
            'FinalizationRegistry를 사용할 때 중요한 리소스 관리를 위해 권장되는 방법은 무엇인가요?',
          options: [
            'try...finally와 같은 명시적인 방법을 사용하는 것',
            '모든 객체를 FinalizationRegistry에 등록하는 것',
            '프로토타입을 자주 변경하는 것',
            'WeakRef를 사용하지 않는 것',
          ],
          correctAnswer: 0,
          explanation:
            'FinalizationRegistry는 가비지 컬렉션의 타이밍을 보장하지 않으므로, 중요한 리소스 관리는 try...finally와 같은 명시적인 방법을 사용하는 것이 좋습니다.',
        },
      ],
    },
    {
      title: '메모리 관리 모범 사례',
      description: '메모리 관리의 모범 사례와 관련된 질문',
      questions: [
        {
          id: 46,
          question:
            '메모리 누수를 방지하기 위해 큰 객체나 배열을 더 이상 필요하지 않을 때 어떻게 처리해야 하나요?',
          options: [
            '명시적으로 null 처리하기',
            '객체의 프로토타입을 변경하기',
            '함수를 비동기적으로 호출하기',
            'WeakMap에 추가하기',
          ],
          correctAnswer: 0,
          explanation:
            '큰 객체나 배열을 더 이상 필요하지 않을 때 명시적으로 null을 할당하여 참조를 제거하면 가비지 컬렉션이 가능합니다.',
        },
        {
          id: 47,
          question:
            '이벤트 리스너를 정리하지 않으면 어떤 문제가 발생할 수 있나요?',
          options: [
            '메모리 누수가 발생할 수 있다.',
            '프로토타입 체인이 깨질 수 있다.',
            '함수의 실행 속도가 빨라질 수 있다.',
            '객체의 프로퍼티가 사라질 수 있다.',
          ],
          correctAnswer: 0,
          explanation:
            '이벤트 리스너를 정리하지 않으면 해당 리스너가 객체를 계속 참조하게 되어 메모리 누수가 발생할 수 있습니다.',
        },
        {
          id: 48,
          question:
            'WeakMap을 사용하여 캐시 데이터를 관리하는 이유는 무엇인가요?',
          options: [
            '캐시된 데이터가 필요 없을 때 자동으로 가비지 컬렉션되도록 하기 위해',
            '캐시된 데이터를 강하게 참조하여 메모리를 유지하기 위해',
            '캐시 데이터를 순회할 수 있도록 하기 위해',
            '캐시 데이터를 문자열 키로 저장하기 위해',
          ],
          correctAnswer: 0,
          explanation:
            'WeakMap은 캐시된 데이터에 대한 약한 참조를 제공하여, 필요 없을 때 자동으로 가비지 컬렉션될 수 있게 합니다.',
        },
      ],
    },
  ],
};
