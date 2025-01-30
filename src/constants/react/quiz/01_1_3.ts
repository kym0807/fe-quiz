import { Quiz } from '@/types/quiz.type';

export const quiz: Quiz = {
  title: 'React useContext 마스터하기',
  description:
    'React의 useContext Hook에 대한 포괄적인 이해를 테스트하는 퀴즈입니다.',
  categories: [
    {
      title: '기본 개념',
      description: 'useContext의 기본적인 개념과 사용법을 테스트합니다.',
      questions: [
        {
          id: 1,
          question: 'useContext Hook의 주요 목적은 무엇인가요?',
          options: [
            '컴포넌트의 state를 관리하기 위해',
            '트리 깊숙이 데이터를 명시적으로 전달하지 않고도 컴포넌트에서 Context를 읽고 구독하기 위해',
            '컴포넌트의 생명주기를 관리하기 위해',
            '컴포넌트 간의 이벤트를 관리하기 위해',
          ],
          correctAnswer: 1,
          explanation:
            'useContext는 prop drilling 없이 컴포넌트 트리 깊숙이 데이터를 전달할 수 있게 해주는 React Hook입니다.',
        },
        {
          id: 2,
          question: 'Context의 값을 결정하는 방식으로 올바른 것은?',
          options: [
            '항상 createContext의 기본값을 사용한다',
            '가장 가까운 부모 Provider의 value 속성 값을 사용한다',
            '모든 Provider의 value 값의 평균을 사용한다',
            '가장 마지막에 렌더링된 Provider의 값을 사용한다',
          ],
          correctAnswer: 1,
          explanation:
            'React는 트리를 검색하여 해당 컴포넌트 위에서 가장 가까운 Provider의 value 값을 사용합니다.',
        },
        {
          id: 3,
          question:
            'Context를 사용할 때 발생할 수 있는 성능 최적화 방법으로 올바른 것은?',
          options: [
            '항상 모든 값을 문자열로 변환하여 전달한다',
            'Context 값으로 객체를 전달할 때 useMemo를 사용하여 메모이제이션한다',
            'Provider를 사용하지 않고 직접 값을 전달한다',
            'Context 대신 항상 props를 사용한다',
          ],
          correctAnswer: 1,
          explanation:
            '객체를 Context 값으로 전달할 때 useMemo를 사용하여 메모이제이션하면 불필요한 리렌더링을 방지할 수 있습니다.',
        },
        {
          id: 4,
          question: '다음 중 Context의 기본값(defaultValue)이 사용되는 경우는?',
          options: [
            'Provider가 존재하지만 value prop이 undefined일 때',
            'Provider가 존재하지만 value prop이 null일 때',
            '트리에 해당 Context의 Provider가 전혀 존재하지 않을 때',
            'Provider가 중첩되어 있을 때',
          ],
          correctAnswer: 2,
          explanation:
            'Context의 기본값은 트리에서 해당 Context의 Provider를 찾을 수 없을 때만 사용됩니다.',
        },
        {
          id: 5,
          question:
            'Context를 사용할 때 주의해야 할 점으로 올바르지 않은 것은?',
          options: [
            'useContext() 호출은 동일한 컴포넌트에서 반환된 Provider의 영향을 받지 않는다',
            'Provider의 value가 변경되면 하위 컴포넌트가 자동으로 리렌더링된다',
            'Context는 prop drilling을 완전히 대체할 수 있다',
            '빌드 시스템에서 중복 모듈이 생성되면 Context가 깨질 수 있다',
          ],
          correctAnswer: 2,
          explanation:
            'Context는 prop drilling의 대안이 될 수 있지만, 모든 상황에서 props를 대체하는 것은 바람직하지 않습니다. Props는 여전히 컴포넌트 간의 명시적인 데이터 흐름을 표현하는 좋은 방법입니다.',
        },
        {
          id: 6,
          question:
            'Context Provider의 value prop으로 함수를 전달할 때 최적화하는 방법은?',
          options: [
            '함수를 클래스 메서드로 변환한다',
            'useCallback Hook으로 함수를 메모이제이션한다',
            '함수를 전달하지 않고 직접 호출한다',
            '함수를 전역 변수로 선언한다',
          ],
          correctAnswer: 1,
          explanation:
            'useCallback Hook을 사용하여 함수를 메모이제이션하면 불필요한 리렌더링을 방지할 수 있습니다.',
        },
        {
          id: 7,
          question:
            'Context를 사용할 때 state 관리는 어디에서 하는 것이 가장 적절한가요?',
          options: [
            '항상 최상위 컴포넌트에서만 관리한다',
            'Context를 사용하는 각 컴포넌트에서 개별적으로 관리한다',
            'Context Provider 컴포넌트나 가장 가까운 공통 부모 컴포넌트에서 관리한다',
            '외부 상태 관리 라이브러리를 반드시 사용해야 한다',
          ],
          correctAnswer: 2,
          explanation:
            '상태를 관리하고 업데이트하는 로직은 Provider 컴포넌트나 관련 컴포넌트들의 가장 가까운 공통 부모 컴포넌트에 위치시키는 것이 좋습니다.',
        },
      ],
    },

    {
      title: '고급 개념',
      description: 'useContext의 고급 사용법과 패턴을 테스트합니다.',
      questions: [
        {
          id: 8,
          question:
            '다음 중 컴포넌트가 Context의 Consumer가 되는 올바른 방법은?',
          options: [
            '컴포넌트에서 createContext를 호출한다',
            '컴포넌트를 Context.Provider로 감싼다',
            '컴포넌트에서 useContext Hook을 호출한다',
            '컴포넌트를 Context.Consumer로 감싼다',
          ],
          correctAnswer: 2,
          explanation:
            'useContext Hook을 호출하는 것이 함수형 컴포넌트에서 Context를 구독하는 현대적인 방법입니다.',
        },
        {
          id: 9,
          question: 'Context Provider 중첩이 필요한 경우는 언제인가요?',
          options: [
            '항상 Context를 중첩해야 한다',
            '서로 다른 범위에서 다른 값을 제공하거나, 여러 종류의 Context를 사용할 때',
            '성능 최적화를 위해서만 사용한다',
            'Context를 절대 중첩해서는 안 된다',
          ],
          correctAnswer: 1,
          explanation:
            'Context Provider 중첩은 서로 다른 범위에서 다른 값을 제공하거나, 여러 종류의 Context를 함께 사용할 때 필요합니다.',
        },
        {
          id: 10,
          question:
            'Context를 사용한 상태 관리와 Redux의 주요 차이점은 무엇인가요?',
          options: [
            'Context는 전역 상태를 지원하지 않는다',
            'Redux는 미들웨어와 개발자 도구를 제공하며, 복잡한 상태 로직을 더 체계적으로 관리할 수 있다',
            'Context는 비동기 작업을 지원하지 않는다',
            'Redux는 컴포넌트 트리 깊숙이 데이터를 전달할 수 없다',
          ],
          correctAnswer: 1,
          explanation:
            'Redux는 미들웨어, 개발자 도구, 예측 가능한 상태 컨테이너 등을 제공하여 복잡한 상태 관리를 더 체계적으로 할 수 있습니다.',
        },
        {
          id: 11,
          question:
            'Context와 함께 useReducer를 사용하는 주된 이유는 무엇인가요?',
          options: [
            '단순히 성능 최적화를 위해',
            '복잡한 상태 로직을 컴포넌트에서 분리하고 관련 로직을 한 곳에서 관리하기 위해',
            'Context API의 제한을 우회하기 위해',
            '클래스 컴포넌트와의 호환성을 위해',
          ],
          correctAnswer: 1,
          explanation:
            'useReducer와 Context를 함께 사용하면 복잡한 상태 로직을 컴포넌트에서 분리하고, 관련된 상태 업데이트 로직을 한 곳에서 관리할 수 있습니다.',
        },
        {
          id: 12,
          question:
            'Context Provider 컴포넌트를 별도의 파일로 분리하는 것의 장점은 무엇인가요?',
          options: [
            '항상 더 나은 성능을 제공한다',
            '코드 재사용성이 높아지고 관심사 분리가 잘 이루어진다',
            '자동으로 메모이제이션을 수행한다',
            '더 적은 코드로 구현할 수 있다',
          ],
          correctAnswer: 1,
          explanation:
            'Provider 컴포넌트를 분리하면 관련 로직을 캡슐화하고, 코드 재사용성을 높이며, 관심사를 잘 분리할 수 있습니다.',
        },
        {
          id: 13,
          question:
            'createContext의 기본값으로 null을 사용하는 것 대신 더 나은 방법은?',
          options: [
            'undefined를 사용한다',
            '빈 객체를 사용한다',
            '실제 사용할 데이터의 형태와 유사한 의미 있는 기본값을 사용한다',
            '기본값은 중요하지 않다',
          ],
          correctAnswer: 2,
          explanation:
            '의미 있는 기본값을 사용하면 Provider 없이 컴포넌트를 렌더링하거나 테스트할 때도 문제없이 동작할 수 있습니다.',
        },
        {
          id: 14,
          question:
            'Context를 사용할 때 발생할 수 있는 불필요한 리렌더링을 방지하는 방법으로 잘못된 것은?',
          options: [
            'Provider의 value prop에 useMemo 사용하기',
            '객체 대신 원시값 전달하기',
            '모든 컴포넌트를 React.memo로 감싸기',
            'Context를 더 작은 단위로 분리하기',
          ],
          correctAnswer: 2,
          explanation:
            '모든 컴포넌트를 React.memo로 감싸는 것은 오히려 불필요한 메모리 사용을 초래할 수 있으며, Context 값 변경 시에는 memo가 리렌더링을 막지 못합니다.',
        },
      ],
    },

    {
      title: '실제 활용과 문제 해결',
      description:
        'useContext의 실제 사용 사례와 문제 해결 방법을 테스트합니다.',
      questions: [
        {
          id: 15,
          question: 'Context가 undefined를 반환하는 일반적인 원인이 아닌 것은?',
          options: [
            'Provider에 value prop이 누락된 경우',
            'Provider와 Consumer가 서로 다른 Context 객체를 참조하는 경우',
            'createContext의 기본값이 설정되지 않은 경우',
            'Context를 사용하는 컴포넌트가 React.StrictMode 내부에 있는 경우',
          ],
          correctAnswer: 3,
          explanation:
            'React.StrictMode는 Context 값에 영향을 주지 않습니다. undefined는 주로 Provider 설정 문제나 빌드 구성 문제로 인해 발생합니다.',
        },
        {
          id: 16,
          question:
            "여러 Provider를 사용할 때 발생할 수 있는 'Provider 피라미드'를 해결하는 가장 좋은 방법은?",
          options: [
            '모든 Context를 하나로 합치기',
            'Context 대신 Redux 사용하기',
            'Provider들을 별도의 컴포넌트로 추출하여 구성하기',
            '전역 변수 사용하기',
          ],
          correctAnswer: 2,
          explanation:
            'Provider들을 별도의 컴포넌트로 추출하면 코드를 더 깔끔하게 구성할 수 있으며, 재사용성도 향상됩니다.',
        },
        {
          id: 17,
          question:
            'Context의 Provider와 Consumer가 서로 다른 번들에 있을 때 발생할 수 있는 문제를 해결하는 방법은?',
          options: [
            'Context 객체를 전역 변수로 만들기',
            '모든 코드를 하나의 번들로 통합하기',
            'Context 대신 props 사용하기',
            'Context 객체를 공유 모듈로 분리하고 해당 모듈을 정확히 한 번만 번들에 포함되도록 보장하기',
          ],
          correctAnswer: 3,
          explanation:
            'Context 객체가 여러 번 번들링되는 것을 방지하기 위해 공유 모듈로 분리하고 정확히 한 번만 번들에 포함되도록 구성해야 합니다.',
        },
        {
          id: 18,
          question:
            'Context API를 사용한 테마 구현에서 발생할 수 있는 가장 흔한 실수는?',
          options: [
            'theme 객체를 매번 새로 생성하여 Provider의 value로 전달',
            '테마 값을 문자열로만 제한',
            'CSS-in-JS 라이브러리와 함께 사용',
            '미디어 쿼리와 함께 사용',
          ],
          correctAnswer: 0,
          explanation:
            'theme 객체를 매번 새로 생성하면 불필요한 리렌더링이 발생할 수 있습니다. useMemo를 사용하여 객체를 메모이제이션해야 합니다.',
        },
        {
          id: 19,
          question:
            'Context와 함께 TypeScript를 사용할 때 고려해야 할 사항이 아닌 것은?',
          options: [
            'Context의 타입을 명시적으로 정의하기',
            'createContext의 기본값 타입 지정하기',
            '모든 Context 관련 코드를 JavaScript로 작성하기',
            'Provider의 value prop 타입 검사하기',
          ],
          correctAnswer: 2,
          explanation:
            'TypeScript를 사용할 때는 Context와 관련된 모든 타입을 명시적으로 정의하여 타입 안정성을 확보해야 합니다.',
        },
        {
          id: 20,
          question:
            'Context를 사용한 인증(Authentication) 구현에서 가장 중요한 고려사항은?',
          options: [
            '최대한 많은 데이터를 Context에 저장하기',
            '인증 상태 변경 시 불필요한 리렌더링 방지하기',
            'localStorage와 동기화하기',
            '모든 인증 로직을 Context 내부에 구현하기',
          ],
          correctAnswer: 1,
          explanation:
            '인증 상태가 변경될 때 불필요한 리렌더링이 발생하지 않도록 최적화하는 것이 중요합니다. 이는 성능에 직접적인 영향을 미칩니다.',
        },
      ],
    },
  ],
};
