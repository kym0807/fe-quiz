import { Quiz } from '@/types/quiz.type';

export const quiz: Quiz = {
  title: 'useId와 접근성 퀴즈',
  description: 'React의 useId Hook의 개념과 사용법을 테스트하는 퀴즈입니다.',
  categories: [
    {
      title: '기본 개념',
      description: 'useId의 기본적인 개념과 사용법을 테스트합니다.',
      questions: [
        {
          id: 1,
          question: 'useId Hook의 주요 목적은 무엇인가요?',
          options: [
            '컴포넌트에 고유한 키를 생성하기 위해',
            '리스트 아이템의 key prop을 생성하기 위해',
            '접근성 속성에 사용할 수 있는 고유 ID를 생성하기 위해',
            'state의 고유 식별자를 생성하기 위해',
          ],
          correctAnswer: 2,
          explanation:
            'useId는 접근성(accessibility) 속성에 전달할 수 있는 고유한 ID를 생성하기 위한 React Hook입니다.',
        },
        {
          id: 2,
          question: 'useId를 사용하면 안 되는 경우는?',
          options: [
            'aria-describedby 속성에 사용할 때',
            'htmlFor 속성에 사용할 때',
            '리스트의 key를 생성할 때',
            '폼 요소의 id 속성에 사용할 때',
          ],
          correctAnswer: 2,
          explanation:
            'useId는 리스트의 key를 생성하는 데 사용해서는 안 됩니다. key는 데이터로부터 생성되어야 합니다.',
        },
        {
          id: 3,
          question: 'useId의 반환값의 특징으로 올바른 것은?',
          options: [
            '숫자만 반환한다',
            '컴포넌트의 특정 useId 호출과 연관된 고유한 ID 문자열을 반환한다',
            'undefined를 반환할 수 있다',
            '객체를 반환한다',
          ],
          correctAnswer: 1,
          explanation:
            'useId는 컴포넌트의 특정 useId 호출과 연관된 고유한 ID 문자열을 반환합니다.',
        },
        {
          id: 4,
          question: '다음 중 useId의 올바른 사용법은?',
          options: [
            'const id = useId(1)',
            'const [id, setId] = useId()',
            'const id = useId()',
            'const id = await useId()',
          ],
          correctAnswer: 2,
          explanation:
            'useId는 매개변수 없이 호출되며, 단순히 고유한 ID 문자열을 반환합니다.',
        },
        {
          id: 5,
          question: '여러 관련 요소에 대한 ID를 생성할 때 권장되는 방법은?',
          options: [
            '각 요소마다 새로운 useId를 호출한다',
            '하나의 useId를 호출하고 접미사를 추가하여 여러 ID를 생성한다',
            'Math.random()을 사용한다',
            '요소의 인덱스를 ID로 사용한다',
          ],
          correctAnswer: 1,
          explanation:
            '하나의 useId 호출로 생성된 ID에 접미사를 추가하여 여러 관련 요소의 ID를 생성하는 것이 권장됩니다.',
        },
        {
          id: 6,
          question: '증분 카운터 대신 useId를 사용하는 주된 이유는?',
          options: [
            '더 짧은 ID를 생성하기 때문에',
            '성능이 더 좋기 때문에',
            '서버 사이드 렌더링과 하이드레이션을 안정적으로 지원하기 때문에',
            '더 많은 ID를 생성할 수 있기 때문에',
          ],
          correctAnswer: 2,
          explanation:
            "useId는 서버와 클라이언트 간의 ID 일치를 보장하고, 하이드레이션 순서가 달라도 문제가 발생하지 않으며, 컴포넌트의 '부모 경로'를 기반으로 ID를 생성하여 일관성을 유지합니다.",
        },
        {
          id: 7,
          question: 'useId를 사용할 때의 제약사항은?',
          options: [
            '이벤트 핸들러 내에서만 사용할 수 있다',
            '컴포넌트의 최상위 레벨에서만 호출할 수 있다',
            '클래스 컴포넌트에서만 사용할 수 있다',
            '비동기 함수 내에서만 사용할 수 있다',
          ],
          correctAnswer: 1,
          explanation:
            'useId는 다른 React Hooks와 마찬가지로 컴포넌트의 최상위 레벨에서만 호출할 수 있습니다.',
        },
      ],
    },

    {
      title: '고급 개념과 실제 구현',
      description: 'useId의 고급 사용법과 실제 구현 시나리오를 테스트합니다.',
      questions: [
        {
          id: 8,
          question:
            '서버 사이드 렌더링에서 useId를 사용할 때 identifierPrefix의 역할은?',
          options: [
            'ID를 더 짧게 만든다',
            '서버와 클라이언트 간의 ID 충돌을 방지한다',
            'ID 생성 속도를 높인다',
            'ID를 더 읽기 쉽게 만든다',
          ],
          correctAnswer: 1,
          explanation:
            'identifierPrefix는 여러 React 앱이 한 페이지에 있거나 서버 사이드 렌더링 시 서버와 클라이언트 간의 ID 충돌을 방지하는 데 사용됩니다.',
        },
        {
          id: 9,
          question:
            '다음 코드의 잘못된 부분은 무엇인가요?\n\nfunction List({ items }) {\n  return items.map(item => {\n    const id = useId();\n    return <li key={id}>{item}</li>\n  });\n}',
          options: [
            'map 함수의 사용법이 잘못되었다',
            'useId를 반복문 내에서 사용했다',
            'key prop의 사용법이 잘못되었다',
            '리스트 아이템의 렌더링 방식이 잘못되었다',
          ],
          correctAnswer: 1,
          explanation:
            'useId를 반복문이나 조건문 내에서 사용하면 안 됩니다. 또한 useId는 리스트의 key를 생성하는 데 사용해서는 안 됩니다.',
        },
        {
          id: 10,
          question: 'useId로 생성된 ID의 특징으로 올바르지 않은 것은?',
          options: [
            '서버와 클라이언트에서 동일한 값을 가진다',
            '컴포넌트의 부모 경로를 기반으로 생성된다',
            '렌더링마다 다른 값을 가진다',
            '하이드레이션 과정에서 안정적이다',
          ],
          correctAnswer: 2,
          explanation:
            'useId로 생성된 ID는 렌더링 간에 안정적이며 동일한 값을 유지합니다. 매 렌더링마다 다른 값을 가지지 않습니다.',
        },
        {
          id: 11,
          question: '다음 중 useId의 사용이 가장 적절한 경우는?',
          options: [
            '리스트의 정렬 키로 사용할 때',
            '데이터베이스 레코드의 ID로 사용할 때',
            '폼 요소와 레이블을 연결하는 htmlFor/id 속성에 사용할 때',
            '컴포넌트의 고유 이름을 생성할 때',
          ],
          correctAnswer: 2,
          explanation:
            'useId는 주로 접근성 속성에 사용되며, 폼 요소와 레이블을 연결하는 htmlFor/id 속성에 사용하는 것이 가장 적절합니다.',
        },
        {
          id: 12,
          question:
            '여러 React 앱이 한 페이지에 있을 때 useId를 사용하는 가장 좋은 방법은?',
          options: [
            '각 앱마다 다른 useId 구현을 사용한다',
            'createRoot 시 각 앱마다 다른 identifierPrefix를 지정한다',
            'useId 대신 Math.random()을 사용한다',
            '모든 앱에서 동일한 prefix를 사용한다',
          ],
          correctAnswer: 1,
          explanation:
            '여러 React 앱이 한 페이지에 있을 때는 createRoot 시 각 앱마다 다른 identifierPrefix를 지정하여 ID 충돌을 방지해야 합니다.',
        },
        {
          id: 13,
          question: 'ARIA 속성과 함께 useId를 사용할 때 가장 좋은 방식은?',
          options: [
            '여러 ARIA 속성에 각각 다른 useId를 사용한다',
            '하나의 useId로 생성한 ID를 여러 관련 ARIA 속성에 재사용한다',
            'ARIA 속성에는 useId를 사용하지 않는다',
            'ARIA 속성마다 다른 prefix를 사용한다',
          ],
          correctAnswer: 1,
          explanation:
            '관련된 여러 ARIA 속성이 있을 때는 하나의 useId로 생성한 ID를 재사용하는 것이 좋습니다. 이는 코드를 더 효율적이고 관리하기 쉽게 만듭니다.',
        },
        {
          id: 14,
          question:
            '하이드레이션 과정에서 useId가 처리되는 방식으로 올바른 설명은?',
          options: [
            '서버와 클라이언트에서 각각 새로운 ID를 생성한다',
            '서버에서 생성된 ID를 클라이언트에서 그대로 사용한다',
            '클라이언트에서만 ID를 생성한다',
            '서버와 클라이언트에서 생성된 ID를 병합한다',
          ],
          correctAnswer: 1,
          explanation:
            '하이드레이션 과정에서 useId는 서버에서 생성된 ID를 클라이언트에서 그대로 사용합니다. 이는 하이드레이션 불일치를 방지하고 안정적인 ID를 제공합니다.',
        },
      ],
    },

    {
      title: '실전 응용과 문제 해결',
      description: 'useId의 실전 사용 사례와 문제 해결 방법을 테스트합니다.',
      questions: [
        {
          id: 15,
          question:
            '접근성이 필요한 모달 컴포넌트에서 useId를 활용하는 가장 적절한 방법은?',
          options: [
            '각 모달 인스턴스마다 새로운 useId를 호출한다',
            '하나의 useId를 사용하여 aria-labelledby와 aria-describedby 속성에 대한 ID를 생성한다',
            '모달의 z-index 값으로 useId를 사용한다',
            '모달의 표시 여부를 결정하는 데 useId를 사용한다',
          ],
          correctAnswer: 1,
          explanation:
            '모달의 접근성을 위해서는 하나의 useId를 사용하여 aria-labelledby와 aria-describedby와 같은 관련 ARIA 속성들의 ID를 생성하는 것이 가장 적절합니다.',
        },
        {
          id: 16,
          question: '다음 중 useId와 관련하여 성능상 가장 좋은 실천 방법은?',
          options: [
            '모든 요소에 대해 개별 useId를 사용한다',
            '가능한 한 많은 useId를 사용한다',
            '필요한 경우에만 useId를 사용하고, 하나의 useId로 여러 관련 ID를 생성한다',
            '렌더링마다 새로운 useId를 생성한다',
          ],
          correctAnswer: 2,
          explanation:
            '성능을 위해서는 필요한 경우에만 useId를 사용하고, 가능한 경우 하나의 useId 호출로 여러 관련 요소의 ID를 생성하는 것이 좋습니다.',
        },
        {
          id: 17,
          question:
            '동적으로 생성되는 폼 필드에서 useId를 사용할 때의 올바른 접근 방식은?',
          options: [
            '각 필드마다 useId를 호출한다',
            '상위 컴포넌트에서 하나의 useId를 호출하고 필드 인덱스를 조합하여 ID를 생성한다',
            'useId 대신 필드의 인덱스만을 ID로 사용한다',
            '필드마다 Math.random()으로 ID를 생성한다',
          ],
          correctAnswer: 1,
          explanation:
            '동적 폼 필드에서는 상위 컴포넌트에서 하나의 useId를 호출하고, 이를 필드의 인덱스나 식별자와 조합하여 각 필드의 고유 ID를 생성하는 것이 좋습니다.',
        },
        {
          id: 18,
          question:
            '컴포넌트 라이브러리를 개발할 때 useId 사용과 관련된 가장 좋은 접근 방식은?',
          options: [
            '라이브러리에서 직접 ID를 생성하고 사용자가 수정할 수 없게 한다',
            'ID 생성을 완전히 사용자에게 맡긴다',
            'useId로 기본 ID를 생성하되, 사용자가 원하는 경우 덮어쓸 수 있게 한다',
            'ID를 전혀 사용하지 않는다',
          ],
          correctAnswer: 2,
          explanation:
            '컴포넌트 라이브러리에서는 useId로 기본 ID를 생성하되, 사용자가 필요한 경우 자신의 ID를 제공할 수 있도록 하는 것이 가장 유연한 접근 방식입니다.',
        },
        {
          id: 19,
          question:
            '다음 중 React의 Concurrent 모드에서 useId의 특징으로 올바른 것은?',
          options: [
            'Concurrent 모드에서는 useId를 사용할 수 없다',
            'useId는 Concurrent 모드와 관계없이 안정적인 ID를 생성한다',
            'Concurrent 모드에서는 useId가 임시 ID를 생성한다',
            'Concurrent 모드에서는 useId의 성능이 저하된다',
          ],
          correctAnswer: 1,
          explanation:
            'useId는 React의 Concurrent 모드와 관계없이 안정적인 ID를 생성합니다. 이는 Concurrent 렌더링이나 일시 중단된 렌더링에서도 일관된 ID를 제공합니다.',
        },
        {
          id: 20,
          question:
            '마이크로프론트엔드 아키텍처에서 useId를 사용할 때 고려해야 할 가장 중요한 점은?',
          options: [
            '모든 마이크로프론트엔드에서 동일한 ID를 사용한다',
            '각 마이크로프론트엔드에 고유한 identifierPrefix를 할당한다',
            'useId 대신 UUID를 사용한다',
            'ID 생성을 메인 애플리케이션에 위임한다',
          ],
          correctAnswer: 1,
          explanation:
            '마이크로프론트엔드 환경에서는 각 애플리케이션에 고유한 identifierPrefix를 할당하여 ID 충돌을 방지하는 것이 중요합니다.',
        },
        {
          id: 21,
          question:
            '테스트 환경에서 useId로 생성된 ID를 처리하는 가장 좋은 방법은?',
          options: [
            '테스트에서 ID를 무시한다',
            '특정 ID 값을 하드코딩한다',
            '정규표현식을 사용하여 ID 패턴을 검증한다',
            '실제 ID 대신 테스트용 더미 ID를 사용한다',
          ],
          correctAnswer: 2,
          explanation:
            '테스트 환경에서는 useId로 생성된 정확한 ID 값을 검증하는 대신, 정규표현식을 사용하여 ID가 예상된 패턴을 따르는지 확인하는 것이 좋습니다.',
        },
      ],
    },
  ],
};
