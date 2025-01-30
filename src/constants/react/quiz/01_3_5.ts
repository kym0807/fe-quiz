import { Quiz } from '@/types/quiz.type';

export const quiz: Quiz = {
  title: 'React.memo 완벽 이해하기',
  description:
    'React.memo의 개념부터 고급 사용법까지 완벽하게 이해하는 퀴즈입니다.',
  categories: [
    {
      title: '기본 개념',
      description: 'memo의 기본 개념과 사용법을 테스트합니다.',
      questions: [
        {
          id: 1,
          question: 'React.memo의 주요 목적은 무엇인가요?',
          options: [
            '컴포넌트의 렌더링 속도를 높이기 위해 코드를 최적화합니다',
            'props가 변경되지 않았을 때 컴포넌트의 불필요한 리렌더링을 방지합니다',
            '컴포넌트의 상태 관리를 더 효율적으로 만듭니다',
            '컴포넌트의 메모리 사용량을 줄입니다',
          ],
          correctAnswer: 1,
          explanation:
            'memo는 HOC(고차 컴포넌트)로, props가 변경되지 않았을 때 리렌더링을 건너뛸 수 있게 해주는 성능 최적화 도구입니다.',
        },
        {
          id: 2,
          question:
            '다음 중 memo를 효과적으로 사용할 수 있는 상황이 아닌 것은?',
          options: [
            '컴포넌트가 자주 리렌더링되는 경우',
            'props가 자주 변경되는 경우',
            '렌더링 비용이 비싼 복잡한 컴포넌트의 경우',
            '큰 리스트의 개별 항목 컴포넌트',
          ],
          correctAnswer: 1,
          explanation:
            'props가 자주 변경되는 경우에는 memo를 사용하더라도 지속적인 리렌더링이 발생하므로 메모이제이션의 이점을 얻기 어렵습니다.',
        },
        {
          id: 3,
          question:
            'React.memo를 사용할 때 다음 코드의 문제점은 무엇인가요?\n\nconst UserProfile = memo(({ user }) => {\n  return (\n    <div>\n      <h1>{user.name}</h1>\n      <p>{user.email}</p>\n    </div>\n  );\n});',
          options: [
            'memo를 사용할 때는 함수형 컴포넌트를 사용할 수 없습니다',
            '객체를 props로 전달하면 메모이제이션이 제대로 동작하지 않을 수 있습니다',
            'user 객체의 구조분해할당을 사용하지 않았습니다',
            '컴포넌트 이름이 대문자로 시작해야 합니다',
          ],
          correctAnswer: 1,
          explanation:
            '객체를 props로 전달하면 매 렌더링마다 새로운 참조가 생성되어 메모이제이션의 이점을 얻을 수 없습니다. 대신 필요한 속성만 개별적으로 전달하는 것이 좋습니다.',
        },
        {
          id: 4,
          question: 'React.memo와 함께 사용하면 좋은 React Hook은 무엇인가요?',
          options: [
            'useState와 useEffect',
            'useRef와 useContext',
            'useMemo와 useCallback',
            'useReducer와 useImperativeHandle',
          ],
          correctAnswer: 2,
          explanation:
            'useMemo와 useCallback은 각각 값과 함수를 메모이제이션하여 불필요한 재생성을 방지하므로, memo와 함께 사용하면 더 효과적인 성능 최적화가 가능합니다.',
        },
      ],
    },
    {
      title: '고급 개념',
      description: 'memo의 고급 사용법과 최적화 전략을 테스트합니다.',
      questions: [
        {
          id: 5,
          question:
            '다음 중 memo의 두 번째 인자로 전달되는 비교 함수(arePropsEqual)의 올바른 구현이 아닌 것은?',
          options: [
            'return oldProps.id === newProps.id && oldProps.name === newProps.name;',
            'return JSON.stringify(oldProps) === JSON.stringify(newProps);',
            'return Object.keys(oldProps).every(key => oldProps[key] === newProps[key]);',
            'return oldProps === newProps;',
          ],
          correctAnswer: 1,
          explanation:
            'JSON.stringify를 사용한 비교는 깊은 비교를 수행하므로 성능상의 문제를 일으킬 수 있으며, 함수나 순환 참조가 있는 경우 정상적으로 작동하지 않습니다.',
        },
        {
          id: 6,
          question:
            'Context와 memo를 함께 사용할 때 발생할 수 있는 문제점은 무엇인가요?',
          options: [
            'Context를 사용하면 memo가 동작하지 않습니다',
            'Context 값이 변경되면 memo로 감싼 컴포넌트도 항상 리렌더링됩니다',
            'memo와 Context를 함께 사용하면 메모리 누수가 발생합니다',
            'Context 값을 memo로 감싼 컴포넌트에서 접근할 수 없습니다',
          ],
          correctAnswer: 1,
          explanation:
            'Context 값이 변경되면 해당 Context를 구독하는 모든 컴포넌트가 리렌더링되며, 이는 memo로 감싼 컴포넌트도 예외가 아닙니다. 따라서 Context 값 변경이 잦은 경우 memo의 효과가 제한적일 수 있습니다.',
        },
        {
          id: 7,
          question:
            '다음 중 memo를 사용할 때 가장 중요한 고려사항은 무엇인가요?',
          options: [
            '항상 모든 컴포넌트에 memo를 적용해야 합니다',
            'memo는 성능 최적화를 위한 도구일 뿐, 렌더링 방지를 보장하지는 않습니다',
            'memo를 사용하면 항상 성능이 향상됩니다',
            'memo는 클래스 컴포넌트에서만 사용해야 합니다',
          ],
          correctAnswer: 1,
          explanation:
            'memo는 성능 최적화를 위한 도구이며, 모든 상황에서 성능 향상을 보장하지는 않습니다. 컴포넌트의 동작이 memo 없이도 올바른지 먼저 확인하고, 실제 성능 측정을 통해 필요한 경우에만 적용해야 합니다.',
        },
      ],
    },

    {
      title: '최적화 및 문제해결',
      description:
        'memo 사용 시 최적화 전략과 일반적인 문제 해결 방법을 테스트합니다.',
      questions: [
        {
          id: 8,
          question:
            "다음 코드에서 발생할 수 있는 성능 문제는 무엇인가요?\n\nconst ParentComponent = () => {\n  const handleClick = () => {\n    console.log('clicked');\n  };\n\n  return <MemoizedChild onClick={handleClick} />;\n};",
          options: [
            'handleClick 함수가 너무 복잡합니다',
            '매 렌더링마다 새로운 handleClick 함수가 생성됩니다',
            'MemoizedChild가 올바르게 메모이제이션되지 않았습니다',
            'console.log가 성능을 저하시킵니다',
          ],
          correctAnswer: 1,
          explanation:
            'handleClick 함수가 컴포넌트 내부에 정의되어 있어 매 렌더링마다 새로운 함수가 생성됩니다. 이로 인해 memo로 감싼 자식 컴포넌트가 불필요하게 리렌더링될 수 있습니다. useCallback을 사용하여 함수를 메모이제이션해야 합니다.',
        },
        {
          id: 9,
          question:
            '상태 관리 시 memo 사용과 관련하여 가장 좋은 방법은 무엇인가요?',
          options: [
            '모든 상태를 최상위 컴포넌트로 끌어올립니다',
            '상태를 사용하는 컴포넌트에서 직접 관리하고, 필요한 경우에만 상위로 끌어올립니다',
            '상태를 전역 상태 관리자(Redux 등)에서만 관리합니다',
            'memo를 사용할 때는 상태를 사용하지 않습니다',
          ],
          correctAnswer: 1,
          explanation:
            '상태를 사용하는 컴포넌트에서 직접 관리하는 것이 가장 효율적입니다. 불필요하게 상태를 상위로 끌어올리면 관련 없는 컴포넌트들의 리렌더링이 발생할 수 있습니다.',
        },
        {
          id: 10,
          question: 'memo를 사용할 때 다음 중 올바른 최적화 방법이 아닌 것은?',
          options: [
            '객체 props를 useMemo로 메모이제이션하기',
            '복잡한 계산을 useEffect 내부에서 수행하기',
            '필요한 값만 props로 전달하기',
            '이벤트 핸들러를 useCallback으로 메모이제이션하기',
          ],
          correctAnswer: 1,
          explanation:
            '복잡한 계산을 useEffect 내부에서 수행하는 것은 불필요한 렌더링을 유발할 수 있습니다. 대신 렌더링 중에 직접 계산하거나 useMemo를 사용하는 것이 좋습니다.',
        },
        {
          id: 11,
          question: 'React.memo와 관련된 다음 설명 중 틀린 것은?',
          options: [
            'memo는 순수한 렌더링 로직을 가진 컴포넌트에서만 사용해야 합니다',
            'memo는 항상 성능을 향상시키므로 가능한 많이 사용해야 합니다',
            'memo는 props의 얕은 비교를 수행합니다',
            'memo는 커스텀 비교 함수를 사용하여 동작을 커스터마이징할 수 있습니다',
          ],
          correctAnswer: 1,
          explanation:
            'memo를 무분별하게 사용하면 오히려 성능이 저하될 수 있습니다. memo는 비교 연산을 수행하므로, 실제로 필요한 경우에만 사용해야 합니다.',
        },
        {
          id: 12,
          question:
            '다음 중 memo 사용 시 발생할 수 있는 성능 문제를 디버깅하는 가장 좋은 방법은?',
          options: [
            'console.log를 사용하여 렌더링 횟수를 확인합니다',
            'React DevTools의 Profiler를 사용하여 컴포넌트의 렌더링 성능을 측정합니다',
            '브라우저의 네트워크 탭을 확인합니다',
            '코드의 실행 시간을 측정합니다',
          ],
          correctAnswer: 1,
          explanation:
            'React DevTools의 Profiler는 컴포넌트의 렌더링 시간과 횟수를 정확하게 측정할 수 있으며, 불필요한 리렌더링을 식별하는 데 가장 효과적인 도구입니다.',
        },
      ],
    },
    {
      title: 'React 생태계 이해',
      description: 'memo와 관련된 React 생태계의 이해를 테스트합니다.',
      questions: [
        {
          id: 13,
          question: 'React.memo와 useMemo의 차이점은 무엇인가요?',
          options: [
            'memo는 함수를, useMemo는 값을 메모이제이션합니다',
            'memo는 컴포넌트를, useMemo는 값을 메모이제이션합니다',
            'memo는 클래스 컴포넌트에서만, useMemo는 함수형 컴포넌트에서만 사용됩니다',
            'memo는 props를, useMemo는 상태를 메모이제이션합니다',
          ],
          correctAnswer: 1,
          explanation:
            'memo는 컴포넌트 자체를 메모이제이션하여 불필요한 리렌더링을 방지하고, useMemo는 값을 메모이제이션하여 고비용 계산의 재실행을 방지합니다.',
        },
        {
          id: 14,
          question: 'React의 Virtual DOM과 memo의 관계를 가장 잘 설명한 것은?',
          options: [
            'memo는 Virtual DOM을 사용하지 않습니다',
            'memo는 Virtual DOM의 비교 과정을 완전히 건너뜁니다',
            'memo는 Virtual DOM의 비교 과정 전에 props 비교를 수행하여 불필요한 비교를 방지합니다',
            'memo는 Virtual DOM을 직접 수정합니다',
          ],
          correctAnswer: 2,
          explanation:
            'memo는 Virtual DOM diff 연산 전에 props 비교를 수행하여, props가 변경되지 않았다면 Virtual DOM 비교 과정 자체를 건너뛰게 됩니다.',
        },
      ],
    },

    {
      title: 'Context와 Memo 심화',
      description: 'Context API와 memo의 상호작용을 심도있게 테스트합니다.',
      questions: [
        {
          id: 15,
          question:
            'Context를 사용하는 메모이제이션된 컴포넌트에서 다음 패턴의 문제점은 무엇인가요?\n\nconst MemoizedComponent = memo(() => {\n  const { theme, user, notifications } = useContext(AppContext);\n  return <div>{/* rendering logic */}</div>;\n});',
          options: [
            'useContext는 memo와 함께 사용할 수 없습니다',
            'AppContext의 어떤 값이 변경되어도 전체 컴포넌트가 리렌더링됩니다',
            'Context 값을 구조분해할당하면 안됩니다',
            'memo는 Context 값을 인식하지 못합니다',
          ],
          correctAnswer: 1,
          explanation:
            '전체 Context 객체를 구독하면 Context의 어떤 값이 변경되어도 컴포넌트가 리렌더링됩니다. 대신 필요한 값만 구독하는 별도의 Context를 만들거나, 더 작은 단위로 Context를 분리해야 합니다.',
        },
        {
          id: 16,
          question:
            'Context와 memo를 함께 사용할 때 성능을 최적화하는 가장 좋은 방법은?',
          options: [
            'Context를 사용하지 않고 props로만 데이터를 전달합니다',
            'Context를 더 작은 단위로 분리하고 필요한 값만 구독합니다',
            '모든 Context 값을 하나의 객체로 통합합니다',
            'useContext 대신 Consumer 컴포넌트를 사용합니다',
          ],
          correctAnswer: 1,
          explanation:
            'Context를 더 작은 단위로 분리하면 특정 값의 변경이 다른 값을 구독하는 컴포넌트에 영향을 주지 않으므로, 불필요한 리렌더링을 방지할 수 있습니다.',
        },
        {
          id: 17,
          question:
            '다음 중 메모이제이션된 컴포넌트의 상태 관리에 대한 설명으로 옳지 않은 것은?',
          options: [
            'memo로 감싼 컴포넌트 내부의 상태는 props가 변경되지 않아도 자유롭게 업데이트될 수 있습니다',
            'memo는 props의 변경만 감지하므로 내부 상태 변경은 항상 새로운 렌더링을 발생시킵니다',
            'memo를 사용하면 내부 상태 관리가 불가능합니다',
            '상태 업데이트는 memo의 최적화 효과에 영향을 주지 않습니다',
          ],
          correctAnswer: 2,
          explanation:
            'memo는 props의 변경만을 감지하여 리렌더링을 제어하며, 컴포넌트 내부의 상태 관리는 자유롭게 가능합니다. 내부 상태 변경은 memo의 영향을 받지 않고 정상적으로 동작합니다.',
        },
        {
          id: 18,
          question: 'useMemo와 memo를 함께 사용할 때의 이점이 아닌 것은?',
          options: [
            '복잡한 계산 결과를 메모이제이션할 수 있습니다',
            '객체 props의 참조 일관성을 유지할 수 있습니다',
            '컴포넌트의 렌더링 성능이 항상 향상됩니다',
            '불필요한 자식 컴포넌트 리렌더링을 방지할 수 있습니다',
          ],
          correctAnswer: 2,
          explanation:
            'useMemo와 memo를 함께 사용한다고 해서 항상 성능이 향상되는 것은 아닙니다. 메모이제이션 자체도 비용이 들기 때문에, 실제 성능 측정을 통해 필요한 경우에만 사용해야 합니다.',
        },
        {
          id: 19,
          question:
            'props의 깊은 비교(deep comparison)를 구현한 다음 코드의 잠재적 문제점은 무엇인가요?\n\nconst arePropsEqual = (prevProps, nextProps) => {\n  return JSON.stringify(prevProps) === JSON.stringify(nextProps);\n};',
          options: [
            'JSON.stringify는 순환 참조를 처리할 수 없습니다',
            '깊은 비교는 항상 얕은 비교보다 성능이 좋습니다',
            'JSON.stringify는 함수를 직렬화할 수 없습니다',
            '이 방식은 메모리 사용량이 적습니다',
          ],
          correctAnswer: 0,
          explanation:
            'JSON.stringify는 순환 참조가 있는 객체를 처리할 수 없으며, 함수나 undefined 등의 값도 제대로 처리하지 못합니다. 또한 깊은 객체 구조에서는 성능 문제를 일으킬 수 있습니다.',
        },
      ],
    },
    {
      title: '실제 사례 및 최적화',
      description:
        '실제 개발 시나리오에서 memo의 활용과 최적화 전략을 테스트합니다.',
      questions: [
        {
          id: 20,
          question:
            '대규모 리스트를 렌더링할 때 memo를 사용하는 가장 효과적인 방법은?',
          options: [
            '리스트의 모든 아이템을 하나의 memo로 감싸기',
            '개별 리스트 아이템 컴포넌트를 memo로 감싸기',
            '리스트 컨테이너만 memo로 감싸기',
            '리스트의 데이터만 useMemo로 감싸기',
          ],
          correctAnswer: 1,
          explanation:
            '개별 리스트 아이템을 memo로 감싸면, 특정 아이템의 데이터가 변경될 때 해당 아이템만 리렌더링되므로 가장 효율적입니다. 전체 리스트를 감싸는 것은 개별 아이템 변경 시에도 전체가 리렌더링될 수 있습니다.',
        },
        {
          id: 21,
          question:
            '고차 컴포넌트(HOC)로서 memo를 사용할 때 고려해야 할 사항이 아닌 것은?',
          options: [
            'memo로 감싼 컴포넌트의 displayName 설정',
            'ref 전달을 위한 forwardRef 사용',
            'memo는 항상 다른 HOC보다 먼저 적용되어야 함',
            '커스텀 비교 함수의 성능 영향 고려',
          ],
          correctAnswer: 2,
          explanation:
            'memo의 적용 순서는 상황에 따라 달라질 수 있으며, 항상 먼저 적용될 필요는 없습니다. 다른 HOC와의 조합에서는 각 HOC의 목적과 영향을 고려하여 순서를 결정해야 합니다.',
        },
      ],
    },
  ],
};
