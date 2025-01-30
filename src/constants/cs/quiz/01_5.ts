import { Quiz } from '@/types/quiz.type';

export const quiz: Quiz = {
  title: '정보처리기능사 기출 문제 (중복 없는 새 문제)',
  description: '정보처리기능사에서 자주 나오는 문제들을 모았습니다.',
  categories: [
    {
      title: '컴퓨터 일반',
      description: '컴퓨터 구조, 운영체제, 보안 등 기초 지식을 묻는 문제들',
      questions: [
        {
          id: 1,
          question:
            "다음 중 컴퓨터에서 자료를 전송하고 장치를 제어하기 위한 '프로토콜'이 아닌 것은?",
          options: ['TCP/IP', 'HTTP', 'FTP', 'JDBC'],
          correctAnswer: 3,
          explanation:
            'TCP/IP, HTTP, FTP는 네트워크 상에서 통신을 위해 사용하는 프로토콜이지만, JDBC(Java Database Connectivity)는 자바에서 데이터베이스에 접속하기 위한 인터페이스로 네트워크 통신 프로토콜이 아닙니다.',
        },
        {
          id: 2,
          question: '다음 중 시분할(Time-Sharing) 시스템의 특징으로 옳은 것은?',
          options: [
            '여러 사용자가 동시에 시스템을 독점적으로 사용할 수 있다',
            '배치 처리에만 적합하다',
            '사용자 간 자원을 공유해 빠르게 응답한다',
            '실시간 처리에만 사용된다',
          ],
          correctAnswer: 2,
          explanation:
            '시분할 시스템은 여러 사용자가 동시에 시스템을 사용하되, CPU 시간을 분할하여 각 사용자에게 빠르게 응답을 제공할 수 있는 환경을 말합니다.',
        },
        {
          id: 3,
          question: '다음 중 컴퓨터의 기억장치에 대한 설명으로 옳지 않은 것은?',
          options: [
            'ROM은 읽기 전용 메모리로, 저장된 내용을 변경하기 어렵다.',
            'RAM은 휘발성 메모리로 전원이 꺼지면 데이터가 지워진다.',
            '캐시 메모리는 CPU와 주기억장치 간 속도 차이를 줄이기 위해 사용된다.',
            '보조기억장치는 휘발성이므로 전원이 꺼지면 데이터가 지워진다.',
          ],
          correctAnswer: 3,
          explanation:
            '보조기억장치는 하드디스크, SSD 등 비휘발성 메모리이므로 전원이 꺼져도 데이터가 지워지지 않습니다.',
        },
        {
          id: 4,
          question: '다음 중 프로세스(process)에 대한 설명으로 옳은 것은?',
          options: [
            '프로세스는 프로그램이 실행되지 않은 상태를 의미한다.',
            '프로세스는 실행 중인 프로그램이며, CPU 스케줄링의 대상이 된다.',
            '프로세스는 메모리에 적재되지 않고 디스크에서 바로 실행된다.',
            '프로세스는 운영체제의 커널과 동일하다.',
          ],
          correctAnswer: 1,
          explanation:
            '프로세스는 실행 중인 프로그램을 의미하며, CPU 스케줄링에 의해 자원을 할당받아 동작합니다.',
        },
        {
          id: 5,
          question: '다음 중 정보 보안의 3요소(3대 목표)가 아닌 것은?',
          options: [
            '기밀성(Confidentiality)',
            '무결성(Integrity)',
            '가용성(Availability)',
            '확장성(Scalability)',
          ],
          correctAnswer: 3,
          explanation:
            '정보 보안의 3요소는 기밀성, 무결성, 가용성(CIA)이며, 확장성(Scalability)은 여기에 포함되지 않습니다.',
        },
      ],
    },
    {
      title: '데이터베이스',
      description:
        '데이터베이스 설계, SQL, 트랜잭션 등의 기초 지식을 묻는 문제들',
      questions: [
        {
          id: 6,
          question:
            '다음 중 E-R 다이어그램(Entity-Relationship Diagram)에 대한 설명으로 옳지 않은 것은?',
          options: [
            '엔티티(개체), 속성, 관계를 표현한다.',
            '엔티티 사이의 관계를 시각적으로 나타낸다.',
            '정규화 과정을 시각적으로 명확히 표현하기 위해 사용된다.',
            '논리적 데이터베이스 구조를 설계할 때 활용된다.',
          ],
          correctAnswer: 2,
          explanation:
            'E-R 다이어그램은 개념적 설계를 위한 것으로, 정규화 과정을 직접 시각화하는 것이 주된 목적은 아닙니다.',
        },
        {
          id: 7,
          question:
            "다음 중 관계형 데이터베이스에서 '조인(Join)'에 대한 설명으로 옳은 것은?",
          options: [
            '서로 다른 테이블 간의 데이터를 연결하여 조회한다.',
            '하나의 테이블을 여러 조각으로 분할하는 기법이다.',
            '인덱스를 사용하여 검색 속도를 향상시키는 기술이다.',
            '삽입, 수정, 삭제를 묶어서 처리하는 연산이다.',
          ],
          correctAnswer: 0,
          explanation:
            '조인은 여러 테이블에서 관련된 데이터를 연결해 조회하는 기능으로, 공통된 키(컬럼)를 통해 데이터를 결합합니다.',
        },
        {
          id: 8,
          question:
            '다음 중 트랜잭션 격리 수준(Isolation Level) 중 가장 낮은 수준은?',
          options: [
            'READ UNCOMMITTED',
            'READ COMMITTED',
            'REPEATABLE READ',
            'SERIALIZABLE',
          ],
          correctAnswer: 0,
          explanation:
            '트랜잭션 격리 수준은 READ UNCOMMITTED → READ COMMITTED → REPEATABLE READ → SERIALIZABLE 순으로 강도가 높아집니다.',
        },
        {
          id: 9,
          question:
            '다음 중 데이터 무결성(Integrity)을 보장하기 위한 제약조건으로 적절하지 않은 것은?',
          options: ['PRIMARY KEY', 'FOREIGN KEY', 'CHECK', 'COMMENT'],
          correctAnswer: 3,
          explanation:
            'COMMENT는 테이블이나 컬럼에 대한 설명을 달기 위한 것이므로 무결성 제약조건과 직접적인 관련이 없습니다.',
        },
        {
          id: 10,
          question: "다음 중 'ROLLBACK' 문에 대한 설명으로 옳은 것은?",
          options: [
            '트랜잭션 내의 모든 변경 내용을 확정(Commit)하는 명령어이다.',
            '특정 테이블을 완전히 삭제(DROP)하는 명령어이다.',
            '트랜잭션 내의 변경 내용을 취소하고 이전 상태로 복구하는 명령어이다.',
            '트랜잭션을 병합하여 하나로 만드는 명령어이다.',
          ],
          correctAnswer: 2,
          explanation:
            'ROLLBACK은 트랜잭션 동안 변경된 내용을 모두 취소하고 트랜잭션 시작 전 상태로 되돌리는 명령어입니다.',
        },
      ],
    },
    {
      title: '프로그래밍 언어',
      description: '프로그래밍 언어의 문법, 특징, OOP 개념 등을 묻는 문제들',
      questions: [
        {
          id: 11,
          question: '다음 중 C 언어에서 반복문에 해당하지 않는 것은?',
          options: ['for', 'while', 'do-while', 'switch'],
          correctAnswer: 3,
          explanation:
            'switch 문은 조건에 따라 여러 분기를 나누는 다중 선택문이며, 반복문이 아닙니다.',
        },
        {
          id: 12,
          question:
            '다음 중 자바스크립트(JavaScript)에서 변수를 선언할 수 있는 키워드가 아닌 것은?',
          options: ['var', 'let', 'const', 'def'],
          correctAnswer: 3,
          explanation:
            '자바스크립트에서는 var, let, const를 사용해 변수를 선언하며, def는 파이썬(Python)에서 함수를 정의할 때 사용하는 키워드입니다.',
        },
        {
          id: 13,
          question: '다음 중 객체지향 개념과 가장 밀접한 키워드는?',
          options: [
            '클래스(class)',
            '포인터(pointer)',
            '매크로(macro)',
            '레지스터(register)',
          ],
          correctAnswer: 0,
          explanation:
            '객체지향 프로그래밍의 핵심 구성 요소는 클래스이며, 이를 통해 객체를 생성하고 상속, 캡슐화, 다형성 등을 구현합니다.',
        },
        {
          id: 14,
          question: '다음 중 파이썬(Python)의 특징으로 옳지 않은 것은?',
          options: [
            '인터프리터 방식으로 실행된다.',
            '동적 타이핑(Dynamic Typing)을 지원한다.',
            '함수 오버로딩을 기본적으로 지원한다.',
            '간결하고 가독성이 높은 문법을 지향한다.',
          ],
          correctAnswer: 2,
          explanation:
            'Python은 인터프리터 방식, 동적 타이핑, 간결한 문법을 특징으로 하지만, C++처럼 매개변수 시그니처만 다른 함수를 여러 개 정의하는 전통적 의미의 오버로딩을 지원하지 않습니다.',
        },
        {
          id: 15,
          question: '다음 중 스크립트 언어에 대한 설명으로 옳은 것은?',
          options: [
            '일반적으로 컴파일 과정을 반드시 거쳐야만 실행된다.',
            '대표적으로 C, C++이 스크립트 언어에 해당한다.',
            '운영체제 커널 수준에서 동작하기 위해 저수준 언어를 사용한다.',
            '인터프리터에 의해 한 줄씩 해석되어 실행되는 경우가 많다.',
          ],
          correctAnswer: 3,
          explanation:
            '스크립트 언어는 주로 인터프리터 방식으로 한 줄씩 해석해 실행되며, 대표적으로 Python, JavaScript 등이 있습니다.',
        },
      ],
    },
  ],
};
