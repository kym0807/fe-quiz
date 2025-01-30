import { Quiz } from '@/types/quiz.type';

export const quiz: Quiz = {
  title: 'JavaScript Typed Arrays 마스터하기',
  description: 'Typed Arrays의 기본 개념부터 고급 활용까지 테스트해보세요',
  categories: [
    {
      title: '기본 개념',
      description:
        'Typed Arrays의 기본 구조와 특징에 대한 이해를 테스트합니다.',
      questions: [
        {
          id: 1,
          question: 'Typed Arrays의 주요 목적으로 가장 적절한 것은?',
          options: [
            '일반 배열을 완전히 대체하기 위해',
            '이진 데이터를 효율적으로 다루기 위해',
            '객체를 저장하기 위해',
            '문자열 처리를 위해',
          ],
          correctAnswer: 1,
          explanation:
            'Typed Arrays는 일반 배열을 대체하기 위한 것이 아니라, 이진 데이터를 다루기 위한 효율적인 인터페이스를 제공합니다.',
        },
        {
          id: 2,
          question: 'ArrayBuffer와 View의 관계에 대한 설명으로 올바른 것은?',
          options: [
            'ArrayBuffer는 View 없이도 직접 데이터를 읽고 쓸 수 있다',
            '하나의 ArrayBuffer는 하나의 View만 가질 수 있다',
            'View는 ArrayBuffer의 데이터에 접근하기 위한 인터페이스를 제공한다',
            'View는 항상 전체 버퍼를 참조해야 한다',
          ],
          correctAnswer: 2,
          explanation:
            'View는 ArrayBuffer의 데이터에 접근하기 위한 컨텍스트를 제공하며, 데이터 타입, 시작 오프셋, 요소 수 등을 지정할 수 있습니다.',
        },
        {
          id: 3,
          question:
            '다음 중 8비트 부호 있는 정수(-128 ~ 127)를 저장하는 Typed Array는?',
          options: ['Uint8Array', 'Int8Array', 'Int16Array', 'Uint16Array'],
          correctAnswer: 1,
          explanation:
            'Int8Array는 8비트 부호 있는 정수를 저장하며, 값의 범위는 -128부터 127까지입니다.',
        },
        {
          id: 4,
          question: 'SharedArrayBuffer의 특징으로 올바른 것은?',
          options: [
            '단일 실행 컨텍스트에서만 사용할 수 있다',
            '여러 실행 컨텍스트에서 동시에 접근할 수 있다',
            '일반 ArrayBuffer보다 항상 더 빠르다',
            '자동으로 동기화를 보장한다',
          ],
          correctAnswer: 1,
          explanation:
            'SharedArrayBuffer는 여러 실행 컨텍스트(예: 여러 웹 워커)에서 동시에 접근할 수 있도록 설계되었습니다.',
        },
        {
          id: 5,
          question: 'DataView를 사용하는 주된 이유는?',
          options: [
            '더 나은 성능을 위해',
            '더 적은 메모리 사용을 위해',
            '플랫폼 독립적인 방식으로 다양한 데이터 타입에 접근하기 위해',
            '자동 타입 변환을 위해',
          ],
          correctAnswer: 2,
          explanation:
            'DataView는 엔디안에 관계없이 플랫폼 독립적인 방식으로 다양한 데이터 타입에 접근할 수 있게 해줍니다.',
        },
      ],
    },

    {
      title: '고급 개념과 활용',
      description:
        'Typed Arrays의 고급 기능과 실제 사용 사례에 대한 이해를 테스트합니다.',
      questions: [
        {
          id: 6,
          question:
            '텍스트 데이터를 Typed Array로 처리할 때 사용하는 올바른 도구는?',
          options: [
            'String.fromCharCode만 사용',
            'TextEncoder와 TextDecoder',
            'JSON.stringify',
            'toString 메서드',
          ],
          correctAnswer: 1,
          explanation:
            'TextEncoder와 TextDecoder는 텍스트와 바이너리 데이터 간의 변환을 위한 표준 도구입니다.',
        },
        {
          id: 7,
          question:
            '여러 타입의 데이터를 하나의 ArrayBuffer에 저장할 때 고려해야 할 가장 중요한 것은?',
          options: [
            '버퍼의 총 크기',
            '데이터의 정렬(alignment)',
            '데이터의 순서',
            '뷰의 개수',
          ],
          correctAnswer: 1,
          explanation:
            '데이터 정렬(alignment)은 메모리 접근 효율성과 데이터 무결성을 위해 중요합니다.',
        },
        {
          id: 8,
          question: 'Typed Array를 일반 배열로 변환하는 가장 효율적인 방법은?',
          options: [
            'for 루프로 각 요소 복사',
            'Array.prototype.slice 호출',
            'Array.from() 사용',
            '전개 연산자(...) 사용',
          ],
          correctAnswer: 2,
          explanation:
            'Array.from()은 Typed Array를 일반 배열로 변환하는 가장 명시적이고 효율적인 방법입니다.',
        },
        {
          id: 9,
          question: 'WebGL에서 Typed Arrays를 사용하는 주된 이유는?',
          options: [
            '메모리 사용량 감소',
            '가비지 컬렉션 최적화',
            'GPU와의 효율적인 데이터 교환',
            '코드 가독성 향상',
          ],
          correctAnswer: 2,
          explanation:
            'Typed Arrays는 CPU와 GPU 간의 데이터 교환을 위한 효율적인 형식을 제공합니다.',
        },
        {
          id: 10,
          question: '다음 중 Uint8ClampedArray의 특징으로 올바른 것은?',
          options: [
            '음수 값이 허용된다',
            '255를 초과하는 값이 허용된다',
            '값이 0-255 범위로 고정(clamp)된다',
            '부동소수점을 지원한다',
          ],
          correctAnswer: 2,
          explanation:
            'Uint8ClampedArray는 값을 0-255 범위로 자동으로 고정하며, 이는 이미지 데이터 처리에 특히 유용합니다.',
        },
        {
          id: 11,
          question: 'ArrayBuffer의 slice() 메서드의 동작 방식으로 올바른 것은?',
          options: [
            '원본 버퍼의 참조를 반환한다',
            '새로운 버퍼에 데이터를 복사한다',
            '뷰만 복사한다',
            '메모리 주소만 복사한다',
          ],
          correctAnswer: 1,
          explanation:
            'ArrayBuffer.slice()는 지정된 범위의 데이터를 새로운 ArrayBuffer에 복사하여 반환합니다.',
        },
        {
          id: 12,
          question: '성능 관점에서 Typed Arrays가 일반 배열보다 유리한 경우는?',
          options: [
            '문자열 처리할 때',
            '객체를 저장할 때',
            '이진 데이터를 처리할 때',
            'JSON 데이터를 다룰 때',
          ],
          correctAnswer: 2,
          explanation:
            'Typed Arrays는 이진 데이터 처리 시 메모리 사용과 접근 속도 면에서 일반 배열보다 효율적입니다.',
        },
      ],
    },

    {
      title: '실전 응용',
      description:
        '실제 개발에서 Typed Arrays의 활용과 최적화에 대한 이해를 테스트합니다.',
      questions: [
        {
          id: 13,
          question: 'Canvas API와 함께 Typed Arrays를 사용할 때의 이점은?',
          options: [
            '캔버스 크기를 자동으로 조절할 수 있다',
            '픽셀 데이터를 직접 조작할 수 있다',
            '더 많은 색상을 표현할 수 있다',
            '캔버스 렌더링 속도가 자동으로 향상된다',
          ],
          correctAnswer: 1,
          explanation:
            'ImageData.data는 Uint8ClampedArray를 반환하여 픽셀 데이터를 직접 읽고 수정할 수 있게 해줍니다.',
        },
        {
          id: 14,
          question:
            'File API와 Typed Arrays를 함께 사용할 때 가장 적절한 방법은?',
          options: [
            '파일을 직접 Typed Array로 변환한다',
            'FileReader를 사용하여 ArrayBuffer로 읽은 후 Typed Array를 생성한다',
            '파일을 문자열로 읽은 후 변환한다',
            'Base64로 인코딩 후 변환한다',
          ],
          correctAnswer: 1,
          explanation:
            'FileReader.readAsArrayBuffer()로 파일을 읽은 후 적절한 Typed Array 뷰를 생성하는 것이 가장 효율적입니다.',
        },
        {
          id: 15,
          question: '네트워크 통신에서 Typed Arrays를 사용하는 가장 큰 이점은?',
          options: [
            '자동으로 데이터를 압축한다',
            '보안성이 향상된다',
            '이진 프로토콜과의 효율적인 데이터 교환이 가능하다',
            '네트워크 속도가 향상된다',
          ],
          correctAnswer: 2,
          explanation:
            'Typed Arrays는 WebSocket 등을 통한 이진 프로토콜 통신 시 데이터를 효율적으로 처리할 수 있게 해줍니다.',
        },
        {
          id: 16,
          question:
            '다음 중 ArrayBuffer 크기를 결정할 때 고려해야 할 사항이 아닌 것은?',
          options: [
            '처리할 데이터의 크기',
            '사용할 뷰의 타입',
            '브라우저의 종류',
            '메모리 사용량',
          ],
          correctAnswer: 2,
          explanation:
            'ArrayBuffer 크기는 처리할 데이터 크기, 사용할 뷰의 타입, 전체 메모리 사용량을 고려해야 하지만, 브라우저 종류는 크게 영향을 미치지 않습니다.',
        },
        {
          id: 17,
          question:
            'Typed Arrays를 사용한 메모리 최적화 방법으로 가장 적절하지 않은 것은?',
          options: [
            '필요한 최소 크기의 버퍼만 할당하기',
            '더 이상 필요없는 버퍼는 null로 설정하기',
            '모든 데이터를 64비트 형식으로 저장하기',
            '여러 작은 버퍼 대신 하나의 큰 버퍼 재사용하기',
          ],
          correctAnswer: 2,
          explanation:
            '모든 데이터를 64비트 형식으로 저장하는 것은 불필요한 메모리 낭비를 초래할 수 있습니다. 데이터 특성에 맞는 최적의 형식을 선택해야 합니다.',
        },
      ],
    },
  ],
};
