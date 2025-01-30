import { Quiz } from '@/types/quiz.type';

export const quiz: Quiz = {
  title: '비동기 JavaScript 마스터하기',
  description:
    'JavaScript의 비동기 프로그래밍 개념과 실제 구현에 대한 이해를 테스트합니다.',
  categories: [
    {
      title: '비동기 프로그래밍 기초',
      description: '비동기 프로그래밍의 기본 개념과 필요성을 이해합니다.',
      questions: [
        {
          id: 1,
          question:
            '다음 중 비동기 프로그래밍이 필요한 브라우저 API가 아닌 것은?',
          options: [
            'fetch()',
            'console.log()',
            'getUserMedia()',
            'showOpenFilePicker()',
          ],
          correctAnswer: 1,
          explanation:
            'console.log()는 동기식 작업으로, 즉시 실행되고 완료되는 API입니다. 나머지는 모두 시간이 걸리는 비동기 작업을 수행하는 API들입니다.',
        },
        {
          id: 2,
          question:
            'JavaScript가 싱글 스레드로 동작한다는 것의 의미로 가장 적절한 것은?',
          options: [
            '한 번에 여러 개의 이벤트를 처리할 수 있다',
            '한 번에 하나의 작업만 수행할 수 있다',
            '비동기 작업을 수행할 수 없다',
            '멀티 코어를 활용할 수 없다',
          ],
          correctAnswer: 1,
          explanation:
            'JavaScript는 싱글 스레드로 동작하며, 이는 한 번에 하나의 작업만 수행할 수 있음을 의미합니다. 하지만 비동기 프로그래밍을 통해 효율적인 작업 처리가 가능합니다.',
        },
        {
          id: 3,
          question: '다음 중 동기식 프로그래밍의 특징이 아닌 것은?',
          options: [
            '각 줄을 순서대로 실행한다',
            '각 줄의 작업이 완료될 때까지 대기한다',
            '다음 줄로 진행하기 전에 현재 작업을 완료한다',
            '여러 작업을 동시에 처리할 수 있다',
          ],
          correctAnswer: 3,
          explanation:
            '동기식 프로그래밍은 코드를 순차적으로 실행하며, 각 작업이 완료될 때까지 다음 작업을 시작하지 않습니다. 여러 작업의 동시 처리는 비동기 프로그래밍의 특징입니다.',
        },
        {
          id: 4,
          question: '비동기 함수의 올바른 동작 순서는?',
          options: [
            '작업 시작 → 작업 완료 대기 → 다음 작업 시작',
            '작업 시작 → 즉시 반환 → 백그라운드 작업 실행 → 완료 시 결과 알림',
            '작업 시작 → 에러 체크 → 작업 완료 → 다음 작업 시작',
            '작업 시작 → 모든 작업 완료 → 결과 반환',
          ],
          correctAnswer: 1,
          explanation:
            '비동기 함수는 작업을 시작하고 즉시 반환하며, 백그라운드에서 작업을 실행한 후 완료되면 결과를 알립니다. 이를 통해 메인 스레드의 블로킹을 방지합니다.',
        },
        {
          id: 5,
          question: '다음 중 콜백 지옥(Callback Hell)의 문제점이 아닌 것은?',
          options: [
            '코드 가독성이 떨어진다',
            '디버깅이 어렵다',
            '메모리 사용량이 증가한다',
            '각 단계마다 에러 처리를 따로 해야 한다',
          ],
          correctAnswer: 2,
          explanation:
            '콜백 지옥의 주요 문제점은 코드 가독성 저하, 디버깅의 어려움, 복잡한 에러 처리입니다. 메모리 사용량 증가는 콜백 지옥의 직접적인 문제점이 아닙니다.',
        },
      ],
    },

    {
      title: '비동기 프로그래밍 심화',
      description:
        '비동기 프로그래밍의 고급 개념과 실제 사용 사례를 테스트합니다.',
      questions: [
        {
          id: 6,
          question:
            'XMLHttpRequest의 이벤트 핸들러를 사용할 때의 특징으로 올바른 것은?',
          options: [
            '요청이 완료될 때까지 다른 코드 실행이 중단된다',
            '요청이 진행되는 동안 다른 이벤트를 처리할 수 없다',
            '요청이 완료되면 자동으로 페이지가 새로고침된다',
            '요청이 진행되는 동안에도 프로그램이 계속 실행될 수 있다',
          ],
          correctAnswer: 3,
          explanation:
            'XMLHttpRequest를 사용한 비동기 통신에서는 요청이 진행되는 동안에도 프로그램이 계속 실행될 수 있으며, 요청 완료 시 이벤트 핸들러가 호출됩니다.',
        },
        {
          id: 7,
          question:
            '다음 중 시간이 오래 걸리는 동기식 작업을 최적화하는 가장 적절한 방법은?',
          options: [
            '작업을 더 작은 단위로 나누어 실행한다',
            'Promise를 사용하여 비동기적으로 처리한다',
            '더 빠른 알고리즘을 사용한다',
            'setTimeout을 사용하여 지연시킨다',
          ],
          correctAnswer: 1,
          explanation:
            '시간이 오래 걸리는 동기식 작업은 Promise를 사용하여 비동기적으로 처리하는 것이 좋습니다. 이를 통해 메인 스레드 블로킹을 방지하고 UI 응답성을 유지할 수 있습니다.',
        },
        {
          id: 8,
          question:
            '콜백 함수를 Promise로 변환할 때 얻을 수 있는 장점이 아닌 것은?',
          options: [
            '체인 형태로 비동기 작업을 처리할 수 있다',
            '에러 처리를 한 곳에서 할 수 있다',
            '동기식 처리보다 실행 속도가 빨라진다',
            '코드의 가독성이 향상된다',
          ],
          correctAnswer: 2,
          explanation:
            'Promise는 비동기 처리를 위한 패턴으로, 실행 속도를 향상시키지는 않습니다. 대신 코드 가독성 향상, 에러 처리 통합, 체이닝을 통한 깔끔한 비동기 처리가 가능합니다.',
        },
        {
          id: 9,
          question: '다음 중 브라우저의 이벤트 루프와 관련하여 올바른 설명은?',
          options: [
            '이벤트 루프는 다중 스레드로 동작한다',
            '이벤트 루프는 비동기 작업의 완료 순서를 보장한다',
            '이벤트 루프는 콜 스택이 비어있을 때 태스크 큐의 작업을 실행한다',
            '이벤트 루프는 동기 작업과 비동기 작업을 동시에 처리한다',
          ],
          correctAnswer: 2,
          explanation:
            '이벤트 루프는 콜 스택이 비어있을 때 태스크 큐에서 대기 중인 작업을 콜 스택으로 이동시켜 실행합니다. 이는 JavaScript의 비동기 작업 처리의 핵심 메커니즘입니다.',
        },
        {
          id: 10,
          question:
            "비동기 프로그래밍에서 'Race Condition'이 발생할 수 있는 상황은?",
          options: [
            '두 개의 Promise가 서로 다른 시간에 완료될 때',
            '여러 비동기 작업이 동시에 같은 리소스에 접근할 때',
            '콜백 함수가 중첩되어 있을 때',
            'Promise chain이 너무 길어질 때',
          ],
          correctAnswer: 1,
          explanation:
            'Race Condition은 여러 비동기 작업이 동시에 같은 리소스에 접근할 때 발생할 수 있는 문제입니다. 이는 데이터의 일관성을 해칠 수 있으므로 적절한 동기화 메커니즘이 필요합니다.',
        },
      ],
    },

    {
      title: '실전 비동기 프로그래밍',
      description:
        '실제 개발 상황에서 마주치는 비동기 프로그래밍 문제와 해결 방법을 테스트합니다.',
      questions: [
        {
          id: 11,
          question:
            '소수를 생성하는 비효율적인 알고리즘이 UI를 블로킹하는 상황에서 가장 적절한 해결 방법은?',
          options: [
            'Web Worker를 사용하여 별도의 스레드에서 실행',
            'setTimeout을 사용하여 지연시키기',
            '알고리즘의 시간 복잡도 개선',
            'Promise로 래핑하여 실행',
          ],
          correctAnswer: 0,
          explanation:
            'CPU 집약적인 작업은 Web Worker를 사용하여 별도의 스레드에서 실행하는 것이 가장 적절합니다. 이를 통해 메인 스레드의 블로킹을 방지하고 UI 반응성을 유지할 수 있습니다.',
        },
        {
          id: 12,
          question:
            '다음 중 이벤트 핸들러가 비동기적으로 동작하는 이유로 가장 적절한 것은?',
          options: [
            '모든 이벤트 핸들러가 Promise를 반환하기 때문에',
            '이벤트 핸들러가 이벤트 루프를 통해 스케줄링되기 때문에',
            '브라우저가 자동으로 비동기 처리를 수행하기 때문에',
            'addEventListener가 비동기 함수이기 때문에',
          ],
          correctAnswer: 1,
          explanation:
            '이벤트 핸들러는 이벤트 루프를 통해 스케줄링되며, 이벤트가 발생했을 때 태스크 큐에 추가되어 콜 스택이 비었을 때 실행됩니다.',
        },
        {
          id: 13,
          question: '비동기 작업의 타임아웃을 구현할 때 가장 효과적인 방법은?',
          options: [
            'setTimeout과 clearTimeout 사용',
            'Promise.race() 사용',
            'async/await와 Promise.race() 조합',
            '이벤트 리스너와 setTimeout 조합',
          ],
          correctAnswer: 2,
          explanation:
            'async/await와 Promise.race()를 조합하면 타임아웃과 원래 작업을 경쟁시켜 깔끔하게 타임아웃을 구현할 수 있으며, 에러 처리도 용이합니다.',
        },
        {
          id: 14,
          question:
            "XMLHttpRequest를 사용할 때 발생할 수 있는 'CORS' 오류의 근본 원인은?",
          options: [
            '서버의 응답 속도가 너무 느린 경우',
            '브라우저의 동일 출처 정책(Same-Origin Policy)',
            '잘못된 HTTP 메서드 사용',
            '네트워크 연결 불안정',
          ],
          correctAnswer: 1,
          explanation:
            'CORS 오류는 브라우저의 보안 정책인 동일 출처 정책으로 인해 발생합니다. 다른 출처의 리소스에 접근하려면 서버에서 적절한 CORS 헤더를 설정해야 합니다.',
        },
        {
          id: 15,
          question:
            '비동기 프로그래밍에서 에러 처리를 위한 가장 현대적인 접근 방식은?',
          options: [
            'try-catch 블록 사용',
            '콜백 함수에서 에러 파라미터 처리',
            'async/await와 try-catch 조합',
            'window.onerror 이벤트 핸들러 사용',
          ],
          correctAnswer: 2,
          explanation:
            'async/await와 try-catch의 조합은 비동기 코드를 동기 코드처럼 작성할 수 있게 해주며, 에러 처리도 동기 코드와 같은 방식으로 할 수 있어 가장 현대적이고 깔끔한 방식입니다.',
        },
      ],
    },
  ],
};
