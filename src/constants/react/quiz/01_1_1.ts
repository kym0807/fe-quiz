import { Quiz } from '@/types/quiz.type';

export const quiz: Quiz = {
  title: 'useActionState',
  description: 'useActionState React Hook에 대한 이해도를 평가하는 퀴즈입니다.',
  categories: [
    {
      title: '개요',
      description: 'useActionState의 개요와 기본 개념에 관한 질문들입니다.',
      questions: [
        {
          id: 1,
          question: 'useActionState Hook의 주요 기능은 무엇인가요?',
          options: [
            '컴포넌트의 라이프사이클을 관리한다.',
            '폼 액션의 결과에 따라 컴포넌트의 상태를 업데이트한다.',
            '상태 관리를 글로벌하게 처리한다.',
            '비동기 데이터를 캐싱한다.',
          ],
          correctAnswer: 1,
          explanation:
            'useActionState는 폼 액션의 결과를 기반으로 컴포넌트의 상태를 업데이트할 수 있게 해주는 React Hook입니다.',
        },
        {
          id: 2,
          question:
            'useActionState를 사용하기 위해 필요한 첫 번째 매개변수는 무엇인가요?',
          options: ['initialState', 'permalink', '함수(fn)', '컴포넌트 이름'],
          correctAnswer: 2,
          explanation:
            'useActionState의 첫 번째 매개변수는 폼이 제출되거나 버튼이 클릭될 때 호출되는 함수(fn)입니다.',
        },
        {
          id: 3,
          question:
            "useActionState Hook이 제공하는 상태 중 'isPending'의 역할은 무엇인가요?",
          options: [
            '현재 상태값을 저장한다.',
            '폼 제출 결과를 저장한다.',
            '액션의 실행 상태를 나타내는 불리언 값이다.',
            '폼의 고유 URL을 저장한다.',
          ],
          correctAnswer: 2,
          explanation:
            'isPending은 현재 액션의 실행 상태를 나타내는 불리언 값으로, true일 때 액션이 실행 중임을 의미합니다.',
        },
      ],
    },
    {
      title: '주요 특징',
      description: 'useActionState의 주요 특징에 관한 질문들입니다.',
      questions: [
        {
          id: 4,
          question:
            'useActionState Hook을 서버 컴포넌트와 함께 사용할 때의 이점은 무엇인가요?',
          options: [
            '서버 렌더링 속도를 향상시킨다.',
            'JavaScript 번들이 로드되기 전에도 폼 인터랙션이 가능하다.',
            '서버 측 상태 관리를 단순화한다.',
            '폼 데이터를 자동으로 검증한다.',
          ],
          correctAnswer: 1,
          explanation:
            'useActionState는 서버 컴포넌트와 함께 사용할 시 JavaScript 번들이 로드되기 전에도 폼 인터랙션이 가능하게 합니다.',
        },
        {
          id: 5,
          question:
            'useActionState Hook이 제공하는 초기 상태 설정의 특징은 무엇인가요?',
          options: [
            '상태가 자동으로 초기화된다.',
            '상태 초기화는 컴포넌트 언마운트 시에만 적용된다.',
            '초기 상태는 initialState로 설정되며, 첫 액션 호출 이후에는 무시된다.',
            '초기 상태는 항상 빈 객체로 설정된다.',
          ],
          correctAnswer: 2,
          explanation:
            'initialState는 상태의 초기값으로 사용되며, 첫 액션 호출 이후에는 무시됩니다.',
        },
      ],
    },
    {
      title: 'API 상세 설명',
      description: 'useActionState의 API에 관한 상세한 질문들입니다.',
      questions: [
        {
          id: 6,
          question:
            "useActionState Hook의 반환값 중 'formAction'의 역할은 무엇인가요?",
          options: [
            '현재 상태값을 반환한다.',
            '폼의 action prop이나 버튼의 formAction prop으로 전달할 함수를 반환한다.',
            '액션 실행 상태를 반환한다.',
            '폼 데이터를 직렬화하여 반환한다.',
          ],
          correctAnswer: 1,
          explanation:
            'formAction은 폼의 action prop이나 버튼의 formAction prop으로 전달할 함수로, 원본 액션 함수를 useActionState로 래핑한 버전입니다.',
        },
        {
          id: 7,
          question:
            "useActionState Hook에서 'permalink' 매개변수의 용도는 무엇인가요?",
          options: [
            '폼의 초기 데이터를 설정하기 위해',
            '폼이 수정하는 페이지의 고유 URL을 지정하기 위해',
            '액션 함수의 반환값을 지정하기 위해',
            '상태 업데이트 주기를 설정하기 위해',
          ],
          correctAnswer: 1,
          explanation:
            'permalink는 폼이 수정하는 페이지의 고유 URL로, 동적 컨텐츠가 있는 페이지에서 프로그레시브 인핸스먼트를 위해 사용됩니다.',
        },
        {
          id: 8,
          question:
            'useActionState Hook을 사용하여 상태를 업데이트할 때, 액션 함수는 어떤 값을 반환해야 하나요?',
          options: [
            '새로운 상태값',
            '폼 데이터를 포함한 객체',
            '불리언 값',
            '오류 메시지',
          ],
          correctAnswer: 0,
          explanation: '액션 함수는 새로운 상태가 될 값을 반환해야 합니다.',
        },
      ],
    },
  ],
};
