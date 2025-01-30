import { Quiz } from '@/types/quiz.type';

export const moduleQuiz: Quiz = {
  title: 'TypeScript 모듈 시스템 마스터하기',
  description:
    'TypeScript의 모듈 시스템, ES 모듈, 그리고 모듈 해석에 대한 이해를 테스트합니다.',
  categories: [
    {
      title: '모듈 기본 개념',
      description: 'TypeScript 모듈의 기본 개념과 정의를 테스트합니다.',
      questions: [
        {
          id: 1,
          question: 'TypeScript에서 파일을 모듈로 인식하는 조건은 무엇인가요?',
          options: [
            '파일이 .ts 확장자를 가질 때',
            '파일의 최상위 레벨에 import나 export가 있을 때',
            'tsconfig.json에 module 설정이 있을 때',
            '파일에 class나 interface가 선언되어 있을 때',
          ],
          correctAnswer: 1,
          explanation:
            'TypeScript에서는 파일의 최상위 레벨에 import나 export 선언이 있는 경우에만 해당 파일을 모듈로 간주합니다. 그렇지 않은 파일은 전역 스코프의 스크립트로 취급됩니다.',
        },
        {
          id: 2,
          question: '비모듈 파일을 모듈로 만들기 위한 가장 간단한 방법은?',
          options: [
            "import {} from './some-file';",
            'export {};',
            'declare module {};',
            "import * as module from './some-file';",
          ],
          correctAnswer: 1,
          explanation:
            '빈 export 문(export {})을 사용하면 파일을 모듈로 변환할 수 있습니다. 이는 파일의 스코프를 전역에서 모듈 스코프로 변경하는 가장 간단한 방법입니다.',
        },
      ],
    },
    {
      title: 'ES 모듈과 CommonJS',
      description: '다양한 모듈 시스템의 문법과 상호운용성을 테스트합니다.',
      questions: [
        {
          id: 3,
          question: 'ES 모듈의 import type 구문에 대한 설명으로 올바른 것은?',
          options: [
            '런타임에 타입 정보를 가져온다',
            '컴파일 시에만 사용되고 JavaScript 출력에는 포함되지 않는다',
            'CommonJS 모듈에서는 사용할 수 없다',
            'interface만 가져올 수 있다',
          ],
          correctAnswer: 1,
          explanation:
            'import type은 타입 정보만을 가져오며, 컴파일 시에만 사용됩니다. 이는 최종 JavaScript 출력에서 완전히 제거되어 번들 크기를 줄이는 데 도움이 됩니다.',
        },
        {
          id: 4,
          question:
            'CommonJS와 ES 모듈 간의 상호운용성을 개선하기 위한 TypeScript 컴파일러 옵션은?',
          options: [
            'moduleResolution',
            'allowJs',
            'esModuleInterop',
            'allowSyntheticDefaultImports',
          ],
          correctAnswer: 2,
          explanation:
            'esModuleInterop 옵션은 CommonJS 모듈을 ES 모듈처럼 더 자연스럽게 가져올 수 있게 해주며, 특히 default import 문법 사용을 가능하게 합니다.',
        },
      ],
    },
    {
      title: '모듈 해석과 설정',
      description: '모듈 해석 전략과 설정 옵션을 테스트합니다.',
      questions: [
        {
          id: 5,
          question: 'tsconfig.json의 paths 설정의 주요 용도는 무엇인가요?',
          options: [
            '모듈의 출력 경로 지정',
            '모듈 파일의 확장자 설정',
            '경로 별칭(path alias) 설정',
            '외부 모듈의 위치 지정',
          ],
          correctAnswer: 2,
          explanation:
            'paths 설정은 모듈 import 시 사용할 수 있는 경로 별칭을 정의합니다. 이를 통해 긴 상대 경로 대신 간단한 별칭을 사용할 수 있습니다.',
        },
        {
          id: 6,
          question:
            'TypeScript 네임스페이스(namespace)의 현대적 사용에 대한 설명으로 가장 적절한 것은?',
          options: [
            '모든 TypeScript 프로젝트에서 기본적으로 사용해야 한다',
            'ES 모듈을 대체하는 새로운 표준이다',
            '복잡한 정의 파일(.d.ts) 생성에 주로 사용된다',
            '비동기 모듈 로딩에 사용된다',
          ],
          correctAnswer: 2,
          explanation:
            '네임스페이스는 과거 TypeScript의 모듈 시스템이었지만, 현재는 ES 모듈이 표준입니다. 네임스페이스는 주로 복잡한 정의 파일을 구성할 때 사용됩니다.',
        },
      ],
    },
  ],
};
