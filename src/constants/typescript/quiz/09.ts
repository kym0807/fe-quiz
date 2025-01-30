import { Quiz } from '@/types/quiz.type';

export const tsConfigQuiz: Quiz = {
  title: 'TypeScript 구성 퀴즈 - Part 1',
  description: 'TypeScript의 주요 설정과 개념들에 대한 이해를 테스트합니다.',
  categories: [
    {
      title: '기본 구성 설정',
      description: 'TypeScript의 기본적인 구성 옵션들에 대한 문제입니다.',
      questions: [
        {
          id: 1,
          question: 'files 옵션과 include 옵션의 주요 차이점은 무엇인가요?',
          options: [
            'files는 glob 패턴을 지원하고 include는 지원하지 않는다',
            'include는 glob 패턴을 지원하고 files는 지원하지 않는다',
            'files는 상대 경로만 사용할 수 있고 include는 절대 경로만 사용할 수 있다',
            'files와 include는 완전히 동일한 기능을 한다',
          ],
          correctAnswer: 1,
          explanation:
            'files는 명시적인 파일 목록만 지정할 수 있고 glob 패턴을 지원하지 않습니다. 반면 include는 glob 패턴을 사용하여 여러 파일을 한 번에 지정할 수 있습니다.',
        },
        {
          id: 2,
          question: 'extends 옵션을 사용할 때 올바른 설명은 무엇인가요?',
          options: [
            '기본 파일의 설정이 현재 파일의 설정을 완전히 덮어쓴다',
            '현재 파일의 설정이 기본 파일의 설정을 완전히 덮어쓴다',
            'files, include, exclude는 상속되지만 references는 상속되지 않는다',
            'files, include, exclude는 기본 설정을 덮어쓰며, references는 상속되지 않는다',
          ],
          correctAnswer: 3,
          explanation:
            'extends 사용 시 files, include, exclude는 기본 설정을 덮어쓰고, references는 상속되지 않습니다. 다른 컴파일러 옵션들은 기본 파일에서 로드된 후 현재 파일의 설정으로 덮어쓰기됩니다.',
        },
        {
          id: 3,
          question: 'exclude 옵션에 대한 설명으로 올바른 것은?',
          options: [
            'exclude된 파일은 어떤 경우에도 프로젝트에 포함되지 않는다',
            'exclude는 include의 결과에서만 파일을 제외하며, 다른 방식으로 참조된 파일은 여전히 포함될 수 있다',
            'exclude는 모든 컴파일을 중단시킨다',
            'exclude는 파일 시스템의 모든 파일에 적용된다',
          ],
          correctAnswer: 1,
          explanation:
            'exclude는 include의 결과에서만 파일을 제외합니다. import 구문으로 참조되거나, types에 포함되거나, /// <reference 지시자로 참조되거나, files 목록에 지정된 파일은 exclude되어도 프로젝트에 포함될 수 있습니다.',
        },
        {
          id: 4,
          question: 'strictNullChecks 옵션을 활성화했을 때 발생하는 변화는?',
          options: [
            '모든 타입에 자동으로 null과 undefined가 포함된다',
            'null과 undefined는 any 타입으로 처리된다',
            'null과 undefined를 명시적으로 처리해야 하며, 모든 타입에 할당할 수 없다',
            'null과 undefined는 컴파일 에러를 발생시킨다',
          ],
          correctAnswer: 2,
          explanation:
            'strictNullChecks가 활성화되면 null과 undefined를 별도의 타입으로 처리하며, 다른 타입에 할당하기 위해서는 명시적으로 처리해야 합니다. 이는 더 안전한 코드 작성을 가능하게 합니다.',
        },
        {
          id: 5,
          question: 'noImplicitAny 옵션의 주요 목적은 무엇인가요?',
          options: [
            '모든 변수를 any 타입으로 지정한다',
            'any 타입의 사용을 완전히 금지한다',
            '타입을 추론할 수 없을 때 암묵적으로 any 타입이 되는 것을 방지한다',
            'any 타입을 never 타입으로 변환한다',
          ],
          correctAnswer: 2,
          explanation:
            'noImplicitAny는 타입스크립트가 타입을 추론할 수 없을 때 암묵적으로 any 타입이 되는 것을 방지합니다. 이 옵션이 활성화되면 명시적인 타입 선언이 필요합니다.',
        },
      ],
    },
    {
      title: '모듈과 경로 설정',
      description: '모듈 시스템과 경로 관련 설정에 대한 문제입니다.',
      questions: [
        {
          id: 6,
          question: 'baseUrl 설정의 주요 목적은 무엇인가요?',
          options: [
            '프로젝트의 루트 디렉토리를 변경한다',
            '모듈 이름을 해석할 때의 기준 디렉토리를 설정한다',
            '출력 파일의 기본 위치를 지정한다',
            '소스 파일의 위치를 제한한다',
          ],
          correctAnswer: 1,
          explanation:
            'baseUrl은 모듈 이름을 해석할 때 시작점이 되는 기본 디렉토리를 설정합니다. 이를 통해 절대 경로 방식의 모듈 임포트가 가능해집니다.',
        },
        {
          id: 7,
          question: 'paths 옵션에 대한 올바른 설명은?',
          options: [
            '실제 파일 시스템의 경로를 변경한다',
            '타입스크립트의 타입 체킹에만 영향을 주며, 번들러 설정도 필요하다',
            '모든 모듈 임포트를 자동으로 처리한다',
            'node_modules의 위치를 변경한다',
          ],
          correctAnswer: 1,
          explanation:
            'paths는 TypeScript의 타입 체킹에만 영향을 주는 경로 별칭 설정입니다. 실제 번들링을 위해서는 Webpack이나 Vite 등의 번들러에도 동일한 별칭을 설정해야 합니다.',
        },
        {
          id: 8,
          question: 'module 설정에서 권장되는 값은 무엇인가요?',
          options: [
            "항상 'commonjs'를 사용해야 한다",
            "최신 Node.js 프로젝트는 'nodenext', 번들러 사용 시 'esnext'가 권장된다",
            "브라우저 환경에서는 'amd'만 사용해야 한다",
            "'system'이 가장 안전한 선택이다",
          ],
          correctAnswer: 1,
          explanation:
            "현대의 Node.js 프로젝트에서는 'nodenext'를, 번들러를 사용하는 프로젝트에서는 'esnext'를 사용하는 것이 권장됩니다. 이는 최신 JavaScript 기능을 최대한 활용할 수 있게 해줍니다.",
        },
      ],
    },
    {
      title: '컴파일러 출력 설정',
      description: 'TypeScript 컴파일러의 출력 관련 설정들에 대한 문제입니다.',
      questions: [
        {
          id: 1,
          question: 'declaration 옵션을 활성화하면 어떤 일이 발생하나요?',
          options: [
            'JavaScript 파일만 생성된다',
            '소스맵 파일이 생성된다',
            '.d.ts 타입 선언 파일이 생성된다',
            '실행 가능한 바이너리가 생성된다',
          ],
          correctAnswer: 2,
          explanation:
            'declaration 옵션을 활성화하면 TypeScript/JavaScript 파일에 대한 .d.ts 타입 선언 파일이 생성됩니다. 이는 타입 정보를 다른 프로젝트에서 사용할 수 있게 해줍니다.',
        },
        {
          id: 2,
          question: 'sourceMap 옵션의 주요 목적은 무엇인가요?',
          options: [
            '코드 실행 속도를 향상시킨다',
            '파일 크기를 줄인다',
            '디버깅 시 원본 TypeScript 코드를 참조할 수 있게 한다',
            '자동으로 코드를 최적화한다',
          ],
          correctAnswer: 2,
          explanation:
            'sourceMap은 컴파일된 JavaScript 코드와 원본 TypeScript 코드를 매핑하는 .map 파일을 생성합니다. 이를 통해 브라우저 개발자 도구에서 TypeScript 코드를 직접 디버깅할 수 있습니다.',
        },
      ],
    },
    {
      title: '타입 체크 및 최적화',
      description: '타입 체크와 성능 최적화 관련 설정들에 대한 문제입니다.',
      questions: [
        {
          id: 3,
          question: 'incremental 컴파일을 사용할 때의 장점은 무엇인가요?',
          options: [
            '모든 파일을 항상 새로 컴파일한다',
            '이전 컴파일 정보를 활용하여 빌드 시간을 단축한다',
            '코드의 크기를 줄여준다',
            '타입 체크를 건너뛴다',
          ],
          correctAnswer: 1,
          explanation:
            'incremental 컴파일은 이전 컴파일의 정보를 .tsbuildinfo 파일에 저장하고, 변경된 파일만 다시 컴파일함으로써 빌드 시간을 크게 단축시킬 수 있습니다.',
        },
        {
          id: 4,
          question: 'composite 프로젝트 설정의 필수 조건이 아닌 것은?',
          options: [
            'rootDir 설정이 필요하다',
            'declaration이 true여야 한다',
            '모든 구현 파일이 include 패턴에 포함되어야 한다',
            'sourceMap이 true여야 한다',
          ],
          correctAnswer: 3,
          explanation:
            'composite 프로젝트에서는 rootDir 설정이 필요하고, declaration이 자동으로 true로 설정되며, 모든 구현 파일이 include 패턴에 포함되어야 합니다. 하지만 sourceMap은 필수 조건이 아닙니다.',
        },
        {
          id: 5,
          question: 'experimentalDecorators 옵션은 어떤 기능을 제공하나요?',
          options: [
            '실험적인 타입 체크 기능을 활성화한다',
            '데코레이터 문법 지원을 활성화한다',
            '새로운 JavaScript 문법을 미리 사용할 수 있게 한다',
            '자동 코드 최적화를 수행한다',
          ],
          correctAnswer: 1,
          explanation:
            'experimentalDecorators 옵션은 TC39 표준화 과정 이전 버전의 데코레이터 문법을 사용할 수 있게 해주는 실험적 기능입니다.',
        },
      ],
    },
    {
      title: 'JSX와 React 설정',
      description: 'JSX 및 React 관련 TypeScript 설정에 대한 문제입니다.',
      questions: [
        {
          id: 6,
          question: 'React 17 이상에서 권장되는 JSX 변환 모드는 무엇인가요?',
          options: [
            'react',
            'preserve',
            'react-jsx 또는 react-jsxdev',
            'react-native',
          ],
          correctAnswer: 2,
          explanation:
            'React 17 이상에서는 react-jsx(프로덕션용) 또는 react-jsxdev(개발용) 모드를 사용하는 것이 권장됩니다. 이는 더 효율적인 변환과 더 나은 개발 경험을 제공합니다.',
        },
        {
          id: 7,
          question: 'jsxFactory 설정은 어떤 경우에 필요한가요?',
          options: [
            '모든 React 프로젝트에서 필수적이다',
            'Preact 등 다른 JSX 호환 라이브러리를 사용할 때 필요하다',
            'JSX를 비활성화하기 위해 사용한다',
            '타입스크립트 버전을 지정하는데 사용한다',
          ],
          correctAnswer: 1,
          explanation:
            'jsxFactory는 Preact와 같은 다른 JSX 호환 라이브러리를 사용할 때 해당 라이브러리의 JSX 생성 함수를 지정하는데 사용됩니다. React의 경우 기본값이 이미 설정되어 있습니다.',
        },
      ],
    },
    {
      title: '프로젝트 구성과 최적화',
      description: '프로젝트 구성과 성능 최적화 관련 설정들에 대한 문제입니다.',
      questions: [
        {
          id: 8,
          question: 'watchOptions의 주요 목적은 무엇인가요?',
          options: [
            '프로젝트 빌드 속도를 높인다',
            '파일 시스템 감시 방식을 최적화한다',
            '메모리 사용량을 줄인다',
            '코드 품질을 검사한다',
          ],
          correctAnswer: 1,
          explanation:
            'watchOptions는 파일과 디렉토리의 변경을 감지하는 방식을 설정합니다. 이를 통해 파일 시스템 감시를 최적화하고 개발 환경에서의 성능을 개선할 수 있습니다.',
        },
        {
          id: 9,
          question: 'isolatedModules 옵션을 활성화하면 어떤 제한이 생기나요?',
          options: [
            '모든 파일이 모듈이어야 한다',
            '타입 전용 익스포트가 허용되지 않는다',
            '글로벌 스코프 사용이 완전히 금지된다',
            'const enum을 사용할 수 없다',
          ],
          correctAnswer: 1,
          explanation:
            'isolatedModules가 활성화되면 단일 파일 트랜스파일러와의 호환성을 위해 타입 전용 익스포트가 제한되고, 각 파일은 독립적인 모듈로 처리되어야 합니다.',
        },
        {
          id: 10,
          question:
            'strict 모드를 활성화하면 자동으로 활성화되는 옵션이 아닌 것은?',
          options: [
            'strictNullChecks',
            'noImplicitAny',
            'alwaysStrict',
            'isolatedModules',
          ],
          correctAnswer: 3,
          explanation:
            'strict 모드는 strictNullChecks, noImplicitAny, alwaysStrict 등 여러 엄격한 타입 체크 옵션을 활성화하지만, isolatedModules는 이와 무관한 별도의 설정입니다.',
        },
      ],
    },
  ],
};
