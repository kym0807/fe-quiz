import { Quiz } from '@/types/quiz.type';

export const quiz: Quiz = {
  title: 'React renderToPipeableStream 마스터하기',
  description:
    'Node.js 환경에서의 React 서버 사이드 렌더링 스트림 API에 대한 이해도를 테스트합니다',
  categories: [
    {
      title: '기본 개념',
      description:
        'renderToPipeableStream의 기본적인 개념과 사용법을 테스트합니다',
      questions: [
        {
          id: 1,
          question: 'renderToPipeableStream의 주요 목적은 무엇입니까?',
          options: [
            'React 컴포넌트를 클라이언트에서 렌더링하기 위해',
            'React 컴포넌트 트리를 HTML로 변환하여 Node.js 스트림으로 전송하기 위해',
            '서버와 클라이언트 간의 데이터 동기화를 위해',
            'React 컴포넌트의 성능을 최적화하기 위해',
          ],
          correctAnswer: 1,
          explanation:
            'renderToPipeableStream은 React 컴포넌트 트리를 HTML로 변환하여 Node.js 스트림으로 전송하는 서버 사이드 렌더링 API입니다.',
        },
        {
          id: 2,
          question:
            '다음 중 renderToPipeableStream을 사용해서는 안 되는 환경은?',
          options: [
            'Node.js 서버',
            'Express.js 애플리케이션',
            'Deno 런타임',
            'Nest.js 애플리케이션',
          ],
          correctAnswer: 2,
          explanation:
            'Deno와 같은 Web Streams 환경에서는 renderToReadableStream을 사용해야 합니다.',
        },
        {
          id: 3,
          question:
            'renderToPipeableStream이 반환하는 객체에 포함되지 않는 메서드는?',
          options: ['pipe', 'abort', 'resume', 'pause'],
          correctAnswer: 3,
          explanation:
            'renderToPipeableStream은 pipe와 abort 메서드만을 반환합니다.',
        },
        {
          id: 4,
          question: '다음 중 bootstrapScripts 옵션의 올바른 사용법은?',
          options: [
            "bootstrapScripts: '/main.js'",
            "bootstrapScripts: ['/main.js']",
            "bootstrapScripts: {src: '/main.js'}",
            "bootstrapScripts: './main.js'",
          ],
          correctAnswer: 1,
          explanation:
            'bootstrapScripts는 페이지에 포함될 <script> 태그의 URL 배열을 받습니다.',
        },
        {
          id: 5,
          question:
            'renderToPipeableStream에서 제공하는 콜백 중 초기 셸 렌더링이 완료되었을 때 호출되는 것은?',
          options: ['onReady', 'onComplete', 'onShellReady', 'onInitialReady'],
          correctAnswer: 2,
          explanation:
            'onShellReady는 초기 셸이 렌더링된 직후 호출되며, 이 시점에서 스트리밍을 시작할 수 있습니다.',
        },
      ],
    },

    {
      title: '에러 처리와 성능 최적화',
      description:
        'renderToPipeableStream의 에러 처리와 성능 최적화 관련 지식을 테스트합니다',
      questions: [
        {
          id: 6,
          question:
            '다음 코드에서 didError 변수의 역할은 무엇입니까?\n\nlet didError = false;\nconst { pipe } = renderToPipeableStream(<App />, {\n  onShellReady() {\n    response.statusCode = didError ? 500 : 200;\n    pipe(response);\n  },\n  onError(error) {\n    didError = true;\n    console.error(error);\n  }\n});',
          options: [
            '스트리밍 상태를 추적하기 위해',
            '렌더링 완료 여부를 확인하기 위해',
            '에러 발생 여부에 따라 적절한 HTTP 상태 코드를 설정하기 위해',
            '성능을 측정하기 위해',
          ],
          correctAnswer: 2,
          explanation:
            'didError 변수는 에러 발생 여부를 추적하여 적절한 HTTP 상태 코드(200 또는 500)를 설정하는 데 사용됩니다.',
        },
        {
          id: 7,
          question:
            'Suspense를 사용한 점진적 로딩에서 가장 중요한 콘텐츠를 배치해야 하는 위치는?',
          options: [
            '가장 깊은 Suspense 내부',
            'Suspense 바깥',
            '첫 번째 Suspense 내부',
            '마지막 Suspense 내부',
          ],
          correctAnswer: 1,
          explanation:
            '가장 중요한 UI는 Suspense 바깥에 배치하여 초기 셸에 포함시켜야 즉시 표시될 수 있습니다.',
        },
        {
          id: 8,
          question:
            '크롤러 대응을 위해 onAllReady 콜백을 사용하는 이유는 무엇입니까?',
          options: [
            '크롤러의 성능을 향상시키기 위해',
            'SEO를 개선하기 위해',
            '모든 콘텐츠가 준비된 완전한 HTML을 제공하기 위해',
            '크롤러의 요청을 필터링하기 위해',
          ],
          correctAnswer: 2,
          explanation:
            '크롤러에게는 점진적 로딩 대신 모든 콘텐츠가 준비된 완전한 HTML을 제공하는 것이 좋기 때문에 onAllReady 콜백을 사용합니다.',
        },
        {
          id: 9,
          question:
            'renderToPipeableStream에서 abort() 메서드를 사용하는 주된 목적은?',
          options: [
            '메모리 누수 방지',
            '서버 부하 감소',
            '렌더링 타임아웃 구현',
            '에러 처리',
          ],
          correctAnswer: 2,
          explanation:
            'abort() 메서드는 주로 서버 렌더링이 너무 오래 걸릴 때 타임아웃을 구현하여 남은 렌더링을 클라이언트로 위임하기 위해 사용됩니다.',
        },
        {
          id: 10,
          question: '다음 중 assetMap을 사용하는 가장 적절한 이유는?',
          options: [
            '자산의 캐싱을 관리하기 위해',
            '빌드된 에셋의 해시된 파일명을 관리하기 위해',
            '에셋의 로딩 순서를 제어하기 위해',
            '에셋의 크기를 최적화하기 위해',
          ],
          correctAnswer: 1,
          explanation:
            'assetMap은 빌드 시 생성되는 해시된 파일명을 포함한 에셋 경로를 효율적으로 관리하기 위해 사용됩니다.',
        },
        {
          id: 11,
          question:
            'bootstrapScriptContent 옵션과 bootstrapScripts 옵션의 주요 차이점은?',
          options: [
            '실행 시점의 차이',
            '인라인 스크립트와 외부 스크립트의 차이',
            '성능의 차이',
            '브라우저 지원의 차이',
          ],
          correctAnswer: 1,
          explanation:
            'bootstrapScriptContent는 인라인 <script> 태그에 직접 포함될 내용을 지정하고, bootstrapScripts는 외부 스크립트 파일의 URL을 지정합니다.',
        },
      ],
    },

    {
      title: '고급 개념과 최적화 전략',
      description:
        'renderToPipeableStream의 고급 기능과 최적화 전략에 대한 이해를 테스트합니다',
      questions: [
        {
          id: 12,
          question:
            'bootstrapModules 옵션이 bootstrapScripts와 다른 점은 무엇입니까?',
          options: [
            '로딩 속도가 더 빠르다',
            "ES Modules로 로드되어 type='module'이 자동으로 추가된다",
            '비동기 로딩을 지원한다',
            '더 많은 브라우저를 지원한다',
          ],
          correctAnswer: 1,
          explanation:
            "bootstrapModules는 <script type='module'>으로 포함될 모듈 URL 배열을 지정하며, ES Modules 형태로 로드됩니다.",
        },
        {
          id: 13,
          question:
            '다음 중 커스텀 에러 처리에서 HTTP 상태 코드를 결정할 때 고려해야 할 사항이 아닌 것은?',
          options: [
            '에러의 종류(예: NotFoundError)',
            '에러 발생 시점',
            '클라이언트의 브라우저 종류',
            '에러가 발생한 컴포넌트의 위치',
          ],
          correctAnswer: 2,
          explanation:
            'HTTP 상태 코드는 주로 에러의 종류와 발생 시점을 기반으로 결정되며, 클라이언트의 브라우저 종류는 관련이 없습니다.',
        },
        {
          id: 14,
          question:
            'Suspense를 사용한 점진적 로딩에서 발생할 수 있는 워터폴(Waterfall) 현상을 방지하는 가장 좋은 방법은?',
          options: [
            '모든 데이터를 한 번에 로딩하기',
            'Suspense 경계를 최소화하기',
            '병렬로 데이터를 프리페치하고 적절한 위치에 Suspense 경계 설정하기',
            '모든 컴포넌트를 Suspense로 래핑하기',
          ],
          correctAnswer: 2,
          explanation:
            '워터폴 현상을 방지하기 위해서는 데이터를 병렬로 프리페치하고, 컴포넌트의 중요도와 데이터 의존성을 고려하여 적절한 위치에 Suspense 경계를 설정해야 합니다.',
        },
        {
          id: 15,
          question: 'namespaceURI 옵션을 사용해야 하는 경우는 언제입니까?',
          options: [
            '일반적인 HTML 문서를 렌더링할 때',
            'SVG나 MathML과 같은 특수한 XML 네임스페이스를 사용할 때',
            'React 컴포넌트를 렌더링할 때',
            'JSON 데이터를 렌더링할 때',
          ],
          correctAnswer: 1,
          explanation:
            'namespaceURI는 SVG나 MathML과 같은 특수한 XML 네임스페이스를 사용하는 콘텐츠를 렌더링할 때 필요합니다.',
        },
        {
          id: 16,
          question: 'nonce 옵션이 필요한 상황은 무엇입니까?',
          options: [
            '성능 최적화를 위해',
            'Content-Security-Policy를 사용할 때 스크립트 실행을 허용하기 위해',
            '에러 추적을 위해',
            '캐싱을 제어하기 위해',
          ],
          correctAnswer: 1,
          explanation:
            'nonce 옵션은 Content-Security-Policy가 적용된 환경에서 특정 스크립트의 실행을 허용하기 위해 사용됩니다.',
        },
        {
          id: 17,
          question:
            "서버 사이드 렌더링에서 'hydration mismatch' 경고를 피하기 위한 가장 좋은 방법은?",
          options: [
            '모든 렌더링을 클라이언트에서 처리하기',
            '서버와 클라이언트의 초기 상태를 일치시키기',
            '모든 동적 콘텐츠를 제거하기',
            '경고를 무시하기',
          ],
          correctAnswer: 1,
          explanation:
            'hydration mismatch를 피하기 위해서는 서버와 클라이언트의 초기 상태를 일치시켜야 합니다. 이는 동일한 데이터와 환경 변수를 사용하여 달성할 수 있습니다.',
        },
        {
          id: 18,
          question:
            'onAllReady와 onShellReady의 가장 중요한 차이점은 무엇입니까?',
          options: [
            '실행 순서만 다르다',
            'onAllReady는 모든 콘텐츠가 준비된 후, onShellReady는 초기 셸이 준비되면 호출된다',
            '에러 처리 방식이 다르다',
            '성능에 미치는 영향이 다르다',
          ],
          correctAnswer: 1,
          explanation:
            'onShellReady는 초기 셸이 준비되면 즉시 호출되어 빠른 초기 로딩을 가능하게 하고, onAllReady는 모든 콘텐츠의 렌더링이 완료된 후 호출됩니다.',
        },
      ],
    },
  ],
};
