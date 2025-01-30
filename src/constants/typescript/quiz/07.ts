import { Quiz } from '@/types/quiz.type';

export const calsslQuiz: Quiz = {
  title: 'TypeScript 클래스 마스터하기',
  description:
    'TypeScript 클래스의 기본 개념부터 고급 기능까지 전반적인 이해를 테스트합니다.',
  categories: [
    {
      title: '클래스 기본과 멤버',
      description: '클래스의 기본 구조와 멤버 선언에 대해 테스트합니다.',
      questions: [
        {
          id: 1,
          question:
            '다음 중 TypeScript 클래스의 strictPropertyInitialization 규칙을 만족하는 코드는?',
          options: [
            `class User { name: string; }`,
            `class User { name: string | undefined; }`,
            `class User { name!: string; }`,
            `class User { name: string = ""; }`,
          ],
          correctAnswer: 3,
          explanation:
            'strictPropertyInitialization을 만족하려면 속성을 선언할 때 초기값을 할당하거나, 생성자에서 확실히 초기화해야 합니다. 여기서는 name에 빈 문자열을 할당하여 초기화하고 있습니다.',
        },
        {
          id: 2,
          question:
            'readonly 수정자가 적용된 클래스 멤버에 대한 설명으로 올바른 것은?',
          options: [
            '생성자에서도 값을 변경할 수 없다',
            '값을 한 번만 할당할 수 있으며, 생성자에서만 변경 가능하다',
            'private 멤버에는 적용할 수 없다',
            'get 접근자와 함께 사용할 수 없다',
          ],
          correctAnswer: 1,
          explanation:
            'readonly 속성은 선언 시점이나 생성자에서만 값을 할당할 수 있으며, 이후에는 변경이 불가능합니다. private 멤버나 get 접근자와도 함께 사용할 수 있습니다.',
        },
      ],
    },
    {
      title: '접근 제어자와 정적 멤버',
      description: '클래스의 접근 제어자와 정적 멤버 사용법을 테스트합니다.',
      questions: [
        {
          id: 3,
          question:
            'TypeScript의 private과 JavaScript의 private 필드(#) 차이점으로 올바른 것은?',
          options: [
            'TypeScript의 private은 컴파일 후에도 유지된다',
            'JavaScript의 private은 런타임에 강제되지 않는다',
            'TypeScript의 private은 상속된 클래스에서 접근할 수 있다',
            'TypeScript의 private은 타입 체크 시에만 강제되고, JavaScript의 private은 런타임에도 강제된다',
          ],
          correctAnswer: 3,
          explanation:
            'TypeScript의 private은 컴파일 시 타입 체크에만 사용되고 런타임에는 일반 속성이 되지만, JavaScript의 private 필드(#)는 런타임에도 진정한 private으로 강제됩니다.',
        },
        {
          id: 4,
          question: '정적 블록(static block)의 주요 용도로 가장 적절한 것은?',
          options: [
            '인스턴스 초기화',
            '정적 멤버의 복잡한 초기화 로직 구현',
            '메서드 오버로딩',
            '제네릭 타입 정의',
          ],
          correctAnswer: 1,
          explanation:
            '정적 블록은 클래스의 정적 멤버를 초기화하는 복잡한 로직을 구현할 때 사용됩니다. try-catch나 여러 문장이 필요한 초기화에 적합합니다.',
        },
      ],
    },
    {
      title: '고급 클래스 기능',
      description:
        '제네릭, this 타입, 추상 클래스 등 고급 기능을 테스트합니다.',
      questions: [
        {
          id: 5,
          question:
            '제네릭 클래스에서 타입 매개변수에 제약 조건을 추가하는 올바른 방법은?',
          options: [
            `class Box<T implements Number>`,
            `class Box<T extends Number>`,
            `class Box<T: Number>`,
            `class Box<T as Number>`,
          ],
          correctAnswer: 1,
          explanation:
            'TypeScript에서 제네릭 타입 매개변수에 제약 조건을 추가할 때는 extends 키워드를 사용합니다. implements, as, : 등은 이 용도로 사용할 수 없습니다.',
        },
        {
          id: 6,
          question:
            '다음 중 추상 클래스(abstract class)에 대한 설명으로 틀린 것은?',
          options: [
            '추상 클래스는 직접 인스턴스화할 수 없다',
            '추상 메서드는 반드시 파생 클래스에서 구현해야 한다',
            '추상 클래스는 일반 메서드도 포함할 수 있다',
            '추상 클래스의 모든 메서드는 반드시 추상 메서드여야 한다',
          ],
          correctAnswer: 3,
          explanation:
            '추상 클래스는 일반 메서드와 추상 메서드를 모두 포함할 수 있습니다. 모든 메서드가 추상 메서드일 필요는 없습니다.',
        },
      ],
    },
  ],
};
