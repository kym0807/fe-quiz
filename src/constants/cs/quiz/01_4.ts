import { Quiz } from '@/types/quiz.type';

export const quiz: Quiz = {
  title: '정보처리기능사 기출 문제',
  description: '정보처리기능사에서 자주 나오는 문제들을 모아놓은 퀴즈입니다.',
  categories: [
    {
      title: '컴퓨터 일반',
      description: '컴퓨터 기본 구조와 운영체제 등 전반적인 지식을 묻는 문제들',
      questions: [
        {
          id: 1,
          question:
            '다음 중 컴퓨터 성능에 직접적인 영향을 미치는 요소가 아닌 것은?',
          options: [
            'CPU 클럭 속도',
            'RAM 용량',
            '하드디스크 용량',
            '캐시 메모리',
          ],
          correctAnswer: 2,
          explanation:
            'CPU 클럭 속도, RAM 용량, 캐시 메모리는 시스템 성능에 직접적으로 영향을 주지만, 하드디스크 용량은 저장 용량에 관한 것이므로 성능에 직접적인 영향이 적습니다.',
        },
        {
          id: 2,
          question: '다음 중 운영체제의 주요 기능으로 옳지 않은 것은?',
          options: [
            '프로세스 관리',
            '메모리 관리',
            '파일 관리',
            '컴파일러 실행',
          ],
          correctAnswer: 3,
          explanation:
            '운영체제는 프로세스, 메모리, 파일, 입출력 장치 관리 등을 수행하며, 컴파일러 실행은 운영체제의 주요 기능이 아니라 애플리케이션 레벨에서 수행됩니다.',
        },
        {
          id: 3,
          question: 'USB, SSD, HDD와 같은 장치를 통칭하는 용어는 무엇인가?',
          options: ['입력 장치', '출력 장치', '저장 장치', '네트워크 장치'],
          correctAnswer: 2,
          explanation:
            "USB 메모리, SSD, HDD는 모두 데이터를 저장하는 장치이므로 '저장 장치'입니다.",
        },
        {
          id: 4,
          question: '다음 중 모바일 운영체제가 아닌 것은?',
          options: ['iOS', 'Android', 'Linux', 'Windows Phone'],
          correctAnswer: 2,
          explanation:
            'Linux는 서버나 PC 환경에서 주로 사용되는 운영체제이며, iOS, Android, Windows Phone은 모바일 운영체제입니다.',
        },
        {
          id: 5,
          question:
            '다음 중 컴퓨터 부팅 과정에서 가장 먼저 실행되는 소프트웨어는?',
          options: ['운영체제(OS)', 'BIOS/UEFI', '부트로더', '드라이버'],
          correctAnswer: 1,
          explanation:
            'BIOS나 UEFI가 가장 먼저 실행되어 하드웨어 초기화를 수행한 뒤, 부트로더를 통해 운영체제가 실행됩니다.',
        },
      ],
    },
    {
      title: '데이터베이스',
      description: '데이터베이스 기초, SQL, 트랜잭션 등의 문제들',
      questions: [
        {
          id: 6,
          question:
            '다음 중 데이터베이스 관리 시스템(DBMS)의 주요 기능에 해당하지 않는 것은?',
          options: [
            '데이터 정의',
            '데이터 조작',
            '데이터 제어',
            '데이터 암호화',
          ],
          correctAnswer: 3,
          explanation:
            'DBMS는 데이터 정의(DDL), 데이터 조작(DML), 데이터 제어(DCL) 등의 기능이 핵심이며, 데이터 암호화는 보안적으로 별도 고려되는 기능입니다.',
        },
        {
          id: 7,
          question:
            '관계형 데이터베이스에서 데이터 중복을 최소화하기 위한 과정은 무엇인가?',
          options: ['정규화', '인덱싱', '튜닝', '트랜잭션'],
          correctAnswer: 0,
          explanation:
            '정규화(Normalization)는 데이터 중복과 이상 현상을 최소화하기 위해 테이블 구조를 체계적으로 분해하는 과정입니다.',
        },
        {
          id: 8,
          question: '다음 중 트랜잭션의 특성에 해당하지 않는 것은?',
          options: [
            '원자성(Atomicity)',
            '일관성(Consistency)',
            '지속성(Durability)',
            '가시성(Visibility)',
          ],
          correctAnswer: 3,
          explanation:
            "트랜잭션은 원자성, 일관성, 독립성(격리성), 지속성(ACID)을 만족해야 하며, '가시성(Visibility)'은 해당되지 않습니다.",
        },
        {
          id: 9,
          question:
            'SQL 중 데이터를 조회하기 위해 사용되는 언어(DML)에 해당하는 것은?',
          options: ['DDL', 'DML', 'DCL', 'TCL'],
          correctAnswer: 1,
          explanation:
            'DML(Data Manipulation Language)은 SELECT, INSERT, UPDATE, DELETE 등 데이터를 조작하는 언어이며, 그 중 SELECT가 조회를 담당합니다.',
        },
        {
          id: 10,
          question:
            '다음 중 관계형 데이터베이스에서 기본키(Primary Key)의 조건으로 옳지 않은 것은?',
          options: [
            '유일해야 한다(Unique).',
            'NULL 값을 가질 수 없다.',
            '여러 개의 후보키 중 하나가 될 수 있다.',
            '중복 값을 허용한다.',
          ],
          correctAnswer: 3,
          explanation:
            '기본키는 유일성과 무결성을 유지해야 하며, NULL 값을 가질 수 없고 중복 값을 허용하지 않습니다.',
        },
      ],
    },
    {
      title: '프로그래밍 언어',
      description:
        '프로그래밍 언어의 기본 개념, 문법, OOP 특징 등을 묻는 문제들',
      questions: [
        {
          id: 11,
          question:
            '다음 중 객체지향 프로그래밍(OOP)의 주요 개념으로 볼 수 없는 것은?',
          options: [
            '캡슐화(Encapsulation)',
            '상속(Inheritance)',
            '다형성(Polymorphism)',
            '병행성(Concurrency)',
          ],
          correctAnswer: 3,
          explanation:
            '객체지향의 주요 특징은 캡슐화, 상속, 다형성이며, 병행성(Concurrency)은 별개의 개념입니다.',
        },
        {
          id: 12,
          question:
            '컴파일 과정 중 소스 코드를 기계어로 직접 변환하지 않고, 바이트코드나 중간코드로 변환 후 가상 머신에서 실행되는 언어의 예로 적절한 것은?',
          options: ['C 언어', 'Java', '어셈블리어', 'Python'],
          correctAnswer: 1,
          explanation:
            'Java는 소스 코드를 바이트코드(.class)로 컴파일한 뒤, JVM에서 실행되는 방식으로 동작합니다.',
        },
        {
          id: 13,
          question: 'C 언어에서 배열의 인덱스는 어떤 값부터 시작하는가?',
          options: ['-1', '0', '1', '2'],
          correctAnswer: 1,
          explanation:
            'C 언어의 배열 인덱스는 0부터 시작합니다. 예: arr[0]은 배열의 첫 번째 원소를 가리킵니다.',
        },
        {
          id: 14,
          question:
            '파이썬(Python)에서 리스트(List)에 새로운 원소를 추가하는 메서드는 무엇인가?',
          options: ['append()', 'add()', 'push()', 'insert()'],
          correctAnswer: 0,
          explanation:
            '파이썬 리스트에서는 append() 메서드를 사용하여 새로운 원소를 리스트의 끝에 추가할 수 있습니다.',
        },
        {
          id: 15,
          question: '다음 중 인터프리터 방식으로 동작하는 언어가 아닌 것은?',
          options: ['Python', 'JavaScript', 'Ruby', 'C++'],
          correctAnswer: 3,
          explanation:
            'Python, JavaScript, Ruby는 일반적으로 인터프리터 방식이며, C++은 주로 컴파일 방식으로 동작합니다.',
        },
      ],
    },
  ],
};
