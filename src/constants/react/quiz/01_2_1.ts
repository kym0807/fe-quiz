import { Quiz } from '@/types/quiz.type';

export const quiz: Quiz = {
  title: 'Fragment 퀴즈',
  description: 'React Fragment에 대한 이해도를 검증하는 퀴즈입니다.',
  categories: [
    {
      title: '기본 개념',
      description: 'Fragment의 개념 및 특징에 대한 질문들',
      questions: [
        {
          id: 1,
          question: 'Fragment의 주된 역할은 무엇인가?',
          options: [
            'DOM에 추가적인 래퍼 노드를 삽입하지 않고 여러 자식 요소를 그룹화한다.',
            '상태 업데이트를 최적화한다.',
            '스타일링을 위해 CSS 클래스를 병합한다.',
            '이벤트 처리를 단순화한다.',
          ],
          correctAnswer: 0,
          explanation:
            'Fragment는 DOM에 불필요한 래퍼 요소를 추가하지 않고도 여러 자식 요소를 하나로 묶을 수 있는 React 컴포넌트이다.',
        },
        {
          id: 2,
          question: 'Fragment를 사용할 때 DOM에 추가되는 실제 요소는 무엇인가?',
          options: [
            '<div> 태그',
            '<span> 태그',
            '아무런 추가 요소도 없다',
            '<section> 태그',
          ],
          correctAnswer: 2,
          explanation:
            'Fragment는 렌더링 결과로 별도의 DOM 노드를 생성하지 않는다.',
        },
      ],
    },
    {
      title: '사용 문법',
      description: 'Fragment의 다양한 사용법과 문법에 대한 질문들',
      questions: [
        {
          id: 3,
          question: '축약형 Fragment 문법으로 옳은 것은?',
          options: [
            '```<Fragment>...</Fragment>```',
            '```<React.Fragment>...</React.Fragment>```',
            '```<>...</>```',
            '```<Frag>...</Frag>```',
          ],
          correctAnswer: 2,
          explanation:
            'Fragment는 축약형 문법으로 ```<>...</>```를 사용할 수 있다.',
        },
        {
          id: 4,
          question:
            '명시적인 Fragment 컴포넌트를 사용하려면 react에서 어떤 것을 import해야 하는가?',
          options: [
            "import { Fragment } from 'react'",
            "import Fragment from 'react-fragment'",
            "import { useFragment } from 'react'",
            'Fragment를 따로 import할 필요가 없다.',
          ],
          correctAnswer: 0,
          explanation:
            "명시적인 Fragment는 ```import { Fragment } from 'react';``` 를 통해 가져올 수 있다.",
        },
      ],
    },
    {
      title: 'key 속성과 리스트 렌더링',
      description: 'Fragment에 key를 부여하는 상황과 관련된 질문들',
      questions: [
        {
          id: 5,
          question:
            '리스트 렌더링 시 Fragment에 key를 할당하려면 어떤 문법을 사용해야 하는가?',
          options: [
            '```<>...</>``` 축약 문법을 사용',
            '명시적인 ```<Fragment>...</Fragment>``` 문법을 사용',
            'key 속성을 사용할 수 없다.',
            '자식 컴포넌트에 key를 전달하면 Fragment는 필요없다.',
          ],
          correctAnswer: 1,
          explanation:
            'Fragment에 key를 전달하려면 ```<Fragment key={...}>...</Fragment>``` 형태로 명시적인 문법을 사용해야 한다. 축약형에서는 key를 지정할 수 없다.',
        },
        {
          id: 6,
          question: '다음 중 Fragment에 key를 할당해야 하는 경우는?',
          options: [
            '별도의 리스트 렌더링 없이 단순히 여러 요소를 그룹화할 때',
            '조건부 렌더링 시에',
            '반복되는 리스트를 렌더링하며, 각 반복되는 블록을 Fragment로 감쌀 때',
            '하나의 자식만 렌더링할 때',
          ],
          correctAnswer: 2,
          explanation:
            '리스트 렌더링에서 각 아이템을 Fragment로 그룹화할 때는 key를 이용해 React가 각 아이템을 식별할 수 있도록 해야 한다.',
        },
      ],
    },
    {
      title: '고급 사용 패턴',
      description: 'Fragment를 활용한 다양한 패턴에 대한 질문들',
      questions: [
        {
          id: 7,
          question:
            'Fragment를 사용하여 여러 요소를 하나의 변수에 할당하는 주된 이점은?',
          options: [
            '변수 할당 시 DOM 노드가 즉시 생성된다.',
            '여러 요소를 하나의 컴포넌트처럼 재사용할 수 있게 한다.',
            '리렌더링 횟수를 줄여 성능을 향상시킨다.',
            'useState나 useEffect 훅을 자동으로 연결한다.',
          ],
          correctAnswer: 1,
          explanation:
            'Fragment를 통해 여러 요소를 하나의 변수에 할당하면, 해당 변수를 다른 컴포넌트에 props로 전달하는 등 재사용성을 높일 수 있다.',
        },
        {
          id: 8,
          question:
            '축약형 Fragment(`<>...</>`)과 명시적인 Fragment(`<Fragment>...</Fragment>`) 사이의 주요 차이는 무엇인가?',
          options: [
            '축약형 Fragment는 key 속성을 설정할 수 없지만, 명시적인 Fragment는 key 속성을 설정할 수 있다.',
            '축약형 Fragment는 DOM 노드를 생성하지만 명시적인 Fragment는 생성하지 않는다.',
            '축약형 Fragment는 React 버전 18 이상에서만 지원된다.',
            '명시적인 Fragment는 성능상 이점이 있다.',
          ],
          correctAnswer: 0,
          explanation:
            '축약형 Fragment는 key 속성을 지원하지 않고, 명시적인 Fragment는 key를 전달할 수 있다.',
        },
      ],
    },
    {
      title: '주의사항',
      description:
        'Fragment 사용 시 발생할 수 있는 문제 및 주의사항에 대한 질문들',
      questions: [
        {
          id: 9,
          question: '중첩된 Fragment를 사용할 때 주의할 점은?',
          options: [
            '중첩된 Fragment는 DOM에 중첩된 div 태그를 생성한다.',
            '중첩된 Fragment 사이에서 상태가 초기화될 수 있다.',
            '중첩된 Fragment 사용은 성능을 저하시킨다.',
            '중첩된 Fragment는 key 속성을 가질 수 없다.',
          ],
          correctAnswer: 1,
          explanation:
            '중첩된 Fragment가 있을 때 특정 상황에서 상태가 의도치 않게 초기화될 수 있으므로 주의해야 한다.',
        },
        {
          id: 10,
          question:
            'Fragment를 사용했음에도 key를 지정해야 하는 상황은 어떤 경우인가?',
          options: [
            'Fragment에 하나의 자식만 있을 때',
            '렌더링 결과가 static할 때',
            '반복되는 리스트 아이템을 Fragment로 감쌀 때',
            'key를 전혀 사용하지 않아도 된다.',
          ],
          correctAnswer: 2,
          explanation:
            '반복되는 리스트 아이템을 감쌀 때 React는 각 아이템을 구분하기 위해 key가 필요하다. Fragment를 사용할 경우에도 명시적인 Fragment 형태를 사용하여 key를 제공해야 한다.',
        },
      ],
    },
  ],
};
