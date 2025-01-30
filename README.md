# FE Quiz

## React

1. 기초 개념 단계

- Rules of React

2. 핵심 Hooks & 기본 컴포넌트

- useState
- useEffect
- useRef
- Fragment

3. 성능 최적화 관련 Hooks

- useCallback
- useMemo
- memo
- useLayoutEffect
- Profiler

4. 상태 관리 심화

- useReducer
- useContext
- createContext
- useSyncExternalStore

5. 비동기 처리 & 코드 분할

- Suspense
- lazy
- useTransition
- useDeferredValue
- startTransition

6. DOM 조작 & 통합

- createPortal
- createRoot
- flushSync
- useImperativeHandle
- useInsertionEffect

7. 서버 사이드 렌더링

- hydrateRoot
- renderToPipeableStream
- renderToReadableStream
- renderToStaticMarkup

8. React Server Components

- Server Components
- Server Functions
- Directives

9. 고급 최적화 & 유틸리티

- cache
- use
- useOptimistic
- useFormStatus
- useDebugValue
- useId

10. 리소스 최적화

- preconnect
- prefetchDNS
- preinit/preinitModule
- preload/preloadModule
- prerender

```md
해당 문서를 예시 mdx 처럼 한국어 mdx로 제공해주세요
단, shadcn(callout x), tailwind를 적극 활용해주세요
단, 너무 길면 나눠서 제공하더라도 해당 문서 전반적인 내용이 전부 포함되어야합니다
이 작업의 핵심은 영어 -> 한국어 / 가독성 상승 / 약간 복잡한 설명을 쉽게 이해가능하게(단 원래 내용에서 벗어나 틀린 내용이 되면 안됨) / 너무 길면 채팅 하나가 아닌 여러개로 제공하더라도 전체 내용을 전부 포함해야함 / 밑 예시 포멧이어야함 / 배경색이나 텍스트 컬러 지양, 만약 꼭 필요하면 다크모드 고려해서 설정
이 6가지입니다.

---

## 예시:

title: "useCallback"
description: "함수 정의를 리렌더링 사이에 캐싱할 수 있게 해주는 React Hook"

---

import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
<Card className="mb-6">
<CardHeader>
<CardTitle>useCallback이란?</CardTitle>
<CardDescription>
컴포넌트의 리렌더링 사이에 함수 정의를 캐싱할 수 있게 해주는 React Hook입니다.
</CardDescription>
</CardHeader>
<CardContent>
tsx
const cachedFn = useCallback(fn, dependencies)

  </CardContent>
</Card>
```

---

```md
첨부된 문서 범위 내에서 제공된 타입에 맞게 퀴즈를 만들어주세요
단, 해당 퀴즈를 통해 문서 전 범위를 학습할 수 있어야합니다.
단, 너무 길면 다음 채팅으로 제공하더라도 (제가 "계속"이라고 치면,,,) 전 범위를 포함시켜주세요, 다만 채팅을 나누더라도 결국 하나의 파일이니 id는 이어져야합니다

- ex: 첫번째 채팅에서 제공한 문제가 id: 7에서 끝나면 제가 계속을 말한 이후 제공해주시는 채팅의 문제는 id 8부터 시작해야합니다

단, 해당 문서에 직접적인 내용이 아니더라도 꼬리질문 형태로 이 개념을 알면, 또는 알아야하면 알아야하는 개념 문제도 포함해주세요
오직 문제만 제공해주세요 (문제 구현 컴포넌트 구현 필요 x)
단, 중복되는 질문은 없어야합니다.
단, 문제에 코드가 포함되는 경우 "\n"을 통해 줄바꿈을 확실히 해주세요

export type QuizQuestion = {
id: number;
question: string;
options: string[];
correctAnswer: number;
explanation: string;
};

export type QuizCategory = {
title: string;
description: string;
questions: QuizQuestion[];
};

export type Quiz = {
title: string;
description: string;
categories: QuizCategory[];
};
```
