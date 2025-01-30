import { Quiz } from '@/types/quiz.type';

export const quiz: Quiz = {
  title: 'JavaScript 텍스트 처리 마스터하기',
  description:
    'JavaScript의 문자열 처리, 템플릿 리터럴, 국제화 등에 대한 종합 퀴즈입니다.',
  categories: [
    {
      title: '문자열 기초',
      description: 'JavaScript 문자열의 기본 개념과 생성 방법',
      questions: [
        {
          id: 1,
          question: 'JavaScript에서 문자열은 어떤 방식으로 인코딩되나요?',
          options: [
            'ASCII 코드',
            'UTF-8 코드',
            'UTF-16 코드 단위',
            'Base64 인코딩',
          ],
          correctAnswer: 2,
          explanation:
            'JavaScript의 String 타입은 UTF-16 코드 단위의 16비트 부호 없는 정수값들의 집합으로 구성됩니다.',
        },
        {
          id: 2,
          question:
            '다음 중 String 객체 생성 방식의 특징으로 올바르지 않은 것은?',
          options: [
            "new String()으로 생성된 객체는 typeof 연산 시 'object'를 반환한다",
            '리터럴 방식이 메모리 사용면에서 더 효율적이다',
            'String 객체는 원시 문자열보다 더 많은 기능을 제공한다',
            'String 객체는 항상 리터럴 방식보다 더 나은 성능을 제공한다',
          ],
          correctAnswer: 3,
          explanation:
            'String 객체는 원시 문자열보다 더 많은 메모리를 사용하며, 성능면에서도 리터럴 방식이 더 효율적입니다.',
        },
        {
          id: 3,
          question:
            "유니코드 이스케이프 시퀀스를 사용한 다음 코드의 출력으로 올바른 것은? console.log('\\u00A9')",
          options: ['u00A9', '©', 'undefined', 'Error 발생'],
          correctAnswer: 1,
          explanation:
            '\\u00A9는 저작권 기호(©)의 유니코드 이스케이프 시퀀스입니다.',
        },
        {
          id: 4,
          question: '템플릿 리터럴의 장점이 아닌 것은?',
          options: [
            '여러 줄 문자열을 쉽게 작성할 수 있다',
            '표현식을 삽입할 수 있다',
            '문자열 연결보다 항상 더 나은 성능을 제공한다',
            '특수 문자를 이스케이프하지 않고 사용할 수 있다',
          ],
          correctAnswer: 2,
          explanation:
            '템플릿 리터럴의 성능은 상황에 따라 다르며, 항상 더 나은 성능을 제공하지는 않습니다.',
        },
      ],
    },
    {
      title: '문자열 메서드와 조작',
      description: 'JavaScript의 문자열 메서드와 처리 기법',
      questions: [
        {
          id: 5,
          question: 'substring()과 slice() 메서드의 가장 중요한 차이점은?',
          options: [
            'slice()는 음수 인덱스를 지원하지 않는다',
            'substring()은 음수 인덱스를 지원하지 않는다',
            'slice()는 더 긴 문자열을 처리할 수 없다',
            'substring()은 시작 인덱스가 끝 인덱스보다 클 수 없다',
          ],
          correctAnswer: 1,
          explanation:
            'substring()은 음수 인덱스를 0으로 처리하지만, slice()는 음수 인덱스를 문자열 끝에서부터의 위치로 해석합니다.',
        },
        {
          id: 6,
          question: "다음 코드의 출력값은? 'Hello'.charAt(5)",
          options: ['undefined', 'null', 'o', "빈 문자열('')"],
          correctAnswer: 3,
          explanation:
            "charAt()은 해당 인덱스에 문자가 없을 경우 빈 문자열을 반환합니다. 'Hello'의 마지막 인덱스는 4이므로 5번 인덱스는 존재하지 않습니다.",
        },
        {
          id: 7,
          question:
            '문자열에서 모든 발생 위치를 찾아야 할 때 가장 적절한 방법은?',
          options: [
            'indexOf()를 반복 사용',
            'search() 메서드 사용',
            'match() 메서드와 g 플래그가 있는 정규식 사용',
            'split() 메서드 사용',
          ],
          correctAnswer: 2,
          explanation:
            'g(global) 플래그가 있는 정규식과 match() 메서드를 사용하면 모든 발생 위치를 한 번에 찾을 수 있습니다.',
        },
        {
          id: 8,
          question: '큰 문자열을 여러 번 연결할 때 가장 효율적인 방법은?',
          options: [
            '+ 연산자 사용',
            'concat() 메서드 사용',
            '배열로 만들어 join() 사용',
            '템플릿 리터럴 사용',
          ],
          correctAnswer: 2,
          explanation:
            '큰 문자열을 여러 번 연결할 때는 배열로 만들어 join()을 사용하는 것이 메모리 사용과 성능 면에서 가장 효율적입니다.',
        },
      ],
    },
    {
      title: '국제화(Internationalization)',
      description: 'Intl 객체를 활용한 다국어 지원',
      questions: [
        {
          id: 9,
          question:
            "Intl.NumberFormat의 style 옵션 중 'currency'를 사용할 때 반드시 필요한 추가 옵션은?",
          options: [
            'locale',
            'currency',
            'minimumFractionDigits',
            'useGrouping',
          ],
          correctAnswer: 1,
          explanation:
            "통화 형식을 사용할 때는 반드시 currency 옵션을 지정해야 합니다. 이는 통화 코드(예: 'USD', 'EUR', 'KRW' 등)를 지정하는데 사용됩니다.",
        },
        {
          id: 10,
          question: 'Intl.Collator를 사용하는 주된 이유는?',
          options: [
            '문자열 인코딩 변환을 위해',
            '문자열 압축을 위해',
            '지역화된 문자열 정렬을 위해',
            '문자열 유효성 검사를 위해',
          ],
          correctAnswer: 2,
          explanation:
            'Intl.Collator는 각 언어와 지역의 정렬 규칙을 따르는 문자열 비교를 제공하여, 올바른 지역화된 정렬을 가능하게 합니다.',
        },
        {
          id: 11,
          question:
            '다음 중 Intl.DateTimeFormat의 특징으로 올바르지 않은 것은?',
          options: [
            '시간대를 지정할 수 있다',
            '날짜와 시간의 표시 형식을 세밀하게 제어할 수 있다',
            '모든 지역의 달력 시스템을 지원한다',
            '성능상 이점을 위해 포매터를 재사용할 수 있다',
          ],
          correctAnswer: 2,
          explanation:
            'Intl.DateTimeFormat이 모든 달력 시스템을 지원하지는 않습니다. 주요 달력 시스템만을 지원합니다.',
        },
        {
          id: 12,
          question: '문자열 국제화 처리 시 고려해야 할 사항이 아닌 것은?',
          options: [
            '문자 인코딩',
            '날짜/시간 형식',
            '문자열 압축률',
            '숫자 형식',
          ],
          correctAnswer: 2,
          explanation:
            '문자열 압축률은 국제화와 직접적인 관련이 없습니다. 국제화에서 중요한 것은 인코딩, 형식, 정렬 규칙 등입니다.',
        },
      ],
    },

    {
      title: '고급 문자열 처리와 최적화',
      description: 'JavaScript의 고급 문자열 처리 기법과 성능 최적화',
      questions: [
        {
          id: 13,
          question:
            '정규식을 자주 사용해야 할 때의 최적화 방법으로 가장 적절한 것은?',
          options: [
            '매번 새로운 정규식을 생성한다',
            '정규식 객체를 미리 생성하여 재사용한다',
            '정규식 대신 문자열 메서드만 사용한다',
            '정규식을 문자열로 저장했다가 필요할 때 변환한다',
          ],
          correctAnswer: 1,
          explanation:
            '자주 사용되는 정규식을 매번 생성하는 것은 비효율적입니다. 정규식 객체를 미리 생성하여 재사용하면 성능을 향상시킬 수 있습니다.',
        },
        {
          id: 14,
          question:
            '다음 중 문자열 메모리 사용을 최적화하는 방법으로 올바르지 않은 것은?',
          options: [
            '큰 문자열을 여러 조각으로 나누어 처리한다',
            '불필요한 중간 문자열 생성을 피한다',
            '가능한 모든 문자열을 인터닝(interning)한다',
            '문자열 연결 연산을 최소화한다',
          ],
          correctAnswer: 2,
          explanation:
            '모든 문자열을 인터닝하는 것은 메모리 사용량을 오히려 증가시킬 수 있으며, JavaScript에서는 문자열 인터닝을 명시적으로 제어할 수 없습니다.',
        },
        {
          id: 15,
          question:
            '템플릿 리터럴의 태그드 템플릿 함수에 대한 설명으로 올바르지 않은 것은?',
          options: [
            '문자열 처리를 사용자 정의할 수 있다',
            '표현식의 평가 결과를 변형할 수 있다',
            '템플릿 리터럴의 원시 값에 접근할 수 있다',
            '비동기 처리를 직접 수행할 수 있다',
          ],
          correctAnswer: 3,
          explanation:
            '태그드 템플릿 함수는 비동기 처리를 직접 수행할 수 없습니다. 비동기 처리는 함수 내부에서 Promise를 반환하는 방식으로 구현해야 합니다.',
        },
        {
          id: 16,
          question:
            '다음 중 문자열 처리에서 발생할 수 있는 보안 취약점이 아닌 것은?',
          options: [
            'HTML 인젝션',
            '정규식 DoS(ReDoS)',
            '문자열 인코딩 오류',
            '문자열 길이 제한',
          ],
          correctAnswer: 3,
          explanation:
            '문자열 길이 제한은 보안 취약점이 아니라 오히려 보안을 강화하는 방법 중 하나입니다. 적절한 길이 제한은 버퍼 오버플로우와 같은 공격을 방지할 수 있습니다.',
        },
        {
          id: 17,
          question: '문자열의 부분 문자열 검색 시 성능상 가장 효율적인 방법은?',
          options: [
            'indexOf() 메서드 사용',
            'includes() 메서드 사용',
            '정규식 사용',
            'split() 후 배열 검색',
          ],
          correctAnswer: 0,
          explanation:
            'indexOf()는 네이티브 구현으로 최적화되어 있어, 단순한 부분 문자열 검색에서는 가장 빠른 성능을 제공합니다.',
        },
        {
          id: 18,
          question:
            '국제화된 애플리케이션에서 문자열 비교 시 고려해야 할 사항이 아닌 것은?',
          options: [
            '문자열의 정규화 방식',
            '로케일별 정렬 규칙',
            '문자열의 압축 방식',
            '대소문자 구분 규칙',
          ],
          correctAnswer: 2,
          explanation:
            '문자열 압축 방식은 국제화와 관련이 없습니다. 국제화된 문자열 비교에서는 정규화, 정렬 규칙, 대소문자 구분 등이 중요합니다.',
        },
      ],
    },
  ],
};
