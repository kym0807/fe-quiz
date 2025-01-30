import { Quiz } from '@/types/quiz.type';

export const quiz: Quiz = {
  title: 'React useOptimistic Hook Quiz',
  description:
    'React의 useOptimistic Hook의 개념과 사용법을 테스트하는 퀴즈입니다.',
  categories: [
    {
      title: '기본 개념',
      description: 'useOptimistic Hook의 기본적인 개념과 사용법',
      questions: [
        {
          id: 1,
          question: 'useOptimistic Hook의 주요 목적은 무엇인가요?',
          options: [
            '서버로부터 데이터를 가져오는 것',
            '비동기 작업 중에 즉각적인 UI 업데이트를 제공하는 것',
            '컴포넌트의 렌더링을 최적화하는 것',
            '폼 데이터를 관리하는 것',
          ],
          correctAnswer: 1,
          explanation:
            'useOptimistic Hook은 비동기 작업이 진행되는 동안 사용자에게 즉각적인 피드백을 제공하면서 실제 작업은 백그라운드에서 처리할 수 있게 해주는 Hook입니다.',
        },
        {
          id: 2,
          question:
            'useOptimistic Hook이 반환하는 값 중 addOptimistic의 역할은 무엇인가요?',
          options: [
            '현재 상태를 초기화하는 함수',
            '비동기 작업을 취소하는 함수',
            '낙관적 업데이트를 트리거하는 함수',
            '이전 상태로 되돌리는 함수',
          ],
          correctAnswer: 2,
          explanation:
            'addOptimistic은 낙관적 업데이트를 트리거하는 함수로, 실제 작업이 완료되기 전에 UI를 즉시 업데이트하는 데 사용됩니다.',
        },
        {
          id: 3,
          question:
            '다음 코드에서 updateFn의 매개변수 순서가 올바른 것은?\n\nuseOptimistic(state, (param1, param2) => {\n  // 업데이트 로직\n});',
          options: [
            'param1: 낙관적 값, param2: 현재 상태',
            'param1: 현재 상태, param2: 낙관적 값',
            'param1: 이전 상태, param2: 다음 상태',
            'param1: 초기 상태, param2: 업데이트 함수',
          ],
          correctAnswer: 1,
          explanation:
            'updateFn의 첫 번째 매개변수는 현재 상태(currentState)이고, 두 번째 매개변수는 낙관적 값(optimisticValue)입니다.',
        },
        {
          id: 4,
          question:
            'useOptimistic Hook을 사용할 때 가장 적합한 상황은 언제인가요?',
          options: [
            'heavy한 계산이 필요한 작업을 처리할 때',
            '로컬 상태만 사용하는 간단한 UI 업데이트',
            '빠른 사용자 피드백이 중요하고 실패 가능성이 낮은 작업',
            '복잡한 폼 유효성 검사가 필요한 경우',
          ],
          correctAnswer: 2,
          explanation:
            "useOptimistic Hook은 빠른 피드백이 중요하고 실패 가능성이 낮은 작업에서 가장 적합합니다. 예를 들어, 메시지 전송이나 '좋아요' 기능 같은 상황에서 효과적입니다.",
        },
        {
          id: 5,
          question: '다음 중 useOptimistic Hook의 올바른 에러 처리 패턴은?',
          options: [
            '에러가 발생하면 자동으로 이전 상태로 롤백된다',
            '에러 처리는 개발자가 직접 구현해야 한다',
            '에러가 발생하면 낙관적 업데이트가 자동으로 취소된다',
            '에러는 useOptimistic에서 자동으로 처리된다',
          ],
          correctAnswer: 1,
          explanation:
            'useOptimistic Hook은 자동으로 에러를 처리하지 않습니다. 개발자가 try-catch 블록 등을 사용하여 직접 에러 처리 로직을 구현해야 합니다.',
        },
        {
          id: 6,
          question:
            '다음 코드의 실행 결과로 올바른 것은?\n\nconst [messages, setMessages] = useState([]);\nconst [optimisticMessages, addOptimistic] = useOptimistic(\n  messages,\n  (state, newMessage) => [...state, { text: newMessage, sending: true }]\n);',
          options: [
            'messages와 optimisticMessages는 항상 동일한 값을 가진다',
            'optimisticMessages는 sending: true인 메시지를 포함할 수 있다',
            'addOptimistic을 호출하면 messages 배열이 직접 수정된다',
            'setMessages를 호출하면 optimisticMessages도 자동으로 업데이트된다',
          ],
          correctAnswer: 1,
          explanation:
            'optimisticMessages는 낙관적 업데이트가 적용된 상태를 반영하므로, sending: true 플래그가 포함된 메시지를 포함할 수 있습니다.',
        },
        {
          id: 7,
          question:
            'useOptimistic Hook을 사용할 때, race condition을 방지하기 위한 가장 좋은 방법은?',
          options: [
            '모든 비동기 작업에 타임아웃을 설정한다',
            '낙관적 업데이트를 사용하지 않는다',
            '가능한 한 빨리 네트워크 요청을 시작하고, 각 요청에 고유한 식별자를 부여한다',
            '모든 비동기 작업을 동기적으로 변환한다',
          ],
          correctAnswer: 2,
          explanation:
            'race condition을 방지하기 위해서는 네트워크 요청을 가능한 한 빨리 시작하고, 각 요청에 고유한 식별자를 부여하여 어떤 응답이 어떤 요청에 해당하는지 추적할 수 있어야 합니다.',
        },
        {
          id: 8,
          question:
            'useOptimistic Hook을 사용할 때 최적의 성능을 위한 고려사항이 아닌 것은?',
          options: [
            '불필요한 리렌더링을 방지하기 위해 메모이제이션 사용',
            '모든 상태 업데이트를 낙관적으로 처리',
            '가능한 한 작은 크기의 상태만 업데이트',
            '업데이트 함수를 useCallback으로 래핑',
          ],
          correctAnswer: 1,
          explanation:
            '모든 상태 업데이트를 낙관적으로 처리하는 것은 좋지 않습니다. 실패 가능성이 높거나 롤백이 복잡한 작업의 경우 일반적인 상태 관리 방식을 사용하는 것이 좋습니다.',
        },
      ],
    },
    {
      title: '실제 구현과 패턴',
      description: 'useOptimistic Hook의 실제 구현 패턴과 고급 사용법',
      questions: [
        {
          id: 9,
          question:
            '다음 코드의 문제점은 무엇인가요?\n\nfunction ChatComponent() {\n  const [messages, setMessages] = useState([]);\n  const [optimisticMessages, addOptimistic] = useOptimistic(\n    messages,\n    (state, newMessage) => [...state, newMessage]\n  );\n\n  const sendMessage = async (message) => {\n    setMessages([...messages, message]);\n    addOptimistic(message);\n    await apiCall(message);\n  };\n}',
          options: [
            'apiCall이 실패해도 메시지가 UI에 남아있다',
            '최적화되지 않은 상태 업데이트로 인한 성능 저하',
            '낙관적 업데이트와 실제 상태 업데이트가 중복으로 발생',
            '비동기 작업의 순서가 보장되지 않는다',
          ],
          correctAnswer: 2,
          explanation:
            'setMessages와 addOptimistic을 동시에 호출하면 상태 업데이트가 중복으로 발생합니다. 낙관적 업데이트는 실제 상태가 업데이트되기 전에 UI를 먼저 업데이트하는 것이 목적이므로, setMessages는 apiCall 이후에 처리되어야 합니다.',
        },
        {
          id: 10,
          question:
            'useOptimistic을 사용할 때 다음 중 가장 권장되는 에러 처리 패턴은?',
          options: [
            '에러 발생 시 무조건 전체 페이지를 새로고침한다',
            '에러를 무시하고 낙관적 업데이트된 상태를 유지한다',
            'try-catch로 에러를 잡고 사용자에게 알림을 주며, 필요한 경우 보정 작업을 수행한다',
            '에러 발생 시 자동으로 이전 상태로 롤백한다',
          ],
          correctAnswer: 2,
          explanation:
            '에러 처리는 사용자 경험을 고려해야 합니다. 에러를 잡아서 사용자에게 알리고, 필요한 경우 보정 작업(재시도, 롤백 등)을 수행하는 것이 가장 좋은 방법입니다.',
        },
        {
          id: 11,
          question:
            '다음 중 useOptimistic Hook과 함께 사용하면 좋은 React Hook은?',
          options: [
            'useEffect - 불필요한 사이드 이펙트 발생',
            'useMemo - 상태 계산 최적화',
            'useCallback - 함수 재생성 방지',
            'useMemo와 useCallback 모두 필요한 경우에 적절히 사용',
          ],
          correctAnswer: 3,
          explanation:
            '복잡한 업데이트 로직이나 성능 최적화가 필요한 경우 useMemo와 useCallback을 적절히 조합하여 사용하는 것이 좋습니다. 특히 대규모 리스트나 복잡한 계산이 필요한 경우에 유용합니다.',
        },
        {
          id: 12,
          question: '낙관적 업데이트 시 고려해야 할 가장 중요한 요소는?',
          options: [
            '서버 응답 시간',
            '데이터의 정합성과 사용자 경험의 균형',
            '클라이언트의 성능',
            '네트워크 상태',
          ],
          correctAnswer: 1,
          explanation:
            '낙관적 업데이트에서 가장 중요한 것은 데이터의 정합성과 사용자 경험 사이의 균형입니다. 너무 빨리 UI를 업데이트하면 실제 데이터와 차이가 발생할 수 있고, 너무 늦게 업데이트하면 사용자 경험이 저하될 수 있습니다.',
        },
        {
          id: 13,
          question:
            '낙관적 업데이트를 사용할 때, 서버 응답이 예상과 다른 경우의 처리 방법으로 가장 적절한 것은?',
          options: [
            '서버 응답을 무시하고 클라이언트의 상태를 유지한다',
            '항상 서버의 응답으로 상태를 덮어쓴다',
            '서버 응답과 클라이언트 상태를 비교하여 차이가 있는 경우 사용자에게 알리고 선택권을 준다',
            '자동으로 페이지를 새로고침한다',
          ],
          correctAnswer: 2,
          explanation:
            '서버 응답과 클라이언트 상태가 다른 경우, 사용자에게 상황을 알리고 필요한 경우 수동으로 동기화할 수 있는 옵션을 제공하는 것이 좋습니다. 이는 데이터 정합성을 유지하면서도 사용자 경험을 해치지 않는 방법입니다.',
        },
        {
          id: 14,
          question:
            'useOptimistic를 사용할 때 성능 최적화를 위한 잘못된 접근은?',
          options: [
            '큰 객체의 경우 전체 객체를 복사하지 않고 필요한 부분만 업데이트',
            '불필요한 리렌더링을 방지하기 위해 메모이제이션 사용',
            '모든 상태 업데이트에 대해 낙관적 업데이트 적용',
            '업데이트 함수를 useCallback으로 감싸기',
          ],
          correctAnswer: 2,
          explanation:
            '모든 상태 업데이트에 낙관적 업데이트를 적용하는 것은 불필요한 복잡성을 초래할 수 있습니다. 낙관적 업데이트는 네트워크 지연이 사용자 경험에 큰 영향을 미치는 경우에만 선택적으로 사용해야 합니다.',
        },
        {
          id: 15,
          question: '다음 중 useOptimistic의 updateFn에서 피해야 할 작업은?',
          options: [
            '불변성을 지키며 상태 업데이트',
            '간단한 계산을 통한 상태 변환',
            '비동기 작업 수행',
            '새로운 객체 생성',
          ],
          correctAnswer: 2,
          explanation:
            'updateFn은 순수 함수여야 하며, 비동기 작업을 수행해서는 안 됩니다. 이 함수는 현재 상태와 낙관적 값을 받아 새로운 상태를 즉시 반환해야 합니다.',
        },
        {
          id: 16,
          question:
            'useOptimistic을 사용할 때 메모리 누수를 방지하기 위한 가장 좋은 방법은?',
          options: [
            '컴포넌트가 언마운트될 때 모든 비동기 작업을 취소한다',
            '상태 업데이트를 최소화한다',
            '큰 객체는 참조만 저장한다',
            '가비지 컬렉션을 자주 실행한다',
          ],
          correctAnswer: 0,
          explanation:
            '메모리 누수를 방지하기 위해서는 컴포넌트가 언마운트될 때 진행 중인 모든 비동기 작업을 적절히 취소하고 정리해야 합니다. useEffect의 cleanup 함수를 활용하면 좋습니다.',
        },
      ],
    },
    {
      title: '실제 활용과 심화 개념',
      description: 'useOptimistic Hook의 실제 활용 사례와 심화 개념',
      questions: [
        {
          id: 17,
          question:
            '다음 코드의 잠재적인 문제점은 무엇인가요?\n\nfunction TodoList() {\n  const [todos, setTodos] = useState([]);\n  const [optimisticTodos, addOptimistic] = useOptimistic(\n    todos,\n    (state, newTodo) => [...state, newTodo]\n  );\n\n  const addTodo = async (todo) => {\n    addOptimistic(todo);\n    const response = await api.addTodo(todo);\n    setTodos(prev => [...prev, response.data]);\n  };\n}',
          options: [
            'optimisticTodos와 todos의 동기화 문제',
            '메모리 누수 가능성',
            '서버 응답의 id와 낙관적 업데이트된 todo의 id 불일치',
            '상태 업데이트 순서 문제',
          ],
          correctAnswer: 2,
          explanation:
            '서버에서 생성된 id와 클라이언트에서 낙관적으로 생성된 todo의 id가 다를 수 있습니다. 이는 리스트의 키 관리나 항목 식별에 문제를 일으킬 수 있으므로, 임시 id를 사용하고 서버 응답 후 교체하는 방식을 고려해야 합니다.',
        },
        {
          id: 18,
          question:
            'useOptimistic을 사용하는 컴포넌트에서 상태 관리 라이브러리(Redux, Zustand 등)를 함께 사용할 때 고려해야 할 사항이 아닌 것은?',
          options: [
            '전역 상태와 낙관적 상태의 동기화',
            '상태 업데이트 순서 관리',
            '다중 컴포넌트에서의 낙관적 업데이트 처리',
            '모든 상태를 낙관적으로 관리',
          ],
          correctAnswer: 3,
          explanation:
            '모든 상태를 낙관적으로 관리하는 것은 불필요하며 복잡성만 증가시킵니다. 전역 상태와 낙관적 상태의 적절한 분리와 동기화 전략을 세우는 것이 중요합니다.',
        },
        {
          id: 19,
          question:
            'useOptimistic을 사용할 때 다음 중 가장 효과적인 디바운싱/쓰로틀링 전략은?',
          options: [
            '모든 낙관적 업데이트에 디바운싱 적용',
            '서버 요청에만 쓰로틀링 적용',
            'UI 업데이트는 즉시 처리하고, 서버 요청은 상황에 따라 디바운싱/쓰로틀링 적용',
            '모든 작업에 쓰로틀링 적용',
          ],
          correctAnswer: 2,
          explanation:
            '낙관적 UI 업데이트는 즉시 처리하여 반응성을 유지하고, 서버 요청은 상황에 따라 적절한 디바운싱/쓰로틀링을 적용하는 것이 가장 효과적입니다.',
        },
        {
          id: 20,
          question:
            '실시간 협업 기능이 있는 애플리케이션에서 useOptimistic을 사용할 때의 올바른 접근 방식은?',
          options: [
            '실시간 업데이트를 비활성화하고 낙관적 업데이트만 사용',
            '낙관적 업데이트를 사용하지 않고 실시간 업데이트만 사용',
            '낙관적 업데이트와 실시간 업데이트를 조화롭게 통합하고 충돌 해결 전략 수립',
            '모든 업데이트를 서버에 위임',
          ],
          correctAnswer: 2,
          explanation:
            '실시간 협업 환경에서는 낙관적 업데이트와 실시간 업데이트를 적절히 통합하고, 충돌이 발생할 경우의 해결 전략을 미리 수립해야 합니다. 이는 Operational Transformation이나 CRDT 같은 기술과 함께 고려될 수 있습니다.',
        },
        {
          id: 21,
          question:
            '다음 중 useOptimistic Hook의 updateFn에서 반환된 상태가 가져야 할 특성이 아닌 것은?',
          options: [
            '불변성(Immutability)',
            '예측 가능성(Predictability)',
            '비동기성(Asynchronicity)',
            '일관성(Consistency)',
          ],
          correctAnswer: 2,
          explanation:
            'updateFn은 동기적이어야 하며, 항상 예측 가능한 새로운 상태를 반환해야 합니다. 비동기 작업은 updateFn 외부에서 처리되어야 합니다.',
        },
        {
          id: 22,
          question:
            '서버 응답이 지연되는 상황에서 연속적인 낙관적 업데이트를 처리하는 가장 좋은 방법은?',
          options: [
            '모든 업데이트를 큐에 넣고 순차적으로 처리',
            '마지막 업데이트만 처리하고 나머지는 무시',
            '각 업데이트에 고유 ID를 부여하고 순서를 추적하여 처리',
            '모든 업데이트를 동시에 처리',
          ],
          correctAnswer: 2,
          explanation:
            '각 업데이트에 고유 ID를 부여하고 순서를 추적하여 처리하는 것이 가장 안전합니다. 이를 통해 업데이트의 순서를 보장하고 데이터 일관성을 유지할 수 있습니다.',
        },
        {
          id: 23,
          question:
            '다음 중 useOptimistic Hook을 사용한 컴포넌트의 테스트 작성 시 고려해야 할 가장 중요한 사항은?',
          options: [
            '모든 비동기 작업의 타임아웃 설정',
            '낙관적 업데이트와 실제 업데이트의 상태 일치 여부 확인',
            '렌더링 성능 측정',
            '메모리 사용량 모니터링',
          ],
          correctAnswer: 1,
          explanation:
            '테스트에서는 낙관적 업데이트가 적용된 상태와 실제 서버 응답 후의 상태가 예상대로 일치하는지 확인하는 것이 가장 중요합니다. 이는 애플리케이션의 데이터 일관성을 보장하는 핵심입니다.',
        },
        {
          id: 24,
          question:
            'useOptimistic Hook을 사용할 때 브라우저의 뒤로 가기/앞으로 가기 네비게이션을 처리하는 가장 적절한 방법은?',
          options: [
            '낙관적 업데이트를 무시하고 서버 상태만 사용',
            '낙관적 상태를 history state에 저장하고 복원',
            '네비게이션을 비활성화',
            '페이지를 새로고침',
          ],
          correctAnswer: 1,
          explanation:
            '낙관적 상태를 history state에 저장하고 네비게이션 시 복원하는 것이 가장 좋은 방법입니다. 이를 통해 사용자의 네비게이션 경험을 해치지 않으면서도 상태의 일관성을 유지할 수 있습니다.',
        },
      ],
    },
  ],
};
