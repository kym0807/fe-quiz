import { Quiz } from '@/types/quiz.type';

export const quiz: Quiz = {
  title: 'JavaScript 메타 프로그래밍 퀴즈',
  description:
    'Proxy와 Reflect를 통한 JavaScript 메타 프로그래밍의 이해도를 테스트합니다',
  categories: [
    {
      title: '기본 개념',
      description: '메타 프로그래밍의 기초 개념과 용어에 대한 이해',
      questions: [
        {
          id: 1,
          question: '메타 프로그래밍의 주요 목적은 무엇인가요?',
          options: [
            '코드의 실행 속도를 향상시키는 것',
            'JavaScript의 기본 작동 방식을 확장하고 커스터마이즈하는 것',
            '메모리 사용량을 최적화하는 것',
            '코드의 가독성을 향상시키는 것',
          ],
          correctAnswer: 1,
          explanation:
            '메타 프로그래밍은 JavaScript의 기본 작동 방식을 확장하고 커스터마이즈하여 프로그래밍 언어의 동작을 제어하는 것을 목적으로 합니다.',
        },
        {
          id: 2,
          question:
            '다음 중 Proxy의 handler와 관련된 설명으로 올바르지 않은 것은?',
          options: [
            'handler는 트랩을 포함하는 객체이다',
            'handler는 한 번 설정하면 수정할 수 없다',
            'handler는 여러 개의 트랩을 포함할 수 있다',
            'handler는 target 객체의 동작을 가로채는 메서드들을 정의한다',
          ],
          correctAnswer: 1,
          explanation:
            'handler는 수정 가능한 객체이며, 필요에 따라 트랩을 추가하거나 수정할 수 있습니다.',
        },
        {
          id: 3,
          question: "Proxy의 'invariants'는 무엇을 의미하나요?",
          options: [
            '변경할 수 없는 객체 속성',
            '프록시의 성능 제약사항',
            '커스텀 동작 구현 시에도 반드시 지켜야 하는 규칙들',
            '프록시의 메모리 사용량 제한',
          ],
          correctAnswer: 2,
          explanation:
            'invariants는 커스텀 동작을 구현할 때도 변하지 않아야 하는 규칙들을 의미하며, 이를 위반하면 TypeError가 발생합니다.',
        },
        {
          id: 4,
          question: 'Proxy 객체의 target이란 무엇인가요?',
          options: [
            'Proxy가 가로채는 메서드의 집합',
            'Proxy의 설정 옵션을 담은 객체',
            'Proxy가 가상화하는 대상 객체',
            'Proxy의 성능 목표치',
          ],
          correctAnswer: 2,
          explanation:
            'target은 Proxy가 가상화하는 객체로, Proxy의 저장소 백엔드로 사용됩니다.',
        },
        {
          id: 5,
          question: 'Proxy.revocable()의 주요 용도는 무엇인가요?',
          options: [
            'Proxy의 성능을 최적화하기 위해',
            '나중에 비활성화할 수 있는 Proxy를 생성하기 위해',
            'Proxy의 메모리 사용량을 제한하기 위해',
            'Proxy의 보안을 강화하기 위해',
          ],
          correctAnswer: 1,
          explanation:
            'Proxy.revocable()은 나중에 비활성화할 수 있는 Proxy를 생성하며, 비활성화 후에는 모든 작업에서 TypeError가 발생합니다.',
        },
      ],
    },

    {
      title: 'Proxy 트랩과 활용',
      description: 'Proxy의 다양한 트랩과 실제 활용 사례에 대한 이해',
      questions: [
        {
          id: 6,
          question:
            '다음 Proxy 코드의 실행 결과는 무엇인가요?\njavascript\nconst handler = {\n  get(target, name) {\n    return name in target ? target[name] : 42;\n  }\n};\nconst p = new Proxy({}, handler);\np.a = 1;\nconsole.log(p.a, p.b);',
          options: ['1, undefined', '1, 42', '42, 42', 'undefined, 42'],
          correctAnswer: 1,
          explanation:
            'p.a는 직접 할당된 값 1을 반환하고, p.b는 정의되지 않은 속성이므로 handler의 get 트랩에 의해 42를 반환합니다.',
        },
        {
          id: 7,
          question: '다음 중 Proxy의 프로토타입 관련 트랩이 아닌 것은?',
          options: [
            'getPrototypeOf',
            'setPrototypeOf',
            'isExtensible',
            'getOwnPropertyOf',
          ],
          correctAnswer: 3,
          explanation:
            'getOwnPropertyOf는 존재하지 않는 트랩입니다. 프로토타입 관련 트랩은 getPrototypeOf, setPrototypeOf, isExtensible, preventExtensions입니다.',
        },
        {
          id: 8,
          question: "Proxy의 'has' 트랩이 가로채는 연산자는 무엇인가요?",
          options: ['typeof', 'instanceof', 'in', 'delete'],
          correctAnswer: 2,
          explanation:
            "has 트랩은 'in' 연산자를 사용한 속성 존재 여부 확인 작업을 가로챕니다.",
        },
        {
          id: 9,
          question: "Proxy의 'apply' 트랩을 사용할 때 주의해야 할 점은?",
          options: [
            '반드시 함수 객체에만 적용할 수 있다',
            '항상 배열을 반환해야 한다',
            'this 바인딩을 직접 처리해야 한다',
            '비동기 함수에는 사용할 수 없다',
          ],
          correctAnswer: 0,
          explanation:
            'apply 트랩은 함수 호출을 가로채는 트랩이므로, target이 반드시 함수 객체여야 합니다.',
        },
        {
          id: 10,
          question:
            "다음 중 Proxy의 'construct' 트랩에 대한 설명으로 올바른 것은?",
          options: [
            '일반 함수 호출을 가로챈다',
            '객체 생성을 가로챈다',
            'new 연산자를 통한 생성자 호출을 가로챈다',
            '객체 소멸을 가로챈다',
          ],
          correctAnswer: 2,
          explanation:
            'construct 트랩은 new 연산자를 사용한 생성자 호출을 가로챕니다.',
        },
      ],
    },

    {
      title: 'Reflect 객체와 고급 개념',
      description: 'Reflect 객체의 활용과 메타 프로그래밍의 고급 개념 이해',
      questions: [
        {
          id: 11,
          question:
            '다음 Reflect.apply() 코드의 실행 결과는 무엇인가요?\njavascript\nReflect.apply(String.fromCharCode, undefined, [104, 101, 108, 108, 111]);',
          options: [
            "'hello'",
            '[104, 101, 108, 108, 111]',
            'undefined',
            'TypeError',
          ],
          correctAnswer: 0,
          explanation:
            "String.fromCharCode 메서드에 ASCII 코드 배열을 적용하여 'hello' 문자열을 생성합니다.",
        },
        {
          id: 12,
          question:
            'Reflect.defineProperty()가 반환하는 값의 타입과 의미는 무엇인가요?',
          options: [
            '객체 - 정의된 속성 디스크립터',
            '문자열 - 에러 메시지',
            '불리언 - 속성 정의 성공 여부',
            'undefined - 항상 undefined 반환',
          ],
          correctAnswer: 2,
          explanation:
            'Reflect.defineProperty()는 속성 정의의 성공 여부를 나타내는 불리언 값을 반환합니다.',
        },
        {
          id: 13,
          question:
            '메타 프로그래밍에서 Proxy와 Reflect를 함께 사용할 때의 장점은 무엇인가요?',
          options: [
            '코드 실행 속도가 향상된다',
            '메모리 사용량이 감소한다',
            '기본 동작을 유지하면서 확장이 가능하다',
            '디버깅이 더 쉬워진다',
          ],
          correctAnswer: 2,
          explanation:
            'Reflect는 가로챈 작업의 기본 동작을 수행할 수 있게 해주므로, Proxy와 함께 사용하면 기존 동작을 유지하면서 확장이 가능합니다.',
        },
        {
          id: 14,
          question:
            '다음 중 메타 프로그래밍의 실제 활용 사례로 적절하지 않은 것은?',
          options: [
            '유효성 검사 자동화',
            '로깅 시스템 구현',
            'API 요청 캐싱',
            'CSS 스타일 적용',
          ],
          correctAnswer: 3,
          explanation:
            'CSS 스타일 적용은 일반적으로 메타 프로그래밍의 대상이 아니며, DOM 조작이나 스타일 API를 통해 처리됩니다.',
        },
        {
          id: 15,
          question:
            'Proxy의 handler에서 Reflect를 사용하지 않고 직접 target 객체를 조작할 때의 위험성은?',
          options: [
            '성능이 저하된다',
            '메모리 누수가 발생할 수 있다',
            'Proxy의 불변성(invariants)을 위반할 수 있다',
            '스택 오버플로우가 발생할 수 있다',
          ],
          correctAnswer: 2,
          explanation:
            '직접 target 객체를 조작하면 Proxy의 불변성을 실수로 위반할 수 있으며, 이는 TypeError를 발생시킬 수 있습니다.',
        },
      ],
    },
    {
      title: '성능과 최적화',
      description: '메타 프로그래밍 사용 시의 성능 고려사항',
      questions: [
        {
          id: 16,
          question:
            'Proxy를 사용할 때 성능에 가장 큰 영향을 미치는 요소는 무엇인가요?',
          options: [
            'handler 함수의 복잡도',
            'target 객체의 크기',
            '트랩의 호출 빈도',
            '메모리 사용량',
          ],
          correctAnswer: 2,
          explanation:
            '트랩이 호출될 때마다 추가적인 함수 호출이 발생하므로, 트랩의 호출 빈도가 성능에 가장 큰 영향을 미칩니다.',
        },
        {
          id: 17,
          question: '메타 프로그래밍을 통한 최적화가 적절한 경우는?',
          options: [
            '반복적인 데이터 처리가 필요한 경우',
            '복잡한 객체 조작이 필요한 경우',
            '런타임에 동작을 수정해야 하는 경우',
            '대규모 계산이 필요한 경우',
          ],
          correctAnswer: 2,
          explanation:
            '메타 프로그래밍은 런타임에 동적으로 동작을 수정해야 하는 경우에 가장 적절합니다.',
        },
      ],
    },
  ],
};
