export const codeQuizzes = [
  {
    id: 1,
    title: '실시간 검색 UI 최적화',
    description:
      '대량의 데이터를 필터링하는 검색 기능에서 useDeferredValue를 사용하여 입력 응답성을 개선하세요. memo와 함께 사용하여 성능을 최적화해야 합니다.',
    code: `import { useState, useDeferredValue, memo } from 'react';

// 가상의 대량 데이터
const ITEMS = Array.from({ length: 10000 }, (_, i) => ({
  id: i,
  text: \`Item \${i}\`
}));

// TODO: SearchResults 컴포넌트를 최적화하세요
function SearchResults({ query }) {
  const items = ITEMS.filter(item =>
    item.text.toLowerCase().includes(query.toLowerCase())
  );
  
  return (
    <ul className="space-y-1">
      {items.map(item => (
        <li key={item.id} className="p-2 bg-gray-100">
          {item.text}
        </li>
      ))}
    </ul>
  );
}

function SearchPage() {
  const [query, setQuery] = useState("");
  // TODO: useDeferredValue 적용
  
  return (
    <div className="p-4">
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="검색어 입력..."
        className="w-full p-2 border rounded"
      />
      <SearchResults query={query} />
    </div>
  );
}

export default SearchPage;`,
    answer: `올바른 구현은 다음과 같습니다:

\`\`\`typescript
// 1. SearchResults를 memo로 최적화
const SearchResults = memo(function SearchResults({ query }) {
  // 의도적으로 느린 필터링을 시뮬레이션
  const items = ITEMS.filter(item => {
    const startTime = performance.now();
    while (performance.now() - startTime < 1) {
      // 인위적인 지연
    }
    return item.text.toLowerCase().includes(query.toLowerCase());
  });
  
  return (
    <ul className="space-y-1">
      {items.map(item => (
        <li key={item.id} className="p-2 bg-gray-100">
          {item.text}
        </li>
      ))}
    </ul>
  );
});

function SearchPage() {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const isStale = query !== deferredQuery;
  
  return (
    <div className="p-4">
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="검색어 입력..."
        className="w-full p-2 border rounded"
      />
      <div style={{ opacity: isStale ? 0.5 : 1 }}>
        <SearchResults query={deferredQuery} />
      </div>
      {isStale && (
        <div className="text-sm text-gray-500 mt-2">
          검색 결과 업데이트 중...
        </div>
      )}
    </div>
  );
}
\`\`\`

주요 개선 사항:
1. SearchResults를 memo로 감싸 불필요한 리렌더링 방지
2. 검색어에 useDeferredValue 적용
3. 지연 상태(isStale) 표시로 UX 개선
4. 시각적 피드백 추가`,
    hint: 'useDeferredValue는 memo와 함께 사용할 때 가장 효과적입니다. 또한 현재 내용이 지연된 것임을 사용자에게 알려주는 것이 좋은 UX 관행입니다.',
  },
  {
    id: 2,
    title: '차트 렌더링 최적화',
    description:
      '실시간으로 업데이트되는 대규모 데이터 차트에서 useDeferredValue를 사용하여 렌더링 성능을 최적화하세요.',
    code: `import { useState, useDeferredValue, memo } from 'react';

interface DataPoint {
  timestamp: number;
  value: number;
}

// TODO: Chart 컴포넌트 최적화
function Chart({ data }: { data: DataPoint[] }) {
  // 의도적으로 무거운 렌더링을 시뮬레이션
  const points = data.map(point => ({
    x: point.timestamp,
    y: point.value
  }));
  
  return (
    <div className="h-64 border">
      {points.map((point, i) => (
        <div
          key={i}
          className="absolute w-1 bg-blue-500"
          style={{
            left: \`\${(point.x % 100)}%\`,
            bottom: \`\${point.y}%\`,
            height: \`\${point.y}%\`
          }}
        />
      ))}
    </div>
  );
}

function RealTimeChart() {
  const [data, setData] = useState<DataPoint[]>([]);
  
  // 실시간 데이터 업데이트 시뮬레이션
  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => [...prev, {
        timestamp: Date.now(),
        value: Math.random() * 100
      }].slice(-100));
    }, 100);
    
    return () => clearInterval(interval);
  }, []);
  
  // TODO: useDeferredValue 적용
  
  return (
    <div className="p-4">
      <h2>실시간 차트</h2>
      <Chart data={data} />
      {/* TODO: 로딩 상태 표시 */}
    </div>
  );
}

export default RealTimeChart;`,
    answer: `올바른 구현은 다음과 같습니다:

\`\`\`typescript
const Chart = memo(function Chart({ data }: { data: DataPoint[] }) {
  // 무거운 계산 시뮬레이션
  const points = data.map(point => {
    const startTime = performance.now();
    while (performance.now() - startTime < 0.1) {
      // 인위적인 지연
    }
    return {
      x: point.timestamp,
      y: point.value
    };
  });
  
  return (
    <div className="h-64 border relative">
      {points.map((point, i) => (
        <div
          key={i}
          className="absolute w-1 bg-blue-500"
          style={{
            left: \`\${(point.x % 100)}%\`,
            bottom: \`\${point.y}%\`,
            height: \`\${point.y}%\`
          }}
        />
      ))}
    </div>
  );
});

function RealTimeChart() {
  const [data, setData] = useState<DataPoint[]>([]);
  const deferredData = useDeferredValue(data);
  const isStale = data !== deferredData;
  
  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => [...prev, {
        timestamp: Date.now(),
        value: Math.random() * 100
      }].slice(-100));
    }, 100);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="p-4">
      <h2>실시간 차트</h2>
      <div style={{
        opacity: isStale ? 0.7 : 1,
        transition: 'opacity 0.2s'
      }}>
        <Chart data={deferredData} />
      </div>
      {isStale && (
        <div className="text-sm text-gray-500 mt-2">
          차트 업데이트 중...
        </div>
      )}
      <div className="text-sm text-gray-500 mt-2">
        데이터 포인트: {data.length}
      </div>
    </div>
  );
}
\`\`\`

주요 개선 사항:
1. Chart 컴포넌트를 memo로 최적화
2. 차트 데이터에 useDeferredValue 적용
3. 지연 상태에 대한 시각적 피드백 추가
4. 성능 비용이 큰 연산을 시뮬레이션하여 최적화 효과 확인 가능`,
    hint: '실시간 데이터를 다룰 때는 모든 업데이트를 즉시 반영하는 것보다, 일부 업데이트를 지연시키는 것이 더 나은 사용자 경험을 제공할 수 있습니다.',
  },
  {
    id: 3,
    title: '이미지 갤러리 필터링',
    description:
      '대량의 이미지를 필터링하는 갤러리에서 useDeferredValue와 Suspense를 조합하여 사용자 경험을 개선하세요.',
    code: `import { useState, useDeferredValue, Suspense, memo } from 'react';

interface Image {
  id: number;
  src: string;
  tags: string[];
}

// 무거운 이미지 로딩을 시뮬레이션하는 컴포넌트
function ImageGrid({ filter }: { filter: string }) {
  // TODO: 이미지 필터링 및 로딩 로직 구현
  return (
    <div className="grid grid-cols-3 gap-4">
      {/* TODO: 필터링된 이미지 표시 */}
    </div>
  );
}

function Gallery() {
  const [filter, setFilter] = useState("");
  // TODO: useDeferredValue 적용
  
  return (
    <div className="p-4">
      <input
        type="text"
        value={filter}
        onChange={e => setFilter(e.target.value)}
        placeholder="태그로 필터링..."
        className="w-full p-2 border rounded mb-4"
      />
      
      {/* TODO: Suspense와 함께 ImageGrid 사용 */}
    </div>
  );
}

export default Gallery;`,
    answer: `올바른 구현은 다음과 같습니다:

\`\`\`typescript
// 이미지 로딩을 시뮬레이션하는 함수
function fetchImages(filter: string): Promise<Image[]> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(Array.from({ length: 50 }, (_, i) => ({
        id: i,
        src: \`https://picsum.photos/200/200?random=\${i}\`,
        tags: ['nature', 'city', 'people'][i % 3]
      })).filter(img => 
        !filter || img.tags.some(tag => 
          tag.toLowerCase().includes(filter.toLowerCase())
        )
      ));
    }, 1000);
  });
}

const ImageGrid = memo(function ImageGrid({ filter }: { filter: string }) {
  const [images, setImages] = useState<Image[]>([]);
  
  useEffect(() => {
    let mounted = true;
    fetchImages(filter).then(imgs => {
      if (mounted) {
        setImages(imgs);
      }
    });
    return () => { mounted = false; };
  }, [filter]);
  
  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map(img => (
        <div key={img.id} className="aspect-square bg-gray-100">
          <img
            src={img.src}
            alt={\`Image \${img.id}\`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="text-sm text-gray-500 mt-1">
            {img.tags.join(', ')}
          </div>
        </div>
      ))}
    </div>
  );
});

function LoadingGrid() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {Array.from({ length: 9 }, (_, i) => (
        <div key={i} className="aspect-square bg-gray-200 animate-pulse" />
      ))}
    </div>
  );
}

function Gallery() {
  const [filter, setFilter] = useState("");
  const deferredFilter = useDeferredValue(filter);
  const isStale = filter !== deferredFilter;
  
  return (
    <div className="p-4">
      <input
        type="text"
        value={filter}
        onChange={e => setFilter(e.target.value)}
        placeholder="태그로 필터링..."
        className="w-full p-2 border rounded mb-4"
      />
      
      <div style={{
        opacity: isStale ? 0.7 : 1,
        transition: 'opacity 0.2s'
      }}>
        <Suspense fallback={<LoadingGrid />}>
          <ImageGrid filter={deferredFilter} />
        </Suspense>
      </div>
      
      {isStale && (
        <div className="text-sm text-gray-500 mt-2">
          필터링된 결과를 불러오는 중...
        </div>
      )}
    </div>
  );
}
\`\`\`

주요 개선 사항:
1. ImageGrid를 memo로 최적화하여 불필요한 리렌더링 방지
2. 필터에 useDeferredValue 적용하여 입력 응답성 개선
3. Suspense와 함께 사용하여 로딩 상태 처리
4. 지연 상태에 대한 시각적 피드백 제공
5. 이미지 지연 로딩(lazy loading) 적용`,
    hint: 'Suspense와 useDeferredValue를 함께 사용하면 로딩 상태를 더 부드럽게 처리할 수 있습니다. 또한 이미지 갤러리에서는 lazy loading을 활용하여 초기 로딩 성능을 개선할 수 있습니다.',
  },
];
