import { Quiz } from '@/types/quiz.type';

export const quiz: Quiz = {
  title: 'Next.js 로딩 UI와 스트리밍 퀴즈',
  description:
    'Next.js의 로딩 상태 처리와 스트리밍 렌더링 개념, 그리고 Suspense의 활용법을 종합적으로 테스트합니다.',
  categories: [
    {
      title: '로딩 UI와 Suspense',
      description:
        'Next.js의 로딩 상태 처리 방식과 Suspense 활용법을 테스트합니다.',
      questions: [
        {
          id: 1,
          question:
            '다음 코드에서 잠재적인 문제점은 무엇인가?\n\n```tsx\n// app/posts/layout.tsx\nexport default function Layout({ children }) {\n  return (\n    <div>\n      <Suspense>\n        <PostList />\n      </Suspense>\n      {children}\n    </div>\n  )\n}\n```',
          options: [
            'Suspense에 fallback prop이 없다',
            'PostList 컴포넌트가 import되지 않았다',
            'children prop의 타입이 명시되지 않았다',
            'layout.tsx에서는 Suspense를 사용할 수 없다',
          ],
          correctAnswer: 0,
          explanation: `
**해설**  
\`Suspense\` 컴포넌트는 로딩 중 표시할 UI를 지정하기 위해 \`fallback\` 프로퍼티가 **반드시** 필요합니다. 현재 예시에서는 \`<Suspense>\`에 \`fallback\`이 없으므로, \`PostList\`가 비동기 데이터를 불러오는 동안 사용자에게 아무런 피드백도 주어지지 않게 됩니다. 이는 사용자 경험(UX)을 저해할 수 있으므로 올바른 예시는 다음과 같이 \`fallback\`을 명시해야 합니다.

\`\`\`tsx
<Suspense fallback={<p>로딩 중...</p>}>
  <PostList />
</Suspense>
\`\`\`
`,
        },
        {
          id: 2,
          question:
            'loading.tsx 파일과 Suspense의 관계에 대한 설명으로 올바른 것은?',
          options: [
            'loading.tsx는 Suspense를 완전히 대체하므로 함께 사용할 수 없다',
            'loading.tsx는 내부적으로 자동으로 Suspense 경계를 생성한다',
            'loading.tsx는 오직 페이지 컴포넌트에만 적용된다',
            'loading.tsx는 Suspense의 fallback으로만 사용될 수 있다',
          ],
          correctAnswer: 1,
          explanation: `
**해설**  
\`loading.tsx\` 파일을 해당 라우트(폴더)에 배치하면, Next.js가 **자동으로** \`page.tsx\` 및 그 하위 컴포넌트들을 \`<Suspense>\` 경계로 감쌉니다. 이는 라우트 세그먼트별 로딩 UI를 간단히 구성하도록 돕는 Next.js만의 규칙입니다. 별도로 \`<Suspense fallback={...\}>\`를 작성하지 않아도, 네비게이션 시 \`loading.tsx\`가 **자동**으로 표시됩니다.
`,
        },
      ],
    },
    {
      title: '스트리밍과 성능 최적화',
      description: '스트리밍 SSR의 개념과 성능 최적화 전략을 테스트합니다.',
      questions: [
        {
          id: 3,
          question: '다음 중 스트리밍 SSR의 **장점이 아닌 것**은 무엇인가요?',
          options: [
            '데이터 의존성이 없는 UI를 먼저 표시할 수 있다',
            '모든 컴포넌트의 데이터를 동시에(병렬로) 로드할 수 있다',
            '서버에서 전체 페이지 렌더링이 완전히 끝날 때까지 기다리지 않아도 된다',
            '검색 엔진 최적화(SEO) 점수가 전통적인 SSR보다 더 높아진다',
          ],
          correctAnswer: 3,
          explanation: `
**해설**  
스트리밍 SSR은 **사용자 경험(UX)** 개선에 탁월합니다. 중요한 UI를 먼저 보여주고, 나머지를 뒤늦게 채워넣을 수 있기 때문입니다. 하지만 SEO 측면에서는 전통적인 SSR과 크게 다르지 않습니다. 즉, 검색 엔진이 보는 최종 HTML 결과물이 동일하게 제공되므로, “SEO 점수가 전통적인 SSR보다 높아진다”는 과장된 표현입니다.
`,
        },
        {
          id: 4,
          question:
            'Next.js 애플리케이션에서 여러 개의 비동기 컴포넌트를 **효율적으로 로드**하기 위한 가장 좋은 방법은 무엇인가요?',
          options: [
            '모든 비동기 컴포넌트를 하나의 Suspense로 감싸기',
            '각 컴포넌트를 개별 Suspense로 감싸고 우선순위를 구분하기',
            'loading.tsx 파일만 사용하고 Suspense는 사용하지 않는다',
            '모든 데이터를 페이지 레벨에서 한 번에 전부 로드하기',
          ],
          correctAnswer: 1,
          explanation: `
**해설**  
비동기로 동작하는 여러 컴포넌트를 한꺼번에 \`Suspense\`로 감싸면, 하나라도 지연되면 전체가 늦어질 수 있습니다. **개별 \`Suspense\` 경계를 설정**하면 각 컴포넌트가 준비되는 대로 점진적으로 UI를 표시할 수 있어, 사용자에게 더 빠른 피드백을 줄 수 있습니다. 또한 우선순위가 높은 컴포넌트를 먼저 보여줄 수 있어 **성능 최적화**에 유리합니다.
`,
        },
      ],
    },
    // 필요하다면 다른 카테고리나 추가 질문을 더 넣을 수 있습니다.
  ],
};
