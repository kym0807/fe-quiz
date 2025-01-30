import { Quiz } from '@/types/quiz.type';

export const quiz: Quiz = {
  title: 'Promise 사용하기',
  description: '자바스크립트의 Promise를 이해하고 활용하는 방법을 알아봅니다',
  categories: [
    {
      title: 'Promise 기본 개념',
      description: 'Promise의 기본 개념과 장점에 대한 질문',
      questions: [
        {
          id: 1,
          question: 'Promise의 기본 개념은 무엇인가요?',
          options: [
            '동기 작업을 수행하는 객체',
            '비동기 작업의 최종 완료와 그 결과값을 나타내는 객체',
            '동기 작업의 오류를 처리하는 객체',
            '비동기 작업의 실행을 취소하는 객체',
          ],
          correctAnswer: 1,
          explanation:
            'Promise는 비동기 작업의 최종 완료(또는 실패)와 그 결과값을 나타내는 객체입니다.',
        },
        {
          id: 2,
          question: 'Promise를 사용하면 어떤 장점이 있나요?',
          options: [
            '비동기 작업의 결과를 받아 처리하는 방법을 표준화할 수 있다.',
            '비동기 작업을 동기적으로 처리할 수 있다.',
            '모든 브라우저에서 지원되지 않는다.',
            '코드의 실행 속도를 크게 향상시킨다.',
          ],
          correctAnswer: 0,
          explanation:
            'Promise는 비동기 작업의 결과를 받아서 처리하는 방법을 표준화하고, 연속된 비동기 작업 처리 및 에러 처리를 용이하게 합니다.',
        },
        {
          id: 3,
          question: '다음 중 fetch API가 반환하는 것은 무엇인가요?',
          options: [
            'JSON 객체',
            'XMLHttpRequest 객체',
            'Promise 객체',
            'Async 함수',
          ],
          correctAnswer: 2,
          explanation:
            'fetch() 함수는 비동기적으로 요청을 보내며, 즉시 Promise 객체를 반환합니다.',
        },
        {
          id: 4,
          question: 'Promise 체이닝의 주요 장점은 무엇인가요?',
          options: [
            '코드의 가독성을 낮춘다.',
            '콜백 지옥을 피하고 코드의 가독성을 향상시킨다.',
            '에러 처리를 분산시킨다.',
            '비동기 작업을 병렬로 처리할 수 있다.',
          ],
          correctAnswer: 1,
          explanation:
            'Promise 체이닝은 then()이 새로운 Promise를 반환하므로 체인 형태로 연결 가능하며, 콜백 지옥을 피하고 코드의 가독성을 향상시킵니다.',
        },
        {
          id: 5,
          question: 'Promise의 세 가지 상태는 무엇인가요?',
          options: [
            '대기, 실행, 완료',
            '대기, 이행, 거부',
            '시작, 처리, 종료',
            '열림, 대기, 닫힘',
          ],
          correctAnswer: 1,
          explanation:
            'Promise는 대기(pending), 이행(fulfilled), 거부(rejected)의 세 가지 상태를 가집니다.',
        },
        {
          id: 6,
          question: 'Promise.all()의 동작 방식은 무엇인가요?',
          options: [
            '하나의 Promise만 성공하면 전체가 성공한다.',
            '모든 Promise가 성공해야 전체가 성공한다.',
            '가장 먼저 완료된 Promise의 결과만 반환한다.',
            '모든 Promise가 실패해야 전체가 실패한다.',
          ],
          correctAnswer: 1,
          explanation:
            'Promise.all()은 모든 Promise가 성공해야 전체가 성공하며, 하나라도 실패하면 전체가 실패합니다.',
        },
        {
          id: 7,
          question: 'async/await를 사용할 때 주의해야 할 점은 무엇인가요?',
          options: [
            'async 함수는 항상 값을 반환하지 않는다.',
            'await는 어디서나 사용할 수 있다.',
            'async 함수는 항상 Promise를 반환한다.',
            'try-catch를 사용할 수 없다.',
          ],
          correctAnswer: 2,
          explanation:
            'async 함수는 항상 Promise를 반환하며, await는 async 함수 내부에서만 사용할 수 있습니다.',
        },
      ],
    },
    {
      title: 'Promise 응용',
      description: 'Promise 체이닝, 여러 Promise 조합 등에 대한 질문',
      questions: [
        {
          id: 8,
          question: '다음 중 Promise.any()의 특징은 무엇인가요?',
          options: [
            '모든 Promise가 성공해야 성공한다.',
            '하나의 Promise라도 성공하면 성공한다.',
            '모든 Promise가 실패해야 실패한다.',
            '두 번째 Promise의 결과를 반환한다.',
          ],
          correctAnswer: 1,
          explanation:
            'Promise.any()는 하나의 Promise라도 성공하면 전체가 성공하며, 모든 Promise가 실패해야 전체가 실패합니다.',
        },
        {
          id: 9,
          question:
            '비동기 작업을 순차적으로 처리하기 위해 사용하는 방법은 무엇인가요?',
          options: [
            'Promise.all()',
            'Promise.any()',
            'Promise.race()',
            'Promise 체이닝',
          ],
          correctAnswer: 3,
          explanation:
            'Promise 체이닝을 사용하면 여러 비동기 작업을 순차적으로 처리할 수 있습니다.',
        },
        {
          id: 10,
          question:
            "다음 중 Promise의 상태가 'fulfilled'인 경우를 설명한 것은 무엇인가요?",
          options: [
            '비동기 작업이 아직 완료되지 않은 상태',
            '비동기 작업이 성공적으로 완료된 상태',
            '비동기 작업이 실패한 상태',
            '비동기 작업이 취소된 상태',
          ],
          correctAnswer: 1,
          explanation:
            'Promise의 상태이행(fulfilled)은 비동기 작업이 성공적으로 완료된 상태를 의미합니다.',
        },
        {
          id: 11,
          question:
            'Promise를 이용한 에러 처리는 주로 어떤 메서드를 사용하나요?',
          options: ['.then()', '.catch()', '.finally()', '.resolve()'],
          correctAnswer: 1,
          explanation:
            '.catch() 메서드는 Promise에서 발생한 에러를 처리하는 데 사용됩니다.',
        },
        {
          id: 12,
          question:
            'async/await를 사용하면 Promise 체이닝보다 어떤 이점이 있나요?',
          options: [
            '코드가 더 복잡해진다.',
            '비동기 코드를 동기 코드처럼 작성할 수 있어 가독성이 향상된다.',
            '에러 처리가 어려워진다.',
            '모든 비동기 작업을 병렬로 처리할 수 있다.',
          ],
          correctAnswer: 1,
          explanation:
            'async/await를 사용하면 비동기 코드를 동기 코드처럼 작성할 수 있어 가독성이 향상됩니다.',
        },
        {
          id: 13,
          question:
            '브라우저 호환성 측면에서 Promise가 지원되지 않는 환경은 어디인가요?',
          options: [
            '모든 최신 브라우저',
            'IE11 이하와 Opera Mini',
            '모바일 브라우저',
            '모든 데스크톱 브라우저',
          ],
          correctAnswer: 1,
          explanation:
            'Promise는 모든 최신 브라우저에서 지원되지만, IE11 이하와 Opera Mini에서는 지원되지 않습니다.',
        },
        {
          id: 14,
          question: "Promise의 'pending' 상태는 언제인가요?",
          options: [
            '비동기 처리가 아직 완료되지 않은 상태',
            '비동기 처리가 성공적으로 완료된 상태',
            '비동기 처리가 실패한 상태',
            '비동기 처리가 취소된 상태',
          ],
          correctAnswer: 0,
          explanation:
            "'pending' 상태는 비동기 처리가 아직 완료되지 않은 상태를 의미합니다.",
        },
        {
          id: 15,
          question:
            '다음 코드에서 \'요청 시작...\'이 먼저 출력되는 이유는 무엇인가요?\n\n```js\nconst fetchPromise = fetch("https://api.example.com/data.json");\nconsole.log(fetchPromise);\nfetchPromise.then((response) => {\n  console.log(`응답 상태: ${response.status}`);\n});\nconsole.log("요청 시작...");\n```',
          options: [
            'fetch() 함수가 동기적으로 작동하기 때문이다.',
            'Promise가 비동기적으로 작동하기 때문이다.',
            'console.log()가 비동기적으로 작동하기 때문이다.',
            '코드에 오류가 있기 때문이다.',
          ],
          correctAnswer: 1,
          explanation:
            'fetch()는 비동기적으로 작동하여 즉시 Promise를 반환하고, 그 다음 줄의 console.log("요청 시작...")이 먼저 실행됩니다.',
        },
      ],
    },
    {
      title: 'async/await 및 호환성',
      description: 'async/await 사용법과 브라우저 호환성에 대한 질문',
      questions: [
        {
          id: 16,
          question: 'Promise.all()과 Promise.any()의 주요 차이점은 무엇인가요?',
          options: [
            'Promise.all()은 하나의 성공만 필요하고, Promise.any()는 모든 성공이 필요하다.',
            'Promise.all()은 모든 Promise가 성공해야 하고, Promise.any()는 하나의 성공으로 충분하다.',
            'Promise.all()은 동기적으로 작동하고, Promise.any()는 비동기적으로 작동한다.',
            '두 메서드 모두 동일하게 동작한다.',
          ],
          correctAnswer: 1,
          explanation:
            'Promise.all()은 모든 Promise가 성공해야 전체가 성공하고, Promise.any()는 하나의 Promise라도 성공하면 전체가 성공합니다.',
        },
        {
          id: 17,
          question: 'async 함수는 무엇을 반환하나요?',
          options: ['값', '함수', 'Promise 객체', 'undefined'],
          correctAnswer: 2,
          explanation: 'async 함수는 항상 Promise 객체를 반환합니다.',
        },
        {
          id: 18,
          question: "Promise의 'rejected' 상태는 언제 발생하나요?",
          options: [
            '비동기 처리가 아직 완료되지 않은 상태',
            '비동기 처리가 성공적으로 완료된 상태',
            '비동기 처리가 실패한 상태',
            '비동기 처리가 취소된 상태',
          ],
          correctAnswer: 2,
          explanation:
            "'rejected' 상태는 비동기 처리가 실패한 상태를 의미합니다.",
        },
        {
          id: 19,
          question: '다음 중 Promise를 생성하는 올바른 방법은 무엇인가요?',
          options: [
            'const promise = new Promise();',
            'const promise = Promise.create();',
            'const promise = new Promise((resolve, reject) => { /* 작업 */ });',
            'const promise = Promise();',
          ],
          correctAnswer: 2,
          explanation:
            'Promise를 생성할 때는 new Promise() 생성자에 실행할 작업을 포함한 함수를 전달해야 합니다.',
        },
        {
          id: 20,
          question:
            '다음 중 비동기 작업을 병렬로 처리할 때 권장되는 방법은 무엇인가요?',
          options: [
            'Promise 체이닝',
            'async/await 단독 사용',
            'Promise.all() 사용',
            'for 루프 내에서 await 사용',
          ],
          correctAnswer: 2,
          explanation:
            '비동기 작업을 병렬로 처리할 때는 Promise.all()을 사용하는 것이 권장됩니다.',
        },
      ],
    },
  ],
};
