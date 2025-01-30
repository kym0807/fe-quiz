import { Quiz } from '@/types/quiz.type';

export const quiz: Quiz = {
  title: 'JavaScript 숫자와 날짜 마스터하기',
  description:
    'JavaScript의 숫자 표현, 날짜 처리, 그리고 관련 객체들에 대한 종합 퀴즈입니다.',
  categories: [
    {
      title: '숫자의 기본',
      description: 'JavaScript의 기본적인 숫자 표현과 특수값에 대한 이해',
      questions: [
        {
          id: 1,
          question:
            'JavaScript에서 숫자가 저장되는 형식은 무엇이며, 최대 정수 정밀도는 얼마인가요?',
          options: [
            '32비트 단정밀도, ±2^31 - 1',
            '64비트 이중정밀도(IEEE 754), ±2^53 - 1',
            '128비트 쿼드정밀도, ±2^112 - 1',
            '16비트 반정밀도, ±2^15 - 1',
          ],
          correctAnswer: 1,
          explanation:
            'JavaScript는 64비트 이중정밀도 형식(IEEE 754)을 사용하며, ±2^53 - 1까지의 정수를 정확하게 표현할 수 있습니다.',
        },
        {
          id: 2,
          question:
            '다음 중 JavaScript에서 8진수를 올바르게 표현한 것은 무엇인가요?',
          options: ['0755', '8755', '0o755', '755o'],
          correctAnswer: 2,
          explanation:
            '현대 JavaScript에서는 8진수를 나타내기 위해 0o 또는 0O 접두사를 사용합니다. 0755와 같은 레거시 문법은 엄격 모드에서 사용할 수 없습니다.',
        },
        {
          id: 3,
          question: 'NaN 값의 특징으로 올바르지 않은 것은?',
          options: [
            'NaN === NaN은 false를 반환한다',
            'isNaN() 함수로 검사할 수 있다',
            'Number.isNaN()으로 더 정확한 검사가 가능하다',
            'NaN은 undefined와 동일한 값이다',
          ],
          correctAnswer: 3,
          explanation:
            "NaN은 '숫자가 아님'을 나타내는 특수한 값으로, undefined와는 다른 값입니다. NaN의 가장 특이한 특징은 자기 자신과도 동등하지 않다는 것입니다.",
        },
        {
          id: 4,
          question:
            '다음 코드의 실행 결과는 무엇인가요? console.log(0.1 + 0.2 === 0.3)',
          options: ['true', 'false', 'undefined', 'TypeError'],
          correctAnswer: 1,
          explanation:
            'IEEE 754 부동소수점 표현의 한계로 인해 0.1 + 0.2는 정확히 0.3이 아닌 0.30000000000000004가 됩니다. 이는 JavaScript만의 문제가 아닌 IEEE 754를 사용하는 모든 프로그래밍 언어의 특성입니다.',
        },
        {
          id: 5,
          question: "지수 표기법에서 '1e-3'이 나타내는 값은 무엇인가요?",
          options: ['1000', '0.001', '-1000', '-0.001'],
          correctAnswer: 1,
          explanation:
            '1e-3은 1 × 10^-3을 의미하며, 소수점을 왼쪽으로 3칸 이동시켜 0.001이 됩니다.',
        },
        {
          id: 6,
          question: 'Number.EPSILON의 주요 용도는 무엇인가요?',
          options: [
            '정수의 최대값을 나타내기 위해',
            '부동소수점 연산의 오차를 확인하기 위해',
            '무한대 값을 표현하기 위해',
            '날짜 계산의 정밀도를 높이기 위해',
          ],
          correctAnswer: 1,
          explanation:
            'Number.EPSILON은 1과 1보다 큰 가장 작은 수의 차이(약 2.22e-16)를 나타내며, 부동소수점 연산의 오차를 허용 범위 내에서 비교할 때 사용됩니다.',
        },
        {
          id: 7,
          question: 'BigInt를 사용해야 하는 상황은 언제인가요?',
          options: [
            '소수점이 있는 큰 숫자를 다룰 때',
            'Number.MAX_SAFE_INTEGER를 초과하는 정수 계산이 필요할 때',
            '날짜 계산에서 밀리초 단위의 정밀도가 필요할 때',
            '음수의 절댓값이 필요할 때',
          ],
          correctAnswer: 1,
          explanation:
            'BigInt는 Number.MAX_SAFE_INTEGER(2^53 - 1)를 초과하는 정수를 안전하게 다룰 수 있게 해주지만, 소수점을 표현할 수 없다는 제한이 있습니다.',
        },
      ],
    },
    {
      title: 'Math 객체와 수학 연산',
      description: 'JavaScript의 Math 객체와 수학적 연산에 대한 이해',
      questions: [
        {
          id: 8,
          question:
            'Math.round(), Math.ceil(), Math.floor()의 차이점을 보여주는 올바른 예시는?',
          options: [
            'Math.round(3.4)=3, Math.ceil(3.4)=4, Math.floor(3.4)=3',
            'Math.round(3.4)=3, Math.ceil(3.4)=3, Math.floor(3.4)=3',
            'Math.round(3.4)=4, Math.ceil(3.4)=4, Math.floor(3.4)=4',
            'Math.round(3.4)=3, Math.ceil(3.4)=3, Math.floor(3.4)=4',
          ],
          correctAnswer: 0,
          explanation:
            'Math.round()는 반올림, Math.ceil()은 올림, Math.floor()는 내림을 수행합니다.',
        },
        {
          id: 9,
          question: '삼각함수 계산 시 주의해야 할 점으로 올바른 것은?',
          options: [
            '각도를 그대로 사용할 수 있다',
            '라디안 값으로 변환해야 한다',
            '도(degree)만 사용할 수 있다',
            '음수 값은 사용할 수 없다',
          ],
          correctAnswer: 1,
          explanation:
            'JavaScript의 Math 객체의 삼각함수는 라디안 값을 사용합니다. 각도를 사용하려면 (각도 × Math.PI / 180)으로 변환해야 합니다.',
        },
        {
          id: 10,
          question:
            '다음 중 0에서 10 사이의 랜덤한 정수를 생성하는 올바른 코드는?',
          options: [
            'Math.random() * 10',
            'Math.floor(Math.random() * 11)',
            'Math.ceil(Math.random() * 10)',
            'Math.round(Math.random() * 10)',
          ],
          correctAnswer: 1,
          explanation:
            'Math.random()은 0 이상 1 미만의 값을 반환합니다. 11을 곱하고 Math.floor()를 사용하면 0에서 10까지의 정수를 얻을 수 있습니다.',
        },
        {
          id: 11,
          question: 'Math.pow(2, 3)와 2 ** 3의 차이점으로 올바른 것은?',
          options: [
            'Math.pow()는 더 큰 숫자를 다룰 수 있다',
            '** 연산자는 음수 지수를 지원하지 않는다',
            '성능상의 차이가 있다',
            '기능적으로 동일하며, ** 연산자가 더 새로운 문법이다',
          ],
          correctAnswer: 3,
          explanation:
            '두 방식은 기능적으로 동일합니다. ** 연산자는 ES2016에서 도입된 더 새로운 지수 연산자입니다.',
        },
        {
          id: 12,
          question:
            'Math.max()와 Math.min()을 사용할 때의 주의사항으로 올바른 것은?',
          options: [
            '음수는 사용할 수 없다',
            '배열을 직접 인자로 전달할 수 있다',
            '스프레드 연산자(...)를 사용해야 배열의 값을 전달할 수 있다',
            '최대 2개의 인자만 받을 수 있다',
          ],
          correctAnswer: 2,
          explanation:
            'Math.max()와 Math.min()은 배열을 직접 인자로 받지 않습니다. 배열의 값을 전달하려면 스프레드 연산자(...)를 사용해야 합니다.',
        },
      ],
    },
    {
      title: 'Date 객체와 시간 처리',
      description: 'JavaScript의 Date 객체 사용법과 시간 처리 방법',
      questions: [
        {
          id: 13,
          question:
            'new Date()로 객체를 생성할 때 월(month)을 나타내는 숫자의 범위는?',
          options: [
            '1부터 12까지',
            '0부터 11까지',
            '1부터 31까지',
            '0부터 12까지',
          ],
          correctAnswer: 1,
          explanation:
            'JavaScript의 Date 객체에서 월은 0부터 시작합니다. 따라서 0은 1월, 11은 12월을 나타냅니다.',
        },
        {
          id: 14,
          question:
            '두 날짜 간의 차이를 일(day) 단위로 계산하는 가장 적절한 방법은?',
          options: [
            '(date1 - date2) / 24',
            '(date1 - date2) / 1000 / 60 / 60 / 24',
            'date1.getDate() - date2.getDate()',
            'Math.abs(date1.getDay() - date2.getDay())',
          ],
          correctAnswer: 1,
          explanation:
            'Date 객체의 빼기 연산은 밀리초 단위의 차이를 반환합니다. 일 단위로 변환하려면 1000(ms) * 60(s) * 60(m) * 24(h)로 나눠야 합니다.',
        },
        {
          id: 15,
          question: 'getDay() 메서드가 반환하는 값의 의미로 올바른 것은?',
          options: [
            '월의 날짜 (1-31)',
            '연도의 날짜 (1-365)',
            '요일 (0-6, 0은 일요일)',
            '요일 (1-7, 1은 월요일)',
          ],
          correctAnswer: 2,
          explanation:
            'getDay()는 0(일요일)부터 6(토요일)까지의 숫자로 요일을 반환합니다. 날짜를 얻으려면 getDate()를 사용해야 합니다.',
        },
      ],
    },
    {
      title: '고급 개념과 실제 활용',
      description: 'JavaScript의 숫자와 날짜 관련 고급 개념 및 실제 사용 사례',
      questions: [
        {
          id: 16,
          question: '다음 중 시간대(Timezone) 처리와 관련하여 올바른 설명은?',
          options: [
            'new Date()는 항상 UTC 시간을 반환한다',
            'getTime()은 로컬 시간대의 타임스탬프를 반환한다',
            'Unix 타임스탬프는 시간대와 무관하게 항상 동일하다',
            'getTimezoneOffset()은 UTC와의 시차를 시간 단위로 반환한다',
          ],
          correctAnswer: 2,
          explanation:
            'Unix 타임스탬프(밀리초)는 UTC 기준이며 전 세계 어디서나 동일한 값을 가집니다. 이것이 시간대 관련 연산에서 타임스탬프를 선호하는 이유입니다.',
        },
        {
          id: 17,
          question:
            'BigInt와 일반 Number 타입 간의 연산 시 발생하는 상황으로 올바른 것은?',
          options: [
            '자동으로 BigInt로 형변환되어 계산된다',
            '자동으로 Number로 형변환되어 계산된다',
            'TypeError가 발생한다',
            'NaN이 반환된다',
          ],
          correctAnswer: 2,
          explanation:
            'JavaScript는 BigInt와 Number 타입 간의 암묵적 형변환을 허용하지 않으며, 이들 간의 직접적인 연산 시도 시 TypeError가 발생합니다.',
        },
        {
          id: 18,
          question: 'padStart()를 사용한 날짜 형식화의 가장 적절한 사용 예는?',
          options: [
            "date.getMonth().padStart(2, '0')",
            "String(date.getMonth()).padStart(2, '0')",
            "date.getMonth().toString().padStart(2, '0')",
            "${date.getMonth()}.padStart(2, '0')",
          ],
          correctAnswer: 2,
          explanation:
            '숫자를 padStart()로 형식화하기 위해서는 먼저 toString()으로 문자열로 변환해야 합니다. getMonth()는 숫자를 반환하기 때문입니다.',
        },
        {
          id: 19,
          question:
            '다음 중 메모리 관점에서 가장 효율적인 큰 숫자 처리 방법은?',
          options: [
            'Number 타입 사용',
            'BigInt 타입 사용',
            '문자열로 처리',
            '배열로 분할하여 처리',
          ],
          correctAnswer: 0,
          explanation:
            'Number 타입은 64비트 고정 크기를 사용하여 메모리 사용이 일정하고 효율적입니다. BigInt는 크기에 따라 메모리 사용량이 변동될 수 있습니다.',
        },
        {
          id: 20,
          question: '다음 중 성능상 가장 비효율적인 날짜 비교 방법은?',
          options: [
            'date1.getTime() > date2.getTime()',
            'date1 > date2',
            'date1.toISOString() > date2.toISOString()',
            '+date1 > +date2',
          ],
          correctAnswer: 2,
          explanation:
            '문자열 변환 후 비교는 추가적인 변환 작업이 필요하며, 직접적인 Date 객체 비교나 타임스탬프 비교가 더 효율적입니다.',
        },
        {
          id: 21,
          question:
            '국제화(i18n)를 고려할 때, 날짜를 문자열로 표현하는 가장 안전한 방법은?',
          options: [
            'date.toString()',
            'date.toLocaleDateString()',
            'date.toUTCString()',
            'date.toISOString()',
          ],
          correctAnswer: 1,
          explanation:
            'toLocaleDateString()은 사용자의 로케일에 맞춰 날짜를 형식화하므로, 국제화 관점에서 가장 적합한 방법입니다.',
        },
        {
          id: 22,
          question: '다음 중 Date 객체의 메서드 체이닝이 불가능한 이유는?',
          options: [
            'JavaScript의 제한 사항 때문에',
            'set 메서드들이 undefined를 반환하기 때문에',
            'set 메서드들이 밀리초 값을 반환하기 때문에',
            'set 메서드들이 새로운 Date 객체를 반환하기 때문에',
          ],
          correctAnswer: 1,
          explanation:
            'Date 객체의 set 메서드들은 undefined를 반환하므로 체이닝이 불가능합니다. 이는 객체를 직접 수정하는 방식으로 설계되었기 때문입니다.',
        },
      ],
    },
  ],
};
