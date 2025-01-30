import { Quiz } from '@/types/quiz.type';

export const quiz: Quiz = {
  title: 'JavaScript 모듈 시스템 퀴즈',
  description: 'JavaScript 모듈의 기본 개념부터 고급 기능까지 테스트합니다',
  categories: [
    {
      title: '모듈의 기초와 역사',
      description: 'JavaScript 모듈의 역사와 기본 개념 이해',
      questions: [
        {
          id: 1,
          question:
            '다음 중 JavaScript 모듈 시스템이 등장하게 된 주요 배경이 아닌 것은?',
          options: [
            '브라우저에서 실행되는 복잡한 애플리케이션의 등장',
            'Node.js와 같은 새로운 실행 환경의 출현',
            '브라우저의 성능 향상 필요성',
            '코드를 필요에 따라 불러올 수 있는 시스템의 필요성',
          ],
          correctAnswer: 2,
          explanation:
            '모듈 시스템은 주로 코드 구조화와 관리를 위해 등장했으며, 브라우저 성능 향상은 주요 배경이 아닙니다.',
        },
        {
          id: 2,
          question: 'JavaScript 모듈의 strict mode 관련 설명으로 올바른 것은?',
          options: [
            "'use strict' 선언을 해야 strict mode가 적용된다",
            '모듈은 자동으로 strict mode가 적용된다',
            '모듈에서는 strict mode를 해제할 수 있다',
            'strict mode는 선택적으로 적용할 수 있다',
          ],
          correctAnswer: 1,
          explanation:
            '모듈은 자동으로 strict mode가 적용되며, 이는 변경할 수 없습니다.',
        },
        {
          id: 3,
          question: '다음 중 모듈의 스코프에 대한 설명으로 올바른 것은?',
          options: [
            '모듈의 최상위 스코프는 전역 스코프다',
            '모듈의 변수는 자동으로 window 객체에 바인딩된다',
            '모듈의 최상위 스코프는 모듈 스코프이며 전역과 분리되어 있다',
            '모듈 간에는 스코프가 공유된다',
          ],
          correctAnswer: 2,
          explanation:
            '모듈의 최상위 스코프는 전역이 아닌 모듈 스코프이며, 다른 모듈과 분리되어 있습니다.',
        },
        {
          id: 4,
          question: 'import 문의 호이스팅에 대한 설명으로 올바른 것은?',
          options: [
            'import 문은 호이스팅되지 않는다',
            'import 문은 호이스팅되지만 파일 상단에 작성하는 것이 권장된다',
            'import 문은 함수 내부에서만 호이스팅된다',
            'import 문의 호이스팅은 strict mode에서만 동작한다',
          ],
          correctAnswer: 1,
          explanation:
            'import 선언은 호이스팅되지만, 코드의 가독성을 위해 파일 상단에 작성하는 것이 좋은 관행입니다.',
        },
        {
          id: 5,
          question:
            '로컬에서 모듈을 테스트할 때 발생하는 CORS 오류를 해결하는 올바른 방법은?',
          options: [
            '브라우저의 CORS 설정을 비활성화',
            '파일을 직접 더블클릭하여 실행',
            '로컬 서버를 통해 파일 제공',
            '모듈 시스템 사용 안 함',
          ],
          correctAnswer: 2,
          explanation:
            'CORS 정책으로 인해 로컬 파일을 직접 실행하면 오류가 발생하므로, npx serve나 python -m http.server 등의 로컬 서버를 통해 테스트해야 합니다.',
        },
      ],
    },

    {
      title: '모듈 내보내기와 가져오기',
      description: '다양한 모듈 내보내기와 가져오기 방식에 대한 이해',
      questions: [
        {
          id: 6,
          question:
            '다음 모듈 코드의 올바른 가져오기(import) 방법은?\njavascript\nexport const name = "square";\nexport function draw(ctx) { /* ... */ }\nexport { reportArea, reportPerimeter };',
          options: [
            'import { name, draw, reportArea, reportPerimeter }',
            "import * from './square.js'",
            "import name, draw, reportArea, reportPerimeter from './square.js'",
            "import Square = require('./square.js')",
          ],
          correctAnswer: 0,
          explanation:
            'named export의 경우 중괄호({})를 사용하여 개별적으로 가져와야 합니다.',
        },
        {
          id: 7,
          question: '다음 중 기본 내보내기(default export)의 특징이 아닌 것은?',
          options: [
            '모듈당 하나만 가질 수 있다',
            'import 시 중괄호 없이 가져올 수 있다',
            '여러 개의 기본 내보내기를 가질 수 있다',
            '임의의 이름으로 가져올 수 있다',
          ],
          correctAnswer: 2,
          explanation:
            '기본 내보내기는 모듈당 하나만 가질 수 있습니다. 이는 모듈의 주요 기능을 강조하기 위한 것입니다.',
        },
        {
          id: 8,
          question: '모듈에서 이름 변경(renaming)을 사용하는 주된 이유는?',
          options: [
            '코드 실행 속도 향상',
            '이름 충돌 방지',
            '메모리 사용량 최적화',
            '파일 크기 감소',
          ],
          correctAnswer: 1,
          explanation:
            '이름 변경은 주로 서로 다른 모듈에서 가져온 기능들 간의 이름 충돌을 방지하기 위해 사용됩니다.',
        },
        {
          id: 9,
          question: '다음 중 동적 import에 대한 설명으로 올바르지 않은 것은?',
          options: [
            'Promise를 반환한다',
            '조건부로 모듈을 불러올 수 있다',
            '성능 최적화에 도움이 된다',
            '호이스팅이 적용된다',
          ],
          correctAnswer: 3,
          explanation:
            '동적 import는 런타임에 실행되므로 호이스팅이 적용되지 않습니다. 이는 정적 import와의 주요 차이점입니다.',
        },
        {
          id: 10,
          question: '모듈 응집화(Aggregating)의 주요 이점은?',
          options: [
            '코드 실행 속도 향상',
            '메모리 사용량 감소',
            '모듈 구조 단순화',
            '파일 크기 최적화',
          ],
          correctAnswer: 2,
          explanation:
            '모듈 응집화는 여러 하위 모듈을 하나의 진입점으로 묶어 관리함으로써 프로젝트의 모듈 구조를 단순화하는데 도움을 줍니다.',
        },
      ],
    },

    {
      title: '고급 모듈 기능과 최적화',
      description: '모듈의 고급 기능과 성능 최적화 방법에 대한 이해',
      questions: [
        {
          id: 11,
          question: 'Top-level await의 특징으로 올바르지 않은 것은?',
          options: [
            '모듈의 최상위 레벨에서 사용 가능하다',
            '비동기 데이터를 더 편리하게 처리할 수 있다',
            '일반 스크립트에서도 사용할 수 있다',
            'import하는 모듈에서 자동으로 처리된다',
          ],
          correctAnswer: 2,
          explanation:
            'Top-level await는 모듈에서만 사용 가능하며, 일반 스크립트의 최상위 레벨에서는 사용할 수 없습니다.',
        },
        {
          id: 12,
          question: 'Import Maps의 주요 기능이 아닌 것은?',
          options: [
            '베어 모듈 이름 사용 가능',
            '모듈 경로 리매핑',
            '자동 코드 최적화',
            '버전 관리 용이',
          ],
          correctAnswer: 2,
          explanation:
            'Import Maps는 모듈 경로와 이름을 관리하는 도구이며, 자동 코드 최적화 기능은 제공하지 않습니다.',
        },
        {
          id: 13,
          question: '비JavaScript 리소스를 모듈로 불러올 때의 올바른 문법은?',
          options: [
            "import colors from './colors.json'",
            "import styles from './styles.css'",
            "import colors from './colors.json' with { type: 'json' }",
            "require('./colors.json')",
          ],
          correctAnswer: 2,
          explanation:
            "비JavaScript 리소스를 모듈로 불러올 때는 'with { type: ... }' 구문을 사용하여 리소스 타입을 명시해야 합니다.",
        },
        {
          id: 14,
          question: 'modulepreload의 주요 목적은?',
          options: [
            '모듈 캐싱 비활성화',
            '모듈 실행 순서 제어',
            '모듈을 미리 다운로드하고 파싱하여 지연 감소',
            '모듈 간 의존성 분석',
          ],
          correctAnswer: 2,
          explanation:
            'modulepreload는 브라우저가 모듈을 미리 다운로드하고 파싱할 수 있게 하여 실제 사용 시점에서의 지연을 줄이는 것이 목적입니다.',
        },
        {
          id: 15,
          question: '.mjs 확장자 사용 시 주의해야 할 점은?',
          options: [
            '항상 strict mode로 실행된다',
            '서버에서 올바른 MIME 타입을 제공해야 한다',
            'import 문을 사용할 수 없다',
            '호이스팅이 적용되지 않는다',
          ],
          correctAnswer: 1,
          explanation:
            '.mjs 파일을 사용할 때는 서버가 올바른 MIME 타입(text/javascript)을 제공해야 하며, 이를 위해 서버 설정이 필요할 수 있습니다.',
        },
      ],
    },
    {
      title: '번들러와 개발 환경',
      description: '모듈 번들러와 개발 환경 설정에 대한 이해',
      questions: [
        {
          id: 16,
          question:
            '네이티브 모듈 지원이 있는데도 번들러가 여전히 필요한 이유가 아닌 것은?',
          options: [
            '코드 분할(Code Splitting)을 위해',
            '트리 쉐이킹(Tree Shaking)을 위해',
            '실시간 모듈 업데이트를 위해',
            '모듈 문법 자동 생성을 위해',
          ],
          correctAnswer: 3,
          explanation:
            '번들러는 코드 분할, 트리 쉐이킹, 자산 최적화 등을 제공하지만, 모듈 문법을 자동으로 생성하지는 않습니다.',
        },
        {
          id: 17,
          question:
            '다음 중 모듈 번들러의 트리 쉐이킹(Tree Shaking)의 주요 목적은?',
          options: [
            '모듈 로딩 속도 향상',
            '사용하지 않는 코드 제거',
            '모듈 의존성 관리',
            '코드 압축',
          ],
          correctAnswer: 1,
          explanation:
            '트리 쉐이킹은 사용하지 않는 코드를 제거하여 번들 크기를 최적화하는 것이 주요 목적입니다.',
        },
      ],
    },
  ],
};
