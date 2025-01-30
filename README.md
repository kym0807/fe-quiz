# FE-Quiz

> **공식 문서와 개념을 정리한 MDX 파일을 기반으로, 퀴즈 풀이를 통해 학습할 수 있는 웹 애플리케이션**  
> React/Next.js 기반으로 동작하며, 다양한 기술 스택(Front/Back/CS/JavaScript/React/Next.js/Node.js 등)에 대한 학습 자료와 퀴즈가 포함되어 있습니다.

<br />

## 데모 (예시)

- 배포 링크: [https://fe-quiz-one.vercel.app](https://fe-quiz-one.vercel.app)

<br />

## 주요 기능

1. **MDX 기반 학습 자료 열람**

   - `src/constants` 폴더 내에 기술별로 정리된 `.mdx` 파일들을 웹 UI에서 확인 가능합니다.
   - 문서와 함께 코드 예제가 포함되어 있으며, Tiptap 에디터 등 다양한 텍스트 에디터 기능을 활용해 내용을 표시합니다.

2. **퀴즈 풀이 기능**

   - 각 문서 또는 챕터 별로 준비된 퀴즈를 **동적으로 로드**하여 사용자에게 질문을 제공합니다.
   - **코드 형태의 퀴즈**(code-quiz)부터 단답형, 객관식 등 여러 유형으로 구성되어 있습니다.

3. **카테고리/챕터 분류**

   - 프론트엔드, 백엔드, 알고리즘, CS 등 다양한 영역을 카테고리별로 나누어 관리합니다.
   - 학습 진도에 따라 문서를 순서대로 열람하거나, 원하는 주제를 골라 확인할 수 있습니다.

4. **에디터 기능(Tiptap)**

   - 개발 문서를 손쉽게 수정·추가할 수 있도록 Tiptap 기반의 에디터를 제공합니다.
   - 글자 크기, 색상, 테이블, 이미지 삽입, 코드 블록 등 다양한 에디팅 옵션 지원.

5. **테마 전환** (Next Themes)
   - 라이트/다크 모드 전환 기능이 제공됩니다.
   - 사용자 취향 또는 시스템 설정에 따라 UI 테마가 변경됩니다.

<br />

## 기술 스택

| 분류              | 스택/도구                                                                                                       |
| ----------------- | --------------------------------------------------------------------------------------------------------------- |
| **Language**      | TypeScript, JavaScript                                                                                          |
| **Framework**     | [Next.js (v15)](https://nextjs.org/), [React (v19)](https://react.dev/)                                         |
| **Styling**       | [Tailwind CSS](https://tailwindcss.com/), [Tailwind Typography](https://tailwindcss.com/docs/typography-plugin) |
| **Editor**        | [Tiptap](https://tiptap.dev/), [MDX](https://mdxjs.com/)                                                        |
| **State Mgmt**    | [Zustand](https://github.com/pmndrs/zustand)                                                                    |
| **UI Components** | Radix UI, [Lucide Icons](https://lucide.dev/), Shadcn UI Patterns                                               |
| **Forms**         | React Hook Form, Zod                                                                                            |
| **Others**        | ESLint, Prettier, Turbopack, Gray-matter, GitHub Actions(CI/CD) 등                                              |

<br />

## 프로젝트 구조

```
fe-quiz
.
├── .env.local               # 로컬 환경변수
├── package.json
├── pnpm-lock.yaml
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── src
│   ├── app
│   │   ├── (root)
│   │   │   ├── contents
│   │   │   │   └── [category]
│   │   │   │       ├── [id]
│   │   │   │       │   ├── layout.tsx
│   │   │   │       │   ├── page.tsx
│   │   │   │       │   └── quiz
│   │   │   │       │       └── page.tsx
│   │   │   │       └── page.tsx
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── fonts
│   │   ├── globals.css
│   │   └── layout.tsx
│   ├── components          # 재사용되는 UI 컴포넌트
│   │   ├── contents
│   │   ├── quiz
│   │   └── ui
│   ├── constants           # 기술별 챕터 문서, 퀴즈(typescript, react, nextjs, ...)
│   │   ├── front_tech
│   │   ├── backend_tech
│   │   ├── cs
│   │   ├── javascript
│   │   ├── react
│   │   ├── nextjs
│   │   ├── node
│   │   └── typescript
│   ├── extensions          # 에디터(Tiptap) 확장
│   ├── hooks
│   ├── lib
│   ├── providers
│   └── types
└── public                  # 이미지, SVG, 기타 static 파일
```

- **`app/(root)/contents/[category]/[id]/quiz`**: 특정 챕터의 퀴즈 페이지 라우트
- **`constants/**`\*\*: 모든 MDX 문서 및 퀴즈가 배치된 폴더
- **`components/quiz`**: 퀴즈를 구현하는 컴포넌트 (`quiz.tsx`, `code-quiz.tsx`)
- **`mdx-remote-wrapper.tsx`**: MDX 문서 렌더링에 사용되는 컴포넌트

<br />

## 사전 요구사항

- **Node.js >= 21**
  - (프로젝트 루트의 `.nvmrc` 파일을 통해 Node 버전을 관리하면 좋습니다.)
- **pnpm**
  - 패키지 매니저로 `pnpm`을 사용합니다. (기본 npm, yarn 대체 가능하지만 `pnpm@9.15.0` 권장)

<br />

## 설치 및 실행

1. **프로젝트 클론**

   ```bash
   git clone https://github.com/kym0807/fe-quiz.git
   ```

2. **의존성 설치**

   ```bash
   pnpm install
   ```

3. **개발 서버 실행**

   ```bash
   pnpm dev
   ```

   - `http://localhost:3000`

4. **빌드 & 배포**

   ```bash
   # 빌드
   pnpm build

   # 프로덕션 서버 실행
   pnpm start
   ```

<br />

## 주요 스크립트

| 스크립트   | 명령어        | 설명                               |
| ---------- | ------------- | ---------------------------------- |
| **dev**    | `pnpm dev`    | Next.js 개발 서버 구동 (Turbopack) |
| **build**  | `pnpm build`  | 프로덕션 빌드 생성                 |
| **start**  | `pnpm start`  | 빌드된 프로덕션 서버 실행          |
| **lint**   | `pnpm lint`   | ESLint 검사                        |
| **format** | `pnpm format` | Prettier를 사용한 코드/문서 포맷팅 |

<br />

<br />

## 참고 자료

- [Next.js 공식 문서](https://nextjs.org/docs)
- [MDX.js](https://mdxjs.com/)
- [React 공식 문서](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

<br />

---

#### 문의

- Author: [김영민](mailto:youngmin0807ray@gmail.com)
- 깃허브 이슈나 Pull Request를 통해 문의 및 제안 부탁드립니다.

<br />

> **FE-Quiz**는 공식 문서의 내용을 번역·정리하고, 퀴즈로 만들어 학습 효율을 높이기 위한 목적으로 제작되었습니다.
