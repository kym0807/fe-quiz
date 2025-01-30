import { Quiz } from '@/types/quiz.type';

export const quiz: Quiz = {
  title: 'Next.js 라우팅과 네비게이션 퀴즈',
  description:
    'Next.js의 파일 시스템 기반 라우팅과 네비게이션의 핵심 개념을 종합적으로 테스트합니다.',
  categories: [
    {
      title: '라우팅 기초',
      description:
        'Next.js의 파일 시스템 기반 라우팅의 기본 개념과 구조를 테스트합니다.',
      questions: [
        {
          id: 1,
          question:
            '다음 중 Next.js의 app 디렉토리에서 **루트 레이아웃(layout.tsx)** 에 대한 설명으로 올바르지 않은 것은?',
          options: [
            'app 디렉토리의 루트에 있는 layout.tsx는 필수적으로 포함되어야 한다',
            'layout.tsx는 html과 body 태그를 반드시 포함해야 한다',
            'layout.tsx는 페이지 이동 시 상태를 유지하고 리렌더링되지 않는다',
            '하위 디렉토리의 layout.tsx는 상위 layout.tsx를 완전히 덮어쓴다',
          ],
          correctAnswer: 3,
          explanation:
            '하위 디렉토리의 layout.tsx는 상위 layout.tsx를 “완전히” 덮어쓰는 것이 아니라 **중첩**되어 렌더링됩니다. 상위 레이아웃이 먼저 렌더링되고 그 내부에 하위 레이아웃이 들어가는 구조입니다.',
        },
        {
          id: 2,
          question:
            '다음 중 Dynamic Routes(예: [slug])를 사용할 때 **올바른 설명**은 무엇인가요?',
          options: [
            '동적 라우트는 빌드 시점에 모든 가능한 경로를 정적으로 생성해야만 한다',
            '동적 세그먼트는 URL의 중간에만 위치할 수 있다',
            '하나의 디렉토리 내에서 여러 개의 동적 세그먼트([slug1]/[slug2])를 조합할 수 있다',
            '동적 라우트는 서버 컴포넌트에서만 사용할 수 있다',
          ],
          correctAnswer: 2,
          explanation:
            'Dynamic Routes는 URL 어디에나 적용할 수 있으며, **여러 동적 세그먼트를 조합**하여 복잡한 라우트를 구현할 수도 있습니다. 예: /blog/[category]/[slug] 등.',
        },
      ],
    },
    {
      title: '네비게이션과 성능',
      description:
        'Next.js의 다양한 네비게이션 방법과 성능 최적화 전략을 테스트합니다.',
      questions: [
        {
          id: 3,
          question:
            "다음 코드에서 발생할 수 있는 잠재적 문제점은 무엇인가요?\n\n```tsx\nexport default function Layout({ children }) {\n  const router = useRouter()\n  \n  useEffect(() => {\n    router.push('/dashboard')\n  }, [])\n  \n  return <div>{children}</div>\n}\n```",
          options: [
            "useRouter는 'use client' 지시어 없이는 동작하지 않는다",
            '레이아웃 컴포넌트에서 리다이렉션을 사용하면 무한 리다이렉션이 발생할 수 있다',
            'useEffect는 서버 컴포넌트에서 사용할 수 없다',
            'router.push는 비동기 함수이므로 await를 반드시 사용해야 한다',
          ],
          correctAnswer: 0,
          explanation:
            "위 코드는 **두 가지** 문제가 있습니다.\n\n1) `useRouter`를 사용하려면 해당 파일 상단에 `'use client'` 지시어가 있어야 합니다. 서버 컴포넌트에서 `useRouter`를 사용할 수 없기 때문입니다.\n2) 레이아웃(특히 루트 레이아웃)에서 무조건적인 `router.push`를 호출하면, 모든 페이지 로드 시 리다이렉트가 발생하여 무한 루프에 빠질 수 있습니다.\n\n정답으로는 가장 직접적인 문제가 되는 `'use client' 지시어가 없음`을 지적한 **1번**이 맞습니다.",
        },
        {
          id: 4,
          question:
            'Next.js의 **프리페칭(Prefetching)** 에 대한 설명 중 **올바르지 않은 것**은 무엇인가요?',
          options: [
            'Link 컴포넌트는 뷰포트에 들어오는 링크를 자동으로 프리페치한다',
            '프리페칭은 개발 환경에서도 기본적으로 활성화되어 있다',
            'router.prefetch()를 사용하여 프로그래밍 방식으로 프리페치할 수 있다',
            '프리페치된 라우트 세그먼트는 라우터 캐시에 저장된다',
          ],
          correctAnswer: 1,
          explanation:
            '프리페칭은 **프로덕션 환경에서만** 기본적으로 활성화되어 있고, 개발 환경(dev)에서는 비활성화됩니다. 이는 개발 시 불필요한 트래픽을 줄이고, 디버깅 환경을 더 빠르게 하기 위한 설계입니다.',
        },
      ],
    },
    {
      title: '고급 라우팅',
      description:
        '중첩 레이아웃, Route Groups 등의 고급 기능에 대한 이해도를 테스트합니다.',
      questions: [
        {
          id: 5,
          question:
            '중첩 레이아웃(Nested Layout)에 대한 **올바른 설명**은 무엇인가요?',
          options: [
            '하위 레이아웃은 상위 레이아웃을 완전히 대체한다',
            '하위 레이아웃은 상위 레이아웃과 별도로 렌더링되며, UI가 중복될 수 있다',
            '중첩 레이아웃은 상위 레이아웃 안에서 렌더링되어, 상위 레이아웃의 일부 UI를 재사용한다',
            '중첩 레이아웃은 여러 루트 레이아웃을 동시에 생성한다',
          ],
          correctAnswer: 2,
          explanation:
            'Next.js의 중첩 레이아웃은 상위 레이아웃을 먼저 렌더링하고, 그 **내부**에 하위 레이아웃을 배치합니다. 덕분에 상위 레이아웃에서 정의한 UI(예: 헤더, 사이드바 등)를 재사용할 수 있습니다.',
        },
        {
          id: 6,
          question:
            '다음 중 **Route Groups** (예: `(admin)`)에 대한 설명으로 올바른 것은?',
          options: [
            'Route Groups는 URL 경로에 그룹명을 그대로 노출한다',
            'Route Groups를 사용하면 특정 디렉토리를 라우트에서 완전히 제외한다',
            'Route Groups는 URL 구조에는 영향을 주지 않지만, 내부적으로 디렉토리를 그룹화하여 레이아웃 혹은 미들웨어를 적용할 수 있다',
            'Route Groups는 반드시 “admin” 키워드를 사용해야 한다',
          ],
          correctAnswer: 2,
          explanation:
            'Route Groups는 URL 경로에 그룹 디렉토리 이름을 노출하지 않고, **내부적으로** 폴더 구조를 나누어 레이아웃 공유, 미들웨어 적용 범위 지정 등 고급 기능을 쉽게 적용할 수 있게 해줍니다.',
        },
      ],
    },
  ],
};
