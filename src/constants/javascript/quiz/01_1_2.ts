import { Quiz } from '@/types/quiz.type';

export const quiz: Quiz = {
  title: 'JavaScript 반복문과 순회 퀴즈',
  description:
    'JavaScript의 다양한 반복문과 순회 방법에 대한 종합적인 이해도를 테스트합니다.',
  categories: [
    {
      title: '기본 개념',
      description: '반복문의 기초와 주요 개념을 테스트합니다.',
      questions: [
        {
          id: 1,
          question: '다음 중 JavaScript에서 제공하는 반복문이 아닌 것은?',
          options: ['for...in', 'while...do', 'do...while', 'for...of'],
          correctAnswer: 1,
          explanation:
            "JavaScript에서는 'while...do'가 아닌 'do...while' 구문을 사용합니다. 주요 반복문으로는 for, while, do...while, for...in, for...of가 있습니다.",
        },
        {
          id: 2,
          question:
            '다음 코드의 실행 결과는 무엇인가요?\n\nlet x = 0;\nlet n = 0;\nwhile (n < 3) {\n  n++;\n  x += n;\n}',
          options: [
            'x = 3, n = 3',
            'x = 6, n = 3',
            'x = 6, n = 2',
            'x = 3, n = 2',
          ],
          correctAnswer: 1,
          explanation:
            '코드는 3번 반복되며, x에는 1, 2, 3이 순차적으로 더해져 최종적으로 x=6, n=3이 됩니다.',
        },
      ],
    },
    {
      title: 'for 반복문',
      description: 'for 반복문의 구조와 활용을 테스트합니다.',
      questions: [
        {
          id: 3,
          question: 'for 반복문의 실행 순서로 올바른 것은?',
          options: [
            '초기화 → 증감 → 조건 → 코드실행',
            '초기화 → 조건 → 코드실행 → 증감',
            '조건 → 초기화 → 코드실행 → 증감',
            '증감 → 조건 → 코드실행 → 초기화',
          ],
          correctAnswer: 1,
          explanation:
            'for 반복문은 초기화 → 조건 검사 → 코드 블록 실행 → 증감 순으로 실행됩니다.',
        },
        {
          id: 4,
          question: '다음 중 무한 루프를 발생시키는 for 문은?',
          options: [
            'for(let i=0; i<10; i++)',
            'for(let i=10; i>0; i--)',
            'for(let i=0; i>=0; i++)',
            'for(let i=0; i<10; i+=2)',
          ],
          correctAnswer: 2,
          explanation:
            'for(let i=0; i>=0; i++)에서 조건 i>=0는 i가 계속 증가하므로 항상 참이 되어 무한 루프가 발생합니다.',
        },
      ],
    },
    {
      title: 'while과 do...while',
      description: 'while과 do...while 반복문의 차이점과 특징을 테스트합니다.',
      questions: [
        {
          id: 5,
          question: 'while과 do...while 반복문의 차이점으로 올바른 것은?',
          options: [
            'while은 무한 루프가 가능하지만 do...while은 불가능하다',
            'do...while은 최소 1번은 실행되지만, while은 조건이 거짓이면 한 번도 실행되지 않을 수 있다',
            'while은 증감식이 필요하지만 do...while은 필요없다',
            'do...while은 break 문을 사용할 수 없다',
          ],
          correctAnswer: 1,
          explanation:
            'do...while은 조건 검사 전에 먼저 실행되므로 최소 1번은 실행되지만, while은 조건을 먼저 검사하므로 조건이 거짓이면 실행되지 않을 수 있습니다.',
        },
      ],
    },
    {
      title: '제어문과 레이블',
      description: 'break, continue, 레이블의 사용법을 테스트합니다.',
      questions: [
        {
          id: 6,
          question: '다음 중 continue 문의 특징으로 올바른 것은?',
          options: [
            '반복문을 완전히 종료한다',
            '현재 반복을 건너뛰고 다음 반복으로 진행한다',
            '레이블과 함께 사용할 수 없다',
            'while 문에서는 사용할 수 없다',
          ],
          correctAnswer: 1,
          explanation:
            'continue는 현재 반복을 건너뛰고 다음 반복으로 진행하며, 레이블과 함께 사용할 수 있고 모든 반복문에서 사용 가능합니다.',
        },
      ],
    },
    {
      title: '객체와 배열 순회',
      description: 'for...in과 for...of의 사용법과 차이점을 테스트합니다.',
      questions: [
        {
          id: 7,
          question:
            '배열을 순회할 때 for...in 대신 for...of를 사용해야 하는 이유는?',
          options: [
            'for...of가 실행 속도가 더 빠르기 때문에',
            'for...in은 배열의 인덱스를 문자열로 반환하기 때문에',
            'for...in은 사용자 정의 속성도 순회하고 인덱스 순서가 보장되지 않기 때문에',
            'for...in은 배열의 length를 무시하기 때문에',
          ],
          correctAnswer: 2,
          explanation:
            'for...in은 사용자 정의 속성도 순회하고 인덱스 순서가 보장되지 않아 배열 순회에 적합하지 않습니다.',
        },
        {
          id: 8,
          question:
            'Object.entries()를 사용한 구조 분해 할당으로 객체를 순회할 때의 장점은?',
          options: [
            '메모리 사용량이 줄어든다',
            '키와 값을 동시에 얻을 수 있다',
            '순회 속도가 빨라진다',
            '객체의 프로토타입 체인을 무시한다',
          ],
          correctAnswer: 1,
          explanation:
            'Object.entries()와 구조 분해 할당을 사용하면 객체의 키와 값을 한 번에 얻을 수 있어 코드가 더 간결해집니다.',
        },
      ],
    },
    {
      title: '고급 개념',
      description: '반복문의 성능과 최적화에 대해 테스트합니다.',
      questions: [
        {
          id: 9,
          question: '다음 중 배열 순회 시 가장 메모리 효율적인 방법은?',
          options: [
            'for...in 루프 사용',
            'forEach 메서드 사용',
            'for...of 루프 사용',
            '일반 for 루프에서 length를 변수에 캐싱하여 사용',
          ],
          correctAnswer: 3,
          explanation:
            '일반 for 루프에서 length를 변수에 캐싱하여 사용하면 매 반복마다 length 속성에 접근하지 않아도 되어 더 효율적입니다.',
        },
        {
          id: 10,
          question:
            '비동기 작업을 포함한 반복문을 처리할 때 가장 적절한 방법은?',
          options: [
            '일반 for 루프 사용',
            'for await...of 사용',
            'while 루프 사용',
            'do...while 루프 사용',
          ],
          correctAnswer: 1,
          explanation:
            'for await...of를 사용하면 Promise를 반환하는 비동기 작업을 순차적으로 처리할 수 있습니다.',
        },
      ],
    },
    {
      title: '실제 활용 사례',
      description: '실제 프로그래밍에서 반복문의 활용을 테스트합니다.',
      questions: [
        {
          id: 11,
          question: 'DOM 요소 컬렉션을 순회할 때 가장 적절한 반복문은?',
          options: ['for...in', '일반 for 루프', 'for...of', 'while'],
          correctAnswer: 2,
          explanation:
            'DOM 요소 컬렉션은 유사 배열 객체이면서 이터러블이므로 for...of를 사용하면 가장 깔끔하게 순회할 수 있습니다.',
        },
        {
          id: 12,
          question:
            '이벤트 위임(Event Delegation) 패턴에서 자주 사용되는 반복문은?',
          options: ['do...while', 'while', 'for...of', '일반 for 루프'],
          correctAnswer: 1,
          explanation:
            '이벤트 위임 패턴에서는 주로 while 루프를 사용하여 DOM 트리를 상위로 탐색합니다.',
        },
      ],
    },
    {
      title: '성능 최적화',
      description: '반복문의 성능 최적화 방법을 테스트합니다.',
      questions: [
        {
          id: 13,
          question:
            '대용량 배열 처리 시 메모리 누수를 방지하기 위한 최선의 방법은?',
          options: [
            '재귀 함수 사용',
            'chunk 단위로 나누어 처리',
            'for...of 사용',
            'for...in 사용',
          ],
          correctAnswer: 1,
          explanation:
            '대용량 배열은 chunk 단위로 나누어 처리하면 메모리 사용량을 제어할 수 있고 브라우저 렌더링 블로킹을 방지할 수 있습니다.',
        },
        {
          id: 14,
          question: '다음 중 반복문 최적화 방법으로 옳지 않은 것은?',
          options: [
            '배열 길이를 변수에 캐싱하기',
            'break 조건을 최적화하기',
            '복잡한 객체 참조를 변수에 저장하기',
            'every() 대신 some() 메서드 사용하기',
          ],
          correctAnswer: 3,
          explanation:
            '배열의 모든 요소를 확인해야 할 때는 every()가, 조건을 만족하는 요소를 찾자마자 종료하고 싶을 때는 some()이 적절합니다.',
        },
      ],
    },
    {
      title: '에러 처리',
      description: '반복문에서의 에러 처리 방법을 테스트합니다.',
      questions: [
        {
          id: 15,
          question: '반복문 내에서 try-catch를 사용할 때 가장 효율적인 방법은?',
          options: [
            '각 반복마다 try-catch 블록 사용',
            '전체 반복문을 try-catch 블록으로 감싸기',
            '에러가 발생할 수 있는 코드만 try-catch로 감싸기',
            'try-catch 대신 if문 사용하기',
          ],
          correctAnswer: 2,
          explanation:
            '에러가 발생할 수 있는 특정 코드만 try-catch로 감싸면 성능상 이점이 있고 에러 처리도 더 명확해집니다.',
        },
      ],
    },
    {
      title: '이터레이터와 제너레이터',
      description:
        '반복문과 관련된 이터레이터와 제너레이터 개념을 테스트합니다.',
      questions: [
        {
          id: 16,
          question: '커스텀 이터러블 객체를 만들 때 필요한 메서드는?',
          options: ['iterator()', 'Symbol.iterator', 'iterate()', 'next()'],
          correctAnswer: 1,
          explanation:
            '커스텀 이터러블 객체를 만들려면 Symbol.iterator 메서드를 구현해야 하며, 이 메서드는 next() 메서드를 가진 이터레이터 객체를 반환해야 합니다.',
        },
        {
          id: 17,
          question: '제너레이터 함수를 사용했을 때의 장점이 아닌 것은?',
          options: [
            '중간에 실행을 멈췄다가 재개할 수 있다',
            '메모리 사용량을 줄일 수 있다',
            '복잡한 상태 관리가 필요없다',
            '실행 속도가 일반 함수보다 빠르다',
          ],
          correctAnswer: 3,
          explanation:
            '제너레이터는 실행 속도면에서는 일반 함수보다 느릴 수 있지만, 메모리 효율성과 코드 가독성 면에서 장점이 있습니다.',
        },
      ],
    },
    {
      title: '비동기 반복',
      description: '비동기 작업과 반복문의 조합을 테스트합니다.',
      questions: [
        {
          id: 18,
          question:
            '비동기 함수를 순차적으로 실행하기 위한 가장 적절한 방법은?',
          options: [
            'Promise.all()과 map() 사용',
            'for 루프 안에서 await 사용',
            'while 루프 사용',
            'forEach 메서드 사용',
          ],
          correctAnswer: 1,
          explanation:
            '비동기 함수를 순차적으로 실행하려면 for 루프 안에서 await를 사용해야 합니다. Promise.all()은 병렬 실행에 적합합니다.',
        },
        {
          id: 19,
          question: '다음 중 비동기 이터레이터의 특징이 아닌 것은?',
          options: [
            'next() 메서드가 Promise를 반환한다',
            'for await...of로 순회할 수 있다',
            'Symbol.asyncIterator를 구현해야 한다',
            '일반 for...of로도 순회할 수 있다',
          ],
          correctAnswer: 3,
          explanation:
            '비동기 이터레이터는 일반 for...of로 순회할 수 없으며, 반드시 for await...of를 사용해야 합니다.',
        },
      ],
    },
    {
      title: '함수형 프로그래밍',
      description: '반복문과 함수형 프로그래밍의 관계를 테스트합니다.',
      questions: [
        {
          id: 20,
          question:
            '다음 중 명령형 반복문을 함수형으로 대체하기에 가장 적절한 메서드는?',
          options: [
            'Array.from()',
            'Array.prototype.reduce()',
            'Array.prototype.forEach()',
            'Array.prototype.map()',
          ],
          correctAnswer: 1,
          explanation:
            'reduce()는 배열의 모든 요소를 순회하면서 누적된 결과값을 만들어내는 데 가장 적합한 함수형 메서드입니다.',
        },
      ],
    },
    {
      title: '최신 JavaScript 기능',
      description: 'ES2022 이후 추가된 반복문 관련 기능을 테스트합니다.',
      questions: [
        {
          id: 21,
          question: 'Object.entries()와 for...of의 조합이 유용한 경우는?',
          options: [
            '배열의 인덱스와 값이 모두 필요할 때',
            '객체의 키와 값을 동시에 순회할 때',
            'Map 객체를 순회할 때',
            'Set 객체를 순회할 때',
          ],
          correctAnswer: 1,
          explanation:
            'Object.entries()와 for...of의 조합은 객체의 키와 값을 동시에 순회할 때 가장 유용하며, 구조 분해 할당과 함께 사용하면 더욱 편리합니다.',
        },
        {
          id: 22,
          question:
            '다음 중 Array.prototype.forEach()와 비교했을 때 for...of의 장점이 아닌 것은?',
          options: [
            'break와 continue를 사용할 수 있다',
            'await를 사용할 수 있다',
            'return을 사용할 수 있다',
            '실행 속도가 더 빠르다',
          ],
          correctAnswer: 2,
          explanation:
            'for...of에서 return은 해당 함수를 종료시키지만, forEach의 콜백 함수 내에서도 return을 사용할 수 있습니다.',
        },
      ],
    },
    {
      title: '메모리 관리',
      description: '반복문 사용 시 메모리 관리 방법을 테스트합니다.',
      questions: [
        {
          id: 23,
          question:
            '대량의 데이터를 처리할 때 메모리 누수를 방지하는 방법으로 가장 적절한 것은?',
          options: [
            '재귀 함수 사용',
            '제너레이터 함수 사용',
            'for...in 루프 사용',
            'forEach 메서드 사용',
          ],
          correctAnswer: 1,
          explanation:
            '제너레이터 함수를 사용하면 데이터를 필요한 만큼만 메모리에 로드하여 처리할 수 있어 메모리 효율적입니다.',
        },
        {
          id: 24,
          question: '반복문에서 클로저를 사용할 때 주의해야 할 점은?',
          options: [
            '반복문 내부에서 선언된 함수는 항상 새로운 스코프를 생성한다',
            'let 키워드를 사용하면 클로저가 생성되지 않는다',
            '반복문의 변수가 클로저에 캡처될 때 의도치 않은 결과가 발생할 수 있다',
            '클로저는 성능에 영향을 미치지 않는다',
          ],
          correctAnswer: 2,
          explanation:
            '반복문의 변수가 클로저에 캡처될 때, 예상치 못한 결과가 발생할 수 있으므로 let 키워드를 사용하거나 IIFE를 활용해야 합니다.',
        },
      ],
    },
    {
      title: '디버깅과 성능',
      description: '반복문 디버깅과 성능 최적화 방법을 테스트합니다.',
      questions: [
        {
          id: 25,
          question: '반복문의 성능을 측정할 때 가장 적절한 방법은?',
          options: [
            'console.time() 사용',
            'Date.now() 사용',
            'performance.now() 사용',
            'new Date().getTime() 사용',
          ],
          correctAnswer: 2,
          explanation:
            'performance.now()는 마이크로초 단위의 정밀한 시간 측정이 가능하며, 시스템 시간 변경에 영향을 받지 않아 성능 측정에 가장 적합합니다.',
        },
        {
          id: 26,
          question:
            'V8 엔진에서 반복문 최적화를 위한 방법으로 올바르지 않은 것은?',
          options: [
            '단일 데이터 타입 사용',
            '배열 크기 미리 할당',
            'try-catch 블록 최소화',
            'for...in 루프 사용',
          ],
          correctAnswer: 3,
          explanation:
            'V8 엔진에서 for...in 루프는 최적화가 어려워 성능이 좋지 않습니다. 대신 Object.keys()나 for...of를 사용하는 것이 좋습니다.',
        },
      ],
    },
  ],
};
