import { Quiz } from '@/types/quiz.type';

export const quiz: Quiz = {
  title: 'JavaScript 반복자와 생성자 마스터하기',
  description: 'Iterator와 Generator의 개념부터 고급 활용까지 테스트해보세요',
  categories: [
    {
      title: '기본 개념',
      description:
        'Iterator와 Generator의 기본 구조와 특징에 대한 이해를 테스트합니다.',
      questions: [
        {
          id: 1,
          question:
            'Iterator 프로토콜을 준수하는 객체가 반드시 구현해야 하는 메서드는?',
          options: ['iterate()', 'next()', 'hasNext()', 'return()'],
          correctAnswer: 1,
          explanation:
            'Iterator 프로토콜을 준수하는 객체는 반드시 next() 메서드를 구현해야 하며, 이 메서드는 value와 done 속성을 가진 객체를 반환해야 합니다.',
        },
        {
          id: 2,
          question: 'Generator 함수를 정의할 때 사용하는 올바른 문법은?',
          options: [
            'function generator() {}',
            'function* generator() {}',
            'generator function() {}',
            'async function generator() {}',
          ],
          correctAnswer: 1,
          explanation:
            'Generator 함수는 function* 키워드를 사용하여 정의하며, 이는 일반 함수와 구별되는 특별한 문법입니다.',
        },
        {
          id: 3,
          question:
            '다음 중 Iterator의 next() 메서드가 반환하는 객체의 필수 속성이 아닌 것은?',
          options: ['value', 'done', 'current', 'index'],
          correctAnswer: 3,
          explanation:
            'Iterator의 next() 메서드는 반드시 value와 done 두 속성만을 포함하는 객체를 반환해야 합니다.',
        },
        {
          id: 4,
          question: 'Generator 함수 내에서 yield 키워드의 역할은?',
          options: [
            '함수를 종료시킨다',
            '다음 값을 계산한다',
            '현재 값을 반환하고 실행을 일시 중지한다',
            '에러를 발생시킨다',
          ],
          correctAnswer: 2,
          explanation:
            'yield 키워드는 Generator 함수의 실행을 일시 중지하고 현재 값을 반환합니다. 다음 next() 호출 시 중지된 지점부터 실행이 재개됩니다.',
        },
        {
          id: 5,
          question: '객체를 iterable로 만들기 위해 필요한 Symbol 속성은?',
          options: [
            'Symbol.iterate',
            'Symbol.iterator',
            'Symbol.iterable',
            'Symbol.iteration',
          ],
          correctAnswer: 1,
          explanation:
            '객체가 iterable이 되려면 Symbol.iterator 메서드를 구현해야 하며, 이 메서드는 iterator 객체를 반환해야 합니다.',
        },
      ],
    },

    {
      title: '고급 기능',
      description:
        'Iterator와 Generator의 고급 기능과 활용에 대한 이해를 테스트합니다.',
      questions: [
        {
          id: 6,
          question:
            'Generator의 next() 메서드에 값을 전달할 때 이 값이 할당되는 위치는?',
          options: [
            '다음 yield 문의 결과값으로',
            '이전 yield 문의 결과값으로',
            '현재 yield 문의 표현식으로',
            'Generator 함수의 매개변수로',
          ],
          correctAnswer: 2,
          explanation:
            'Generator의 next()에 전달된 값은 현재 일시 중지된 yield 표현식의 결과값으로 할당됩니다.',
        },
        {
          id: 7,
          question:
            '다음 중 Generator의 throw() 메서드의 동작으로 올바른 것은?',
          options: [
            'Generator를 즉시 종료한다',
            '다음 yield 문에서 에러가 발생한다',
            '현재 yield 위치에서 예외를 던진다',
            '모든 yield 문에서 에러가 발생한다',
          ],
          correctAnswer: 2,
          explanation:
            'throw() 메서드는 Generator의 현재 일시 중지된 위치에서 예외를 던지며, 이는 Generator 내부의 try-catch 블록으로 잡을 수 있습니다.',
        },
        {
          id: 8,
          question: '다음 중 Generator의 return() 메서드의 효과는?',
          options: [
            'Generator를 처음부터 다시 시작한다',
            'Generator를 일시적으로 중지한다',
            'Generator를 즉시 종료하고 주어진 값을 마지막 값으로 반환한다',
            '다음 yield 문으로 건너뛴다',
          ],
          correctAnswer: 2,
          explanation:
            'return() 메서드는 Generator를 즉시 종료하고, {value: 전달된값, done: true} 형태의 객체를 반환합니다.',
        },
        {
          id: 9,
          question: 'Iterator와 Generator를 사용할 때의 메모리 관리의 장점은?',
          options: [
            '모든 데이터를 한 번에 메모리에 로드한다',
            '데이터를 필요한 시점에 생성하여 메모리를 효율적으로 사용한다',
            '데이터를 자동으로 압축한다',
            '사용하지 않는 데이터를 자동으로 삭제한다',
          ],
          correctAnswer: 1,
          explanation:
            'Iterator와 Generator는 필요한 시점에 값을 생성하는 지연 평가(lazy evaluation) 방식을 사용하여 메모리를 효율적으로 관리합니다.',
        },
        {
          id: 10,
          question: 'for...of 루프가 내부적으로 사용하는 메서드는?',
          options: ['hasNext()', 'Symbol.iterator()', 'iterate()', 'forEach()'],
          correctAnswer: 1,
          explanation:
            'for...of 루프는 내부적으로 Symbol.iterator()를 호출하여 iterator를 얻고, 이를 통해 반복을 수행합니다.',
        },
      ],
    },

    {
      title: '실전 활용',
      description:
        'Iterator와 Generator의 실제 사용 사례와 패턴에 대한 이해를 테스트합니다.',
      questions: [
        {
          id: 11,
          question:
            '페이지네이션을 구현할 때 Generator를 사용하는 주된 이점은?',
          options: [
            '더 빠른 데이터 로딩',
            '자동 오류 처리',
            '필요한 페이지만 메모리에 로드하여 효율적인 메모리 사용',
            '더 나은 브라우저 호환성',
          ],
          correctAnswer: 2,
          explanation:
            'Generator를 사용한 페이지네이션은 필요한 페이지만 메모리에 로드하여 대용량 데이터를 효율적으로 처리할 수 있게 해줍니다.',
        },
        {
          id: 12,
          question: '무한 시퀀스를 다룰 때 Generator가 특히 유용한 이유는?',
          options: [
            '무한 시퀀스를 빠르게 계산할 수 있어서',
            '모든 값을 한 번에 저장하지 않고 필요할 때마다 생성할 수 있어서',
            '자동으로 캐싱을 수행해서',
            '병렬 처리가 가능해서',
          ],
          correctAnswer: 1,
          explanation:
            'Generator는 무한 시퀀스의 값을 모두 저장하지 않고 필요할 때마다 생성하므로, 메모리 사용량을 크게 줄일 수 있습니다.',
        },
        {
          id: 13,
          question: 'Generator와 async/await를 함께 사용할 때의 이점은?',
          options: [
            '코드 실행 속도 향상',
            '자동 에러 처리',
            '비동기 작업의 순차적 처리를 더 쉽게 구현',
            '더 적은 메모리 사용',
          ],
          correctAnswer: 2,
          explanation:
            'Generator와 async/await를 조합하면 복잡한 비동기 작업의 순차적 처리를 더 직관적이고 관리하기 쉽게 구현할 수 있습니다.',
        },
        {
          id: 14,
          question: 'Generator를 이용한 데이터 스트림 처리의 장점이 아닌 것은?',
          options: [
            '메모리 효율성',
            '데이터의 지연 처리',
            '양방향 통신 가능',
            '자동 병렬 처리',
          ],
          correctAnswer: 3,
          explanation:
            'Generator는 자동 병렬 처리를 제공하지 않습니다. 병렬 처리는 별도의 메커니즘을 통해 구현해야 합니다.',
        },
        {
          id: 15,
          question:
            '다음 중 Generator의 에러 처리에 대한 설명으로 올바른 것은?',
          options: [
            '에러가 발생하면 Generator는 항상 종료된다',
            'try-catch 블록을 사용할 수 없다',
            'throw() 메서드를 통해 특정 지점에서 에러를 발생시킬 수 있다',
            '에러는 자동으로 무시된다',
          ],
          correctAnswer: 2,
          explanation:
            'Generator에서는 throw() 메서드를 통해 특정 yield 지점에서 에러를 발생시킬 수 있으며, 이를 try-catch 블록으로 처리할 수 있습니다.',
        },
      ],
    },
  ],
};
