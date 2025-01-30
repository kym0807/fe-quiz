import { Quiz } from '@/types/quiz.type';

export const quiz: Quiz = {
  title: 'React useRef Hook Quiz',
  description: 'React의 useRef Hook에 대한 이해를 테스트하는 퀴즈입니다.',
  categories: [
    {
      title: '기본 개념',
      description: 'useRef의 기본 개념과 사용법',
      questions: [
        {
          id: 1,
          question: 'useRef Hook의 주요 목적으로 가장 적절한 것은?',
          options: [
            '상태 관리와 리렌더링 트리거',
            '렌더링에 사용되지 않는 값을 참조',
            '컴포넌트 간 데이터 공유',
            '비동기 작업 처리',
          ],
          correctAnswer: 1,
          explanation:
            'useRef는 렌더링에 사용되지 않는 값을 참조할 수 있게 해주며, ref.current의 변경은 리렌더링을 트리거하지 않습니다.',
        },
        {
          id: 2,
          question: '다음 중 useRef 사용이 가장 적절한 경우는?',
          options: [
            '사용자가 볼 수 있는 카운터 값 관리',
            '폼 입력 값의 실시간 유효성 검사',
            'setInterval ID 저장',
            '리스트 렌더링을 위한 데이터 저장',
          ],
          correctAnswer: 2,
          explanation:
            'setInterval의 ID와 같이 렌더링에 영향을 주지 않고 저장해야 하는 값은 useRef를 사용하는 것이 적합합니다.',
        },
        {
          id: 3,
          question:
            '다음 코드의 문제점은?\n\nfunction Counter() {\n  const countRef = useRef(0);\n  return <div>{countRef.current}</div>;\n}',
          options: [
            'useRef 초기값이 잘못됨',
            '렌더링 중에 ref를 읽고 있음',
            'countRef가 선언되지 않음',
            'return 문이 잘못됨',
          ],
          correctAnswer: 1,
          explanation:
            '렌더링 중에 ref.current를 읽는 것은 좋지 않은 패턴입니다. 렌더링에 사용될 값은 useState를 사용해야 합니다.',
        },
        {
          id: 4,
          question: 'useRef의 반환값의 특징으로 올바르지 않은 것은?',
          options: [
            'current 속성을 가진 객체를 반환',
            '매 렌더링마다 동일한 객체를 반환',
            'current 값 변경 시 자동으로 리렌더링',
            '초기값은 전달한 initialValue로 설정',
          ],
          correctAnswer: 2,
          explanation:
            'useRef가 반환한 객체의 current 값이 변경되어도 자동으로 리렌더링되지 않습니다. 이것이 useState와의 주요 차이점입니다.',
        },
        {
          id: 5,
          question: '다음 중 useRef와 useState의 사용 구분이 잘못된 것은?',
          options: [
            '타이머 ID 저장에는 useRef 사용',
            '이전 props 값 저장에는 useRef 사용',
            '사용자 입력 값 저장에는 useState 사용',
            'DOM 요소 접근에는 useState 사용',
          ],
          correctAnswer: 3,
          explanation:
            'DOM 요소에 접근할 때는 useRef를 사용해야 합니다. useState는 렌더링에 필요한 상태를 관리하는 데 사용됩니다.',
        },
        {
          id: 6,
          question: 'ref 콜백 함수를 사용할 때의 장점이 아닌 것은?',
          options: [
            '조건부로 ref 할당 가능',
            'ref가 설정/해제될 때 추가 로직 실행 가능',
            '자동 메모리 관리',
            '더 나은 성능',
          ],
          correctAnswer: 3,
          explanation:
            'ref 콜백은 useRef보다 더 많은 유연성을 제공하지만, 일반적으로 성능 면에서는 차이가 없습니다. 오히려 불필요한 콜백 생성을 피하기 위해 useRef + useEffect 조합을 고려할 수 있습니다.',
        },
        {
          id: 7,
          question: '다음 중 forwardRef를 사용해야 하는 경우는?',
          options: [
            '일반 div에 ref 전달 시',
            '커스텀 컴포넌트에 ref 전달 시',
            '클래스 컴포넌트에 ref 전달 시',
            'hook 내부에서 ref 사용 시',
          ],
          correctAnswer: 1,
          explanation:
            '커스텀 컴포넌트에 ref를 전달하려면 반드시 forwardRef로 컴포넌트를 감싸야 합니다. 이는 React의 규칙입니다.',
        },
        {
          id: 8,
          question: 'useRef의 초기화 관련 설명 중 틀린 것은?',
          options: [
            '초기값은 한 번만 사용됨',
            'null로 초기화 후 나중에 값 설정 가능',
            '초기화 함수는 매 렌더링마다 호출됨',
            '비용이 큰 초기값은 지연 초기화 사용',
          ],
          correctAnswer: 2,
          explanation:
            'useRef의 초기화 함수는 컴포넌트가 마운트될 때 한 번만 호출됩니다. 매 렌더링마다 호출되지 않습니다.',
        },
      ],
    },
    {
      title: 'DOM 조작과 실제 사용',
      description: 'useRef를 사용한 DOM 조작과 실제 구현 패턴',
      questions: [
        {
          id: 9,
          question:
            '다음 코드의 잠재적 문제점은 무엇인가요?\n\nfunction AutoFocus() {\n  const inputRef = useRef(null);\n  inputRef.current.focus();\n  return <input ref={inputRef} />;\n}',
          options: [
            'useRef 대신 useState를 사용해야 함',
            '마운트 전에 DOM 노드에 접근하려고 시도',
            'ref 속성이 잘못 사용됨',
            'focus() 메서드가 잘못 사용됨',
          ],
          correctAnswer: 1,
          explanation:
            '컴포넌트가 마운트되기 전에 ref.current는 null입니다. DOM 노드 접근은 useEffect 내에서 수행해야 합니다.',
        },
        {
          id: 10,
          question: 'video 엘리먼트를 제어할 때 useRef 사용이 적절한 이유는?',
          options: [
            '비디오 재생 상태를 관리하기 위해',
            '재생/일시정지와 같은 명령형 API를 사용하기 위해',
            '비디오 소스를 동적으로 변경하기 위해',
            '비디오 로딩 상태를 추적하기 위해',
          ],
          correctAnswer: 1,
          explanation:
            'video 엘리먼트는 play(), pause()와 같은 명령형 API를 제공합니다. 이러한 메서드를 호출하기 위해서는 useRef를 통해 DOM 노드에 직접 접근해야 합니다.',
        },
        {
          id: 11,
          question:
            '스크롤 위치를 저장하고 복원하는 코드에서 잘못된 부분은?\n\nfunction ScrollRestore() {\n  const [scrollPos, setScrollPos] = useState(0);\n  \n  useEffect(() => {\n    window.scrollTo(0, scrollPos);\n  }, []);\n  \n  return <div>컨텐츠</div>;\n}',
          options: [
            'useRef 대신 useState를 사용',
            'useEffect의 의존성 배열이 잘못됨',
            'window.scrollTo 사용법이 잘못됨',
            'return 문이 잘못됨',
          ],
          correctAnswer: 0,
          explanation:
            '스크롤 위치와 같이 렌더링에 영향을 주지 않는 값은 useState 대신 useRef를 사용하는 것이 적절합니다. 불필요한 리렌더링을 방지할 수 있습니다.',
        },
        {
          id: 12,
          question: '다음 중 커스텀 Hook에서 ref를 다루는 올바른 방법은?',
          options: [
            'ref를 직접 반환',
            'ref.current 값만 반환',
            '새로운 ref 객체를 매번 생성하여 반환',
            'ref 값을 state로 변환하여 반환',
          ],
          correctAnswer: 0,
          explanation:
            '커스텀 Hook에서는 ref 객체를 직접 반환하는 것이 좋습니다. 이를 통해 Hook을 사용하는 컴포넌트에서 ref의 모든 기능을 활용할 수 있습니다.',
        },
        {
          id: 13,
          question:
            '다음 코드의 문제점은?\n\nfunction TextInput({ inputRef }) {\n  return <input ref={inputRef} />;\n}',
          options: [
            'props로 ref를 전달할 수 없음',
            'forwardRef를 사용하지 않음',
            'inputRef 대신 ref를 사용해야 함',
            'useRef를 사용하지 않음',
          ],
          correctAnswer: 1,
          explanation:
            '다른 컴포넌트에 ref를 전달하려면 forwardRef로 컴포넌트를 감싸야 합니다. 단순히 props로 전달하는 것은 React의 ref 시스템과 통합되지 않습니다.',
        },
        {
          id: 14,
          question: 'useRef를 사용한 이벤트 리스너 관리의 장점이 아닌 것은?',
          options: [
            '메모리 누수 방지',
            '이벤트 핸들러 업데이트 감지',
            '클린업 처리 용이',
            '리렌더링 방지',
          ],
          correctAnswer: 1,
          explanation:
            'useRef는 값이 변경되어도 이를 감지하지 않습니다. 이벤트 핸들러 업데이트를 감지하려면 useEffect의 의존성 배열을 사용해야 합니다.',
        },
        {
          id: 15,
          question: '불필요한 ref 생성을 피하는 방법으로 적절하지 않은 것은?',
          options: [
            '조건부로 ref 생성하기',
            'ref 객체를 메모이제이션하기',
            '컴포넌트 외부에서 ref 생성하기',
            '가능한 경우 state 사용하기',
          ],
          correctAnswer: 2,
          explanation:
            '컴포넌트 외부에서 ref를 생성하면 모든 컴포넌트 인스턴스가 동일한 ref를 공유하게 되어 예상치 못한 문제가 발생할 수 있습니다.',
        },
        {
          id: 16,
          question:
            '다음 중 ref를 사용한 애니메이션 구현 시 고려사항이 아닌 것은?',
          options: [
            'requestAnimationFrame ID 저장',
            '클린업 시 애니메이션 취소',
            '애니메이션 상태를 ref로 관리',
            'CSS 트랜지션 대신 항상 JavaScript 애니메이션 사용',
          ],
          correctAnswer: 3,
          explanation:
            '단순한 애니메이션의 경우 CSS 트랜지션이 성능상 더 유리할 수 있습니다. ref는 복잡한 애니메이션이나 JavaScript가 필요한 경우에만 사용하는 것이 좋습니다.',
        },
      ],
    },
    {
      title: '심화 개념과 최적화',
      description: 'useRef의 심화 사용법과 최적화 기법',
      questions: [
        {
          id: 17,
          question:
            '다음 중 useRef를 사용한 비용이 큰 객체의 초기화 처리 방법으로 가장 적절한 것은?',
          options: [
            'useState와 useEffect 조합 사용',
            'useRef 초기값으로 직접 객체 생성',
            '지연 초기화 패턴 사용 (ref.current가 null일 때만 생성)',
            '메모이제이션된 값을 초기값으로 사용',
          ],
          correctAnswer: 2,
          explanation:
            '비용이 큰 객체는 필요할 때만 생성하는 것이 좋습니다. ref.current가 null인지 확인하고 null일 때만 객체를 생성하는 지연 초기화 패턴을 사용하면 불필요한 객체 생성을 피할 수 있습니다.',
        },
        {
          id: 18,
          question:
            '다음 코드의 잠재적 문제점은?\n\nfunction Timer() {\n  const timerRef = useRef();\n  \n  useEffect(() => {\n    timerRef.current = setInterval(() => {\n      // 작업 수행\n    }, 1000);\n  }, []);\n\n  return <div>Timer</div>;\n}',
          options: [
            'useRef 대신 useState를 사용해야 함',
            'setInterval이 잘못 사용됨',
            '클린업 함수가 없음',
            '의존성 배열이 잘못됨',
          ],
          correctAnswer: 2,
          explanation:
            'setInterval을 사용할 때는 반드시 클린업 함수에서 clearInterval을 호출해야 합니다. 그렇지 않으면 컴포넌트가 언마운트되어도 타이머가 계속 실행되어 메모리 누수가 발생할 수 있습니다.',
        },
        {
          id: 19,
          question:
            'useRef를 사용해 이전 값을 저장할 때 발생할 수 있는 문제점은?',
          options: [
            '값이 즉시 업데이트되지 않음',
            '렌더링마다 값이 초기화됨',
            '메모리 사용량이 증가함',
            '불필요한 리렌더링이 발생함',
          ],
          correctAnswer: 0,
          explanation:
            'useRef를 사용해 이전 값을 저장할 때, 값의 업데이트는 다음 렌더링 때까지 반영되지 않습니다. 이는 useEffect나 이벤트 핸들러에서 ref를 업데이트할 때 주의해야 할 점입니다.',
        },
        {
          id: 20,
          question:
            '컴포넌트의 이전 props나 state를 저장하는 커스텀 훅을 작성할 때 가장 적절한 방법은?',
          options: [
            'useState와 useEffect 사용',
            'useRef와 useEffect 사용',
            'useCallback과 useRef 사용',
            'useMemo와 useState 사용',
          ],
          correctAnswer: 1,
          explanation:
            '이전 값을 저장할 때는 useRef와 useEffect의 조합이 가장 적절합니다. useRef는 값을 유지하고, useEffect는 렌더링이 완료된 후 값을 업데이트하는 데 사용됩니다.',
        },
        {
          id: 21,
          question:
            '다음 중 ref 콜백 함수를 사용한 성능 최적화 방법으로 올바른 것은?',
          options: [
            '매 렌더링마다 새로운 콜백 함수 생성',
            'useCallback으로 콜백 함수 메모이제이션',
            '콜백 함수를 컴포넌트 외부에 정의',
            'useState로 콜백 함수 관리',
          ],
          correctAnswer: 1,
          explanation:
            'ref 콜백 함수를 useCallback으로 메모이제이션하면 불필요한 함수 재생성을 방지하고, 콜백이 불필요하게 호출되는 것을 막을 수 있습니다.',
        },
        {
          id: 22,
          question: 'React.memo로 감싼 컴포넌트에 ref를 전달할 때 주의할 점은?',
          options: [
            'ref는 메모이제이션에 영향을 주지 않음',
            'ref 변경이 항상 리렌더링을 유발함',
            'forwardRef와 함께 사용해야만 함',
            'useImperativeHandle이 필요함',
          ],
          correctAnswer: 0,
          explanation:
            'ref는 React.memo의 prop 비교에서 제외됩니다. 따라서 ref가 변경되어도 메모이제이션된 컴포넌트의 리렌더링에 영향을 주지 않습니다.',
        },
        {
          id: 23,
          question:
            'useRef를 사용하여 DOM 측정(예: 크기, 위치)을 할 때 가장 적절한 방법은?',
          options: [
            '렌더링 중에 직접 측정',
            'useLayoutEffect에서 측정',
            'useState로 측정값 관리',
            'setInterval로 주기적 측정',
          ],
          correctAnswer: 1,
          explanation:
            'DOM 측정은 useLayoutEffect에서 수행해야 합니다. useLayoutEffect는 DOM 업데이트 직후, 브라우저가 화면을 다시 그리기 전에 동기적으로 실행되므로 깜빡임 없이 정확한 측정이 가능합니다.',
        },
        {
          id: 24,
          question:
            'useRef를 사용한 폼 제어에서 성능을 최적화하는 방법으로 적절하지 않은 것은?',
          options: [
            '불필요한 상태 업데이트 방지',
            '모든 입력값을 ref로 관리',
            '필요한 경우에만 ref.current 접근',
            '제어 컴포넌트와 비제어 컴포넌트의 적절한 조합',
          ],
          correctAnswer: 1,
          explanation:
            '모든 입력값을 ref로 관리하는 것은 좋지 않습니다. 실시간 유효성 검사나 UI 업데이트가 필요한 필드는 state로 관리하고, 제출 시에만 필요한 값은 ref로 관리하는 것이 적절합니다.',
        },
      ],
    },
  ],
};
