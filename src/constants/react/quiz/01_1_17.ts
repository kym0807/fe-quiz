import { Quiz } from '@/types/quiz.type';

export const quiz: Quiz = {
  title: 'React useTransition Hook Quiz',
  description:
    'React의 useTransition Hook에 대한 이해를 테스트하는 퀴즈입니다.',
  categories: [
    {
      title: '기본 개념',
      description: 'useTransition의 기본 개념과 사용법',
      questions: [
        {
          id: 1,
          question: 'useTransition Hook의 주요 목적은 무엇인가요?',
          options: [
            '비동기 상태 관리',
            '애니메이션 처리',
            '긴급하지 않은 UI 업데이트를 백그라운드에서 처리',
            '컴포넌트 간 상태 공유',
          ],
          correctAnswer: 2,
          explanation:
            'useTransition은 일부 상태 업데이트를 긴급하지 않은 전환으로 표시하여 UI의 반응성을 유지하면서 대규모 업데이트를 수행할 수 있게 해주는 Hook입니다.',
        },
        {
          id: 2,
          question:
            "다음 코드의 문제점은?\n\nfunction InputField() {\n  const [text, setText] = useState('');\n  const [isPending, startTransition] = useTransition();\n\n  return (\n    <input\n      value={text}\n      onChange={e => {\n        startTransition(() => {\n          setText(e.target.value);\n        });\n      }}\n    />\n  );\n}",
          options: [
            'useTransition 호출 위치가 잘못됨',
            '텍스트 입력에 transition을 사용할 수 없음',
            'startTransition 사용법이 잘못됨',
            'isPending 처리가 누락됨',
          ],
          correctAnswer: 1,
          explanation:
            '텍스트 입력과 같은 직접적인 사용자 입력 처리에는 transition을 사용할 수 없습니다. 대신 두 개의 상태(즉시 업데이트되는 상태와 지연된 상태)를 사용해야 합니다.',
        },
        {
          id: 3,
          question:
            'useTransition의 반환값 중 isPending의 용도로 가장 적절한 것은?',
          options: [
            '에러 상태 표시',
            '로딩 인디케이터 표시',
            '비동기 작업 상태 관리',
            '데이터 유효성 검사',
          ],
          correctAnswer: 1,
          explanation:
            'isPending은 현재 진행 중인 transition이 있는지를 나타내며, 주로 로딩 인디케이터를 표시하는 데 사용됩니다.',
        },
        {
          id: 4,
          question:
            'startTransition으로 감싼 상태 업데이트의 특징이 아닌 것은?',
          options: [
            '중단 가능함',
            '백그라운드에서 처리됨',
            '다른 업데이트보다 우선순위가 높음',
            '여러 업데이트가 자동으로 배치 처리됨',
          ],
          correctAnswer: 2,
          explanation:
            'transition으로 표시된 업데이트는 긴급하지 않은(낮은 우선순위) 업데이트로 처리되며, 긴급한 업데이트(예: 사용자 입력)에 의해 중단될 수 있습니다.',
        },
        {
          id: 5,
          question: '다음 중 useTransition 사용이 가장 적절한 경우는?',
          options: [
            '폼 입력 값 업데이트',
            '대규모 리스트 필터링',
            '실시간 알림 처리',
            'API 호출 상태 관리',
          ],
          correctAnswer: 1,
          explanation:
            '대규모 리스트 필터링과 같은 무거운 계산이 필요한 UI 업데이트는 useTransition을 사용하기 적합한 경우입니다. 이를 통해 UI 반응성을 유지하면서 필터링을 수행할 수 있습니다.',
        },
        {
          id: 6,
          question:
            'Suspense와 useTransition을 함께 사용할 때의 특징이 아닌 것은?',
          options: [
            '이미 표시된 컨텐츠를 유지함',
            '중첩된 Suspense 경계에도 영향을 줌',
            '새 컨텐츠가 준비될 때까지 이전 UI 유지',
            '불필요한 로딩 표시기 방지',
          ],
          correctAnswer: 1,
          explanation:
            '중첩된 Suspense 경계는 transition의 영향을 받지 않습니다. 각 Suspense 경계는 독립적으로 동작합니다.',
        },
        {
          id: 7,
          question:
            '다음 코드의 문제점은?\n\nstartTransition(async () => {\n  const data = await fetchData();\n  setData(data);\n});',
          options: [
            'async/await 사용 불가',
            'await 이후 상태 업데이트가 transition으로 처리되지 않음',
            'setData 호출이 잘못됨',
            'fetchData 호출이 잘못됨',
          ],
          correctAnswer: 1,
          explanation:
            'await 이후의 상태 업데이트는 transition의 일부로 처리되지 않습니다. await 이후에 다시 startTransition으로 상태 업데이트를 감싸야 합니다.',
        },
        {
          id: 8,
          question: 'useTransition 사용 시 주의해야 할 사항이 아닌 것은?',
          options: [
            '컴포넌트 최상위 레벨에서만 호출 가능',
            '비동기 콜백 내부의 상태 업데이트는 별도 처리 필요',
            '입력 제어에는 직접 사용 불가',
            '여러 transition을 동시에 시작할 수 없음',
          ],
          correctAnswer: 3,
          explanation:
            '여러 transition을 동시에 시작하는 것은 가능하며, React는 이들을 자동으로 배치 처리합니다. 다른 옵션들은 모두 실제 주의해야 할 사항들입니다.',
        },
      ],
    },
    {
      title: '실제 구현과 에러 처리',
      description: 'useTransition의 실제 구현 패턴과 에러 처리',
      questions: [
        {
          id: 9,
          question:
            "다음 상황에서 가장 적절한 에러 처리 방법은?\n\nfunction TabContent() {\n  const [isPending, startTransition] = useTransition();\n  \n  function switchTab() {\n    startTransition(() => {\n      // 에러가 발생할 수 있는 무거운 계산\n      processData();\n      setTab('new');\n    });\n  }\n}",
          options: [
            'try-catch로 직접 에러 처리',
            'ErrorBoundary로 감싸기',
            '에러 상태 추가하기',
            '비동기 함수로 변경',
          ],
          correctAnswer: 1,
          explanation:
            'transition 내부에서 발생하는 에러는 ErrorBoundary로 처리하는 것이 가장 적절합니다. ErrorBoundary는 React의 선언적 에러 처리 메커니즘을 제공하며, 컴포넌트 트리의 어느 위치에서든 에러를 잡을 수 있습니다.',
        },
        {
          id: 10,
          question: '라우터에서 useTransition을 사용할 때의 장점이 아닌 것은?',
          options: [
            '네비게이션이 중단 가능',
            '자동 에러 처리',
            '불필요한 로딩 표시 방지',
            '사이드 이펙트 완료 대기',
          ],
          correctAnswer: 1,
          explanation:
            'useTransition은 자동 에러 처리 기능을 제공하지 않습니다. 에러 처리는 별도로 구현해야 합니다. 다른 장점들(중단 가능한 네비게이션, 로딩 표시 최적화, 사이드 이펙트 처리)은 모두 유효합니다.',
        },
        {
          id: 11,
          question:
            "다음 코드에서 race condition을 방지하는 가장 좋은 방법은?\n\nfunction SearchResults() {\n  const [query, setQuery] = useState('');\n  const [results, setResults] = useState([]);\n  const [isPending, startTransition] = useTransition();\n\n  async function search(q) {\n    const data = await fetchResults(q);\n    startTransition(() => {\n      setResults(data);\n    });\n  }\n}",
          options: [
            'useEffect 사용',
            '검색 요청 취소 및 ID 추적',
            '디바운싱 추가',
            '에러 상태 추가',
          ],
          correctAnswer: 1,
          explanation:
            '비동기 요청과 함께 useTransition을 사용할 때는 이전 요청을 취소하고 각 요청의 ID를 추적하여 마지막 요청의 결과만 반영하도록 해야 race condition을 방지할 수 있습니다.',
        },
        {
          id: 12,
          question:
            '여러 개의 transition을 순차적으로 처리해야 할 때 가장 적절한 방법은?',
          options: [
            'Promise.all 사용',
            '각각을 별도의 useTransition으로 관리',
            '상태 업데이트를 하나의 transition으로 묶기',
            'useEffect로 처리',
          ],
          correctAnswer: 2,
          explanation:
            '관련된 여러 상태 업데이트는 하나의 startTransition 콜백 내에서 처리하는 것이 좋습니다. React는 이를 자동으로 배치 처리하여 일관된 UI 업데이트를 보장합니다.',
        },
        {
          id: 13,
          question:
            '다음 중 transition 업데이트가 중단될 수 있는 경우가 아닌 것은?',
          options: [
            '새로운 사용자 입력 발생',
            '우선순위가 높은 상태 업데이트 발생',
            '네트워크 요청 완료',
            '다른 transition 시작',
          ],
          correctAnswer: 2,
          explanation:
            'transition은 새로운 사용자 입력이나 우선순위가 높은 업데이트가 발생할 때 중단될 수 있습니다. 네트워크 요청 완료는 transition을 중단시키는 요인이 아닙니다.',
        },
        {
          id: 14,
          question:
            'useDeferredValue 대신 useTransition을 사용해야 하는 경우는?',
          options: [
            '부모로부터 받은 props를 지연시킬 때',
            '입력 값을 기반으로 필터링할 때',
            '상태 업데이트를 직접 제어해야 할 때',
            '데이터 fetching을 할 때',
          ],
          correctAnswer: 2,
          explanation:
            '상태 업데이트의 타이밍을 직접 제어해야 하는 경우 useTransition을 사용하는 것이 적절합니다. useDeferredValue는 값의 지연만 처리하며, 업데이트 프로세스를 직접 제어할 수 없습니다.',
        },
        {
          id: 15,
          question:
            'Suspense와 함께 useTransition을 사용할 때 발생할 수 있는 문제가 아닌 것은?',
          options: [
            '불필요한 suspense 폴백 표시',
            '데이터 불일치',
            '메모리 누수',
            '무한 로딩 상태',
          ],
          correctAnswer: 2,
          explanation:
            'useTransition은 메모리 누수와 직접적인 관련이 없습니다. 주로 불필요한 로딩 상태 표시, 데이터 일관성 문제, 무한 로딩 상태 등의 문제를 다루는 데 사용됩니다.',
        },
        {
          id: 16,
          question:
            '다음 중 useTransition의 성능 최적화 방법으로 올바르지 않은 것은?',
          options: [
            '상태 업데이트를 최소화',
            '모든 상태 업데이트를 transition으로 처리',
            '컴포넌트 분할로 업데이트 범위 제한',
            '불필요한 계산 캐싱',
          ],
          correctAnswer: 1,
          explanation:
            '모든 상태 업데이트를 transition으로 처리하는 것은 좋지 않습니다. 긴급한 업데이트(예: 입력 처리)는 즉시 처리되어야 하며, 실제로 지연이 필요한 무거운 업데이트만 transition으로 처리해야 합니다.',
        },
      ],
    },
    {
      title: '고급 패턴과 성능 최적화',
      description: 'useTransition의 고급 활용 패턴과 성능 최적화',
      questions: [
        {
          id: 17,
          question:
            "다음 코드의 잠재적인 성능 문제는?\n\nfunction DataGrid({ data }) {\n  const [sortConfig, setSortConfig] = useState({ key: 'id', order: 'asc' });\n  const [isPending, startTransition] = useTransition();\n\n  const sortedData = useMemo(() => {\n    return [...data].sort((a, b) => {\n      // 복잡한 정렬 로직\n    });\n  }, [data, sortConfig]);\n\n  return (\n    <div>\n      {sortedData.map(item => (\n        <Row key={item.id} data={item} />\n      ))}\n    </div>\n  );\n}",
          options: [
            'useMemo 사용이 불필요함',
            'transition이 불필요한 계산을 포함',
            '정렬 로직이 메모리를 과다 사용',
            '불필요한 배열 복사 발생',
          ],
          correctAnswer: 1,
          explanation:
            '정렬 로직이 useMemo 내부에 있으면 transition이 정렬 계산을 최적화하지 못합니다. 대신 정렬 로직을 transition 내부로 이동하고, 정렬된 결과를 상태로 관리하는 것이 더 효율적입니다.',
        },
        {
          id: 18,
          question:
            '부모 컴포넌트의 transition이 자식 컴포넌트에 미치는 영향으로 올바른 설명은?',
          options: [
            '자식 컴포넌트의 모든 업데이트가 지연됨',
            '자식 컴포넌트의 Suspense 경계가 무시됨',
            '부모의 transition 상태가 자식에게 전파됨',
            '자식 컴포넌트는 영향을 받지 않음',
          ],
          correctAnswer: 2,
          explanation:
            '부모 컴포넌트의 transition 상태는 자식 컴포넌트에게 전파됩니다. 이는 자식 컴포넌트가 부모의 transition 상태에 따라 적절한 로딩 상태나 UI를 표시할 수 있게 해줍니다.',
        },
        {
          id: 19,
          question:
            'startTransition을 사용한 비동기 데이터 처리의 올바른 패턴은?',
          options: [
            '모든 비동기 작업을 transition으로 래핑',
            '데이터 fetching은 별도로 처리하고 상태 업데이트만 transition으로 래핑',
            'transition 내부에서 직접 비동기 작업 처리',
            '비동기 작업 대신 동기 처리로 변경',
          ],
          correctAnswer: 1,
          explanation:
            '데이터 fetching은 transition 외부에서 처리하고, 가져온 데이터로 상태를 업데이트할 때만 transition을 사용하는 것이 좋습니다. 이렇게 하면 데이터 로딩과 UI 업데이트를 적절히 분리할 수 있습니다.',
        },
        {
          id: 20,
          question:
            'React.lazy와 useTransition을 함께 사용할 때 가장 효과적인 패턴은?',
          options: [
            '모든 동적 임포트를 transition으로 래핑',
            '컴포넌트 로딩 자체는 transition 없이 처리하고 데이터 로딩만 transition으로 처리',
            'Suspense 없이 transition만 사용',
            'transition 대신 useDeferredValue 사용',
          ],
          correctAnswer: 1,
          explanation:
            'React.lazy의 컴포넌트 로딩은 Suspense로 처리하고, 컴포넌트 내부의 데이터 로딩과 상태 업데이트만 transition으로 처리하는 것이 가장 효과적입니다. 이는 코드 분할과 데이터 로딩의 관심사를 적절히 분리합니다.',
        },
        {
          id: 21,
          question:
            '다음 중 transition의 성능 병목을 디버깅하는 가장 효과적인 방법은?',
          options: [
            'console.log 사용',
            'React DevTools의 Profiler 사용',
            '크롬 개발자 도구의 Performance 탭 사용',
            'useEffect로 시간 측정',
          ],
          correctAnswer: 1,
          explanation:
            'React DevTools의 Profiler는 transition의 타이밍, 컴포넌트 리렌더링, 상태 업데이트 등을 자세히 분석할 수 있게 해주므로, transition 관련 성능 문제를 디버깅하는 데 가장 효과적입니다.',
        },
        {
          id: 22,
          question:
            '여러 개의 transition이 동시에 실행될 때 발생할 수 있는 문제를 해결하는 가장 좋은 방법은?',
          options: [
            '각 transition에 우선순위 부여',
            '모든 transition을 순차적으로 실행',
            '관련된 업데이트를 하나의 transition으로 통합',
            'useEffect로 순서 제어',
          ],
          correctAnswer: 2,
          explanation:
            '관련된 여러 상태 업데이트는 하나의 transition으로 통합하는 것이 가장 좋습니다. 이는 업데이트의 일관성을 보장하고, React가 효율적으로 배치 처리할 수 있게 해줍니다.',
        },
        {
          id: 23,
          question:
            '대규모 애플리케이션에서 useTransition 사용 시 고려해야 할 아키텍처 패턴은?',
          options: [
            '모든 상태 업데이트를 글로벌 스토어로 중앙화',
            '컴포넌트별로 독립적인 transition 관리',
            '상태 업데이트를 최대한 분산',
            '모든 transition을 최상위 컴포넌트에서 관리',
          ],
          correctAnswer: 1,
          explanation:
            '각 컴포넌트가 자신의 transition을 독립적으로 관리하는 것이 가장 좋습니다. 이는 컴포넌트의 캡슐화를 유지하고, 불필요한 리렌더링을 방지하며, 코드의 유지보수성을 향상시킵니다.',
        },
        {
          id: 24,
          question:
            '다음 중 성능 최적화를 위한 useTransition 사용 가이드라인으로 적절하지 않은 것은?',
          options: [
            '무거운 계산만 transition으로 처리',
            '가능한 한 많은 상태 업데이트를 transition으로 래핑',
            '컴포넌트 트리의 적절한 위치에서 transition 사용',
            '불필요한 transition 중첩 피하기',
          ],
          correctAnswer: 1,
          explanation:
            '모든 상태 업데이트를 transition으로 처리하는 것은 좋지 않습니다. transition은 실제로 지연이 필요한 무거운 업데이트에만 사용해야 하며, 즉각적인 응답이 필요한 업데이트(예: 입력값 변경)에는 사용하지 않아야 합니다.',
        },
      ],
    },
  ],
};
