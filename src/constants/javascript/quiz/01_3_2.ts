import { Quiz } from '@/types/quiz.type';

export const quiz: Quiz = {
  title: '자바스크립트 상속과 프로토타입 체인 퀴즈',
  description:
    '자바스크립트의 프로토타입 기반 상속에 대한 이해도를 평가하는 퀴즈입니다.',
  categories: [
    {
      title: '프로토타입 기반 상속의 기본 개념',
      description: '프로토타입 기반 상속의 정의와 기본 개념에 대한 질문',
      questions: [
        {
          id: 1,
          question: '프로토타입 기반 상속이란 무엇인가요?',
          options: [
            '객체가 다른 객체로부터 속성과 메서드를 상속받는 방식',
            '클래스를 기반으로 한 상속 방식',
            '함수를 이용한 상속 방식',
            '모듈을 이용한 상속 방식',
          ],
          correctAnswer: 0,
          explanation:
            '프로토타입 기반 상속은 객체가 다른 객체로부터 속성과 메서드를 상속받는 방식을 의미합니다.',
        },
        {
          id: 2,
          question: '프로토타입 체인이란 무엇인가요?',
          options: [
            '객체들이 서로를 참조하는 구조',
            '프로토타입이 연결되어 상속을 이루는 연쇄 구조',
            '함수들이 서로를 호출하는 구조',
            '클래스들이 상속 관계를 이루는 구조',
          ],
          correctAnswer: 1,
          explanation:
            '프로토타입 체인은 프로토타입이 연결되어 상속을 이루는 연쇄 구조를 의미합니다.',
        },
        {
          id: 3,
          question: '모든 객체는 어떤 내부 링크를 가지고 있나요?',
          options: [
            '프로토타입 객체에 대한 링크',
            '컨스트럭터 함수에 대한 링크',
            '클래스에 대한 링크',
            '메서드에 대한 링크',
          ],
          correctAnswer: 0,
          explanation:
            '모든 객체는 프로토타입 객체에 대한 내부 링크를 가지고 있습니다.',
        },
      ],
    },
    {
      title: '프로토타입 체인을 통한 속성 상속',
      description: '프로토타입 체인을 이용한 속성 상속에 대한 질문',
      questions: [
        {
          id: 4,
          question:
            '다음 코드에서 `o.c`의 값은 무엇인가요?\n```javascript\nconst o = {\n  a: 1,\n  b: 2,\n  __proto__: {\n    b: 3,\n    c: 4,\n  },\n};\n```',
          options: ['1', '2', '3', '4'],
          correctAnswer: 3,
          explanation:
            '`o` 객체에는 `c` 속성이 없으므로 프로토타입에서 `c: 4`를 상속받아 4가 출력됩니다.',
        },
        {
          id: 5,
          question: '프로토타입 체인에서 속성을 찾는 순서는 어떻게 되나요?',
          options: [
            '객체 자신의 속성 → 부모 객체의 속성 → 계속해서 상위 프로토타입 순',
            '프로토타입의 속성 → 객체 자신의 속성 → 전역 객체의 속성 순',
            '전역 객체의 속성 → 객체 자신의 속성 → 프로토타입의 속성 순',
            '객체 자신의 속성 → 전역 객체의 속성 → 프로토타입의 속성 순',
          ],
          correctAnswer: 0,
          explanation:
            '속성을 찾을 때는 먼저 객체 자신의 속성을 확인하고, 없으면 부모 객체의 속성을 확인하는 식으로 상위 프로토타입 순으로 검색합니다.',
        },
        {
          id: 6,
          question:
            '다음 중 프로토타입 체인에서 `undefined`가 반환되는 경우는 언제인가요?',
          options: [
            '속성이 객체와 모든 프로토타입에서 발견되지 않을 때',
            '속성이 객체에만 존재할 때',
            '속성이 프로토타입에만 존재할 때',
            '속성이 객체와 프로토타입 모두에 존재할 때',
          ],
          correctAnswer: 0,
          explanation:
            '속성이 객체와 모든 프로토타입에서 발견되지 않으면 `undefined`가 반환됩니다.',
        },
      ],
    },
    {
      title: '메서드 상속과 this 바인딩',
      description: '메서드 상속과 `this` 키워드의 바인딩에 대한 질문',
      questions: [
        {
          id: 7,
          question:
            '다음 코드에서 `child.method()`의 결과는 무엇인가요?\n```javascript\nconst parent = {\n  value: 2,\n  method() {\n    return this.value + 1;\n  },\n};\n\nconst child = {\n  __proto__: parent,\n};\n\nchild.value = 4;\nconsole.log(child.method());\n```',
          options: ['3', '4', '5', 'undefined'],
          correctAnswer: 2,
          explanation:
            '`child` 객체의 `value`는 4이므로 `method`는 `4 + 1 = 5`를 반환합니다.',
        },
        {
          id: 8,
          question:
            '`this` 키워드는 메서드가 호출될 때 어떤 객체를 참조하나요?',
          options: [
            '메서드를 호출한 객체',
            '메서드를 정의한 객체',
            '전역 객체',
            '프로토타입 객체',
          ],
          correctAnswer: 0,
          explanation: '`this`는 메서드를 호출한 객체를 참조합니다.',
        },
      ],
    },
    {
      title: '생성자 함수와 프로토타입',
      description: '생성자 함수와 프로토타입의 관계에 대한 질문',
      questions: [
        {
          id: 9,
          question:
            '다음 코드에서 `boxes[0].getValue()`의 결과는 무엇인가요?\n```javascript\nfunction Box(value) {\n  this.value = value;\n}\n\nBox.prototype.getValue = function() {\n  return this.value;\n};\n\nconst boxes = [\n  new Box(1),\n  new Box(2),\n  new Box(3)\n];\n```',
          options: ['1', '2', '3', 'undefined'],
          correctAnswer: 0,
          explanation:
            '`boxes[0]`은 `Box(1)`으로 생성되었으며, `getValue()`는 `this.value`를 반환하여 1이 출력됩니다.',
        },
        {
          id: 10,
          question:
            '클래스 문법을 사용한 경우 프로토타입 체인은 어떻게 설정되나요?',
          options: [
            '클래스는 내부적으로 프로토타입 기반 상속을 사용합니다.',
            '클래스는 프로토타입 체인을 사용하지 않습니다.',
            '클래스는 모든 메서드를 인스턴스에 직접 정의합니다.',
            '클래스는 전역 프로토타입을 사용합니다.',
          ],
          correctAnswer: 0,
          explanation:
            '클래스 문법은 내부적으로 프로토타입 기반 상속을 사용하여 프로토타입 체인을 설정합니다.',
        },
      ],
    },
    {
      title: '리터럴과 암시적 생성자',
      description: '객체 리터럴과 암시적 생성자의 프로토타입 할당에 대한 질문',
      questions: [
        {
          id: 11,
          question:
            '다음 중 객체 리터럴이 자동으로 상속받는 프로토타입은 무엇인가요?',
          options: [
            'Object.prototype',
            'Array.prototype',
            'Function.prototype',
            'null',
          ],
          correctAnswer: 0,
          explanation:
            '객체 리터럴은 자동으로 `Object.prototype`을 상속받습니다.',
        },
        {
          id: 12,
          question: '배열 리터럴이 자동으로 상속받는 프로토타입은 무엇인가요?',
          options: [
            'Object.prototype',
            'Array.prototype',
            'Function.prototype',
            'null',
          ],
          correctAnswer: 1,
          explanation:
            '배열 리터럴은 자동으로 `Array.prototype`을 상속받습니다.',
        },
        {
          id: 13,
          question:
            '정규식 리터럴이 자동으로 상속받는 프로토타입은 무엇인가요?',
          options: [
            'RegExp.prototype',
            'Object.prototype',
            'Array.prototype',
            'Function.prototype',
          ],
          correctAnswer: 0,
          explanation:
            '정규식 리터럴은 자동으로 `RegExp.prototype`을 상속받습니다.',
        },
      ],
    },
    {
      title: '프로토타입 체인 구축하기',
      description: '프로토타입 체인을 구축하는 다양한 방법에 대한 질문',
      questions: [
        {
          id: 14,
          question:
            '다음 코드에서 `obj`의 프로토타입 체인은 어떻게 되나요?\n```javascript\nfunction Base() {}\nfunction Derived() {}\n\nObject.setPrototypeOf(Derived.prototype, Base.prototype);\n\nconst obj = new Derived();\n```',
          options: [
            'obj → Derived.prototype → Base.prototype → Object.prototype → null',
            'obj → Base.prototype → Derived.prototype → Object.prototype → null',
            'obj → Derived.prototype → Object.prototype → Base.prototype → null',
            'obj → Object.prototype → Derived.prototype → Base.prototype → null',
          ],
          correctAnswer: 0,
          explanation:
            '프로토타입 체인은 `obj` → `Derived.prototype` → `Base.prototype` → `Object.prototype` → `null` 순으로 연결됩니다.',
        },
        {
          id: 15,
          question:
            '클래스 문법을 사용하여 상속을 구현할 때 생성되는 프로토타입 체인은 어떻게 되나요?',
          options: [
            '클래스는 프로토타입 기반 상속을 내부적으로 사용합니다.',
            '클래스는 새로운 상속 방식을 사용합니다.',
            '클래스는 함수 기반 상속을 사용합니다.',
            '클래스는 프로토타입 체인을 사용하지 않습니다.',
          ],
          correctAnswer: 0,
          explanation:
            '클래스 문법은 내부적으로 프로토타입 기반 상속을 사용하여 프로토타입 체인을 설정합니다.',
        },
      ],
    },
    {
      title: '프로토타입 체인 생성 및 수정 방법',
      description:
        '프로토타입 체인을 생성하고 수정하는 다양한 방법에 대한 질문',
      questions: [
        {
          id: 16,
          question:
            '다음 중 `Object.create()`를 사용하여 객체 `b`의 프로토타입을 객체 `a`로 설정하는 방법은 무엇인가요?',
          options: [
            'const b = Object.create(a);',
            'const b = new Object(a);',
            'const b = a.create();',
            'const b = Object.setPrototypeOf(a, b);',
          ],
          correctAnswer: 0,
          explanation:
            '`Object.create(a)`를 사용하면 `b`의 프로토타입이 `a`로 설정됩니다.',
        },
        {
          id: 17,
          question:
            '다음 코드에서 `Object.setPrototypeOf(obj, anotherObj)`의 결과는 무엇인가요?\n```javascript\nconst obj = { a: 1 };\nconst anotherObj = { b: 2 };\n\nObject.setPrototypeOf(obj, anotherObj);\n```',
          options: [
            '`obj`의 프로토타입이 `anotherObj`로 설정됩니다.',
            '`anotherObj`의 프로토타입이 `obj`로 설정됩니다.',
            '`obj`와 `anotherObj`가 동일한 프로토타입을 가지게 됩니다.',
            '프로토타입 체인이 변경되지 않습니다.',
          ],
          correctAnswer: 0,
          explanation:
            '`Object.setPrototypeOf(obj, anotherObj)`는 `obj`의 프로토타입을 `anotherObj`로 설정합니다.',
        },
        {
          id: 18,
          question:
            '클래스 문법을 사용하여 상속을 구현할 때 필요한 키워드는 무엇인가요?',
          options: ['`extends`', '`implements`', '`inherits`', '`superclass`'],
          correctAnswer: 0,
          explanation:
            '클래스 문법에서 상속을 구현할 때는 `extends` 키워드를 사용합니다.',
        },
      ],
    },
    {
      title: '성능 고려사항',
      description: '프로토타입 체인의 성능과 관련된 질문',
      questions: [
        {
          id: 19,
          question:
            '프로토타입 체인이 길어질수록 어떤 성능 문제가 발생할 수 있나요?',
          options: [
            '속성 검색 시간이 증가할 수 있습니다.',
            '메모리 사용량이 감소할 수 있습니다.',
            '함수 실행 속도가 빨라질 수 있습니다.',
            '객체 생성 속도가 증가할 수 있습니다.',
          ],
          correctAnswer: 0,
          explanation:
            '프로토타입 체인이 길어질수록 속성을 찾는 시간이 길어질 수 있습니다.',
        },
        {
          id: 20,
          question:
            '프로토타입 체인에서 `hasOwnProperty`를 사용하는 이유는 무엇인가요?',
          options: [
            '객체가 직접 소유한 속성인지 확인하기 위해',
            '객체의 프로토타입 속성을 수정하기 위해',
            '객체의 모든 속성을 나열하기 위해',
            '객체의 메서드를 호출하기 위해',
          ],
          correctAnswer: 0,
          explanation:
            '`hasOwnProperty`는 객체가 직접 소유한 속성인지 확인하기 위해 사용됩니다.',
        },
      ],
    },
    {
      title: '추가 개념',
      description: '프로토타입 상속과 관련된 추가적인 개념에 대한 질문',
      questions: [
        {
          id: 21,
          question: '프로토타입 체인을 최적화하기 위한 방법은 무엇인가요?',
          options: [
            '체인의 깊이를 줄이고, 필요한 경우 체인을 분리합니다.',
            '프로토타입을 자주 변경합니다.',
            '내장 프로토타입을 확장합니다.',
            '객체를 많이 생성하여 체인을 짧게 유지합니다.',
          ],
          correctAnswer: 0,
          explanation:
            '프로토타입 체인의 깊이를 줄이고, 필요에 따라 체인을 분리하면 성능을 최적화할 수 있습니다.',
        },
        {
          id: 22,
          question:
            '프로토타입 체인에서 내장 프로토타입을 확장하는 것은 권장되지 않는 이유는 무엇인가요?',
          options: [
            '호환성 문제를 일으킬 수 있기 때문에',
            '성능이 저하되기 때문에',
            '코드가 복잡해지기 때문에',
            '메모리 사용량이 증가하기 때문에',
          ],
          correctAnswer: 0,
          explanation:
            '내장 프로토타입을 확장하면 호환성 문제가 발생할 수 있으므로 권장되지 않습니다.',
        },
        {
          id: 23,
          question:
            '프로토타입 기반 상속과 클래스 기반 상속의 주요 차이점은 무엇인가요?',
          options: [
            '자바스크립트는 프로토타입 기반 상속을 사용하며, 클래스는 문법적 설탕일 뿐입니다.',
            '프로토타입 기반 상속은 속도 면에서 클래스 기반 상속보다 빠릅니다.',
            '클래스 기반 상속은 자바스크립트에서만 사용됩니다.',
            '프로토타입 기반 상속은 다중 상속을 지원합니다.',
          ],
          correctAnswer: 0,
          explanation:
            '자바스크립트의 클래스 문법은 프로토타입 기반 상속을 문법적으로 쉽게 사용할 수 있도록 한 것입니다.',
        },
      ],
    },

    {
      title: '추가 개념',
      description: '프로토타입 상속과 관련된 추가적인 개념에 대한 질문',
      questions: [
        {
          id: 24,
          question: '프로토타입 기반 상속의 주요 이점은 무엇인가요?',
          options: [
            '유연한 객체 확장과 메모리 효율성',
            '빠른 함수 실행 속도',
            '다중 상속 지원',
            '모듈 의존성 감소',
          ],
          correctAnswer: 0,
          explanation:
            '프로토타입 기반 상속은 유연한 객체 확장과 메모리 효율성을 제공합니다.',
        },
        {
          id: 25,
          question: '프로토타입을 직접 수정할 때 주의할 점은 무엇인가요?',
          options: [
            '이미 생성된 인스턴스에 영향을 줄 수 있다.',
            '프로토타입의 속성이 사라질 수 있다.',
            '함수가 비동기적으로 작동할 수 있다.',
            '메모리 누수가 발생할 수 있다.',
          ],
          correctAnswer: 0,
          explanation:
            '프로토타입을 직접 수정하면 이미 생성된 모든 인스턴스에 영향을 줄 수 있습니다.',
        },
        {
          id: 26,
          question:
            '프로토타입 체인을 활용할 때 발생할 수 있는 주요 문제는 무엇인가요?',
          options: [
            '속성 검색 시간이 길어질 수 있다.',
            '객체의 메서드가 동작하지 않을 수 있다.',
            '프로토타입이 자동으로 삭제될 수 있다.',
            '클래스 기반 상속과 충돌할 수 있다.',
          ],
          correctAnswer: 0,
          explanation:
            '프로토타입 체인이 길어질수록 속성을 찾는 시간이 길어질 수 있습니다.',
        },
        {
          id: 27,
          question:
            '프로토타입 기반 상속과 클래스 기반 상속의 주요 차이점은 무엇인가요?',
          options: [
            '자바스크립트는 프로토타입 기반 상속을 사용하며, 클래스는 문법적 설탕일 뿐입니다.',
            '프로토타입 기반 상속은 속도 면에서 클래스 기반 상속보다 빠릅니다.',
            '클래스 기반 상속은 자바스크립트에서만 사용됩니다.',
            '프로토타입 기반 상속은 다중 상속을 지원합니다.',
          ],
          correctAnswer: 0,
          explanation:
            '자바스크립트의 클래스 문법은 프로토타입 기반 상속을 문법적으로 쉽게 사용할 수 있도록 한 것입니다.',
        },
        {
          id: 28,
          question: '프로토타입 체인을 최적화하기 위한 방법은 무엇인가요?',
          options: [
            '체인의 깊이를 줄이고, 필요한 경우 체인을 분리합니다.',
            '프로토타입을 자주 변경합니다.',
            '내장 프로토타입을 확장합니다.',
            '객체를 많이 생성하여 체인을 짧게 유지합니다.',
          ],
          correctAnswer: 0,
          explanation:
            '프로토타입 체인의 깊이를 줄이고, 필요에 따라 체인을 분리하면 성능을 최적화할 수 있습니다.',
        },
        {
          id: 29,
          question:
            '내장 프로토타입을 확장하는 것이 권장되지 않는 이유는 무엇인가요?',
          options: [
            '호환성 문제를 일으킬 수 있기 때문에',
            '성능이 저하되기 때문에',
            '코드가 복잡해지기 때문에',
            '메모리 사용량이 증가하기 때문에',
          ],
          correctAnswer: 0,
          explanation:
            '내장 프로토타입을 확장하면 호환성 문제가 발생할 수 있으므로 권장되지 않습니다.',
        },
        {
          id: 30,
          question:
            "프로토타입 기반 상속을 사용할 때 '몽키 패칭(Monkey Patching)'이란 무엇인가요?",
          options: [
            '내장 객체의 프로토타입을 변경하여 기능을 추가하거나 수정하는 것',
            '비동기 함수를 동기적으로 실행하는 것',
            '프로토타입 체인을 동적으로 생성하는 것',
            '객체의 메서드를 외부에서 호출하는 것',
          ],
          correctAnswer: 0,
          explanation:
            "'몽키 패칭'은 내장 객체의 프로토타입을 변경하여 기능을 추가하거나 수정하는 것을 말하며, 이는 호환성 문제를 일으킬 수 있습니다.",
        },
      ],
    },

    {
      title: '추가 개념',
      description: '프로토타입 상속과 관련된 추가적인 개념에 대한 질문',
      questions: [
        {
          id: 31,
          question: '몽키 패칭(Monkey Patching)이란 무엇인가요?',
          options: [
            '내장 객체의 프로토타입을 변경하여 기능을 추가하거나 수정하는 것',
            '객체의 메서드를 비동기적으로 호출하는 것',
            '클래스 기반 상속을 사용하는 것',
            '함수를 비동기적으로 실행하는 것',
          ],
          correctAnswer: 0,
          explanation:
            '몽키 패칭은 내장 객체의 프로토타입을 변경하여 기능을 추가하거나 수정하는 것을 말하며, 이는 호환성 문제를 일으킬 수 있습니다.',
        },
        {
          id: 32,
          question:
            'Object.create()와 new 키워드를 사용한 상속의 주요 차이점은 무엇인가요?',
          options: [
            'Object.create()는 기존 객체를 프로토타입으로 사용하고, new는 생성자 함수를 통해 프로토타입을 설정합니다.',
            'new 키워드는 객체를 생성하지 않고, Object.create()는 객체를 생성합니다.',
            'Object.create()는 클래스 기반 상속을 지원하고, new 키워드는 프로토타입 기반 상속을 지원합니다.',
            'Object.create()는 비동기적이며, new 키워드는 동기적입니다.',
          ],
          correctAnswer: 0,
          explanation:
            'Object.create()는 기존 객체를 프로토타입으로 사용하여 새로운 객체를 생성하고, new 키워드는 생성자 함수를 통해 프로토타입을 설정합니다.',
        },
        {
          id: 33,
          question:
            '프로토타입 기반 상속과 클래스 기반 상속의 주요 차이점은 무엇인가요?',
          options: [
            '자바스크립트는 프로토타입 기반 상속을 사용하며, 클래스는 문법적 설탕일 뿐입니다.',
            '클래스 기반 상속은 프로토타입 체인을 사용하지 않습니다.',
            '프로토타입 기반 상속은 속도 면에서 클래스 기반 상속보다 빠릅니다.',
            '클래스 기반 상속은 다중 상속을 지원합니다.',
          ],
          correctAnswer: 0,
          explanation:
            '자바스크립트의 클래스 문법은 프로토타입 기반 상속을 문법적으로 쉽게 사용할 수 있도록 한 것입니다.',
        },
        {
          id: 34,
          question: 'hasOwnProperty 메서드는 무엇을 확인하는 데 사용되나요?',
          options: [
            '객체가 특정 속성을 자신의 속성으로 가지고 있는지',
            '객체가 프로토타입 체인에 특정 속성을 가지고 있는지',
            '객체가 함수인지 확인하는지',
            '객체의 메서드가 제대로 작동하는지',
          ],
          correctAnswer: 0,
          explanation:
            'hasOwnProperty 메서드는 객체가 특정 속성을 자신의 속성으로 가지고 있는지 확인하는 데 사용됩니다.',
        },
        {
          id: 35,
          question:
            '프로토타입 체인이 길어질수록 성능에 어떤 영향을 미칠 수 있나요?',
          options: [
            '속성 검색 시간이 길어질 수 있습니다.',
            '메모리 사용량이 줄어듭니다.',
            '함수 실행 속도가 빨라집니다.',
            '객체 생성 속도가 증가합니다.',
          ],
          correctAnswer: 0,
          explanation:
            '프로토타입 체인이 길어질수록 속성을 찾는 시간이 길어질 수 있습니다.',
        },
      ],
    },
  ],
};
