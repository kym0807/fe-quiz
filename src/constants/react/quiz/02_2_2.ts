import { Quiz } from '@/types/quiz.type';

export const quiz: Quiz = {
  title: 'React flushSync 완벽 이해하기',
  description: 'React의 flushSync의 개념부터 고급 활용까지 테스트해보세요',
  categories: [
    {
      title: '기본 개념',
      description: 'flushSync의 기본적인 개념과 특징을 테스트합니다',
      questions: [
        {
          id: 1,
          question: 'flushSync의 주요 목적은 무엇인가요?',
          options: [
            'React의 상태 업데이트를 지연시키는 것',
            'React의 상태 업데이트를 즉시 동기적으로 처리하도록 강제하는 것',
            'React의 렌더링을 최적화하는 것',
            'React의 이벤트 핸들링을 개선하는 것',
          ],
          correctAnswer: 1,
          explanation:
            'flushSync는 React의 상태 업데이트를 즉시 동기적으로 처리하도록 강제하는 함수입니다.',
        },
        {
          id: 2,
          question: 'flushSync 사용 시 성능에 미치는 영향은 무엇인가요?',
          options: [
            '성능이 향상됩니다',
            '성능에 영향을 미치지 않습니다',
            'React의 일괄 처리(batching) 최적화를 우회하여 성능이 저하될 수 있습니다',
            '메모리 사용량만 증가합니다',
          ],
          correctAnswer: 2,
          explanation:
            'flushSync는 React의 일괄 처리 최적화를 우회하므로 성능에 부정적인 영향을 미칠 수 있습니다.',
        },
        {
          id: 3,
          question:
            "다음 코드에서 DOM이 업데이트되는 시점은 언제인가요?\n```tsx\nfunction handleClick() {\n  flushSync(() => {\n    setCounter(c => c + 1);\n  });\n  console.log('로그 출력');\n}\n```",
          options: [
            'handleClick 함수가 완전히 종료된 후',
            'console.log 실행 후',
            'flushSync 콜백이 완료되고 console.log 실행 전',
            'setCounter가 호출되는 즉시',
          ],
          correctAnswer: 2,
          explanation:
            'flushSync 콜백 내부의 업데이트는 콜백이 완료되는 즉시 DOM에 반영되므로, console.log 실행 전에 DOM이 업데이트됩니다.',
        },
        {
          id: 4,
          question:
            'React의 Suspense와 함께 flushSync를 사용할 때 발생할 수 있는 현상은?',
          options: [
            'Suspense가 작동하지 않습니다',
            'Suspense 경계가 예기치 않게 폴백 상태를 표시할 수 있습니다',
            'Suspense가 항상 폴백을 건너뜁니다',
            'Suspense의 성능이 향상됩니다',
          ],
          correctAnswer: 1,
          explanation:
            'flushSync를 사용할 때 Suspense 경계가 예기치 않게 폴백 상태를 표시할 수 있으며, 이는 의도하지 않은 로딩 상태를 야기할 수 있습니다.',
        },
        {
          id: 5,
          question:
            'flushSync 콜백 내부에서 여러 상태 업데이트를 수행할 때의 동작은 어떻게 되나요?',
          options: [
            '마지막 업데이트만 적용됩니다',
            '첫 번째 업데이트만 적용됩니다',
            '모든 업데이트가 개별적으로 동기적으로 처리됩니다',
            '모든 업데이트가 하나의 동기적 업데이트로 일괄 처리됩니다',
          ],
          correctAnswer: 3,
          explanation:
            'flushSync 콜백 내부의 모든 상태 업데이트는 동기적으로 처리되며, React의 일반적인 일괄 처리가 적용되지 않습니다.',
        },
      ],
    },

    {
      title: '실전 활용',
      description: 'flushSync의 실제 사용 사례와 구현 방법을 테스트합니다',
      questions: [
        {
          id: 6,
          question:
            '인쇄 기능을 구현할 때 beforeprint 이벤트 핸들러에서 flushSync를 사용하는 주된 이유는 무엇인가요?',
          options: [
            '인쇄 속도를 향상시키기 위해',
            '인쇄 전에 상태 업데이트가 즉시 DOM에 반영되도록 보장하기 위해',
            '인쇄 품질을 개선하기 위해',
            '메모리 사용량을 최적화하기 위해',
          ],
          correctAnswer: 1,
          explanation:
            '인쇄 기능에서 flushSync를 사용하는 것은 인쇄가 시작되기 전에 모든 상태 업데이트가 DOM에 반영되도록 보장하기 위함입니다.',
        },
        {
          id: 7,
          question:
            '서드파티 라이브러리와 통합할 때 flushSync를 사용하는 것이 적절한 경우는 언제인가요?',
          options: [
            '모든 서드파티 라이브러리 통합 시',
            '라이브러리가 최신 DOM 상태에 의존적인 작업을 수행해야 할 때',
            '성능 최적화가 필요할 때',
            '서버 사이드 렌더링을 사용할 때',
          ],
          correctAnswer: 1,
          explanation:
            '서드파티 라이브러리가 업데이트된 DOM 상태에 직접적으로 의존하는 작업을 수행해야 할 때 flushSync를 사용하는 것이 적절합니다.',
        },
        {
          id: 8,
          question:
            'flushSync 사용의 대안으로 고려할 수 있는 가장 적절한 방법은 무엇인가요?',
          options: [
            'setTimeout 사용하기',
            'useLayoutEffect 사용하기',
            '상태 업데이트를 건너뛰기',
            '동기적 이벤트 핸들러 사용하기',
          ],
          correctAnswer: 1,
          explanation:
            'useLayoutEffect는 DOM 업데이트 직후 동기적으로 실행되므로, 많은 경우 flushSync의 적절한 대안이 될 수 있습니다.',
        },
        {
          id: 9,
          question:
            'Effect가 대기 중일 때 flushSync를 사용하면 어떤 일이 발생하나요?',
          options: [
            'Effect가 무시됩니다',
            'Effect가 다음 렌더링 시점까지 지연됩니다',
            '대기 중인 Effect가 즉시 실행됩니다',
            'Effect가 취소됩니다',
          ],
          correctAnswer: 2,
          explanation:
            'flushSync 사용 시 대기 중인 Effects가 즉시 실행될 수 있으며, 이는 예상치 못한 동작을 유발할 수 있습니다.',
        },
        {
          id: 10,
          question:
            '다음 코드의 실행 결과로 가장 적절한 것은 무엇인가요?\ntsx\nfunction handleUpdate() {\n  setCount(1);\n  flushSync(() => {\n    setFlag(true);\n  });\n  setCount(2);\n}\n',
          options: [
            '모든 업데이트가 한 번에 처리됩니다',
            'setFlag만 즉시 처리되고 나머지는 일괄 처리됩니다',
            '모든 업데이트가 개별적으로 처리됩니다',
            '마지막 setCount만 처리됩니다',
          ],
          correctAnswer: 1,
          explanation:
            'flushSync 내부의 setFlag는 즉시 처리되지만, 이전의 setCount(1)과 이후의 setCount(2)는 React의 일반적인 일괄 처리 규칙을 따릅니다.',
        },
      ],
    },

    {
      title: '고급 개념 및 주의사항',
      description: 'flushSync의 고급 활용과 주의사항을 테스트합니다',
      questions: [
        {
          id: 11,
          question:
            'React의 Concurrent Mode에서 flushSync를 사용할 때 발생할 수 있는 잠재적 문제는 무엇인가요?',
          options: [
            'Concurrent Mode가 완전히 비활성화됩니다',
            '렌더링 우선순위 조정이 무시되어 사용자 경험이 저하될 수 있습니다',
            '메모리 누수가 발생합니다',
            '서버 사이드 렌더링이 불가능해집니다',
          ],
          correctAnswer: 1,
          explanation:
            'Concurrent Mode에서 flushSync를 사용하면 렌더링 우선순위 조정 메커니즘이 무시되어, 사용자 경험에 부정적인 영향을 미칠 수 있습니다.',
        },
        {
          id: 12,
          question:
            'flushSync를 사용할 때 React DevTools에서 볼 수 있는 현상은 무엇인가요?',
          options: [
            '렌더링이 표시되지 않습니다',
            '여러 번의 개별적인 렌더링이 발생하는 것으로 표시됩니다',
            '렌더링 시간이 0ms로 표시됩니다',
            '프로파일러가 작동하지 않습니다',
          ],
          correctAnswer: 1,
          explanation:
            'React DevTools에서 flushSync 사용 시 일반적인 일괄 처리가 무시되어 여러 번의 개별적인 렌더링이 발생하는 것을 확인할 수 있습니다.',
        },
        {
          id: 13,
          question: '다음 중 flushSync 사용이 적절하지 않은 경우는?',
          options: [
            '포커스를 특정 입력 필드로 이동시킬 때',
            '일반적인 상태 업데이트를 수행할 때',
            '외부 라이브러리가 DOM 측정을 필요로 할 때',
            '인쇄 기능을 구현할 때',
          ],
          correctAnswer: 1,
          explanation:
            '일반적인 상태 업데이트는 React의 기본적인 일괄 처리 메커니즘을 사용하는 것이 성능상 더 좋습니다.',
        },
        {
          id: 14,
          question: 'flushSync와 useLayoutEffect의 실행 순서는 어떻게 되나요?',
          options: [
            'flushSync가 항상 먼저 실행됩니다',
            'useLayoutEffect가 항상 먼저 실행됩니다',
            'flushSync 콜백이 완료된 후 useLayoutEffect가 실행됩니다',
            '동시에 실행됩니다',
          ],
          correctAnswer: 2,
          explanation:
            'flushSync 콜백이 완료되고 DOM이 업데이트된 후에 useLayoutEffect가 실행됩니다.',
        },
        {
          id: 15,
          question:
            'flushSync를 사용할 때 발생할 수 있는 메모리 관련 문제는 무엇인가요?',
          options: [
            '메모리 누수가 발생합니다',
            '가비지 컬렉션이 지연됩니다',
            'DOM 요소가 즉시 정리되지 않아 일시적으로 메모리 사용량이 증가할 수 있습니다',
            '메모리 단편화가 발생합니다',
          ],
          correctAnswer: 2,
          explanation:
            'flushSync로 인한 동기적 업데이트로 인해 DOM 요소의 정리가 지연될 수 있어 일시적인 메모리 사용량 증가가 발생할 수 있습니다.',
        },
      ],
    },
  ],
};
