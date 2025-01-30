import { Quiz } from '@/types/quiz.type';

export const quiz: Quiz = {
  title: 'React useState Hook Quiz',
  description:
    'React의 useState Hook의 심화 개념과 주의사항을 테스트하는 퀴즈입니다.',
  categories: [
    {
      title: '상태 업데이트와 배치',
      description: 'useState의 상태 업데이트 메커니즘과 배치 처리',
      questions: [
        {
          id: 1,
          question:
            '다음 코드의 실행 결과는?\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  \n  function handleClick() {\n    setCount(count + 1);\n    setCount(count + 1);\n    setCount(count + 1);\n  }\n  \n  return <button onClick={handleClick}>증가</button>;\n}',
          options: [
            'count가 3 증가',
            'count가 1 증가',
            '컴파일 에러 발생',
            '무한 루프 발생',
          ],
          correctAnswer: 1,
          explanation:
            'setState는 비동기적으로 배치 처리되며, 각 setCount는 동일한 count 값(이전 상태)을 참조합니다. 따라서 모든 setCount는 같은 값으로 상태를 업데이트하여 결과적으로 1만 증가합니다.',
        },
        {
          id: 2,
          question: '다음 중 상태 업데이트가 배치 처리되지 않는 경우는?',
          options: [
            '이벤트 핸들러 내부의 연속된 setState 호출',
            'Promise의 콜백 내부의 setState 호출 (React 17 이하)',
            'useEffect 내부의 setState 호출',
            'setTimeout 내부의 즉시 실행 setState 호출',
          ],
          correctAnswer: 1,
          explanation:
            'React 17 이하에서는 Promise, setTimeout 등 비동기 콜백에서의 상태 업데이트는 배치 처리되지 않았습니다. React 18부터는 자동 배치(automatic batching)가 도입되어 이러한 경우도 배치 처리됩니다.',
        },
        {
          id: 3,
          question: '상태 업데이트 시 불변성을 지키지 않은 코드는?',
          options: [
            'setUsers([...users, newUser])',
            "setUser({ ...user, name: 'John' })",
            'setItems(items.map(item => item.id === id ? { ...item, done: true } : item))',
            'setTodos(todos.push(newTodo))',
          ],
          correctAnswer: 3,
          explanation:
            'Array.push()는 배열을 직접 수정하고 새 길이를 반환합니다. 불변성을 지키려면 스프레드 연산자나 concat 등을 사용하여 새 배열을 생성해야 합니다.',
        },
        {
          id: 4,
          question:
            "다음 코드가 무한 루프를 발생시키는 이유는?\n\nfunction App() {\n  const [user, setUser] = useState({ name: 'John' });\n  \n  useEffect(() => {\n    setUser({ name: user.name });\n  }, [user]);\n  \n  return <div>{user.name}</div>;\n}",
          options: [
            'useEffect의 의존성 배열이 잘못됨',
            'setState가 비동기적으로 동작해서',
            '객체를 직접 수정해서',
            'user가 undefined일 수 있어서',
          ],
          correctAnswer: 0,
          explanation:
            'useEffect의 의존성 배열에 user가 있고, 내부에서 새로운 객체를 생성하여 상태를 업데이트하면 user 참조가 변경되어 useEffect가 다시 실행되는 무한 루프가 발생합니다.',
        },
        {
          id: 5,
          question:
            '다음 코드의 문제점은?\n\nconst [items, setItems] = useState([]);\n\nconst handleAdd = (newItem) => {\n  items.push(newItem);\n  setItems(items);\n};',
          options: [
            'push 메서드 사용',
            '같은 배열 참조를 사용',
            'setState 호출 누락',
            'A와 B 모두',
          ],
          correctAnswer: 3,
          explanation:
            'push는 배열을 직접 수정하고, setItems에 같은 배열 참조를 전달하므로 React는 상태 변경을 감지하지 못합니다. 스프레드 연산자로 새 배열을 생성해야 합니다.',
        },
        {
          id: 6,
          question:
            '복잡한 객체 상태에서 중첩된 업데이트를 처리하는 가장 좋은 방법은?',
          options: [
            '객체를 직접 수정 후 setState 호출',
            '모든 중첩 레벨을 스프레드 연산자로 복사',
            'Immer 같은 불변성 라이브러리 사용',
            '항상 단순한 구조로 상태 분리',
          ],
          correctAnswer: 2,
          explanation:
            '깊은 중첩 구조의 객체 상태를 다룰 때는 Immer 같은 불변성 라이브러리를 사용하는 것이 가장 안전하고 편리합니다. 직접 불변성을 유지하려면 코드가 복잡해지고 실수하기 쉽습니다.',
        },
        {
          id: 7,
          question: '함수형 업데이트가 필요한 경우는?',
          options: [
            '모든 상태 업데이트',
            '비동기 로직 내부의 상태 업데이트',
            '이전 상태를 기반으로 하는 업데이트',
            '객체나 배열 상태 업데이트',
          ],
          correctAnswer: 2,
          explanation:
            '이전 상태를 기반으로 업데이트할 때는 함수형 업데이트를 사용해야 합니다. 특히 여러 업데이트가 동시에 발생하거나 비동기 로직에서 최신 상태를 보장해야 할 때 중요합니다.',
        },
        {
          id: 8,
          question: 'lazy initial state가 필요한 경우는?',
          options: [
            '모든 초기 상태 설정',
            'localStorage에서 데이터를 읽는 경우',
            'API 호출이 필요한 경우',
            '단순한 원시값 초기화',
          ],
          correctAnswer: 1,
          explanation:
            'localStorage 접근, 복잡한 계산 등 비용이 큰 초기화 작업에는 lazy initial state를 사용해야 합니다. 단순한 값 할당은 직접 전달해도 됩니다.',
        },
      ],
    },
    {
      title: '성능 최적화와 패턴',
      description: 'useState의 성능 최적화와 실제 사용 패턴',
      questions: [
        {
          id: 9,
          question: '컴포넌트 리렌더링 최적화와 관련하여 잘못된 설명은?',
          options: [
            'setState 호출은 항상 리렌더링을 트리거한다',
            '동일한 값으로 setState를 호출해도 리렌더링이 발생한다',
            'Object.is로 비교했을 때 같은 값이면 리렌더링을 건너뛴다',
            'useState는 내부적으로 상태 변경을 최적화한다',
          ],
          correctAnswer: 0,
          explanation:
            'setState 호출이 이전과 동일한 값(Object.is 비교)일 경우 React는 리렌더링을 건너뜁니다. 이는 React의 중요한 성능 최적화 중 하나입니다.',
        },
        {
          id: 10,
          question:
            "다음 코드의 성능 문제 원인은?\n\nfunction SearchResults() {\n  const [query, setQuery] = useState('');\n  \n  return (\n    <div>\n      <input\n        value={query}\n        onChange={(e) => setQuery(e.target.value)}\n      />\n      <ExpensiveList\n        filter={() => filterItems(query)}\n      />\n    </div>\n  );\n}",
          options: [
            'useState 대신 useRef를 사용해야 함',
            '인라인 함수로 인한 불필요한 리렌더링',
            'query 상태 업데이트가 너무 잦음',
            'input이 제어 컴포넌트임',
          ],
          correctAnswer: 1,
          explanation:
            'filter prop에 매 렌더링마다 새로운 함수가 생성되어 전달되므로, ExpensiveList 컴포넌트가 React.memo로 최적화되어 있어도 불필요한 리렌더링이 발생합니다. useCallback을 사용해야 합니다.',
        },
        {
          id: 11,
          question: '상태 업데이트 로직이 복잡해질 때 가장 적절한 해결 방법은?',
          options: [
            '여러 개의 useState 사용',
            '하나의 큰 객체로 상태 관리',
            'useReducer로 전환',
            '전역 상태 관리 도입',
          ],
          correctAnswer: 2,
          explanation:
            '상태 업데이트 로직이 복잡해지거나 여러 상태가 서로 연관되어 있을 때는 useReducer로 전환하는 것이 좋습니다. 이는 상태 업데이트 로직을 한 곳에서 관리할 수 있게 해줍니다.',
        },
        {
          id: 12,
          question: '다음 중 useState를 사용한 파생 상태 관리의 올바른 방법은?',
          options: [
            'useEffect로 파생 상태 동기화',
            '파생 값을 직접 계산',
            '별도의 상태로 관리',
            'useMemo로 캐시',
          ],
          correctAnswer: 1,
          explanation:
            '파생 상태는 가능한 한 상태로 저장하지 않고 렌더링 중에 직접 계산하는 것이 좋습니다. 이는 상태 동기화 문제를 방지하고 코드를 단순화합니다.',
        },
        {
          id: 13,
          question:
            "다음 코드의 잠재적 문제점은?\n\nfunction UserProfile() {\n  const [user, setUser] = useState(() => {\n    const userData = localStorage.getItem('user');\n    return userData ? JSON.parse(userData) : null;\n  });\n  \n  useEffect(() => {\n    localStorage.setItem('user', JSON.stringify(user));\n  }, [user]);\n  \n  // ...\n}",
          options: [
            '초기화 함수가 불필요함',
            '무한 루프 발생 가능성',
            'JSON 파싱 오류 처리 누락',
            '불필요한 저장소 접근',
          ],
          correctAnswer: 2,
          explanation:
            'localStorage 데이터의 JSON 파싱 시 발생할 수 있는 오류를 처리하지 않고 있습니다. try-catch로 오류를 처리하고 잘못된 데이터의 경우 기본값을 사용해야 합니다.',
        },
        {
          id: 14,
          question:
            'React 18의 자동 배치(Automatic Batching)와 관련하여 옳은 설명은?',
          options: [
            '모든 상태 업데이트가 항상 배치됨',
            '배치를 비활성화할 수 없음',
            'Promise 내부의 업데이트도 배치됨',
            '클래스 컴포넌트에서는 작동하지 않음',
          ],
          correctAnswer: 2,
          explanation:
            'React 18부터는 모든 상태 업데이트(Promise, setTimeout, 네이티브 이벤트 핸들러 등)가 자동으로 배치됩니다. 이는 성능 향상에 도움이 되며, 필요한 경우 flushSync로 배치를 비활성화할 수 있습니다.',
        },
        {
          id: 15,
          question:
            '다음 상황에서 가장 적절한 해결 방법은?\n\nconst [items, setItems] = useState([]);\nconst [selected, setSelected] = useState(null);\n\n// 선택된 항목이 삭제될 때 selected 상태도 업데이트해야 함',
          options: [
            '두 상태를 하나의 객체로 결합',
            'useEffect로 동기화',
            '상태 업데이트를 함수로 래핑',
            'useReducer로 전환',
          ],
          correctAnswer: 3,
          explanation:
            '여러 상태가 서로 의존적으로 업데이트되어야 할 때는 useReducer를 사용하는 것이 좋습니다. 이를 통해 관련 상태 업데이트를 하나의 액션으로 처리할 수 있습니다.',
        },
        {
          id: 16,
          question: '상태 초기화가 필요한 key prop 패턴 사용 시 주의할 점은?',
          options: [
            '메모리 누수 가능성',
            '불필요한 리렌더링',
            '컴포넌트 언마운트/리마운트',
            '상태 지속성 보장 어려움',
          ],
          correctAnswer: 2,
          explanation:
            'key prop을 변경하면 React는 컴포넌트를 완전히 새로 마운트합니다. 이는 모든 하위 컴포넌트도 다시 마운트되므로, 성능에 영향을 줄 수 있으며 불필요한 리마운트를 피해야 합니다.',
        },
      ],
    },
    {
      title: '에러 처리와 고급 패턴',
      description: 'useState의 에러 처리와 고급 사용 패턴',
      questions: [
        {
          id: 17,
          question:
            '다음 코드에서 발생할 수 있는 race condition을 해결하는 가장 좋은 방법은?\n\nfunction SearchResults() {\n  const [results, setResults] = useState([]);\n\n  async function handleSearch(query) {\n    const data = await fetchResults(query);\n    setResults(data);\n  }\n}',
          options: [
            'useCallback으로 handleSearch 메모이제이션',
            '검색 전에 결과 초기화',
            'AbortController 사용 및 요청 ID 추적',
            '동기식으로 변경',
          ],
          correctAnswer: 2,
          explanation:
            '비동기 요청에서 race condition을 방지하려면 AbortController로 이전 요청을 취소하고, 요청 ID를 추적하여 마지막 요청의 결과만 반영해야 합니다.',
        },
        {
          id: 18,
          question:
            "다음 상황에서 가장 적절한 에러 처리 방법은?\n\nconst [formData, setFormData] = useState(() => {\n  try {\n    return JSON.parse(localStorage.getItem('formData'));\n  } catch {\n    return null;\n  }\n});",
          options: [
            'try-catch 제거',
            '에러 발생 시 빈 객체 반환',
            '초기화 함수 대신 useEffect 사용',
            '기본값과 타입 검증을 포함한 더 강건한 초기화',
          ],
          correctAnswer: 3,
          explanation:
            'localStorage의 데이터는 손상되거나 예상치 못한 형식일 수 있습니다. 단순히 null을 반환하는 대신, 기본값을 제공하고 데이터 구조를 검증하여 안전한 초기 상태를 보장해야 합니다.',
        },
        {
          id: 19,
          question:
            '상태 업데이트 중 에러가 발생할 때 이전 상태로 롤백하는 가장 좋은 방법은?',
          options: [
            'try-catch 블록 내에서 이전 상태 저장 후 복원',
            '모든 상태 업데이트를 트랜잭션으로 래핑',
            '상태 업데이트 전에 백업 생성',
            'useReducer로 전환하여 에러 처리 통합',
          ],
          correctAnswer: 3,
          explanation:
            '복잡한 상태 업데이트에서 에러 처리가 필요한 경우, useReducer를 사용하면 에러 처리 로직을 중앙화하고 롤백 메커니즘을 구현하기 쉽습니다.',
        },
        {
          id: 20,
          question:
            '다음 코드의 메모리 누수 문제를 해결하는 가장 좋은 방법은?\n\nfunction DataFetcher() {\n  const [data, setData] = useState(null);\n  \n  useEffect(() => {\n    async function fetchData() {\n      const result = await fetch(url);\n      setData(await result.json());\n    }\n    fetchData();\n  }, [url]);\n}',
          options: [
            'cleanup 함수에서 state 초기화',
            'AbortController 사용 및 cleanup에서 abort 호출',
            'useRef로 마운트 상태 추적',
            'try-catch 블록 추가',
          ],
          correctAnswer: 1,
          explanation:
            '비동기 작업이 완료되기 전에 컴포넌트가 언마운트되면 메모리 누수가 발생할 수 있습니다. AbortController를 사용하여 진행 중인 요청을 취소하고, cleanup 함수에서 abort를 호출해야 합니다.',
        },
        {
          id: 21,
          question:
            'useState와 Context를 함께 사용할 때 성능 최적화를 위한 가장 좋은 방법은?',
          options: [
            '모든 상태를 하나의 Context에 넣기',
            '상태와 dispatch 함수를 별도의 Context로 분리',
            '항상 로컬 상태 사용',
            '메모이제이션된 Context 값 사용',
          ],
          correctAnswer: 1,
          explanation:
            '상태와 dispatch 함수를 별도의 Context로 분리하면, 상태를 사용하지 않고 업데이트만 하는 컴포넌트들이 상태 변경으로 인한 불필요한 리렌더링을 피할 수 있습니다.',
        },
        {
          id: 22,
          question:
            '다음 중 상태 초기화 함수(initializer)에서 하면 안 되는 것은?',
          options: [
            'localStorage 접근',
            '복잡한 계산 수행',
            '비동기 작업 수행',
            'props 기반 계산',
          ],
          correctAnswer: 2,
          explanation:
            '상태 초기화 함수는 동기적이어야 하며 순수해야 합니다. 비동기 작업은 초기화 함수에서 수행할 수 없으며, 대신 useEffect를 사용해야 합니다.',
        },
        {
          id: 23,
          question:
            '다음과 같은 패턴이 안티패턴인 이유는?\n\nconst [state, setState] = useState({});\nconst [loading, setLoading] = useState(false);\nconst [error, setError] = useState(null);\n\n// 데이터 로딩 시\nsetLoading(true);\nsetError(null);\ntry {\n  const data = await fetchData();\n  setState(data);\n} catch (err) {\n  setError(err);\n} finally {\n  setLoading(false);\n}',
          options: [
            '너무 많은 상태 변수 사용',
            '동기화되지 않은 상태 업데이트',
            '에러 처리가 불완전함',
            '불필요한 리렌더링 발생',
          ],
          correctAnswer: 1,
          explanation:
            '여러 관련된 상태 업데이트가 동기화되지 않아 중간 상태가 잘못될 수 있습니다. 이러한 패턴은 useReducer로 리팩토링하거나, 상태를 하나의 객체로 통합하여 한 번에 업데이트하는 것이 좋습니다.',
        },
        {
          id: 24,
          question:
            '컴포넌트의 생명주기 동안 변경되지 않아야 하는 값을 잘못 다루는 경우는?',
          options: [
            'useState로 관리',
            'useRef로 관리',
            '일반 변수로 선언',
            'useMemo로 계산',
          ],
          correctAnswer: 0,
          explanation:
            '컴포넌트의 생명주기 동안 변경되지 않아야 하는 값을 useState로 관리하는 것은 부적절합니다. 이러한 값은 useRef를 사용하거나 컴포넌트 외부에 상수로 선언하는 것이 더 적절합니다.',
        },
      ],
    },
  ],
};
