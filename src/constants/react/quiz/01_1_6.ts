import { Quiz } from '@/types/quiz.type';

export const quiz: Quiz = {
  title: 'useEffect와 React 동기화 퀴즈',
  description:
    'React의 useEffect Hook의 개념, 사용법, 최적화 전략을 테스트하는 퀴즈입니다.',
  categories: [
    {
      title: '기본 개념',
      description: 'useEffect의 기본적인 개념과 사용법을 테스트합니다.',
      questions: [
        {
          id: 1,
          question: 'useEffect Hook의 주요 목적은 무엇인가요?',
          options: [
            '상태 관리를 위해 사용된다',
            '컴포넌트의 성능을 최적화한다',
            '컴포넌트를 외부 시스템과 동기화할 수 있게 해준다',
            '컴포넌트의 생명주기를 관리한다',
          ],
          correctAnswer: 2,
          explanation:
            'useEffect는 컴포넌트를 브라우저 API, 서드파티 라이브러리, 네트워크 등의 외부 시스템과 동기화할 수 있게 해주는 React Hook입니다.',
        },
        {
          id: 2,
          question: 'useEffect의 생명주기 순서로 올바른 것은?',
          options: [
            'setup → cleanup → 의존성 변경',
            '의존성 변경 → setup → cleanup',
            '컴포넌트 마운트 시 setup → 의존성 변경 시 cleanup 후 setup → 언마운트 시 cleanup',
            'cleanup → setup → 의존성 변경',
          ],
          correctAnswer: 2,
          explanation:
            'React는 컴포넌트 마운트 시 setup 함수를 실행하고, 의존성 변경 시 이전 cleanup 실행 후 새로운 setup을 실행하며, 언마운트 시 마지막으로 cleanup을 실행합니다.',
        },
        {
          id: 3,
          question: '다음 중 useEffect를 사용해야 하는 경우가 아닌 것은?',
          options: [
            '브라우저 API 구독하기',
            '버튼 클릭 이벤트 처리하기',
            '외부 시스템과의 연결 관리',
            '분석 로깅',
          ],
          correctAnswer: 1,
          explanation:
            '버튼 클릭과 같은 이벤트 처리는 useEffect 없이 직접 이벤트 핸들러로 처리해야 합니다. useEffect는 외부 시스템과의 동기화가 필요한 경우에만 사용해야 합니다.',
        },
        {
          id: 4,
          question:
            '다음 코드의 문제점은 무엇인가요?\n\nuseEffect(() => {\n  setCount(count + 1);\n}, [count]);',
          options: [
            'cleanup 함수가 없다',
            '의존성 배열이 잘못되었다',
            '무한 루프가 발생할 수 있다',
            'setup 함수가 잘못되었다',
          ],
          correctAnswer: 2,
          explanation:
            '이 코드는 무한 루프를 발생시킵니다. Effect가 count를 업데이트하고, 이로 인해 리렌더링이 발생하며, 의존성이 변경되어 Effect가 다시 실행되는 cycle이 계속됩니다.',
        },
        {
          id: 5,
          question:
            '개발 환경에서 useEffect가 두 번 실행되는 이유는 무엇인가요?',
          options: [
            '코드에 버그가 있어서',
            'React의 성능 최적화 때문에',
            'Strict Mode에서 cleanup 로직을 검증하기 위해',
            '의존성 배열이 잘못 설정되어서',
          ],
          correctAnswer: 2,
          explanation:
            '개발 환경의 Strict Mode에서는 컴포넌트 마운트 시 setup과 cleanup을 한 번 더 실행합니다. 이는 cleanup 로직이 제대로 구현되었는지 검증하기 위한 것입니다.',
        },
        {
          id: 6,
          question:
            'useEffect에서 데이터를 페칭할 때 race condition을 방지하는 올바른 방법은?',
          options: [
            'async/await 사용하지 않기',
            '의존성 배열을 비우기',
            'cleanup 함수에서 ignore 플래그를 사용하기',
            'Promise.race 사용하기',
          ],
          correctAnswer: 2,
          explanation:
            'cleanup 함수에서 ignore 플래그를 설정하고, 데이터가 도착했을 때 이 플래그를 확인하여 이전 요청의 결과를 무시함으로써 race condition을 방지할 수 있습니다.',
        },
        {
          id: 7,
          question: '빈 의존성 배열 []을 사용하는 Effect의 특징은?',
          options: [
            '매 렌더링마다 실행된다',
            '의존성이 변경될 때만 실행된다',
            '컴포넌트가 마운트될 때만 실행된다',
            'cleanup 함수가 호출되지 않는다',
          ],
          correctAnswer: 2,
          explanation:
            '빈 의존성 배열을 사용하는 Effect는 컴포넌트가 마운트될 때만 실행되고, 업데이트 시에는 실행되지 않습니다.',
        },
      ],
    },

    {
      title: '고급 개념과 최적화',
      description: 'useEffect의 고급 사용법과 최적화 전략을 테스트합니다.',
      questions: [
        {
          id: 8,
          question: 'useEffect에서 객체 의존성을 다룰 때 가장 좋은 방법은?',
          options: [
            '객체를 useCallback으로 감싸기',
            '객체를 Effect 외부에서 생성하고 의존성으로 전달하기',
            '객체를 Effect 내부로 이동하고 필요한 원시값만 의존성으로 사용하기',
            '객체를 useMemo로 메모이제이션하기',
          ],
          correctAnswer: 2,
          explanation:
            '객체를 Effect 내부로 이동하고 해당 객체를 구성하는 데 필요한 원시값만 의존성으로 사용하는 것이 가장 좋습니다. 이렇게 하면 불필요한 Effect 재실행을 방지할 수 있습니다.',
        },
        {
          id: 9,
          question: '다음 중 useLayoutEffect를 사용해야 하는 경우는?',
          options: [
            '데이터 페칭을 할 때',
            'DOM 측정이 필요하고 변경사항이 브라우저 페인팅 전에 반영되어야 할 때',
            '이벤트 리스너를 등록할 때',
            '타이머를 설정할 때',
          ],
          correctAnswer: 1,
          explanation:
            'useLayoutEffect는 DOM 측정이 필요하고 해당 측정을 기반으로 한 변경사항이 브라우저 페인팅 전에 반영되어야 할 때 사용합니다.',
        },
        {
          id: 10,
          question:
            '서버와 클라이언트의 콘텐츠 차이를 처리할 때 useEffect를 어떻게 활용해야 하나요?',
          options: [
            'useEffect 사용을 피하고 서버 사이드 렌더링만 사용한다',
            'useEffect와 useState를 함께 사용하여 클라이언트 사이드 렌더링 여부를 추적한다',
            'useEffect 대신 useLayoutEffect를 사용한다',
            '서버와 클라이언트 코드를 완전히 분리한다',
          ],
          correctAnswer: 1,
          explanation:
            'isClient와 같은 상태를 useState로 관리하고 useEffect를 사용하여 클라이언트 사이드에서만 특정 콘텐츠를 렌더링하도록 처리할 수 있습니다.',
        },
        {
          id: 11,
          question:
            'useEffect에서 비동기 함수를 직접 Effect 함수로 사용할 수 없는 이유는?',
          options: [
            '성능상의 이유 때문에',
            'cleanup 함수가 제대로 동작하지 않을 수 있어서',
            'Effect 함수는 void를 반환해야 하는데 async 함수는 Promise를 반환하기 때문에',
            '비동기 함수는 useEffect에서 지원하지 않아서',
          ],
          correctAnswer: 2,
          explanation:
            'Effect 함수는 cleanup 함수만을 반환할 수 있어야 하는데, async 함수는 항상 Promise를 반환하므로 직접 Effect 함수로 사용할 수 없습니다. 대신 Effect 내부에서 async 함수를 정의하고 호출할 수 있습니다.',
        },
        {
          id: 12,
          question: 'useEffect의 cleanup 함수가 필요한 경우는?',
          options: [
            '모든 useEffect에서 항상 필요하다',
            '상태 업데이트가 있는 경우에만 필요하다',
            '구독, 타이머, 이벤트 리스너 등 정리가 필요한 리소스를 설정한 경우에 필요하다',
            '외부 API를 호출하는 경우에만 필요하다',
          ],
          correctAnswer: 2,
          explanation:
            'cleanup 함수는 구독 해제, 타이머 정리, 이벤트 리스너 제거 등 Effect에서 설정한 리소스를 정리해야 할 때 필요합니다.',
        },
        {
          id: 13,
          question:
            '커스텀 Hook으로 Effect를 래핑할 때의 장점으로 올바르지 않은 것은?',
          options: [
            '코드 재사용성이 향상된다',
            '로직을 더 선언적으로 만들 수 있다',
            'Effect의 의존성을 제거할 수 있다',
            '관련 로직을 하나의 장소로 모을 수 있다',
          ],
          correctAnswer: 2,
          explanation:
            '커스텀 Hook으로 Effect를 래핑하는 것은 의존성 자체를 제거하지는 않습니다. 대신 코드 재사용성을 높이고, 로직을 더 선언적으로 만들며, 관련 로직을 한 곳으로 모을 수 있습니다.',
        },
        {
          id: 14,
          question:
            '다음 useEffect 코드에서 잘못된 부분은?\n\nuseEffect(() => {\n  document.title = title;\n  analytics.track(title);\n}, []);',
          options: [
            'cleanup 함수가 없다',
            '의존성 배열이 비어있지만 title을 사용하고 있다',
            '두 가지 다른 동작을 하나의 Effect에서 처리하고 있다',
            'analytics.track이 정의되지 않았다',
          ],
          correctAnswer: 1,
          explanation:
            'Effect 내에서 title을 사용하고 있지만 의존성 배열에 포함되지 않았습니다. 의존성 배열에는 Effect 내에서 사용하는 모든 반응형 값이 포함되어야 합니다.',
        },
      ],
    },

    {
      title: '실제 구현과 최적화',
      description:
        'useEffect의 실제 구현 시나리오와 최적화 전략을 테스트합니다.',
      questions: [
        {
          id: 15,
          question:
            'useEffect로 이벤트 리스너를 등록할 때 가장 권장되는 방식은?',
          options: [
            '렌더링마다 이벤트 리스너를 새로 등록한다',
            '의존성 배열 없이 이벤트 리스너를 등록한다',
            '이벤트 핸들러를 useCallback으로 감싸서 의존성 배열에 추가한다',
            '빈 의존성 배열을 사용하고 cleanup에서 이벤트 리스너를 제거한다',
          ],
          correctAnswer: 3,
          explanation:
            '이벤트 리스너는 컴포넌트 마운트 시 한 번만 등록하고, 언마운트 시 정리해야 하므로 빈 의존성 배열과 cleanup 함수를 사용하는 것이 가장 권장됩니다.',
        },
        {
          id: 16,
          question:
            '다음 중 Effect의 의존성으로 함수를 받아야 하는 경우의 올바른 처리 방법은?',
          options: [
            '함수를 Effect 외부에서 정의하고 의존성 배열에 추가한다',
            '함수를 Effect 내부로 이동한다',
            'useCallback으로 함수를 메모이제이션한다',
            '함수를 전역 스코프로 이동한다',
          ],
          correctAnswer: 1,
          explanation:
            '가능한 한 함수를 Effect 내부로 이동하는 것이 가장 좋습니다. 이렇게 하면 함수를 의존성으로 선언할 필요가 없어지고 Effect의 독립성이 향상됩니다.',
        },
        {
          id: 17,
          question:
            '데이터 페칭 시 useEffect 내에서 발생할 수 있는 메모리 누수를 방지하는 방법은?',
          options: [
            'try-catch 블록 사용',
            'cleanup 함수에서 AbortController 사용',
            '데이터 페칭 전에 이전 데이터 삭제',
            'Promise.race 사용',
          ],
          correctAnswer: 1,
          explanation:
            'AbortController를 사용하여 cleanup 함수에서 진행 중인 fetch 요청을 취소함으로써 메모리 누수를 방지할 수 있습니다.',
        },
        {
          id: 18,
          question:
            '다음 중 useEffect의 의존성 배열 최적화와 관련하여 잘못된 설명은?',
          options: [
            '원시값 대신 객체나 함수를 의존성으로 사용하면 더 효율적이다',
            '가능한 한 의존성 배열을 최소화해야 한다',
            '불필요한 객체 생성을 피하기 위해 객체를 Effect 내부로 이동해야 한다',
            'Effect 내에서 사용하는 모든 반응형 값은 의존성 배열에 포함되어야 한다',
          ],
          correctAnswer: 0,
          explanation:
            '객체나 함수를 의존성으로 사용하면 매 렌더링마다 새로운 참조가 생성되어 불필요한 Effect 실행이 발생할 수 있습니다. 대신 원시값을 사용하거나 해당 값들을 Effect 내부로 이동하는 것이 좋습니다.',
        },
        {
          id: 19,
          question:
            '프레임워크를 사용할 때 useEffect와 관련된 올바른 접근 방식은?',
          options: [
            '모든 데이터 페칭에 useEffect를 사용한다',
            '가능한 한 프레임워크에서 제공하는 데이터 페칭 기능을 사용한다',
            'useEffect와 프레임워크의 기능을 혼합하여 사용한다',
            '프레임워크의 기능 대신 항상 useEffect를 사용한다',
          ],
          correctAnswer: 1,
          explanation:
            '데이터 페칭이나 라우팅과 같은 일반적인 작업은 가능한 한 프레임워크에서 제공하는 기능을 사용해야 합니다. 프레임워크의 기능이 useEffect보다 더 최적화되어 있습니다.',
        },
        {
          id: 20,
          question:
            "다음 useEffect 코드의 문제점은?\n\nfunction ChatRoom({ onMessage }) {\n  useEffect(() => {\n    socket.on('message', onMessage);\n    return () => socket.off('message', onMessage);\n  }, []);\n  // ...\n}",
          options: [
            'socket이 전역 변수로 사용되었다',
            'cleanup 함수가 불완전하다',
            'onMessage가 의존성 배열에 포함되지 않았다',
            '이벤트 리스너가 잘못 등록되었다',
          ],
          correctAnswer: 2,
          explanation:
            'props로 전달받은 onMessage 함수를 Effect 내에서 사용하고 있지만 의존성 배열에 포함되지 않았습니다. 이로 인해 최신 onMessage 함수가 아닌 이전 버전이 사용될 수 있습니다.',
        },
        {
          id: 21,
          question:
            'Effect에서 조건부로 로직을 실행해야 할 때 가장 좋은 방법은?',
          options: [
            '조건문을 Effect 외부에 둔다',
            '다수의 useEffect를 사용한다',
            'Effect 내부에 조건문을 둔다',
            '조건부 렌더링을 사용한다',
          ],
          correctAnswer: 2,
          explanation:
            'Effect 내부에 조건문을 두는 것이 가장 좋습니다. Effect 자체는 조건부로 실행되면 안 되지만, Effect 내부의 로직은 조건부로 실행될 수 있습니다.',
        },
      ],
    },

    {
      title: '실전 응용과 문제 해결',
      description:
        'useEffect의 실제 사용 시나리오와 일반적인 문제 해결 방법을 테스트합니다.',
      questions: [
        {
          id: 22,
          question:
            'Effect에서 DOM 요소를 참조할 때 발생할 수 있는 문제를 해결하는 가장 좋은 방법은?',
          options: [
            'useRef와 useLayoutEffect 사용하기',
            'Effect 내에서 직접 querySelector 사용하기',
            'DOM 요소를 전역 변수로 저장하기',
            'useEffect 대신 이벤트 핸들러 사용하기',
          ],
          correctAnswer: 0,
          explanation:
            'DOM 요소를 참조할 때는 useRef와 함께 useLayoutEffect를 사용하는 것이 좋습니다. useLayoutEffect는 DOM 업데이트 직후, 브라우저가 화면을 다시 그리기 전에 실행되므로 레이아웃 측정이나 DOM 조작에 적합합니다.',
        },
        {
          id: 23,
          question:
            '다음 중 useEffect를 사용한 애니메이션 구현의 올바른 접근 방식은?',
          options: [
            '애니메이션 로직을 이벤트 핸들러에 넣는다',
            'requestAnimationFrame을 cleanup 함수 없이 사용한다',
            'useLayoutEffect를 사용하고 cleanup에서 애니메이션을 정리한다',
            'setTimeout을 사용하여 애니메이션을 구현한다',
          ],
          correctAnswer: 2,
          explanation:
            '애니메이션은 시각적 업데이트이므로 useLayoutEffect를 사용하고, cleanup 함수에서 애니메이션을 정리(cancel)하는 것이 권장됩니다. 이는 화면 깜빡임을 방지하고 메모리 누수를 예방합니다.',
        },
        {
          id: 24,
          question: '다음 중 useEffect의 실행 시점을 제어하는 올바른 방법은?',
          options: [
            'setTimeout으로 Effect의 실행을 지연시킨다',
            '조건부로 useEffect를 호출한다',
            '의존성 배열에 조건을 추가한다',
            'Effect 내부에서 조건문을 사용한다',
          ],
          correctAnswer: 3,
          explanation:
            'useEffect의 실행 시점을 제어할 때는 Effect 내부에서 조건문을 사용해야 합니다. Hook을 조건부로 호출하는 것은 React의 규칙을 위반하며, Effect의 실행 자체를 지연시키는 것은 권장되지 않습니다.',
        },
        {
          id: 25,
          question:
            'useEffect에서 await를 사용해야 할 때 가장 적절한 구현 방법은?',
          options: [
            'Effect 함수를 async로 만든다',
            'Effect 내부에 별도의 async 함수를 정의하고 호출한다',
            'await를 사용하지 않고 Promise.then을 사용한다',
            'useAsyncEffect 커스텀 훅을 만든다',
          ],
          correctAnswer: 1,
          explanation:
            'Effect 함수는 async가 될 수 없으므로(cleanup 함수 반환 문제), Effect 내부에 별도의 async 함수를 정의하고 이를 호출하는 것이 가장 적절한 방법입니다.',
        },
        {
          id: 26,
          question:
            'Effect에서 여러 상태 업데이트를 처리할 때 발생할 수 있는 문제를 해결하는 가장 좋은 방법은?',
          options: [
            '모든 상태 업데이트를 하나의 useEffect에 모은다',
            '각 상태별로 별도의 useEffect를 사용한다',
            '상태 업데이트를 배치로 처리한다',
            'useReducer를 사용하여 관련 상태 업데이트를 그룹화한다',
          ],
          correctAnswer: 3,
          explanation:
            '여러 관련된 상태 업데이트가 있을 때는 useReducer를 사용하여 업데이트를 그룹화하는 것이 좋습니다. 이는 상태 업데이트 로직을 중앙화하고 Effect의 복잡도를 줄여줍니다.',
        },
        {
          id: 27,
          question:
            'Effect 내에서 props나 state를 참조할 때 발생할 수 있는 클로저 문제를 해결하는 방법으로 올바른 것은?',
          options: [
            '모든 props와 state를 의존성 배열에 추가한다',
            'useRef를 사용하여 최신 값을 추적한다',
            'useState의 함수형 업데이트를 사용한다',
            '전역 변수를 사용하여 값을 저장한다',
          ],
          correctAnswer: 1,
          explanation:
            '클로저 문제를 해결하기 위해 useRef를 사용하여 최신 값을 추적할 수 있습니다. ref는 렌더링 간에 지속되면서도 업데이트해도 리렌더링을 트리거하지 않습니다.',
        },
        {
          id: 28,
          question: '다음 중 Effect의 실행 순서를 보장하는 올바른 방법은?',
          options: [
            'Effect 내에서 Promise.all 사용하기',
            '의존성 배열을 동일하게 유지하기',
            'Effect를 컴포넌트 코드의 특정 순서로 배치하기',
            'Effect들 사이에 상태를 공유하여 순서 제어하기',
          ],
          correctAnswer: 3,
          explanation:
            'Effect의 실행 순서는 코드 순서로 보장되지 않습니다. 순서가 중요한 경우, Effect들 사이에 상태를 공유하여 한 Effect의 완료를 다른 Effect의 시작 조건으로 사용할 수 있습니다.',
        },
      ],
    },
  ],
};
