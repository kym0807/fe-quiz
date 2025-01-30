import { Quiz } from '@/types/quiz.type';

export const quiz: Quiz = {
  title: 'React Server Components Cache Quiz',
  description: 'React Server Components의 cache 함수에 대한 이해',
  categories: [
    {
      title: 'Basic Concepts',
      description: 'cache 함수의 기본 개념과 특징',
      questions: [
        {
          id: 1,
          question: 'React의 cache 함수의 주요 목적은 무엇인가요?',
          options: [
            '클라이언트 컴포넌트의 렌더링 최적화',
            '서버 컴포넌트에서 데이터 패칭이나 계산 결과를 캐싱',
            '컴포넌트의 props 변경 감지',
            '상태 관리 최적화',
          ],
          correctAnswer: 1,
          explanation:
            'cache는 React Server Components에서 데이터 패칭이나 계산 결과를 캐싱할 수 있게 해주는 함수입니다.',
        },
        {
          id: 2,
          question: '다음 중 cache 함수의 특징이 아닌 것은?',
          options: [
            '캐시는 매 서버 요청마다 초기화된다',
            '에러도 캐시된다',
            '클라이언트 컴포넌트에서 사용 가능하다',
            'cache 함수를 여러 번 호출하면 각각 다른 캐시를 가진다',
          ],
          correctAnswer: 2,
          explanation:
            'cache는 Server Components에서만 사용 가능하며, 클라이언트 컴포넌트에서는 사용할 수 없습니다.',
        },
        {
          id: 3,
          question:
            '다음 코드의 문제점은 무엇인가요?\n\n```tsx\nfunction Temperature({ cityData }) {\n  const getWeekReport = cache(calculateWeekReport);\n  const report = getWeekReport(cityData);\n  return <div>{report}</div>\n}\n```',
          options: [
            'cache를 import하지 않았다',
            '컴포넌트 내부에서 cache를 호출하여 매 렌더링마다 새로운 캐시가 생성된다',
            'calculateWeekReport가 정의되지 않았다',
            'return 문이 잘못되었다',
          ],
          correctAnswer: 1,
          explanation:
            '컴포넌트 내부에서 cache를 호출하면 매 렌더링마다 새로운 캐시가 생성되므로, 컴포넌트 외부에서 정의해야 합니다.',
        },
        {
          id: 4,
          question: 'cache와 useMemo의 가장 큰 차이점은 무엇인가요?',
          options: [
            'cache는 동기 함수만 처리할 수 있다',
            'useMemo는 서버사이드에서만 사용 가능하다',
            'cache는 Server Components에서, useMemo는 Client Components에서 사용된다',
            'cache는 에러를 캐시하지 않는다',
          ],
          correctAnswer: 2,
          explanation:
            'cache는 Server Components에서 사용되고, useMemo는 Client Components에서 사용됩니다. 이는 각각의 용도와 실행 환경이 다르기 때문입니다.',
        },
        {
          id: 5,
          question:
            '데이터 프리로딩을 구현할 때 cache를 사용하는 주된 이유는 무엇인가요?',
          options: [
            '데이터베이스 쿼리 최적화',
            '클라이언트 사이드 렌더링 속도 향상',
            '동일한 데이터 요청에 대한 중복 호출 방지',
            '서버 메모리 사용량 감소',
          ],
          correctAnswer: 2,
          explanation:
            'cache를 사용한 데이터 프리로딩은 동일한 데이터에 대한 중복 요청을 방지하고, 이미 로딩된 데이터를 재사용할 수 있게 합니다.',
        },
        {
          id: 6,
          question:
            '다음 중 객체를 cache 함수의 인자로 전달할 때 올바른 방법은?',
          options: [
            '매 렌더링마다 새로운 객체 생성',
            '객체를 JSON.stringify로 변환하여 전달',
            '동일한 객체 참조 사용',
            '객체를 깊은 복사하여 전달',
          ],
          correctAnswer: 2,
          explanation:
            'cache 함수에 객체를 전달할 때는 항상 동일한 참조를 사용해야 캐시가 제대로 동작합니다.',
        },
        {
          id: 7,
          question: 'cache와 memo의 캐시 초기화 시점은 각각 언제인가요?',
          options: [
            '둘 다 컴포넌트가 언마운트될 때',
            'cache는 매 서버 요청마다, memo는 props가 변경될 때',
            '둘 다 의존성이 변경될 때',
            'cache는 브라우저 새로고침시, memo는 컴포넌트 리렌더링시',
          ],
          correctAnswer: 1,
          explanation:
            'cache는 매 서버 요청마다 초기화되고, memo는 컴포넌트의 props가 변경될 때 캐시가 무효화됩니다.',
        },
      ],
    },

    {
      title: 'Advanced Concepts',
      description: 'cache 함수의 심화 개념과 실제 활용',
      questions: [
        {
          id: 8,
          question:
            '다음 코드의 실행 결과로 가장 적절한 것은?\n\ntsx\nconst getUser = cache(async (id) => {\n  return await db.user.query(id);\n});\n\nfunction Page({ id }) {\n  getUser(id);\n  return <Profile id={id} />;\n}\n\nasync function Profile({ id }) {\n  const user = await getUser(id);\n  return <div>{user.name}</div>;\n}\n',
          options: [
            'Page 컴포넌트에서 에러가 발생한다',
            '데이터베이스 쿼리가 두 번 실행된다',
            'Profile 컴포넌트가 데이터를 더 빨리 받을 수 있다',
            '캐시가 작동하지 않는다',
          ],
          correctAnswer: 2,
          explanation:
            '이는 데이터 프리로딩 패턴의 예시입니다. Page 컴포넌트에서 미리 데이터 로딩을 시작하므로 Profile 컴포넌트는 이미 시작된 요청의 결과를 기다리게 되어 더 빠른 데이터 접근이 가능합니다.',
        },
        {
          id: 9,
          question:
            '다음 중 cache 함수를 사용할 때 발생할 수 있는 메모리 누수를 방지하는 가장 좋은 방법은?',
          options: [
            '매 요청마다 새로운 cache 함수를 생성한다',
            '캐시 키를 문자열로 변환한다',
            '서버 요청마다 캐시가 초기화되므로 별도의 처리가 필요없다',
            '수동으로 캐시를 비워준다',
          ],
          correctAnswer: 2,
          explanation:
            'cache 함수는 매 서버 요청마다 자동으로 초기화되므로 별도의 메모리 누수 방지 처리가 필요하지 않습니다.',
        },
        {
          id: 10,
          question:
            '다음 중 cache를 사용한 데이터 스냅샷 공유의 장점이 아닌 것은?',
          options: [
            '동일한 데이터 요청의 중복을 방지한다',
            '여러 컴포넌트 간 데이터 일관성을 보장한다',
            '클라이언트 상태 관리가 간편해진다',
            '서버 리소스 사용을 최적화한다',
          ],
          correctAnswer: 2,
          explanation:
            'cache는 서버 컴포넌트에서만 사용되며 클라이언트 상태 관리와는 관련이 없습니다. 클라이언트 상태 관리는 다른 도구나 방법을 사용해야 합니다.',
        },
        {
          id: 11,
          question:
            '다음 중 비용이 많이 드는 계산을 캐싱할 때 가장 효과적인 방법은?',
          options: [
            '컴포넌트 내부에서 직접 계산',
            'useMemo 훅 사용',
            '외부에서 cache로 감싼 함수 정의',
            '일반 변수에 결과 저장',
          ],
          correctAnswer: 2,
          explanation:
            '비용이 많이 드는 계산은 컴포넌트 외부에서 cache로 감싸서 정의하는 것이 가장 효과적입니다. 이렇게 하면 여러 컴포넌트에서 결과를 공유하고 중복 계산을 방지할 수 있습니다.',
        },
        {
          id: 12,
          question:
            'cache를 사용할 때 다음 코드의 문제점은 무엇인가요?\n\ntsx\nconst calculateNorm = cache((vector) => {\n  return Math.sqrt(vector.x ** 2 + vector.y ** 2);\n});\n\nfunction Component() {\n  const vector = { x: 3, y: 4 };\n  return <div>{calculateNorm(vector)}</div>;\n}\n',
          options: [
            'cache가 잘못 사용됨',
            '수학 계산이 잘못됨',
            '매 렌더링마다 새로운 객체가 생성되어 캐시가 효과가 없음',
            '반환값이 잘못됨',
          ],
          correctAnswer: 2,
          explanation:
            '컴포넌트 내에서 객체를 생성하면 매 렌더링마다 새로운 참조가 생성되어 캐시가 효과적으로 동작하지 않습니다. 객체는 컴포넌트 외부에서 생성하거나 원시값을 사용해야 합니다.',
        },
        {
          id: 13,
          question:
            '다음 중 cache와 useMemo를 함께 사용할 때 발생할 수 있는 문제는?',
          options: [
            '캐시 충돌이 발생한다',
            'Server Components에서 useMemo는 사용할 수 없다',
            '성능이 저하된다',
            '메모리 사용량이 증가한다',
          ],
          correctAnswer: 1,
          explanation:
            'cache는 Server Components에서만 사용 가능하고, useMemo는 Client Components에서만 사용 가능합니다. 따라서 둘을 함께 사용하는 것은 불가능합니다.',
        },
        {
          id: 14,
          question: '다음 중 cache를 사용한 데이터 프리로딩의 단점은?',
          options: [
            '서버 메모리 사용량 증가',
            '불필요한 데이터 로딩 가능성',
            '클라이언트 성능 저하',
            '데이터 일관성 문제',
          ],
          correctAnswer: 1,
          explanation:
            '데이터 프리로딩을 사용할 때는 실제로 사용되지 않을 수도 있는 데이터를 미리 로딩하게 될 수 있습니다. 따라서 프리로딩할 데이터를 신중하게 선택해야 합니다.',
        },
      ],
    },

    {
      title: 'Error Handling and Advanced Usage',
      description: 'cache 함수의 에러 처리와 고급 활용 방법',
      questions: [
        {
          id: 15,
          question:
            'cache 함수에서 발생한 에러 처리에 대한 설명으로 옳은 것은?',
          options: [
            '에러는 캐시되지 않고 매번 새로운 요청이 발생한다',
            '에러도 캐시되어 동일한 입력에 대해 같은 에러가 반환된다',
            '에러 발생 시 자동으로 재시도한다',
            '에러 발생 시 캐시가 자동으로 초기화된다',
          ],
          correctAnswer: 1,
          explanation:
            'cache 함수에서 발생한 에러도 결과값처럼 캐시됩니다. 동일한 입력에 대해 다시 호출하면 캐시된 에러가 반환됩니다.',
        },
        {
          id: 16,
          question:
            '다음 코드의 잠재적인 문제점은 무엇인가요?\n\ntsx\nconst getUser = cache(async (userId, options = {}) => {\n  const response = await fetch(`/api/users/${userId}`, options);\n  return response.json();\n});\n',
          options: [
            'fetch가 올바르게 사용되지 않았다',
            'options 객체가 매번 새로 생성되어 캐시가 제대로 작동하지 않을 수 있다',
            'response.json()이 잘못 사용되었다',
            'userId 타입 검사가 없다',
          ],
          correctAnswer: 1,
          explanation:
            '기본값으로 빈 객체를 사용하면 매 호출마다 새로운 객체가 생성되어 캐시가 효과적으로 동작하지 않을 수 있습니다. 옵션은 고정된 값을 사용하거나 별도로 관리해야 합니다.',
        },
        {
          id: 17,
          question:
            'cache를 사용한 데이터 페치 시 다음 중 가장 권장되는 방식은?',
          options: [
            '각 컴포넌트에서 개별적으로 데이터를 페치한다',
            '최상위 컴포넌트에서 모든 데이터를 한 번에 페치한다',
            '필요한 데이터만 선별적으로 페치하고 결과를 공유한다',
            '모든 데이터 페치를 클라이언트로 위임한다',
          ],
          correctAnswer: 2,
          explanation:
            'cache를 사용할 때는 필요한 데이터만 선별적으로 페치하고 그 결과를 여러 컴포넌트에서 공유하는 것이 가장 효율적입니다. 이는 불필요한 데이터 페치를 방지하고 성능을 최적화합니다.',
        },
        {
          id: 18,
          question: '다음 중 cache 함수의 메모이제이션 전략으로 올바른 것은?',
          options: [
            '모든 함수 호출 결과를 영구적으로 저장',
            '매 서버 요청마다 새로운 캐시를 생성하고 요청이 끝나면 폐기',
            '클라이언트 세션 동안 캐시 유지',
            '24시간 동안 캐시 유지',
          ],
          correctAnswer: 1,
          explanation:
            'cache 함수는 매 서버 요청마다 새로운 캐시를 생성하고, 해당 요청이 완료되면 캐시를 폐기합니다. 이는 데이터의 일관성을 유지하면서도 메모리를 효율적으로 관리하는 방법입니다.',
        },
        {
          id: 19,
          question:
            'cache와 React의 Suspense를 함께 사용할 때 가장 적절한 패턴은?',
          options: [
            'cache 함수 내에서 Suspense 처리',
            'Suspense 내에서 cache 함수 호출',
            'cache로 감싼 비동기 함수를 Suspense 바운더리 내에서 호출',
            'Suspense 대신 에러 바운더리 사용',
          ],
          correctAnswer: 2,
          explanation:
            'cache로 감싼 비동기 함수를 Suspense 바운더리 내에서 호출하는 것이 가장 적절합니다. 이렇게 하면 데이터 로딩 상태를 적절히 처리하면서도 캐싱의 이점을 활용할 수 있습니다.',
        },
        {
          id: 20,
          question:
            '캐시된 데이터의 재검증(revalidation)이 필요한 경우 어떻게 해야 하나요?',
          options: [
            'cache 함수를 다시 호출한다',
            '새로운 서버 요청을 시작한다',
            '캐시를 수동으로 비운다',
            '브라우저를 새로고침한다',
          ],
          correctAnswer: 1,
          explanation:
            'cache의 결과를 재검증하려면 새로운 서버 요청을 시작해야 합니다. 캐시는 서버 요청 범위 내에서만 유지되므로, 새로운 요청은 새로운 캐시를 생성하게 됩니다.',
        },
      ],
    },
  ],
};
