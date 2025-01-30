import { Quiz } from '@/types/quiz.type';

export const quiz: Quiz = {
  title: 'React useReducer Hook Quiz',
  description: 'React의 useReducer Hook에 대한 이해를 테스트하는 퀴즈입니다.',
  categories: [
    {
      title: '기본 개념',
      description: 'useReducer의 기본 개념과 사용법',
      questions: [
        {
          id: 1,
          question: 'useReducer Hook의 주요 목적은 무엇인가요?',
          options: [
            '단순한 상태 관리',
            '비동기 작업 처리',
            '복잡한 상태 로직을 리듀서 함수로 분리하여 관리',
            '컴포넌트 최적화',
          ],
          correctAnswer: 2,
          explanation:
            'useReducer Hook은 복잡한 상태 로직을 리듀서 함수로 분리하여 관리할 수 있게 해주는 Hook입니다. 이를 통해 상태 업데이트 로직을 컴포넌트와 분리할 수 있습니다.',
        },
        {
          id: 2,
          question: '다음 중 useReducer Hook의 필수 매개변수가 아닌 것은?',
          options: [
            'reducer 함수',
            'initialArg (초기 상태)',
            'init (초기화 함수)',
            'dispatch 함수',
          ],
          correctAnswer: 2,
          explanation:
            'init(초기화 함수)는 선택적 매개변수입니다. reducer 함수와 initialArg는 필수 매개변수이며, dispatch 함수는 매개변수가 아닌 반환값입니다.',
        },
        {
          id: 3,
          question:
            "다음 reducer 함수의 문제점은 무엇인가요?\n\nfunction reducer(state, action) {\n  switch (action.type) {\n    case 'increment':\n      state.count += 1;\n      return state;\n  }\n}",
          options: [
            'action.type을 확인하지 않음',
            '상태를 직접 변경하고 있음',
            'default case가 없음',
            'return 문이 잘못됨',
          ],
          correctAnswer: 1,
          explanation:
            '리듀서 함수에서는 상태를 직접 변경하면 안 됩니다. 대신 새로운 상태 객체를 반환해야 합니다. 올바른 방법은 {...state, count: state.count + 1} 형태로 새로운 객체를 반환하는 것입니다.',
        },
        {
          id: 4,
          question: '다음 중 useReducer를 사용하기에 가장 적합한 경우는?',
          options: [
            '단순한 카운터 구현',
            '서버에서 데이터 fetching',
            '여러 관련 상태값들이 함께 업데이트되는 복잡한 폼',
            '단일 텍스트 입력 필드 관리',
          ],
          correctAnswer: 2,
          explanation:
            'useReducer는 여러 관련된 상태값들이 함께 업데이트되는 복잡한 로직을 다룰 때 가장 적합합니다. 특히 폼처럼 여러 필드가 서로 연관되어 있는 경우 유용합니다.',
        },
        {
          id: 5,
          question: '초기화 함수(init)를 사용하는 가장 큰 이점은 무엇인가요?',
          options: [
            '코드 가독성 향상',
            '상태 초기화 로직을 재사용 가능',
            '비용이 큰 초기화 계산을 컴포넌트 마운트 시에만 실행',
            '상태 업데이트 최적화',
          ],
          correctAnswer: 2,
          explanation:
            'init 함수를 사용하면 비용이 큰 초기화 계산(예: localStorage 접근)을 컴포넌트가 처음 마운트될 때만 실행되도록 할 수 있습니다. 이는 성능 최적화에 도움이 됩니다.',
        },
        {
          id: 6,
          question:
            '다음 중 reducer 함수가 반환하는 상태 객체의 올바른 특성은?',
          options: [
            '이전 상태와 동일한 참조여도 됨',
            '일부 필드만 포함해도 됨',
            '이전 상태를 직접 수정해도 됨',
            '이전 상태를 기반으로 새로운 객체를 반환해야 함',
          ],
          correctAnswer: 3,
          explanation:
            'reducer 함수는 항상 이전 상태를 기반으로 새로운 상태 객체를 반환해야 합니다. 이는 불변성을 지키고 리액트가 상태 변화를 감지할 수 있게 하기 위함입니다.',
        },
        {
          id: 7,
          question: '다음 중 action 객체의 올바른 구조는?',
          options: [
            '{ state: newState }',
            "{ type: 'ACTION_TYPE', payload: data }",
            '{ newState: {...state, value: newValue} }',
            'function action(state) { return newState; }',
          ],
          correctAnswer: 1,
          explanation:
            'action 객체는 일반적으로 type 속성을 필수로 가지며, 추가 데이터는 payload나 다른 필드에 포함시킵니다. 이는 액션의 의도를 명확히 하고 일관된 패턴을 유지하는데 도움이 됩니다.',
        },
        {
          id: 8,
          question: 'Strict Mode에서 reducer 함수가 두 번 호출되는 이유는?',
          options: [
            '성능 최적화를 위해',
            '버그를 찾기 위해',
            '순수 함수인지 확인하기 위해',
            '상태 업데이트를 보장하기 위해',
          ],
          correctAnswer: 2,
          explanation:
            'Strict Mode에서는 reducer 함수가 순수 함수인지 확인하기 위해 개발 모드에서 두 번 호출됩니다. 이는 개발 시에만 발생하며, 프로덕션에서는 한 번만 호출됩니다.',
        },
      ],
    },
    {
      title: '실제 구현 패턴',
      description: 'useReducer의 실제 구현과 문제 해결 패턴',
      questions: [
        {
          id: 9,
          question:
            '다음 코드의 문제점은 무엇인가요?\n\nfunction TodoList() {\n  const [todos, dispatch] = useReducer(todosReducer, [\n    createInitialTodos()\n  ]);\n  // ...\n}',
          options: [
            'useReducer의 문법이 잘못됨',
            '초기 상태가 배열이 아님',
            '매 렌더링마다 createInitialTodos가 호출됨',
            'dispatch 함수가 잘못 사용됨',
          ],
          correctAnswer: 2,
          explanation:
            '초기 상태를 직접 함수 호출로 전달하면 매 렌더링마다 해당 함수가 호출됩니다. 대신 초기화 함수(세 번째 인자)를 사용해야 합니다: useReducer(todosReducer, null, createInitialTodos)',
        },
        {
          id: 10,
          question:
            "다음 중 'Too many re-renders' 오류의 원인이 될 수 있는 코드는?",
          options: [
            "<button onClick={dispatch({ type: 'increment' })}>증가</button>",
            "<button onClick={() => dispatch({ type: 'increment' })}>증가</button>",
            '<button onClick={handleClick}>증가</button>',
            "const handleClick = () => dispatch({ type: 'increment' });",
          ],
          correctAnswer: 0,
          explanation:
            "onClick={dispatch({ type: 'increment' })}는 렌더링 중에 직접 dispatch를 호출하게 되어 무한 루프가 발생합니다. 대신 함수로 감싸서 전달해야 합니다.",
        },
        {
          id: 11,
          question:
            '상태의 일부가 undefined가 되는 것을 방지하기 위한 가장 좋은 방법은?',
          options: [
            '모든 필드에 기본값 설정',
            '상태 업데이트 시 항상 전체 상태 복사(spread) 후 필요한 부분만 수정',
            'undefined 체크 로직 추가',
            '초기 상태 값을 null로 설정',
          ],
          correctAnswer: 1,
          explanation:
            '상태 업데이트 시 항상 ...state로 전체 상태를 복사한 후 필요한 부분만 수정하면, 실수로 필드가 누락되는 것을 방지할 수 있습니다.',
        },
        {
          id: 12,
          question:
            "리듀서에서 다음과 같은 비동기 작업을 처리하려고 할 때 올바른 방법은?\n\ncase 'fetch_data': {\n  const data = await fetchData(); // 🔴\n  return { ...state, data };\n}",
          options: [
            'async/await를 사용하여 리듀서를 비동기 함수로 만든다',
            '리듀서는 순수 함수여야 하므로, 비동기 작업은 dispatch를 호출하는 부분에서 처리한다',
            '리듀서 내에서 Promise.then()을 사용한다',
            'fetchData를 동기 함수로 변경한다',
          ],
          correctAnswer: 1,
          explanation:
            '리듀서는 순수 함수여야 하며 동기적이어야 합니다. 비동기 작업은 리듀서 외부에서 처리하고, 결과를 dispatch로 전달해야 합니다.',
        },
        {
          id: 13,
          question: '다음 중 액션 타입 상수화의 가장 큰 장점은?',
          options: [
            '코드 실행 속도 향상',
            '메모리 사용량 감소',
            '타입 오타로 인한 버그 방지와 자동 완성 지원',
            '번들 크기 감소',
          ],
          correctAnswer: 2,
          explanation:
            '액션 타입을 상수로 정의하면 타입 문자열의 오타를 방지할 수 있고, IDE의 자동 완성 기능을 활용할 수 있어 개발 생산성이 향상됩니다.',
        },
        {
          id: 14,
          question: 'switch 문에서 블록 스코프를 사용하는 주된 이유는?',
          options: [
            '가독성 향상을 위해',
            '성능 최적화를 위해',
            'case 간 변수 이름 충돌 방지를 위해',
            '메모리 사용량 감소를 위해',
          ],
          correctAnswer: 2,
          explanation:
            'switch 문에서 블록 스코프({})를 사용하면 각 case 블록 간에 변수 이름이 충돌하는 것을 방지할 수 있습니다. 이는 특히 여러 case에서 같은 변수 이름을 사용할 때 유용합니다.',
        },
        {
          id: 15,
          question: '다음 중 액션 생성자 함수를 사용하는 가장 중요한 이유는?',
          options: [
            '코드 중복 제거',
            '액션 객체 구조의 일관성 유지',
            '타입 안정성 향상',
            '위의 모든 것',
          ],
          correctAnswer: 3,
          explanation:
            '액션 생성자 함수는 코드 중복을 제거하고, 액션 객체의 구조를 일관되게 유지하며, 타입 안정성을 향상시키는 등 여러 장점을 제공합니다.',
        },
        {
          id: 16,
          question: 'immer를 사용한 리듀서와 일반 리듀서의 가장 큰 차이점은?',
          options: [
            '성능 차이',
            '상태 업데이트 방식 (직접 수정 vs 불변성 유지)',
            '지원하는 액션 타입의 수',
            '초기화 방식',
          ],
          correctAnswer: 1,
          explanation:
            '일반 리듀서는 불변성을 직접 관리해야 하지만, immer를 사용하면 상태를 직접 수정하는 것처럼 작성할 수 있고 immer가 내부적으로 불변성을 관리해줍니다.',
        },
      ],
    },
    {
      title: '심화 개념과 최적화',
      description: 'useReducer의 심화 사용법과 최적화 기법',
      questions: [
        {
          id: 17,
          question:
            '다음 중 useReducer를 사용한 컴포넌트 최적화 방법으로 올바르지 않은 것은?',
          options: [
            'dispatch 함수를 useCallback으로 감싸기',
            '리듀서 함수를 컴포넌트 외부에 정의하기',
            '무거운 초기화 로직을 init 함수로 분리하기',
            '자주 변경되는 값을 상태로 관리하기',
          ],
          correctAnswer: 0,
          explanation:
            'dispatch 함수는 이미 React에 의해 메모이제이션되어 있으므로 useCallback으로 감쌀 필요가 없습니다. 리렌더링 시에도 동일한 참조를 유지합니다.',
        },
        {
          id: 18,
          question: '여러 개의 useReducer를 사용할 때의 장점이 아닌 것은?',
          options: [
            '관심사의 분리가 용이함',
            '상태 업데이트 로직의 재사용성 향상',
            '자동으로 상태 동기화',
            '디버깅이 용이함',
          ],
          correctAnswer: 2,
          explanation:
            '여러 useReducer는 자동으로 상태를 동기화하지 않습니다. 필요한 경우 명시적으로 각 리듀서의 상태를 동기화해야 합니다.',
        },
        {
          id: 19,
          question:
            "다음 코드의 잠재적 문제점은?\n\nfunction reducer(state, action) {\n  switch (action.type) {\n    case 'update':\n      return {\n        ...state,\n        data: action.data,\n        lastUpdated: Date.now()\n      };\n  }\n}",
          options: [
            '스프레드 연산자 사용',
            'case문에서 블록 스코프 미사용',
            '순수하지 않은 함수 사용 (Date.now)',
            'default case 누락',
          ],
          correctAnswer: 2,
          explanation:
            '리듀서는 순수 함수여야 하므로 Date.now()와 같은 부수 효과를 발생시키는 함수 호출은 피해야 합니다. 대신 타임스탬프를 액션 객체에 포함시켜 전달해야 합니다.',
        },
        {
          id: 20,
          question:
            'useReducer와 함께 Context를 사용할 때 성능을 최적화하는 가장 좋은 방법은?',
          options: [
            '상태와 dispatch를 동일한 Context에 넣기',
            '상태와 dispatch를 별도의 Context로 분리하기',
            '모든 상태를 하나의 객체로 관리하기',
            'Context 대신 props로 전달하기',
          ],
          correctAnswer: 1,
          explanation:
            '상태와 dispatch를 별도의 Context로 분리하면, dispatch만 필요한 컴포넌트가 상태 변경으로 인한 불필요한 리렌더링을 피할 수 있습니다.',
        },
        {
          id: 21,
          question:
            '다음 중 useReducer의 상태 업데이트가 배치(batch)되지 않는 경우는?',
          options: [
            '이벤트 핸들러 내에서의 다중 dispatch',
            'useEffect 내에서의 dispatch',
            'setTimeout 내에서의 dispatch',
            'Promise 핸들러 내에서의 dispatch',
          ],
          correctAnswer: 2,
          explanation:
            'React 18 이전에는 네이티브 이벤트 핸들러 외부(setTimeout, Promise 등)에서의 업데이트는 배치되지 않았습니다. React 18의 자동 배치로 이는 해결되었지만, 원리를 이해하는 것이 중요합니다.',
        },
        {
          id: 22,
          question: '복잡한 폼 상태 관리에서 useReducer를 사용할 때의 단점은?',
          options: [
            '상태 업데이트의 복잡성',
            '타입 안정성 부족',
            '보일러플레이트 코드 증가',
            '성능 저하',
          ],
          correctAnswer: 2,
          explanation:
            'useReducer로 폼 상태를 관리할 때는 각 필드의 변경에 대한 액션 타입과 리듀서 로직을 정의해야 하므로 보일러플레이트 코드가 증가할 수 있습니다. 단순한 폼의 경우 useState가 더 적합할 수 있습니다.',
        },
        {
          id: 23,
          question: '다음 중 useReducer를 사용한 상태 관리의 장점이 아닌 것은?',
          options: [
            '상태 업데이트 로직의 테스트 용이성',
            '자동 상태 지속성(persistence)',
            '복잡한 상태 로직의 분리',
            '예측 가능한 상태 변화',
          ],
          correctAnswer: 1,
          explanation:
            'useReducer는 자동으로 상태를 지속적으로 저장하지 않습니다. 상태 지속성이 필요한 경우 localStorage나 다른 저장소와의 통합을 직접 구현해야 합니다.',
        },
        {
          id: 24,
          question:
            'useReducer에서 상태 업데이트 후 부수 효과(side effect)를 처리하는 가장 적절한 방법은?',
          options: [
            '리듀서 내에서 직접 처리',
            'useEffect를 사용하여 상태 변화 감지 후 처리',
            'dispatch 호출 직후 처리',
            'init 함수 내에서 처리',
          ],
          correctAnswer: 1,
          explanation:
            '부수 효과는 리듀서 외부에서 처리해야 하며, useEffect를 사용하여 상태 변화를 감지하고 그에 따른 부수 효과를 처리하는 것이 가장 적절합니다.',
        },
      ],
    },
  ],
};
