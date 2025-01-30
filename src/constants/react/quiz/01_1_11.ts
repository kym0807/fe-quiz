import { Quiz } from '@/types/quiz.type';

export const quiz: Quiz = {
  title: 'useMemo 마스터하기',
  description:
    'useMemo의 개념, 사용법, 성능 최적화, 문제 해결에 대한 종합 퀴즈입니다.',
  categories: [
    {
      title: '기본 개념',
      description: 'useMemo의 기본적인 개념과 사용법을 이해합니다.',
      questions: [
        {
          id: 1,
          question: 'useMemo의 주요 목적은 무엇인가요?',
          options: [
            '컴포넌트의 상태를 관리하기 위해',
            '리렌더링 사이에 계산 결과를 캐시하기 위해',
            '컴포넌트의 생명주기를 관리하기 위해',
            '비동기 작업을 처리하기 위해',
          ],
          correctAnswer: 1,
          explanation:
            'useMemo는 리렌더링 사이에 계산 결과를 캐시하여 불필요한 재계산을 방지하는 것이 주요 목적입니다.',
        },
        {
          id: 2,
          question: 'useMemo의 매개변수에 대한 설명으로 올바른 것은?',
          options: [
            '첫 번째 매개변수는 초기값이고, 두 번째는 의존성 배열이다',
            '첫 번째 매개변수는 계산 함수이고, 두 번째는 의존성 배열이다',
            '첫 번째 매개변수는 콜백 함수이고, 두 번째는 초기값이다',
            '첫 번째 매개변수는 객체이고, 두 번째는 업데이트 함수이다',
          ],
          correctAnswer: 1,
          explanation:
            'useMemo는 첫 번째 매개변수로 캐시하고자 하는 값을 계산하는 함수를, 두 번째 매개변수로 의존성 배열을 받습니다.',
        },
        {
          id: 3,
          question: '다음 중 useMemo를 사용하기에 가장 적절한 상황은?',
          options: [
            'API 호출을 캐싱할 때',
            '이벤트 핸들러를 정의할 때',
            '복잡한 계산이 필요하고 의존성이 자주 변경되지 않을 때',
            '컴포넌트의 스타일을 동적으로 변경할 때',
          ],
          correctAnswer: 2,
          explanation:
            'useMemo는 복잡한 계산이 필요하고 의존성이 자주 변경되지 않는 상황에서 사용하는 것이 가장 적절합니다.',
        },
        {
          id: 4,
          question:
            '다음 코드의 문제점은 무엇인가요?\n\nconst value = useMemo(() => {\n  return x + y;\n});',
          options: [
            '의존성 배열이 누락되었다',
            '계산 함수가 너무 단순하다',
            '반환값이 없다',
            'useMemo가 잘못된 위치에서 사용되었다',
          ],
          correctAnswer: 0,
          explanation:
            'useMemo는 두 번째 매개변수로 의존성 배열을 필요로 합니다. 의존성 배열이 누락되면 매 렌더링마다 계산이 다시 실행됩니다.',
        },
        {
          id: 5,
          question: 'useMemo의 반환값 특성으로 올바른 것은?',
          options: [
            '항상 객체를 반환한다',
            '초기 렌더링과 의존성 변경 시에만 계산 함수를 실행하고, 그 외에는 캐시된 값을 반환한다',
            'Promise를 반환할 수 없다',
            'undefined를 반환할 수 없다',
          ],
          correctAnswer: 1,
          explanation:
            'useMemo는 초기 렌더링 시와 의존성이 변경될 때만 계산 함수를 실행하고, 그 외의 경우에는 이전에 캐시된 값을 반환합니다.',
        },
      ],
    },
    {
      title: '성능 최적화',
      description: 'useMemo를 사용한 성능 최적화 전략을 이해합니다.',
      questions: [
        {
          id: 6,
          question: '다음 중 useMemo 사용을 고려해야 하는 경우가 아닌 것은?',
          options: [
            '계산이 눈에 띄게 느리고 의존성이 거의 변경되지 않는 경우',
            'memo로 감싼 컴포넌트에 전달되는 prop인 경우',
            '단순한 문자열 연결 연산을 수행하는 경우',
            '다른 Hook의 의존성으로 사용되는 값인 경우',
          ],
          correctAnswer: 2,
          explanation:
            '단순한 문자열 연결과 같은 가벼운 연산은 메모이제이션 오버헤드가 더 클 수 있어 useMemo가 필요하지 않습니다.',
        },
      ],
    },

    {
      title: '실전 응용',
      description: 'useMemo의 실제 사용 시나리오와 최적화 전략',
      questions: [
        {
          id: 7,
          question:
            '다음 코드에서 발생할 수 있는 문제점은 무엇인가요?\n\nfunction SearchResults({ query, results }) {\n  const filteredResults = useMemo(() => {\n    return results.filter(item =>\n      item.text.toLowerCase().includes(query.toLowerCase())\n    );\n  }, [results]);\n  return <List items={filteredResults} />;\n}',
          options: [
            'results가 undefined일 때 오류가 발생할 수 있다',
            'query가 의존성 배열에 없어 검색이 제대로 작동하지 않는다',
            'List 컴포넌트가 memo로 감싸져 있지 않아 성능 최적화가 무의미하다',
            'filter 함수가 너무 간단해서 useMemo가 불필요하다',
          ],
          correctAnswer: 1,
          explanation:
            'query가 의존성 배열에 포함되어 있지 않아, query가 변경되어도 필터링이 다시 실행되지 않습니다.',
        },
        {
          id: 8,
          question: 'Effect와 함께 useMemo를 사용할 때의 올바른 패턴은?',
          options: [
            'Effect 내부에서 useMemo를 호출한다',
            'useMemo로 Effect의 의존성을 최적화한다',
            'Effect와 useMemo는 함께 사용하면 안 된다',
            'Effect의 cleanup 함수를 useMemo로 감싼다',
          ],
          correctAnswer: 1,
          explanation:
            'useMemo를 사용하여 Effect의 의존성을 최적화하면, 불필요한 Effect 재실행을 방지할 수 있습니다.',
        },
        {
          id: 9,
          question: '다음 중 JSX에서 useMemo를 사용할 때의 올바른 패턴은?',
          options: [
            '모든 JSX 요소를 useMemo로 감싸서 리렌더링을 최적화한다',
            '컴포넌트를 memo로 감싸고, props를 useMemo로 최적화한다',
            'JSX를 생성하는 함수를 useMemo로 감싼다',
            '이벤트 핸들러를 포함한 모든 콜백을 useMemo로 감싼다',
          ],
          correctAnswer: 1,
          explanation:
            '컴포넌트를 memo로 감싸고, 해당 컴포넌트에 전달되는 props를 useMemo로 최적화하는 것이 가장 효과적인 패턴입니다.',
        },
        {
          id: 10,
          question: 'Strict Mode에서 useMemo 사용 시 주의할 점은?',
          options: [
            'Strict Mode에서는 useMemo를 사용할 수 없다',
            '계산 함수가 두 번 실행될 수 있으므로 순수 함수여야 한다',
            '의존성 배열이 비어있어야 한다',
            'cleanup 함수가 필요하다',
          ],
          correctAnswer: 1,
          explanation:
            'React의 Strict Mode에서는 개발 중에 계산 함수가 두 번 실행될 수 있으므로, 계산 함수는 반드시 순수해야 합니다.',
        },
        {
          id: 11,
          question:
            "다음 코드의 성능 개선을 위한 가장 적절한 방법은?\n\nfunction ProductList({ products, category }) {\n  const options = {\n    sortBy: 'price',\n    category: category\n  };\n\n  const sortedProducts = useMemo(() => {\n    return sortProducts(products, options);\n  }, [products, options]);\n\n  return <List items={sortedProducts} />;\n}",
          options: [
            'options 객체를 컴포넌트 외부로 이동한다',
            'options 객체를 useMemo 내부로 이동하고 category만 의존성으로 사용한다',
            'List 컴포넌트를 memo로 감싼다',
            'sortProducts 함수를 useCallback으로 감싼다',
          ],
          correctAnswer: 1,
          explanation:
            'options 객체를 useMemo 계산 함수 내부로 이동하고 category만 의존성으로 사용하면, 불필요한 재계산을 방지할 수 있습니다.',
        },
      ],
    },
    {
      title: '디버깅과 최적화',
      description: 'useMemo 사용 시 발생하는 문제 해결과 성능 최적화',
      questions: [
        {
          id: 12,
          question: 'useMemo의 성능을 측정하는 가장 효과적인 방법은?',
          options: [
            'console.time으로 실행 시간을 측정한다',
            'React DevTools Profiler에서 렌더링 시간을 확인한다',
            'Chrome Performance 탭에서 전체적인 성능을 분석한다',
            '단순히 코드 실행 결과를 확인한다',
          ],
          correctAnswer: 2,
          explanation:
            'Chrome Performance 탭을 사용하면 메모이제이션의 효과와 전반적인 성능 영향을 가장 정확하게 측정할 수 있습니다.',
        },
        {
          id: 13,
          question: '루프 내에서 useMemo를 사용하려 할 때 올바른 해결 방법은?',
          options: [
            '각 반복마다 새로운 key를 생성하여 useMemo를 사용한다',
            '루프를 포함하는 컴포넌트 전체를 useMemo로 감싼다',
            '개별 항목을 처리하는 새로운 컴포넌트를 만들어 그 안에서 useMemo를 사용한다',
            'useMemo 대신 useEffect를 사용한다',
          ],
          correctAnswer: 2,
          explanation:
            'Hook은 루프 내에서 직접 사용할 수 없으므로, 개별 항목을 처리하는 새로운 컴포넌트를 만들어 그 안에서 useMemo를 사용해야 합니다.',
        },
        {
          id: 14,
          question:
            '다음 중 메모이제이션의 남용을 피하기 위한 가장 좋은 방법은?',
          options: [
            '모든 계산에 useMemo를 사용한다',
            '성능 측정을 통해 실제로 필요한 경우에만 메모이제이션을 적용한다',
            '메모이제이션을 전혀 사용하지 않는다',
            '모든 컴포넌트를 memo로 감싼다',
          ],
          correctAnswer: 1,
          explanation:
            '메모이제이션은 오버헤드가 있으므로, 성능 측정을 통해 실제로 이점이 있는 경우에만 선택적으로 적용해야 합니다.',
        },
      ],
    },

    {
      title: '고급 활용과 타입스크립트',
      description: 'useMemo의 타입 안전성과 고급 사용 패턴',
      questions: [
        {
          id: 15,
          question:
            'TypeScript에서 useMemo를 사용할 때 다음 코드의 문제점은?\n\nconst value = useMemo<number[]>(() => {\n  if (data === undefined) return;\n  return data.map(x => x * 2);\n}, [data]);',
          options: [
            '제네릭 타입이 잘못 지정되었다',
            '반환 타입이 number[] | undefined가 될 수 있는데 타입 정의가 불완전하다',
            'data의 타입이 명시되지 않았다',
            'map 함수의 콜백에 타입 정의가 필요하다',
          ],
          correctAnswer: 1,
          explanation:
            '조건부 반환으로 인해 undefined가 반환될 수 있으므로, 제네릭 타입을 number[] | undefined로 명시해야 합니다.',
        },
        {
          id: 16,
          question:
            'useMemo와 React.memo를 함께 사용할 때 가장 효과적인 패턴은?',
          options: [
            '모든 props를 useMemo로 감싸고 컴포넌트를 memo로 감싼다',
            '객체나 배열 props만 useMemo로 처리하고, 원시값은 그대로 전달한다',
            'memo 대신 모든 값을 useMemo로 처리한다',
            'props를 받는 쪽에서 모든 처리를 memo 내부에서 한다',
          ],
          correctAnswer: 1,
          explanation:
            '참조 동일성이 중요한 객체나 배열 props만 useMemo로 처리하고, 원시값은 그대로 전달하는 것이 가장 효율적입니다.',
        },
        {
          id: 17,
          question:
            '다음 중 useMemo와 useCallback의 조합 사용에 대한 올바른 설명은?',
          options: [
            'useCallback은 내부적으로 useMemo를 사용하므로 함께 사용할 필요가 없다',
            '함수가 객체를 생성하는 경우 useCallback과 useMemo를 중첩해서 사용해야 한다',
            '복잡한 계산을 수행하는 콜백의 경우 useMemo로 결과를 캐싱하고, 그 함수를 useCallback으로 감싸는 것이 효율적이다',
            '항상 useMemo 대신 useCallback을 사용해야 한다',
          ],
          correctAnswer: 2,
          explanation:
            '복잡한 계산의 경우, 계산 결과는 useMemo로 캐싱하고 그 함수는 useCallback으로 감싸서 최적화하는 것이 가장 효율적입니다.',
        },
        {
          id: 18,
          question:
            'SSR(Server Side Rendering) 환경에서 useMemo 사용 시 고려해야 할 사항은?',
          options: [
            '서버에서는 useMemo가 작동하지 않으므로 사용하면 안 된다',
            '서버와 클라이언트의 초기 렌더링 결과가 일치하도록 주의해야 한다',
            '서버에서는 모든 계산을 즉시 실행해야 한다',
            'SSR에서는 useEffect로 대체해야 한다',
          ],
          correctAnswer: 1,
          explanation:
            'SSR 환경에서는 서버와 클라이언트의 초기 렌더링 결과가 일치해야 하이드레이션이 올바르게 동작합니다.',
        },
        {
          id: 19,
          question:
            "다음 테스트 코드의 문제점은?\n\ntest('memoized value', () => {\n  const { result } = renderHook(() => {\n    return useMemo(() => expensiveCalculation(), []);\n  });\n  expect(result.current).toBe(expectedValue);\n});",
          options: [
            'renderHook을 잘못 사용했다',
            '의존성 배열이 비어있어 테스트가 부정확하다',
            'act로 감싸지 않았다',
            'expensiveCalculation이 모킹되지 않았다',
          ],
          correctAnswer: 3,
          explanation:
            '테스트에서는 expensiveCalculation을 모킹하여 예측 가능한 결과를 보장해야 합니다.',
        },
      ],
    },
    {
      title: '실전 문제 해결',
      description: '실제 개발 현장에서 마주치는 복잡한 시나리오',
      questions: [
        {
          id: 20,
          question:
            '다음과 같은 성능 문제가 발생할 때 가장 적절한 해결 방법은?\n\nconst MassiveList = ({ items, filter }) => {\n  const processedItems = useMemo(() => {\n    return items.map(item => heavyProcessing(item));\n  }, [items]);\n\n  const filteredItems = processedItems.filter(filter);\n  return <List items={filteredItems} />;\n};',
          options: [
            'heavyProcessing 함수를 최적화한다',
            'filter 함수도 의존성에 추가한다',
            'processedItems와 filteredItems 모두 useMemo로 감싼다',
            '가상화(virtualization)를 적용하고 필요한 항목만 처리한다',
          ],
          correctAnswer: 3,
          explanation:
            '대량의 데이터를 처리할 때는 가상화를 적용하여 화면에 보이는 항목만 처리하는 것이 가장 효율적입니다.',
        },
        {
          id: 21,
          question: '마이크로 프론트엔드 환경에서 useMemo 사용 시 주의할 점은?',
          options: [
            '다른 마이크로 프론트엔드와 메모이제이션된 값을 공유할 수 없다',
            '각 마이크로 프론트엔드의 React 인스턴스가 독립적이므로 메모리 사용량을 고려해야 한다',
            '마이크로 프론트엔드 간에는 useMemo를 사용할 수 없다',
            '항상 전역 상태와 함께 사용해야 한다',
          ],
          correctAnswer: 1,
          explanation:
            '각 마이크로 프론트엔드는 독립적인 React 인스턴스를 가지므로, 메모리 사용량과 성능 영향을 고려하여 메모이제이션 전략을 세워야 합니다.',
        },
      ],
    },
  ],
};
