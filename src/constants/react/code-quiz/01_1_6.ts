export const codeQuizzes = [
  {
    id: 1,
    title: '이벤트 리스너 관리하기',
    description:
      '윈도우 리사이즈 이벤트를 구독하고, 컴포넌트가 언마운트될 때 적절히 정리(cleanup)하는 로직을 구현하세요.',
    code: `import { useState, useEffect } from 'react';

function WindowSizeTracker() {
  const [size, setSize] = useState({ width: 0, height: 0 });
  
  // TODO: resize 이벤트 리스너를 등록하고 정리하는 Effect를 구현하세요
  // 1. 현재 윈도우 크기로 초기화
  // 2. resize 이벤트 구독
  // 3. 컴포넌트 언마운트 시 이벤트 리스너 제거
  
  return (
    <div className="p-4 border rounded">
      <h2>Window Size</h2>
      <p>Width: {size.width}px</p>
      <p>Height: {size.height}px</p>
    </div>
  );
}

export default WindowSizeTracker;`,
    answer: `올바른 구현은 다음과 같습니다:

\`\`\`typescript
function WindowSizeTracker() {
  const [size, setSize] = useState({ 
    width: window.innerWidth, 
    height: window.innerHeight 
  });
  
  useEffect(() => {
    // resize 이벤트 핸들러를 분리하여 정의
    function handleResize() {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
    
    // 이벤트 리스너 등록
    window.addEventListener('resize', handleResize);
    
    // cleanup 함수 반환
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // 빈 의존성 배열 - 마운트/언마운트시에만 실행

  return (
    <div className="p-4 border rounded">
      <h2>Window Size</h2>
      <p>Width: {size.width}px</p>
      <p>Height: {size.height}px</p>
    </div>
  );
}
\`\`\`

주요 포인트:
1. 이벤트 핸들러를 Effect 내부에서 정의하여 클로저 문제 방지
2. cleanup 함수에서 이벤트 리스너 제거
3. 빈 의존성 배열 사용하여 불필요한 재구독 방지`,
    hint: 'resize 이벤트의 메모리 누수를 방지하기 위해 cleanup 함수에서 반드시 이벤트 리스너를 제거해야 합니다. 또한 이벤트 핸들러는 Effect 내부에서 정의하는 것이 좋습니다.',
  },
  {
    id: 2,
    title: '타이머 관리하기',
    description:
      '주어진 시간(초)을 카운트다운하는 타이머를 구현하세요. 카운트다운이 진행 중일 때 컴포넌트가 언마운트되면 타이머를 정리해야 합니다.',
    code: `import { useState, useEffect } from 'react';

interface TimerProps {
  initialSeconds: number;
  onComplete?: () => void;
}

function CountdownTimer({ initialSeconds, onComplete }: TimerProps) {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);
  
  // TODO: 카운트다운 타이머 Effect 구현
  // 1. isRunning이 true일 때만 타이머 시작
  // 2. 매초 카운트다운
  // 3. 0에 도달하면 타이머 중지 및 onComplete 호출
  // 4. 컴포넌트 언마운트 시 타이머 정리
  
  return (
    <div className="p-4 border rounded">
      <p>Time Remaining: {seconds} seconds</p>
      <button
        onClick={() => setIsRunning(prev => !prev)}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        {isRunning ? 'Pause' : 'Start'}
      </button>
    </div>
  );
}

export default CountdownTimer;`,
    answer: `올바른 구현은 다음과 같습니다:

\`\`\`typescript
function CountdownTimer({ initialSeconds, onComplete }: TimerProps) {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);
  
  useEffect(() => {
    let timerId: number;
    
    if (isRunning && seconds > 0) {
      timerId = window.setInterval(() => {
        setSeconds(prev => {
          if (prev <= 1) {
            // 카운트다운 완료
            setIsRunning(false);
            onComplete?.();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    
    // cleanup 함수에서 타이머 정리
    return () => {
      if (timerId) {
        clearInterval(timerId);
      }
    };
  }, [isRunning, seconds, onComplete]); // 의존성 배열에 필요한 값들 포함

  return (
    <div className="p-4 border rounded">
      <p>Time Remaining: {seconds} seconds</p>
      <button
        onClick={() => setIsRunning(prev => !prev)}
        className={\`px-4 py-2 \${
          seconds === 0 
            ? 'bg-gray-500 cursor-not-allowed' 
            : 'bg-blue-500'
        } text-white rounded\`}
        disabled={seconds === 0}
      >
        {isRunning ? 'Pause' : 'Start'}
      </button>
    </div>
  );
}
\`\`\`

주요 포인트:
1. setInterval 사용하여 매초 카운트다운
2. cleanup 함수에서 clearInterval 호출
3. 상태 업데이트에 함수형 업데이트 사용
4. 의존성 배열에 필요한 모든 값 포함
5. 카운트다운 완료 시 적절한 처리`,
    hint: 'setInterval의 반환값을 저장하고 cleanup에서 clearInterval을 호출해야 합니다. 또한 상태 업데이트는 이전 상태를 기반으로 하므로 함수형 업데이트를 사용하세요.',
  },
  {
    id: 3,
    title: '로컬 스토리지 동기화하기',
    description:
      '컴포넌트의 상태를 로컬 스토리지와 동기화하는 로직을 구현하세요. 상태가 변경될 때마다 로컬 스토리지를 업데이트하고, 컴포넌트 마운트 시 로컬 스토리지에서 초기값을 불러와야 합니다.',
    code: `import { useState, useEffect } from 'react';

interface Note {
  id: number;
  text: string;
}

function NotesEditor() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [newNote, setNewNote] = useState('');
  
  // TODO: 로컬 스토리지 동기화 Effect 구현
  // 1. 컴포넌트 마운트 시 로컬 스토리지에서 노트 불러오기
  // 2. notes 상태가 변경될 때마다 로컬 스토리지 업데이트
  
  const addNote = () => {
    if (newNote.trim()) {
      const note = {
        id: Date.now(),
        text: newNote.trim()
      };
      setNotes(prev => [...prev, note]);
      setNewNote('');
    }
  };
  
  const deleteNote = (id: number) => {
    setNotes(prev => prev.filter(note => note.id !== id));
  };
  
  return (
    <div className="p-4">
      <div className="mb-4">
        <input
          type="text"
          value={newNote}
          onChange={e => setNewNote(e.target.value)}
          className="border p-2 mr-2"
          placeholder="새 노트 작성..."
        />
        <button
          onClick={addNote}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          추가
        </button>
      </div>
      
      <ul className="space-y-2">
        {notes.map(note => (
          <li key={note.id} className="flex items-center">
            <span className="flex-1">{note.text}</span>
            <button
              onClick={() => deleteNote(note.id)}
              className="px-2 py-1 bg-red-500 text-white rounded"
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NotesEditor;`,
    answer: `올바른 구현은 다음과 같습니다:

\`\`\`typescript
function NotesEditor() {
  const [notes, setNotes] = useState<Note[]>(() => {
    // 초기값을 lazy 초기화로 설정
    try {
      const savedNotes = localStorage.getItem('notes');
      return savedNotes ? JSON.parse(savedNotes) : [];
    } catch (error) {
      console.error('Failed to load notes:', error);
      return [];
    }
  });
  const [newNote, setNewNote] = useState('');
  
  // 로컬 스토리지 동기화
  useEffect(() => {
    try {
      localStorage.setItem('notes', JSON.stringify(notes));
    } catch (error) {
      console.error('Failed to save notes:', error);
    }
  }, [notes]); // notes가 변경될 때마다 실행
  
  // 나머지 구현...
}
\`\`\`

주요 포인트:
1. useState의 lazy 초기화로 초기 로드 구현
2. Effect에서는 저장만 담당
3. try-catch로 오류 처리
4. notes 배열이 변경될 때만 저장
5. JSON.stringify/parse 사용하여 데이터 직렬화`,
    hint: '로컬 스토리지 작업은 실패할 수 있으므로 항상 try-catch로 감싸야 합니다. 또한 초기 로드는 useState의 lazy 초기화를 사용하면 Effect가 필요 없습니다.',
  },
  {
    id: 4,
    title: '데이터 페칭과 경쟁 상태 처리',
    description:
      'API에서 데이터를 가져오고 경쟁 상태(Race Condition)를 적절히 처리하는 로직을 구현하세요. 검색어가 변경될 때마다 새로운 결과를 가져와야 합니다.',
    code: `[이전 코드와 동일]`,
    answer: `올바른 구현은 다음과 같습니다:
  
  \`\`\`typescript
  function SearchComponent({ query }: { query: string }) {
    const [results, setResults] = useState<SearchResult[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);
    
    useEffect(() => {
      // 빈 검색어 처리
      if (!query.trim()) {
        setResults([]);
        setError(null);
        return;
      }
  
      let ignore = false; // 경쟁 상태 방지 플래그
      
      async function fetchResults() {
        setLoading(true);
        setError(null);
        
        try {
          const data = await searchAPI(query);
          if (!ignore) { // 아직 유효한 요청인 경우에만 상태 업데이트
            setResults(data);
          }
        } catch (err) {
          if (!ignore) {
            setError(err as Error);
            setResults([]);
          }
        } finally {
          if (!ignore) {
            setLoading(false);
          }
        }
      }
      
      fetchResults();
      
      // cleanup 함수에서 플래그 설정
      return () => {
        ignore = true;
      };
    }, [query]); // query가 변경될 때마다 실행
  
    return (
      <div className="p-4">
        {loading && <div>검색 중...</div>}
        {error && <div className="text-red-500">Error: {error.message}</div>}
        <ul className="space-y-2">
          {results.map(result => (
            <li key={result.id} className="p-2 border rounded">
              <h3 className="font-bold">{result.title}</h3>
              <p>{result.description}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  \`\`\`
  
  주요 포인트:
  1. ignore 플래그로 경쟁 상태 방지
  2. 적절한 로딩/에러 상태 관리
  3. cleanup 함수에서 플래그 설정
  4. 빈 검색어 처리
  5. try-catch로 에러 처리`,
    hint: '경쟁 상태를 방지하기 위해 ignore 플래그를 사용하고, 모든 상태 업데이트 전에 이 플래그를 확인해야 합니다. 또한 컴포넌트가 언마운트되거나 query가 변경될 때 이전 요청을 취소하도록 cleanup을 구현해야 합니다.',
  },
  {
    id: 5,
    title: '외부 라이브러리 통합하기',
    description:
      '차트 라이브러리를 React 컴포넌트에 통합하고, 데이터가 변경될 때마다 차트를 업데이트하는 로직을 구현하세요. 컴포넌트 언마운트 시 차트 인스턴스를 정리해야 합니다.',
    code: `import { useEffect, useRef } from 'react';
  
  interface ChartData {
    labels: string[];
    values: number[];
  }
  
  // 가상의 차트 라이브러리 API
  declare class ExternalChart {
    constructor(element: HTMLElement, data: ChartData);
    update(data: ChartData): void;
    destroy(): void;
  }
  
  interface ChartProps {
    data: ChartData;
    width?: number;
    height?: number;
  }
  
  function ChartComponent({ data, width = 600, height = 400 }: ChartProps) {
    const chartRef = useRef<HTMLDivElement>(null);
    const chartInstanceRef = useRef<ExternalChart | null>(null);
    
    // TODO: 차트 초기화 및 업데이트 Effect 구현
    // 1. 컴포넌트 마운트 시 차트 초기화
    // 2. 데이터 변경 시 차트 업데이트
    // 3. 컴포넌트 언마운트 시 차트 정리
    
    return (
      <div 
        ref={chartRef}
        style={{ width, height }}
        className="border rounded"
      />
    );
  }
  
  export default ChartComponent;`,
    answer: `올바른 구현은 다음과 같습니다:
  
  \`\`\`typescript
  function ChartComponent({ data, width = 600, height = 400 }: ChartProps) {
    const chartRef = useRef<HTMLDivElement>(null);
    const chartInstanceRef = useRef<ExternalChart | null>(null);
    
    // 차트 인스턴스 생성 및 관리
    useEffect(() => {
      // 차트 컨테이너가 없으면 종료
      if (!chartRef.current) return;
      
      // 차트 인스턴스 생성
      const chart = new ExternalChart(chartRef.current, data);
      chartInstanceRef.current = chart;
      
      // cleanup: 차트 인스턴스 제거
      return () => {
        if (chartInstanceRef.current) {
          chartInstanceRef.current.destroy();
          chartInstanceRef.current = null;
        }
      };
    }, []); // 마운트/언마운트 시에만 실행
    
    // 데이터 변경 시 차트 업데이트
    useEffect(() => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.update(data);
      }
    }, [data]); // data가 변경될 때마다 실행
    
    return (
      <div 
        ref={chartRef}
        style={{ width, height }}
        className="border rounded"
      />
    );
  }
  \`\`\`
  
  주요 포인트:
  1. Effect를 두 개로 분리하여 관심사 분리
  2. ref를 사용하여 차트 인스턴스 관리
  3. 적절한 cleanup으로 메모리 누수 방지
  4. 의존성 배열을 통한 효율적인 업데이트
  5. 마운트되지 않은 상태 처리`,
    hint: '외부 라이브러리를 통합할 때는 Effect를 관심사별로 분리하는 것이 좋습니다. 하나는 인스턴스 생명주기 관리용, 다른 하나는 데이터 업데이트용으로 사용하세요.',
  },
  {
    id: 6,
    title: '커스텀 Hook으로 Effect 패턴 추상화하기',
    description:
      '웹소켓 연결을 관리하는 커스텀 Hook을 만들고, 연결 상태와 메시지를 처리하는 로직을 구현하세요. 연결이 끊어졌을 때 자동으로 재연결을 시도해야 합니다.',
    code: `import { useState, useEffect } from 'react';
  
  interface Message {
    id: number;
    text: string;
    timestamp: number;
  }
  
  // 가상의 WebSocket 클라이언트
  declare class WebSocketClient {
    constructor(url: string);
    connect(): void;
    disconnect(): void;
    send(message: string): void;
    onMessage(handler: (message: Message) => void): void;
    onDisconnect(handler: () => void): void;
  }
  
  // TODO: useWebSocket 커스텀 Hook 구현
  function useWebSocket(url: string) {
    // 1. 연결 상태 관리
    // 2. 메시지 히스토리 관리
    // 3. 자동 재연결 로직
    // 4. cleanup 구현
  }
  
  // 사용 예시
  function ChatRoom({ roomId }: { roomId: string }) {
    const { 
      connected,
      messages,
      sendMessage 
    } = useWebSocket(\`ws://chat.example.com/\${roomId}\`);
    
    return (
      <div className="p-4">
        <div className="mb-4">
          연결 상태: {connected ? '연결됨' : '연결 중...'}
        </div>
        
        <div className="space-y-2">
          {messages.map(msg => (
            <div key={msg.id} className="p-2 border rounded">
              <span>{msg.text}</span>
              <span className="text-sm text-gray-500">
                {new Date(msg.timestamp).toLocaleTimeString()}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default ChatRoom;`,
    answer: `올바른 구현은 다음과 같습니다:
  
  \`\`\`typescript
  function useWebSocket(url: string) {
    const [connected, setConnected] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [retryCount, setRetryCount] = useState(0);
    const wsRef = useRef<WebSocketClient | null>(null);
    
    useEffect(() => {
      let reconnectTimer: number;
      const maxRetries = 5;
      const backoffMs = 1000 * Math.min(Math.pow(2, retryCount), 30); // 지수 백오프
      
      function connect() {
        const ws = new WebSocketClient(url);
        wsRef.current = ws;
        
        ws.connect();
        
        ws.onMessage((message) => {
          setMessages(prev => [...prev, message]);
        });
        
        ws.onDisconnect(() => {
          setConnected(false);
          wsRef.current = null;
          
          // 재연결 시도
          if (retryCount < maxRetries) {
            reconnectTimer = window.setTimeout(() => {
              setRetryCount(prev => prev + 1);
              connect();
            }, backoffMs);
          }
        });
        
        setConnected(true);
        setRetryCount(0);
      }
      
      connect();
      
      // cleanup
      return () => {
        if (reconnectTimer) {
          clearTimeout(reconnectTimer);
        }
        if (wsRef.current) {
          wsRef.current.disconnect();
          wsRef.current = null;
        }
      };
    }, [url, retryCount]); // URL이 변경되거나 재연결 시도 시 실행
    
    // 메시지 전송 함수
    const sendMessage = useCallback((text: string) => {
      if (wsRef.current && connected) {
        wsRef.current.send(text);
      }
    }, [connected]);
    
    return {
      connected,
      messages,
      sendMessage
    };
  }
  \`\`\`
  
  주요 포인트:
  1. ref로 WebSocket 인스턴스 관리
  2. 지수 백오프를 사용한 재연결 로직
  3. cleanup에서 모든 타이머와 연결 정리
  4. 상태 관리와 메모리 누수 방지
  5. URL 변경 처리
  6. useCallback으로 메시지 전송 함수 최적화`,
    hint: 'WebSocket 연결을 관리할 때는 연결 끊김, 재연결, 메시지 손실 등 다양한 엣지 케이스를 고려해야 합니다. 또한 지수 백오프를 사용하여 재연결 시도 간격을 조절하면 서버 부하를 줄일 수 있습니다.',
  },
];
