import { Quiz } from '@/types/quiz.type';

export const quiz: Quiz = {
  title: 'React Testing with act() Quiz',
  description: 'React의 테스트 환경에서 act() 함수의 이해와 활용',
  categories: [
    {
      title: 'Basic Concepts',
      description: 'act 함수의 기본 개념과 사용법',
      questions: [
        {
          id: 1,
          question: 'React 테스트에서 act() 함수의 주요 목적은 무엇인가요?',
          options: [
            '단순히 테스트 코드를 감싸는 wrapper 함수',
            '컴포넌트 업데이트가 DOM에 올바르게 적용되도록 보장하는 헬퍼 함수',
            '비동기 작업을 동기적으로 처리하는 함수',
            '테스트 속도를 향상시키는 최적화 함수',
          ],
          correctAnswer: 1,
          explanation:
            'act()는 테스트 환경에서 컴포넌트 업데이트가 DOM에 올바르게 적용되도록 보장하는 헬퍼 함수입니다. 실제 브라우저와 유사한 환경을 시뮬레이션합니다.',
        },
        {
          id: 2,
          question: '다음 중 act()를 사용할 필요가 없는 경우는 무엇인가요?',
          options: [
            'React Testing Library를 사용하여 테스트를 작성할 때',
            '컴포넌트를 처음 렌더링할 때',
            '이벤트를 발생시킬 때',
            'setState를 호출할 때',
          ],
          correctAnswer: 0,
          explanation:
            'React Testing Library는 내부적으로 act()를 감싸서 제공하므로, 별도로 act()를 사용할 필요가 없습니다.',
        },
        {
          id: 3,
          question:
            "다음 코드의 실행 결과로 예상되는 오류는 무엇인가요?\n\n```tsx\nit('test', () => {\n  const button = container.querySelector('button');\n  button.dispatchEvent(new MouseEvent('click', { bubbles: true }));\n});\n```",
          options: [
            'button이 null이어서 발생하는 TypeError',
            'DOM 이벤트가 발생하지 않는 오류',
            'act() 함수로 감싸지 않아서 발생하는 경고',
            'MouseEvent가 정의되지 않아서 발생하는 ReferenceError',
          ],
          correctAnswer: 2,
          explanation:
            '이벤트 발생 시에는 반드시 act()로 감싸야 하며, 그렇지 않으면 React는 경고를 발생시킵니다.',
        },
        {
          id: 4,
          question:
            "다음 중 'The current testing environment is not configured to support act(...)' 오류를 해결하는 올바른 방법은?",
          options: [
            "테스트 파일에 'use strict' 추가",
            'global.IS_REACT_ACT_ENVIRONMENT = true 설정 추가',
            'act 함수를 import 하는 구문 수정',
            '새로운 테스트 러너 설치',
          ],
          correctAnswer: 1,
          explanation:
            '이 오류는 테스트 환경에 global.IS_REACT_ACT_ENVIRONMENT = true 설정을 추가함으로써 해결할 수 있습니다.',
        },
        {
          id: 5,
          question: 'act() 함수를 사용할 때 다음 중 올바른 방식은?',
          options: [
            '동기 함수에만 사용',
            '비동기 함수에만 사용',
            '동기와 비동기 함수 모두에 사용 가능하며, 비동기의 경우 await 사용',
            'setTimeout 내부에서만 사용',
          ],
          correctAnswer: 2,
          explanation:
            'act()는 동기와 비동기 함수 모두에서 사용할 수 있으며, 비동기 함수의 경우 await를 사용하여 처리해야 합니다.',
        },
        {
          id: 6,
          question: '다음 중 DOM 이벤트 테스트 시 필수적인 조건은?',
          options: [
            '모든 이벤트는 버블링되어야 함',
            '테스트하려는 요소가 document에 추가되어 있어야 함',
            '이벤트 핸들러가 동기적이어야 함',
            '모든 이벤트가 preventDefault()를 호출해야 함',
          ],
          correctAnswer: 1,
          explanation:
            'DOM 이벤트를 테스트할 때는 해당 요소가 반드시 document에 추가되어 있어야 합니다.',
        },
        {
          id: 7,
          question:
            'React Testing Library를 사용할 때 act()와 관련된 설명 중 옳은 것은?',
          options: [
            'React Testing Library와 함께 act()를 명시적으로 사용해야 함',
            'React Testing Library는 내부적으로 act()를 사용하므로 추가 설정이 필요 없음',
            'React Testing Library 사용 시 act() 관련 설정을 비활성화해야 함',
            'React Testing Library와 act()는 호환되지 않음',
          ],
          correctAnswer: 1,
          explanation:
            'React Testing Library는 내부적으로 act()를 사용하도록 구현되어 있어서 별도의 act() 설정이나 사용이 필요하지 않습니다.',
        },
      ],
    },

    {
      title: 'Advanced Concepts',
      description: 'act 함수의 심화 개념과 실제 사용 사례',
      questions: [
        {
          id: 8,
          question:
            "다음 테스트 코드의 잠재적인 문제점은 무엇인가요?\n\ntsx\ntest('counter test', () => {\n  act(() => {\n    ReactDOM.render(<Counter />, container);\n  });\n\n  const button = container.querySelector('button');\n  act(() => {\n    button.click();\n  });\n\n  expect(document.title).toBe('클릭 횟수: 1');\n});\n",
          options: [
            'act()를 사용하지 않은 부분이 있다',
            '비동기 작업을 동기적으로 처리하고 있다',
            'ReactDOM.render 대신 createRoot를 사용해야 한다',
            'container가 정의되지 않았다',
          ],
          correctAnswer: 2,
          explanation:
            'React 18부터는 ReactDOM.render 대신 createRoot를 사용해야 합니다. 이는 새로운 동시성 기능을 지원하기 위한 변경사항입니다.',
        },
        {
          id: 9,
          question:
            'useEffect를 포함한 컴포넌트를 테스트할 때 다음 중 올바른 접근 방식은?',
          options: [
            'useEffect는 테스트할 필요가 없다',
            'act() 내부에서 setTimeout을 사용하여 처리한다',
            'async act()를 사용하고 필요한 경우 await를 붙여준다',
            'useEffect를 모킹(mocking)하여 테스트한다',
          ],
          correctAnswer: 2,
          explanation:
            'useEffect의 비동기 작업을 테스트할 때는 async act()를 사용하고 필요한 경우 await를 붙여 처리해야 합니다.',
        },
        {
          id: 10,
          question:
            '다음 중 act()를 사용할 때 발생할 수 있는 성능 문제를 방지하는 가장 좋은 방법은?',
          options: [
            '모든 테스트 케이스에 act()를 사용하지 않는다',
            'act() 내부의 코드를 최소화한다',
            'React Testing Library와 같은 상위 레벨 테스트 라이브러리를 사용한다',
            'setTimeout을 사용하여 비동기적으로 처리한다',
          ],
          correctAnswer: 2,
          explanation:
            'React Testing Library와 같은 상위 레벨 테스트 라이브러리를 사용하면 act()를 효율적으로 관리할 수 있으며, 테스트 코드의 가독성과 유지보수성도 향상됩니다.',
        },
        {
          id: 11,
          question:
            '여러 개의 상태 업데이트가 연속적으로 발생하는 경우, act()를 어떻게 사용해야 하나요?',
          options: [
            '각각의 상태 업데이트마다 별도의 act()로 감싸야 한다',
            '하나의 act() 내에서 모든 상태 업데이트를 처리해야 한다',
            'act()를 사용하지 않고 상태 업데이트를 처리한다',
            'setTimeout으로 각 상태 업데이트를 분리한다',
          ],
          correctAnswer: 1,
          explanation:
            '연속적인 상태 업데이트는 하나의 act() 내에서 처리하는 것이 권장됩니다. 이는 React의 배치 업데이트 메커니즘과 일치하며, 불필요한 리렌더링을 방지합니다.',
        },
        {
          id: 12,
          question:
            '컴포넌트에서 외부 API를 호출하는 경우, act()를 사용한 테스트 코드의 올바른 구조는?',
          options: [
            'act() 내부에서 직접 API를 호출한다',
            'API 호출을 모킹하고, act()로 감싼 후 결과를 테스트한다',
            'act()를 사용하지 않고 API 호출만 모킹한다',
            'API 호출 부분은 테스트에서 제외한다',
          ],
          correctAnswer: 1,
          explanation:
            '외부 API 호출을 테스트할 때는 API를 모킹하고, act()로 감싸서 컴포넌트의 업데이트를 올바르게 처리해야 합니다.',
        },
        {
          id: 13,
          question:
            'act() 함수를 사용할 때 다음 중 메모리 누수를 방지하기 위한 가장 좋은 방법은?',
          options: [
            '모든 테스트 후에 container를 document에서 제거한다',
            'act() 사용을 최소화한다',
            '컴포넌트를 매번 새로 생성한다',
            '전역 변수 사용을 피한다',
          ],
          correctAnswer: 0,
          explanation:
            '테스트가 끝난 후 container를 document에서 제거하는 것은 메모리 누수를 방지하는 좋은 방법입니다. cleanup 함수나 afterEach에서 이를 처리할 수 있습니다.',
        },
        {
          id: 14,
          question:
            '다음 중 act()를 사용한 테스트에서 타이머 관련 작업을 처리하는 가장 적절한 방법은?',
          options: [
            '실제 타이머를 사용한다',
            'jest.useFakeTimers()와 함께 act()를 사용한다',
            '타이머 관련 코드는 테스트하지 않는다',
            'setTimeout을 Promise로 변환한다',
          ],
          correctAnswer: 1,
          explanation:
            'jest.useFakeTimers()와 act()를 함께 사용하면 타이머 관련 작업을 효과적으로 테스트할 수 있습니다. 이를 통해 시간 관련 작업을 동기적으로 제어할 수 있습니다.',
        },
      ],
    },

    {
      title: 'Implementation and Troubleshooting',
      description: 'act 함수의 실제 구현과 문제 해결 방법',
      questions: [
        {
          id: 15,
          question:
            "다음 테스트 코드의 문제점을 찾아보세요:\n\ntsx\ntest('async component test', async () => {\n  await act(() => {\n    render(<AsyncComponent />);\n  });\n  \n  const data = screen.getByText('loaded');\n  expect(data).toBeInTheDocument();\n});\n",
          options: [
            'render 함수가 잘못 사용됨',
            'act가 불필요하게 사용됨',
            '비동기 데이터 로딩을 기다리지 않음',
            'screen이 정의되지 않음',
          ],
          correctAnswer: 2,
          explanation:
            '비동기 컴포넌트를 테스트할 때는 데이터 로딩이 완료될 때까지 기다려야 합니다. 이를 위해 추가적인 await나 waitFor을 사용해야 할 수 있습니다.',
        },
        {
          id: 16,
          question:
            'CSS 애니메이션이 있는 컴포넌트를 테스트할 때 act()를 어떻게 사용해야 하나요?',
          options: [
            '애니메이션은 테스트하지 않아야 한다',
            'act() 내에서 setTimeout으로 애니메이션 시간만큼 기다린다',
            'jest.useFakeTimers()와 함께 act()를 사용하고 애니메이션 시간을 조작한다',
            'CSS 애니메이션을 비활성화하고 테스트한다',
          ],
          correctAnswer: 2,
          explanation:
            'CSS 애니메이션이 있는 컴포넌트를 테스트할 때는 jest.useFakeTimers()와 act()를 함께 사용하여 애니메이션 타이밍을 제어할 수 있습니다.',
        },
        {
          id: 17,
          question:
            "다음 중 act() 사용 시 발생하는 'Maximum update depth exceeded' 오류의 가장 일반적인 원인은?",
          options: [
            'act()를 중첩해서 사용한 경우',
            '무한 루프가 발생하는 상태 업데이트',
            '비동기 작업을 잘못 처리한 경우',
            '테스트 환경 설정 오류',
          ],
          correctAnswer: 1,
          explanation:
            '이 오류는 주로 컴포넌트 내에서 무한 루프가 발생하는 상태 업데이트가 있을 때 발생합니다. useEffect의 의존성 배열이나 상태 업데이트 로직을 확인해야 합니다.',
        },
        {
          id: 18,
          question:
            'Context API를 사용하는 컴포넌트를 테스트할 때 act()를 어떻게 활용해야 하나요?',
          options: [
            'Context는 테스트에서 제외해야 한다',
            'Context Provider로 래핑하고 act()로 상태 변경을 감싼다',
            'Context를 모킹하여 테스트한다',
            'Context 대신 props를 사용하여 테스트한다',
          ],
          correctAnswer: 1,
          explanation:
            'Context API를 사용하는 컴포넌트를 테스트할 때는 테스트 대상 컴포넌트를 Context Provider로 래핑하고, context 값의 변경을 act()로 감싸서 처리해야 합니다.',
        },
        {
          id: 19,
          question:
            'React.Suspense와 함께 사용되는 컴포넌트를 테스트할 때 다음 중 올바른 방법은?',
          options: [
            'Suspense를 제거하고 테스트한다',
            'act()를 사용하지 않고 테스트한다',
            'act()와 함께 suspense의 fallback과 실제 컴포넌트 렌더링을 모두 테스트한다',
            'fallback만 테스트한다',
          ],
          correctAnswer: 2,
          explanation:
            'Suspense를 사용하는 컴포넌트를 테스트할 때는 act()를 사용하여 fallback 상태와 데이터 로딩 후의 실제 컴포넌트 렌더링을 모두 테스트해야 합니다.',
        },
        {
          id: 20,
          question: '다음 중 act() 워닝을 무시하는 것이 적절한 경우는?',
          options: [
            '성능 최적화가 필요한 경우',
            '테스트 코드가 너무 복잡해지는 경우',
            '외부 라이브러리를 사용하는 경우',
            '적절한 경우가 없으며, 항상 워닝을 해결해야 한다',
          ],
          correctAnswer: 3,
          explanation:
            'act() 워닝은 테스트 환경에서 실제 브라우저와 다른 동작이 발생할 수 있음을 알려주는 중요한 신호이므로, 항상 적절히 해결해야 합니다.',
        },
      ],
    },
  ],
};
