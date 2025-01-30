import { Quiz } from '@/types/quiz.type';

export const quiz: Quiz = {
  title: 'JavaScript Prototype Quiz',
  description:
    'Test your understanding of JavaScript prototypes, inheritance, and object-oriented concepts',
  categories: [
    {
      title: '기본 개념',
      description: '프로토타입의 기본 개념과 동작 방식을 테스트합니다.',
      questions: [
        {
          id: 1,
          question: '자바스크립트에서 프로토타입의 주요 목적은 무엇인가요?',
          options: [
            '메모리 최적화',
            '객체 간 상속 구현',
            '코드 실행 속도 향상',
            '변수 스코프 관리',
          ],
          correctAnswer: 1,
          explanation:
            '프로토타입은 자바스크립트에서 객체가 다른 객체로부터 기능을 상속받을 수 있도록 해주는 메커니즘입니다.',
        },
        {
          id: 2,
          question: '다음 중 Object.prototype의 프로토타입은 무엇인가요?',
          options: ['undefined', 'Object', 'null', 'Function.prototype'],
          correctAnswer: 2,
          explanation:
            'Object.prototype은 프로토타입 체인의 가장 상위에 위치하며, 그의 프로토타입은 null입니다.',
        },
        {
          id: 3,
          question: '프로토타입 체인에서 속성을 찾는 순서로 올바른 것은?',
          options: [
            '프로토타입 체인 최상위부터 현재 객체까지 내려오며 검색',
            '현재 객체에서 시작하여 프로토타입 체인을 따라 올라가며 검색',
            '무작위로 모든 프로토타입을 검색',
            '항상 Object.prototype만 검색',
          ],
          correctAnswer: 1,
          explanation:
            '객체의 속성을 찾을 때는 현재 객체에서 시작하여 프로토타입 체인을 따라 상위로 올라가며 검색합니다.',
        },
        {
          id: 4,
          question: 'Shadowing이 발생하는 경우는 언제인가요?',
          options: [
            '객체가 생성될 때',
            '프로토타입이 null일 때',
            '객체에 프로토타입과 동일한 이름의 속성을 정의할 때',
            '객체가 삭제될 때',
          ],
          correctAnswer: 2,
          explanation:
            '객체에 프로토타입에 이미 존재하는 것과 동일한 이름의 속성을 정의하면 프로토타입의 속성이 가려지는 현상을 Shadowing이라고 합니다.',
        },
        {
          id: 5,
          question: 'Object.create() 메서드의 주요 용도는 무엇인가요?',
          options: [
            '객체를 복사하는 것',
            '특정 프로토타입을 가진 새로운 객체를 생성하는 것',
            '객체를 문자열로 변환하는 것',
            '객체의 속성을 삭제하는 것',
          ],
          correctAnswer: 1,
          explanation:
            'Object.create()는 지정된 프로토타입을 가진 새로운 객체를 생성하는 메서드입니다.',
        },
        {
          id: 6,
          question:
            'Object.hasOwn() 메서드와 hasOwnProperty() 메서드의 차이점은 무엇인가요?',
          options: [
            '차이가 없다',
            'Object.hasOwn()은 더 이상 사용되지 않는다',
            'hasOwnProperty()는 프로토타입 체인도 검사한다',
            'Object.hasOwn()은 더 안전한 방식으로 속성을 확인한다',
          ],
          correctAnswer: 3,
          explanation:
            'Object.hasOwn()은 hasOwnProperty()의 더 안전한 대안으로, 객체가 hasOwnProperty를 재정의한 경우에도 올바르게 동작합니다.',
        },
        {
          id: 7,
          question:
            "프로토타입 상속에서 'constructor' 속성의 역할은 무엇인가요?",
          options: [
            '객체의 메모리 주소를 저장',
            '객체를 생성한 생성자 함수를 참조',
            '객체의 프로토타입을 저장',
            '객체의 속성 개수를 저장',
          ],
          correctAnswer: 1,
          explanation:
            'constructor 속성은 객체를 생성한 생성자 함수를 참조하며, 이를 통해 객체의 타입을 확인할 수 있습니다.',
        },
      ],
    },

    {
      title: '고급 개념',
      description: '프로토타입의 고급 개념과 상속 패턴을 테스트합니다.',
      questions: [
        {
          id: 8,
          question:
            "다음 코드의 출력 결과는 무엇인가요?\njavascript\nfunction Animal() {}\nAnimal.prototype.speak = function() { return 'animal noise'; };\n\nfunction Dog() {}\nDog.prototype = Object.create(Animal.prototype);\nDog.prototype.speak = function() { return 'woof'; };\n\nconst dog = new Dog();\nconsole.log(dog.speak());\n",
          options: ['animal noise', 'woof', 'undefined', 'TypeError'],
          correctAnswer: 1,
          explanation:
            "메서드 오버라이딩으로 인해 Dog의 speak 메서드가 Animal의 speak 메서드를 가리게 되어 'woof'가 출력됩니다.",
        },
        {
          id: 9,
          question:
            "프로토타입 체인에서 'instanceof' 연산자는 무엇을 확인하나요?",
          options: [
            '객체가 특정 생성자로부터 직접 생성되었는지 여부',
            '객체의 프로토타입 체인에 특정 생성자의 prototype이 존재하는지 여부',
            '두 객체가 동일한 프로토타입을 가지는지 여부',
            '객체가 특정 속성을 가지고 있는지 여부',
          ],
          correctAnswer: 1,
          explanation:
            'instanceof는 객체의 프로토타입 체인을 따라가면서 특정 생성자의 prototype이 존재하는지를 확인합니다.',
        },
        {
          id: 10,
          question:
            "프로토타입 상속에서 'super' 키워드를 사용할 수 없는 이유는 무엇인가요?",
          options: [
            '성능상의 이유로 제한됨',
            '자바스크립트가 다중 상속을 지원하지 않기 때문',
            '프로토타입 기반 상속은 클래스 기반 상속과 다른 메커니즘을 사용하기 때문',
            'super 키워드는 ES6 이전 버전에서만 사용 가능',
          ],
          correctAnswer: 2,
          explanation:
            '프로토타입 기반 상속은 클래스 기반 상속과는 다른 메커니즘을 사용하며, super 키워드는 클래스 문법에서만 사용할 수 있습니다.',
        },
        {
          id: 11,
          question:
            '다음 중 프로토타입 체인의 성능에 가장 큰 영향을 미치는 요소는 무엇인가요?',
          options: [
            '프로토타입 체인의 길이',
            '객체가 가진 속성의 수',
            '사용된 메모리 양',
            '가비지 컬렉션 빈도',
          ],
          correctAnswer: 0,
          explanation:
            '프로토타입 체인이 길어질수록 속성을 찾기 위해 더 많은 단계를 거쳐야 하므로 성능에 영향을 미칩니다.',
        },
        {
          id: 12,
          question:
            'Object.freeze()가 프로토타입 체인에 미치는 영향은 무엇인가요?',
          options: [
            '프로토타입 체인 전체를 동결시킨다',
            '현재 객체만 동결시키고 프로토타입은 영향받지 않는다',
            '프로토타입 체인을 완전히 끊어버린다',
            '프로토타입의 속성만 동결시킨다',
          ],
          correctAnswer: 1,
          explanation:
            'Object.freeze()는 대상 객체만 동결시키며, 프로토타입 체인이나 프로토타입의 속성에는 영향을 미치지 않습니다.',
        },
        {
          id: 13,
          question: '다음 중 프로토타입 패턴의 주요 단점은 무엇인가요?',
          options: [
            '메모리 사용량이 매우 높다',
            '구현이 복잡하다',
            '공유된 속성이 모든 인스턴스에서 수정될 수 있다',
            '상속이 불가능하다',
          ],
          correctAnswer: 2,
          explanation:
            '프로토타입 패턴에서 참조 타입의 속성은 모든 인스턴스에서 공유되므로, 한 인스턴스에서의 수정이 모든 인스턴스에 영향을 미칠 수 있습니다.',
        },
        {
          id: 14,
          question:
            'ES6 클래스와 프로토타입 상속의 관계를 가장 잘 설명한 것은?',
          options: [
            '완전히 다른 두 가지 상속 메커니즘이다',
            '클래스는 프로토타입 상속을 대체한다',
            '클래스는 프로토타입 상속의 문법적 설탕이다',
            '클래스와 프로토타입은 별개로 동작한다',
          ],
          correctAnswer: 2,
          explanation:
            'ES6 클래스는 프로토타입 기반 상속을 더 쉽게 사용할 수 있도록 하는 문법적 설탕입니다. 내부적으로는 여전히 프로토타입 메커니즘을 사용합니다.',
        },
      ],
    },
  ],
};
