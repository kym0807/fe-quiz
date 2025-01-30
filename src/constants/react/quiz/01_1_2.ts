import { Quiz } from '@/types/quiz.type';

export const quiz: Quiz = {
  title: 'useCallback',
  description: '함수 정의를 리렌더링 사이에 캐싱할 수 있게 해주는 React Hook',
  categories: [
    {
      title: 'useCallback',
      description: 'useCallback에 대한 이해를 평가하는 퀴즈',
      questions: [
        {
          id: 1,
          question: 'useCallback은 어떤 목적으로 사용되는 React Hook인가요?',
          options: [
            '상태를 관리하기 위해',
            '함수를 메모이제이션하여 리렌더링 시 캐싱하기 위해',
            '컴포넌트의 생명주기를 제어하기 위해',
            'DOM 요소에 직접 접근하기 위해',
          ],
          correctAnswer: 1,
          explanation:
            'useCallback은 함수를 메모이제이션하여 리렌더링 시에 함수를 캐싱할 수 있게 해주는 Hook입니다.',
        },
        {
          id: 2,
          question: 'useCallback의 첫 번째 매개변수는 무엇을 의미하나요?',
          options: [
            '캐싱하고 싶은 함수',
            '의존성 배열',
            '초기 상태값',
            '업데이트 함수',
          ],
          correctAnswer: 0,
          explanation:
            'useCallback의 첫 번째 매개변수는 캐싱하고 싶은 함수입니다.',
        },
        {
          id: 3,
          question:
            'useCallback의 두 번째 매개변수인 dependencies는 무엇을 포함해야 하나요?',
          options: [
            '모든 props과 state',
            '함수 내부에서 참조하는 반응형 값들',
            '컴포넌트의 이름',
            '컴포넌트의 부모 요소',
          ],
          correctAnswer: 1,
          explanation:
            'dependencies는 함수 내부에서 참조하는 모든 반응형 값들, 즉 props, state, 컴포넌트 내부의 변수 등을 포함해야 합니다.',
        },
        {
          id: 4,
          question:
            'useCallback이 반환하는 값은 최초 렌더링 시 어떤 값을 반환하나요?',
          options: [
            'undefined',
            'null',
            '전달된 함수를 그대로 반환',
            '빈 함수',
          ],
          correctAnswer: 2,
          explanation:
            'useCallback은 최초 렌더링 시 전달된 함수를 그대로 반환합니다.',
        },
        {
          id: 5,
          question: 'useCallback과 useMemo의 주요 차이점은 무엇인가요?',
          options: [
            'useCallback은 함수를, useMemo는 값을 캐싱합니다.',
            'useCallback은 상태를 관리하고, useMemo는 함수를 실행합니다.',
            'useCallback은 리렌더링을 트리거하고, useMemo는 트리거하지 않습니다.',
            'useCallback은 클래스 컴포넌트에서만 사용됩니다.',
          ],
          correctAnswer: 0,
          explanation:
            'useCallback은 함수를 메모이제이션하여 캐싱하고, useMemo는 계산된 값을 캐싱합니다.',
        },
        {
          id: 6,
          question:
            'useCallback을 사용하여 자식 컴포넌트의 리렌더링을 방지할 때 주로 어떤 React API와 함께 사용되나요?',
          options: ['useState', 'useEffect', 'memo', 'useRef'],
          correctAnswer: 2,
          explanation:
            'useCallback은 memo로 감싼 자식 컴포넌트에 전달되는 콜백 함수를 최적화할 때 주로 사용됩니다.',
        },
        {
          id: 7,
          question:
            'useCallback을 Effect 내부에서 사용할 때의 장점은 무엇인가요?',
          options: [
            'Effect가 자주 실행되게 한다.',
            'Effect가 불필요하게 자주 실행되는 것을 방지할 수 있다.',
            'Effect를 제거할 수 있다.',
            'Effect의 의존성을 자동으로 관리할 수 있다.',
          ],
          correctAnswer: 1,
          explanation:
            'useCallback을 사용하면 Effect의 의존성 배열에서 함수를 안정적으로 유지하여, Effect가 불필요하게 자주 실행되는 것을 방지할 수 있습니다.',
        },
        {
          id: 8,
          question:
            'useCallback을 사용하지 않고 리스트 항목에서 콜백 함수를 정의하면 어떤 문제가 발생할 수 있나요?',
          options: [
            '메모리 누수가 발생할 수 있다.',
            '콜백 함수가 계속 새로 생성되어 자식 컴포넌트의 불필요한 리렌더링을 유발할 수 있다.',
            '상태가 제대로 업데이트되지 않는다.',
            'useEffect가 실행되지 않는다.',
          ],
          correctAnswer: 1,
          explanation:
            '루프 안에서 함수를 정의하면 매 렌더링마다 새로운 함수가 생성되어, memo로 감싼 자식 컴포넌트의 리렌더링을 유발할 수 있습니다.',
        },
        {
          id: 9,
          question:
            'useCallback을 사용할 때 의존성 배열에 상태 업데이트 함수를 포함시키지 않아도 되는 경우는 어떤 경우인가요?',
          options: [
            '상태 업데이트 함수가 불변일 때',
            '상태 업데이트 함수가 자주 변경될 때',
            '상태 업데이트 함수를 prevState 기반으로 사용할 때',
            '상태 업데이트 함수가 외부 모듈에서 올 때',
          ],
          correctAnswer: 2,
          explanation:
            '상태 업데이트 함수를 prevState 기반으로 사용할 때는 의존성 배열에 상태를 포함시키지 않아도 됩니다.',
        },
        {
          id: 10,
          question: 'useCallback은 어떤 조건에서 캐시를 버릴 수 있나요?',
          options: [
            '컴포넌트가 unmount될 때',
            '컴포넌트가 새로운 props을 받을 때',
            '개발 환경에서 컴포넌트 파일을 수정할 때, 컴포넌트가 초기 마운트 중에 일시 중단될 때, 가상화된 리스트에서 항목이 스크롤되어 벗어날 때',
            '모든 렌더링 시',
          ],
          correctAnswer: 2,
          explanation:
            'React는 개발 환경에서 컴포넌트 파일을 수정할 때, 컴포넌트가 초기 마운트 중에 일시 중단될 때, 가상화된 리스트에서 항목이 스크롤되어 벗어날 때 캐시를 버릴 수 있습니다.',
        },
      ],
    },

    {
      title: 'useCallback',
      description: 'useCallback에 대한 이해를 평가하는 퀴즈',
      questions: [
        {
          id: 11,
          question:
            'useCallback을 사용할 때, 어떤 경우에 캐시된 함수가 재사용되지 않나요?',
          options: [
            '의존성 배열이 변경된 경우',
            '의존성 배열이 고정된 경우',
            '함수가 빈 배열을 의존성으로 가질 때',
            '함수가 외부 모듈에서 가져올 때',
          ],
          correctAnswer: 0,
          explanation:
            '의존성 배열에 포함된 값이 변경되면, useCallback은 새로운 함수를 생성하여 반환합니다.',
        },
        {
          id: 12,
          question: '다음 중 useCallback을 사용하는 올바른 예는 무엇인가요?',
          options: [
            '컴포넌트 내부에서 상태를 직접 변경할 때',
            '리스트의 각 항목에 대한 고유한 핸들러를 생성할 때',
            '컴포넌트가 unmount될 때 정리 작업을 수행할 때',
            'CSS 스타일을 동적으로 변경할 때',
          ],
          correctAnswer: 1,
          explanation:
            'useCallback은 리스트의 각 항목에 대한 콜백 함수를 메모이제이션하여 불필요한 리렌더링을 방지할 때 유용합니다.',
        },
        {
          id: 13,
          question: 'useCallback을 사용할 때 발생할 수 있는 단점은 무엇인가요?',
          options: [
            '메모리 사용량 증가',
            '컴포넌트의 상태가 초기화됨',
            '함수의 실행 속도가 느려짐',
            '의존성 배열이 필요 없어짐',
          ],
          correctAnswer: 0,
          explanation:
            'useCallback을 과도하게 사용하면 메모리 사용량이 증가할 수 있습니다.',
        },
        {
          id: 14,
          question:
            '다음 중 useCallback을 사용하지 않아도 되는 상황은 어떤 것인가요?',
          options: [
            '자식 컴포넌트가 React.memo로 최적화되어 있을 때',
            '콜백 함수가 자주 변경되지 않을 때',
            '콜백 함수가 간단하고 빠르게 실행될 때',
            '모든 자식 컴포넌트가 useCallback을 필요로 할 때',
          ],
          correctAnswer: 2,
          explanation:
            '콜백 함수가 간단하고 실행 속도가 빨라 최적화가 필요하지 않은 경우 useCallback을 사용하지 않아도 됩니다.',
        },
        {
          id: 15,
          question:
            'useCallback을 사용하여 커스텀 Hook을 만들 때 주의해야 할 점은 무엇인가요?',
          options: [
            '반드시 useMemo와 함께 사용해야 한다.',
            '반환하는 모든 함수들을 useCallback으로 감싸야 한다.',
            '의존성 배열을 생략할 수 있다.',
            '커스텀 Hook 내부에서만 사용할 수 있다.',
          ],
          correctAnswer: 1,
          explanation:
            '커스텀 Hook에서 반환하는 함수들은 useCallback으로 감싸서 메모이제이션하는 것이 좋습니다.',
        },
        {
          id: 16,
          question:
            'useCallback과 useEffect를 함께 사용할 때, useCallback이 필요한 이유는 무엇인가요?',
          options: [
            'useEffect의 의존성 배열을 단순화하기 위해',
            'useEffect 내부에서 함수를 생성하지 않기 위해',
            'useEffect가 비동기적으로 실행되도록 하기 위해',
            'useEffect의 실행 빈도를 증가시키기 위해',
          ],
          correctAnswer: 0,
          explanation:
            'useCallback을 사용하면 useEffect의 의존성 배열에 포함된 함수가 안정적으로 유지되어 불필요한 Effect 실행을 방지할 수 있습니다.',
        },
        {
          id: 17,
          question:
            '다음 코드에서 useCallback이 올바르게 사용된 부분은 어디인가요?',
          options: [
            '`const handleClick = () => { /* 함수 내용 */ }`',
            '`const handleClick = useCallback(() => { /* 함수 내용 */ }, [dependency]);`',
            '`function handleClick() { /* 함수 내용 */ }`',
            '`const handleClick = React.useMemo(() => () => { /* 함수 내용 */ }, [dependency]);`',
          ],
          correctAnswer: 1,
          explanation:
            'useCallback을 사용하여 handleClick 함수를 의존성에 따라 메모이제이션하고 있습니다.',
        },
        {
          id: 18,
          question:
            'useCallback을 사용할 때, 의존성 배열을 빈 배열로 설정하면 어떤 결과가 발생하나요?',
          options: [
            '함수가 매 렌더링마다 새로 생성된다.',
            '함수가 한 번만 생성되고 이후로는 재사용된다.',
            '함수가 의존성에 따라 조건부로 생성된다.',
            '의존성 배열이 필요 없어져서 에러가 발생한다.',
          ],
          correctAnswer: 1,
          explanation:
            '의존성 배열을 빈 배열로 설정하면 함수가 한 번만 생성되고 이후 리렌더링 시에 동일한 함수가 재사용됩니다.',
        },
        {
          id: 19,
          question:
            'useCallback을 사용하지 않고 자식 컴포넌트에 함수를 전달하면 어떤 일이 발생할 수 있나요?',
          options: [
            '자식 컴포넌트가 메모이제이션되지 않아 항상 리렌더링된다.',
            '부모 컴포넌트의 상태가 변경되지 않는다.',
            '자식 컴포넌트에서 에러가 발생한다.',
            '부모 컴포넌트가 unmount되지 않는다.',
          ],
          correctAnswer: 0,
          explanation:
            'useCallback을 사용하지 않으면 매 렌더링마다 새로운 함수가 생성되어, memo로 감싼 자식 컴포넌트가 불필요하게 리렌더링될 수 있습니다.',
        },
        {
          id: 20,
          question:
            '다음 중 useCallback을 사용할 때 권장되는 의존성 배열의 작성 방법은 무엇인가요?',
          options: [
            '의존성 배열을 객체로 전달한다.',
            '의존성 배열을 인라인으로 작성한다.',
            '의존성 배열을 빈 배열로 항상 설정한다.',
            '의존성 배열을 생략한다.',
          ],
          correctAnswer: 1,
          explanation:
            '의존성 배열은 `[dep1, dep2, dep3]`과 같이 인라인으로 작성하여 고정된 개수의 항목을 가져야 합니다.',
        },
      ],
    },
    {
      title: '관련 개념',
      description: 'useCallback과 관련된 개념을 평가하는 퀴즈',
      questions: [
        {
          id: 21,
          question:
            'React.memo와 useCallback을 함께 사용하는 주된 목적은 무엇인가요?',
          options: [
            '컴포넌트의 스타일을 동적으로 변경하기 위해',
            '자식 컴포넌트의 리렌더링을 최적화하기 위해',
            '상태를 전역적으로 관리하기 위해',
            '비동기 작업을 처리하기 위해',
          ],
          correctAnswer: 1,
          explanation:
            'React.memo는 자식 컴포넌트의 리렌더링을 방지하고, useCallback은 전달되는 콜백 함수를 메모이제이션하여 함께 사용하면 효과적인 최적화를 이룰 수 있습니다.',
        },
        {
          id: 22,
          question: 'useMemo와 useCallback의 내부 구현 관계는 무엇인가요?',
          options: [
            'useCallback은 useMemo를 내부에서 호출하여 구현된다.',
            'useMemo는 useCallback을 내부에서 호출하여 구현된다.',
            '두 Hook은 완전히 독립적으로 동작한다.',
            'useCallback과 useMemo는 동일한 기능을 제공한다.',
          ],
          correctAnswer: 0,
          explanation:
            'useCallback은 내부적으로 useMemo를 사용하여 함수를 메모이제이션합니다.',
        },
        {
          id: 23,
          question: '다음 중 useCallback과 가장 관련이 깊은 개념은 무엇인가요?',
          options: ['Virtual DOM', 'Closure', 'CSS-in-JS', 'Event Bubbling'],
          correctAnswer: 1,
          explanation:
            'useCallback은 함수의 클로저를 관리하고 메모이제이션하는 데 관련이 깊습니다.',
        },
        {
          id: 24,
          question:
            'useCallback을 사용할 때, 함수를 의존성 배열에 포함시키는 주된 이유는 무엇인가요?',
          options: [
            '함수의 실행 속도를 높이기 위해',
            '함수가 참조하는 값이 변경될 때만 새로운 함수를 생성하기 위해',
            '함수가 메모리에서 제거되지 않도록 하기 위해',
            '함수가 비동기적으로 실행되도록 하기 위해',
          ],
          correctAnswer: 1,
          explanation:
            '의존성 배열에 포함된 값이 변경될 때만 새로운 함수를 생성하여 불필요한 함수 재생성을 방지합니다.',
        },
        {
          id: 25,
          question:
            'useCallback을 사용하여 최적화할 때, 어떤 유형의 자식 컴포넌트와 함께 사용하는 것이 가장 효과적인가요?',
          options: [
            '클래스 컴포넌트',
            '함수형 컴포넌트',
            'React.memo로 감싼 컴포넌트',
            '비제어 컴포넌트',
          ],
          correctAnswer: 2,
          explanation:
            'React.memo로 감싼 자식 컴포넌트는 전달된 props가 변경되지 않을 때 리렌더링을 방지할 수 있으므로, useCallback과 함께 사용할 때 최적화 효과가 큽니다.',
        },
        {
          id: 26,
          question:
            'useCallback을 사용하지 않고 상태 업데이트 함수를 전달할 경우, 주로 어떤 문제가 발생하나요?',
          options: [
            '상태가 제대로 업데이트되지 않는다.',
            '컴포넌트가 비동기적으로 동작하지 않는다.',
            '자식 컴포넌트가 불필요하게 리렌더링된다.',
            '의존성 배열에 오류가 발생한다.',
          ],
          correctAnswer: 2,
          explanation:
            'useCallback을 사용하지 않으면 상태 업데이트 함수를 전달할 때마다 새로운 함수가 생성되어 자식 컴포넌트가 불필요하게 리렌더링될 수 있습니다.',
        },
        {
          id: 27,
          question:
            'useCallback을 사용하여 메모이제이션된 함수를 반환할 때, 그 함수의 참조가 유지되는 이유는 무엇인가요?',
          options: [
            '함수가 immutable하기 때문',
            'useCallback이 내부적으로 함수를 클로저로 감싸기 때문',
            '의존성 배열이 변경되지 않아서',
            'React의 가비지 컬렉터가 함수를 유지하기 때문',
          ],
          correctAnswer: 2,
          explanation:
            '의존성 배열에 포함된 값이 변경되지 않으면, useCallback은 이전에 메모이제이션된 함수를 반환하여 함수의 참조를 유지합니다.',
        },
        {
          id: 28,
          question:
            'useCallback을 사용할 때, 의존성 배열에 포함되지 않아야 하는 것은 무엇인가요?',
          options: [
            '함수 내부에서 사용되는 props',
            '함수 내부에서 사용되는 state',
            '함수 내부에서 선언된 변수가 아닌 함수',
            '컴포넌트 외부에서 가져온 상수',
          ],
          correctAnswer: 3,
          explanation:
            '컴포넌트 외부에서 가져온 상수는 변하지 않기 때문에 의존성 배열에 포함시킬 필요가 없습니다.',
        },
        {
          id: 29,
          question:
            'useCallback을 사용하여 메모이제이션된 함수를 자식 컴포넌트에 전달할 때, 자식 컴포넌트가 React.memo로 감싸져 있다면 어떤 효과가 있나요?',
          options: [
            '자식 컴포넌트가 항상 리렌더링된다.',
            '자식 컴포넌트가 필요할 때만 리렌더링된다.',
            '자식 컴포넌트의 렌더링 속도가 느려진다.',
            '자식 컴포넌트가 메모리에서 제거된다.',
          ],
          correctAnswer: 1,
          explanation:
            'useCallback으로 메모이제이션된 함수가 전달되면, React.memo로 감싼 자식 컴포넌트는 props가 변경되지 않은 경우 리렌더링을 건너뛸 수 있습니다.',
        },
        {
          id: 30,
          question:
            'useCallback을 사용할 때, 어떤 상황에서는 useMemo를 대신 사용하는 것이 더 적합할 수 있나요?',
          options: [
            '함수를 반환할 필요가 없을 때',
            '함수의 실행 결과를 메모이제이션할 때',
            '의존성 배열이 매우 길 때',
            '컴포넌트가 클래스형일 때',
          ],
          correctAnswer: 1,
          explanation:
            '함수의 실행 결과를 메모이제이션하고 싶을 때는 useMemo를 사용하는 것이 더 적합합니다.',
        },
      ],
    },

    {
      title: 'useCallback',
      description: 'useCallback에 대한 이해를 평가하는 퀴즈',
      questions: [
        // ... 기존 질문들 (id:1-30)
        {
          id: 31,
          question:
            'useCallback을 사용하여 자식 컴포넌트의 리렌더링을 방지하는 방법은 무엇인가요?',
          options: [
            '자식 컴포넌트를 useCallback으로 감싼다.',
            '자식 컴포넌트를 React.memo로 감싼다.',
            '부모 컴포넌트에서 자식 컴포넌트에 함수를 전달하지 않는다.',
            'useCallback과 React.memo를 함께 사용하여 콜백 함수를 메모이제이션한다.',
          ],
          correctAnswer: 3,
          explanation:
            'useCallback으로 콜백 함수를 메모이제이션하고, React.memo로 자식 컴포넌트를 감싸면 props가 변경되지 않아 자식 컴포넌트의 불필요한 리렌더링을 방지할 수 있습니다.',
        },
        {
          id: 32,
          question: 'useCallback과 useMemo의 주요 차이점 중 하나는 무엇인가요?',
          options: [
            'useCallback은 값을, useMemo는 함수를 캐싱한다.',
            'useCallback은 함수를, useMemo는 값을 캐싱한다.',
            'useCallback과 useMemo는 동일한 기능을 한다.',
            'useCallback은 클래스 컴포넌트에서만 사용된다.',
          ],
          correctAnswer: 1,
          explanation:
            'useCallback은 함수를 메모이제이션하여 캐싱하고, useMemo는 계산된 값을 메모이제이션하여 캐싱합니다.',
        },
        {
          id: 33,
          question:
            '다음 중 useCallback을 사용하여 상태 업데이트 함수를 최적화한 예시는 무엇인가요?',
          options: [
            '`const increment = () => setCount(count + 1);`',
            '`const increment = useCallback(() => setCount(prev => prev + 1), []);`',
            '`const increment = useMemo(() => () => setCount(count + 1), [count]);`',
            '`const increment = React.memo(() => setCount(count + 1));`',
          ],
          correctAnswer: 1,
          explanation:
            'useCallback을 사용하여 상태 업데이트 함수를 메모이제이션하고, prev 상태를 기반으로 업데이트합니다.',
        },
        {
          id: 34,
          question:
            'useCallback을 Effect 내부에서 사용하는 대신 더 나은 방법은 무엇인가요?',
          options: [
            'useEffect의 의존성 배열을 비워둔다.',
            '함수를 Effect 내부로 이동시킨다.',
            'useMemo를 사용한다.',
            '함수를 컴포넌트 외부로 옮긴다.',
          ],
          correctAnswer: 1,
          explanation:
            '함수를 Effect 내부로 이동시키면 의존성 배열을 단순화할 수 있고, useCallback을 사용할 필요가 없어집니다.',
        },
        {
          id: 35,
          question:
            '커스텀 Hook에서 useCallback을 사용할 때의 장점은 무엇인가요?',
          options: [
            'Hook의 실행 속도를 증가시킨다.',
            'Hook에서 반환하는 함수들의 참조를 안정적으로 유지하여 불필요한 리렌더링을 방지한다.',
            'Hook의 상태를 자동으로 관리한다.',
            'Hook을 클래스 컴포넌트로 변환할 수 있게 해준다.',
          ],
          correctAnswer: 1,
          explanation:
            'useCallback을 사용하여 반환하는 함수들을 메모이제이션하면, 해당 함수를 사용하는 컴포넌트에서 불필요한 리렌더링을 방지할 수 있습니다.',
        },
        {
          id: 36,
          question:
            '리스트 항목에서 useCallback을 사용하여 콜백 함수를 최적화할 때, 어떤 접근 방식이 권장되나요?',
          options: [
            '루프 안에서 useCallback을 직접 호출한다.',
            '각 리스트 항목을 별도의 컴포넌트로 분리하고, 그 컴포넌트 내부에서 useCallback을 사용한다.',
            'useMemo를 대신 사용한다.',
            '콜백 함수를 컴포넌트 외부에 정의한다.',
          ],
          correctAnswer: 1,
          explanation:
            '리스트 항목을 별도의 컴포넌트로 분리하고, 그 컴포넌트 내부에서 useCallback을 사용하면, 루프 안에서 Hook을 호출하지 않아도 되고, 각 항목에 대해 최적화된 콜백 함수를 제공할 수 있습니다.',
        },
        {
          id: 37,
          question:
            'useCallback을 사용하여 매 렌더링마다 새로운 함수를 생성하지 않도록 하는 것은 주로 어떤 성능 문제를 해결하기 위한 것인가요?',
          options: [
            '메모리 누수',
            '불필요한 DOM 업데이트',
            '불필요한 자식 컴포넌트의 리렌더링',
            '비동기 작업의 지연',
          ],
          correctAnswer: 2,
          explanation:
            'useCallback을 사용하면 함수의 참조가 변경되지 않아, React.memo로 감싼 자식 컴포넌트가 불필요하게 리렌더링되는 것을 방지할 수 있습니다.',
        },
        {
          id: 38,
          question:
            '다음 중 useCallback을 올바르게 사용하는 방법은 무엇인가요?',
          options: [
            '`const memoizedFn = useCallback(() => { doSomething(); }, []);`',
            '`const memoizedFn = useCallback(doSomething(), [dependency]);`',
            '`const memoizedFn = useCallback(() => { doSomething(); }, [dependency1, dependency2]);`',
            '`const memoizedFn = useCallback(() => { doSomething(); }, dependency);`',
          ],
          correctAnswer: 2,
          explanation:
            'useCallback은 의존성 배열을 `[dep1, dep2, ...]` 형태로 인라인으로 작성하여 고정된 개수의 항목을 가져야 합니다.',
        },
        {
          id: 39,
          question:
            'useCallback을 사용하여 메모이제이션된 함수를 반환할 때, 그 함수의 참조가 유지되는 이유는 무엇인가요?',
          options: [
            '함수가 immutable하기 때문',
            'useCallback이 내부적으로 함수를 클로저로 감싸기 때문',
            '의존성 배열이 변경되지 않아서',
            'React의 가비지 컬렉터가 함수를 유지하기 때문',
          ],
          correctAnswer: 2,
          explanation:
            '의존성 배열에 포함된 값이 변경되지 않으면, useCallback은 이전에 메모이제이션된 함수를 반환하여 함수의 참조를 유지합니다.',
        },
        {
          id: 40,
          question:
            '다음 중 useCallback을 사용할 때 권장되는 의존성 배열의 작성 방법은 무엇인가요?',
          options: [
            '의존성 배열을 객체로 전달한다.',
            '의존성 배열을 인라인으로 작성한다.',
            '의존성 배열을 빈 배열로 항상 설정한다.',
            '의존성 배열을 생략한다.',
          ],
          correctAnswer: 1,
          explanation:
            '의존성 배열은 `[dep1, dep2, dep3]`과 같이 인라인으로 작성하여 고정된 개수의 항목을 가져야 합니다.',
        },
      ],
    },
    {
      title: '문제 해결',
      description:
        'useCallback을 사용할 때 발생할 수 있는 문제와 그 해결 방법을 평가하는 퀴즈',
      questions: [
        {
          id: 41,
          question:
            '컴포넌트가 리렌더링될 때 useCallback으로 감싼 함수가 계속 새로 생성되는 원인은 무엇인가요?',
          options: [
            '의존성 배열에 포함된 값이 변하지 않아서',
            '의존성 배열에 포함된 값이 변경되었기 때문에',
            'useCallback이 올바르게 사용되지 않았기 때문에',
            'React 버전이 낮기 때문에',
          ],
          correctAnswer: 1,
          explanation:
            '의존성 배열에 포함된 값이 변경되면, useCallback은 새로운 함수를 생성하게 됩니다.',
        },
        {
          id: 42,
          question:
            'useCallback을 사용하지 않아도 되는 상황은 어떤 경우인가요?',
          options: [
            '함수가 비동기적으로 실행될 때',
            '함수가 자식 컴포넌트에 전달되지 않을 때',
            '함수가 복잡한 로직을 포함할 때',
            '함수가 여러 의존성을 가질 때',
          ],
          correctAnswer: 1,
          explanation:
            '함수가 자식 컴포넌트에 전달되지 않고, 단순히 컴포넌트 내부에서만 사용된다면 useCallback을 사용할 필요가 없습니다.',
        },
        {
          id: 43,
          question: 'useCallback을 사용하면 어떤 성능 최적화가 가능한가요?',
          options: [
            '컴포넌트의 초기 로딩 속도를 증가시킨다.',
            '불필요한 함수 재생성을 방지하여 메모리 사용을 최적화한다.',
            '컴포넌트의 상태 업데이트를 비동기적으로 만든다.',
            '컴포넌트의 스타일을 동적으로 변경할 수 있게 한다.',
          ],
          correctAnswer: 1,
          explanation:
            'useCallback을 사용하면 함수의 참조가 변경되지 않아 불필요한 함수 재생성을 방지하고, 메모리 사용을 최적화할 수 있습니다.',
        },
        {
          id: 44,
          question:
            '다음 코드에서 useCallback을 사용하지 않아 발생할 수 있는 문제는 무엇인가요?',
          options: [
            '함수가 제대로 실행되지 않는다.',
            '불필요한 자식 컴포넌트의 리렌더링이 발생할 수 있다.',
            'useEffect가 실행되지 않는다.',
            '상태가 업데이트되지 않는다.',
          ],
          correctAnswer: 1,
          explanation:
            'useCallback을 사용하지 않으면 매 렌더링마다 새로운 함수가 생성되어, 이를 자식 컴포넌트에 전달하면 자식 컴포넌트가 불필요하게 리렌더링될 수 있습니다.',
        },
        {
          id: 45,
          question: 'useCallback을 사용할 때 가장 주의해야 할 점은 무엇인가요?',
          options: [
            '함수의 로직이 너무 간단하면 사용하지 않는다.',
            '의존성 배열을 정확하게 작성하여 필요한 경우에만 함수를 재생성하도록 한다.',
            '함수가 클래스 메서드일 때 사용한다.',
            'useEffect 내부에서만 사용한다.',
          ],
          correctAnswer: 1,
          explanation:
            '의존성 배열을 정확하게 작성하여, 필요한 경우에만 함수를 재생성하도록 해야 합니다. 잘못된 의존성 배열은 함수의 올바른 동작을 방해할 수 있습니다.',
        },
        {
          id: 46,
          question:
            'useCallback을 사용하여 커스텀 Hook을 최적화할 때, 어떤 패턴이 권장되나요?',
          options: [
            '커스텀 Hook 내부에서 상태를 직접 변경한다.',
            '커스텀 Hook에서 반환하는 모든 함수들을 useCallback으로 감싼다.',
            '커스텀 Hook에서 useMemo를 대신 사용한다.',
            '커스텀 Hook에서 의존성 배열을 생략한다.',
          ],
          correctAnswer: 1,
          explanation:
            '커스텀 Hook에서 반환하는 함수들을 useCallback으로 감싸면, 해당 함수를 사용하는 컴포넌트에서 불필요한 리렌더링을 방지할 수 있습니다.',
        },
        {
          id: 47,
          question:
            '다음 중 useCallback을 올바르게 사용하는 방법은 무엇인가요?',
          options: [
            '`const memoizedFn = useCallback(() => { doSomething(); }, []);`',
            '`const memoizedFn = useCallback(doSomething(), [dependency]);`',
            '`const memoizedFn = useCallback(() => { doSomething(); }, [dependency1, dependency2]);`',
            '`const memoizedFn = useCallback(() => { doSomething(); }, dependency);`',
          ],
          correctAnswer: 2,
          explanation:
            'useCallback은 함수를 인자로 받고, 의존성 배열을 두 번째 인자로 받습니다. 따라서 세 번째 옵션이 올바르게 사용된 예입니다.',
        },
        {
          id: 48,
          question:
            'useCallback을 사용하여 상태 업데이트 함수를 최적화할 때, 어떤 패턴이 올바른가요?',
          options: [
            '`const update = useCallback(() => setState(state + 1), [state]);`',
            '`const update = useCallback(() => setState(prev => prev + 1), []);`',
            '`const update = useCallback(setState(state + 1), [state]);`',
            '`const update = useCallback(() => setState(prev => prev + 1), [prev]);`',
          ],
          correctAnswer: 1,
          explanation:
            '업데이트 함수를 prev 상태를 기반으로 사용할 때는 의존성 배열을 빈 배열로 설정하여, 함수를 한 번만 생성하고 재사용할 수 있습니다.',
        },
        {
          id: 49,
          question:
            'useCallback을 사용하여 자식 컴포넌트의 리렌더링을 방지하기 위한 조건은 무엇인가요?',
          options: [
            '자식 컴포넌트가 상태를 가지고 있을 때',
            '자식 컴포넌트가 React.memo로 감싸져 있을 때',
            '자식 컴포넌트가 useEffect를 사용하고 있을 때',
            '자식 컴포넌트가 클래스 컴포넌트일 때',
          ],
          correctAnswer: 1,
          explanation:
            'React.memo로 감싸진 자식 컴포넌트는 props가 변경되지 않으면 리렌더링을 방지합니다. useCallback을 사용하여 함수의 참조가 변경되지 않도록 하면, props가 변경되지 않아 리렌더링을 방지할 수 있습니다.',
        },
        {
          id: 50,
          question:
            'useCallback을 사용할 때, 함수 내부에서 참조하는 외부 변수를 의존성 배열에 포함시키지 않으면 어떤 문제가 발생할 수 있나요?',
          options: [
            '함수가 올바르게 실행되지 않는다.',
            '함수가 메모리에서 제거된다.',
            '의존성 배열에 포함된 변수가 변경될 때 함수를 재생성하지 않는다.',
            'React가 경고 메시지를 출력한다.',
          ],
          correctAnswer: 2,
          explanation:
            '함수 내부에서 참조하는 외부 변수를 의존성 배열에 포함시키지 않으면, 해당 변수가 변경되어도 useCallback이 함수를 재생성하지 않아 함수가 최신 상태를 반영하지 않을 수 있습니다.',
        },
      ],
    },
  ],
};
