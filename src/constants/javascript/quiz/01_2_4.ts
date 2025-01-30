import { Quiz } from '@/types/quiz.type';

export const quiz: Quiz = {
  title: 'Bouncing Balls Animation Quiz',
  description:
    'Test your understanding of JavaScript animation and object-oriented programming concepts',
  categories: [
    {
      title: '기본 개념',
      description: 'Canvas API와 애니메이션의 기본 개념을 테스트합니다.',
      questions: [
        {
          id: 1,
          question:
            'Canvas API에서 2D 렌더링 컨텍스트를 가져오는 올바른 방법은?',
          options: [
            "canvas.getContext('2d')",
            "canvas.createContext('2d')",
            "canvas.newContext('2d')",
            "canvas.makeContext('2d')",
          ],
          correctAnswer: 0,
          explanation:
            "Canvas API에서 2D 렌더링 컨텍스트를 가져오기 위해서는 getContext('2d')를 사용합니다.",
        },
        {
          id: 2,
          question: 'Ball 클래스의 생성자에서 받는 매개변수가 아닌 것은?',
          options: ['velX', 'color', 'rotation', 'size'],
          correctAnswer: 2,
          explanation:
            'Ball 클래스의 생성자는 x, y, velX, velY, color, size를 받으며, rotation은 포함되지 않습니다.',
        },
        {
          id: 3,
          question: '공이 화면 경계에 부딪혔을 때 어떤 처리가 이루어지나요?',
          options: [
            '공이 사라진다',
            '속도의 방향이 반대로 바뀐다',
            '색상이 변경된다',
            '크기가 작아진다',
          ],
          correctAnswer: 1,
          explanation:
            '공이 화면 경계에 부딪히면 velX 또는 velY의 부호가 반전되어 방향이 바뀝니다.',
        },
        {
          id: 4,
          question: 'requestAnimationFrame의 주요 장점은 무엇인가요?',
          options: [
            '더 빠른 애니메이션 속도',
            '브라우저의 리페인트 주기에 최적화된 실행',
            '무한 루프 방지',
            '메모리 사용량 감소',
          ],
          correctAnswer: 1,
          explanation:
            'requestAnimationFrame은 브라우저의 리페인트 주기에 맞춰 실행되어 부드러운 애니메이션을 구현할 수 있습니다.',
        },
        {
          id: 5,
          question: '공들의 충돌을 감지하는 데 사용되는 수학적 계산 방식은?',
          options: [
            '맨해튼 거리',
            '유클리드 거리',
            '체비셰프 거리',
            '민코프스키 거리',
          ],
          correctAnswer: 1,
          explanation:
            '두 점 사이의 유클리드 거리(√(dx² + dy²))를 사용하여 공들 간의 충돌을 감지합니다.',
        },
        {
          id: 6,
          question: '애니메이션의 잔상 효과는 어떻게 구현되나요?',
          options: [
            'clearRect() 메서드 사용',
            '투명도가 있는 검정색 사각형으로 덮기',
            '이전 프레임 저장',
            '캔버스 초기화',
          ],
          correctAnswer: 1,
          explanation:
            '매 프레임마다 투명도가 있는 검정색(rgb(0 0 0 / 25%)) 사각형으로 화면을 덮어 잔상 효과를 만듭니다.',
        },
        {
          id: 7,
          question:
            'Ball 클래스의 draw 메서드에서 arc()의 마지막 매개변수 (2 * Math.PI)의 의미는?',
          options: [
            '원의 반지름',
            '원의 지름',
            '원의 시작각',
            '원을 그리는 끝각',
          ],
          correctAnswer: 3,
          explanation:
            '2 * Math.PI는 원을 그리는 끝각으로, 360도(완전한 원)를 의미합니다.',
        },
      ],
    },

    {
      title: '고급 개념과 최적화',
      description: '애니메이션의 고급 기능과 성능 최적화에 대해 테스트합니다.',
      questions: [
        {
          id: 8,
          question:
            '다음 중 Canvas 애니메이션 성능을 최적화하는 방법으로 올바르지 않은 것은?',
          options: [
            '오프스크린 캔버스 사용',
            'requestAnimationFrame 대신 setInterval 사용',
            '캔버스 크기 조절 최소화',
            '불필요한 상태 업데이트 줄이기',
          ],
          correctAnswer: 1,
          explanation:
            'setInterval은 브라우저의 리페인트 주기와 동기화되지 않아 성능이 저하될 수 있으므로, requestAnimationFrame을 사용하는 것이 좋습니다.',
        },
        {
          id: 9,
          question: '공의 충돌 감지를 최적화하기 위한 가장 효과적인 방법은?',
          options: [
            '모든 공을 매번 비교',
            '공간 분할(Spatial Partitioning) 사용',
            '충돌 체크 빈도 줄이기',
            '더 정확한 충돌 계산식 사용',
          ],
          correctAnswer: 1,
          explanation:
            '공간 분할을 사용하면 근처에 있는 공들만 충돌 검사를 하므로 성능을 크게 향상시킬 수 있습니다.',
        },
        {
          id: 10,
          question:
            'Canvas 애니메이션에서 메모리 누수가 발생할 수 있는 경우는?',
          options: [
            '너무 많은 공을 생성할 때',
            '이벤트 리스너를 제거하지 않을 때',
            '캔버스 크기를 자주 변경할 때',
            '충돌 감지를 자주 수행할 때',
          ],
          correctAnswer: 1,
          explanation:
            '이벤트 리스너를 적절히 제거하지 않으면 메모리 누수가 발생할 수 있습니다. 특히 resize 이벤트 등을 사용할 때 주의해야 합니다.',
        },
        {
          id: 11,
          question: 'requestAnimationFrame의 콜백 함수에서 반환해야 할 값은?',
          options: [
            'boolean 값',
            '애니메이션의 상태',
            '다음 프레임 시간',
            '반환값이 필요하지 않음',
          ],
          correctAnswer: 3,
          explanation:
            'requestAnimationFrame의 콜백 함수는 반환값이 필요하지 않습니다. 다음 프레임을 요청하기 위해서는 requestAnimationFrame을 다시 호출해야 합니다.',
        },
        {
          id: 12,
          question: 'Canvas의 scale() 메서드를 사용할 때 주의해야 할 점은?',
          options: [
            '성능에 영향을 주지 않는다',
            '모든 후속 그리기 작업에 영향을 준다',
            '자동으로 리셋된다',
            '메모리 사용량이 증가한다',
          ],
          correctAnswer: 1,
          explanation:
            'scale() 메서드는 호출 이후의 모든 그리기 작업에 영향을 주므로, 필요한 경우 save()와 restore()를 사용하여 상태를 관리해야 합니다.',
        },
        {
          id: 13,
          question:
            '다음 중 공의 물리적 움직임을 더 사실적으로 만들기 위해 추가할 수 있는 속성은?',
          options: ['그림자', '질량과 탄성', '텍스처', '투명도'],
          correctAnswer: 1,
          explanation:
            '질량과 탄성을 추가하면 공들의 충돌과 움직임을 더 사실적으로 시뮬레이션할 수 있습니다.',
        },
        {
          id: 14,
          question:
            'Canvas 애니메이션에서 프레임 속도(FPS)를 제어하는 가장 좋은 방법은?',
          options: [
            'setInterval 사용',
            'setTimeout 사용',
            '시간 기반 애니메이션 사용',
            '프레임 건너뛰기',
          ],
          correctAnswer: 2,
          explanation:
            '시간 기반 애니메이션을 사용하면 기기의 성능에 관계없이 일관된 애니메이션 속도를 유지할 수 있습니다.',
        },
      ],
    },
  ],
};
