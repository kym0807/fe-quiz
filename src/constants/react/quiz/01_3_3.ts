import { Quiz } from '@/types/quiz.type';

export const quiz: Quiz = {
  title: 'React createContext Quiz',
  description: 'React의 Context API와 createContext 함수에 대한 이해',
  categories: [
    {
      title: 'Basic Concepts',
      description: 'createContext의 기본 개념과 사용법',
      questions: [
        {
          id: 1,
          question: 'React의 createContext 함수의 주요 목적은 무엇인가요?',
          options: [
            '전역 상태 관리',
            '컴포넌트 트리 전체에 걸쳐 데이터를 공유',
            '컴포넌트 간 직접적인 통신',
            '상태 변경 감지',
          ],
          correctAnswer: 1,
          explanation:
            'createContext는 컴포넌트 트리 전체에 걸쳐 데이터를 공유할 수 있게 해주는 Context를 생성하는 함수입니다.',
        },
        {
          id: 2,
          question:
            "다음 코드의 실행 결과로 올바른 것은?\n\n```tsx\nconst ThemeContext = createContext('light');\n\nfunction App() {\n  return <Button />;\n}\n\nfunction Button() {\n  const theme = useContext(ThemeContext);\n  return <button>{theme}</button>;\n}\n```",
          options: [
            '버튼이 렌더링되지 않음',
            "버튼에 'light' 텍스트가 표시됨",
            'undefined가 표시됨',
            '에러가 발생함',
          ],
          correctAnswer: 1,
          explanation:
            "Provider가 없는 경우 createContext에 전달된 기본값('light')이 사용됩니다.",
        },
        {
          id: 3,
          question: 'Context 값이 변경될 때 발생하는 일은?',
          options: [
            '애플리케이션 전체가 리렌더링된다',
            '해당 Context를 구독하는 모든 하위 컴포넌트가 리렌더링된다',
            'Provider 컴포넌트만 리렌더링된다',
            '아무 일도 일어나지 않는다',
          ],
          correctAnswer: 1,
          explanation:
            'Context 값이 변경되면 해당 Context를 구독(useContext를 사용)하는 모든 하위 컴포넌트가 리렌더링됩니다.',
        },
        {
          id: 4,
          question: 'Context를 사용하기에 가장 적절한 경우는?',
          options: [
            '특정 컴포넌트에만 필요한 데이터 전달',
            '부모-자식 간의 직접적인 데이터 전달',
            '테마나 사용자 인증 정보와 같은 전역 데이터 공유',
            '컴포넌트의 로컬 상태 관리',
          ],
          correctAnswer: 2,
          explanation:
            'Context는 테마, 현재 로그인한 사용자 정보, 언어 설정, 라우터 정보와 같이 애플리케이션 전반에 걸쳐 공유되어야 하는 데이터에 적합합니다.',
        },
        {
          id: 5,
          question: '다음 중 Context 사용 시 주의사항이 아닌 것은?',
          options: [
            'Provider 없이는 Context 값을 동적으로 변경할 수 없다',
            'Context 값이 변경되면 구독하는 컴포넌트들이 리렌더링된다',
            'createContext의 기본값은 Provider가 없을 때만 사용된다',
            'Context는 반드시 최상위 컴포넌트에서만 생성해야 한다',
          ],
          correctAnswer: 3,
          explanation:
            'Context는 어느 레벨에서든 생성할 수 있습니다. 나머지 옵션들은 모두 실제 주의사항입니다.',
        },
        {
          id: 6,
          question:
            'Context와 Props 중 얕은 깊이의 데이터 전달에 더 적합한 것은?',
          options: [
            'Context',
            'Props',
            '둘 다 동일하게 적합하다',
            '상황에 따라 다르다',
          ],
          correctAnswer: 1,
          explanation:
            '얕은 깊이의 데이터 전달은 Props를 사용하는 것이 더 적합합니다. Context는 깊은 중첩 구조에서 데이터를 공유할 때 유용합니다.',
        },
        {
          id: 7,
          question: 'Provider 컴포넌트를 래핑하는 주된 이유는 무엇인가요?',
          options: [
            '코드 재사용성 향상',
            '상태 관리 로직의 캡슐화',
            '성능 최적화',
            '에러 처리 용이성',
          ],
          correctAnswer: 1,
          explanation:
            'Provider 컴포넌트를 래핑하는 것은 상태 관리 로직을 캡슐화하고 재사용 가능한 형태로 만들기 위함입니다.',
        },
      ],
    },

    {
      title: 'Advanced Patterns',
      description: 'createContext의 심화 패턴과 실제 활용',
      questions: [
        {
          id: 8,
          question:
            "다음 코드에서 발생할 수 있는 문제점은 무엇인가요?\n\ntsx\nconst ThemeContext = createContext();\n\nfunction ThemeProvider({ children }) {\n  const [theme, setTheme] = useState('light');\n  return (\n    <ThemeContext.Provider value={{ theme, setTheme }}>\n      {children}\n    </ThemeContext.Provider>\n  );\n}\n",
          options: [
            'children prop이 잘못 사용됨',
            '초기값이 설정되지 않아 TypeScript에서 타입 추론이 어려움',
            'useState가 잘못 사용됨',
            'Provider가 불필요하게 사용됨',
          ],
          correctAnswer: 1,
          explanation:
            'createContext를 사용할 때 초기값을 제공하지 않으면 TypeScript에서 타입 추론이 어려워질 수 있습니다. 명시적인 타입이나 초기값을 제공하는 것이 좋습니다.',
        },
        {
          id: 9,
          question: 'useReducer와 Context를 함께 사용할 때의 가장 큰 장점은?',
          options: [
            '더 나은 성능',
            '더 쉬운 상태 관리',
            '복잡한 상태 로직의 분리와 재사용성',
            '자동 메모이제이션',
          ],
          correctAnswer: 2,
          explanation:
            'useReducer와 Context를 함께 사용하면 복잡한 상태 로직을 reducer 함수로 분리하여 관리할 수 있으며, 이를 통해 상태 로직의 재사용성과 테스트 용이성이 향상됩니다.',
        },
        {
          id: 10,
          question:
            'Context.Consumer를 사용하지 않고 useContext를 사용하는 것이 권장되는 이유는?',
          options: [
            '더 짧은 코드',
            '더 나은 성능',
            '더 명확한 코드 구조와 훅스와의 일관성',
            '자동 메모이제이션 지원',
          ],
          correctAnswer: 2,
          explanation:
            'useContext는 더 명확한 코드 구조를 제공하고 다른 React 훅들과 일관된 패턴을 유지할 수 있게 해줍니다. Consumer는 render props 패턴을 사용하여 코드가 더 복잡해질 수 있습니다.',
        },
        {
          id: 11,
          question: '다중 Context 사용 시 성능 최적화를 위한 가장 좋은 방법은?',
          options: [
            '모든 Context를 하나로 합치기',
            'Context별로 Provider를 분리하고 필요한 곳에만 배치',
            'Consumer 대신 useContext만 사용하기',
            '모든 컴포넌트를 memo로 감싸기',
          ],
          correctAnswer: 1,
          explanation:
            'Context별로 Provider를 분리하고 필요한 곳에만 배치하면, Context 값이 변경될 때 영향받는 컴포넌트의 범위를 최소화할 수 있습니다.',
        },
        {
          id: 12,
          question:
            '다음 중 Context 값으로 전달하기에 가장 적절하지 않은 것은?',
          options: [
            '테마 설정',
            '컴포넌트 스타일 객체',
            '사용자 인증 정보',
            '자주 변경되는 리스트 데이터',
          ],
          correctAnswer: 3,
          explanation:
            '자주 변경되는 리스트 데이터는 Context로 관리하기에 적절하지 않습니다. Context 값이 변경될 때마다 해당 Context를 구독하는 모든 컴포넌트가 리렌더링되기 때문입니다.',
        },
        {
          id: 13,
          question:
            "다음 코드의 잠재적인 문제점은?\n\ntsx\nfunction ThemeProvider({ children }) {\n  const [theme, setTheme] = useState('light');\n  return (\n    <ThemeContext.Provider value={{ \n      theme,\n      setTheme,\n      toggleTheme: () => setTheme(t => t === 'light' ? 'dark' : 'light')\n    }}>\n      {children}\n    </ThemeContext.Provider>\n  );\n}\n",
          options: [
            'useState의 잘못된 사용',
            '매 렌더링마다 새로운 객체가 생성되어 불필요한 리렌더링 발생',
            'toggleTheme 함수의 잘못된 구현',
            'children prop의 잘못된 사용',
          ],
          correctAnswer: 1,
          explanation:
            'value prop에 매 렌더링마다 새로운 객체를 생성하여 전달하면, Context를 구독하는 모든 컴포넌트가 불필요하게 리렌더링될 수 있습니다. useMemo나 useCallback을 사용하여 최적화할 수 있습니다.',
        },
        {
          id: 14,
          question: 'Context를 사용한 상태 관리의 한계점은?',
          options: [
            '너무 복잡한 API',
            '타입 안정성 부족',
            '성능 최적화의 어려움과 불필요한 리렌더링',
            '서버 사이드 렌더링 미지원',
          ],
          correctAnswer: 2,
          explanation:
            'Context는 값이 변경될 때 해당 Context를 구독하는 모든 컴포넌트가 리렌더링되므로, 큰 규모의 애플리케이션에서 성능 최적화가 어려울 수 있습니다.',
        },
      ],
    },

    {
      title: 'Implementation Best Practices',
      description: 'createContext의 구현 패턴과 모범 사례',
      questions: [
        {
          id: 15,
          question: '다음 중 Context 모듈화의 가장 좋은 방법은?',
          options: [
            '모든 Context를 App.tsx에 정의',
            '각 Context를 독립된 파일로 분리하고 관련 로직도 함께 캡슐화',
            '모든 Context를 하나의 contexts.ts 파일에 모아서 관리',
            '각 컴포넌트 파일 내부에 Context 정의',
          ],
          correctAnswer: 1,
          explanation:
            '각 Context를 독립된 파일로 분리하고 관련 로직을 함께 캡슐화하면 코드의 재사용성과 유지보수성이 향상됩니다.',
        },
        {
          id: 16,
          question:
            'TypeScript와 함께 Context를 사용할 때 가장 권장되는 방식은?',
          options: [
            '타입 없이 사용하고 필요할 때 타입 단언(assertion) 사용',
            'createContext 시점에 기본값과 함께 명시적인 타입 정의',
            'any 타입 사용',
            '런타임에 타입 체크 로직 추가',
          ],
          correctAnswer: 1,
          explanation:
            'createContext를 사용할 때 명시적인 타입과 기본값을 함께 정의하면 타입 안정성을 보장하고 개발 시 자동완성 등의 이점을 얻을 수 있습니다.',
        },
        {
          id: 17,
          question:
            '다음 중 Context Provider의 value prop을 최적화하는 가장 좋은 방법은?',
          options: [
            '매번 새로운 객체 생성',
            'useMemo를 사용하여 value 객체 메모이제이션',
            '전역 변수로 value 객체 관리',
            'useCallback만 사용',
          ],
          correctAnswer: 1,
          explanation:
            'useMemo를 사용하여 value 객체를 메모이제이션하면 불필요한 리렌더링을 방지할 수 있습니다. 이는 특히 value가 객체인 경우 중요합니다.',
        },
        {
          id: 18,
          question: '여러 Provider를 중첩해서 사용할 때 가장 효율적인 구조는?',
          options: [
            '관련 없는 Provider들을 무작위로 중첩',
            '모든 Provider를 하나의 컴포넌트로 통합',
            '논리적으로 관련된 Provider들을 그룹화하고 필요한 범위에만 적용',
            'Provider 대신 Props 사용',
          ],
          correctAnswer: 2,
          explanation:
            '논리적으로 관련된 Provider들을 그룹화하고 필요한 범위에만 적용하면 코드의 구조가 명확해지고 성능도 최적화할 수 있습니다.',
        },
        {
          id: 19,
          question:
            'Context를 사용한 커스텀 훅을 만들 때 다음 코드의 문제점은?\n\ntsx\nfunction useTheme() {\n  const context = useContext(ThemeContext);\n  return context;\n}\n',
          options: [
            'useContext 사용이 잘못됨',
            '반환값의 타입이 명시되지 않음',
            'context가 undefined일 때의 처리가 없음',
            '불필요한 변수 선언',
          ],
          correctAnswer: 2,
          explanation:
            'Context를 사용하는 커스텀 훅에서는 context가 undefined인 경우(Provider 없이 사용되는 경우)에 대한 적절한 에러 처리나 기본값 처리가 필요합니다.',
        },
        {
          id: 20,
          question:
            '다음 중 Context를 사용한 상태 관리에서 발생할 수 있는 성능 문제를 해결하는 가장 좋은 방법은?',
          options: [
            '모든 컴포넌트를 React.memo로 감싸기',
            '상태를 더 작은 단위로 분리하여 여러 Context로 관리',
            '모든 상태를 하나의 Context로 통합',
            'Context 대신 Redux 사용',
          ],
          correctAnswer: 1,
          explanation:
            '상태를 더 작은 단위로 분리하여 여러 Context로 관리하면, 각 상태 변경 시 영향받는 컴포넌트의 범위를 최소화할 수 있습니다. 이는 불필요한 리렌더링을 방지하는 효과적인 방법입니다.',
        },
      ],
    },
  ],
};
