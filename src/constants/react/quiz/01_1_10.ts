import { Quiz } from '@/types/quiz.type';

export const quiz: Quiz = {
  title: 'useLayoutEffect 완벽 이해하기',
  description:
    'useLayoutEffect의 개념, 사용법 및 실제 적용 사례에 대한 종합 퀴즈입니다.',
  categories: [
    {
      title: '기본 개념',
      description: 'useLayoutEffect의 기본적인 개념과 특징을 이해합니다.',
      questions: [
        {
          id: 1,
          question: 'useLayoutEffect와 useEffect의 주요 차이점은 무엇인가요?',
          options: [
            '실행 타이밍만 다르고 기능은 동일하다',
            'useLayoutEffect는 동기적으로 실행되고 브라우저 페인팅을 차단하지만, useEffect는 비동기적으로 실행되고 페인팅을 차단하지 않는다',
            'useLayoutEffect는 서버사이드에서만 동작하고, useEffect는 클라이언트사이드에서만 동작한다',
            'useLayoutEffect는 의존성 배열이 필수지만, useEffect는 선택적이다',
          ],
          correctAnswer: 1,
          explanation:
            'useLayoutEffect는 브라우저가 화면을 다시 그리기 전에 동기적으로 실행되며 페인팅을 차단합니다. 반면 useEffect는 화면이 그려진 후 비동기적으로 실행됩니다.',
        },
        {
          id: 2,
          question:
            'useLayoutEffect를 사용할 때 지켜야 할 제약사항이 아닌 것은?',
          options: [
            '컴포넌트의 최상위 레벨에서만 호출해야 한다',
            '의존성 배열은 반드시 빈 배열이어야 한다',
            '서버 사이드 렌더링에서는 실행되지 않는다',
            '내부의 상태 업데이트는 모든 Effect를 즉시 실행시킨다',
          ],
          correctAnswer: 1,
          explanation:
            '의존성 배열이 반드시 빈 배열일 필요는 없습니다. setup 코드 내에서 참조하는 반응형 값들을 포함할 수 있습니다.',
        },
        {
          id: 3,
          question:
            '다음 중 useLayoutEffect의 매개변수에 대한 설명으로 올바른 것은?',
          options: [
            'setup과 dependencies 모두 필수 매개변수이다',
            'setup은 필수이며, dependencies는 선택적 매개변수이다',
            'setup과 dependencies 모두 선택적 매개변수이다',
            'setup은 선택적이며, dependencies는 필수 매개변수이다',
          ],
          correctAnswer: 1,
          explanation:
            'useLayoutEffect는 setup 함수를 필수로 받으며, dependencies 배열은 선택적 매개변수입니다.',
        },
        {
          id: 4,
          question:
            '다음 코드의 실행 결과로 가장 적절한 것은?\n\nuseLayoutEffect(() => {\n  const { height } = element.getBoundingClientRect();\n  setHeight(height);\n}, []);\n\nuseEffect(() => {\n  const { height } = element.getBoundingClientRect();\n  setHeight(height);\n}, []);',
          options: [
            '두 코드 모두 동일한 시점에 실행되어 같은 결과를 보여준다',
            'useLayoutEffect가 먼저 실행되어 화면 깜빡임이 방지되고, useEffect는 이후에 실행된다',
            'useEffect가 먼저 실행되고 useLayoutEffect는 이후에 실행된다',
            '두 코드는 서로 충돌하여 정확한 높이 값을 얻을 수 없다',
          ],
          correctAnswer: 1,
          explanation:
            'useLayoutEffect는 브라우저 페인팅 전에 동기적으로 실행되어 화면 깜빡임을 방지하고, useEffect는 페인팅 후에 실행됩니다.',
        },
        {
          id: 5,
          question:
            'useLayoutEffect를 사용할 때 성능 최적화를 위한 가장 좋은 방법은?',
          options: [
            '항상 빈 의존성 배열을 사용한다',
            '모든 상태 업데이트를 useLayoutEffect 내부에서 처리한다',
            '필요한 경우에만 사용하고, 가능한 경우 useEffect로 대체한다',
            'setTimeout을 사용하여 실행을 지연시킨다',
          ],
          correctAnswer: 2,
          explanation:
            'useLayoutEffect는 브라우저 렌더링을 차단하므로 성능에 영향을 줄 수 있습니다. 따라서 실제로 필요한 경우(예: 레이아웃 측정이 필요한 경우)에만 사용하고, 그 외에는 useEffect를 사용하는 것이 좋습니다.',
        },
      ],
    },
    {
      title: '실제 적용',
      description: 'useLayoutEffect의 실제 사용 사례와 구현에 대한 이해',
      questions: [
        {
          id: 6,
          question: '다음 중 useLayoutEffect를 사용하기에 가장 적절한 상황은?',
          options: [
            'API 데이터를 가져올 때',
            '폼 제출 후 서버에 데이터를 전송할 때',
            '컴포넌트가 마운트된 후 요소의 크기를 측정하여 위치를 조정할 때',
            '로컬 스토리지에 데이터를 저장할 때',
          ],
          correctAnswer: 2,
          explanation:
            'useLayoutEffect는 DOM 요소의 레이아웃 측정이 필요하고 화면 깜빡임을 방지해야 하는 상황에서 사용하기에 가장 적합합니다.',
        },
        {
          id: 7,
          question:
            '서버 사이드 렌더링 환경에서 useLayoutEffect 사용 시 발생하는 경고를 해결하는 가장 적절한 방법은?',
          options: [
            'useEffect로 대체한다',
            'try-catch 구문으로 감싼다',
            'window 객체 존재 여부를 확인한다',
            'useLayoutEffect를 사용하지 않는다',
          ],
          correctAnswer: 0,
          explanation:
            '서버 사이드 렌더링 환경에서는 useLayoutEffect 대신 useEffect를 사용하거나, 클라이언트 사이드에서만 실행되도록 처리해야 합니다.',
        },
      ],
    },

    {
      title: '고급 개념 및 최적화',
      description: 'useLayoutEffect의 심화 개념과 최적화 전략을 이해합니다.',
      questions: [
        {
          id: 8,
          question:
            "다음 코드에서 발생할 수 있는 문제점은 무엇인가요?\n\nuseLayoutEffect(() => {\n  const allElements = document.querySelectorAll('*');\n  allElements.forEach(el => {\n    const { height } = el.getBoundingClientRect();\n    // 처리 로직\n  });\n}, []);",
          options: [
            '메모리 누수가 발생할 수 있다',
            '심각한 성능 저하가 발생할 수 있다',
            '무한 루프가 발생할 수 있다',
            '브라우저 크래시가 발생할 수 있다',
          ],
          correctAnswer: 1,
          explanation:
            '모든 DOM 요소를 순회하면서 getBoundingClientRect를 호출하는 것은 심각한 성능 저하를 초래할 수 있습니다. 특히 useLayoutEffect는 브라우저 페인팅을 차단하므로 더욱 문제가 됩니다.',
        },
        {
          id: 9,
          question:
            'React.StrictMode에서 useLayoutEffect를 사용할 때 주의해야 할 점은?',
          options: [
            'useLayoutEffect가 두 번 실행될 수 있다',
            'useLayoutEffect가 실행되지 않을 수 있다',
            '메모리 누수 경고가 발생할 수 있다',
            '서버 사이드 렌더링이 불가능하다',
          ],
          correctAnswer: 0,
          explanation:
            'React.StrictMode에서는 개발 모드에서 컴포넌트를 이중으로 렌더링하여 부작용을 찾습니다. 따라서 useLayoutEffect도 두 번 실행될 수 있습니다.',
        },
        {
          id: 10,
          question:
            '다음 중 useLayoutEffect를 사용할 때의 메모리 관리에 대한 설명으로 올바른 것은?',
          options: [
            '정리(cleanup) 함수는 선택적이므로 구현할 필요가 없다',
            '정리 함수는 컴포넌트가 언마운트될 때만 실행된다',
            '정리 함수는 다음 이펙트가 실행되기 전과 컴포넌트가 언마운트될 때 실행된다',
            '정리 함수는 브라우저가 페인팅을 완료한 후에만 실행된다',
          ],
          correctAnswer: 2,
          explanation:
            '정리(cleanup) 함수는 다음 이펙트가 실행되기 전과 컴포넌트가 언마운트될 때 실행됩니다. 이는 메모리 누수를 방지하고 리소스를 정리하는데 중요합니다.',
        },
        {
          id: 11,
          question:
            'ResizeObserver와 useLayoutEffect를 함께 사용할 때 가장 적절한 구현 방식은?',
          options: [
            'ResizeObserver를 useEffect에서 생성하고 useLayoutEffect에서 사용한다',
            'ResizeObserver를 useLayoutEffect에서 생성하고 cleanup 함수에서 해제한다',
            'ResizeObserver를 컴포넌트 외부에서 생성하여 useLayoutEffect에서 참조한다',
            'ResizeObserver 대신 window.resize 이벤트를 사용한다',
          ],
          correctAnswer: 1,
          explanation:
            'ResizeObserver를 useLayoutEffect 내부에서 생성하고 cleanup 함수에서 해제하는 것이 가장 적절합니다. 이는 메모리 누수를 방지하고 올바른 정리를 보장합니다.',
        },
        {
          id: 12,
          question:
            '다음 중 useLayoutEffect의 의존성 배열 관리에 대한 올바른 설명은?',
          options: [
            '의존성 배열은 항상 빈 배열로 유지해야 한다',
            '모든 외부 변수를 의존성 배열에 포함시켜야 한다',
            '함수는 의존성 배열에 포함시키지 않아도 된다',
            '필요한 값만 선별적으로 의존성 배열에 포함시키고, 불필요한 리렌더링을 방지해야 한다',
          ],
          correctAnswer: 3,
          explanation:
            '의존성 배열은 필요한 값만 선별적으로 포함시켜야 합니다. 불필요한 값을 포함시키면 불필요한 리렌더링이 발생할 수 있으며, 필요한 값을 누락시키면 버그가 발생할 수 있습니다.',
        },
      ],
    },
    {
      title: '실전 응용',
      description: 'useLayoutEffect의 실전 사용과 문제 해결 능력을 평가합니다.',
      questions: [
        {
          id: 13,
          question:
            '다음 중 Tooltip 컴포넌트에서 useLayoutEffect를 사용해야 하는 가장 적절한 이유는?',
          options: [
            '툴팁의 내용을 비동기적으로 로드하기 위해',
            '툴팁의 위치를 정확하게 계산하고 화면 깜빡임을 방지하기 위해',
            '툴팁의 애니메이션을 부드럽게 처리하기 위해',
            '툴팁의 이벤트 핸들러를 등록하기 위해',
          ],
          correctAnswer: 1,
          explanation:
            'Tooltip 컴포넌트에서는 정확한 위치 계산이 필요하며, 위치 조정 시 화면 깜빡임을 방지해야 하므로 useLayoutEffect를 사용하는 것이 적절합니다.',
        },
        {
          id: 14,
          question:
            'React의 Concurrent Mode에서 useLayoutEffect를 사용할 때 고려해야 할 사항은?',
          options: [
            'Concurrent Mode에서는 useLayoutEffect를 사용할 수 없다',
            'useLayoutEffect는 Concurrent Mode의 성능 최적화를 방해할 수 있다',
            'Concurrent Mode에서는 useLayoutEffect가 항상 useEffect보다 늦게 실행된다',
            'Concurrent Mode에서는 useLayoutEffect의 cleanup 함수가 실행되지 않는다',
          ],
          correctAnswer: 1,
          explanation:
            'useLayoutEffect는 동기적으로 실행되므로 React의 Concurrent Mode에서 제공하는 성능 최적화 이점을 감소시킬 수 있습니다.',
        },
      ],
    },

    {
      title: '고급 통합 및 디버깅',
      description: 'useLayoutEffect와 다른 React 기능들의 통합 및 문제 해결',
      questions: [
        {
          id: 15,
          question:
            'useLayoutEffect와 React.Context를 함께 사용할 때 다음 코드의 문제점은 무엇인가요?\n\nconst Context = React.createContext();\n\nfunction Component() {\n  const value = useContext(Context);\n  useLayoutEffect(() => {\n    console.log(value);\n  }, []);\n  return <div>{value}</div>;\n}',
          options: [
            'Context 값이 변경되어도 useLayoutEffect가 다시 실행되지 않는다',
            'Context 값이 undefined일 수 있다',
            'useContext는 useLayoutEffect 내부에서 사용해야 한다',
            'Context 값이 변경될 때마다 불필요한 리렌더링이 발생한다',
          ],
          correctAnswer: 0,
          explanation:
            '의존성 배열이 비어있어 Context 값이 변경되어도 useLayoutEffect가 다시 실행되지 않습니다. value를 의존성 배열에 추가해야 합니다.',
        },
        {
          id: 16,
          question:
            'TypeScript에서 useLayoutEffect를 사용할 때 다음 중 올바른 타입 정의는?',
          options: [
            'useLayoutEffect<T>(effect: () => void, deps: T[]): void',
            'useLayoutEffect(effect: () => (void | (() => void)), deps?: Array<any>): void',
            'useLayoutEffect<T>(effect: () => T, deps: Array<any>): T',
            'useLayoutEffect(effect: () => Promise<void>, deps?: Array<any>): void',
          ],
          correctAnswer: 1,
          explanation:
            'useLayoutEffect는 cleanup 함수를 반환할 수 있는 effect 함수와 선택적 의존성 배열을 매개변수로 받습니다.',
        },
        {
          id: 17,
          question:
            '다음 중 useLayoutEffect를 포함한 컴포넌트의 단위 테스트 작성 시 가장 적절한 접근 방법은?',
          options: [
            'useLayoutEffect를 모킹하여 테스트한다',
            '실제 DOM을 사용하여 테스트한다',
            '@testing-library/react의 act를 사용하여 테스트한다',
            'useLayoutEffect를 useEffect로 교체하여 테스트한다',
          ],
          correctAnswer: 2,
          explanation:
            '@testing-library/react의 act를 사용하면 useLayoutEffect의 동기적 실행을 적절히 시뮬레이션할 수 있습니다.',
        },
        {
          id: 18,
          question:
            'useLayoutEffect의 성능을 모니터링하기 위한 가장 효과적인 방법은?',
          options: [
            'console.time을 사용하여 실행 시간을 측정한다',
            'React DevTools의 Profiler를 사용한다',
            'Chrome Performance 탭을 사용하여 레이아웃 스레싱을 모니터링한다',
            '사용자 정의 성능 메트릭을 구현한다',
          ],
          correctAnswer: 2,
          explanation:
            'Chrome Performance 탭을 사용하면 레이아웃 스레싱과 같은 성능 문제를 정확하게 식별할 수 있습니다.',
        },
        {
          id: 19,
          question:
            'useLayoutEffect와 useImperativeHandle을 함께 사용할 때 발생할 수 있는 문제는?',
          options: [
            '순환 참조가 발생할 수 있다',
            '메모리 누수가 발생할 수 있다',
            '부모 컴포넌트의 레이아웃이 깨질 수 있다',
            '렌더링 순서가 보장되지 않을 수 있다',
          ],
          correctAnswer: 3,
          explanation:
            'useLayoutEffect와 useImperativeHandle의 실행 순서가 보장되지 않아 예기치 않은 동작이 발생할 수 있습니다.',
        },
        {
          id: 20,
          question:
            '마이크로 프론트엔드 환경에서 useLayoutEffect를 사용할 때 다음 중 가장 중요한 고려사항은?',
          options: [
            '각 마이크로 프론트엔드 간의 스타일 충돌',
            '전역 상태 관리와의 통합',
            '다중 React 인스턴스로 인한 충돌',
            '레이아웃 측정의 정확성',
          ],
          correctAnswer: 2,
          explanation:
            '마이크로 프론트엔드 환경에서는 여러 React 인스턴스가 존재할 수 있어 useLayoutEffect의 실행 순서와 동작에 영향을 줄 수 있습니다.',
        },
      ],
    },
  ],
};
