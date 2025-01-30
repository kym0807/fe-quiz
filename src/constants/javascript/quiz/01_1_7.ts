import { Quiz } from '@/types/quiz.type';

export const quiz: Quiz = {
  title: 'JavaScript 배열 마스터하기',
  description: 'JavaScript 배열의 기본 개념부터 고급 기능까지 테스트해보세요',
  categories: [
    {
      title: '배열 기초',
      description: '배열의 기본 개념과 생성 방법',
      questions: [
        {
          id: 1,
          question:
            '다음 중 JavaScript에서 배열을 생성하는 가장 권장되는 방법은 무엇인가요?',
          options: [
            'new Array() 생성자 사용',
            '배열 리터럴 [] 사용',
            'Array.from() 메서드 사용',
            'Object.assign() 메서드 사용',
          ],
          correctAnswer: 1,
          explanation:
            '배열 리터럴을 사용하는 것이 가장 간단하고 명확하며 권장되는 방법입니다.',
        },
        {
          id: 2,
          question: 'new Array(3)을 실행하면 어떤 결과가 생성되나요?',
          options: [
            '[3]',
            '[0, 0, 0]',
            '[undefined, undefined, undefined]',
            '[empty × 3]',
          ],
          correctAnswer: 3,
          explanation:
            'Array 생성자에 단일 숫자를 전달하면 해당 길이의 빈 슬롯을 가진 희소 배열이 생성됩니다.',
        },
        {
          id: 3,
          question: '배열의 마지막 요소에 접근하는 최신 메서드는 무엇인가요?',
          options: [
            'array.last()',
            'array.at(-1)',
            'array[array.length]',
            'array.end()',
          ],
          correctAnswer: 1,
          explanation:
            'at() 메서드는 음수 인덱스를 지원하며, -1은 마지막 요소를 의미합니다.',
        },
        {
          id: 4,
          question:
            '다음 중 배열의 길이를 변경할 때 발생하는 상황으로 올바른 것은?',
          options: [
            '배열의 길이는 변경할 수 없다',
            '길이가 줄어들면 초과하는 요소들은 삭제된다',
            '길이가 늘어나면 새로운 요소들은 null로 초기화된다',
            '길이 속성은 읽기 전용이다',
          ],
          correctAnswer: 1,
          explanation:
            '배열의 length 속성을 줄이면 초과하는 요소들은 삭제되며, 늘리면 빈 슬롯이 생성됩니다.',
        },
        {
          id: 5,
          question:
            '다음 코드의 실행 결과는? const arr = [1,2,3]; arr[10] = 5;',
          options: [
            'TypeError가 발생한다',
            '배열의 길이가 11이 되고 인덱스 10에 5가 할당된다',
            '배열의 길이는 3으로 유지되고 10번 인덱스는 무시된다',
            '배열의 3~9 인덱스가 자동으로 0으로 채워진다',
          ],
          correctAnswer: 1,
          explanation:
            '배열의 길이가 11로 늘어나고, 3~9 인덱스는 empty 슬롯이 됩니다.',
        },
        {
          id: 6,
          question: '유사 배열 객체(Array-like object)의 특징이 아닌 것은?',
          options: [
            'length 속성을 가진다',
            '숫자로 된 키를 가진다',
            '배열의 모든 메서드를 사용할 수 있다',
            '인덱스로 접근이 가능하다',
          ],
          correctAnswer: 2,
          explanation:
            '유사 배열 객체는 배열의 메서드를 직접 사용할 수 없으며, Array.from()이나 call/apply를 통해 변환해야 합니다.',
        },
        {
          id: 7,
          question: '다음 중 배열의 prototype chain과 관련하여 올바른 설명은?',
          options: [
            '배열은 Object.prototype을 직접 상속받는다',
            '배열은 Array.prototype을 상속받고, 이는 Object.prototype을 상속받는다',
            '배열은 프로토타입 체인을 가지지 않는다',
            '모든 배열 메서드는 Array 생성자에만 존재한다',
          ],
          correctAnswer: 1,
          explanation:
            '배열은 Array.prototype을 상속받고, 이는 다시 Object.prototype을 상속받아 프로토타입 체인을 형성합니다.',
        },
      ],
    },
    {
      title: '배열 메서드와 조작',
      description: '배열의 다양한 메서드와 조작 방법',
      questions: [
        {
          id: 8,
          question: '배열의 push()와 unshift() 메서드의 반환값은 무엇인가요?',
          options: [
            '추가된 요소',
            '변경된 배열',
            '새로운 배열의 길이',
            'undefined',
          ],
          correctAnswer: 2,
          explanation:
            'push()와 unshift() 메서드는 새로운 요소를 추가한 후 변경된 배열의 길이를 반환합니다.',
        },
        {
          id: 9,
          question: "다음 코드의 결과는? ['a', 'b', 'c'].indexOf('b', 2)",
          options: ['1', '-1', '2', 'undefined'],
          correctAnswer: 1,
          explanation:
            "indexOf의 두 번째 매개변수는 검색을 시작할 인덱스입니다. 인덱스 2부터 'b'를 검색하면 찾을 수 없으므로 -1을 반환합니다.",
        },
        {
          id: 10,
          question: 'flatMap() 메서드와 map().flat()의 차이점으로 올바른 것은?',
          options: [
            '동작 방식이 완전히 다르다',
            'flatMap()이 성능상 더 유리하다',
            'map().flat()이 더 깊은 중첩 배열을 펼칠 수 있다',
            '차이가 없다',
          ],
          correctAnswer: 1,
          explanation:
            'flatMap()은 map과 flat을 순차적으로 실행하는 것보다 성능이 좋으며, 중간 배열을 생성하지 않습니다.',
        },
        {
          id: 11,
          question: 'Object.groupBy() 메서드의 특징으로 올바르지 않은 것은?',
          options: [
            '배열의 요소를 그룹화할 수 있다',
            '반환값은 객체이다',
            '콜백 함수의 반환값이 그룹의 키가 된다',
            '원본 배열을 변경한다',
          ],
          correctAnswer: 3,
          explanation:
            'Object.groupBy()는 원본 배열을 변경하지 않고 새로운 객체를 반환합니다.',
        },
        {
          id: 12,
          question:
            '다음 중 희소 배열(sparse array)을 생성하는 방법이 아닌 것은?',
          options: [
            'Array(3)',
            '[1, , 3]',
            'const arr = [1, 2, 3]; delete arr[1];',
            '[undefined, undefined]',
          ],
          correctAnswer: 3,
          explanation:
            '[undefined, undefined]는 실제 undefined 값을 가진 밀집 배열을 생성합니다. 이는 희소 배열과 다릅니다.',
        },
        {
          id: 13,
          question:
            '2차원 배열에서 다음 코드의 결과는? [].concat(...[[1,2], [3,4]])',
          options: [
            '[[1,2], [3,4]]',
            '[1, 2, 3, 4]',
            'TypeError',
            '[[1,2,3,4]]',
          ],
          correctAnswer: 1,
          explanation:
            '스프레드 연산자(...)와 concat을 함께 사용하면 2차원 배열을 1차원으로 평탄화할 수 있습니다.',
        },
        {
          id: 14,
          question:
            'Array.from()과 스프레드 연산자(...)의 차이점으로 올바른 것은?',
          options: [
            'Array.from()은 이터러블 객체만 변환할 수 있다',
            '스프레드 연산자는 항상 더 빠르다',
            'Array.from()은 매핑 함수를 제공할 수 있다',
            '기능상의 차이가 없다',
          ],
          correctAnswer: 2,
          explanation:
            'Array.from()은 두 번째 인자로 매핑 함수를 받을 수 있어 변환과 동시에 값을 변형할 수 있습니다.',
        },
        {
          id: 15,
          question: '배열 메서드 중 원본 배열을 변경하지 않는 것은?',
          options: ['push()', 'sort()', 'slice()', 'splice()'],
          correctAnswer: 2,
          explanation:
            'slice()는 원본 배열을 변경하지 않고 새로운 배열을 반환하는 순수 함수입니다.',
        },
      ],
    },
    {
      title: '고급 배열 개념',
      description: '배열의 고급 기능과 최신 JavaScript 기능',
      questions: [
        {
          id: 16,
          question:
            '다음 중 배열의 forEach와 for...of 루프의 차이점으로 올바르지 않은 것은?',
          options: [
            'forEach는 중간에 break로 중단할 수 없다',
            'for...of는 await를 사용할 수 있다',
            'forEach는 비동기 콜백을 지원하지 않는다',
            'for...of는 희소 배열의 빈 슬롯을 건너뛴다',
          ],
          correctAnswer: 3,
          explanation:
            'for...of는 희소 배열의 빈 슬롯을 undefined로 처리하며, forEach는 빈 슬롯을 건너뜁니다.',
        },
        {
          id: 17,
          question:
            'Array.isArray()와 instanceof 연산자의 차이점으로 올바른 것은?',
          options: [
            '차이가 없다',
            'Array.isArray()는 iframe 간에도 정확히 동작한다',
            'instanceof가 더 빠르다',
            'Array.isArray()는 오래된 브라우저에서만 사용된다',
          ],
          correctAnswer: 1,
          explanation:
            'Array.isArray()는 다른 창이나 iframe에서 생성된 배열도 올바르게 식별할 수 있습니다.',
        },
        {
          id: 18,
          question: 'TypedArray와 일반 배열의 차이점으로 올바르지 않은 것은?',
          options: [
            'TypedArray는 특정 데이터 타입만 저장할 수 있다',
            'TypedArray는 항상 연속된 메모리를 사용한다',
            'TypedArray는 배열의 모든 메서드를 사용할 수 있다',
            'TypedArray는 길이가 고정되어 있다',
          ],
          correctAnswer: 2,
          explanation:
            'TypedArray는 일반 배열의 일부 메서드만 지원하며, push/pop과 같은 크기를 변경하는 메서드는 사용할 수 없습니다.',
        },
        {
          id: 19,
          question:
            'Array.prototype.reduce()를 사용할 때 초기값을 제공하지 않으면 어떻게 되나요?',
          options: [
            'undefined를 초기값으로 사용한다',
            '첫 번째 요소를 초기값으로 사용한다',
            '오류가 발생한다',
            '0을 초기값으로 사용한다',
          ],
          correctAnswer: 1,
          explanation:
            '초기값이 없으면 배열의 첫 번째 요소가 초기값으로 사용되고, 두 번째 요소부터 리듀서가 실행됩니다.',
        },
        {
          id: 20,
          question:
            '다음 코드의 결과는? Array(3).fill([]).map(arr => arr.push(1))',
          options: [
            '[1, 1, 1]',
            '[[], [], []]',
            '[1]',
            '[undefined, undefined, undefined]',
          ],
          correctAnswer: 3,
          explanation:
            'fill([])은 같은 배열 참조를 모든 요소에 채우고, push는 새로운 길이를 반환하므로 undefined가 됩니다.',
        },
        {
          id: 21,
          question: '다음 중 배열의 성능과 관련하여 올바른 설명은?',
          options: [
            'unshift()가 push()보다 항상 빠르다',
            'forEach()가 for 루프보다 항상 빠르다',
            '배열의 시작 부분에 요소를 추가/제거하는 것은 비용이 크다',
            '배열의 길이는 성능에 영향을 미치지 않는다',
          ],
          correctAnswer: 2,
          explanation:
            '배열의 시작 부분을 수정하면 모든 요소의 인덱스를 재조정해야 하므로 성능상 비용이 큽니다.',
        },
        {
          id: 22,
          question: '배열의 length 프로퍼티는 언제 자동으로 업데이트되나요?',
          options: [
            '요소가 추가될 때만',
            '요소가 제거될 때만',
            '배열이 수정될 때마다',
            '요소가 추가되거나 제거될 때',
          ],
          correctAnswer: 3,
          explanation:
            'length 프로퍼티는 배열에 요소가 추가되거나 제거될 때 자동으로 업데이트됩니다.',
        },
      ],
    },
    {
      title: '실제 활용 및 응용',
      description: '배열의 실제 활용 사례와 심화 개념',
      questions: [
        {
          id: 23,
          question:
            '다음 코드에서 발생할 수 있는 잠재적 문제는? scores.sort((a, b) => a - b)',
          options: [
            '메모리 누수가 발생할 수 있다',
            '숫자가 문자열로 처리될 수 있다',
            '원본 배열이 변경된다',
            '성능 문제가 발생할 수 있다',
          ],
          correctAnswer: 2,
          explanation:
            'sort() 메서드는 원본 배열을 직접 변경합니다. 원본 보존이 필요한 경우 slice()로 복사 후 정렬해야 합니다.',
        },
        {
          id: 24,
          question:
            '배열에서 Object.groupBy를 사용할 때의 제한사항으로 올바른 것은?',
          options: [
            '그룹화 키는 문자열만 가능하다',
            '중첩된 그룹화가 불가능하다',
            '원본 배열이 변경된다',
            '콜백 함수에서 비동기 처리가 불가능하다',
          ],
          correctAnswer: 0,
          explanation:
            'Object.groupBy의 그룹화 키는 문자열로 변환되므로, 객체나 배열을 키로 사용할 수 없습니다.',
        },
        {
          id: 25,
          question: '다음 중 메모리 관점에서 가장 효율적인 배열 복사 방법은?',
          options: [
            'Array.from(originalArray)',
            'originalArray.slice()',
            'JSON.parse(JSON.stringify(originalArray))',
            '[...originalArray]',
          ],
          correctAnswer: 1,
          explanation:
            'slice()는 얕은 복사를 수행하며, 내부적으로 최적화되어 있어 메모리 사용이 효율적입니다.',
        },
        {
          id: 26,
          question: '배열의 성능 최적화와 관련하여 옳지 않은 것은?',
          options: [
            '배열의 크기를 미리 할당하면 성능이 향상될 수 있다',
            '삭제된 요소는 가비지 컬렉션의 대상이 된다',
            'delete 연산자는 splice()보다 항상 빠르다',
            'dense array가 sparse array보다 효율적이다',
          ],
          correctAnswer: 2,
          explanation:
            'delete 연산자는 희소 배열을 만들어 성능 저하를 일으킬 수 있으며, splice()가 더 효율적일 수 있습니다.',
        },
        {
          id: 27,
          question:
            '다음 중 배열의 불변성(immutability)을 유지하는 방법으로 적절하지 않은 것은?',
          options: [
            'Object.freeze() 사용',
            '모든 수정 작업에서 새 배열 반환',
            'const 키워드 사용',
            'Proxy 객체 사용',
          ],
          correctAnswer: 2,
          explanation:
            'const는 배열 변수의 재할당만 막을 뿐, 배열 내용의 수정은 막지 못합니다.',
        },
        {
          id: 28,
          question: '다음 중 배열의 메모리 사용에 대한 설명으로 옳은 것은?',
          options: [
            '배열의 모든 요소는 연속된 메모리에 저장된다',
            '배열은 항상 동적으로 크기가 조절된다',
            '배열의 요소는 실제로 참조만 저장한다',
            '빈 슬롯은 메모리를 차지하지 않는다',
          ],
          correctAnswer: 2,
          explanation:
            'JavaScript 배열은 객체이며, 각 요소는 실제 값이 아닌 참조를 저장합니다.',
        },
        {
          id: 29,
          question:
            '다음 중 배열의 순회(iteration) 성능에 대한 설명으로 옳은 것은?',
          options: [
            'for...in이 가장 빠르다',
            'forEach가 모든 상황에서 가장 느리다',
            'for...of와 일반 for 루프의 성능은 상황에 따라 다르다',
            '모든 순회 방법의 성능은 동일하다',
          ],
          correctAnswer: 2,
          explanation:
            'for...of는 이터레이터를 사용하고, 일반 for 루프는 직접 인덱스에 접근하며, 각각의 장단점이 있어 상황에 따라 성능 차이가 있습니다.',
        },
        {
          id: 30,
          question:
            '배열의 프로토타입을 확장할 때 고려해야 할 사항으로 적절하지 않은 것은?',
          options: [
            '열거 가능성(enumerable) 설정',
            'this 바인딩 고려',
            '기존 메서드와의 충돌 방지',
            'Array.prototype 직접 수정',
          ],
          correctAnswer: 3,
          explanation:
            'Array.prototype을 직접 수정하는 것은 전역 스코프 오염과 예기치 않은 부작용을 일으킬 수 있어 피해야 합니다.',
        },
      ],
    },
  ],
};
