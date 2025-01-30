import { Quiz } from '@/types/quiz.type';

export const quiz: Quiz = {
  title: 'React useSyncExternalStore Hook Quiz',
  description:
    'React의 useSyncExternalStore Hook에 대한 이해를 테스트하는 퀴즈입니다.',
  categories: [
    {
      title: '기본 개념',
      description: 'useSyncExternalStore의 기본 개념과 사용법',
      questions: [
        {
          id: 1,
          question: 'useSyncExternalStore Hook의 주요 목적은 무엇인가요?',
          options: [
            '컴포넌트 간 상태 공유',
            '외부 데이터 저장소 구독 및 동기화',
            '브라우저 API와의 통합',
            '서버 사이드 렌더링 지원',
          ],
          correctAnswer: 1,
          explanation:
            'useSyncExternalStore Hook은 React 외부의 데이터 저장소를 구독하고 해당 저장소의 값을 컴포넌트와 동기화할 수 있게 해주는 Hook입니다.',
        },
        {
          id: 2,
          question: '다음 중 useSyncExternalStore의 필수 매개변수가 아닌 것은?',
          options: [
            'subscribe',
            'getSnapshot',
            'getServerSnapshot',
            'callback',
          ],
          correctAnswer: 2,
          explanation:
            'getServerSnapshot은 선택적 매개변수로, 서버 사이드 렌더링을 위한 초기 스냅샷을 제공하는 함수입니다.',
        },
        {
          id: 3,
          question: 'subscribe 함수가 반환해야 하는 것은?',
          options: [
            '현재 상태값',
            '구독 해제(cleanup) 함수',
            'Promise 객체',
            '새로운 구독 함수',
          ],
          correctAnswer: 1,
          explanation:
            'subscribe 함수는 구독을 정리(cleanup)하는 함수를 반환해야 합니다. 이 함수는 컴포넌트가 언마운트될 때 호출됩니다.',
        },
        {
          id: 4,
          question: 'getSnapshot 함수의 요구사항으로 올바르지 않은 것은?',
          options: [
            '저장소가 변경되지 않았다면 같은 값을 반환해야 함',
            '매번 새로운 객체를 반환해야 함',
            '저장소의 현재 상태를 반환해야 함',
            '순수 함수여야 함',
          ],
          correctAnswer: 1,
          explanation:
            'getSnapshot은 저장소가 변경되지 않았다면 같은 값을 반환해야 합니다. 매번 새로운 객체를 반환하면 불필요한 리렌더링이 발생할 수 있습니다.',
        },
        {
          id: 5,
          question: '다음 중 useSyncExternalStore를 사용해야 하는 경우는?',
          options: [
            '컴포넌트 간 상태 공유가 필요할 때',
            '폼 상태 관리가 필요할 때',
            '브라우저 API나 외부 라이브러리와 통합이 필요할 때',
            '서버 상태 관리가 필요할 때',
          ],
          correctAnswer: 2,
          explanation:
            'useSyncExternalStore는 브라우저 API(예: window.online)나 외부 상태 관리 라이브러리와 같은 React 외부의 데이터 소스와 통합할 때 사용해야 합니다.',
        },
        {
          id: 6,
          question:
            '다음 코드의 문제점은?\n\nfunction MyComponent() {\n  const data = useSyncExternalStore(\n    callback => {\n      const unsubscribe = store.subscribe(callback);\n      return unsubscribe;\n    },\n    () => store.getState()\n  );\n}',
          options: [
            '구독 함수가 잘못됨',
            'subscribe 함수가 컴포넌트 내부에 정의됨',
            'getSnapshot 함수가 잘못됨',
            'cleanup 함수가 없음',
          ],
          correctAnswer: 1,
          explanation:
            'subscribe 함수는 가능한 컴포넌트 외부에 정의하거나 useCallback으로 메모이제이션해야 합니다. 컴포넌트 내부에 정의하면 매 렌더링마다 새로운 함수가 생성됩니다.',
        },
        {
          id: 7,
          question: '다음 중 getServerSnapshot의 역할이 아닌 것은?',
          options: [
            '서버 사이드 렌더링 지원',
            '하이드레이션 불일치 방지',
            '클라이언트 상태 업데이트',
            '초기 상태 제공',
          ],
          correctAnswer: 2,
          explanation:
            'getServerSnapshot은 서버 사이드 렌더링 시 초기 상태를 제공하고 하이드레이션 불일치를 방지하는 역할을 합니다. 클라이언트 상태 업데이트는 이 함수의 역할이 아닙니다.',
        },
        {
          id: 8,
          question:
            'useSyncExternalStore를 사용할 때 성능 최적화를 위한 가장 중요한 고려사항은?',
          options: [
            'getSnapshot 함수의 캐싱',
            'subscribe 함수의 메모이제이션',
            '불변성 유지',
            '서버 스냅샷 제공',
          ],
          correctAnswer: 2,
          explanation:
            '스냅샷의 불변성을 유지하는 것이 가장 중요합니다. 저장소가 변경되지 않았다면 같은 참조를 반환하여 불필요한 리렌더링을 방지해야 합니다.',
        },
      ],
    },
    {
      title: '실제 구현과 문제 해결',
      description: 'useSyncExternalStore의 실제 구현 패턴과 문제 해결',
      questions: [
        {
          id: 9,
          question:
            "다음 브라우저 API 구독 코드의 문제점은?\n\nfunction useWindowSize() {\n  return useSyncExternalStore(\n    callback => {\n      window.addEventListener('resize', callback);\n      return () => window.removeEventListener('resize', callback);\n    },\n    () => ({ width: window.innerWidth, height: window.innerHeight })\n  );\n}",
          options: [
            '이벤트 리스너 등록이 잘못됨',
            'getSnapshot이 매번 새 객체를 반환함',
            'cleanup 함수가 잘못됨',
            'subscribe 함수가 부적절함',
          ],
          correctAnswer: 1,
          explanation:
            'getSnapshot이 매번 새로운 객체를 반환하므로 불필요한 리렌더링이 발생합니다. 객체를 메모이제이션하거나 primitive 값들을 개별적으로 반환해야 합니다.',
        },
        {
          id: 10,
          question: '외부 상태 관리 라이브러리와 통합 시 가장 좋은 방법은?',
          options: [
            '직접 구독 로직 구현',
            '라이브러리의 공식 바인딩 사용',
            'useState와 useEffect 조합 사용',
            '커스텀 Hook으로 추상화',
          ],
          correctAnswer: 1,
          explanation:
            '외부 상태 관리 라이브러리와 통합할 때는 해당 라이브러리가 제공하는 공식 React 바인딩을 사용하는 것이 가장 안전하고 최적화된 방법입니다.',
        },
        {
          id: 11,
          question:
            '다음 중 Suspense와 함께 useSyncExternalStore를 사용할 때 주의할 점이 아닌 것은?',
          options: [
            'getSnapshot이 undefined를 반환하면 안됨',
            'subscribe 내에서 데이터 페칭',
            '스냅샷의 불변성 유지',
            '초기 상태 제공',
          ],
          correctAnswer: 1,
          explanation:
            'subscribe 함수는 순수하게 구독 로직만 다뤄야 합니다. 데이터 페칭은 별도로 처리해야 하며, Suspense와 함께 사용할 때는 특히 주의해야 합니다.',
        },
        {
          id: 12,
          question:
            '다음 코드가 메모리 누수를 일으킬 수 있는 이유는?\n\nfunction useStore() {\n  const store = useMemo(() => createStore(), []);\n  return useSyncExternalStore(\n    store.subscribe,\n    store.getSnapshot\n  );\n}',
          options: [
            'store가 컴포넌트 내부에서 생성됨',
            '구독 해제가 누락됨',
            'getSnapshot이 메모이제이션되지 않음',
            'subscribe가 메모이제이션되지 않음',
          ],
          correctAnswer: 0,
          explanation:
            'store를 컴포넌트 내부에서 생성하면 각 인스턴스마다 새로운 store가 생성되고, 컴포넌트가 리렌더링될 때 적절히 정리되지 않을 수 있습니다. store는 컴포넌트 외부에서 생성해야 합니다.',
        },
        {
          id: 13,
          question: '다음 중 getSnapshot 함수를 최적화하는 가장 좋은 방법은?',
          options: [
            'useCallback으로 메모이제이션',
            '매번 새로운 값 반환',
            '캐시된 스냅샷 사용 및 변경 감지',
            '상태를 항상 primitive 값으로 변환',
          ],
          correctAnswer: 2,
          explanation:
            'getSnapshot은 저장소가 변경되었을 때만 새로운 값을 반환해야 합니다. 이전 스냅샷을 캐시하고 변경을 감지하여 필요할 때만 새로운 스냅샷을 생성하는 것이 가장 효율적입니다.',
        },
        {
          id: 14,
          question:
            'useSyncExternalStore를 사용한 커스텀 Hook에서 구독 해제가 제대로 동작하지 않는 경우의 원인은?',
          options: [
            'cleanup 함수 미반환',
            '잘못된 의존성 배열',
            '비동기 구독 해제',
            '잘못된 구독 함수 정의',
          ],
          correctAnswer: 2,
          explanation:
            '구독 해제가 비동기적으로 처리되면 컴포넌트가 이미 언마운트된 후에 실행될 수 있습니다. 구독 해제는 동기적으로 처리되어야 하며, cleanup 함수는 즉시 실행 가능해야 합니다.',
        },
        {
          id: 15,
          question:
            '다음 중 getServerSnapshot 구현 시 고려해야 할 사항이 아닌 것은?',
          options: [
            '서버와 클라이언트의 초기 상태 일치',
            '하이드레이션 과정에서의 데이터 정합성',
            '클라이언트 측 상태 업데이트 처리',
            'SSR 환경 감지',
          ],
          correctAnswer: 2,
          explanation:
            'getServerSnapshot은 서버 렌더링과 하이드레이션 동안의 초기 상태만 다룹니다. 클라이언트 측 상태 업데이트는 일반적인 getSnapshot에서 처리해야 합니다.',
        },
        {
          id: 16,
          question:
            '다음 중 useSyncExternalStore의 성능 최적화 방법으로 적절하지 않은 것은?',
          options: [
            'subscribe 함수의 메모이제이션',
            '스냅샷의 불변성 유지',
            '모든 상태를 하나의 큰 객체로 관리',
            '선택적 구독(selective subscription) 구현',
          ],
          correctAnswer: 2,
          explanation:
            '모든 상태를 하나의 큰 객체로 관리하면 작은 변경에도 전체 객체가 변경되어 불필요한 리렌더링이 발생할 수 있습니다. 대신 필요한 데이터만 선택적으로 구독하는 것이 좋습니다.',
        },
      ],
    },
    {
      title: '심화 개념과 에러 처리',
      description: 'useSyncExternalStore의 심화 사용법과 에러 처리',
      questions: [
        {
          id: 17,
          question:
            'useSyncExternalStore와 React Concurrent 기능 사용 시 발생할 수 있는 문제점은?',
          options: [
            '구독이 동작하지 않음',
            '불필요한 리렌더링 발생',
            '티어링(tearing) 현상 발생 가능성',
            '메모리 누수',
          ],
          correctAnswer: 2,
          explanation:
            'Concurrent 모드에서 리렌더링이 중단되고 나중에 재개될 수 있는데, 이때 외부 저장소의 값이 변경되면 UI가 일관되지 않게 표시되는 티어링 현상이 발생할 수 있습니다. useSyncExternalStore는 이를 방지하도록 설계되었습니다.',
        },
        {
          id: 18,
          question:
            "다음 코드의 잠재적 문제점은?\n\nfunction useThemeStore() {\n  return useSyncExternalStore(\n    themeStore.subscribe,\n    () => themeStore.get(),\n    () => ({ theme: 'light' })\n  );\n}",
          options: [
            '서버와 클라이언트의 초기값 불일치',
            '구독 함수 누락',
            '스냅샷 캐싱 누락',
            'cleanup 함수 누락',
          ],
          correctAnswer: 0,
          explanation:
            '서버 스냅샷과 클라이언트의 초기값이 다르면 하이드레이션 오류가 발생할 수 있습니다. getServerSnapshot은 서버와 클라이언트 간에 일관된 초기값을 제공해야 합니다.',
        },
        {
          id: 19,
          question:
            '외부 저장소의 변경을 디바운스하거나 쓰로틀링해야 할 때 가장 적절한 구현 방법은?',
          options: [
            'getSnapshot 내에서 처리',
            'subscribe 함수에서 처리',
            '별도의 미들웨어 저장소 생성',
            'useEffect 사용',
          ],
          correctAnswer: 2,
          explanation:
            '변경 사항의 디바운스나 쓰로틀링은 원본 저장소와 컴포넌트 사이에 미들웨어 저장소를 만들어 처리하는 것이 가장 좋습니다. 이렇게 하면 원본 저장소의 로직을 수정하지 않고도 필요한 동작을 구현할 수 있습니다.',
        },
        {
          id: 20,
          question:
            '다음 중 useSyncExternalStore를 사용한 커스텀 Hook의 테스트 작성 시 고려사항이 아닌 것은?',
          options: [
            '외부 저장소 모킹',
            '구독 함수 호출 확인',
            '스냅샷 불변성 테스트',
            '렌더링 성능 측정',
          ],
          correctAnswer: 3,
          explanation:
            '커스텀 Hook의 테스트는 주로 기능적인 측면(저장소 연동, 구독 처리, 데이터 일관성 등)에 집중해야 합니다. 렌더링 성능은 별도의 성능 테스트에서 다뤄야 할 문제입니다.',
        },
        {
          id: 21,
          question:
            'selector 패턴을 구현할 때 발생할 수 있는 성능 문제를 해결하는 가장 좋은 방법은?',
          options: [
            '모든 데이터를 구독',
            '필요한 부분만 구독하고 메모이제이션',
            '상태 업데이트 최소화',
            '더 작은 컴포넌트로 분리',
          ],
          correctAnswer: 1,
          explanation:
            'selector 패턴 구현 시 필요한 데이터만 선택적으로 구독하고, useMemo나 다른 메모이제이션 기법을 사용하여 불필요한 계산과 리렌더링을 방지해야 합니다.',
        },
        {
          id: 22,
          question:
            '다음 중 외부 저장소의 에러 처리를 위한 가장 적절한 방법은?',
          options: [
            'try-catch로 모든 호출 래핑',
            '에러 상태를 저장소의 일부로 관리',
            '에러 발생 시 기본값 반환',
            '컴포넌트에서 에러 바운더리 사용',
          ],
          correctAnswer: 1,
          explanation:
            '외부 저장소의 에러는 저장소 자체의 상태로 관리하는 것이 가장 좋습니다. 이렇게 하면 에러 상태를 구독하고 적절히 처리할 수 있으며, 에러 복구 매커니즘도 구현할 수 있습니다.',
        },
        {
          id: 23,
          question:
            '다음 중 비동기 데이터를 다루는 외부 저장소 구현 시 가장 적절한 방법은?',
          options: [
            'getSnapshot에서 직접 비동기 처리',
            'subscribe에서 비동기 데이터 로드',
            '별도의 비동기 상태 관리',
            'Promise를 저장소 값으로 사용',
          ],
          correctAnswer: 2,
          explanation:
            '비동기 데이터는 로딩 상태, 에러 상태 등을 포함한 별도의 상태로 관리해야 합니다. getSnapshot은 동기적이어야 하며, 현재 상태(로딩/에러/데이터)를 즉시 반환할 수 있어야 합니다.',
        },
        {
          id: 24,
          question:
            '다음 중 useSyncExternalStore를 사용한 상태 관리의 한계가 아닌 것은?',
          options: [
            '동시성 모드와의 호환성',
            '비동기 상태 업데이트 처리',
            '선택적 구독 구현의 복잡성',
            '서버 사이드 렌더링 지원',
          ],
          correctAnswer: 0,
          explanation:
            'useSyncExternalStore는 특히 동시성 모드와의 호환성을 위해 설계되었으며, 티어링 현상을 방지하고 일관된 UI를 보장합니다. 이는 이 Hook의 주요 장점 중 하나입니다.',
        },
      ],
    },
  ],
};
