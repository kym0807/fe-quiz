import { Quiz } from '@/types/quiz.type';

export const quiz: Quiz = {
  title: 'JavaScript 컬렉션 마스터하기',
  description: 'Map, Set 및 관련 컬렉션 타입에 대한 종합 테스트',
  categories: [
    {
      title: 'Map 기초',
      description: 'Map의 기본 개념과 사용법',
      questions: [
        {
          id: 1,
          question: 'Map과 일반 객체의 가장 큰 차이점은 무엇인가요?',
          options: [
            'Map은 size 속성을 가진다',
            'Map은 키로 모든 타입의 값을 사용할 수 있다',
            'Map은 메모리를 더 효율적으로 사용한다',
            'Map은 JSON으로 직렬화가 쉽다',
          ],
          correctAnswer: 1,
          explanation:
            'Map은 문자열이나 심볼에 국한되지 않고 객체를 포함한 모든 타입을 키로 사용할 수 있습니다.',
        },
        {
          id: 2,
          question: '다음 중 Map을 사용하는 것이 더 적합한 경우는?',
          options: [
            '데이터를 JSON으로 직렬화해야 하는 경우',
            '키가 동적으로 추가되고 객체인 경우',
            '각 요소에 메서드가 필요한 경우',
            '키가 모두 문자열인 경우',
          ],
          correctAnswer: 1,
          explanation:
            '키가 객체인 경우나 동적으로 키가 추가되는 경우 Map이 더 적합합니다.',
        },
        {
          id: 3,
          question: 'WeakMap의 특징으로 올바르지 않은 것은?',
          options: [
            '키는 반드시 객체여야 한다',
            '가비지 컬렉션이 가능하다',
            'size 속성으로 크기를 확인할 수 있다',
            '열거가 불가능하다',
          ],
          correctAnswer: 2,
          explanation: 'WeakMap은 size 속성이 없으며, 열거가 불가능합니다.',
        },
      ],
    },
    {
      title: 'Set 기초',
      description: 'Set의 기본 개념과 사용법',
      questions: [
        {
          id: 4,
          question: 'Set에 대한 설명으로 올바르지 않은 것은?',
          options: [
            '중복된 값을 저장할 수 없다',
            'null과 undefined도 저장할 수 있다',
            'size 속성으로 크기를 확인할 수 있다',
            '인덱스로 요소에 접근할 수 있다',
          ],
          correctAnswer: 3,
          explanation: 'Set은 배열과 달리 인덱스로 요소에 접근할 수 없습니다.',
        },
        {
          id: 5,
          question: 'WeakSet의 특징으로 올바른 것은?',
          options: [
            '원시값을 저장할 수 있다',
            'size 속성을 가진다',
            '가비지 컬렉션의 대상이 될 수 있다',
            'for...of로 순회할 수 있다',
          ],
          correctAnswer: 2,
          explanation:
            'WeakSet은 객체만 저장할 수 있고, 저장된 객체에 대한 참조가 없어지면 가비지 컬렉션의 대상이 됩니다.',
        },
      ],
    },

    {
      title: 'Map과 Set의 고급 기능',
      description: 'Map과 Set의 고급 기능과 활용',
      questions: [
        {
          id: 6,
          question:
            'Map과 Set의 값 비교 방식(SameValueZero)에서 다음 중 올바른 것은?',
          options: [
            'NaN !== NaN으로 처리된다',
            '-0와 +0는 다른 값으로 처리된다',
            '객체는 참조가 같아야 같은 값으로 처리된다',
            'undefined와 null은 같은 값으로 처리된다',
          ],
          correctAnswer: 2,
          explanation:
            'Map과 Set에서 객체는 참조가 같아야 동일한 값으로 처리됩니다. NaN은 자신과 같은 값으로, -0와 +0는 같은 값으로 처리됩니다.',
        },
        {
          id: 7,
          question: 'WeakMap을 사용하는 가장 적절한 사례는?',
          options: [
            '사용자의 장바구니 데이터 저장',
            '클래스의 private 데이터 저장',
            '서버에서 받아온 JSON 데이터 캐싱',
            '애플리케이션의 설정값 저장',
          ],
          correctAnswer: 1,
          explanation:
            'WeakMap은 클래스의 private 데이터를 저장하는데 적합하며, 객체가 삭제될 때 관련 데이터도 자동으로 정리됩니다.',
        },
        {
          id: 8,
          question:
            '다음 중 Set을 배열로 변환하는 방법으로 올바르지 않은 것은?',
          options: [
            'Array.from(set)',
            '[...set]',
            'Array.prototype.slice.call(set)',
            'set.toArray()',
          ],
          correctAnswer: 3,
          explanation:
            'Set에는 toArray() 메서드가 없습니다. Array.from()이나 스프레드 연산자를 사용해야 합니다.',
        },
        {
          id: 9,
          question: 'Map의 키로 사용할 수 있는 것 중 잘못된 것은?',
          options: ['함수', '객체', 'Symbol', '정규표현식 리터럴 //의 결과값'],
          correctAnswer: 3,
          explanation:
            '정규표현식 리터럴 //은 문법 오류입니다. 하지만 new RegExp()로 생성한 정규표현식 객체는 Map의 키로 사용할 수 있습니다.',
        },
        {
          id: 10,
          question: 'WeakSet의 사용이 권장되는 경우는?',
          options: [
            'DOM 요소들의 집합 관리',
            '숫자 데이터의 중복 제거',
            '사용자 세션 데이터 저장',
            '애플리케이션 설정 저장',
          ],
          correctAnswer: 0,
          explanation:
            'WeakSet은 DOM 요소와 같이 수명이 있는 객체들의 집합을 관리할 때 적합합니다. 요소가 제거되면 자동으로 WeakSet에서도 제거됩니다.',
        },
      ],
    },
    {
      title: '실제 활용 사례',
      description: 'Map과 Set의 실제 활용 사례와 성능',
      questions: [
        {
          id: 11,
          question: 'Map의 성능상 이점이 가장 두드러지는 경우는?',
          options: [
            '데이터의 잦은 추가/삭제가 있는 경우',
            'JSON 직렬화가 필요한 경우',
            '키가 모두 문자열인 경우',
            '데이터가 정적인 경우',
          ],
          correctAnswer: 0,
          explanation:
            'Map은 데이터의 추가/삭제가 빈번한 경우 일반 객체보다 더 나은 성능을 제공합니다.',
        },
        {
          id: 12,
          question:
            'Set을 사용한 다음 코드의 결과는? new Set([{}, {}, {}]).size',
          options: ['1', '3', '0', 'TypeError'],
          correctAnswer: 1,
          explanation:
            '각 객체 리터럴은 서로 다른 참조를 가지므로, Set의 크기는 3이 됩니다.',
        },
      ],
    },

    {
      title: '메모리와 성능 최적화',
      description: 'Map과 Set 사용 시 메모리와 성능 고려사항',
      questions: [
        {
          id: 13,
          question:
            '다음 중 Map과 WeakMap의 메모리 관리 측면에서 가장 중요한 차이점은?',
          options: [
            'WeakMap은 키를 문자열로 변환한다',
            'WeakMap의 키는 가비지 컬렉션의 대상이 될 수 있다',
            'Map은 메모리를 더 많이 사용한다',
            'WeakMap은 JSON으로 직렬화할 수 없다',
          ],
          correctAnswer: 1,
          explanation:
            'WeakMap은 키에 대한 약한 참조를 유지하여, 다른 곳에서 참조가 없어지면 가비지 컬렉션의 대상이 됩니다.',
        },
        {
          id: 14,
          question:
            'Set을 사용할 때 메모리 누수를 방지하기 위한 가장 좋은 방법은?',
          options: [
            'Set 대신 WeakSet 사용하기',
            '주기적으로 Set을 비우기',
            'Set의 크기를 제한하기',
            '참조가 필요 없는 객체는 null로 설정하기',
          ],
          correctAnswer: 0,
          explanation:
            '객체만 저장하는 경우 WeakSet을 사용하면 자동으로 메모리 관리가 되어 누수를 방지할 수 있습니다.',
        },
        {
          id: 15,
          question: 'Map 객체를 순회할 때 가장 효율적인 방법은?',
          options: [
            'forEach 메서드 사용',
            'entries() 메서드 사용',
            'for...of 루프 직접 사용',
            'keys()와 get() 조합 사용',
          ],
          correctAnswer: 2,
          explanation:
            'for...of를 직접 사용하는 것이 중간 객체 생성을 피하고 가장 효율적입니다.',
        },
        {
          id: 16,
          question:
            '대량의 데이터를 처리할 때 Map과 Object 중 어느 것이 더 적합한가요?',
          options: [
            '항상 Map이 더 빠르다',
            '항상 Object가 더 빠르다',
            '키가 문자열일 경우 Object가 더 빠르다',
            '데이터 크기에 상관없이 동일하다',
          ],
          correctAnswer: 2,
          explanation:
            '키가 문자열인 경우 Object가 내부 최적화로 인해 더 나은 성능을 보일 수 있습니다.',
        },
      ],
    },
    {
      title: '에러 처리와 디버깅',
      description: 'Map과 Set 사용 시 발생할 수 있는 에러와 디버깅',
      questions: [
        {
          id: 17,
          question: 'WeakMap에서 발생할 수 있는 TypeError의 원인이 아닌 것은?',
          options: [
            '원시값을 키로 사용',
            'null을 값으로 사용',
            'set() 메서드 호출 시 인자 누락',
            'WeakMap을 순회하려고 시도',
          ],
          correctAnswer: 1,
          explanation:
            'WeakMap에서는 null을 포함한 모든 값을 value로 사용할 수 있지만, 키는 반드시 객체여야 합니다.',
        },
        {
          id: 18,
          question:
            'Set 객체의 add() 메서드 체이닝 시 주의할 점으로 올바른 것은?',
          options: [
            '체이닝이 불가능하다',
            '성능이 크게 저하된다',
            '이전 작업이 실패하면 전체가 취소된다',
            '메모리 사용량이 증가한다',
          ],
          correctAnswer: 2,
          explanation:
            'add() 메서드 체이닝 중 하나라도 실패하면 그 시점에서 에러가 발생하고 이후 작업은 실행되지 않습니다.',
        },
      ],
    },
  ],
};
