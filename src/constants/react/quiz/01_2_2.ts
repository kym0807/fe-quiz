import { Quiz } from '@/types/quiz.type';

export const quiz: Quiz = {
  title: 'Profiler 퀴즈',
  description: 'React Profiler 컴포넌트에 대한 이해도를 검증하는 퀴즈입니다.',
  categories: [
    {
      title: '기본 개념',
      description: 'Profiler의 기본 동작 원리와 사용 방법을 묻는 질문들',
      questions: [
        {
          id: 1,
          question:
            'React의 Profiler 컴포넌트는 주로 어떤 목적을 위해 사용되는가?',
          options: [
            'DOM 요소에 직접 스타일을 적용하기 위해',
            '상태 관리 로직을 단순화하기 위해',
            '렌더링 성능을 프로그래밍 방식으로 측정하기 위해',
            '서버 사이드 렌더링 시 보안 강화를 위해',
          ],
          correctAnswer: 2,
          explanation:
            'Profiler는 React 컴포넌트 트리의 렌더링 성능을 측정하고 분석하기 위한 도구이다.',
        },
        {
          id: 2,
          question:
            'Profiler를 사용할 때 필수로 지정해야 하는 두 가지 prop은 무엇인가?',
          options: [
            'id와 onUpdate',
            'key와 ref',
            'id와 onRender',
            'name과 onCommit',
          ],
          correctAnswer: 2,
          explanation:
            "Profiler 컴포넌트는 'id'와 'onRender' 콜백 함수 두 가지 prop이 필수이다.",
        },
      ],
    },
    {
      title: 'onRender 콜백',
      description:
        'onRender 콜백 함수에 전달되는 매개변수와 그 의미를 묻는 질문들',
      questions: [
        {
          id: 3,
          question:
            "onRender 콜백 함수가 호출될 때 전달되는 'phase' 매개변수는 무엇을 의미하는가?",
          options: [
            'Profiler 트리가 처음 마운트되었는지 혹은 업데이트되었는지를 나타내는 값',
            '배포 환경(개발, 프로덕션)을 나타내는 값',
            '렌더링에 사용된 CPU 코어 수',
            'React가 사용하는 내부 알고리즘의 버전',
          ],
          correctAnswer: 0,
          explanation:
            "phase 값은 'mount' 또는 'update'로 전달되어 Profiler 트리가 처음 마운트된 것인지, 이후 업데이트로 인해 다시 렌더링된 것인지를 나타낸다.",
        },
        {
          id: 4,
          question:
            "onRender 콜백에 전달되는 'actualDuration' 값은 무엇을 나타내는가?",
          options: [
            '현재 업데이트에서 Profiler 하위 트리를 렌더링하는데 걸린 시간(밀리초)',
            '전체 애플리케이션 렌더링에 걸린 시간',
            '네트워크 요청 대기 시간',
            '이전 업데이트와 비교했을 때의 상대적 변경 시간',
          ],
          correctAnswer: 0,
          explanation:
            'actualDuration은 현재 업데이트에서 Profiler 트리 내 컴포넌트를 렌더링하는 데 걸린 실제 시간(밀리초)이다.',
        },
      ],
    },
    {
      title: '활용 예',
      description:
        'Profiler를 실제 애플리케이션에 어떻게 활용할 수 있는지에 대한 질문들',
      questions: [
        {
          id: 5,
          question:
            '하나의 애플리케이션 내에서 Profiler를 여러 번 사용할 수 있는가?',
          options: [
            '아니오, 하나의 Profiler만 사용할 수 있다.',
            '예, 여러 Profiler를 중첩하거나 나란히 배치하여 애플리케이션의 다른 부분들을 측정할 수 있다.',
            '하나 이상 사용할 수 있지만, 중첩은 불가능하다.',
            'SSR에서만 여러 Profiler를 사용할 수 있다.',
          ],
          correctAnswer: 1,
          explanation:
            'Profiler는 여러 번 사용할 수 있으며, 중첩 사용도 가능하다. 이를 통해 애플리케이션의 특정 부분만 선택적으로 측정할 수 있다.',
        },
        {
          id: 6,
          question:
            'Profiler는 프로덕션 빌드에서 기본적으로 어떻게 동작하는가?',
          options: [
            '기본적으로 활성화되어 모든 렌더링 성능을 측정한다.',
            '기본적으로 비활성화되며, 특별한 프로덕션 빌드 설정을 통해 활성화할 수 있다.',
            '개발 모드와 동일하게 동작한다.',
            'Profiler는 프로덕션 빌드에서 사용할 수 없다.',
          ],
          correctAnswer: 1,
          explanation:
            'Profiler는 프로덕션 빌드에서 기본적으로 비활성화되며, 프로파일링이 활성화된 프로덕션 빌드를 통해 사용할 수 있다.',
        },
      ],
    },
    {
      title: '성능 고려사항',
      description: 'Profiler 사용 시 성능 및 오버헤드에 관한 질문들',
      questions: [
        {
          id: 7,
          question:
            'Profiler를 사용하면 애플리케이션에 어떤 영향이 있을 수 있는가?',
          options: [
            '아무런 오버헤드 없이 성능이 늘 최적화된다.',
            '약간의 CPU와 메모리 오버헤드를 추가한다.',
            '네트워크 사용량을 줄여준다.',
            '모든 렌더링을 비동기로 전환한다.',
          ],
          correctAnswer: 1,
          explanation:
            'Profiler를 사용하면 성능 측정을 위해 추가적인 연산이 필요하므로 CPU와 메모리 오버헤드가 증가할 수 있다.',
        },
        {
          id: 8,
          question:
            '프로파일링에 특화된 프로덕션 빌드를 사용하지 않고도 성능을 측정하려면 무엇을 사용할 수 있는가?',
          options: [
            'React Developer Tools의 Profiler 탭',
            'useMemo Hook',
            '서버 사이드 렌더링',
            'Service Worker',
          ],
          correctAnswer: 0,
          explanation:
            'React Developer Tools의 Profiler 탭을 사용하면 브라우저 확장프로그램을 통해 대화형으로 성능 측정을 할 수 있다.',
        },
      ],
    },
    {
      title: '일반적인 문제 해결',
      description:
        'Profiler 사용 시 발생할 수 있는 문제와 해결 방법에 대한 질문들',
      questions: [
        {
          id: 9,
          question:
            'Profiler를 사용하여 특정 컴포넌트 트리의 렌더링 문제를 진단하려 할 때, 가장 효과적인 전략은 무엇인가?',
          options: [
            '최상위에서 전체 앱에 한 번만 Profiler를 적용',
            '문제가 의심되는 부분 주변에 Profiler를 배치하여 해당 부분만 집중적으로 측정',
            'Profiler를 무작위 위치에 삽입',
            'Profiler without onRender callback 사용',
          ],
          correctAnswer: 1,
          explanation:
            '문제가 있는 것으로 의심되는 부분 주변에 Profiler를 배치하면 해당 부분 렌더링 성능 문제를 집중적으로 파악할 수 있다.',
        },
        {
          id: 10,
          question:
            'Profiler에서 onRender 콜백을 구현했으나 콜백이 전혀 호출되지 않는 경우 어떤 가능성을 의심할 수 있는가?',
          options: [
            '해당 Profiler 내부에 렌더링이 전혀 발생하지 않았을 수 있다.',
            'onRender 함수가 프리미티브 값이 아니어서',
            'Profiler id가 숫자여서',
            'React 버전이 Profiler를 지원하지 않아서',
          ],
          correctAnswer: 0,
          explanation:
            'onRender 콜백은 Profiler 하위 트리가 마운트되거나 업데이트될 때 호출된다. 만약 이 트리에 렌더링 업데이트가 없었다면 콜백은 호출되지 않는다.',
        },
      ],
    },
  ],
};
