import { Quiz } from '@/types/quiz.type';

export const quiz: Quiz = {
  title: '정보처리기능사 모의시험',
  description: '정보처리기능사 필기시험을 준비하기 위한 모의시험입니다.',
  categories: [
    {
      title: '컴퓨터 구조',
      description: '컴퓨터 하드웨어와 명령어 구조에 대한 문제들입니다.',
      questions: [
        {
          id: 1,
          question: '다음 중 컴퓨터가 사용하는 주소지정 방식이 아닌 것은?',
          options: [
            '즉시 주소지정',
            '직접 주소지정',
            '간접 주소지정',
            '상수 주소지정',
          ],
          correctAnswer: 3,
          explanation:
            '컴퓨터 주소지정 방식에는 상수 주소지정이 포함되지 않습니다.',
        },
        {
          id: 2,
          question: '명령어 구조는 주로 어떤 구성 요소로 이루어져 있는가?',
          options: [
            '연산 코드와 주소부',
            '데이터 타입과 주소부',
            '연산 코드와 데이터',
            '연산 코드와 변수',
          ],
          correctAnswer: 0,
          explanation: '명령어 구조는 보통 연산 코드와 주소부로 구성됩니다.',
        },
        {
          id: 3,
          question: "다음 논리 회로의 출력을 간단히 표현하면? Y = AB + A'B'",
          options: ['A XOR B', 'A XNOR B', 'A OR B', 'A AND B'],
          correctAnswer: 1,
          explanation: "Y = AB + A'B'는 A와 B의 XNOR 연산을 나타냅니다.",
        },
        {
          id: 4,
          question: 'SQL 명령 중 테이블을 삭제하는 명령은?',
          options: ['DELETE', 'DROP', 'REMOVE', 'TRUNCATE'],
          correctAnswer: 1,
          explanation: 'DROP 명령은 테이블 자체를 삭제합니다.',
        },
        {
          id: 5,
          question: '데이터베이스에서 정보 부재를 나타내기 위해 사용하는 값은?',
          options: ['공백 (Blank)', 'NULL', '영 (Zero)', '비어 있음 (Empty)'],
          correctAnswer: 1,
          explanation: 'NULL은 데이터 부재를 명시적으로 나타냅니다.',
        },
        {
          id: 6,
          question: '컴퓨터의 가상 메모리 사용 목적에 가장 부합하는 것은?',
          options: [
            '속도 개선',
            '주기억장치 부족 해결',
            '에너지 절약',
            '데이터 백업',
          ],
          correctAnswer: 1,
          explanation: '가상 메모리는 주기억장치 용량 부족 문제를 해결합니다.',
        },
        {
          id: 7,
          question: '2진수 10110을 1의 보수로 변환한 값은?',
          options: ['01001', '11001', '01011', '11110'],
          correctAnswer: 0,
          explanation: '1의 보수는 각 비트를 반전시킨 값입니다.',
        },
        {
          id: 8,
          question: '불 대수의 정리 중 옳지 않은 것은?',
          options: ['A + A = A', 'A · A = A', 'A + 0 = A', 'A · 1 = 0'],
          correctAnswer: 3,
          explanation: 'A · 1은 A와 같아야 하므로 옳지 않은 문장입니다.',
        },
        {
          id: 9,
          question: '스택(Stack)의 주요 연산에 해당하지 않는 것은?',
          options: ['PUSH', 'POP', 'ADD', 'LOAD'],
          correctAnswer: 2,
          explanation: 'ADD 연산은 스택의 주요 연산에 포함되지 않습니다.',
        },
        {
          id: 10,
          question: '플립플롭 중 T 플립플롭의 기본 동작은 무엇인가?',
          options: [
            '트리거 변환',
            '초기화',
            'ON/OFF 상태 유지',
            '입력 출력 상태 저장',
          ],
          correctAnswer: 2,
          explanation:
            'T 플립플롭은 ON과 OFF 상태를 유지하며 토글 동작을 합니다.',
        },
      ],
    },
    {
      title: '네트워크 및 운영체제',
      description: '네트워크 프로토콜과 운영체제 관련 문제들입니다.',
      questions: [
        {
          id: 11,
          question: 'IPv6 주소의 특징으로 옳지 않은 것은?',
          options: [
            '확장성 및 유연성이 우수하다.',
            '10진수로 표현되며 점으로 구분한다.',
            'IPv4와 호환이 가능하다.',
            '패킷 분류 및 품질 보장이 가능하다.',
          ],
          correctAnswer: 1,
          explanation: 'IPv6는 16진수로 표현되며 콜론으로 구분됩니다.',
        },
        {
          id: 12,
          question: 'TCP/IP 모델에서 데이터 패킷의 라우팅을 담당하는 계층은?',
          options: ['물리 계층', '네트워크 계층', '전송 계층', '응용 계층'],
          correctAnswer: 1,
          explanation:
            '네트워크 계층은 데이터의 라우팅과 전송 경로를 관리합니다.',
        },
        {
          id: 13,
          question: 'Unix에서 현재 디렉토리 경로를 출력하는 명령어는?',
          options: ['cat', 'vi', 'pwd', 'tar'],
          correctAnswer: 2,
          explanation: '`pwd` 명령어는 현재 작업 디렉토리 경로를 표시합니다.',
        },
        {
          id: 14,
          question: 'IPv4 주소에서 클래스 C는 몇 개의 호스트를 지원하는가?',
          options: ['약 65,000개', '약 16,000개', '약 250개', '약 2개'],
          correctAnswer: 2,
          explanation: '클래스 C는 약 254개의 호스트를 지원합니다.',
        },
        {
          id: 15,
          question: 'OSI 7계층 중 데이터 암호화 및 압축을 담당하는 계층은?',
          options: ['세션 계층', '프레젠테이션 계층', '응용 계층', '물리 계층'],
          correctAnswer: 1,
          explanation:
            '프레젠테이션 계층은 데이터 암호화 및 변환을 담당합니다.',
        },
        {
          id: 16,
          question: 'IP 주소를 MAC 주소로 변환하는 프로토콜은?',
          options: ['DNS', 'ARP', 'DHCP', 'FTP'],
          correctAnswer: 1,
          explanation: 'ARP는 IP 주소를 MAC 주소로 변환합니다.',
        },
        {
          id: 17,
          question: 'TCP/IP 모델에서 응용 계층의 주요 프로토콜은?',
          options: ['HTTP, FTP', 'TCP, UDP', 'IP, ARP', 'ICMP, IGMP'],
          correctAnswer: 0,
          explanation: '응용 계층에서는 HTTP, FTP 등의 프로토콜을 사용합니다.',
        },
        {
          id: 18,
          question:
            '데이터 통신에서 CRC(Cyclic Redundancy Check)의 주요 목적은?',
          options: [
            '데이터 암호화',
            '에러 검출',
            '전송 속도 향상',
            '데이터 압축',
          ],
          correctAnswer: 1,
          explanation: 'CRC는 전송 데이터의 에러를 검출하는 데 사용됩니다.',
        },
        {
          id: 19,
          question: 'Unix에서 파일의 마지막 몇 줄을 출력하는 명령은?',
          options: ['head', 'tail', 'cat', 'vi'],
          correctAnswer: 1,
          explanation: '`tail` 명령어는 파일의 마지막 몇 줄을 출력합니다.',
        },
        {
          id: 20,
          question: 'OSI 7계층 중 세션 계층(Session Layer)의 주요 역할은?',
          options: [
            '데이터 암호화',
            '전송 경로 설정',
            '연결 세션 관리',
            '물리적 연결',
          ],
          correctAnswer: 2,
          explanation: '세션 계층은 세션 연결 및 유지 관리를 담당합니다.',
        },
      ],
    },
    {
      title: '데이터베이스 및 SQL',
      description: '데이터베이스의 기본 개념과 SQL 관련 문제들입니다.',
      questions: [
        {
          id: 21,
          question:
            'SQL에서 테이블의 특정 열 기준으로 오름차순 정렬하는 명령은?',
          options: [
            'ORDER BY DESC',
            'ORDER BY ASC',
            'SORT BY ASC',
            'SELECT BY ASC',
          ],
          correctAnswer: 1,
          explanation: '`ORDER BY ASC`는 데이터를 오름차순으로 정렬합니다.',
        },
        {
          id: 22,
          question:
            '데이터베이스에서 정보 부재를 명시적으로 표시하기 위해 사용하는 값은?',
          options: ['공백 (Blank)', 'NULL', '영 (Zero)', '비어 있음 (Empty)'],
          correctAnswer: 1,
          explanation: 'NULL은 정보가 부재하거나 미정 상태를 나타냅니다.',
        },
        {
          id: 23,
          question:
            '관계형 데이터베이스에서 속성(Attribute)의 개수를 의미하는 용어는?',
          options: [
            '도메인',
            '차수 (Degree)',
            '카디널리티 (Cardinality)',
            '스키마',
          ],
          correctAnswer: 1,
          explanation: '속성의 수는 차수(Degree)로 정의됩니다.',
        },
        {
          id: 24,
          question: 'SQL에서 중복 데이터를 제거하고 검색하는 키워드는?',
          options: [
            'SELECT UNIQUE',
            'SELECT DISTINCT',
            'SELECT FILTER',
            'SELECT SORT',
          ],
          correctAnswer: 1,
          explanation: '`SELECT DISTINCT`는 중복된 데이터를 제거합니다.',
        },
        {
          id: 25,
          question: '데이터베이스에서 참조 무결성을 유지하기 위한 제약 조건은?',
          options: ['도메인 제약', '키 제약', '외래 키 제약', '데이터 무결성'],
          correctAnswer: 2,
          explanation: '외래 키 제약은 참조 무결성을 보장합니다.',
        },
        {
          id: 26,
          question: 'SQL에서 특정 조건에 따라 데이터를 업데이트하는 명령은?',
          options: ['INSERT', 'UPDATE', 'DELETE', 'SELECT'],
          correctAnswer: 1,
          explanation: '`UPDATE` 명령은 데이터 값을 수정합니다.',
        },
        {
          id: 27,
          question: 'SQL에서 GROUP BY 절의 주요 목적은?',
          options: [
            '데이터를 그룹화하여 요약',
            '데이터 정렬',
            '조건에 따라 데이터 삭제',
            '중복 데이터 제거',
          ],
          correctAnswer: 0,
          explanation: '`GROUP BY`는 데이터를 특정 조건에 따라 그룹화합니다.',
        },
        {
          id: 28,
          question: '데이터베이스 설계 시 외부 스키마의 주된 역할은?',
          options: [
            '사용자 관점의 데이터 정의',
            '물리적 데이터 저장 방식 정의',
            '데이터 관계 모델링',
            '속성 값 제약 조건 정의',
          ],
          correctAnswer: 0,
          explanation: '외부 스키마는 사용자와 밀접한 데이터 뷰를 정의합니다.',
        },
        {
          id: 29,
          question:
            'SQL에서 테이블 삭제 시 CASCADE 옵션을 사용하면 어떤 동작이 수행되는가?',
          options: [
            '테이블과 참조된 테이블을 모두 삭제한다.',
            '테이블 데이터를 초기화한다.',
            '테이블 이름만 삭제한다.',
            '참조 관계를 유지하며 테이블만 삭제한다.',
          ],
          correctAnswer: 0,
          explanation: 'CASCADE 옵션은 테이블과 참조 관계를 모두 제거합니다.',
        },
        {
          id: 30,
          question: '데이터베이스에서 튜플(Tuple)의 집합은 무엇을 의미하는가?',
          options: ['행 (Row)', '열 (Column)', '스키마', '도메인'],
          correctAnswer: 0,
          explanation: '튜플의 집합은 데이터베이스의 행(Row)을 의미합니다.',
        },
      ],
    },
    {
      title: '운영체제 및 프로세스 관리',
      description: '운영체제와 프로세스 관리에 대한 문제들입니다.',
      questions: [
        {
          id: 31,
          question:
            "운영체제에서 프로세스 상태 중 '대기 상태'는 어떤 상태인가?",
          options: [
            '실행 중 입출력 작업을 기다림',
            'CPU 자원을 사용하는 상태',
            '프로세스가 종료된 상태',
            '프로세스가 준비된 상태',
          ],
          correctAnswer: 0,
          explanation: "'대기 상태'는 입출력 작업을 기다리는 상태입니다.",
        },
        {
          id: 32,
          question: 'Unix에서 파일을 삭제하는 명령어는?',
          options: ['rm', 'mv', 'cp', 'chmod'],
          correctAnswer: 0,
          explanation: '`rm` 명령어는 Unix에서 파일을 삭제하는 데 사용됩니다.',
        },
        {
          id: 33,
          question: '컴퓨터 메모리 구조에서 ROM의 특징으로 적합하지 않은 것은?',
          options: [
            '비휘발성 메모리',
            '데이터 변경 가능',
            '읽기 전용 메모리',
            '전원이 꺼져도 데이터 유지',
          ],
          correctAnswer: 1,
          explanation: 'ROM은 읽기 전용이며 데이터를 변경할 수 없습니다.',
        },
        {
          id: 34,
          question: '윈도우에서 시스템 종료를 빠르게 실행하는 단축키는?',
          options: [
            '[Ctrl] + [Alt] + [Delete]',
            '[Alt] + [F4]',
            '[Shift] + [Delete]',
            '[Ctrl] + [Shift] + [Esc]',
          ],
          correctAnswer: 1,
          explanation:
            '`[Alt] + [F4]`는 현재 프로그램 종료 또는 시스템 종료를 실행합니다.',
        },
        {
          id: 35,
          question: 'IP 주소를 MAC 주소로 변환하는 프로토콜은?',
          options: ['DNS', 'ARP', 'DHCP', 'FTP'],
          correctAnswer: 1,
          explanation: 'ARP는 IP 주소를 MAC 주소로 변환하는 역할을 합니다.',
        },
        {
          id: 36,
          question: 'Unix에서 `ls -l` 명령어의 주요 결과는?',
          options: [
            '현재 디렉토리의 파일 목록',
            '파일 권한 및 소유자 정보',
            '파일 크기 정렬',
            '파일 확장자 표시',
          ],
          correctAnswer: 1,
          explanation:
            '`ls -l`은 파일 권한, 소유자, 크기 등의 정보를 표시합니다.',
        },
        {
          id: 37,
          question: 'OS에서 프로세스의 교착 상태를 예방하는 방법은?',
          options: [
            'Circular Wait 조건 해제',
            '상호 배제 조건 유지',
            '자원 점유 후 대기 유지',
            '비선점 조건 강화',
          ],
          correctAnswer: 0,
          explanation:
            '교착 상태 예방은 Circular Wait 조건을 해제하는 방식으로 수행됩니다.',
        },
        {
          id: 38,
          question: 'OSI 7계층 중 세션 계층(Session Layer)의 주요 역할은?',
          options: [
            '데이터 암호화',
            '전송 경로 설정',
            '연결 세션 관리',
            '물리적 연결',
          ],
          correctAnswer: 2,
          explanation: '세션 계층은 세션 연결 및 유지 관리를 담당합니다.',
        },
        {
          id: 39,
          question: 'TCP/IP 모델에서 응용 계층의 주요 프로토콜은?',
          options: ['HTTP, FTP', 'TCP, UDP', 'IP, ARP', 'ICMP, IGMP'],
          correctAnswer: 0,
          explanation: '응용 계층에서는 HTTP, FTP 등의 프로토콜을 사용합니다.',
        },
        {
          id: 40,
          question: 'IPv6에서 주소는 몇 비트로 구성되는가?',
          options: ['32비트', '64비트', '128비트', '256비트'],
          correctAnswer: 2,
          explanation: 'IPv6 주소는 128비트로 구성됩니다.',
        },
      ],
    },
    {
      title: '네트워크 및 데이터 통신',
      description: '네트워크 프로토콜과 데이터 통신의 기본 개념 문제들입니다.',
      questions: [
        {
          id: 41,
          question: 'IPv6의 주요 개선 사항 중 하나는?',
          options: [
            '더 작은 주소 공간',
            'QoS 기능 개선',
            '제한된 보안 기능',
            '데이터 링크 속도 감소',
          ],
          correctAnswer: 1,
          explanation:
            'IPv6는 QoS(Quality of Service) 기능을 개선하여 데이터 전송 품질을 보장합니다.',
        },
        {
          id: 42,
          question: 'OSI 7계층 중 데이터 암호화가 이루어지는 계층은?',
          options: ['세션 계층', '프레젠테이션 계층', '응용 계층', '전송 계층'],
          correctAnswer: 1,
          explanation:
            '프레젠테이션 계층에서 데이터 암호화와 압축이 이루어집니다.',
        },
        {
          id: 43,
          question: 'TCP/IP 모델에서 데이터 패킷의 라우팅을 담당하는 계층은?',
          options: ['물리 계층', '네트워크 계층', '전송 계층', '응용 계층'],
          correctAnswer: 1,
          explanation:
            '네트워크 계층은 데이터 패킷의 라우팅과 주소 지정 기능을 담당합니다.',
        },
        {
          id: 44,
          question:
            '데이터 통신에서 CRC(Cyclic Redundancy Check)의 주요 목적은?',
          options: [
            '데이터 암호화',
            '에러 검출',
            '전송 속도 향상',
            '데이터 압축',
          ],
          correctAnswer: 1,
          explanation: 'CRC는 전송된 데이터의 에러를 검출하는 데 사용됩니다.',
        },
        {
          id: 45,
          question: 'IP 주소를 MAC 주소로 변환하는 프로토콜은?',
          options: ['DNS', 'ARP', 'DHCP', 'FTP'],
          correctAnswer: 1,
          explanation:
            'ARP(Address Resolution Protocol)는 IP 주소를 MAC 주소로 변환합니다.',
        },
        {
          id: 46,
          question: '데이터 통신에서 대역폭이 증가하면 기대할 수 있는 효과는?',
          options: [
            '더 빠른 데이터 전송',
            '더 많은 데이터 오류',
            '더 높은 네트워크 지연',
            '더 낮은 신호 품질',
          ],
          correctAnswer: 0,
          explanation: '대역폭이 증가하면 데이터 전송 속도가 빨라집니다.',
        },
        {
          id: 47,
          question: 'OSI 7계층 중 데이터 패킷의 전송 경로를 설정하는 계층은?',
          options: ['세션 계층', '네트워크 계층', '전송 계층', '응용 계층'],
          correctAnswer: 1,
          explanation:
            '네트워크 계층은 데이터 전송 경로를 설정하고 관리합니다.',
        },
        {
          id: 48,
          question: 'IPv4 주소에서 서브넷 마스크의 주요 역할은?',
          options: [
            '데이터 압축',
            '호스트 구분 및 네트워크 식별',
            '암호화',
            '네트워크 속도 제한',
          ],
          correctAnswer: 1,
          explanation:
            '서브넷 마스크는 네트워크와 호스트를 구분하는 데 사용됩니다.',
        },
        {
          id: 49,
          question: 'TCP/IP 모델의 전송 계층에서 제공하는 주요 기능은?',
          options: [
            '라우팅',
            '데이터 암호화',
            '흐름 제어 및 오류 검출',
            '물리적 연결',
          ],
          correctAnswer: 2,
          explanation:
            '전송 계층은 흐름 제어, 오류 검출, 세그먼트 전달 등을 제공합니다.',
        },
        {
          id: 50,
          question: '데이터 통신에서 패킷 스위칭의 주요 장점은?',
          options: [
            '고정 대역폭 제공',
            '실시간 데이터 전송',
            '효율적인 네트워크 자원 활용',
            '신호 감쇠 감소',
          ],
          correctAnswer: 2,
          explanation:
            '패킷 스위칭은 네트워크 자원을 효율적으로 활용할 수 있습니다.',
        },
      ],
    },
    {
      title: '알고리즘 및 프로그래밍',
      description: '알고리즘 설계와 프로그래밍 관련 문제들입니다.',
      questions: [
        {
          id: 51,
          question: '다음 중 알고리즘의 주요 특성으로 옳지 않은 것은?',
          options: ['명확성', '유한성', '불확실성', '입력 및 출력'],
          correctAnswer: 2,
          explanation:
            '알고리즘은 명확성, 유한성, 입력 및 출력의 특성을 가져야 합니다.',
        },
        {
          id: 52,
          question: '재귀 알고리즘이 적합하지 않은 경우는?',
          options: [
            '문제의 크기를 반복적으로 줄일 수 있는 경우',
            '기저 조건이 명확한 경우',
            '스택 오버플로가 우려되는 경우',
            '분할 정복 접근법이 필요한 경우',
          ],
          correctAnswer: 2,
          explanation:
            '스택 오버플로가 우려될 경우 재귀 알고리즘 대신 반복문을 사용하는 것이 좋습니다.',
        },
        {
          id: 53,
          question: '정렬 알고리즘 중 평균적으로 가장 빠른 정렬 방식은?',
          options: ['버블 정렬', '삽입 정렬', '퀵 정렬', '선택 정렬'],
          correctAnswer: 2,
          explanation:
            '퀵 정렬은 평균적으로 O(n log n)의 시간 복잡도를 가지며 빠릅니다.',
        },
        {
          id: 54,
          question:
            '다음 중 선형 탐색(Linear Search)에 대한 설명으로 옳은 것은?',
          options: [
            '정렬된 데이터에서만 동작한다.',
            '이진 탐색보다 항상 빠르다.',
            '정렬 여부에 관계없이 모든 데이터에서 동작한다.',
            '해시 테이블과 함께 사용된다.',
          ],
          correctAnswer: 2,
          explanation:
            '선형 탐색은 정렬 여부와 상관없이 데이터를 순차적으로 탐색합니다.',
        },
        {
          id: 55,
          question: '다익스트라 알고리즘의 주요 용도는?',
          options: [
            '최소 신장 트리 생성',
            '최단 경로 탐색',
            '그래프 탐색',
            '위상 정렬',
          ],
          correctAnswer: 1,
          explanation:
            '다익스트라 알고리즘은 가중 그래프에서 최단 경로를 찾는 데 사용됩니다.',
        },
        {
          id: 56,
          question: '분할 정복 기법의 주요 과정이 아닌 것은?',
          options: [
            '문제를 작은 부분으로 나눈다.',
            '작은 부분 문제를 해결한다.',
            '해결된 결과를 합친다.',
            '모든 데이터가 정렬되어 있어야 한다.',
          ],
          correctAnswer: 3,
          explanation: '분할 정복 기법은 정렬 여부와 상관없이 작동합니다.',
        },
        {
          id: 57,
          question: '이진 탐색의 시간 복잡도는?',
          options: ['O(n)', 'O(log n)', 'O(n^2)', 'O(1)'],
          correctAnswer: 1,
          explanation:
            '이진 탐색은 데이터가 정렬되어 있을 때 O(log n)의 시간 복잡도를 가집니다.',
        },
        {
          id: 58,
          question: '해시 테이블에서 충돌(Collision)을 해결하기 위한 방법은?',
          options: [
            '다중 스레드',
            '이진 탐색',
            '체이닝(Separate Chaining)',
            '다익스트라 알고리즘',
          ],
          correctAnswer: 2,
          explanation:
            '체이닝은 충돌이 발생할 경우 연결 리스트를 사용해 데이터를 저장하는 방식입니다.',
        },
        {
          id: 59,
          question: '큐(Queue)의 특성으로 적합한 것은?',
          options: [
            'LIFO(Last In, First Out)',
            'FILO(First In, Last Out)',
            'FIFO(First In, First Out)',
            'Random Access',
          ],
          correctAnswer: 2,
          explanation:
            '큐는 FIFO 구조로, 먼저 삽입된 데이터가 먼저 출력됩니다.',
        },
        {
          id: 60,
          question: '프로그래밍에서 변수의 스코프(Scope)란?',
          options: [
            '변수의 데이터 타입',
            '변수의 선언 위치에 따라 접근 가능한 범위',
            '변수의 초기화 여부',
            '변수의 메모리 크기',
          ],
          correctAnswer: 1,
          explanation: '스코프는 변수에 접근할 수 있는 코드 영역을 의미합니다.',
        },
        {
          id: 61,
          question: 'RISC 프로세서의 특징으로 옳지 않은 것은?',
          options: [
            '단순한 명령어 구조',
            '고정 길이 명령어',
            '복잡한 주소 지정 방식',
            '빠른 명령어 실행 속도',
          ],
          correctAnswer: 2,
          explanation: 'RISC는 간단한 주소 지정 방식을 사용합니다.',
        },
        {
          id: 62,
          question: 'OSI 7계층 중 데이터 링크 계층의 주요 역할은?',
          options: [
            '데이터 전송 경로 설정',
            '패킷의 물리적 전송',
            '프레임 생성 및 오류 제어',
            '사용자와 응용 프로그램 간 데이터 교환',
          ],
          correctAnswer: 2,
          explanation:
            '데이터 링크 계층은 프레임 생성, 흐름 제어, 오류 검출을 담당합니다.',
        },
        {
          id: 63,
          question: 'SQL의 트랜잭션 제어 언어(TCL) 명령어가 아닌 것은?',
          options: ['COMMIT', 'ROLLBACK', 'SAVEPOINT', 'GRANT'],
          correctAnswer: 3,
          explanation:
            'GRANT는 데이터베이스 권한 제어를 위한 DCL 명령어입니다.',
        },
        {
          id: 64,
          question: '다음 중 데이터베이스의 이상 현상(Anomaly)이 아닌 것은?',
          options: ['갱신 이상', '삭제 이상', '삽입 이상', '중복 이상'],
          correctAnswer: 3,
          explanation:
            "갱신, 삭제, 삽입 이상은 이상 현상의 주요 유형이며 '중복 이상'이라는 용어는 사용되지 않습니다.",
        },
        {
          id: 65,
          question:
            '컴퓨터 운영체제에서 교착 상태(Deadlock)의 필요 조건이 아닌 것은?',
          options: ['상호 배제', '점유와 대기', '비선점', '다중 스레드'],
          correctAnswer: 3,
          explanation: '다중 스레드는 교착 상태와 직접적인 관련이 없습니다.',
        },
        {
          id: 66,
          question: '논리 연산 중 De Morgan 법칙에 해당하지 않는 것은?',
          options: [
            'NOT(A AND B) = NOT A OR NOT B',
            'NOT(A OR B) = NOT A AND NOT B',
            'NOT(A XOR B) = NOT A XOR NOT B',
            'NOT(A NOR B) = NOT A AND B',
          ],
          correctAnswer: 3,
          explanation:
            'De Morgan 법칙은 NOT과 OR/AND의 상호 변환 규칙을 포함합니다.',
        },
        {
          id: 67,
          question:
            '기억 장치의 참조 지역성(Locality of Reference) 개념에 대한 설명으로 옳은 것은?',
          options: [
            '메모리 액세스를 무작위로 수행한다.',
            '짧은 시간 동안 동일한 주소나 인접한 주소를 참조하는 성질을 말한다.',
            '다양한 주소를 동일한 빈도로 참조한다.',
            'CPU와 주기억 장치 간 속도 차이를 줄인다.',
          ],
          correctAnswer: 1,
          explanation:
            '참조 지역성은 공간적 지역성과 시간적 지역성을 포함하여, 짧은 시간 동안 특정 메모리 영역을 집중적으로 참조하는 성질입니다.',
        },
        {
          id: 68,
          question: '시프트 레지스터의 주요 용도가 아닌 것은?',
          options: [
            '데이터의 직렬-병렬 변환',
            '순차 논리 회로의 상태 저장',
            '데이터의 순환 이동',
            '데이터 압축',
          ],
          correctAnswer: 3,
          explanation: '시프트 레지스터는 데이터를 압축하지 않습니다.',
        },
        {
          id: 69,
          question: 'SQL에서 NULL에 대한 조건을 확인하는 올바른 구문은?',
          options: [
            'WHERE value = NULL',
            'WHERE value IS NULL',
            'WHERE value EQUALS NULL',
            'WHERE value LIKE NULL',
          ],
          correctAnswer: 1,
          explanation: 'NULL 확인은 `IS NULL`을 사용해야 합니다.',
        },
        {
          id: 70,
          question:
            '교착 상태 해결 기법 중 프로세스의 우선 순위를 동적으로 변경하여 문제를 해결하는 방법은?',
          options: [
            '에이징(Aging)',
            '다단계 큐(Multi-Level Queue)',
            '교착 상태 회피',
            '자원 요청 제한',
          ],
          correctAnswer: 0,
          explanation:
            '에이징(Aging)은 기아 상태 방지를 위해 우선순위를 동적으로 조정하는 기법입니다.',
        },
      ],
    },
  ],
};
