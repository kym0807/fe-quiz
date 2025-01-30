import { Quiz } from '@/types/quiz.type';

export const quiz: Quiz = {
  title: 'React use Hook 완벽 이해하기',
  description: 'React의 use Hook의 개념과 활용에 대한 이해를 테스트합니다.',
  categories: [
    {
      title: '기본 개념',
      description: 'use Hook의 기본 개념과 특징을 테스트합니다.',
      questions: [
        {
          id: 1,
          question: 'React의 use Hook의 주요 목적은 무엇인가요?',
          options: [
            '상태를 관리하기 위해 사용됩니다',
            'Promise나 Context와 같은 리소스의 값을 읽을 수 있게 해줍니다',
            '컴포넌트의 생명주기를 관리합니다',
            '서버 사이드 렌더링을 구현합니다',
          ],
          correctAnswer: 1,
          explanation:
            'use Hook은 Promise나 Context와 같은 리소스의 값을 컴포넌트나 훅 내부에서 읽을 수 있게 해주는 React 함수입니다.',
        },
        {
          id: 2,
          question:
            '일반적인 React 훅과 비교했을 때 use Hook의 특징이 아닌 것은?',
          options: [
            '조건문 내부에서 사용 가능합니다',
            '반복문 내부에서 사용 가능합니다',
            '컴포넌트나 훅 외부에서 사용 가능합니다',
            'Suspense 및 Error Boundary와 통합됩니다',
          ],
          correctAnswer: 2,
          explanation:
            'use Hook은 컴포넌트나 훅 내부에서만 호출 가능하며, 외부에서는 사용할 수 없습니다.',
        },
        {
          id: 3,
          question:
            'use Hook으로 Context를 사용할 때의 특징으로 올바르지 않은 것은?',
          options: [
            '항상 해당 컴포넌트 상위에서 가장 가까운 Context Provider를 찾습니다',
            '컴포넌트 자신의 내부에 있는 Provider도 고려합니다',
            '조건문 내부에서 사용할 수 있습니다',
            'useContext와 유사한 방식으로 동작합니다',
          ],
          correctAnswer: 1,
          explanation:
            'use(context)는 useContext와 마찬가지로 컴포넌트 상위에서 가장 가까운 Context Provider를 찾으며, 컴포넌트 자신의 내부에 있는 Provider는 고려하지 않습니다.',
        },
      ],
    },
    {
      title: 'Server & Client Components',
      description:
        '서버와 클라이언트 컴포넌트에서의 use Hook 활용을 테스트합니다.',
      questions: [
        {
          id: 4,
          question: 'Server Component에서 Promise를 처리할 때 권장되는 방식은?',
          options: [
            'use Hook 사용하기',
            'async/await 사용하기',
            'then/catch 체이닝 사용하기',
            'useEffect 사용하기',
          ],
          correctAnswer: 1,
          explanation:
            'Server Component에서는 async/await 사용이 권장됩니다. use Hook은 주로 Client Component에서 Promise를 처리할 때 사용됩니다.',
        },
        {
          id: 5,
          question:
            'Server Component에서 Client Component로 Promise를 전달할 때의 제한사항은?',
          options: [
            'Promise의 resolve 값은 반드시 문자열이어야 합니다',
            'Promise의 resolve 값은 반드시 직렬화 가능해야 합니다',
            'Promise는 반드시 에러 처리가 되어있어야 합니다',
            'Promise는 반드시 타임아웃을 설정해야 합니다',
          ],
          correctAnswer: 1,
          explanation:
            'Server Component에서 Client Component로 Promise를 전달할 때, resolve된 값은 반드시 직렬화 가능해야 합니다. 함수와 같은 직렬화할 수 없는 데이터 타입은 Promise의 결과값으로 사용할 수 없습니다.',
        },
      ],
    },

    {
      title: '에러 처리와 Suspense',
      description:
        'use Hook 사용 시의 에러 처리와 Suspense 통합을 테스트합니다.',
      questions: [
        {
          id: 6,
          question:
            "다음 중 use Hook 사용 시 발생할 수 있는 'Suspense Exception' 에러의 원인이 아닌 것은?",
          options: [
            'React 컴포넌트 외부에서 use를 호출한 경우',
            'try-catch 블록 내부에서 use를 호출한 경우',
            'Suspense로 감싸지 않은 경우',
            'Promise가 reject된 경우',
          ],
          correctAnswer: 3,
          explanation:
            'Promise가 reject되는 것은 Suspense Exception을 발생시키지 않습니다. Suspense Exception은 주로 use Hook의 잘못된 사용 위치(컴포넌트나 훅 외부, try-catch 블록 내부)에서 발생합니다.',
        },
        {
          id: 7,
          question:
            '다음 코드의 문제점은 무엇인가요?\n\nfunction MessageHandler({ messagePromise }) {\n  try {\n    const message = use(messagePromise);\n    return <div>{message}</div>;\n  } catch (error) {\n    return <div>Error: {error.message}</div>;\n  }\n}',
          options: [
            'messagePromise가 정의되지 않았습니다',
            'try-catch 블록 내부에서 use를 호출할 수 없습니다',
            'Suspense로 감싸지 않았습니다',
            'return 문이 잘못되었습니다',
          ],
          correctAnswer: 1,
          explanation:
            'use Hook은 try-catch 블록 내부에서 호출할 수 없습니다. 대신 Error Boundary를 사용하여 에러를 처리해야 합니다.',
        },
        {
          id: 8,
          question: 'use Hook과 Suspense를 함께 사용할 때 가장 올바른 패턴은?',
          options: [
            'use Hook을 사용하는 모든 컴포넌트를 각각 Suspense로 감싸기',
            '최상위 컴포넌트만 Suspense로 감싸기',
            '논리적으로 관련된 비동기 작업들을 하나의 Suspense 경계로 그룹화하기',
            '모든 비동기 작업을 하나의 Suspense로 감싸기',
          ],
          correctAnswer: 2,
          explanation:
            '관련된 비동기 작업들을 하나의 Suspense 경계로 그룹화하는 것이 가장 좋은 패턴입니다. 이는 사용자 경험을 개선하고 로딩 상태를 더 효과적으로 관리할 수 있게 해줍니다.',
        },
      ],
    },
    {
      title: '성능 최적화',
      description: 'use Hook을 사용한 성능 최적화 전략을 테스트합니다.',
      questions: [
        {
          id: 9,
          question:
            'Server Component에서 await를 사용하는 것과 Promise를 Client Component로 전달하는 것의 차이점으로 올바른 것은?',
          options: [
            'await는 항상 더 빠른 성능을 제공합니다',
            'Promise 전달은 항상 더 많은 메모리를 사용합니다',
            'await는 렌더링을 차단하지만, Promise 전달은 차단하지 않습니다',
            '두 방식은 성능상 차이가 없습니다',
          ],
          correctAnswer: 2,
          explanation:
            'Server Component에서 await를 사용하면 해당 작업이 완료될 때까지 렌더링이 차단됩니다. 반면, Promise를 Client Component로 전달하면 Server Component의 렌더링을 차단하지 않아 더 나은 사용자 경험을 제공할 수 있습니다.',
        },
        {
          id: 10,
          question:
            '다음 중 use Hook의 성능 최적화와 관련하여 올바르지 않은 설명은?',
          options: [
            '가능한 한 많은 로직을 Server Component에서 처리해야 합니다',
            '모든 Promise는 Client Component에서 생성해야 합니다',
            'Promise의 resolve 값은 최대한 작게 유지해야 합니다',
            '관련된 비동기 작업은 하나의 Promise로 묶는 것이 좋습니다',
          ],
          correctAnswer: 1,
          explanation:
            'Promise는 Server Component에서 생성하고 Client Component로 전달하는 것이 권장됩니다. Client Component에서 모든 Promise를 생성하는 것은 서버 사이드 렌더링의 이점을 활용하지 못하게 만듭니다.',
        },
      ],
    },

    {
      title: '고급 사용 패턴',
      description: 'use Hook의 고급 사용 패턴과 실제 적용 사례를 테스트합니다.',
      questions: [
        {
          id: 11,
          question:
            "use Hook과 Context를 함께 사용할 때 다음 코드의 잠재적인 문제점은 무엇인가요?\n\nfunction ThemeButton() {\n  return (\n    <ThemeContext.Provider value='dark'>\n      <Button />\n    </ThemeContext.Provider>\n  );\n}\n\nfunction Button() {\n  const theme = use(ThemeContext);\n  return <button className={btn-${theme}}>클릭</button>;\n}",
          options: [
            'use Hook은 Context와 함께 사용할 수 없습니다',
            'Button 컴포넌트의 Provider는 theme 값을 가져오는 데 영향을 주지 않습니다',
            'ThemeContext.Provider가 잘못된 위치에 있습니다',
            'className이 잘못 지정되었습니다',
          ],
          correctAnswer: 1,
          explanation:
            'use Hook은 useContext와 마찬가지로 컴포넌트 자신의 내부(하위)에 있는 Provider는 고려하지 않고, 항상 상위에서 가장 가까운 Provider를 찾습니다.',
        },
        {
          id: 12,
          question: '다음 중 use Hook을 활용한 올바른 코드 패턴은 무엇인가요?',
          options: [
            'const data = useMemo(() => use(promise), [promise])',
            'useEffect(() => { const data = use(promise) }, [promise])',
            'const data = use(promise)',
            'const data = useState(() => use(promise))',
          ],
          correctAnswer: 2,
          explanation:
            'use Hook은 다른 Hook이나 특별한 함수로 감싸지 않고 직접 사용해야 합니다. useMemo, useEffect, useState 등과 함께 사용하면 예상치 못한 동작이 발생할 수 있습니다.',
        },
        {
          id: 13,
          question:
            'use Hook을 사용할 때 Promise의 에러 처리 방법 중 가장 권장되는 것은?',
          options: [
            'try/catch 블록 사용하기',
            'Promise.catch() 메서드 사용하기',
            'Error Boundary와 함께 사용하기',
            'useEffect에서 에러 처리하기',
          ],
          correctAnswer: 2,
          explanation:
            'use Hook의 에러는 Error Boundary를 통해 처리하는 것이 가장 권장됩니다. 이는 React의 선언적 에러 처리 방식과 잘 어울리며, 컴포넌트 트리의 어느 위치에서든 에러를 잡아낼 수 있습니다.',
        },
        {
          id: 14,
          question:
            'Server Component에서 use Hook 대신 async/await를 사용할 때의 장점이 아닌 것은?',
          options: [
            '코드가 더 직관적이고 읽기 쉽습니다',
            'try/catch를 사용하여 에러 처리를 할 수 있습니다',
            'Client Component로의 데이터 전달이 더 효율적입니다',
            '모든 Promise가 해결될 때까지 렌더링이 차단됩니다',
          ],
          correctAnswer: 3,
          explanation:
            '렌더링이 차단되는 것은 장점이 아닌 단점입니다. 이는 사용자 경험을 저하시킬 수 있으므로, 필요한 경우에만 await를 사용하고, 가능한 경우 Promise를 Client Component로 전달하는 것이 좋습니다.',
        },
      ],
    },
    {
      title: '통합과 마이그레이션',
      description: '기존 코드와의 통합 및 마이그레이션 전략을 테스트합니다.',
      questions: [
        {
          id: 15,
          question:
            '기존의 useContext를 use Hook으로 마이그레이션할 때 고려해야 할 사항이 아닌 것은?',
          options: [
            '조건부 렌더링에서의 사용 가능 여부',
            'Error Boundary 설정 필요성',
            '상위 Provider의 위치 확인',
            '새로운 Context API 버전으로의 업그레이드',
          ],
          correctAnswer: 3,
          explanation:
            'use Hook은 기존 Context API와 완벽하게 호환되므로, Context API 버전 업그레이드는 필요하지 않습니다. 대신 조건부 사용, 에러 처리, Provider 위치 등을 고려해야 합니다.',
        },
      ],
    },
  ],
};
