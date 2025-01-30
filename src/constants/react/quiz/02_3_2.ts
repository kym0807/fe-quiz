import { Quiz } from '@/types/quiz.type';

export const quiz: Quiz = {
  title: 'React hydrateRoot 완벽 이해하기',
  description:
    'React의 hydrateRoot API와 서버 사이드 렌더링의 클라이언트 하이드레이션 과정을 이해합니다',
  categories: [
    {
      title: '기본 개념',
      description: 'hydrateRoot의 기본적인 개념과 사용법을 테스트합니다',
      questions: [
        {
          id: 1,
          question: 'hydrateRoot의 주요 목적은 무엇입니까?',
          options: [
            '새로운 React 애플리케이션을 생성하는 것',
            '서버에서 렌더링된 HTML을 클라이언트에서 상호작용 가능한 React 애플리케이션으로 변환하는 것',
            'React 컴포넌트를 서버에서 렌더링하는 것',
            '클라이언트 사이드 렌더링을 수행하는 것',
          ],
          correctAnswer: 1,
          explanation:
            'hydrateRoot는 서버에서 React로 렌더링된 HTML에 클라이언트 측 React를 연결하여 상호작용이 가능한 애플리케이션으로 만드는 것이 주요 목적입니다.',
        },
        {
          id: 2,
          question: '다음 중 hydrateRoot의 필수 매개변수가 아닌 것은?',
          options: ['domNode', 'reactNode', 'options', 'identifierPrefix'],
          correctAnswer: 2,
          explanation:
            'options는 선택적 매개변수이며, domNode와 reactNode만이 필수 매개변수입니다.',
        },
        {
          id: 3,
          question:
            "다음 코드의 실행 결과로 가장 적절한 것은?\n\nconst root = hydrateRoot(\n  document.getElementById('root'),\n  <App />\n);\n",
          options: [
            '새로운 React 애플리케이션이 생성된다',
            '서버에서 렌더링된 HTML이 완전히 새로운 DOM으로 교체된다',
            '기존 HTML에 React 이벤트 핸들러와 상태 관리가 연결된다',
            '서버에서 새로운 렌더링이 시작된다',
          ],
          correctAnswer: 2,
          explanation:
            'hydrateRoot는 기존 HTML 구조를 유지하면서 React의 이벤트 핸들러와 상태 관리 기능을 연결합니다.',
        },
        {
          id: 4,
          question:
            'SSR과 관련하여 createRoot()와 hydrateRoot()의 차이점으로 가장 올바른 것은?',
          options: [
            'createRoot는 더 빠른 렌더링을 제공한다',
            'hydrateRoot는 서버에서 렌더링된 HTML이 있을 때 사용하고, createRoot는 클라이언트에서만 렌더링되는 앱에 사용한다',
            'createRoot는 더 많은 기능을 제공한다',
            'hydrateRoot는 모든 종류의 React 앱에서 사용할 수 있다',
          ],
          correctAnswer: 1,
          explanation:
            'hydrateRoot는 서버에서 렌더링된 HTML이 있는 경우에 사용하고, createRoot는 클라이언트에서만 렌더링되는 앱에서 사용합니다.',
        },
        {
          id: 5,
          question:
            'hydration 불일치(mismatch)가 발생하는 일반적인 원인이 아닌 것은?',
          options: [
            '서버와 클라이언트의 데이터가 다른 경우',
            'React 버전이 다른 경우',
            '루트 노드 주변의 추가 공백이나 줄바꿈',
            '컴포넌트의 스타일이 다른 경우',
          ],
          correctAnswer: 3,
          explanation:
            '컴포넌트의 스타일 차이는 일반적으로 hydration 불일치를 발생시키지 않습니다. 주요 원인은 콘텐츠 구조의 차이, 데이터 불일치, 공백 문제 등입니다.',
        },
        {
          id: 6,
          question:
            'suppressHydrationWarning 속성을 사용하는 가장 적절한 경우는?',
          options: [
            '모든 hydration 경고를 무시하고 싶을 때',
            '타임스탬프와 같이 서버와 클라이언트에서 필연적으로 다른 값을 표시해야 할 때',
            '성능 최적화가 필요할 때',
            '개발 모드에서 테스트할 때',
          ],
          correctAnswer: 1,
          explanation:
            'suppressHydrationWarning은 타임스탬프처럼 서버와 클라이언트에서 의도적으로 다른 값을 표시해야 하는 불가피한 경우에만 사용해야 합니다.',
        },
        {
          id: 7,
          question:
            'SSR 환경에서 window 객체를 안전하게 사용하는 방법으로 가장 적절한 것은?',
          options: [
            'window 객체를 직접 사용한다',
            "typeof window !== 'undefined' 체크 후 사용한다",
            'useEffect 내에서만 window 객체를 사용한다',
            'window 객체 사용을 완전히 피한다',
          ],
          correctAnswer: 2,
          explanation:
            'useEffect는 클라이언트 사이드에서만 실행되므로, 브라우저 API를 안전하게 사용할 수 있는 위치입니다.',
        },
      ],
    },

    {
      title: '에러 처리와 성능 최적화',
      description:
        'hydrateRoot의 에러 처리 방식과 성능 최적화 관련 지식을 테스트합니다',
      questions: [
        {
          id: 8,
          question:
            '다음 중 hydrateRoot의 options에서 제공하는 에러 처리 콜백이 아닌 것은?',
          options: [
            'onCaughtError',
            'onUncaughtError',
            'onRecoverableError',
            'onRenderError',
          ],
          correctAnswer: 3,
          explanation:
            'hydrateRoot options에서 제공하는 에러 처리 콜백은 onCaughtError, onUncaughtError, onRecoverableError입니다.',
        },
        {
          id: 9,
          question:
            'onRecoverableError 콜백이 호출되는 상황으로 가장 적절한 것은?',
          options: [
            'Error Boundary에서 catch한 에러가 발생했을 때',
            'React가 자동으로 복구할 수 있는 에러가 발생했을 때',
            '치명적인 에러가 발생했을 때',
            'hydration 불일치가 발생했을 때',
          ],
          correctAnswer: 1,
          explanation:
            'onRecoverableError는 React가 자동으로 복구할 수 있는 에러가 발생했을 때 호출됩니다.',
        },
        {
          id: 10,
          question:
            '다음 코드의 목적은 무엇입니까?\n\nconst [isClient, setIsClient] = useState(false);\n\nuseEffect(() => {\n  setIsClient(true);\n}, []);\n',
          options: [
            '클라이언트 사이드 렌더링을 활성화하기 위해',
            '서버와 클라이언트에서 의도적으로 다른 내용을 렌더링하기 위해',
            'hydration 과정을 최적화하기 위해',
            '컴포넌트의 마운트 상태를 확인하기 위해',
          ],
          correctAnswer: 1,
          explanation:
            '이 패턴은 서버와 클라이언트에서 의도적으로 다른 내용을 렌더링해야 할 때 사용됩니다.',
        },
        {
          id: 11,
          question: '전체 HTML 문서를 hydrate할 때 올바른 방법은?',
          options: [
            'createRoot(document.body, <App />)',
            'hydrateRoot(document.body, <App />)',
            'hydrateRoot(document, <App />)',
            'createRoot(document, <App />)',
          ],
          correctAnswer: 2,
          explanation:
            '전체 HTML 문서를 hydrate할 때는 document를 root로 사용하여 hydrateRoot(document, <App />)를 호출해야 합니다.',
        },
        {
          id: 12,
          question: 'hydration 성능 최적화와 관련하여 잘못된 설명은?',
          options: [
            '불필요한 hydration 불일치를 피해야 한다',
            'suppressHydrationWarning의 사용을 최소화해야 한다',
            'two-pass 렌더링은 성능에 영향을 주지 않는다',
            '서버와 클라이언트의 초기 상태를 일치시켜야 한다',
          ],
          correctAnswer: 2,
          explanation:
            'two-pass 렌더링은 추가적인 렌더링 과정이 필요하므로 성능에 영향을 미칩니다.',
        },
        {
          id: 13,
          question: 'React 18에서 hydrateRoot를 사용할 때의 장점이 아닌 것은?',
          options: [
            '선택적 hydration 지원',
            '자동 배치 업데이트',
            '서버 컴포넌트 지원',
            '동기식 렌더링 보장',
          ],
          correctAnswer: 3,
          explanation:
            'React 18의 hydrateRoot는 동기식 렌더링을 보장하지 않으며, 오히려 비동기 렌더링과 선택적 hydration을 지원합니다.',
        },
        {
          id: 14,
          question: 'identifierPrefix 옵션을 사용하는 주된 이유는 무엇입니까?',
          options: [
            '컴포넌트의 스타일을 구분하기 위해',
            '서버와 클라이언트에서 생성되는 ID의 충돌을 방지하기 위해',
            'hydration 성능을 최적화하기 위해',
            '에러 추적을 용이하게 하기 위해',
          ],
          correctAnswer: 1,
          explanation:
            'identifierPrefix는 useId로 생성되는 ID의 접두사를 지정하여 서버와 클라이언트 간의 ID 충돌을 방지합니다.',
        },
        {
          id: 15,
          question:
            'hydration 과정에서 브라우저 API를 안전하게 사용하기 위한 방법으로 적절하지 않은 것은?',
          options: [
            'useEffect 훅 내에서 브라우저 API 사용',
            'typeof window 체크 후 사용',
            'window 객체를 직접 참조하는 대신 추상화된 인터페이스 사용',
            '모든 브라우저 API 호출을 전역 스코프에서 수행',
          ],
          correctAnswer: 3,
          explanation:
            '전역 스코프에서의 브라우저 API 호출은 서버 사이드 렌더링 시 에러를 발생시킬 수 있습니다.',
        },
      ],
    },

    {
      title: '고급 개념과 실제 적용',
      description:
        'hydration의 고급 개념과 실제 적용 사례에 대한 이해를 테스트합니다',
      questions: [
        {
          id: 16,
          question: 'React Concurrent 모드에서 hydration은 어떻게 동작하나요?',
          options: [
            '항상 동기적으로 전체 앱을 hydrate 한다',
            '우선순위에 따라 점진적으로 컴포넌트를 hydrate 할 수 있다',
            'hydration을 건너뛰고 바로 클라이언트 렌더링을 시작한다',
            '서버 사이드 렌더링을 완전히 비활성화한다',
          ],
          correctAnswer: 1,
          explanation:
            'Concurrent 모드에서는 선택적 hydration을 통해 우선순위에 따라 점진적으로 컴포넌트를 hydrate 할 수 있습니다.',
        },
        {
          id: 17,
          question:
            '다음 중 hydrateRoot를 사용할 때 발생할 수 있는 성능 문제의 원인이 아닌 것은?',
          options: [
            '불필요한 리렌더링',
            '너무 큰 초기 번들 크기',
            '컴포넌트의 깊은 중첩',
            'CSS-in-JS 사용',
          ],
          correctAnswer: 3,
          explanation:
            'CSS-in-JS 자체는 hydration 성능에 직접적인 영향을 미치지 않습니다. 다른 옵션들은 모두 hydration 성능에 영향을 미치는 실제 요인들입니다.',
        },
        {
          id: 18,
          question:
            "SSR 환경에서 다음 코드가 문제가 되는 이유는 무엇입니까?\n\nfunction Component() {\n  const data = localStorage.getItem('user');\n  return <div>{data}</div>;\n}",
          options: [
            'localStorage가 너무 느리기 때문에',
            '데이터가 안전하지 않기 때문에',
            '서버에는 localStorage가 없기 때문에',
            'hydration이 불필요하게 발생하기 때문에',
          ],
          correctAnswer: 2,
          explanation:
            '서버에는 localStorage가 존재하지 않기 때문에 서버 사이드 렌더링 중에 에러가 발생합니다.',
        },
        {
          id: 19,
          question:
            'Next.js와 같은 프레임워크에서 hydrateRoot가 자동으로 처리되는 이유는 무엇인가요?',
          options: [
            '성능이 더 좋아서',
            '프레임워크가 hydration 타이밍과 방식을 최적화할 수 있어서',
            '브라우저 호환성을 위해서',
            'React 팀이 권장해서',
          ],
          correctAnswer: 1,
          explanation:
            '프레임워크는 앱의 전체적인 구조를 알고 있기 때문에 hydration의 타이밍과 방식을 최적화할 수 있습니다.',
        },
        {
          id: 20,
          question: 'Streaming SSR에서 hydrateRoot는 어떻게 동작하나요?',
          options: [
            '전체 HTML이 로드될 때까지 기다렸다가 한 번에 hydrate한다',
            '각 청크가 도착할 때마다 부분적으로 hydrate를 시작할 수 있다',
            'hydration을 건너뛰고 클라이언트 렌더링을 한다',
            '서버에서 모든 처리를 완료한다',
          ],
          correctAnswer: 1,
          explanation:
            'Streaming SSR에서는 각 청크가 도착할 때마다 점진적으로 hydrate를 시작할 수 있으며, 이는 사용자가 더 빠르게 상호작용할 수 있게 합니다.',
        },
        {
          id: 21,
          question:
            '다음 중 hydrateRoot와 관련된 보안 고려사항으로 올바르지 않은 것은?',
          options: [
            '서버와 클라이언트의 초기 상태 일치 확인',
            'XSS 공격 방지를 위한 데이터 이스케이프',
            'hydration 후 자동으로 모든 보안 취약점이 해결됨',
            '민감한 데이터의 클라이언트 전송 최소화',
          ],
          correctAnswer: 2,
          explanation:
            'hydration 자체는 보안 취약점을 해결하지 않습니다. 보안은 별도로 고려되어야 할 중요한 요소입니다.',
        },
        {
          id: 22,
          question:
            'React.lazy()와 Suspense를 사용할 때 hydration은 어떻게 처리되어야 하나요?',
          options: [
            'hydration을 사용하면 안 됨',
            'lazy 로딩된 컴포넌트가 로드된 후에 hydration 수행',
            'Suspense 경계에서 hydration 중단',
            '서버 사이드 렌더링을 비활성화',
          ],
          correctAnswer: 1,
          explanation:
            'lazy 로딩된 컴포넌트는 해당 컴포넌트가 로드된 후에 hydration이 수행되어야 하며, 이는 Suspense 경계 내에서 자동으로 처리됩니다.',
        },
      ],
    },
  ],
};
