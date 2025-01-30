import { CodeQuizType } from '@/types/quiz.type';

export const classQuizzes: CodeQuizType[] = [
  {
    id: 1,
    title: '클래스 초기화와 가시성',
    description: '클래스 필드 초기화와 접근 제어자의 동작을 이해해보세요.',
    code: `class Counter {
  private _count: number;
  protected step: number;
  readonly maxValue: number;

  constructor(start = 0, step = 1, max = 100) {
    this._count = start;
    this.step = step;
    this.maxValue = max;
  }

  increment(): boolean {
    const nextValue = this._count + this.step;
    if (nextValue <= this.maxValue) {
      this._count = nextValue;
      return true;
    }
    return false;
  }

  get value() { return this._count; }
}

class DoubleCounter extends Counter {
  increment(): boolean {
    this.step *= 2;  // step을 2배로 늘림
    return super.increment();
  }
}

const counter = new DoubleCounter(0, 1, 10);

// 다음 코드들의 결과는?
console.log(counter.value);  // Case 1
counter.increment();
console.log(counter.value);  // Case 2
counter.increment();
console.log(counter.value);  // Case 3
console.log(counter.step);   // Case 4: 컴파일 에러?`,
    answer: `Case 1: 0 (초기값)
Case 2: 2 (step이 2로 변경되어 0+2)
Case 3: 6 (step이 4로 변경되어 2+4)
Case 4: 컴파일 에러 (protected 멤버는 외부에서 접근 불가)

설명:
- private _count는 클래스 내부에서만 접근 가능
- protected step은 파생 클래스에서 접근 가능
- readonly maxValue는 초기화 후 변경 불가
- getter를 통해 private 필드에 안전하게 접근`,
    hint: 'TypeScript의 접근 제어자는 컴파일 타임에 체크되며, protected 멤버는 파생 클래스에서만 접근할 수 있습니다.',
  },
  {
    id: 2,
    title: '제네릭 클래스와 제약조건',
    description: '제네릭 클래스의 타입 제약과 활용을 이해해보세요.',
    code: `interface HasId {
  id: number;
  name: string;
}

class Storage<T extends HasId> {
  private items = new Map<number, T>();

  add(item: T): void {
    this.items.set(item.id, item);
  }

  get(id: number): T | undefined {
    return this.items.get(id);
  }

  getAll(): T[] {
    return Array.from(this.items.values());
  }
}

// 다음 코드들이 컴파일되나요?
const userStorage = new Storage<{ 
  id: number, 
  name: string, 
  email: string 
}>();  // Case 1

const numberStorage = new Storage<{ 
  value: number 
}>();  // Case 2

const stringStorage = new Storage<string>();  // Case 3

userStorage.add({ 
  id: 1, 
  name: "Kim", 
  email: "kim@test.com" 
});  // Case 4`,
    answer: `Case 1: 컴파일 성공 (HasId 인터페이스의 모든 필수 속성을 포함)
Case 2: 컴파일 실패 (HasId 인터페이스의 필수 속성 누락)
Case 3: 컴파일 실패 (string 타입은 HasId 제약조건을 만족하지 않음)
Case 4: 컴파일 성공 (올바른 형태의 객체 추가)

제네릭 제약조건:
- T extends HasId는 T가 HasId의 모든 속성을 포함해야 함
- 추가 속성은 허용되지만 필수 속성은 반드시 포함
- 원시 타입은 제약조건을 만족할 수 없음`,
    hint: '제네릭 제약조건은 타입 매개변수가 가져야 할 최소한의 구조를 정의합니다.',
  },
  {
    id: 3,
    title: 'this 타입과 메서드 체이닝',
    description:
      'this 타입을 활용한 메서드 체이닝과 타입 안전성을 이해해보세요.',
    code: `class Calculator {
  constructor(protected value: number = 0) {}

  add(n: number): this {
    this.value += n;
    return this;
  }

  multiply(n: number): this {
    this.value *= n;
    return this;
  }

  getValue(): number {
    return this.value;
  }
}

class SafeCalculator extends Calculator {
  divide(n: number): this {
    if (n === 0) return this;
    this.value /= n;
    return this;
  }
}

const calc = new SafeCalculator(10);

// 다음 체인의 결과값은?
console.log(
  calc
    .add(5)     // Step 1
    .multiply(2) // Step 2
    .divide(3)   // Step 3
    .add(1)     // Step 4
    .getValue()
);

// 타입 시스템은 다음을 허용할까요?
const baseCalc: Calculator = calc;
baseCalc.divide(2);  // Case 1`,
    answer: `계산 결과: 11
Step 1: 10 + 5 = 15
Step 2: 15 * 2 = 30
Step 3: 30 / 3 = 10
Step 4: 10 + 1 = 11

Case 1: 컴파일 에러
- divide 메서드는 SafeCalculator에만 존재
- Calculator 타입으로 업캐스트하면 divide 접근 불가

this 타입의 특징:
- 메서드 체이닝을 타입 안전하게 구현 가능
- 파생 클래스에서도 올바른 타입을 유지
- 반환 타입이 실제 인스턴스 타입을 따름`,
    hint: 'this 타입은 메서드가 호출된 실제 인스턴스의 타입을 나타내며, 이를 통해 타입 안전한 메서드 체이닝을 구현할 수 있습니다.',
  },
  {
    id: 4,
    title: '추상 클래스와 구현',
    description: '추상 클래스와 구현 관계의 타입 체크를 이해해보세요.',
    code: `abstract class Shape {
  abstract getArea(): number;
  abstract getPerimeter(): number;

  describe(): string {
    return \`Area: \${this.getArea()}, Perimeter: \${this.getPerimeter()}\`;
  }
}

class Rectangle extends Shape {
  constructor(
    private width: number,
    private height: number
  ) {
    super();
  }

  getArea(): number {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  getArea(): number {
    return Math.PI * this.radius ** 2;
  }

  getPerimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

// 다음 코드들은 컴파일되나요?
new Shape();  // Case 1

const rect = new Rectangle(10, 20);
console.log(rect.describe());  // Case 2

const shapes: Shape[] = [
  new Circle(5),
  new Rectangle(10, 20)
];  // Case 3`,
    answer: `Case 1: 컴파일 실패 (추상 클래스는 인스턴스화 불가)
Case 2: 컴파일 실패 (Rectangle이 getPerimeter를 구현하지 않음)
Case 3: 컴파일 실패 (Rectangle 클래스가 Shape의 모든 추상 메서드를 구현하지 않음)

추상 클래스 규칙:
- 추상 클래스는 직접 인스턴스화할 수 없음
- 모든 추상 메서드는 파생 클래스에서 반드시 구현해야 함
- 추상 클래스의 비추상 메서드는 바로 사용 가능
- 구현이 누락된 클래스는 추상 클래스로 선언해야 함`,
    hint: '추상 클래스는 완전한 구현을 위한 템플릿을 제공하며, 모든 추상 메서드가 구현되지 않으면 컴파일 에러가 발생합니다.',
  },
];
