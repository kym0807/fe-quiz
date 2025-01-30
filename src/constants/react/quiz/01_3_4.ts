import { Quiz } from '@/types/quiz.type';

export const quiz: Quiz = {
  title: 'React lazy Loading Quiz',
  description: 'React의 lazy 함수와 코드 스플리팅에 대한 이해',
  categories: [
    {
      title: 'Basic Concepts',
      description: 'lazy 함수의 기본 개념과 사용법',
      questions: [
        {
          id: 1,
          question: 'React의 lazy 함수의 주요 목적은 무엇인가요?',
          options: [
            '컴포넌트의 렌더링 성능 최적화',
            '컴포넌트의 코드 로딩을 첫 렌더링 시점까지 지연',
            '컴포넌트의 상태 관리 최적화',
            '컴포넌트의 메모리 사용량 감소',
          ],
          correctAnswer: 1,
          explanation:
            'lazy는 컴포넌트가 처음 렌더링될 때까지 해당 컴포넌트의 코드 로딩을 지연시킬 수 있게 해주는 함수입니다.',
        },
        {
          id: 2,
          question:
            'lazy를 사용할 때 필수적으로 함께 사용해야 하는 컴포넌트는?',
          options: ['ErrorBoundary', 'Suspense', 'Fragment', 'memo'],
          correctAnswer: 1,
          explanation:
            'lazy 컴포넌트는 반드시 Suspense 컴포넌트 내부에서 렌더링되어야 하며, 이를 통해 로딩 상태를 처리할 수 있습니다.',
        },
        {
          id: 3,
          question: '다음 중 lazy 컴포넌트 선언의 올바른 위치는?',
          options: [
            '컴포넌트 내부',
            'useEffect 내부',
            '모듈의 최상위 레벨',
            '이벤트 핸들러 내부',
          ],
          correctAnswer: 2,
          explanation:
            'lazy 컴포넌트는 모듈의 최상위 레벨에서 선언해야 하며, 컴포넌트 내부에서 선언하면 리렌더링할 때마다 상태가 초기화됩니다.',
        },
        {
          id: 4,
          question: 'lazy 함수의 동작 방식 중 틀린 것은?',
          options: [
            '컴포넌트가 처음 렌더링될 때 load 함수를 호출',
            'Promise가 해결될 때까지 대기',
            'Promise 결과는 캐시되어 재사용',
            '모든 렌더링마다 load 함수를 다시 호출',
          ],
          correctAnswer: 3,
          explanation:
            'lazy 함수의 load 함수는 한 번만 호출되며, 그 결과는 캐시되어 재사용됩니다.',
        },
        {
          id: 5,
          question: '다음 중 lazy 사용이 가장 적절한 경우는?',
          options: [
            '자주 사용되는 작은 버튼 컴포넌트',
            '페이지 상단의 헤더 컴포넌트',
            '조건부로 렌더링되는 큰 사이즈의 모달',
            '모든 페이지에서 사용되는 네비게이션 바',
          ],
          correctAnswer: 2,
          explanation:
            'lazy는 큰 사이즈의 컴포넌트나 조건부로 렌더링되는 컴포넌트(예: 모달)에 사용하는 것이 효과적입니다.',
        },
        {
          id: 6,
          question: 'lazy를 사용할 때의 제한사항이 아닌 것은?',
          options: [
            '반드시 default export를 사용해야 함',
            'Suspense와 함께 사용해야 함',
            '번들러의 dynamic import 지원이 필요함',
            '클래스 컴포넌트에서만 사용 가능함',
          ],
          correctAnswer: 3,
          explanation:
            'lazy는 함수 컴포넌트와 클래스 컴포넌트 모두에서 사용 가능합니다. 다만 default export를 사용해야 하고, Suspense와 함께 사용해야 하며, 번들러의 dynamic import 지원이 필요합니다.',
        },
        {
          id: 7,
          question:
            "다음 코드의 문제점은 무엇인가요?\n\n```tsx\nconst Component = lazy(() => {\n  const result = import('./Component');\n  return result.namedExport;\n});\n```",
          options: [
            'import 구문이 잘못됨',
            'named export는 lazy에서 직접 사용할 수 없음',
            'Promise가 반환되지 않음',
            'lazy 함수의 구문이 잘못됨',
          ],
          correctAnswer: 1,
          explanation:
            'lazy는 default export를 반환하는 Promise를 필요로 합니다. named export는 직접 사용할 수 없습니다.',
        },
      ],
    },

    {
      title: 'Advanced Usage',
      description: 'lazy 함수의 고급 사용법과 성능 최적화',
      questions: [
        {
          id: 8,
          question:
            '다음 중 lazy와 Suspense를 함께 사용할 때 가장 좋은 방식은?',
          options: [
            '모든 lazy 컴포넌트를 하나의 Suspense로 감싸기',
            '각 lazy 컴포넌트마다 개별 Suspense 사용',
            '로딩 패턴에 따라 Suspense 계층을 적절히 구성',
            'Suspense 없이 ErrorBoundary만 사용',
          ],
          correctAnswer: 2,
          explanation:
            '사용자 경험을 최적화하기 위해서는 로딩 패턴에 따라 Suspense 계층을 적절히 구성하는 것이 좋습니다. 이를 통해 필요한 부분만 로딩 상태를 표시할 수 있습니다.',
        },
        {
          id: 9,
          question: 'lazy를 사용한 코드 스플리팅의 가장 큰 장점은?',
          options: [
            '개발 시간 단축',
            '초기 번들 크기 감소와 로딩 시간 개선',
            '코드 가독성 향상',
            '메모리 사용량 감소',
          ],
          correctAnswer: 1,
          explanation:
            'lazy를 사용한 코드 스플리팅의 주요 장점은 초기 번들 크기를 줄여 애플리케이션의 초기 로딩 시간을 개선할 수 있다는 것입니다.',
        },
        {
          id: 10,
          question:
            '다음 중 lazy 컴포넌트의 프리로딩(preloading)을 구현하는 가장 효과적인 방법은?',
          options: [
            '모든 lazy 컴포넌트를 앱 시작 시 로드',
            '사용자 행동 예측에 기반한 선택적 프리로딩',
            '모든 페이지에서 모든 컴포넌트 프리로딩',
            '프리로딩 사용하지 않기',
          ],
          correctAnswer: 1,
          explanation:
            '사용자의 행동을 예측하여 필요한 컴포넌트를 선택적으로 프리로딩하는 것이 가장 효과적입니다. 예를 들어, 버튼에 마우스를 올렸을 때 관련 컴포넌트를 프리로드할 수 있습니다.',
        },
        {
          id: 11,
          question:
            "다음 코드의 잠재적 문제점은 무엇인가요?\n\ntsx\nfunction MyComponent() {\n  const [showModal, setShowModal] = useState(false);\n  \n  const handleClick = () => {\n    const Modal = lazy(() => import('./Modal'));\n    setShowModal(true);\n  };\n  \n  return (\n    <div>\n      <button onClick={handleClick}>모달 열기</button>\n      {showModal && <Modal />}\n    </div>\n  );\n}\n",
          options: [
            'useState의 잘못된 사용',
            '이벤트 핸들러 내에서 lazy 호출',
            'Suspense 누락',
            '모달 컴포넌트의 잘못된 import',
          ],
          correctAnswer: 1,
          explanation:
            'lazy는 반드시 모듈의 최상위 레벨에서 선언되어야 하며, 이벤트 핸들러나 조건문 내부에서 호출해서는 안 됩니다.',
        },
        {
          id: 12,
          question: 'lazy 로딩 시 네트워크 오류를 처리하는 가장 좋은 방법은?',
          options: [
            'try-catch 사용',
            'ErrorBoundary와 함께 사용',
            'window.onerror 이벤트 사용',
            '에러 무시하기',
          ],
          correctAnswer: 1,
          explanation:
            'lazy 로딩 중 발생하는 네트워크 오류는 ErrorBoundary를 사용하여 처리하는 것이 가장 좋습니다. ErrorBoundary는 로딩 실패 시의 대체 UI를 제공할 수 있습니다.',
        },
        {
          id: 13,
          question:
            '다음 중 lazy를 사용한 라우팅 구현에서 가장 효과적인 방법은?',
          options: [
            '모든 라우트를 한 번에 로드',
            '각 라우트를 개별적으로 lazy 로딩',
            '관련된 라우트들을 그룹으로 lazy 로딩',
            '라우팅에는 lazy를 사용하지 않기',
          ],
          correctAnswer: 2,
          explanation:
            '관련된 라우트들을 논리적 그룹으로 묶어 lazy 로딩하는 것이 가장 효과적입니다. 이는 번들 크기와 로딩 성능 사이의 좋은 균형을 제공합니다.',
        },
        {
          id: 14,
          question:
            'webpack의 magic comments와 lazy를 함께 사용할 때의 장점이 아닌 것은?',
          options: [
            '청크 이름 지정 가능',
            '프리로딩 구성 가능',
            '자동 에러 처리',
            '청크 그룹화 가능',
          ],
          correctAnswer: 2,
          explanation:
            'webpack의 magic comments는 청크 이름 지정, 프리로딩 구성, 청크 그룹화 등을 가능하게 하지만, 자동 에러 처리 기능은 제공하지 않습니다.',
        },
      ],
    },

    {
      title: 'Implementation Strategies',
      description: 'lazy의 실제 구현과 성능 최적화 전략',
      questions: [
        {
          id: 15,
          question:
            '다음 중 대규모 애플리케이션에서 lazy 로딩 전략으로 가장 적절한 것은?',
          options: [
            '모든 컴포넌트를 lazy 로딩으로 전환',
            '주요 경로의 컴포넌트는 일반 import 사용, 부가 기능은 lazy 로딩 적용',
            '모든 컴포넌트를 일반 import로 유지',
            '무조건 코드 스플리팅 최대화',
          ],
          correctAnswer: 1,
          explanation:
            '주요 경로(Critical Path)의 컴포넌트는 즉시 로딩하고, 부가 기능이나 덜 중요한 기능은 lazy 로딩을 적용하는 것이 좋은 전략입니다. 이는 초기 로딩 시간과 사용자 경험 사이의 균형을 제공합니다.',
        },
        {
          id: 16,
          question:
            "다음 코드의 성능상 문제점은 무엇인가요?\n\ntsx\nconst HomePage = lazy(() => import('./pages/Home'));\nconst AboutPage = lazy(() => import('./pages/About'));\nconst ContactPage = lazy(() => import('./pages/Contact'));\n\nfunction App() {\n  return (\n    <Suspense fallback={<Loading />}>\n      <Routes>\n        <Route path='/' element={<HomePage />} />\n        <Route path='/about' element={<AboutPage />} />\n        <Route path='/contact' element={<ContactPage />} />\n      </Routes>\n    </Suspense>\n  );\n}\n",
          options: [
            'lazy 사용이 잘못됨',
            '모든 라우트가 동일한 Loading 컴포넌트를 공유',
            'Routes 컴포넌트 사용이 잘못됨',
            'import 구문이 잘못됨',
          ],
          correctAnswer: 1,
          explanation:
            '모든 라우트가 동일한 Suspense/Loading 컴포넌트를 공유하면 한 페이지가 로딩될 때 전체 앱이 로딩 상태로 변경될 수 있습니다. 각 라우트별로 개별 Suspense를 사용하는 것이 더 나은 사용자 경험을 제공합니다.',
        },
        {
          id: 17,
          question: 'lazy와 Suspense를 사용할 때 가장 효과적인 로딩 패턴은?',
          options: [
            '단순한 로딩 스피너 표시',
            '스켈레톤 UI와 점진적 로딩',
            '전체 화면 로딩 표시',
            '로딩 표시 없음',
          ],
          correctAnswer: 1,
          explanation:
            '스켈레톤 UI와 점진적 로딩을 사용하면 사용자에게 더 나은 경험을 제공할 수 있습니다. 이는 실제 콘텐츠의 레이아웃을 미리 보여주어 로딩 중에도 UI가 안정적으로 보이게 합니다.',
        },
        {
          id: 18,
          question: '개발 환경과 프로덕션 환경에서 lazy 로딩의 차이점은?',
          options: [
            '차이 없음',
            '개발 환경에서는 더 느리게 동작',
            '프로덕션 환경에서만 코드 스플리팅 적용',
            '개발 환경에서는 즉시 로딩으로 동작',
          ],
          correctAnswer: 1,
          explanation:
            '개발 환경에서는 더 많은 검증과 디버깅 정보가 포함되어 있어 lazy 로딩이 더 느리게 동작할 수 있습니다. 실제 성능 테스트는 프로덕션 빌드에서 수행해야 합니다.',
        },
        {
          id: 19,
          question:
            '다음 중 lazy 로딩 사용 시 청크 크기를 최적화하는 가장 좋은 방법은?',
          options: [
            '가능한 한 작은 크기로 청크 분할',
            '모든 컴포넌트를 하나의 큰 청크로 유지',
            '관련 기능을 논리적으로 그룹화하여 적절한 크기의 청크로 분할',
            '청크 크기를 고려하지 않음',
          ],
          correctAnswer: 2,
          explanation:
            '너무 작은 청크는 HTTP 요청 수를 증가시키고, 너무 큰 청크는 초기 로딩 시간을 증가시킵니다. 관련 기능을 논리적으로 그룹화하여 적절한 크기의 청크로 분할하는 것이 가장 효과적입니다.',
        },
        {
          id: 20,
          question:
            'lazy 로딩을 사용하는 컴포넌트의 타입 안정성을 보장하는 가장 좋은 방법은?',
          options: [
            'any 타입 사용',
            '제네릭 타입 사용',
            '인터페이스 정의와 타입 가드 사용',
            '타입 체크 비활성화',
          ],
          correctAnswer: 2,
          explanation:
            'lazy 로딩 컴포넌트의 타입 안정성을 보장하기 위해서는 명확한 인터페이스를 정의하고 필요한 경우 타입 가드를 사용해야 합니다. 이는 런타임 에러를 방지하고 개발 시 타입 지원을 받을 수 있게 해줍니다.',
        },
      ],
    },
  ],
};
