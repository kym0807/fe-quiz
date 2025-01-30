import { Quiz } from '@/types/quiz.type';

export const quiz: Quiz = {
  title: 'React createRoot 마스터 퀴즈',
  description:
    'React의 createRoot API, 에러 처리, 그리고 모범 사례에 대한 이해도를 테스트해보세요',
  categories: [
    {
      title: '기본 개념',
      description: 'createRoot의 기본 개념과 사용법 이해하기',
      questions: [
        {
          id: 1,
          question:
            '부분적으로 React를 적용한 페이지에서 여러 개의 React 루트를 사용할 때, 다음 중 올바른 설명은 무엇인가요?',
          options: [
            'React의 모범 사례에 어긋나므로 여러 개의 루트를 생성해서는 안 됩니다',
            '여러 개의 루트를 생성할 수 있지만, 반드시 동일한 에러 경계를 공유해야 합니다',
            '각 루트는 독립적이며 페이지의 서로 다른 부분을 개별적으로 관리할 수 있습니다',
            '여러 개의 루트는 반드시 동일한 부모 DOM 노드 내에 생성되어야 합니다',
          ],
          correctAnswer: 2,
          explanation:
            '일반적으로는 단일 루트 사용이 권장되지만, 필요한 경우 여러 개의 독립적인 루트를 생성할 수 있습니다. 각 루트는 독립적으로 작동하여 페이지의 각 섹션을 개별적으로 React로 관리할 수 있습니다.',
        },
        {
          id: 2,
          question:
            '동일한 root에 대해 root.render()를 여러 번 호출하면 어떻게 되나요?',
          options: [
            'render는 한 번만 호출할 수 있기 때문에 에러가 발생합니다',
            '컴포넌트의 인스턴스가 여러 개 생성됩니다',
            '기존 React 트리가 새로운 내용으로 업데이트됩니다',
            '이전 트리를 언마운트하고 처음부터 새로운 트리를 생성합니다',
          ],
          correctAnswer: 2,
          explanation:
            '동일한 root에 대해 root.render()를 여러 번 호출하면 기존 React 트리가 업데이트됩니다. React의 재조정(reconciliation) 과정을 통해 DOM에서 필요한 부분만 효율적으로 업데이트됩니다.',
        },
      ],
    },
    {
      title: '에러 처리',
      description: '고급 에러 처리 시나리오와 복구 메커니즘',
      questions: [
        {
          id: 3,
          question:
            "다음 코드에서 onCaughtError와 onUncaughtError 콜백의 주요 차이점은 무엇인가요?\n```tsx\nconst root = createRoot(container, {\n  onCaughtError: (error) => console.log('Caught:', error),\n  onUncaughtError: (error) => console.log('Uncaught:', error)\n});```",
          options: [
            'onCaughtError는 동기 에러를, onUncaughtError는 비동기 에러를 처리합니다',
            'onCaughtError는 Error Boundary에서 잡힌 에러를, onUncaughtError는 잡히지 않은 에러를 처리합니다',
            'onCaughtError는 개발 모드에서만 작동하고, onUncaughtError는 프로덕션에서 작동합니다',
            '차이가 없으며, 모든 에러에 대해 순차적으로 호출됩니다',
          ],
          correctAnswer: 1,
          explanation:
            '핵심적인 차이는 onCaughtError는 Error Boundary에 의해 포착된 에러가 발생했을 때 호출되고, onUncaughtError는 어떤 Error Boundary에서도 포착하지 못한 에러가 발생했을 때 호출된다는 점입니다. 이를 통해 에러가 포착되었는지 여부에 따라 다른 처리 전략을 적용할 수 있습니다.',
        },
        {
          id: 4,
          question:
            'onRecoverableError로 에러 복구를 구현할 때, 다음 중 어떤 시나리오가 이 콜백을 트리거하지 않나요?',
          options: [
            '서버와 클라이언트 렌더링 간의 hydration 불일치',
            '렌더링 단계에서 컴포넌트가 발생시키는 에러',
            'useEffect 내에서의 네트워크 요청 실패',
            '유효하지 않은 CSS가 포함된 style 속성',
          ],
          correctAnswer: 2,
          explanation:
            'onRecoverableError는 React가 자동으로 복구할 수 있는 에러(예: hydration 불일치나 유효하지 않은 style 속성)에 대해 호출됩니다. 렌더링 단계에서 발생하는 에러는 치명적인 것으로 간주되어 error boundary나 onUncaughtError를 트리거합니다.',
        },
      ],
    },
    {
      title: '성능과 모범 사례',
      description: '최적화 기법과 구현 패턴 이해하기',
      questions: [
        {
          id: 5,
          question:
            '서버사이드 렌더링 애플리케이션에서 최적의 성능을 위한 올바른 작업 순서는 무엇인가요?',
          options: [
            'createRoot -> render -> hydrate',
            'hydrateRoot -> createRoot -> render',
            '서버에서 초기 HTML 전송 -> hydrateRoot -> 이벤트 핸들러 연결',
            'createRoot -> hydrate -> render -> 이벤트 핸들러 연결',
          ],
          correctAnswer: 2,
          explanation:
            'SSR에서 최적의 성능을 위해서는 서버가 먼저 초기 HTML을 전송하고, 그 다음 클라이언트에서 hydrateRoot를 사용하여 이벤트 핸들러를 연결하고 페이지를 인터랙티브하게 만들어야 합니다. 이는 불필요한 리렌더링을 방지하고 최상의 사용자 경험을 제공합니다.',
        },
        {
          id: 6,
          question:
            'createRoot의 identifierPrefix 옵션은 다중 루트 애플리케이션에서 어떤 잠재적 문제를 해결하나요?',
          options: [
            'React 트리의 깊이를 줄여 성능을 향상시킵니다',
            '서로 다른 루트 간의 CSS 클래스 이름 충돌을 방지합니다',
            'useId 사용 시 여러 React 루트 간에 고유한 ID를 보장합니다',
            '에러 메시지에 접두사를 추가하여 디버깅을 돕습니다',
          ],
          correctAnswer: 2,
          explanation:
            'identifierPrefix 옵션은 다중 루트 애플리케이션에서 매우 중요한데, useId()로 생성되는 ID가 서로 다른 루트 간에 고유함을 보장합니다. 이는 중복 ID로 인해 발생할 수 있는 접근성 문제와 DOM 충돌을 방지합니다.',
        },
      ],
    },
  ],
};
