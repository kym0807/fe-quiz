import { Quiz } from '@/types/quiz.type';

export const quiz: Quiz = {
  title: 'useDeferredValue와 React 성능 최적화 퀴즈',
  description:
    'React의 useDeferredValue Hook과 관련된 개념, 사용법, 최적화 전략을 테스트하는 퀴즈입니다.',
  categories: [
    {
      title: '기본 개념',
      description: 'useDeferredValue의 기본적인 개념과 사용법을 테스트합니다.',
      questions: [
        {
          id: 1,
          question: 'useDeferredValue Hook의 주요 목적은 무엇인가요?',
          options: [
            '비동기 데이터 페칭을 처리하기 위해',
            '상태 업데이트를 취소하기 위해',
            'UI의 특정 부분의 업데이트를 지연시켜 성능을 개선하기 위해',
            '컴포넌트의 마운트를 지연시키기 위해',
          ],
          correctAnswer: 2,
          explanation:
            'useDeferredValue는 UI의 특정 부분의 업데이트를 지연시켜 전반적인 성능을 개선할 수 있게 해주는 React Hook입니다.',
        },
        {
          id: 2,
          question: 'useDeferredValue의 반환값의 특성으로 올바른 것은?',
          options: [
            '항상 최신 값을 즉시 반환한다',
            '초기 렌더링 시에는 initialValue나 제공된 value를 반환하고, 업데이트 시에는 이전 값으로 먼저 리렌더링한 후 백그라운드에서 새 값으로 업데이트한다',
            'Promise 객체를 반환한다',
            'null을 반환한 후 값이 준비되면 업데이트한다',
          ],
          correctAnswer: 1,
          explanation:
            'useDeferredValue는 초기 렌더링 시 initialValue 또는 제공된 value를 반환하고, 업데이트 시에는 이전 값으로 먼저 리렌더링한 후 백그라운드에서 새로운 값으로 업데이트합니다.',
        },
        {
          id: 3,
          question:
            '다음 코드에서 잘못된 부분은 무엇인가요?\n\nfunction SearchResults() {\n  const [results, setResults] = useState([]);\n  const deferredResults = useDeferredValue({ results });\n  return <ResultsList data={deferredResults} />;\n}',
          options: [
            'useState의 사용법이 잘못되었다',
            'ResultsList 컴포넌트에 잘못된 props를 전달하고 있다',
            'useDeferredValue에 렌더링 중에 생성된 새로운 객체를 전달하고 있다',
            'deferredResults의 타입이 잘못되었다',
          ],
          correctAnswer: 2,
          explanation:
            'useDeferredValue에는 렌더링 외부에서 생성된 값이나 원시 값을 전달해야 합니다. 렌더링 중에 새 객체를 생성하여 전달하면 불필요한 백그라운드 리렌더링이 발생할 수 있습니다.',
        },
        {
          id: 4,
          question:
            'useDeferredValue를 사용할 때 성능 최적화를 위한 필수 조건은 무엇인가요?',
          options: [
            'useCallback과 함께 사용해야 한다',
            'useState와 함께 사용해야 한다',
            '지연된 값을 사용하는 컴포넌트를 memo로 감싸야 한다',
            'useMemo와 함께 사용해야 한다',
          ],
          correctAnswer: 2,
          explanation:
            '성능 최적화를 위해서는 지연된 값을 사용하는 컴포넌트를 반드시 memo로 감싸야 합니다.',
        },
        {
          id: 5,
          question: 'useDeferredValue와 debounce의 주요 차이점은 무엇인가요?',
          options: [
            'useDeferredValue는 React와 통합된 네이티브 솔루션으로 디바이스 성능에 따라 자동으로 조절되는 반면, debounce는 고정된 지연 시간을 사용한다',
            'useDeferredValue는 비동기 처리만 가능하고, debounce는 동기 처리만 가능하다',
            'useDeferredValue는 상태 업데이트만 처리하고, debounce는 이벤트 처리만 가능하다',
            'useDeferredValue는 메모리 사용량이 더 많고, debounce는 메모리 사용량이 적다',
          ],
          correctAnswer: 0,
          explanation:
            'useDeferredValue는 React와 통합된 네이티브 솔루션으로 디바이스 성능에 따라 자동으로 조절되며 백그라운드 렌더링이 중단 가능한 반면, debounce는 고정된 지연 시간을 사용합니다.',
        },
        {
          id: 6,
          question:
            'Suspense와 함께 useDeferredValue를 사용할 때의 장점은 무엇인가요?',
          options: [
            '데이터 페칭 속도가 향상된다',
            '새로운 결과가 로드되는 동안 이전 검색 결과를 계속 표시할 수 있다',
            '에러 바운더리를 자동으로 처리한다',
            '캐싱 기능이 향상된다',
          ],
          correctAnswer: 1,
          explanation:
            'Suspense와 함께 사용할 경우, 새로운 결과가 로드되는 동안 이전 검색 결과를 계속 표시할 수 있어 사용자 경험이 향상됩니다.',
        },
        {
          id: 7,
          question:
            'useDeferredValue를 사용할 때 현재 표시되는 내용이 최신이 아님을 사용자에게 어떻게 시각적으로 알려줄 수 있나요?',
          options: [
            'loading 상태를 사용한다',
            'isStale 플래그를 사용하여 opacity를 조절한다',
            '에러 메시지를 표시한다',
            '애니메이션을 추가한다',
          ],
          correctAnswer: 1,
          explanation:
            'query !== deferredQuery를 통해 isStale 상태를 확인하고, 이를 바탕으로 opacity를 조절하여 사용자에게 현재 표시된 내용이 최신이 아님을 시각적으로 알려줄 수 있습니다.',
        },
      ],
    },

    {
      title: '고급 개념과 최적화',
      description:
        'useDeferredValue의 고급 사용법과 성능 최적화 전략을 테스트합니다.',
      questions: [
        {
          id: 8,
          question: 'useDeferredValue는 네트워크 요청을 어떻게 처리하나요?',
          options: [
            '자동으로 네트워크 요청을 최적화한다',
            '네트워크 요청을 취소한다',
            '네트워크 요청 자체를 최적화하지 않으며, 필요한 경우 debounce나 throttle과 함께 사용해야 한다',
            '네트워크 요청을 캐싱한다',
          ],
          correctAnswer: 2,
          explanation:
            'useDeferredValue는 네트워크 요청 자체를 최적화하지 않습니다. 네트워크 요청 최적화가 필요한 경우 debounce나 throttle과 함께 사용해야 합니다.',
        },
        {
          id: 9,
          question:
            '다음 중 throttle과 useDeferredValue의 차이점으로 올바른 것은?',
          options: [
            'throttle은 비동기적으로 동작하고 useDeferredValue는 동기적으로 동작한다',
            'throttle은 고정된 시간 간격을 사용하지만 useDeferredValue는 디바이스 성능에 따라 자동으로 조절된다',
            'throttle은 이벤트만 처리할 수 있고 useDeferredValue는 상태만 처리할 수 있다',
            'throttle은 React 컴포넌트 외부에서만 사용할 수 있다',
          ],
          correctAnswer: 1,
          explanation:
            'throttle은 일정한 시간 간격으로 업데이트를 제한하는 고정된 간격을 사용하지만, useDeferredValue는 React와 통합되어 디바이스 성능에 따라 자동으로 조절됩니다.',
        },
        {
          id: 10,
          question:
            '다음 코드의 문제점은 무엇인가요?\n\nfunction SearchList({ text }) {\n  const deferredText = useDeferredValue(text);\n  return (\n    <ul>\n      {items.map(item => (\n        <SlowItem key={item.id} text={deferredText} />\n      ))}\n    </ul>\n  );\n}',
          options: [
            'useDeferredValue의 사용법이 잘못되었다',
            'key prop이 잘못 지정되었다',
            '컴포넌트가 memo로 래핑되어 있지 않다',
            'map 함수의 사용법이 잘못되었다',
          ],
          correctAnswer: 2,
          explanation:
            '성능 최적화를 위해서는 지연된 값을 사용하는 컴포넌트를 memo로 감싸야 합니다. 이 코드에서는 SearchList 컴포넌트가 memo로 래핑되어 있지 않습니다.',
        },
        {
          id: 11,
          question:
            'useDeferredValue의 내부 동작 방식에서 백그라운드 렌더링의 특징은 무엇인가요?',
          options: [
            '백그라운드 렌더링은 취소할 수 없다',
            '백그라운드 렌더링은 항상 동기적으로 실행된다',
            '백그라운드 렌더링은 중단 가능하다',
            '백그라운드 렌더링은 항상 고정된 시간 후에 실행된다',
          ],
          correctAnswer: 2,
          explanation:
            'useDeferredValue의 백그라운드 렌더링은 중단 가능한 특징을 가지고 있어, 새로운 업데이트가 발생하면 진행 중인 백그라운드 렌더링을 중단하고 새로운 업데이트를 처리할 수 있습니다.',
        },
        {
          id: 12,
          question:
            'React.memo와 useDeferredValue를 함께 사용할 때 얻을 수 있는 이점은 무엇인가요?',
          options: [
            '메모리 사용량이 줄어든다',
            '컴포넌트의 불필요한 리렌더링을 방지하여 성능이 최적화된다',
            '네트워크 요청이 최적화된다',
            '상태 업데이트가 동기화된다',
          ],
          correctAnswer: 1,
          explanation:
            'React.memo와 useDeferredValue를 함께 사용하면 지연된 값이 변경될 때만 컴포넌트가 리렌더링되므로, 불필요한 리렌더링을 방지하여 성능이 최적화됩니다.',
        },
        {
          id: 13,
          question:
            'useDeferredValue를 사용할 때 고려해야 할 주요 성능 관련 요소는?',
          options: [
            '서버 성능',
            '네트워크 대역폭',
            '디바이스의 CPU 성능과 현재 부하 상태',
            '메모리 사용량',
          ],
          correctAnswer: 2,
          explanation:
            'useDeferredValue는 디바이스의 CPU 성능과 현재 부하 상태에 따라 지연 시간을 자동으로 조절하므로, 이러한 요소들을 고려하여 최적화를 수행합니다.',
        },
        {
          id: 14,
          question: 'Concurrent React와 useDeferredValue의 관계는 무엇인가요?',
          options: [
            '서로 독립적으로 동작하며 관계가 없다',
            'useDeferredValue는 Concurrent React의 기능을 활용하여 중단 가능한 렌더링을 구현한다',
            'Concurrent React는 useDeferredValue를 대체한다',
            'useDeferredValue는 Concurrent React를 비활성화한다',
          ],
          correctAnswer: 1,
          explanation:
            'useDeferredValue는 Concurrent React의 기능을 활용하여 중단 가능한 렌더링을 구현합니다. 이를 통해 우선순위가 높은 업데이트가 발생하면 진행 중인 렌더링을 중단하고 새로운 업데이트를 처리할 수 있습니다.',
        },
      ],
    },

    {
      title: '실제 구현과 응용',
      description:
        'useDeferredValue의 실제 사용 사례와 구현 방법을 테스트합니다.',
      questions: [
        {
          id: 15,
          question:
            '검색 인터페이스 구현 시 useDeferredValue와 Suspense를 함께 사용하는 가장 적절한 방법은?',
          options: [
            'Suspense를 검색 입력창을 감싸는 데 사용한다',
            'Suspense를 전체 SearchInterface 컴포넌트를 감싸는 데 사용한다',
            'Suspense를 검색 결과를 표시하는 컴포넌트만 감싸는 데 사용한다',
            'Suspense 대신 ErrorBoundary를 사용한다',
          ],
          correctAnswer: 2,
          explanation:
            '검색 결과를 표시하는 컴포넌트만 Suspense로 감싸는 것이 가장 적절합니다. 이렇게 하면 검색 결과가 로드되는 동안 입력창은 계속 응답성을 유지할 수 있습니다.',
        },
        {
          id: 16,
          question:
            '다음 중 useDeferredValue를 사용한 검색 기능 구현에서 잘못된 것은?',
          options: [
            '검색어 입력 시 즉시 API 요청을 보낸다',
            '이전 검색 결과를 표시하면서 새로운 결과를 기다린다',
            '로딩 상태를 시각적으로 표시한다',
            '검색어가 변경될 때마다 새로운 검색을 시작한다',
          ],
          correctAnswer: 0,
          explanation:
            '검색어 입력 시 즉시 API 요청을 보내는 것은 성능상 좋지 않습니다. 대신 debounce나 throttle과 함께 사용하여 네트워크 요청을 최적화해야 합니다.',
        },
        {
          id: 17,
          question: '지연된 상태를 시각적으로 표현할 때 가장 좋은 UX 방식은?',
          options: [
            '로딩 스피너만 표시한다',
            '이전 콘텐츠를 숨기고 새로운 콘텐츠만 표시한다',
            '이전 콘텐츠를 흐리게 처리하고 로딩 중임을 알리는 텍스트를 함께 표시한다',
            '에러 메시지를 표시한다',
          ],
          correctAnswer: 2,
          explanation:
            '이전 콘텐츠를 흐리게 처리하고 로딩 중임을 알리는 텍스트를 함께 표시하는 것이 사용자에게 가장 좋은 피드백을 제공합니다.',
        },
        {
          id: 18,
          question:
            '리스트 렌더링에서 useDeferredValue를 사용할 때 최적의 구현 방식은?',
          options: [
            '모든 리스트 아이템을 개별적으로 지연시킨다',
            '전체 리스트를 하나의 지연된 값으로 처리한다',
            '리스트의 일부만 지연시킨다',
            '리스트를 청크 단위로 나누어 지연시킨다',
          ],
          correctAnswer: 1,
          explanation:
            '전체 리스트를 하나의 지연된 값으로 처리하고 memo로 감싸는 것이 가장 효율적입니다. 개별 아이템을 지연시키면 불필요한 오버헤드가 발생할 수 있습니다.',
        },
        {
          id: 19,
          question:
            'useDeferredValue와 useTransition의 주요 차이점은 무엇인가요?',
          options: [
            'useDeferredValue는 값을 지연시키고, useTransition은 상태 업데이트를 지연시킨다',
            'useDeferredValue는 동기적으로 동작하고, useTransition은 비동기적으로 동작한다',
            'useDeferredValue는 렌더링을 중단할 수 없고, useTransition은 중단할 수 있다',
            'useDeferredValue는 훅이고, useTransition은 컴포넌트이다',
          ],
          correctAnswer: 0,
          explanation:
            'useDeferredValue는 값 자체를 지연시키는 데 사용되고, useTransition은 상태 업데이트를 지연시키는 데 사용됩니다. 두 훅은 서로 다른 사용 사례에 적합합니다.',
        },
        {
          id: 20,
          question:
            '대규모 데이터 처리에서 useDeferredValue를 사용할 때의 모범 사례는?',
          options: [
            '모든 데이터를 한 번에 처리한다',
            '데이터를 작은 청크로 나누어 처리한다',
            '데이터 처리를 건너뛴다',
            '데이터 처리를 동기적으로 수행한다',
          ],
          correctAnswer: 1,
          explanation:
            '대규모 데이터를 처리할 때는 데이터를 작은 청크로 나누어 처리하는 것이 좋습니다. 이렇게 하면 메인 스레드가 블로킹되는 것을 방지하고 UI의 응답성을 유지할 수 있습니다.',
        },
        {
          id: 21,
          question:
            'useDeferredValue를 사용할 때 React DevTools에서 확인해야 할 주요 성능 지표는?',
          options: [
            '메모리 사용량',
            '렌더링 시간과 커밋 단계 시간',
            '네트워크 요청 수',
            '컴포넌트 마운트 횟수',
          ],
          correctAnswer: 1,
          explanation:
            'React DevTools에서는 렌더링 시간과 커밋 단계 시간을 주의 깊게 모니터링해야 합니다. 이를 통해 지연된 렌더링이 성능에 미치는 영향을 파악할 수 있습니다.',
        },
      ],
    },
  ],
};
