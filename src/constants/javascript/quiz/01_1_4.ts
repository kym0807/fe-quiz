import { Quiz } from '@/types/quiz.type';

export const quiz: Quiz = {
  title: 'JavaScript 표현식과 연산자 퀴즈',
  description:
    'JavaScript의 다양한 표현식과 연산자에 대한 이해를 테스트합니다.',
  categories: [
    {
      title: '표현식과 할당 연산자',
      description:
        '기본적인 표현식의 개념과 할당 연산자의 이해를 테스트합니다.',
      questions: [
        {
          id: 1,
          question: '다음 중 부수 효과(side effect)가 있는 표현식은?',
          options: ['3 + 4', 'x === y', 'arr.length', 'count++'],
          correctAnswer: 3,
          explanation:
            '증가 연산자(++)는 값을 변경하는 부수 효과를 발생시킵니다.',
        },
        {
          id: 2,
          question: '다음 코드의 결과는? let x = null; x ??= 5;',
          options: ['null', '5', 'undefined', '오류 발생'],
          correctAnswer: 1,
          explanation:
            'Nullish 할당 연산자(??=)는 값이 null 또는 undefined일 때만 할당을 수행합니다.',
        },
        {
          id: 3,
          question: '객체 속성 할당에 대한 설명으로 틀린 것은?',
          options: [
            'obj.x = 3 형태로 점 표기법을 사용할 수 있다',
            'obj["x"] = 3 형태로 대괄호 표기법을 사용할 수 있다',
            '변수에 저장된 키 값을 사용할 때는 반드시 대괄호 표기법을 사용해야 한다',
            'obj.x와 obj[x]는 항상 동일한 결과를 반환한다',
          ],
          correctAnswer: 3,
          explanation:
            "obj.x는 리터럴 'x' 속성에 접근하지만, obj[x]는 변수 x의 값을 키로 사용합니다.",
        },
      ],
    },
    {
      title: '비교와 산술 연산자',
      description: '비교 연산자와 산술 연산자의 동작을 테스트합니다.',
      questions: [
        {
          id: 4,
          question: '다음 중 true를 반환하는 것은?',
          options: ["'' == 0", "'5' === 5", 'null == undefined', 'NaN === NaN'],
          correctAnswer: 2,
          explanation:
            'null과 undefined는 느슨한 동등 비교(==)에서 서로 같다고 평가됩니다.',
        },
        {
          id: 5,
          question: "다음 연산의 결과는? '5' + 3",
          options: ['8', "'53'", '53', 'NaN'],
          correctAnswer: 1,
          explanation:
            '문자열과 숫자를 + 연산자로 결합하면 숫자가 문자열로 변환되어 연결됩니다.',
        },
      ],
    },
    {
      title: '논리 연산자',
      description: '논리 연산자와 단축 평가에 대한 이해를 테스트합니다.',
      questions: [
        {
          id: 6,
          question:
            '다음 중 Nullish 병합 연산자(??)에 대한 설명으로 올바른 것은?',
          options: [
            '왼쪽 피연산자가 falsy일 때 오른쪽 피연산자를 반환한다',
            '왼쪽 피연산자가 null 또는 undefined일 때만 오른쪽 피연산자를 반환한다',
            '항상 불리언 값을 반환한다',
            '왼쪽 피연산자가 truthy일 때 오른쪽 피연산자를 반환한다',
          ],
          correctAnswer: 1,
          explanation:
            'Nullish 병합 연산자는 왼쪽 피연산자가 null 또는 undefined일 때만 오른쪽 피연산자를 반환합니다.',
        },
        {
          id: 7,
          question: "다음 코드의 결과는? 'dog' && 'cat' && false && 'mouse'",
          options: ["'dog'", "'cat'", 'false', "'mouse'"],
          correctAnswer: 2,
          explanation:
            '논리 AND 연산자(&&)는 첫 번째 falsy 값을 만나면 그 값을 반환합니다.',
        },
      ],
    },

    {
      title: '비트 연산자',
      description: '비트 단위 연산과 그 활용에 대한 이해를 테스트합니다.',
      questions: [
        {
          id: 8,
          question: '다음 비트 연산의 결과는? 9 & 5',
          options: ['14', '1', '13', '0'],
          correctAnswer: 1,
          explanation:
            '9(1001) & 5(0101) = 1(0001)입니다. 비트 AND 연산은 두 비트가 모두 1일 때만 1을 반환합니다.',
        },
        {
          id: 9,
          question: '다음 중 비트 연산자의 특징으로 올바르지 않은 것은?',
          options: [
            '비트 연산은 32비트 정수로 처리된다',
            '비트 시프트 연산은 부호를 유지한다',
            '비트 NOT 연산(~)은 부호를 변경하지 않는다',
            '비트 OR 연산(|)은 두 비트 중 하나라도 1이면 1을 반환한다',
          ],
          correctAnswer: 2,
          explanation:
            '비트 NOT 연산(~)은 모든 비트를 반전시키므로 부호도 변경됩니다.',
        },
        {
          id: 10,
          question: '8을 오른쪽으로 2비트 시프트한 결과는? (8 >> 2)',
          options: ['4', '2', '16', '32'],
          correctAnswer: 1,
          explanation:
            '8(1000)을 오른쪽으로 2비트 시프트하면 2(0010)가 됩니다.',
        },
      ],
    },
    {
      title: '특수 연산자',
      description:
        'typeof, instanceof, delete 등 특수 목적 연산자에 대한 이해를 테스트합니다.',
      questions: [
        {
          id: 11,
          question: '다음 중 typeof 연산자의 반환값으로 올바르지 않은 것은?',
          options: [
            "typeof [] === 'array'",
            "typeof null === 'object'",
            "typeof undefined === 'undefined'",
            "typeof function(){} === 'function'",
          ],
          correctAnswer: 0,
          explanation:
            "배열의 typeof 결과는 'object'입니다. 배열 여부는 Array.isArray()로 확인할 수 있습니다.",
        },
        {
          id: 12,
          question: '옵셔널 체이닝(?.)에 대한 설명으로 틀린 것은?',
          options: [
            'undefined나 null인 객체의 속성에 안전하게 접근할 수 있다',
            '존재하지 않는 메서드 호출을 방지할 수 있다',
            '배열의 인덱스 접근에는 사용할 수 없다',
            '중첩된 객체 속성 접근 시 코드를 단순화할 수 있다',
          ],
          correctAnswer: 2,
          explanation:
            '옵셔널 체이닝은 배열의 인덱스 접근에도 사용할 수 있습니다. (예: array?.[0])',
        },
      ],
    },
    {
      title: '연산자 우선순위와 실제 활용',
      description:
        '연산자의 우선순위와 실제 사용 사례에 대한 이해를 테스트합니다.',
      questions: [
        {
          id: 13,
          question: '다음 표현식의 결과는? 1 + 2 * 3 + 4 ** 2',
          options: ['81', '23', '21', '25'],
          correctAnswer: 2,
          explanation:
            '연산자 우선순위에 따라 4 ** 2 (16) → 2 * 3 (6) → 1 + 6 + 16 = 23 순서로 계산됩니다.',
        },
        {
          id: 14,
          question: '다음 중 실행 순서가 가장 늦은 연산자는?',
          options: ['++', 'instanceof', '??', '='],
          correctAnswer: 3,
          explanation:
            '할당 연산자(=)는 대부분의 연산자보다 우선순위가 낮습니다.',
        },
        {
          id: 15,
          question:
            '다음 코드의 결과는? let a = 1; let b = 2; let c = 3; a += b += c;',
          options: [
            'a = 3, b = 2, c = 3',
            'a = 6, b = 5, c = 3',
            'a = 6, b = 2, c = 3',
            'a = 3, b = 5, c = 3',
          ],
          correctAnswer: 1,
          explanation:
            '오른쪽에서 왼쪽으로 실행되어 먼저 b += c (b = 5)가 실행되고, 그 다음 a += 5 (a = 6)가 실행됩니다.',
        },
      ],
    },
  ],
};
