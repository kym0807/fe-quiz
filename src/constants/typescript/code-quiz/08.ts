import { CodeQuizType } from '@/types/quiz.type';

export const moduleQuizzes: CodeQuizType[] = [
  {
    id: 1,
    title: '모듈 내보내기와 가져오기',
    description: 'ES 모듈의 다양한 내보내기/가져오기 패턴을 이해해보세요.',
    code: `// math.ts
export const PI = 3.14159;
export function square(x: number) { return x * x; }
export default class Calculator {
  add(a: number, b: number) { return a + b; }
}
export type NumericOperation = (x: number) => number;

// main.ts
import Calculator from './math';
import { PI, square } from './math';
import * as MathUtils from './math';
import { square as sq } from './math';
import type { NumericOperation } from './math';

const calc = new Calculator();
const op: NumericOperation = square;

// 다음 표현식들의 결과는?
console.log(MathUtils.PI);         // Case 1
console.log(sq === MathUtils.square); // Case 2
console.log(calc instanceof MathUtils.default); // Case 3
const nums: NumericOperation = Math.abs; // Case 4: 타입 체크 통과?`,
    answer: `Case 1: 3.14159 (네임스페이스 객체를 통한 접근)
Case 2: true (같은 함수를 참조)
Case 3: true (default export 클래스의 인스턴스)
Case 4: 타입 체크 통과 (함수 시그니처가 일치)

설명:
- * as 구문은 모든 named exports를 포함하는 네임스페이스 객체 생성
- default export는 네임스페이스 객체의 default 속성으로 접근
- 타입 시그니처만 일치하면 다른 함수도 할당 가능`,
    hint: 'ES 모듈은 여러 가지 방식으로 동일한 값을 가져올 수 있으며, TypeScript는 타입 정보만 컴파일 시간에 사용합니다.',
  },
  {
    id: 2,
    title: '모듈 해석과 경로 별칭',
    description: 'TypeScript의 모듈 해석 전략과 경로 별칭 설정을 이해해보세요.',
    code: `// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": "src",
    "paths": {
      "@services/*": ["services/*"],
      "@utils": ["utils/index"],
      "@types": ["types/index"]
    }
  }
}

// src/services/api.ts
export class ApiClient { /* ... */ }

// src/utils/index.ts
export function formatDate(date: Date) { /* ... */ }

// src/types/index.ts
export type UserId = string;

// src/app.ts
import { ApiClient } from "@services/api";
import { formatDate } from "@utils";
import type { UserId } from "@types";
import { ApiClient as Client } from "./services/api";

// 다음 중 올바른 것은?
import { formatDate } from "@utils/index";  // Case 1
import { UserId } from "@types/index.ts";   // Case 2
import { ApiClient } from "@services";      // Case 3
const client: Client = new ApiClient();     // Case 4`,
    answer: `Case 1: 컴파일 성공 (@utils는 utils/index로 매핑됨)
Case 2: 컴파일 실패 (.ts 확장자는 불필요)
Case 3: 컴파일 실패 (@services/*는 전체 경로 필요)
Case 4: 컴파일 성공 (같은 타입을 참조)

경로 별칭 규칙:
- @services/*는 와일드카드 매핑이므로 전체 경로 필요
- @utils는 utils/index로 직접 매핑
- 확장자는 생략 가능(권장)
- 같은 모듈의 다른 import 구문은 호환됨`,
    hint: 'paths 설정의 패턴에 따라 필요한 import 경로가 달라지며, TypeScript는 자동으로 확장자를 처리합니다.',
  },
  {
    id: 3,
    title: 'ES 모듈과 CommonJS 상호운용성',
    description: 'ES 모듈과 CommonJS 모듈 간의 상호운용성을 이해해보세요.',
    code: `// logger.js (CommonJS)
module.exports = {
  log: function(msg) { console.log(msg); },
  error: function(msg) { console.error(msg); }
};
module.exports.default = function(msg) { 
  console.log(\`[DEFAULT] \${msg}\`); 
};

// app.ts (TypeScript with ES Modules)
// 다음 import 구문들 중 올바른 것은?
// esModuleInterop: true 가정

// Case 1
import logger from './logger';
logger("test");

// Case 2
import * as logger from './logger';
logger.log("test");

// Case 3
import { log, error } from './logger';
log("test");

// Case 4
import logger, { log } from './logger';
logger("test1");
log("test2");`,
    answer: `Case 1: 정상 동작 (default import가 module.exports.default 사용)
Case 2: 정상 동작 (namespace import가 전체 module.exports 사용)
Case 3: 정상 동작 (named imports가 개별 export 사용)
Case 4: 정상 동작 (default와 named imports 조합)

esModuleInterop이 제공하는 기능:
- CommonJS 모듈의 default export 자동 처리
- named exports와 namespace imports 지원
- 기존 CommonJS 모듈과의 호환성 보장`,
    hint: 'esModuleInterop 플래그는 CommonJS와 ES 모듈 간의 차이를 자동으로 해결해줍니다.',
  },
  {
    id: 4,
    title: '순환 의존성과 타입 가져오기',
    description: '순환 의존성 문제와 타입 전용 가져오기의 활용을 이해해보세요.',
    code: `// types.ts
import type { User } from './user';
export interface Post {
  id: number;
  author: User;
  content: string;
}

// user.ts
import type { Post } from './types';
export interface User {
  id: number;
  name: string;
  posts: Post[];
}

// service.ts
import { User } from './user';
import { Post } from './types';
import type { User as UserType } from './user';

export class UserService {
  getUser(id: number): User { /* ... */ }
}

// 다음 중 옳은 것은?
const user: User = { id: 1, name: "Kim", posts: [] };  // Case 1
const userType: UserType = user;  // Case 2
import type { Post } from './types';
class PostService {
  createPost(post: Post) { /* ... */ }
}  // Case 3
import { User, type Post } from './user';  // Case 4`,
    answer: `Case 1: 컴파일 성공 (순환 참조가 타입 레벨에서만 발생)
Case 2: 컴파일 성공 (User와 UserType은 동일 타입)
Case 3: 컴파일 성공 (타입 전용 import는 순환 참조 허용)
Case 4: 컴파일 실패 (Post는 types.ts에서 정의됨)

순환 의존성 처리:
- 타입 전용 import는 런타임 코드에 영향 없음
- 인터페이스는 순환 참조 가능
- type 키워드로 명시적 타입 import 가능
- 잘못된 모듈에서 타입을 가져오면 오류`,
    hint: '타입 전용 import는 순환 의존성 문제를 해결하는 데 도움이 되며, 컴파일 후에는 제거됩니다.',
  },
];
