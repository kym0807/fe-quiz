import { Quiz } from '@/types/quiz.type';

export const quiz: Quiz = {
  title: 'JavaScript Promise 마스터하기',
  description: 'Promise의 기본 개념부터 고급 활용까지 테스트해보세요',
  categories: [
    {
      title: 'Promise 기본 개념',
      description: 'Promise의 기본 구조와 특징에 대한 이해를 테스트합니다.',
      questions: [
        {
          id: 1,
          question: 'Promise의 주요 목적으로 가장 적절한 것은?',
          options: [
            '동기 작업을 비동기로 변환하기 위해',
            '콜백 기반 비동기 코드를 더 관리하기 쉽게 만들기 위해',
            '자바스크립트의 성능을 향상시키기 위해',
            '에러 처리를 불가능하게 만들기 위해',
          ],
          correctAnswer: 1,
          explanation:
            'Promise는 콜백을 객체에 연결하는 방식으로 비동기 코드를 더 직관적이고 관리하기 쉽게 만듭니다.',
        },
        {
          id: 2,
          question:
            'Promise 체인에서 then() 핸들러의 반환값과 관련하여 가장 올바른 설명은?',
          options: [
            'then() 핸들러는 아무것도 반환하지 않아야 한다',
            'then() 핸들러는 반드시 Promise를 반환해야 한다',
            'then() 핸들러는 어떤 값이든 반환할 수 있지만, Promise를 반환하는 것이 권장된다',
            'then() 핸들러의 반환값은 중요하지 않다',
          ],
          correctAnswer: 2,
          explanation:
            'then() 핸들러는 어떤 값이든 반환할 수 있지만, Promise를 반환하는 것이 처리 상태를 추적하기 위해 권장됩니다.',
        },
        {
          id: 3,
          question: '다음 중 Promise의 상태가 아닌 것은?',
          options: ['pending', 'fulfilled', 'rejected', 'cancelled'],
          correctAnswer: 3,
          explanation:
            'Promise의 상태는 pending(대기), fulfilled(이행), rejected(거부) 세 가지만 존재합니다. cancelled는 Promise의 상태가 아닙니다.',
        },
        {
          id: 4,
          question: 'Promise.race()의 동작 방식으로 올바른 것은?',
          options: [
            '모든 Promise가 완료될 때까지 기다린다',
            '가장 마지막에 완료된 Promise의 결과만 반환한다',
            '가장 먼저 완료(성공 또는 실패)되는 Promise의 결과를 반환한다',
            '모든 Promise가 실패할 때까지 기다린다',
          ],
          correctAnswer: 2,
          explanation:
            'Promise.race()는 여러 Promise 중 가장 먼저 완료(성공 또는 실패)되는 Promise의 결과를 반환합니다.',
        },
        {
          id: 5,
          question: '마이크로태스크 큐와 태스크 큐의 실행 순서로 올바른 것은?',
          options: [
            '태스크 큐가 마이크로태스크 큐보다 먼저 실행된다',
            '마이크로태스크 큐가 태스크 큐보다 먼저 실행된다',
            '둘은 동시에 실행된다',
            '실행 순서는 무작위다',
          ],
          correctAnswer: 1,
          explanation:
            '이벤트 루프는 마이크로태스크 큐의 작업을 태스크 큐의 작업보다 먼저 처리합니다.',
        },
      ],
    },

    {
      title: 'Promise 고급 개념',
      description:
        'Promise의 심화 개념과 실제 활용에 대한 이해를 테스트합니다.',
      questions: [
        {
          id: 6,
          question: '다음 중 async/await의 특징으로 올바르지 않은 것은?',
          options: [
            'async 함수는 항상 Promise를 반환한다',
            'await는 async 함수 내에서만 사용할 수 있다',
            'await는 일반 값에도 사용할 수 있다',
            'await는 Promise를 동기 함수로 변환한다',
          ],
          correctAnswer: 3,
          explanation:
            'await는 Promise를 동기 함수로 변환하지 않습니다. 대신 비동기 작업이 완료될 때까지 async 함수의 실행을 일시 중지합니다.',
        },
        {
          id: 7,
          question: 'Promise.all()이 reject되는 경우는?',
          options: [
            '모든 Promise가 성공했을 때',
            '하나의 Promise라도 실패했을 때',
            '절반 이상의 Promise가 실패했을 때',
            '마지막 Promise가 실패했을 때',
          ],
          correctAnswer: 1,
          explanation:
            'Promise.all()은 전달받은 Promise 중 하나라도 실패하면 즉시 reject 상태가 되며, 첫 번째로 실패한 Promise의 에러가 전달됩니다.',
        },
        {
          id: 8,
          question: 'Promise의 에러 처리에 대한 설명으로 가장 올바른 것은?',
          options: [
            'catch()는 직전의 then()에서 발생한 에러만 처리할 수 있다',
            'catch()는 Promise 체인의 어느 지점에서 발생한 에러도 처리할 수 있다',
            '에러는 자동으로 다음 then()으로 전파된다',
            'async/await에서는 에러를 처리할 수 없다',
          ],
          correctAnswer: 1,
          explanation:
            'catch()는 Promise 체인에서 발생한 모든 에러를 처리할 수 있으며, 이는 동기 코드의 try/catch와 유사한 방식으로 작동합니다.',
        },
        {
          id: 9,
          question:
            '다음 중 Promise와 setTimeout의 관계에 대한 설명으로 가장 정확한 것은?',
          options: [
            'Promise와 setTimeout은 동일한 큐에서 처리된다',
            'Promise의 콜백은 setTimeout의 콜백보다 늦게 실행된다',
            'Promise의 콜백은 마이크로태스크 큐에서, setTimeout의 콜백은 태스크 큐에서 처리된다',
            'setTimeout은 Promise로 감싸면 더 늦게 실행된다',
          ],
          correctAnswer: 2,
          explanation:
            'Promise 콜백은 마이크로태스크 큐에서, setTimeout 콜백은 태스크 큐에서 처리되며, 마이크로태스크 큐가 우선적으로 처리됩니다.',
        },
        {
          id: 10,
          question: '다음 중 Promise 체이닝의 장점이 아닌 것은?',
          options: [
            '비동기 작업을 순차적으로 처리할 수 있다',
            '에러 처리를 한 곳에서 할 수 있다',
            '코드의 가독성이 향상된다',
            '모든 비동기 작업이 동시에 실행된다',
          ],
          correctAnswer: 3,
          explanation:
            'Promise 체이닝은 비동기 작업을 순차적으로 처리하며, 모든 작업이 동시에 실행되지는 않습니다. 동시 실행을 위해서는 Promise.all()과 같은 메서드를 사용해야 합니다.',
        },
      ],
    },

    {
      title: 'Promise 실전 활용',
      description:
        'Promise의 실제 개발 상황에서의 활용과 패턴에 대한 이해를 테스트합니다.',
      questions: [
        {
          id: 11,
          question: 'Promise.allSettled()와 Promise.all()의 주요 차이점은?',
          options: [
            'Promise.allSettled()는 더 빠르게 실행된다',
            'Promise.allSettled()는 일부 Promise가 실패해도 모든 결과를 반환한다',
            'Promise.allSettled()는 성공한 결과만 반환한다',
            'Promise.allSettled()는 첫 번째 성공 결과만 반환한다',
          ],
          correctAnswer: 1,
          explanation:
            'Promise.allSettled()는 모든 Promise가 처리될 때까지 기다리고, 각 Promise의 성공 또는 실패 상태와 결과값을 모두 반환합니다.',
        },
        {
          id: 12,
          question:
            'async/await와 Promise 체이닝 중 어느 것을 사용해야 할까요?',
          options: [
            '항상 async/await를 사용해야 한다',
            '항상 Promise 체이닝을 사용해야 한다',
            '병렬 처리가 필요한 경우 Promise 체이닝이 더 적합할 수 있다',
            '두 방식은 완전히 동일하므로 아무거나 사용해도 된다',
          ],
          correctAnswer: 2,
          explanation:
            '상황에 따라 적합한 방식이 다릅니다. 특히 여러 비동기 작업을 병렬로 처리해야 할 경우 Promise 체이닝이 더 명확할 수 있습니다.',
        },
        {
          id: 13,
          question: 'Promise에서 메모리 누수를 방지하기 위한 가장 좋은 방법은?',
          options: [
            '모든 Promise에 catch를 추가한다',
            '항상 finally 블록을 사용한다',
            'Promise 체인을 가능한 짧게 유지한다',
            'Promise를 변수에 할당하지 않는다',
          ],
          correctAnswer: 0,
          explanation:
            '처리되지 않은 rejection은 메모리 누수의 원인이 될 수 있으므로, 모든 Promise에 catch 핸들러를 추가하는 것이 중요합니다.',
        },
        {
          id: 14,
          question: 'Promise의 finally() 메서드의 특징으로 올바른 것은?',
          options: [
            'Promise의 결과값을 변경할 수 있다',
            '성공한 경우에만 실행된다',
            '이전 핸들러의 반환값을 받을 수 있다',
            '성공/실패 여부와 관계없이 항상 실행된다',
          ],
          correctAnswer: 3,
          explanation:
            'finally() 메서드는 Promise의 성공/실패 여부와 관계없이 항상 실행되며, Promise 체인의 결과값을 변경하지 않습니다.',
        },
        {
          id: 15,
          question: '다음 중 Promise를 사용할 때의 안티패턴이 아닌 것은?',
          options: [
            'Promise 생성자 내부에서 reject만 호출하고 resolve를 호출하지 않는 경우',
            'Promise 체인에서 에러 처리를 누락하는 경우',
            'async 함수 내에서 await를 사용하는 경우',
            'Promise를 중첩해서 사용하는 경우',
          ],
          correctAnswer: 2,
          explanation:
            'async 함수 내에서 await를 사용하는 것은 정상적인 패턴입니다. 다른 옵션들은 모두 Promise 사용시 피해야 할 안티패턴입니다.',
        },
        {
          id: 16,
          question:
            '이벤트 루프와 Promise의 관계에 대한 설명으로 가장 정확한 것은?',
          options: [
            'Promise의 콜백은 현재 실행 중인 스크립트가 완료된 직후에 실행된다',
            'Promise의 콜백은 이벤트 루프와 관계없이 즉시 실행된다',
            'Promise의 콜백은 다음 이벤트 루프 틱에서 실행된다',
            'Promise의 콜백은 이전 이벤트 루프 틱에서 실행된다',
          ],
          correctAnswer: 0,
          explanation:
            'Promise 콜백은 현재 실행 중인 스크립트가 완료된 직후, 다음 이벤트 루프 틱이 시작되기 전에 실행됩니다.',
        },
      ],
    },
  ],
};
