import { Quiz } from '@/types/quiz.type';

export const quiz: Quiz = {
  title: 'JavaScript 이벤트 루프 퀴즈',
  description:
    'JavaScript의 이벤트 루프와 런타임 모델에 대한 깊은 이해를 평가하는 퀴즈입니다.',
  categories: [
    {
      title: '이벤트 루프의 기본 개념',
      description: '이벤트 루프의 정의와 기본 개념에 대한 질문',
      questions: [
        {
          id: 1,
          question: '이벤트 루프(Event Loop)의 기본 역할은 무엇인가요?',
          options: [
            'JavaScript의 코드 실행, 이벤트 수집, 하위 작업 처리를 담당',
            '객체의 프로토타입 체인을 관리',
            '메모리 할당과 해제를 관리',
            '함수의 스코프를 설정',
          ],
          correctAnswer: 0,
          explanation:
            '이벤트 루프는 JavaScript의 코드 실행, 이벤트 수집, 하위 작업 처리를 담당하는 핵심 메커니즘입니다.',
        },
        {
          id: 2,
          question:
            '이벤트 루프가 C나 Java와 다른 특별한 런타임 모델을 사용하는 이유는 무엇인가요?',
          options: [
            'JavaScript는 단일 스레드에서 실행되기 때문',
            'JavaScript는 멀티스레딩을 지원하지 않기 때문',
            'JavaScript는 동기적 처리를 선호하기 때문',
            'JavaScript는 객체 지향 언어이기 때문',
          ],
          correctAnswer: 0,
          explanation:
            'JavaScript는 단일 스레드에서 실행되며, 이벤트 루프는 비동기 작업을 효율적으로 처리하기 위해 설계되었습니다.',
        },
        {
          id: 3,
          question:
            '이벤트 루프가 최적화된 최신 JavaScript 엔진의 주된 목적은 무엇인가요?',
          options: [
            '비동기 작업의 효율적인 처리를 보장하기 위해',
            '동기 작업의 속도를 증가시키기 위해',
            '메모리 사용량을 줄이기 위해',
            '객체의 프로토타입 체인을 단순화하기 위해',
          ],
          correctAnswer: 0,
          explanation:
            '최신 JavaScript 엔진은 이벤트 루프를 최적화하여 비동기 작업을 효율적으로 처리할 수 있도록 합니다.',
        },
      ],
    },
    {
      title: '런타임의 핵심 구성 요소',
      description:
        'JavaScript 런타임의 주요 구성 요소인 스택, 힙, 큐에 대한 질문',
      questions: [
        {
          id: 4,
          question: 'JavaScript 런타임의 스택(Stack)은 무엇을 관리하나요?',
          options: [
            '함수 호출과 실행 컨텍스트',
            '객체와 배열 같은 동적 메모리',
            '비동기 작업의 메시지',
            '프로토타입 체인',
          ],
          correctAnswer: 0,
          explanation:
            '스택은 함수 호출과 실행 컨텍스트를 관리하여 코드의 실행 순서를 추적합니다.',
        },
        {
          id: 5,
          question: '힙(Heap)은 JavaScript 런타임에서 어떤 용도로 사용되나요?',
          options: [
            '동적 메모리 할당을 위한 영역',
            '함수 호출을 위한 영역',
            '비동기 작업을 위한 메시지 큐',
            '프로토타입 체인을 저장하는 영역',
          ],
          correctAnswer: 0,
          explanation:
            '힙은 객체와 배열 같은 동적 데이터를 저장하기 위한 큰 메모리 영역입니다.',
        },
        {
          id: 6,
          question:
            '메시지 큐(Message Queue)는 이벤트 루프와 어떤 관계가 있나요?',
          options: [
            '이벤트 루프는 큐에서 메시지를 가져와 처리',
            '메시지 큐는 스택 위에 쌓인다',
            '큐는 힙과 동일한 역할을 한다',
            '이벤트 루프는 스택에서 메시지를 처리',
          ],
          correctAnswer: 0,
          explanation:
            '이벤트 루프는 메시지 큐에서 가장 오래된 메시지를 가져와 스택에서 처리합니다.',
        },
      ],
    },
    {
      title: '이벤트 루프의 동작 방식',
      description: '이벤트 루프가 메시지를 어떻게 처리하는지에 대한 질문',
      questions: [
        {
          id: 7,
          question: '이벤트 루프의 기본 동작 순서는 무엇인가요?',
          options: [
            '큐에서 메시지를 가져와 스택에서 처리',
            '스택에서 메시지를 가져와 큐에 저장',
            '힙에서 데이터를 가져와 스택에 저장',
            '스택에서 데이터를 가져와 힙에 저장',
          ],
          correctAnswer: 0,
          explanation:
            '이벤트 루프는 큐에서 메시지를 가져와 스택에서 처리하는 순서로 동작합니다.',
        },
        {
          id: 8,
          question:
            '다음 중 이벤트 루프가 메시지를 처리하는 과정을 올바르게 설명한 것은 무엇인가요?',
          options: [
            '큐에서 메시지를 가져와 스택에서 실행',
            '스택에서 메시지를 가져와 큐에 추가',
            '힙에서 메시지를 가져와 스택에 추가',
            '큐에서 메시지를 가져와 힙에서 실행',
          ],
          correctAnswer: 0,
          explanation:
            '이벤트 루프는 큐에서 메시지를 가져와 스택에서 실행하여 비동기 작업을 처리합니다.',
        },
        {
          id: 9,
          question:
            '다음 코드에서 \'콜백 1\'과 \'콜백 2\'의 실행 순서는 어떻게 되나요?\n```javascript\n(() => {\n  console.log("시작");\n\n  setTimeout(() => {\n    console.log("콜백 1");\n  }, 0);\n\n  console.log("중간");\n\n  setTimeout(() => {\n    console.log("콜백 2");\n  }, 0);\n\n  console.log("끝");\n})();\n```',
          options: [
            '"시작", "일반 메시지", "종료", "콜백 1", "콜백 2"',
            '"시작", "콜백 1", "중간", "끝", "콜백 2"',
            '"시작", "중간", "끝", "콜백 1", "콜백 2"',
            '"콜백 1", "시작", "중간", "끝", "콜백 2"',
          ],
          correctAnswer: 2,
          explanation:
            'setTimeout의 콜백은 큐에 추가되므로 먼저 동기 코드가 모두 실행된 후에 콜백들이 실행됩니다.',
        },
      ],
    },
    {
      title: '실행 완료 보장 (Run-to-completion)',
      description: 'Run-to-completion의 개념과 장단점에 대한 질문',
      questions: [
        {
          id: 10,
          question: 'Run-to-completion이란 무엇인가요?',
          options: [
            '한 메시지의 처리가 다른 메시지에 영향을 미치지 않고 완전히 실행되는 것',
            '비동기 작업이 동시에 실행되는 것',
            '함수가 반복적으로 호출되는 것',
            '객체의 프로토타입 체인이 무한히 이어지는 것',
          ],
          correctAnswer: 0,
          explanation:
            'Run-to-completion은 한 메시지의 처리가 다른 메시지에 영향을 미치지 않고 완전히 실행되는 것을 의미합니다.',
        },
        {
          id: 11,
          question: 'Run-to-completion의 장점은 무엇인가요?',
          options: [
            '코드의 실행 순서를 예측하기 쉽고 데이터 조작이 안전함',
            '함수 실행 속도가 빨라짐',
            '메모리 사용량이 감소함',
            '비동기 작업의 처리 속도가 증가함',
          ],
          correctAnswer: 0,
          explanation:
            'Run-to-completion은 코드의 실행 순서를 예측하기 쉽고 데이터 조작이 안전하게 이루어집니다.',
        },
        {
          id: 12,
          question: 'Run-to-completion의 단점은 무엇인가요?',
          options: [
            '메시지 처리가 너무 오래 걸리면 사용자 상호작용이 차단될 수 있음',
            '함수 호출이 복잡해짐',
            '프로토타입 체인이 길어짐',
            '메모리 누수가 발생할 수 있음',
          ],
          correctAnswer: 0,
          explanation:
            'Run-to-completion의 단점은 메시지 처리가 너무 오래 걸리면 사용자 상호작용이 차단될 수 있다는 것입니다.',
        },
      ],
    },
    {
      title: '메시지 추가',
      description:
        '메시지가 큐에 추가되는 방식과 setTimeout의 동작 방식에 대한 질문',
      questions: [
        {
          id: 13,
          question:
            '웹 브라우저에서 메시지가 큐에 추가되는 주요 상황은 언제인가요?',
          options: [
            '이벤트가 발생하고 해당 이벤트에 리스너가 연결되어 있을 때',
            '함수가 호출될 때',
            '프로토타입 체인이 변경될 때',
            '메모리가 할당될 때',
          ],
          correctAnswer: 0,
          explanation:
            '웹 브라우저에서 메시지는 주로 이벤트가 발생하고 해당 이벤트에 리스너가 연결되어 있을 때 큐에 추가됩니다.',
        },
        {
          id: 14,
          question: 'setTimeout의 시간값은 무엇을 의미하나요?',
          options: [
            '메시지가 큐에 추가되는 최소 지연 시간',
            '함수가 실행되는 정확한 시간',
            '메시지가 우선순위 큐에 추가되는 시간',
            '함수의 실행 시간이 얼마나 걸리는지',
          ],
          correctAnswer: 0,
          explanation:
            'setTimeout의 시간값은 메시지가 큐에 추가되는 최소 지연 시간을 나타냅니다.',
        },
        {
          id: 15,
          question:
            "다음 코드에서 '콜백 1'과 '콜백 2'는 언제 실행되나요?\n```javascript\nconst seconds = new Date().getTime() / 1000;\n\nsetTimeout(() => {\n  console.log(`${new Date().getTime() / 1000 - seconds}초 후 실행`);\n}, 500);\n\nwhile (true) {\n  if (new Date().getTime() / 1000 - seconds >= 2) {\n    console.log(\"2초 동안 루프 실행\");\n    break;\n  }\n}\n```",
          options: [
            "2초 후에 '콜백 1'이 실행됨",
            "0.5초 후에 '콜백 1'이 실행됨",
            "while 루프가 종료된 후 즉시 '콜백 1'이 실행됨",
            "'콜백 1'은 실행되지 않음",
          ],
          correctAnswer: 0,
          explanation:
            'setTimeout의 콜백은 500ms 후에 큐에 추가되지만, while 루프가 2초 동안 실행되어 스택이 바쁘기 때문에 실제 실행은 2초 후에 이루어집니다.',
        },
      ],
    },
    {
      title: '제로 딜레이의 이해',
      description: 'setTimeout의 0ms 지연과 실제 실행 시점에 대한 질문',
      questions: [
        {
          id: 16,
          question:
            'setTimeout을 0ms 지연으로 호출하면 콜백이 언제 실행되나요?',
          options: [
            '큐에서 대기 중인 작업이 모두 완료된 후',
            '즉시 실행됨',
            '함수가 호출된 시점에서 바로 실행됨',
            '함수가 실행되는 동안 실행됨',
          ],
          correctAnswer: 0,
          explanation:
            'setTimeout의 시간값이 0ms라도 콜백은 큐에 추가되어 현재 스택이 비워진 후에 실행됩니다.',
        },
        {
          id: 17,
          question:
            '다음 코드의 출력 순서는 어떻게 되나요?\n```javascript\n(() => {\n  console.log("시작");\n\n  setTimeout(() => {\n    console.log("콜백 1: 콜백의 메시지");\n  }); // 기본값 0\n\n  console.log("일반 메시지");\n\n  setTimeout(() => {\n    console.log("콜백 2: 콜백의 메시지");\n  }, 0);\n\n  console.log("종료");\n})();\n```',
          options: [
            '"시작", "일반 메시지", "종료", "콜백 1: 콜백의 메시지", "콜백 2: 콜백의 메시지"',
            '"시작", "종료", "일반 메시지", "콜백 1: 콜백의 메시지", "콜백 2: 콜백의 메시지"',
            '"시작", "중간", "끝", "콜백 1: 콜백의 메시지", "콜백 2: 콜백의 메시지"',
            '"콜백 1: 콜백의 메시지", "시작", "일반 메시지", "종료", "콜백 2: 콜백의 메시지"',
          ],
          correctAnswer: 0,
          explanation:
            'setTimeout의 콜백은 큐에 추가되므로 먼저 동기 코드가 모두 실행된 후에 콜백들이 실행됩니다.',
        },
        {
          id: 18,
          question:
            'setTimeout의 시간값이 0ms인 경우에도 실제 실행 시점은 왜 지연되나요?',
          options: [
            '스택이 비워져야 콜백을 실행할 수 있기 때문',
            '시간값이 정확하지 않기 때문',
            '브라우저가 지연을 강제하기 때문',
            '콜백이 우선순위 큐에 추가되기 때문',
          ],
          correctAnswer: 0,
          explanation:
            '스택이 비워져야 콜백을 실행할 수 있기 때문에 실제 실행 시점은 지연됩니다.',
        },
      ],
    },
    {
      title: '런타임 간 통신',
      description: '웹 워커나 cross-origin iframe 간의 통신 방식에 대한 질문',
      questions: [
        {
          id: 19,
          question:
            '웹 워커와 cross-origin iframe 간의 통신은 주로 어떤 메서드를 통해 이루어지나요?',
          options: [
            '`postMessage` 메서드를 통해',
            '`sendMessage` 메서드를 통해',
            '`communicate` 메서드를 통해',
            '`transferMessage` 메서드를 통해',
          ],
          correctAnswer: 0,
          explanation:
            '웹 워커와 cross-origin iframe은 `postMessage` 메서드를 통해 통신합니다.',
        },
        {
          id: 20,
          question: '런타임 간 통신에서 message 이벤트는 언제 발생하나요?',
          options: [
            '한 런타임이 message 이벤트를 수신하고 있을 때',
            '객체가 생성될 때',
            '함수가 호출될 때',
            '프로토타입 체인이 변경될 때',
          ],
          correctAnswer: 0,
          explanation:
            '메시지 이벤트는 한 런타임이 message 이벤트를 수신하고 있을 때 발생합니다.',
        },
        {
          id: 21,
          question:
            '웹 워커나 cross-origin iframe이 서로 통신할 수 있는 조건은 무엇인가요?',
          options: [
            '상대 런타임이 message 이벤트를 수신하고 있을 때',
            '상대 런타임이 동일한 프로토콜을 사용할 때',
            '상대 런타임이 동일한 도메인에 있을 때',
            '상대 런타임이 동일한 브라우저 탭에 있을 때',
          ],
          correctAnswer: 0,
          explanation:
            '상대 런타임이 message 이벤트를 수신하고 있을 때만 통신이 가능합니다.',
        },
      ],
    },
    {
      title: '논블로킹 특성',
      description: 'JavaScript의 논블로킹 특성과 그 장단점에 대한 질문',
      questions: [
        {
          id: 22,
          question:
            'JavaScript가 다른 언어들과 달리 절대 블로킹되지 않는 이유는 무엇인가요?',
          options: [
            '이벤트 루프와 비동기 처리를 통해',
            '멀티스레딩을 지원하기 때문',
            '프로토타입 체인이 단순하기 때문',
            '함수 호출이 빠르기 때문',
          ],
          correctAnswer: 0,
          explanation:
            '이벤트 루프와 비동기 처리를 통해 JavaScript는 절대 블로킹되지 않습니다.',
        },
        {
          id: 23,
          question: 'I/O 처리가 주로 어떤 방식을 통해 이루어지나요?',
          options: [
            '이벤트와 콜백을 통해',
            '동기식 함수 호출을 통해',
            '프로토타입 체인을 통해',
            '함수의 스코프를 통해',
          ],
          correctAnswer: 0,
          explanation:
            'I/O 처리는 주로 이벤트와 콜백을 통해 이루어지므로, JavaScript는 다른 작업을 동시에 처리할 수 있습니다.',
        },
        {
          id: 24,
          question: 'JavaScript의 논블로킹 특성이 가지는 장점은 무엇인가요?',
          options: [
            '동시에 여러 작업을 처리할 수 있어 응답성이 향상됨',
            '메모리 사용량이 감소함',
            '함수 호출이 더 빠르게 이루어짐',
            '프로토타입 체인이 단순해짐',
          ],
          correctAnswer: 0,
          explanation:
            '논블로킹 특성 덕분에 JavaScript는 동시에 여러 작업을 처리할 수 있어 응답성이 향상됩니다.',
        },
        {
          id: 25,
          question: 'JavaScript의 논블로킹 특성이 가지는 단점은 무엇인가요?',
          options: [
            '메시지 처리가 너무 오래 걸리면 사용자 상호작용이 차단될 수 있음',
            '메모리 누수가 발생할 수 있음',
            '프로토타입 체인이 복잡해질 수 있음',
            '함수의 실행 속도가 느려질 수 있음',
          ],
          correctAnswer: 0,
          explanation:
            '메시지 처리가 너무 오래 걸리면 사용자 상호작용이 차단될 수 있는 단점이 있습니다.',
        },
      ],
    },
    {
      title: 'Microtasks와 Macrotasks',
      description: '마이크로태스크와 매크로태스크의 차이점과 역할에 대한 질문',
      questions: [
        {
          id: 26,
          question:
            '마이크로태스크(Microtasks)와 매크로태스크(Macrotasks)의 주요 차이점은 무엇인가요?',
          options: [
            '마이크로태스크는 다음 렌더링 단계 전에 실행되고, 매크로태스크는 그 후에 실행됩니다.',
            '매크로태스크는 마이크로태스크보다 먼저 실행됩니다.',
            '마이크로태스크는 항상 동기적이고, 매크로태스크는 비동기적입니다.',
            '차이가 없으며 동일하게 취급됩니다.',
          ],
          correctAnswer: 0,
          explanation:
            '마이크로태스크는 다음 렌더링 단계 전에 실행되고, 매크로태스크는 그 후에 실행됩니다.',
        },
        {
          id: 27,
          question: '다음 중 마이크로태스크에 해당하는 것은 무엇인가요?',
          options: [
            'Promise.then() 콜백',
            'setTimeout() 콜백',
            'setInterval() 콜백',
            'I/O 이벤트',
          ],
          correctAnswer: 0,
          explanation:
            'Promise.then() 콜백은 마이크로태스크에 해당하며, 매크로태스크보다 먼저 실행됩니다.',
        },
        {
          id: 28,
          question: '이벤트 루프의 어떤 단계에서 마이크로태스크가 실행되나요?',
          options: [
            '각 매크로태스크 후',
            '각 매크로태스크 전에',
            '초기 스크립트 실행 중',
            '모든 매크로태스크가 처리된 후',
          ],
          correctAnswer: 1,
          explanation:
            '마이크로태스크는 각 매크로태스크가 완료된 후, 다음 매크로태스크가 시작되기 전에 실행됩니다.',
        },
      ],
    },
    {
      title: 'Promises와 Async/Await',
      description: 'JavaScript의 Promises와 async/await 구문에 대한 심층 이해',
      questions: [
        {
          id: 29,
          question: 'async 키워드가 함수 선언 전에 붙으면 어떤 효과가 있나요?',
          options: [
            '함수가 Promise를 반환하게 만듭니다.',
            '함수를 비동기적으로 실행합니다.',
            '함수 내부에서 await 키워드 사용을 허용합니다.',
            'a와 c 모두 해당됩니다.',
          ],
          correctAnswer: 3,
          explanation:
            'async 키워드는 함수를 Promise를 반환하게 만들고, 함수 내부에서 await 키워드 사용을 허용합니다.',
        },
        {
          id: 30,
          question:
            "다음 코드의 출력은 무엇인가요?\n```javascript\nconsole.log('Start');\nsetTimeout(() => {\n  console.log('Timeout');\n}, 0);\nPromise.resolve().then(() => {\n  console.log('Promise');\n});\nconsole.log('End');\n```",
          options: [
            '"Start", "End", "Promise", "Timeout"',
            '"Start", "Promise", "End", "Timeout"',
            '"Start", "End", "Timeout", "Promise"',
            '"Start", "Promise", "Timeout", "End"',
          ],
          correctAnswer: 0,
          explanation:
            "동기 코드가 먼저 실행되어 'Start', 'End'가 출력되고, 그 다음 마이크로태스크인 'Promise'가 실행되며 마지막으로 매크로태스크인 'Timeout'이 실행됩니다.",
        },
        {
          id: 31,
          question:
            "다음 코드의 출력은 무엇인가요?\n```javascript\nasync function foo() {\n  console.log('foo start');\n  await bar();\n  console.log('foo end');\n}\n\nasync function bar() {\n  console.log('bar');\n}\n\nfoo();\nconsole.log('script end');\n```",
          options: [
            '"foo start", "bar", "foo end", "script end"',
            '"foo start", "foo end", "bar", "script end"',
            '"foo start", "bar", "script end", "foo end"',
            '"foo start", "script end", "bar", "foo end"',
          ],
          correctAnswer: 3,
          explanation:
            "foo()가 'foo start'를 로그하고 bar()를 await하면서 비동기적으로 'bar'를 로그합니다. 그 후 'script end'가 로그되고, 마지막으로 'foo end'가 로그됩니다.",
        },
      ],
    },
    {
      title: '이벤트 루프 실습',
      description: '이벤트 루프에 대한 지식을 실제 상황에 적용하는 질문',
      questions: [
        {
          id: 32,
          question:
            'Node.js에서 setImmediate와 process.nextTick의 이벤트 루프 처리 순서는 어떻게 되나요?',
          options: [
            'process.nextTick 콜백이 모든 I/O 이벤트보다 먼저 실행됩니다.',
            'setImmediate 콜백이 process.nextTick 콜백보다 먼저 실행됩니다.',
            '두 콜백은 동일한 단계에서 실행됩니다.',
            'setImmediate는 이벤트 루프의 일부가 아닙니다.',
          ],
          correctAnswer: 0,
          explanation:
            'Node.js에서는 process.nextTick 콜백이 모든 I/O 이벤트보다 먼저 실행되고, setImmediate 콜백은 I/O 이벤트 처리 후 실행됩니다.',
        },
        {
          id: 33,
          question:
            '브라우저 환경에서 마이크로태스크는 렌더링과 어떤 관계가 있나요?',
          options: [
            '마이크로태스크는 렌더링 전에 실행됩니다.',
            '마이크로태스크는 렌더링 후에 실행됩니다.',
            '마이크로태스크는 렌더링과 관련이 없습니다.',
            '마이크로태스크는 렌더링 중에 실행됩니다.',
          ],
          correctAnswer: 0,
          explanation:
            '브라우저 환경에서 마이크로태스크는 현재 매크로태스크가 완료된 후, 다음 렌더링 단계 전에 실행됩니다.',
        },
        {
          id: 34,
          question:
            '다음 중 이벤트 루프에서 블로킹 동작을 유발할 수 있는 것은 무엇인가요?',
          options: [
            '긴 시간 동안 실행되는 동기 코드',
            'setTimeout의 긴 지연 시간',
            'Promises',
            'Async 함수',
          ],
          correctAnswer: 0,
          explanation:
            '긴 시간 동안 실행되는 동기 코드는 이벤트 루프를 블로킹하여 다른 작업의 처리를 방해할 수 있습니다.',
        },
      ],
    },
    {
      title: 'Promises와 Async/Await',
      description: 'Promises와 async/await에 대한 고급 질문',
      questions: [
        {
          id: 35,
          question:
            'async 함수 내부에서 try...catch 블록 없이 에러가 발생하면 어떻게 되나요?',
          options: [
            'Promise가 거부되고 에러가 전달됩니다.',
            '에러가 조용히 무시됩니다.',
            '프로그램이 충돌합니다.',
            '에러가 콘솔에 로그됩니다.',
          ],
          correctAnswer: 0,
          explanation:
            'async 함수 내부에서 에러가 발생하면 반환된 Promise가 해당 에러로 거부됩니다.',
        },
        {
          id: 36,
          question:
            'async/await를 사용하여 여러 비동기 작업을 병렬로 처리하려면 어떻게 해야 하나요?',
          options: [
            'Promise.all과 await를 함께 사용',
            '여러 await 문을 순차적으로 사용',
            'setTimeout을 async 함수와 함께 사용',
            'for 루프 안에서 await를 사용',
          ],
          correctAnswer: 0,
          explanation:
            'Promise.all과 await를 함께 사용하면 여러 비동기 작업을 병렬로 처리할 수 있어 성능을 향상시킬 수 있습니다.',
        },
        {
          id: 37,
          question:
            "다음 코드의 출력은 무엇인가요?\n```javascript\nasync function test() {\n  console.log('A');\n  await null;\n  console.log('B');\n}\n\ntest();\nconsole.log('C');\n```",
          options: [
            '"A", "B", "C"',
            '"A", "C", "B"',
            '"C", "A", "B"',
            '"A", "B"과 "C"는 순서에 상관없이 출력됨',
          ],
          correctAnswer: 1,
          explanation:
            "test() 함수가 'A'를 로그한 후 await null로 인해 비동기적으로 'B'가 로그됩니다. 그 사이에 'C'가 먼저 로그됩니다.",
        },
      ],
    },
  ],
};
