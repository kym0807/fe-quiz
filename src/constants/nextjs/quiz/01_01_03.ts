import { Quiz } from '@/types/quiz.type';

export const quiz: Quiz = {
  title: 'Next.js 에러 핸들링 퀴즈',
  description:
    'Next.js의 다양한 에러 처리 방법과 에러 바운더리의 활용법을 테스트합니다.',
  categories: [
    {
      title: '에러 처리 기초',
      description:
        'Next.js의 기본적인 에러 처리 개념과 구현 방법을 테스트합니다.',
      questions: [
        {
          id: 1,
          question:
            '다음 중 Next.js의 **error.tsx** 파일에 대한 설명으로 **올바르지 않은 것**은 무엇인가요?',
          options: [
            "'use client' 지시어를 반드시 포함해야 한다",
            'error와 reset 매개변수를 받는 함수 컴포넌트로 구현해야 한다',
            '서버 컴포넌트에서 발생한 에러만 처리할 수 있다',
            '여러 레벨의 디렉토리에 배치하여 세분화된 에러 처리가 가능하다',
          ],
          /**
           * [해설]
           * 옵션별로 간단히 살펴보면:
           * 1) error.tsx는 에러 바운더리이므로 반드시 'use client' 지시어가 필요합니다.
           * 2) error와 reset 매개변수를 받는 함수 컴포넌트 형태여야 합니다.
           * 3) 서버/클라이언트 구분 없이 해당 컴포넌트 트리 내에서 발생한 에러를 모두 처리할 수 있습니다.
           * 4) 특정 폴더(app/dashboard/error.tsx 등)에 배치하여 그 범위 내에서 발생한 에러를 세분화해서 처리할 수 있습니다.
           * 따라서 "서버 컴포넌트에서 발생한 에러만 처리할 수 있다"라는 3번 진술이 틀린 설명입니다.
           */
          correctAnswer: 2,
          explanation:
            'error.tsx는 서버 에러뿐만 아니라 **클라이언트 컴포넌트에서 발생한 에러**도 포착할 수 있습니다. 즉, 컴포넌트 트리 전체의 에러를 처리하는 에러 바운더리이기 때문에 ‘서버 컴포넌트에서 발생한 에러만 처리할 수 있다’는 잘못된 설명입니다.',
        },
        {
          id: 2,
          question:
            '다음 코드가 **global-error.tsx** 파일이라 가정했을 때, 잘못된 부분은 무엇인가요?\n\n```tsx\nexport default function GlobalError({ error, reset }) {\n  return (\n    <div className="error-container">\n      <h2>치명적인 오류가 발생했습니다!</h2>\n      <button onClick={reset}>다시 시도</button>\n    </div>\n  )\n}\n```',
          options: [
            'reset 함수의 타입이 명시되지 않았다',
            'error 객체를 활용하지 않고 있다',
            'html과 body 태그가 누락되었다',
            "'use client' 지시어가 누락되었다",
          ],
          /**
           * [해설]
           * global-error.tsx는 루트 레벨에서 발생하는 에러를 전역으로 처리하며,
           * 반드시 1) 'use client' 지시어를 포함해야 하고,
           * 2) 자체적인 <html>과 <body> 태그를 가져야 합니다(루트 레이아웃을 대체하기 때문).
           * 따라서 가장 치명적인 문제는 "html과 body 태그가 누락되었다"입니다.
           * 또한 'use client' 지시어도 필수이므로 사실상 (3)과 (4) 둘 다 중요한 문제지만,
           * 보통 공식 문서에서는 "전역 에러"가 루트 레이아웃을 대체하기 때문에
           * 반드시 <html><body>를 포함해야 한다는 점을 더 강조합니다.
           *
           * 여기서는 문제 의도에 따라 "가장 핵심적인 누락"을 묻는 것으로 처리했습니다.
           */
          correctAnswer: 2,
          explanation:
            "전역 에러 컴포넌트(global-error.tsx)는 루트 레이아웃을 **대체**하므로 반드시 <html>과 <body> 태그가 포함되어야 합니다. 또한 'use client' 선언도 필수이지만, HTML 태그 누락은 더욱 치명적인 문제이므로 정답은 3번입니다.",
        },
      ],
    },
    {
      title: '실전 에러 처리',
      description:
        '실제 개발 상황에서 마주치는 에러 처리 시나리오를 테스트합니다.',
      questions: [
        {
          id: 3,
          question:
            "서버 액션에서 다음과 같은 에러 처리 코드가 있을 때, **불필요하거나 개선이 필요한 부분**은 무엇인가요?\n\n```tsx\n'use server'\n\nasync function handleSubmit(prevState: any, formData: FormData) {\n  try {\n    const res = await fetch('/api/submit');\n    if (!res.ok) throw new Error('Failed to submit');\n    return { success: true };\n  } catch (e) {\n    throw e;\n  }\n}\n```",
          options: [
            'try-catch 블록이 단순히 에러를 재던지기만 하는 점',
            '에러 메시지가 사용자 친화적이지 않은 점',
            'prevState 타입이 추상적이고 광범위한 점',
            '서버 액션 내부에서 fetch를 사용하는 점 자체가 문제',
          ],
          /**
           * [해설]
           * - 이 코드의 try-catch는 내부에서 어떤 대체 처리나 로깅도 없이 동일하게 throw만 하고 있어 사실상 의미가 없습니다.
           * - 좀 더 사용자 친화적인 에러 메시지를 반환하거나, 상태 관리를 해주거나, 로깅을 하는 식의 처리가 필요합니다.
           * - 서버 액션에서 fetch를 사용하는 것은 문제될 것이 없습니다(정상적인 로직).
           */
          correctAnswer: 0,
          explanation:
            '현재 코드에서는 catch 블록에서 단순히 에러를 다시 throw만 하고 있어, **실질적인 처리(로깅, 사용자 피드백 등)**가 전혀 이뤄지지 않습니다. 이럴 거라면 try-catch 없이 단순히 `await fetch()`에서 실패하면 자동으로 에러가 던져지도록 하는 편이 낫거나, 최소한 catch에서 로깅/에러 변환 같은 유의미한 작업을 수행해야 합니다.',
        },
        {
          id: 4,
          question:
            'Next.js의 에러 처리 **계층 구조**를 고려할 때, 특정 경로(`/dashboard/settings`)에서 발생한 에러를 가장 적절하게 처리하기 위한 방법은 무엇인가요?',
          options: [
            'app/dashboard/settings/error.tsx 하나만 구현한다',
            '모든 상위 경로마다 error.tsx를 전부 구현한다',
            'app/error.tsx와 app/dashboard/settings/error.tsx를 모두 구현한다',
            'global-error.tsx만 사용해 전역적으로 처리한다',
          ],
          /**
           * [해설]
           * 루트 레벨 error.tsx(app/error.tsx)는 전체 애플리케이션의 예외를 포괄적으로 처리하고,
           * 특정 경로 내의 error.tsx(app/dashboard/settings/error.tsx)는 그 하위 범위에서 발생한 에러에 대해
           * 더 구체적인 안내나 처리 로직을 제공할 수 있습니다.
           * 전역 에러가 아닌, 특정 영역만의 특수 처리가 필요하다면 이렇게 **이중 계층**으로 구성하는 것이 좋습니다.
           */
          correctAnswer: 2,
          explanation:
            '루트 레벨 error.tsx(app/error.tsx)는 모든 에러를 커버하지만, /dashboard/settings 전용 error.tsx를 추가하면 해당 경로에서 발생한 에러에 대해 **별도의 처리**(예: 맞춤 메시지, UI)를 할 수 있습니다. 따라서 **둘 다** 구현하여 계층적인 에러 처리를 하는 것이 가장 권장되는 방법입니다.',
        },
      ],
    },
    {
      title: '추가 심화',
      description:
        '에러 바운더리와 에러 로깅, 클라이언트/서버 혼합 시나리오 등을 다룹니다.',
      questions: [
        {
          id: 5,
          question:
            '다음 중 **error.tsx**와 **global-error.tsx**의 차이로 **적절한 설명**은 무엇인가요?',
          options: [
            'error.tsx는 클라이언트 전용, global-error.tsx는 서버 전용이다',
            'error.tsx는 특정 라우트 범위의 에러만 처리하고, global-error.tsx는 전체 애플리케이션 레벨에서 발생하는 치명적인 에러를 처리한다',
            'global-error.tsx는 반드시 Next.js에서 제공하는 미들웨어를 사용해야 한다',
            'error.tsx는 Class 컴포넌트 형태여야 하고, global-error.tsx는 함수 컴포넌트여야 한다',
          ],
          correctAnswer: 1,
          explanation:
            '**error.tsx**는 해당 디렉토리(또는 상위 디렉토리에 중첩된 범위) 안에서 발생한 에러를 처리하고, **global-error.tsx**는 루트 레이아웃을 완전히 대체하기 때문에 전역적으로 발생하는 치명적인 에러를 처리합니다. 따라서 2번이 가장 적절한 설명입니다.',
        },
        {
          id: 6,
          question:
            '다음 중 Next.js에서 **에러 로깅**을 위해 권장되는 방법으로 보기 어려운 것은 무엇인가요?',
          options: [
            'error.tsx의 useEffect에서 console.error로 에러 정보를 출력한다',
            'Sentry 등 SaaS 기반 모니터링 서비스를 연동하여 에러를 보고한다',
            '서버 액션(혹은 API Route) 내에서 발생한 에러를 DB에 저장하거나 로깅 시스템에 전달한다',
            '글로벌 에러의 경우 직접 로깅 로직을 작성하기보다 단순히 UI만 표시하고 넘긴다',
          ],
          correctAnswer: 3,
          explanation:
            '치명적인 에러(글로벌 에러)야말로 가장 중요하게 모니터링해야 합니다. 따라서 **글로벌 에러**를 그냥 UI로만 표시하고 넘기는 것은 적절하지 않습니다. Sentry나 자체 로깅 시스템 등을 통해 반드시 로깅·알림을 설정하는 것이 바람직합니다.',
        },
      ],
    },
  ],
};
