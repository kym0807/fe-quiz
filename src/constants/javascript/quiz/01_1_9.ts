import { Quiz } from '@/types/quiz.type';

export const quiz: Quiz = {
  title: 'JavaScript 객체 마스터하기',
  description: 'JavaScript 객체의 기본 개념부터 고급 기능까지 테스트',
  categories: [
    {
      title: '객체 기초',
      description: '객체의 기본 개념과 생성 방법',
      questions: [
        {
          id: 1,
          question: 'JavaScript에서 객체를 생성하는 가장 일반적인 방법은?',
          options: [
            'new Object() 생성자 사용',
            '객체 리터럴({}) 사용',
            'Object.create() 메서드 사용',
            'Class 키워드 사용',
          ],
          correctAnswer: 1,
          explanation:
            '객체 리터럴({})은 가장 간단하고 일반적인 객체 생성 방법입니다.',
        },
        {
          id: 2,
          question: '다음 중 생성자 함수 사용에 대한 올바른 설명은?',
          options: [
            'new 키워드 없이도 동일하게 동작한다',
            '화살표 함수로 생성자 함수를 만들 수 있다',
            'this는 생성될 인스턴스를 가리킨다',
            'return 문은 필수다',
          ],
          correctAnswer: 2,
          explanation:
            '생성자 함수 내의 this는 생성될 인스턴스를 가리키며, 이를 통해 속성과 메서드를 정의합니다.',
        },
        {
          id: 3,
          question: 'Object.create()의 주요 장점은 무엇인가요?',
          options: [
            '더 나은 성능',
            '명시적인 프로토타입 체인 설정',
            '자동 속성 초기화',
            '더 적은 메모리 사용',
          ],
          correctAnswer: 1,
          explanation:
            'Object.create()는 명시적으로 프로토타입을 지정할 수 있어 프로토타입 체인을 세밀하게 제어할 수 있습니다.',
        },
      ],
    },
    {
      title: '객체 속성과 메서드',
      description: '객체의 속성과 메서드 다루기',
      questions: [
        {
          id: 4,
          question:
            '객체 속성에 접근할 때 대괄호 표기법을 사용해야 하는 경우는?',
          options: [
            '속성 이름이 숫자로 시작할 때',
            '속성 값이 숫자일 때',
            '속성이 비어있을 때',
            '속성이 함수일 때',
          ],
          correctAnswer: 0,
          explanation:
            '속성 이름이 숫자로 시작하거나 특수문자, 공백을 포함할 때는 대괄호 표기법을 사용해야 합니다.',
        },
        {
          id: 5,
          question: 'Getter와 Setter의 주요 용도로 가장 적절한 것은?',
          options: [
            '성능 최적화',
            '속성 값의 유효성 검사와 계산된 속성 제공',
            '메모리 사용량 감소',
            '코드 가독성 향상',
          ],
          correctAnswer: 1,
          explanation:
            'Getter와 Setter는 속성 접근과 수정 시 유효성 검사를 수행하거나 계산된 값을 반환하는 데 주로 사용됩니다.',
        },
      ],
    },

    {
      title: '객체의 고급 기능',
      description: '객체의 복사, 비교, 병합 등 고급 기능',
      questions: [
        {
          id: 6,
          question: '다음 중 얕은 복사(shallow copy)의 특징으로 올바른 것은?',
          options: [
            '모든 중첩 객체도 완전히 새로운 복사본이 생성된다',
            '원본 객체의 참조값만 복사된다',
            '1단계 깊이의 속성만 새로운 복사본이 생성된다',
            '원본 객체와 동일한 메모리 주소를 공유한다',
          ],
          correctAnswer: 2,
          explanation:
            '얕은 복사는 첫 번째 레벨의 속성만 새로운 복사본을 만들고, 중첩된 객체는 참조를 복사합니다.',
        },
        {
          id: 7,
          question:
            '객체를 깊은 복사할 때 JSON.parse(JSON.stringify())를 사용하면 안 되는 경우는?',
          options: [
            '객체에 문자열만 있는 경우',
            '객체가 Date 객체나 함수를 포함하는 경우',
            '객체의 크기가 클 경우',
            '객체가 순환 참조가 없는 경우',
          ],
          correctAnswer: 1,
          explanation:
            '이 방법은 Date, Function, undefined 등의 특수한 타입을 제대로 처리하지 못하며, 순환 참조가 있는 경우 오류가 발생합니다.',
        },
        {
          id: 8,
          question: '메서드 체이닝을 구현하기 위해 필요한 것은?',
          options: [
            '모든 메서드에서 void를 반환',
            '각 메서드에서 this를 반환',
            '객체를 새로 생성하여 반환',
            'Promise 객체 반환',
          ],
          correctAnswer: 1,
          explanation:
            '메서드 체이닝을 가능하게 하려면 각 메서드에서 this를 반환하여 다음 메서드가 계속해서 호출될 수 있게 해야 합니다.',
        },
      ],
    },
    {
      title: '객체 순회와 열거',
      description: '객체의 속성을 순회하고 열거하는 방법',
      questions: [
        {
          id: 9,
          question: 'Object.keys()와 for...in 루프의 주요 차이점은?',
          options: [
            '성능 차이',
            'for...in은 프로토타입 체인의 속성도 순회한다',
            'Object.keys()는 심볼 속성을 포함한다',
            '둘의 차이가 없다',
          ],
          correctAnswer: 1,
          explanation:
            'for...in은 프로토타입 체인의 열거 가능한 속성도 순회하지만, Object.keys()는 객체 자신의 열거 가능한 속성만 반환합니다.',
        },
        {
          id: 10,
          question: '다음 중 객체의 모든 속성(심볼 포함)을 가져오는 메서드는?',
          options: [
            'Object.keys()',
            'Object.getOwnPropertyNames()',
            'Object.getOwnPropertySymbols()',
            'Object.getOwnPropertyDescriptors()',
          ],
          correctAnswer: 3,
          explanation:
            'Object.getOwnPropertyDescriptors()는 객체의 모든 속성(심볼 포함)에 대한 설명자를 반환합니다.',
        },
      ],
    },
    {
      title: '객체와 메모리',
      description: '객체의 메모리 관리와 성능',
      questions: [
        {
          id: 11,
          question:
            '객체 리터럴과 생성자 함수 중 메모리 사용면에서 더 효율적인 것은?',
          options: [
            '항상 객체 리터럴',
            '항상 생성자 함수',
            '인스턴스가 하나만 필요한 경우 객체 리터럴',
            '상황에 따라 다름',
          ],
          correctAnswer: 2,
          explanation:
            '단일 인스턴스만 필요한 경우 객체 리터럴이 프로토타입 체인을 생성하지 않아 메모리 사용면에서 더 효율적입니다.',
        },
        {
          id: 12,
          question: '객체의 속성을 삭제할 때 가장 좋은 방법은?',
          options: [
            'delete 연산자 사용',
            '속성값을 null로 설정',
            '속성값을 undefined로 설정',
            '상황에 따라 다름',
          ],
          correctAnswer: 3,
          explanation:
            '성능이 중요한 경우 null/undefined 설정이, 메모리 해제가 중요한 경우 delete 연산자가 적합합니다.',
        },
      ],
    },

    {
      title: '객체와 디자인 패턴',
      description: '객체 지향 프로그래밍의 디자인 패턴과 활용',
      questions: [
        {
          id: 13,
          question: '객체를 불변(immutable)으로 만드는 가장 완벽한 방법은?',
          options: [
            'Object.freeze() 사용',
            'const 키워드 사용',
            'Object.seal() 사용',
            '깊은 동결(deep freeze) 구현',
          ],
          correctAnswer: 3,
          explanation:
            '깊은 동결을 구현하면 중첩된 객체까지 모두 불변으로 만들 수 있습니다. Object.freeze()는 얕은 동결만 수행합니다.',
        },
        {
          id: 14,
          question: '다음 중 모듈 패턴을 구현할 때 가장 적절한 방법은?',
          options: [
            '객체 리터럴 사용',
            '즉시 실행 함수(IIFE)와 클로저 활용',
            '생성자 함수 사용',
            '클래스 사용',
          ],
          correctAnswer: 1,
          explanation:
            'IIFE와 클로저를 활용한 모듈 패턴은 private 상태를 유지하면서 public API를 제공할 수 있습니다.',
        },
        {
          id: 15,
          question: '객체의 속성 이름을 동적으로 생성할 때 가장 좋은 방법은?',
          options: [
            '대괄호 표기법 사용',
            'Object.defineProperty() 사용',
            'Proxy 객체 사용',
            'eval() 함수 사용',
          ],
          correctAnswer: 0,
          explanation:
            '대괄호 표기법은 동적으로 속성 이름을 생성할 때 가장 안전하고 직관적인 방법입니다.',
        },
      ],
    },
    {
      title: '객체와 성능 최적화',
      description: '객체 사용 시 성능 최적화 전략',
      questions: [
        {
          id: 16,
          question: '객체의 속성을 자주 접근할 때 성능을 최적화하는 방법은?',
          options: [
            '매번 점 표기법 사용',
            '변수에 캐싱하여 사용',
            '대괄호 표기법 사용',
            'getter 사용',
          ],
          correctAnswer: 1,
          explanation:
            '자주 접근하는 속성을 지역 변수에 캐싱하면 속성 조회 비용을 줄일 수 있습니다.',
        },
        {
          id: 17,
          question:
            '대량의 객체 생성 시 성능을 향상시키는 방법으로 적절하지 않은 것은?',
          options: [
            '객체 풀(Object Pool) 사용',
            '프로토타입 활용',
            'eval() 함수 사용',
            '팩토리 함수 사용',
          ],
          correctAnswer: 2,
          explanation:
            'eval() 함수는 보안 위험이 있고 성능도 좋지 않아 사용을 피해야 합니다.',
        },
        {
          id: 18,
          question: '다음 중 객체의 메모리 누수를 일으킬 수 있는 상황은?',
          options: [
            '객체를 null로 설정',
            '순환 참조 생성',
            'Object.freeze() 사용',
            '객체 리터럴 사용',
          ],
          correctAnswer: 1,
          explanation:
            '순환 참조는 가비지 컬렉션을 방해하여 메모리 누수를 일으킬 수 있습니다.',
        },
      ],
    },
    {
      title: '객체와 보안',
      description: '객체 사용 시 보안 고려사항',
      questions: [
        {
          id: 19,
          question: '다음 중 객체의 속성을 안전하게 정의하는 방법은?',
          options: [
            '직접 할당',
            'Object.defineProperty() 사용',
            'eval() 사용',
            'with 문 사용',
          ],
          correctAnswer: 1,
          explanation:
            'Object.defineProperty()를 사용하면 속성의 특성을 세밀하게 제어할 수 있어 더 안전합니다.',
        },
        {
          id: 20,
          question:
            '프로토타입 오염 공격을 방지하기 위한 방법으로 적절하지 않은 것은?',
          options: [
            'Object.create(null) 사용',
            'Object.freeze() 사용',
            'proto 직접 조작',
            'Object.preventExtensions() 사용',
          ],
          correctAnswer: 2,
          explanation:
            '__proto__를 직접 조작하는 것은 보안 위험을 초래할 수 있으며 권장되지 않습니다.',
        },
      ],
    },
  ],
};
