export const codeQuizzes = [
  {
    id: 1,
    title: 'memo와 함께 useCallback 활용하기',
    description: `메모이제이션된 컴포넌트에 전달되는 검색 함수를 최적화하세요.
요구사항:
- 검색어와 카테고리가 변경될 때만 함수가 새로 생성되어야 합니다
- 불필요한 리렌더링을 방지해야 합니다
- 로딩 상태를 적절히 처리해야 합니다`,
    code: `import { useState, useCallback, memo } from 'react';

// 메모이제이션된 결과 컴포넌트
const SearchResults = memo(function SearchResults({ results, onItemClick }) {
  return (
    <ul>
      {results.map(item => (
        <li key={item.id} onClick={() => onItemClick(item)}>
          {item.title}
        </li>
      ))}
    </ul>
  );
});

function SearchComponent({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  // TODO: 검색 함수와 항목 클릭 함수를 useCallback을 사용하여 메모이제이션하세요
  const handleSearch = async () => {
    setIsLoading(true);
    const searchResults = await onSearch({
      term: searchTerm,
      category: category
    });
    setResults(searchResults);
    setIsLoading(false);
  };

  const handleItemClick = (item) => {
    console.log('Selected:', item);
  };
  
  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="검색어 입력..."
          className="px-4 py-2 border rounded"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-4 py-2 border rounded"
        >
          <option value="all">전체</option>
          <option value="books">도서</option>
          <option value="movies">영화</option>
        </select>
        <button 
          onClick={handleSearch}
          disabled={isLoading}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          {isLoading ? '검색 중...' : '검색'}
        </button>
      </div>
      
      <SearchResults 
        results={results}
        onItemClick={handleItemClick}
      />
    </div>
  );
}`,
    answer: `최적화된 구현은 다음과 같습니다:

\`\`\`typescript
const handleSearch = useCallback(async () => {
  setIsLoading(true);
  try {
    const searchResults = await onSearch({
      term: searchTerm,
      category: category
    });
    setResults(searchResults);
  } catch (error) {
    console.error('Search failed:', error);
  } finally {
    setIsLoading(false);
  }
}, [searchTerm, category, onSearch]); // 검색과 관련된 의존성만 포함

const handleItemClick = useCallback((item) => {
  console.log('Selected:', item);
}, []); // 외부 의존성이 없으므로 빈 배열

return (
  // ... JSX
  <SearchResults 
    results={results}
    onItemClick={handleItemClick} // 메모이제이션된 함수 전달
  />
);
\`\`\`

주요 개선사항:
1. 검색 함수 최적화
   - 적절한 의존성 관리
   - 에러 처리 추가
   - 로딩 상태 안전하게 관리

2. 항목 클릭 함수 최적화
   - 불변 함수는 빈 의존성 배열 사용
   - memo와 함께 효과적으로 동작

3. 성능 최적화
   - 불필요한 리렌더링 방지
   - 메모리 사용 최적화`,
    hint: '메모이제이션된 컴포넌트에 전달되는 함수는 반드시 useCallback으로 감싸야 memo가 효과적으로 동작합니다. 또한, 에러 처리와 로딩 상태 관리도 잊지 마세요.',
  },
  {
    id: 2,
    title: 'Effect 의존성 최적화하기',
    description: `실시간 데이터 연결을 관리하는 컴포넌트를 최적화하세요.
요구사항:
- 연결과 관련된 값이 변경될 때만 재연결되어야 함
- 불필요한 의존성은 제거
- 연결 상태를 UI에 표시`,
    code: `import { useState, useEffect, useCallback } from 'react';

interface ConnectionOptions {
  userId: string;
  serverUrl: string;
  settings?: {
    theme: string;
    notifications: boolean;
  };
}

function DataStream({ userId, theme, notifications = true }) {
  const [status, setStatus] = useState('disconnected');
  const [data, setData] = useState(null);
  
  // TODO: createOptions 함수를 최적화하고 불필요한 의존성 제거
  const createOptions = () => {
    return {
      userId,
      serverUrl: 'wss://data.example.com',
      settings: {
        theme,
        notifications
      }
    };
  };

  useEffect(() => {
    setStatus('connecting');
    const options = createOptions();
    const connection = createConnection(options);
    
    connection.connect();
    connection.on('data', (newData) => {
      setData(newData);
      setStatus('connected');
    });
    
    return () => {
      setStatus('disconnected');
      connection.disconnect();
    };
  }, [createOptions]);

  return (
    <div className="p-4 border rounded">
      <div className="space-y-2">
        <div>상태: {status}</div>
        {data && (
          <pre className="bg-gray-100 p-2 rounded">
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
      </div>
    </div>
  );
}`,
    answer: `최적화된 구현은 다음과 같습니다:

\`\`\`typescript
function DataStream({ userId, theme, notifications = true }) {
  const [status, setStatus] = useState('disconnected');
  const [data, setData] = useState(null);
  
  // 연결에 필요한 옵션만 포함하여 메모이제이션
  const createOptions = useCallback((): ConnectionOptions => {
    return {
      userId,
      serverUrl: 'wss://data.example.com',
      settings: {
        notifications // 알림 설정만 포함
      }
    };
  }, [userId, notifications]); // theme 제거 - 연결과 무관

  useEffect(() => {
    let mounted = true;
    
    async function establishConnection() {
      try {
        setStatus('connecting');
        const options = createOptions();
        const connection = createConnection(options);
        
        await connection.connect();
        
        connection.on('data', (newData) => {
          if (mounted) {
            setData(newData);
            setStatus('connected');
          }
        });
        
        return connection;
      } catch (error) {
        if (mounted) {
          setStatus('error');
          console.error('Connection failed:', error);
        }
        throw error;
      }
    }
    
    let connection;
    establishConnection()
      .then(conn => {
        connection = conn;
      })
      .catch(() => {
        // 에러는 establishConnection에서 처리됨
      });
    
    return () => {
      mounted = false;
      if (connection) {
        setStatus('disconnected');
        connection.disconnect();
      }
    };
  }, [createOptions]); // createOptions만 의존성으로 사용

  return (
    <div className="p-4 border rounded">
      <div className="space-y-2">
        <div className={\`font-semibold \${
          status === 'connected' ? 'text-green-600' : 
          status === 'connecting' ? 'text-yellow-600' : 
          status === 'error' ? 'text-red-600' : 
          'text-gray-600'
        }\`}>
          상태: {status}
        </div>
        {data && (
          <pre className="bg-gray-100 p-2 rounded">
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
      </div>
    </div>
  );
}
\`\`\`

주요 개선사항:
1. 불필요한 의존성 제거
   - theme는 연결과 무관하므로 제거
   - 실제 필요한 설정만 포함

2. 안전한 비동기 처리
   - cleanup 함수에서 메모리 누수 방지
   - 마운트 상태 추적
   - 에러 처리 추가

3. 상태 관리 개선
   - 연결 상태를 더 명확하게 표시
   - 시각적 피드백 추가

4. 타입 안정성
   - 인터페이스를 활용한 타입 체크
   - 옵션 객체의 타입 보장`,
    hint: 'Effect의 의존성을 최소화하려면 연결에 실제로 필요한 값만 포함하세요. 또한 비동기 작업의 안전한 정리(cleanup)와 메모리 누수 방지도 중요합니다.',
  },
];
