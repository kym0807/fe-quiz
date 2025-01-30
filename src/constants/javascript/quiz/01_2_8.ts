import { Quiz } from '@/types/quiz.type';

export const quiz: Quiz = {
  title: 'Promise 기반 API 구현하기',
  description: 'Promise를 반환하는 API를 직접 구현하는 방법을 알아봅니다',
  categories: [
    {
      title: 'Promise 기반 API 만들기',
      description:
        '비동기 작업을 Promise로 감싸서 새로운 API를 만드는 방법에 대한 질문',
      questions: [
        {
          id: 1,
          question:
            '기존의 setTimeout 함수를 Promise 기반으로 개선한 alarm 함수의 역할은 무엇인가요?',
          options: [
            '동기적으로 메시지를 출력한다.',
            '비동기 작업의 완료를 Promise로 반환하여 후속 처리를 가능하게 한다.',
            'setTimeout의 실행 시간을 단축시킨다.',
            '알람 시간을 자동으로 조정한다.',
          ],
          correctAnswer: 1,
          explanation:
            'alarm 함수는 비동기 작업을 Promise로 감싸서, 작업 완료 시 resolve 또는 reject를 통해 후속 처리를 가능하게 합니다.',
        },
        {
          id: 2,
          question: 'Promise 생성자의 executor 함수는 어떤 매개변수를 받나요?',
          options: [
            'resolve와 reject',
            'then과 catch',
            'fulfill과 reject',
            'success와 failure',
          ],
          correctAnswer: 0,
          explanation:
            'Promise 생성자의 executor 함수는 resolve와 reject라는 두 매개변수를 받습니다.',
        },
        {
          id: 3,
          question: 'alarm 함수에서 delay가 음수일 때 어떤 동작이 발생하나요?',
          options: [
            '알람이 즉시 설정된다.',
            'resolve가 호출된다.',
            'reject가 호출되어 에러가 발생한다.',
            '알람이 취소된다.',
          ],
          correctAnswer: 2,
          explanation:
            'delay가 음수일 경우 reject가 호출되어 에러가 발생합니다.',
        },
        {
          id: 4,
          question:
            'executor 함수 내에서 resolve와 reject는 몇 번만 호출되어야 하나요?',
          options: [
            '무제한으로 호출할 수 있다.',
            'resolve만 한 번 호출할 수 있다.',
            'reject만 한 번 호출할 수 있다.',
            'resolve와 reject는 각각 한 번만 호출해야 한다.',
          ],
          correctAnswer: 3,
          explanation:
            'executor 함수 내에서는 resolve와 reject가 각각 한 번만 호출되어야 합니다.',
        },
        {
          id: 5,
          question:
            'Promise 기반으로 구현한 alarm 함수를 then/catch로 사용하는 예제에서, 성공 시 어떤 메시지가 출력되나요?',
          options: [
            '알람이 설정되었습니다.',
            '에러가 발생했습니다.',
            '김철수님, 일어나세요!',
            '알람 시간이 지났습니다.',
          ],
          correctAnswer: 2,
          explanation:
            'alarm 함수가 성공적으로 실행되면 `${person}님, 일어나세요!` 메시지가 출력됩니다.',
        },
        {
          id: 6,
          question:
            'async/await를 사용하여 alarm 함수를 호출할 때, 에러를 처리하기 위해 주로 사용하는 구조는 무엇인가요?',
          options: [
            'if-else 문',
            'try-catch 블록',
            'switch-case 문',
            'for 루프',
          ],
          correctAnswer: 1,
          explanation:
            'async/await를 사용할 때 에러를 처리하기 위해 try-catch 블록을 사용합니다.',
        },
        {
          id: 7,
          question:
            '실제 구현 예시에서, 사용자가 버튼을 클릭하면 어떤 함수가 실행되나요?',
          options: ['setBasicAlarm', 'alarm', 'wakeUpUser', 'addEventListener'],
          correctAnswer: 2,
          explanation: '버튼을 클릭하면 async 함수인 wakeUpUser가 실행됩니다.',
        },
        {
          id: 8,
          question:
            '실제 구현 예시에서, alarm 함수가 실패할 경우 출력되는 메시지는 무엇인가요?',
          options: [
            '알람이 설정되었습니다.',
            '알람 시간이 지났습니다.',
            '알람 설정 실패: [에러 메시지]',
            '김철수님, 일어나세요!',
          ],
          correctAnswer: 2,
          explanation:
            'alarm 함수가 실패하면 `알람 설정 실패: [에러 메시지]`가 출력됩니다.',
        },
        {
          id: 9,
          question:
            'Promise 기반 API를 구현할 때, resolve와 reject 이후에 코드가 계속 실행될 수 있는 이유는 무엇인가요?',
          options: [
            'JavaScript는 자동으로 함수를 종료하지 않기 때문이다.',
            'resolve와 reject가 비동기적으로 작동하기 때문이다.',
            'executor 함수 내에서 return을 사용하지 않기 때문이다.',
            'resolve와 reject가 Promise를 즉시 종료시키지 않기 때문이다.',
          ],
          correctAnswer: 3,
          explanation:
            'resolve와 reject는 Promise를 완료시키지만, executor 함수 내에서 명시적으로 함수를 종료하지 않으면 이후 코드가 계속 실행됩니다.',
        },
        {
          id: 10,
          question:
            'Promise 기반 API를 DOM과 연동할 때 주의해야 할 점은 무엇인가요?',
          options: [
            '비동기 작업을 동기적으로 처리해야 한다.',
            'DOM 요소를 직접 수정하지 않는다.',
            '에러 발생 시 사용자에게 적절히 알린다.',
            'Promise를 사용하지 않는다.',
          ],
          correctAnswer: 2,
          explanation:
            '비동기 작업 중 에러가 발생할 경우, 사용자에게 적절히 알리는 것이 중요합니다.',
        },
      ],
    },
  ],
};
