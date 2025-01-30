import { Quiz } from '@/types/quiz.type';

export const quiz: Quiz = {
  title: 'React useImperativeHandle Hook 마스터하기',
  description:
    'useImperativeHandle Hook의 개념, 사용법, 그리고 실제 응용에 대한 종합 퀴즈입니다.',
  categories: [
    {
      title: '기본 개념',
      description: 'useImperativeHandle의 기본적인 이해와 사용법',
      questions: [
        {
          id: 1,
          question: 'useImperativeHandle Hook의 주요 목적은 무엇인가요?',
          options: [
            '컴포넌트의 상태를 관리하기 위해',
            '부모 컴포넌트에 노출되는 ref 핸들을 커스터마이징하기 위해',
            '컴포넌트의 생명주기를 관리하기 위해',
            '컴포넌트의 props를 관리하기 위해',
          ],
          correctAnswer: 1,
          explanation:
            'useImperativeHandle은 부모 컴포넌트에 노출되는 ref 핸들을 사용자가 정의할 수 있게 해주는 Hook입니다.',
        },
        {
          id: 2,
          question:
            'useImperativeHandle Hook의 세 번째 매개변수 dependencies의 역할은 무엇인가요?',
          options: [
            'createHandle 함수가 반환하는 메서드들의 목록',
            'ref 객체의 의존성 배열',
            'createHandle 코드 내부에서 참조하는 모든 반응형 값들의 배열',
            '부모 컴포넌트로부터 전달받은 props의 목록',
          ],
          correctAnswer: 2,
          explanation:
            'dependencies는 createHandle 코드 내부에서 참조하는 모든 반응형 값들의 배열로, useEffect와 유사한 역할을 합니다.',
        },
        {
          id: 3,
          question:
            '다음 코드에서 잘못된 부분은 무엇인가요?\n\nconst MyComponent = (props, ref) => {\n  useImperativeHandle(ref, () => ({\n    focus() {\n      // focus 로직\n    }\n  }));\n  return <div>...</div>\n};',
          options: [
            'useImperativeHandle의 사용법이 잘못됨',
            '컴포넌트가 forwardRef로 감싸져 있지 않음',
            'ref 매개변수의 위치가 잘못됨',
            'return 문이 잘못됨',
          ],
          correctAnswer: 1,
          explanation:
            '컴포넌트는 forwardRef로 감싸져 있어야 ref를 전달받을 수 있습니다.',
        },
        {
          id: 4,
          question:
            'useImperativeHandle을 사용할 때 반드시 필요한 React Hook은 무엇인가요?',
          options: ['useState', 'useEffect', 'forwardRef', 'useContext'],
          correctAnswer: 2,
          explanation:
            'useImperativeHandle을 사용하기 위해서는 반드시 forwardRef로 컴포넌트를 감싸야 합니다.',
        },
        {
          id: 5,
          question:
            'ref를 통해 DOM 노드의 일부 메서드만 노출하는 이유는 무엇인가요?',
          options: [
            '성능 최적화를 위해',
            '컴포넌트의 캡슐화와 제어를 위해',
            '메모리 사용량을 줄이기 위해',
            '브라우저 호환성을 위해',
          ],
          correctAnswer: 1,
          explanation:
            '특정 메서드만 노출함으로써 컴포넌트의 내부 구현을 캡슐화하고, 의도하지 않은 DOM 조작을 방지할 수 있습니다.',
        },
      ],
    },

    {
      title: '고급 개념 및 패턴',
      description: 'useImperativeHandle의 고급 사용법과 패턴',
      questions: [
        {
          id: 6,
          question:
            '다음 중 useImperativeHandle을 사용할 때 권장되는 패턴이 아닌 것은 무엇인가요?',
          options: [
            '필요한 메서드만 선택적으로 노출하기',
            '모든 내부 상태를 ref를 통해 접근 가능하게 만들기',
            '복잡한 동작을 단일 메서드로 추상화하기',
            '선언적인 방식을 우선적으로 고려하기',
          ],
          correctAnswer: 1,
          explanation:
            '내부 상태를 모두 노출하는 것은 컴포넌트의 캡슐화를 해치고 유지보수를 어렵게 만들 수 있습니다.',
        },
        {
          id: 7,
          question: 'Modal 컴포넌트에서 다음 중 더 권장되는 방식은 무엇인가요?',
          options: [
            'ref로 { open, close } 메서드 노출하기',
            'isOpen prop으로 상태 관리하기',
            'DOM 직접 조작으로 모달 제어하기',
            '전역 상태로 모달 관리하기',
          ],
          correctAnswer: 1,
          explanation:
            '가능하면 선언적인 방식(props)을 사용하는 것이 React의 데이터 흐름 원칙에 부합합니다.',
        },
        {
          id: 8,
          question:
            '여러 개의 ref를 조합할 때 발생할 수 있는 잠재적인 문제점은 무엇인가요?',
          options: [
            '메모리 누수',
            '순환 참조',
            '비동기 작업의 경쟁 상태',
            '렌더링 성능 저하',
          ],
          correctAnswer: 2,
          explanation:
            '여러 ref를 조합할 때 비동기 작업이 포함된 경우 경쟁 상태가 발생할 수 있으며, 이는 예기치 않은 동작을 초래할 수 있습니다.',
        },
        {
          id: 9,
          question:
            '다음 코드의 잠재적인 문제점은 무엇인가요?\n\nconst MyInput = forwardRef((props, ref) => {\n  const inputRef = useRef(null);\n  useImperativeHandle(ref, () => ({\n    focus() {\n      inputRef.current.focus();\n    }\n  }));\n  return <input {...props} ref={inputRef} />;\n});',
          options: [
            'dependencies 배열이 누락됨',
            'props spreading이 안전하지 않음',
            'ref 객체가 제대로 초기화되지 않음',
            'useImperativeHandle이 불필요함',
          ],
          correctAnswer: 0,
          explanation:
            'dependencies 배열이 누락되면 불필요한 재생성이 발생할 수 있으며, 성능 최적화의 기회를 놓칠 수 있습니다.',
        },
        {
          id: 10,
          question:
            'useImperativeHandle과 함께 자주 사용되는 패턴이 아닌 것은?',
          options: [
            'Compound Components',
            'Render Props',
            'Higher Order Components',
            'Custom Hooks',
          ],
          correctAnswer: 1,
          explanation:
            'Render Props 패턴은 주로 컴포넌트 로직 재사용을 위한 것으로, ref와 관련된 useImperativeHandle과는 잘 어울리지 않습니다.',
        },
        {
          id: 11,
          question:
            'useImperativeHandle을 사용할 때 고려해야 할 브라우저 호환성 이슈는 무엇인가요?',
          options: [
            'Internet Explorer에서 ref 동작 방식의 차이',
            'Safari에서의 메모리 누수 문제',
            'Firefox에서의 이벤트 버블링 이슈',
            '호환성 이슈 없음',
          ],
          correctAnswer: 3,
          explanation:
            'useImperativeHandle은 React의 내부 기능으로, 특별한 브라우저 호환성 이슈가 없습니다.',
        },
      ],
    },

    {
      title: '실전 및 최적화',
      description: 'useImperativeHandle의 실제 활용과 성능 최적화',
      questions: [
        {
          id: 12,
          question:
            '다음 중 useImperativeHandle을 사용한 성능 최적화 방법으로 올바른 것은?',
          options: [
            '모든 메서드를 useCallback으로 감싸기',
            '핸들러 함수를 컴포넌트 외부로 이동',
            '필요한 의존성만 배열에 포함하고 메모이제이션 활용',
            '매 렌더링마다 새로운 핸들러 생성',
          ],
          correctAnswer: 2,
          explanation:
            '필요한 의존성만 포함하고 메모이제이션을 활용하면 불필요한 핸들러 재생성을 방지할 수 있습니다.',
        },
        {
          id: 13,
          question:
            'useImperativeHandle을 사용하는 컴포넌트를 테스트할 때 가장 중요한 고려사항은?',
          options: [
            '렌더링 성능 측정',
            'ref로 노출된 메서드들의 동작 검증',
            '스타일 검증',
            '프로퍼티 타입 검사',
          ],
          correctAnswer: 1,
          explanation:
            'ref를 통해 노출된 메서드들이 의도한 대로 동작하는지 검증하는 것이 가장 중요합니다.',
        },
        {
          id: 14,
          question:
            '다음 코드의 잠재적인 메모리 누수 위험은 무엇인가요?\n\nconst VideoPlayer = forwardRef((props, ref) => {\n  const playerRef = useRef(null);\n  useImperativeHandle(ref, () => ({\n    play() {\n      const interval = setInterval(() => {\n        // 비디오 재생 로직\n      }, 1000);\n    }\n  }));\n  return <video ref={playerRef} />;\n});',
          options: [
            'playerRef가 제대로 정리되지 않음',
            'setInterval이 정리되지 않음',
            'useImperativeHandle이 메모리를 과도하게 사용',
            'video 엘리먼트가 제거되지 않음',
          ],
          correctAnswer: 1,
          explanation:
            'setInterval에 대한 cleanup이 없어 컴포넌트가 언마운트되어도 계속 실행될 수 있습니다.',
        },
        {
          id: 15,
          question:
            'useImperativeHandle과 다른 React Hooks의 실행 순서에 대한 설명으로 옳은 것은?',
          options: [
            'useEffect보다 항상 먼저 실행된다',
            'useLayoutEffect보다 항상 나중에 실행된다',
            '다른 Hooks와 선언된 순서대로 실행된다',
            '가장 마지막에 실행된다',
          ],
          correctAnswer: 2,
          explanation:
            'React Hooks는 선언된 순서대로 실행되며, useImperativeHandle도 이 규칙을 따릅니다.',
        },
        {
          id: 16,
          question:
            '다음 중 useImperativeHandle을 사용할 때 발생할 수 있는 디버깅 이슈가 아닌 것은?',
          options: [
            'React DevTools에서 ref 값 추적의 어려움',
            '비동기 메서드의 에러 처리 복잡성',
            '컴포넌트 리렌더링 추적의 어려움',
            'TypeScript 타입 추론 문제',
          ],
          correctAnswer: 2,
          explanation:
            'useImperativeHandle은 렌더링 사이클과 직접적인 관련이 없어 리렌더링 추적에는 영향을 미치지 않습니다.',
        },
        {
          id: 17,
          question:
            'useImperativeHandle을 사용한 컴포넌트의 SSR(Server-Side Rendering) 관련 설명으로 옳은 것은?',
          options: [
            'SSR 환경에서는 사용할 수 없다',
            '서버와 클라이언트에서 다르게 동작한다',
            'hydration 과정에서 특별한 처리가 필요하다',
            'SSR에 영향을 미치지 않는다',
          ],
          correctAnswer: 3,
          explanation:
            'useImperativeHandle은 클라이언트 사이드 ref 조작에만 관여하므로 SSR에 영향을 미치지 않습니다.',
        },
      ],
    },

    {
      title: '실제 활용 및 에러 케이스',
      description: 'useImperativeHandle의 실제 활용 사례와 일반적인 에러 상황',
      questions: [
        {
          id: 18,
          question:
            "다음 코드에서 발생할 수 있는 문제점을 모두 고르세요.\n\nconst ChildComponent = forwardRef((props, ref) => {\n  const [value, setValue] = useState('');\n  \n  useImperativeHandle(ref, () => ({\n    getValue: () => value,\n    setValue\n  }));\n  \n  return <input value={value} onChange={e => setValue(e.target.value)} />;\n});",
          options: [
            '내부 상태를 직접 노출하여 캡슐화가 깨짐',
            'setValue 노출로 인한 예기치 않은 상태 변경 가능성',
            '불필요한 리렌더링 발생 가능성',
            '위의 모든 경우',
          ],
          correctAnswer: 3,
          explanation:
            '내부 상태를 직접 노출하고 setter를 노출하는 것은 캡슐화를 해치며, 예기치 않은 상태 변경과 리렌더링을 초래할 수 있습니다.',
        },
        {
          id: 19,
          question:
            'useImperativeHandle을 사용할 때 다음 중 가장 적절한 에러 처리 방법은?',
          options: [
            '모든 메서드에서 try-catch 사용',
            '에러를 부모 컴포넌트로 전파',
            '에러 발생 시 콘솔에 로깅',
            '메서드 내에서 에러 발생하지 않도록 방어적 프로그래밍 구현',
          ],
          correctAnswer: 3,
          explanation:
            'ref를 통한 메서드 호출은 에러 전파가 어려우므로, 방어적 프로그래밍을 통해 에러 발생을 예방하는 것이 좋습니다.',
        },
        {
          id: 20,
          question:
            'forwardRef와 useImperativeHandle을 함께 사용할 때 TypeScript에서 가장 좋은 타입 정의 방법은?',
          options: [
            'any 타입 사용',
            'generic 타입으로 정의',
            'interface로 명시적 타입 정의',
            '타입 정의 생략',
          ],
          correctAnswer: 2,
          explanation:
            'interface를 통해 명시적으로 타입을 정의하면 타입 안정성을 보장하고 자동완성 기능을 활용할 수 있습니다.',
        },
        {
          id: 21,
          question:
            'useImperativeHandle을 사용하는 컴포넌트의 라이프사이클에서 ref 메서드 호출이 안전하지 않은 시점은?',
          options: [
            '컴포넌트 마운트 직후',
            '컴포넌트 업데이트 중',
            'useEffect 내부',
            '컴포넌트 마운트 이전',
          ],
          correctAnswer: 3,
          explanation:
            '컴포넌트가 마운트되기 전에는 ref 객체가 초기화되지 않았으므로 메서드 호출이 안전하지 않습니다.',
        },
        {
          id: 22,
          question:
            '다음 중 useImperativeHandle을 사용한 컴포넌트 리팩토링 시 고려해야 할 가장 중요한 점은?',
          options: [
            '성능 최적화',
            '코드 가독성',
            '하위 호환성 유지',
            '테스트 용이성',
          ],
          correctAnswer: 2,
          explanation:
            'ref를 통해 노출된 메서드는 다른 컴포넌트에서 사용 중일 수 있으므로, 하위 호환성을 유지하는 것이 가장 중요합니다.',
        },
      ],
    },
  ],
};
