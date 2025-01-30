import { Quiz } from '@/types/quiz.type';

export const quiz: Quiz = {
  title: 'React createPortal 완벽 이해하기',
  description: 'React의 createPortal의 개념부터 고급 활용까지 테스트해보세요',
  categories: [
    {
      title: '기본 개념',
      description: 'createPortal의 기본적인 개념과 특징을 테스트합니다',
      questions: [
        {
          id: 1,
          question: 'createPortal의 가장 기본적인 목적은 무엇인가요?',
          options: [
            'DOM 노드를 생성하는 것',
            'React 컴포넌트를 DOM 트리의 다른 위치에 렌더링하는 것',
            'Virtual DOM을 최적화하는 것',
            '이벤트 버블링을 제어하는 것',
          ],
          correctAnswer: 1,
          explanation:
            'createPortal은 React 컴포넌트를 DOM 계층 구조상 다른 위치에 렌더링할 수 있게 해주는 함수입니다.',
        },
        {
          id: 2,
          question: 'createPortal 함수의 올바른 매개변수 순서는 무엇인가요?',
          options: [
            'createPortal(domNode, children)',
            'createPortal(key, children, domNode)',
            'createPortal(children, domNode, key?)',
            'createPortal(domNode, key, children)',
          ],
          correctAnswer: 2,
          explanation:
            'createPortal 함수는 children, domNode를 필수 매개변수로 받고, key는 선택적 매개변수입니다.',
        },
        {
          id: 3,
          question:
            "다음 코드에서 Portal을 사용한 p 태그는 실제로 어디에 렌더링 되나요?\n```tsx\nfunction MyComponent() {\n  return (\n    <div className='border-2 border-black'>\n      <p>이 자식은 부모 div 안에 위치합니다.</p>\n      {createPortal(\n        <p>이 자식은 어디에 위치할까요?</p>,\n        document.body\n      )}\n    </div>\n  );\n}\n```",
          options: [
            'border-2 border-black 클래스를 가진 div 내부',
            'document.body 바로 아래',
            'root div 내부',
            'Virtual DOM 내부',
          ],
          correctAnswer: 1,
          explanation:
            'createPortal의 두 번째 인자로 document.body를 전달했으므로, 해당 p 태그는 document.body 바로 아래에 렌더링됩니다.',
        },
        {
          id: 4,
          question:
            'createPortal을 사용할 때 이벤트 버블링은 어떻게 동작하나요?',
          options: [
            '실제 DOM 트리를 따라 버블링됩니다',
            'React 트리를 따라 버블링됩니다',
            '이벤트 버블링이 발생하지 않습니다',
            'Portal이 위치한 곳에서만 이벤트가 발생합니다',
          ],
          correctAnswer: 1,
          explanation:
            'Portal은 DOM 노드의 물리적 위치만 변경하며, React 트리에서의 이벤트 버블링은 그대로 유지됩니다.',
        },
        {
          id: 5,
          question: 'React Context는 Portal을 사용할 때 어떻게 동작하나요?',
          options: [
            'Portal이 렌더링된 위치의 Context를 사용합니다',
            '원래 컴포넌트 위치의 Context를 사용합니다',
            'Context가 전달되지 않습니다',
            '새로운 Context가 생성됩니다',
          ],
          correctAnswer: 1,
          explanation:
            'Portal은 DOM 위치만 변경할 뿐, React 트리에서의 Context 등의 동작은 그대로 유지됩니다.',
        },
        {
          id: 6,
          question:
            'createPortal을 사용할 때 key prop은 어떤 경우에 필요한가요?',
          options: [
            '모든 경우에 필요합니다',
            '여러 Portal을 동일한 컨테이너에 렌더링할 때',
            '이벤트 버블링을 제어할 때',
            'CSS 스타일링을 적용할 때',
          ],
          correctAnswer: 1,
          explanation:
            'key prop은 동일한 컨테이너에 여러 Portal을 렌더링할 때 각 Portal을 구분하기 위해 사용됩니다.',
        },
        {
          id: 7,
          question:
            'createPortal을 사용하면 React DevTools에서는 컴포넌트가 어떻게 표시되나요?',
          options: [
            '실제 DOM 위치에 표시됩니다',
            'React 컴포넌트 트리의 원래 위치에 표시됩니다',
            'Portal 노드로 표시됩니다',
            '표시되지 않습니다',
          ],
          correctAnswer: 1,
          explanation:
            'React DevTools에서는 Portal을 사용하더라도 컴포넌트가 React 트리의 원래 위치에 표시됩니다.',
        },
      ],
    },

    {
      title: '실전 활용',
      description: 'createPortal의 실제 사용 사례와 구현 방법을 테스트합니다',
      questions: [
        {
          id: 8,
          question:
            "다음 모달 컴포넌트 코드에서 isOpen이 false일 때 return null을 하는 이유는 무엇인가요?\ntsx\nfunction Modal({ isOpen, onClose, children }) {\n  if (!isOpen) return null;\n  return createPortal(\n    <div className='modal-content'>{children}</div>,\n    document.body\n  );\n}\n",
          options: [
            '메모리 누수를 방지하기 위해',
            'Portal이 항상 DOM에 마운트된 상태를 유지하기 위해',
            '불필요한 렌더링을 방지하고 DOM에서 모달을 완전히 제거하기 위해',
            '이벤트 리스너를 정리하기 위해',
          ],
          correctAnswer: 2,
          explanation:
            'isOpen이 false일 때 null을 반환함으로써 모달 컴포넌트가 언마운트되어 DOM에서 완전히 제거되고, 불필요한 렌더링을 방지할 수 있습니다.',
        },
        {
          id: 9,
          question:
            'createPortal을 사용한 모달에서 overflow: hidden이 적용된 부모 요소의 영향을 받지 않는 이유는 무엇인가요?',
          options: [
            'createPortal이 CSS 상속을 차단하기 때문에',
            '모달이 실제로 document.body에 렌더링되어 부모의 CSS 제약에서 벗어나기 때문에',
            'React가 자동으로 모달의 스타일을 재정의하기 때문에',
            '브라우저가 모달 컨텐츠의 스타일을 특별하게 처리하기 때문에',
          ],
          correctAnswer: 1,
          explanation:
            'createPortal을 사용하면 컴포넌트가 실제로 document.body와 같은 다른 DOM 노드에 렌더링되므로, 원래 부모 요소의 CSS 제약(overflow: hidden 등)에서 벗어날 수 있습니다.',
        },
        {
          id: 10,
          question:
            '외부 맵 라이브러리와 통합할 때 createPortal을 사용하는 주된 이유는 무엇인가요?',
          options: [
            '맵 라이브러리의 성능을 향상시키기 위해',
            '맵 위에 React 컴포넌트로 만든 커스텀 UI를 오버레이하기 위해',
            '맵 라이브러리의 이벤트 시스템과 통합하기 위해',
            '맵의 크기를 동적으로 조절하기 위해',
          ],
          correctAnswer: 1,
          explanation:
            'createPortal을 사용하면 React로 만든 커스텀 UI(팝업, 마커 등)를 맵 라이브러리가 제공하는 특정 컨테이너에 직접 렌더링할 수 있습니다.',
        },
        {
          id: 11,
          question:
            '비React 서버 마크업에 React 컴포넌트를 통합할 때 주의해야 할 점은 무엇인가요?',
          options: [
            '서버 마크업의 ID가 고유해야 하며, 해당 요소가 반드시 존재해야 합니다',
            '서버 마크업을 수정할 수 없습니다',
            'React 컴포넌트의 크기가 제한됩니다',
            '서버 마크업의 스타일이 무시됩니다',
          ],
          correctAnswer: 0,
          explanation:
            'createPortal의 두 번째 인자로 전달되는 DOM 노드가 반드시 존재해야 하며, 여러 Portal을 사용할 경우 각 타겟 요소의 ID가 고유해야 합니다.',
        },
        {
          id: 12,
          question:
            '다음 중 모달 구현 시 접근성(A11y)을 위해 고려해야 할 사항이 아닌 것은?',
          options: [
            'WAI-ARIA 역할(role) 및 속성 추가',
            '키보드 포커스 관리',
            '모달이 열릴 때 배경 스크롤 방지',
            '모달 내용의 폰트 크기 증가',
          ],
          correctAnswer: 3,
          explanation:
            '모달의 접근성을 위해서는 적절한 ARIA 속성 추가, 키보드 포커스 관리, 배경 스크롤 방지 등이 필요하지만, 폰트 크기는 접근성의 핵심 요구사항이 아닙니다.',
        },
        {
          id: 13,
          question:
            'createPortal을 사용할 때 성능 최적화를 위해 고려해야 할 사항은 무엇인가요?',
          options: [
            '가능한 많은 컴포넌트를 Portal로 렌더링하기',
            '모든 Portal을 document.body에 렌더링하기',
            '필요한 경우에만 Portal을 사용하고, 불필요한 Portal 사용 피하기',
            'Portal 내부에 상태 관리 로직 포함하기',
          ],
          correctAnswer: 2,
          explanation:
            'Portal을 사용하더라도 React의 가상 DOM 조정 과정은 그대로 발생하므로, 실제로 필요한 경우(모달, 툴팁 등)에만 사용하는 것이 성능상 좋습니다.',
        },
        {
          id: 14,
          question:
            'createPortal을 사용하는 컴포넌트에서 useEffect를 사용할 때 주의해야 할 점은 무엇인가요?',
          options: [
            'useEffect를 사용할 수 없습니다',
            'cleanup 함수를 반드시 제공해야 합니다',
            'Portal이 언마운트될 때 관련 리소스와 이벤트 리스너를 정리해야 합니다',
            'useEffect 대신 useLayoutEffect를 사용해야 합니다',
          ],
          correctAnswer: 2,
          explanation:
            'Portal 컴포넌트가 언마운트될 때 메모리 누수를 방지하기 위해 useEffect의 cleanup 함수에서 이벤트 리스너나 외부 리소스를 적절히 정리해야 합니다.',
        },
        {
          id: 15,
          question:
            'createPortal을 사용하여 렌더링된 컴포넌트의 스타일링에 대한 설명으로 올바른 것은?',
          options: [
            '원래 부모 컴포넌트의 스타일만 적용됩니다',
            'Portal이 렌더링된 위치의 스타일만 적용됩니다',
            '스타일을 전혀 적용할 수 없습니다',
            '컴포넌트에 직접 적용된 스타일은 유지되며, Portal이 렌더링된 위치의 컨텍스트에 따라 추가 스타일이 적용될 수 있습니다',
          ],
          correctAnswer: 3,
          explanation:
            'Portal로 렌더링된 컴포넌트는 자체적으로 정의된 스타일을 유지하며, 렌더링되는 새로운 위치의 CSS 컨텍스트의 영향을 받을 수 있습니다.',
        },
      ],
    },

    {
      title: '고급 개념 및 통합',
      description:
        'createPortal의 고급 활용과 다른 개념들과의 통합을 테스트합니다',
      questions: [
        {
          id: 16,
          question:
            'React.lazy()와 createPortal을 함께 사용할 때의 장점은 무엇인가요?',
          options: [
            'Portal의 성능이 향상됩니다',
            '모달이나 팝업의 코드를 필요할 때만 로드하여 초기 번들 크기를 줄일 수 있습니다',
            '이벤트 버블링이 최적화됩니다',
            '서버 사이드 렌더링이 개선됩니다',
          ],
          correctAnswer: 1,
          explanation:
            'React.lazy()와 createPortal을 함께 사용하면, 모달과 같은 Portal 컴포넌트를 필요할 때만 동적으로 로드할 수 있어 초기 번들 크기를 최적화할 수 있습니다.',
        },
        {
          id: 17,
          question:
            'React 18의 Concurrent Mode에서 createPortal을 사용할 때 고려해야 할 사항은 무엇인가요?',
          options: [
            'createPortal은 Concurrent Mode에서 사용할 수 없습니다',
            'Suspense로 Portal 컴포넌트를 감싸야 합니다',
            'Portal의 렌더링 우선순위가 자동으로 조정됩니다',
            '이벤트 위임(Event Delegation)이 비활성화됩니다',
          ],
          correctAnswer: 2,
          explanation:
            'Concurrent Mode에서 Portal도 다른 React 컴포넌트처럼 렌더링 우선순위가 자동으로 조정되어 관리됩니다.',
        },
        {
          id: 18,
          question:
            'SSR(Server-Side Rendering)환경에서 createPortal을 사용할 때 발생할 수 있는 문제는 무엇인가요?',
          options: [
            'Portal을 사용할 수 없습니다',
            '서버에서는 document.body가 존재하지 않아 하이드레이션 에러가 발생할 수 있습니다',
            '성능이 크게 저하됩니다',
            '스타일이 적용되지 않습니다',
          ],
          correctAnswer: 1,
          explanation:
            'SSR 환경에서는 document.body와 같은 DOM 요소가 존재하지 않기 때문에, 적절한 조건부 렌더링이나 useEffect를 사용하여 클라이언트 사이드에서만 Portal이 생성되도록 해야 합니다.',
        },
        {
          id: 19,
          question:
            'createPortal을 사용하는 컴포넌트에서 React.memo를 사용할 때의 영향은 무엇인가요?',
          options: [
            'Portal의 성능이 크게 향상됩니다',
            'memo가 적용되지 않습니다',
            '일반 컴포넌트와 동일하게 props 비교를 통한 리렌더링 최적화가 가능합니다',
            'memo 대신 useMemo를 사용해야 합니다',
          ],
          correctAnswer: 2,
          explanation:
            'createPortal을 사용하는 컴포넌트도 일반 React 컴포넌트처럼 React.memo를 통해 props 비교 기반의 리렌더링 최적화가 가능합니다.',
        },
        {
          id: 20,
          question:
            '다음 중 createPortal의 메모리 누수를 방지하기 위한 최선의 방법은 무엇인가요?',
          options: [
            'Portal을 사용하지 않는다',
            'useEffect의 cleanup 함수에서 Portal의 대상 노드를 제거한다',
            '컴포넌트 언마운트 시 이벤트 리스너를 제거하고 Portal이 사용한 리소스를 정리한다',
            '모든 Portal을 document.body에 렌더링한다',
          ],
          correctAnswer: 2,
          explanation:
            '메모리 누수를 방지하기 위해서는 컴포넌트가 언마운트될 때 Portal이 사용한 이벤트 리스너와 리소스를 적절히 정리해야 합니다.',
        },
      ],
    },
  ],
};
