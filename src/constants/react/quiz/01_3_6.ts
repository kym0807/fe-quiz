import { Quiz } from '@/types/quiz.type';

export const quiz: Quiz = {
  title: 'React startTransition 이해하기',
  description: 'startTransition의 개념과 활용에 대한 이해를 테스트합니다.',
  categories: [
    {
      title: '기본 개념',
      description: 'startTransition의 기본 개념과 특징을 테스트합니다.',
      questions: [
        {
          id: 1,
          question: 'startTransition의 주요 목적은 무엇인가요?',
          options: [
            '비동기 작업을 처리하기 위해 사용됩니다',
            '상태 업데이트를 지연시켜 UI의 반응성을 유지합니다',
            '컴포넌트의 렌더링을 최적화합니다',
            '서버 사이드 렌더링을 지원합니다',
          ],
          correctAnswer: 1,
          explanation:
            'startTransition은 상태 업데이트를 Transition으로 표시하여 UI의 반응성을 유지하면서 백그라운드에서 렌더링할 수 있게 해주는 함수입니다.',
        },
        {
          id: 2,
          question: '다음 중 startTransition의 특징이 아닌 것은?',
          options: [
            'UI의 반응성을 유지하면서 무거운 업데이트를 처리할 수 있습니다',
            '진행 중인 전환을 중단하고 새로운 업데이트를 처리할 수 있습니다',
            'Transition의 진행 상태를 직접 확인할 수 있습니다',
            '로딩 인디케이터 없이 자연스러운 전환을 구현할 수 있습니다',
          ],
          correctAnswer: 2,
          explanation:
            'startTransition은 Transition의 진행 상태를 직접 확인할 수 없습니다. 진행 상태를 확인하려면 useTransition을 사용해야 합니다.',
        },
        {
          id: 3,
          question:
            '다음 코드의 문제점은 무엇인가요?\n\nasync function handleSearch(query) {\n  const results = await searchAPI(query);\n  startTransition(() => {\n    setSearchResults(results);\n  });\n  setIsLoading(false);\n}',
          options: [
            'startTransition 내부에서 await를 사용할 수 없습니다',
            'setIsLoading도 startTransition 내부에 있어야 합니다',
            'searchAPI 호출도 startTransition 내부에 있어야 합니다',
            '이 코드는 문제가 없습니다',
          ],
          correctAnswer: 3,
          explanation:
            '이 코드는 문제가 없습니다. 비동기 요청 후의 상태 업데이트를 startTransition으로 감싸는 것은 올바른 패턴입니다.',
        },
      ],
    },
    {
      title: '활용과 제한사항',
      description: 'startTransition의 실제 활용과 제한사항을 테스트합니다.',
      questions: [
        {
          id: 4,
          question:
            'startTransition 대신 useTransition을 사용해야 하는 경우는?',
          options: [
            '비동기 작업을 처리할 때',
            '컴포넌트 외부에서 상태를 업데이트할 때',
            'Transition의 진행 상태를 확인해야 할 때',
            '대규모 DOM 업데이트가 필요할 때',
          ],
          correctAnswer: 2,
          explanation:
            'Transition의 진행 상태를 확인해야 할 때는 useTransition을 사용해야 합니다. startTransition은 진행 상태를 제공하지 않습니다.',
        },
        {
          id: 5,
          question: 'startTransition을 사용하기 적합한 상황이 아닌 것은?',
          options: [
            '무거운 데이터 시각화나 차트 업데이트',
            '즉각적인 사용자 입력 처리',
            '탭 전환이나 페이지 네비게이션',
            '대규모 리스트 필터링',
          ],
          correctAnswer: 1,
          explanation:
            '즉각적인 사용자 입력 처리는 지연되면 안 되는 작업이므로 startTransition을 사용하기 적합하지 않습니다.',
        },
      ],
    },
    {
      title: 'React 생태계 통합',
      description: 'startTransition과 다른 React 기능들의 관계를 테스트합니다.',
      questions: [
        {
          id: 6,
          question:
            'props나 커스텀 훅의 반환값에 대해 Transition이 필요할 때 사용해야 하는 Hook은?',
          options: [
            'useTransition',
            'useDeferredValue',
            'useCallback',
            'useMemo',
          ],
          correctAnswer: 1,
          explanation:
            'props나 커스텀 훅의 반환값에 대한 Transition이 필요한 경우 useDeferredValue를 사용해야 합니다. startTransition은 직접적인 상태 업데이트 함수에만 사용할 수 있습니다.',
        },
        {
          id: 7,
          question:
            'startTransition과 Suspense의 관계에 대한 설명으로 옳은 것은?',
          options: [
            'startTransition은 Suspense 대신 사용됩니다',
            'startTransition은 Suspense와 함께 사용할 수 없습니다',
            'startTransition은 Suspense의 fallback을 방지할 수 있습니다',
            'startTransition은 Suspense의 동작에 영향을 주지 않습니다',
          ],
          correctAnswer: 2,
          explanation:
            'startTransition을 사용하면 Suspense의 fallback을 방지하고 더 부드러운 전환을 구현할 수 있습니다.',
        },
      ],
    },

    {
      title: '실제 사용 사례',
      description: 'startTransition의 실제 활용 사례와 패턴을 테스트합니다.',
      questions: [
        {
          id: 8,
          question:
            "다음 코드에서 startTransition의 사용이 적절하지 않은 이유는?\n\nfunction SearchInput() {\n  const [query, setQuery] = useState('');\n\n  return (\n    <input\n      value={query}\n      onChange={e => {\n        startTransition(() => {\n          setQuery(e.target.value);\n        });\n      }}\n    />\n  );\n}",
          options: [
            'input의 value 업데이트는 즉시 반영되어야 하는 UI 변경입니다',
            'startTransition은 input 요소와 함께 사용할 수 없습니다',
            'query 상태는 이미 최적화되어 있습니다',
            'onChange 이벤트에서는 startTransition을 사용할 수 없습니다',
          ],
          correctAnswer: 0,
          explanation:
            '입력 필드의 값 업데이트는 사용자의 타이핑이 즉시 화면에 반영되어야 하는 즉각적인 UI 변경이므로, startTransition으로 지연시키면 안 됩니다.',
        },
        {
          id: 9,
          question:
            '탭 전환 시 startTransition을 사용할 때의 장점이 아닌 것은?',
          options: [
            'UI가 응답하지 않는 것을 방지할 수 있습니다',
            '탭 전환 애니메이션이 자동으로 추가됩니다',
            '이전 탭의 내용이 새 탭의 내용으로 자연스럽게 전환됩니다',
            '사용자가 빠르게 탭을 전환할 때 최신 선택만 처리됩니다',
          ],
          correctAnswer: 1,
          explanation:
            'startTransition은 애니메이션을 자동으로 추가하지 않습니다. 애니메이션은 별도로 구현해야 하며, startTransition은 단지 상태 업데이트의 우선순위를 관리합니다.',
        },
        {
          id: 10,
          question:
            '대규모 데이터 처리 시 startTransition 사용에 대한 설명으로 올바른 것은?',
          options: [
            '모든 데이터 처리 작업을 startTransition으로 감싸야 합니다',
            '데이터 페칭 자체를 startTransition으로 감싸야 합니다',
            '데이터 처리 결과를 상태에 반영할 때만 startTransition을 사용합니다',
            'startTransition은 데이터 처리 속도를 향상시킵니다',
          ],
          correctAnswer: 2,
          explanation:
            'startTransition은 데이터 처리 자체를 최적화하지 않으며, 처리된 데이터를 UI에 반영할 때의 상태 업데이트에만 사용해야 합니다.',
        },
        {
          id: 11,
          question:
            'startTransition과 ErrorBoundary를 함께 사용할 때 고려해야 할 사항은?',
          options: [
            'startTransition 내부의 에러는 ErrorBoundary가 잡을 수 없습니다',
            'ErrorBoundary를 먼저 선언하고 그 안에서 startTransition을 사용해야 합니다',
            'startTransition 내부의 에러는 자동으로 무시됩니다',
            '에러가 발생하면 transition이 자동으로 취소됩니다',
          ],
          correctAnswer: 3,
          explanation:
            'startTransition 내에서 에러가 발생하면 해당 transition은 자동으로 취소되며, ErrorBoundary가 에러를 정상적으로 처리할 수 있습니다.',
        },
        {
          id: 12,
          question:
            '다음 중 useDeferredValue 대신 startTransition을 사용해야 하는 경우는?',
          options: [
            'props로 전달받은 값을 지연시키고 싶을 때',
            '직접 상태 업데이트 함수를 호출할 수 있을 때',
            '데이터 페칭 결과를 지연시키고 싶을 때',
            '컴포넌트 외부에서 값을 업데이트할 때',
          ],
          correctAnswer: 1,
          explanation:
            'setState와 같은 상태 업데이트 함수를 직접 호출할 수 있는 경우에는 useDeferredValue 대신 startTransition을 사용하는 것이 더 적절합니다.',
        },
      ],
    },
    {
      title: '성능과 최적화',
      description: 'startTransition을 사용한 성능 최적화 전략을 테스트합니다.',
      questions: [
        {
          id: 13,
          question: 'startTransition의 성능상 이점이 가장 큰 경우는?',
          options: [
            '매우 작은 상태 업데이트를 자주 할 때',
            '네트워크 요청이 많은 경우',
            '무거운 계산과 큰 UI 업데이트가 필요한 경우',
            '단순한 텍스트 업데이트의 경우',
          ],
          correctAnswer: 2,
          explanation:
            'startTransition은 무거운 계산과 큰 UI 업데이트가 필요한 경우에 가장 효과적입니다. 이러한 작업을 백그라운드로 옮겨 UI의 반응성을 유지할 수 있기 때문입니다.',
        },
        {
          id: 14,
          question: 'startTransition 사용 시 발생할 수 있는 성능 문제는?',
          options: [
            '너무 많은 작업을 transition으로 표시할 경우 메모리 사용량이 증가할 수 있습니다',
            'transition이 무기한 지연될 수 있습니다',
            '동시에 여러 transition이 실행되면 브라우저가 멈출 수 있습니다',
            'transition 내부의 작업이 취소되면 메모리 누수가 발생할 수 있습니다',
          ],
          correctAnswer: 0,
          explanation:
            '너무 많은 작업을 transition으로 표시하면 React가 이전 렌더링 결과를 메모리에 유지해야 하므로 메모리 사용량이 증가할 수 있습니다.',
        },
      ],
    },

    {
      title: '고급 패턴과 통합',
      description:
        'startTransition의 고급 사용 패턴과 다른 기능들과의 통합을 테스트합니다.',
      questions: [
        {
          id: 15,
          question:
            '다음 중 React의 Concurrent 기능과 startTransition의 관계에 대한 설명으로 올바른 것은?',
          options: [
            'startTransition은 Concurrent Mode가 비활성화된 상태에서는 동작하지 않습니다',
            'startTransition은 Concurrent 렌더링을 강제로 활성화합니다',
            'startTransition은 Concurrent Mode와 무관하게 항상 동일하게 동작합니다',
            'startTransition은 Concurrent 기능이 활성화된 경우 더 효과적으로 동작합니다',
          ],
          correctAnswer: 3,
          explanation:
            'startTransition은 Concurrent 기능이 활성화된 환경에서 더 효과적으로 동작하지만, 비활성화된 상태에서도 기본적인 기능은 동작합니다.',
        },
        {
          id: 16,
          question:
            'startTransition과 비동기 데이터 패칭 라이브러리를 함께 사용할 때의 모범 사례는?',
          options: [
            '데이터 패칭 자체를 startTransition으로 감싸기',
            '데이터 패칭의 결과를 처리하는 상태 업데이트를 startTransition으로 감싸기',
            '데이터 패칭과 상태 업데이트 모두를 하나의 startTransition으로 감싸기',
            'startTransition 대신 Suspense를 사용하기',
          ],
          correctAnswer: 1,
          explanation:
            '데이터 패칭 자체는 startTransition으로 감싸지 않고, 패칭 결과를 UI에 반영하는 상태 업데이트만 startTransition으로 감싸는 것이 좋습니다.',
        },
        {
          id: 17,
          question:
            '다음 코드의 잠재적인 문제점은 무엇인가요?\n\nfunction SearchResults({ query }) {\n  const [results, setResults] = useState([]);\n\n  useEffect(() => {\n    startTransition(() => {\n      setResults(performHeavySearch(query));\n    });\n  }, [query]);\n\n  return <ResultsList results={results} />;\n}',
          options: [
            'useEffect 내에서 startTransition을 사용할 수 없습니다',
            'performHeavySearch가 동기적으로 실행되어 메인 스레드를 차단할 수 있습니다',
            'results 상태가 초기화되지 않습니다',
            'startTransition이 불필요합니다',
          ],
          correctAnswer: 1,
          explanation:
            '무거운 동기 연산인 performHeavySearch는 여전히 메인 스레드에서 실행되므로, UI를 차단할 수 있습니다. 이런 경우 웹 워커나 청크 단위 처리를 고려해야 합니다.',
        },
        {
          id: 18,
          question:
            'React Server Components와 startTransition을 함께 사용할 때의 특징은?',
          options: [
            'Server Components에서는 startTransition을 사용할 수 없습니다',
            'startTransition은 Server Components의 로딩 상태를 제어합니다',
            'Server Components의 데이터 패칭에 startTransition이 필요합니다',
            'Client Components에서 Server Components로의 전환 시 startTransition이 유용할 수 있습니다',
          ],
          correctAnswer: 3,
          explanation:
            'Server Components 자체에서는 startTransition을 사용할 수 없지만, Client Components에서 Server Components로의 전환을 관리할 때 startTransition을 사용하면 더 부드러운 사용자 경험을 제공할 수 있습니다.',
        },
        {
          id: 19,
          question:
            'startTransition의 타이밍과 우선순위에 대한 설명으로 옳지 않은 것은?',
          options: [
            'startTransition으로 감싼 업데이트는 긴급한 업데이트에 의해 중단될 수 있습니다',
            '여러 개의 transition이 동시에 시작되면 가장 마지막 것만 적용됩니다',
            'transition의 실행 시간은 React가 자동으로 조절합니다',
            'transition의 우선순위는 개발자가 직접 설정할 수 있습니다',
          ],
          correctAnswer: 3,
          explanation:
            'startTransition의 우선순위는 React가 내부적으로 관리하며, 개발자가 직접 설정할 수 없습니다. 모든 transition은 긴급하지 않은 업데이트로 처리됩니다.',
        },
      ],
    },
    {
      title: '성능 측정과 디버깅',
      description:
        'startTransition 사용 시의 성능 측정과 디버깅 전략을 테스트합니다.',
      questions: [
        {
          id: 20,
          question:
            'startTransition의 성능을 측정하기 위한 가장 적절한 방법은?',
          options: [
            'console.time을 사용하여 실행 시간 측정',
            'React DevTools의 Profiler를 사용하여 렌더링 시간 분석',
            'Chrome DevTools의 Performance 탭 사용',
            '사용자 정의 성능 메트릭 구현',
          ],
          correctAnswer: 1,
          explanation:
            'React DevTools의 Profiler는 컴포넌트의 렌더링 시간과 리렌더링 패턴을 분석할 수 있어, startTransition의 효과를 가장 정확하게 측정할 수 있습니다.',
        },
      ],
    },
  ],
};
