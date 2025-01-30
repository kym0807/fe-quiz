import { Quiz } from '@/types/quiz.type';

export const quiz: Quiz = {
  title: 'React useDebugValue Hook 마스터하기',
  description:
    'useDebugValue Hook의 목적과 활용법에 대한 이해도를 테스트해보세요.',
  categories: [
    {
      title: '기본 개념',
      description: 'useDebugValue Hook의 기본적인 개념과 목적을 테스트합니다',
      questions: [
        {
          id: 1,
          question: 'useDebugValue Hook의 주요 목적은 무엇인가요?',
          options: [
            'Hook의 성능을 향상시킨다',
            'React DevTools에서 커스텀 Hook에 라벨을 추가한다',
            '컴포넌트의 렌더링을 최적화한다',
            '상태 업데이트를 디버깅한다',
          ],
          correctAnswer: 1,
          explanation:
            'useDebugValue는 React DevTools에서 커스텀 Hook의 디버그 정보를 더 읽기 쉽게 표시할 수 있게 해주는 Hook입니다. 이는 개발 과정에서의 디버깅을 돕기 위한 것입니다.',
        },
        {
          id: 2,
          question: 'useDebugValue의 영향 범위는?',
          options: [
            '개발 모드와 프로덕션 모드 모두에 영향을 준다',
            '개발 모드에서만 영향을 미친다',
            '프로덕션 모드에서만 영향을 미친다',
            'Node.js 환경에서만 영향을 미친다',
          ],
          correctAnswer: 1,
          explanation:
            'useDebugValue는 개발 모드에서만 영향을 미치며, 프로덕션 빌드에는 영향을 주지 않습니다. 이는 개발 시의 디버깅 경험을 개선하는 것이 목적이기 때문입니다.',
        },
      ],
    },
    {
      title: '사용법과 구현',
      description: 'useDebugValue의 실제 사용법과 구현 방법을 테스트합니다',
      questions: [
        {
          id: 3,
          question: `다음 코드의 결과로 DevTools에 표시될 내용은?
\`\`\`tsx
function useOnlineStatus() {
  const isOnline = useSyncExternalStore(
    subscribe,
    () => navigator.onLine,
    () => true
  );
  useDebugValue(isOnline ? 'Online' : 'Offline');
  return isOnline;
}
\`\`\``,
          options: [
            'true 또는 false',
            'Online 또는 Offline',
            'navigator.onLine의 값',
            'undefined',
          ],
          correctAnswer: 1,
          explanation:
            "useDebugValue에 전달된 조건부 표현식에 따라 DevTools에는 'Online' 또는 'Offline'이 표시됩니다. 이는 불리언 값보다 더 읽기 쉬운 형태로 상태를 표시합니다.",
        },
        {
          id: 4,
          question: 'useDebugValue의 두 번째 매개변수(포맷팅 함수)의 용도는?',
          options: [
            '반환된 값의 타입을 변환한다',
            '디버그 값을 저장한다',
            '무거운 포맷팅 작업을 지연시킨다',
            '컴포넌트를 최적화한다',
          ],
          correctAnswer: 2,
          explanation:
            '포맷팅 함수는 DevTools에서 컴포넌트를 실제로 검사할 때만 호출됩니다. 이를 통해 무거운 포맷팅 작업을 필요한 시점까지 지연시킬 수 있습니다.',
        },
      ],
    },
    {
      title: '모범 사례와 패턴',
      description:
        'useDebugValue의 효과적인 사용 패턴과 모범 사례를 테스트합니다',
      questions: [
        {
          id: 5,
          question: '다음 중 useDebugValue를 사용하기에 가장 적합한 경우는?',
          options: [
            '모든 커스텀 Hook에서',
            '간단한 상태 관리 Hook에서',
            '복잡한 내부 데이터 구조를 가진 공유 라이브러리용 Hook에서',
            '컴포넌트 내부의 일반 함수에서',
          ],
          correctAnswer: 2,
          explanation:
            'useDebugValue는 복잡한 내부 데이터 구조를 가진 공유 라이브러리용 Hook에서 가장 유용합니다. 모든 Hook에 추가할 필요는 없으며, 디버깅이 특히 중요한 경우에 사용하는 것이 좋습니다.',
        },
        {
          id: 6,
          question: `다음 코드의 문제점은?
\`\`\`tsx
function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  useDebugValue(value, val => {
    // 무거운 문자열 처리 작업
    return expensiveStringProcessing(val);
  });
  return [value, setValue];
}
\`\`\``,
          options: [
            'useDebugValue가 잘못된 위치에 있다',
            '포맷팅 함수가 필요하지 않은 경우다',
            'useState와 함께 사용할 수 없다',
            '초기값이 잘못 전달되었다',
          ],
          correctAnswer: 1,
          explanation:
            '단순한 값의 경우 포맷팅 함수가 필요하지 않습니다. 무거운 처리가 필요하지 않은 경우에는 직접 값을 전달하는 것이 더 간단하고 명확합니다.',
        },
      ],
    },
  ],
};
