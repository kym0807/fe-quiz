export const codeQuizzes = [
  {
    id: 1,
    title: '테마 컨텍스트 구현하기',
    description:
      '다크/라이트 테마를 전역적으로 관리하는 테마 컨텍스트를 구현하세요. Context를 생성하고, Provider를 만들고, useContext를 사용하여 테마를 소비하는 컴포넌트를 작성하세요. 성능 최적화도 고려해야 합니다.',
    code: `import { createContext, useContext, useState, useMemo, ReactNode } from 'react';

// TODO: ThemeContext 생성 (타입 정의 포함)

// TODO: ThemeProvider 컴포넌트 구현 (성능 최적화 포함)

// TODO: 커스텀 훅 구현

// 테마를 사용하는 자식 컴포넌트
function ThemedButton() {
  // TODO: 커스텀 훅을 사용하여 테마 및 테마 변경 함수 가져오기
  
  return (
    <button
      className={\`p-2 rounded \${theme === 'dark' 
        ? 'bg-gray-800 text-white hover:bg-gray-700' 
        : 'bg-gray-200 text-black hover:bg-gray-300'}\`}
      onClick={/* TODO: 테마 토글 */}
    >
      현재 테마: {theme}
    </button>
  );
}

function ThemedPanel({ children }: { children: ReactNode }) {
  // TODO: 테마에 따라 스타일이 바뀌는 패널 구현
}

// 메인 앱 컴포넌트
export default function App() {
  return (
    // TODO: ThemeProvider로 앱 감싸기
    <div className="p-4">
      <h1>테마 테스트</h1>
      <ThemedPanel>
        <ThemedButton />
      </ThemedPanel>
    </div>
  );
}`,
    answer: `올바른 구현은 다음과 같습니다:

\`\`\`typescript
// 1. 타입 및 Context 정의
type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

// 2. Provider 컴포넌트 (성능 최적화 포함)
function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  
  const toggleTheme = useCallback(() => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  }, []);
  
  // Context 값 메모이제이션
  const value = useMemo(() => ({
    theme,
    toggleTheme,
    setTheme
  }), [theme, toggleTheme]);
  
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. 커스텀 훅
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

// 4. 컴포넌트 구현
function ThemedButton() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button
      className={\`p-2 rounded transition-colors \${
        theme === 'dark' 
          ? 'bg-gray-800 text-white hover:bg-gray-700' 
          : 'bg-gray-200 text-black hover:bg-gray-300'
      }\`}
      onClick={toggleTheme}
    >
      현재 테마: {theme}
    </button>
  );
}

function ThemedPanel({ children }: { children: ReactNode }) {
  const { theme } = useTheme();
  
  return (
    <div className={\`p-4 rounded-lg transition-colors \${
      theme === 'dark'
        ? 'bg-gray-900 text-white'
        : 'bg-white text-black border'
    }\`}>
      {children}
    </div>
  );
}

// 5. 메인 앱
export default function App() {
  return (
    <ThemeProvider>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">테마 테스트</h1>
        <ThemedPanel>
          <ThemedButton />
        </ThemedPanel>
      </div>
    </ThemeProvider>
  );
}
\`\`\``,
    hint: 'Context 값으로는 현재 테마 상태와 테마를 변경하는 함수를 함께 제공해야 합니다. useMemo와 useCallback을 사용하여 성능을 최적화하고, 커스텀 훅을 통해 Context 사용을 추상화하세요. 컴포넌트 트리가 깊어질 때를 대비해 에러 처리도 고려하세요.',
  },
  {
    id: 2,
    title: 'Context와 Reducer로 쇼핑카트 구현하기',
    description:
      '쇼핑 카트 기능을 Context와 Reducer를 사용하여 구현하세요. 상품 추가, 수량 조절, 삭제 기능과 총액 계산이 필요합니다. 성능 최적화도 고려하세요.',
    code: `import { createContext, useContext, useReducer, useMemo, ReactNode } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
}

interface CartItem extends Product {
  quantity: number;
}

type CartAction =
  | { type: 'ADD_ITEM'; product: Product }
  | { type: 'REMOVE_ITEM'; id: number }
  | { type: 'UPDATE_QUANTITY'; id: number; quantity: number };

// TODO: Context 생성 (상태용, 디스패치용 분리)

// TODO: Reducer 함수 구현

// TODO: Provider 컴포넌트 구현

// TODO: 커스텀 훅 구현

function ProductList() {
  // 상품 목록 컴포넌트
}

function Cart() {
  // 장바구니 컴포넌트
}

function CartSummary() {
  // 장바구니 합계 컴포넌트
}

export default function ShoppingApp() {
  return (
    // TODO: Provider로 감싸기
    <div>
      <h1>쇼핑몰</h1>
      <div className="grid grid-cols-2 gap-4">
        <ProductList />
        <div>
          <Cart />
          <CartSummary />
        </div>
      </div>
    </div>
  );
}`,
    answer: `올바른 구현은 다음과 같습니다:

\`\`\`typescript
// 1. 타입 및 Context 정의
type CartState = {
  items: CartItem[];
  total: number;
};

const CartStateContext = createContext<CartState | null>(null);
const CartDispatchContext = createContext<React.Dispatch<CartAction> | null>(null);

// 2. Reducer 구현
function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(item => item.id === action.product.id);
      
      const items = existingItem
        ? state.items.map(item =>
            item.id === action.product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...state.items, { ...action.product, quantity: 1 }];
      
      return {
        items,
        total: items.reduce((sum, item) => sum + item.price * item.quantity, 0)
      };
    }
    
    case 'REMOVE_ITEM': {
      const items = state.items.filter(item => item.id !== action.id);
      return {
        items,
        total: items.reduce((sum, item) => sum + item.price * item.quantity, 0)
      };
    }
    
    case 'UPDATE_QUANTITY': {
      const items = state.items.map(item =>
        item.id === action.id
          ? { ...item, quantity: action.quantity }
          : item
      ).filter(item => item.quantity > 0);
      
      return {
        items,
        total: items.reduce((sum, item) => sum + item.price * item.quantity, 0)
      };
    }
    
    default:
      return state;
  }
}

// 3. Provider 컴포넌트
function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    total: 0
  });
  
  const memoizedState = useMemo(() => state, [state]);
  
  return (
    <CartStateContext.Provider value={memoizedState}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
}

// 4. 커스텀 훅
function useCartState() {
  const context = useContext(CartStateContext);
  if (!context) throw new Error('CartProvider 내부에서 사용해야 합니다');
  return context;
}

function useCartDispatch() {
  const context = useContext(CartDispatchContext);
  if (!context) throw new Error('CartProvider 내부에서 사용해야 합니다');
  return context;
}

// 5. 컴포넌트 구현
const SAMPLE_PRODUCTS: Product[] = [
  { id: 1, name: '상품 1', price: 10000 },
  { id: 2, name: '상품 2', price: 20000 },
];

function ProductList() {
  const dispatch = useCartDispatch();
  
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">상품 목록</h2>
      {SAMPLE_PRODUCTS.map(product => (
        <div key={product.id} className="p-4 border rounded">
          <h3>{product.name}</h3>
          <p>{product.price.toLocaleString()}원</p>
          <button
            onClick={() => dispatch({ type: 'ADD_ITEM', product })}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            담기
          </button>
        </div>
      ))}
    </div>
  );
}

function Cart() {
  const { items } = useCartState();
  const dispatch = useCartDispatch();
  
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">장바구니</h2>
      {items.map(item => (
        <div key={item.id} className="p-4 border rounded flex items-center justify-between">
          <div>
            <h3>{item.name}</h3>
            <p>{item.price.toLocaleString()}원</p>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => dispatch({
                type: 'UPDATE_QUANTITY',
                id: item.id,
                quantity: item.quantity - 1
              })}
              className="px-2 py-1 bg-gray-200 rounded"
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button
              onClick={() => dispatch({
                type: 'UPDATE_QUANTITY',
                id: item.id,
                quantity: item.quantity + 1
              })}
              className="px-2 py-1 bg-gray-200 rounded"
            >
              +
            </button>
            <button
              onClick={() => dispatch({ type: 'REMOVE_ITEM', id: item.id })}
              className="px-2 py-1 bg-red-500 text-white rounded"
            >
              삭제
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

function CartSummary() {
  const { total } = useCartState();
  
  return (
    <div className="mt-4 p-4 bg-gray-100 rounded">
      <h2 className="text-xl font-bold">합계</h2>
      <p className="text-2xl">{total.toLocaleString()}원</p>
    </div>
  );
}

export default function ShoppingApp() {
  return (
    <CartProvider>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">쇼핑몰</h1>
        <div className="grid grid-cols-2 gap-4">
          <ProductList />
          <div>
            <Cart />
            <CartSummary />
          </div>
        </div>
      </div>
    </CartProvider>
  );
}
\`\`\``,
    hint: '상태와 디스패치를 별도의 Context로 분리하여 성능을 최적화하세요. Reducer에서는 상태 업데이트와 함께 총액을 계산하고, useMemo를 사용하여 불필요한 리렌더링을 방지하세요. 커스텀 훅을 통해 Context 사용을 추상화하면 코드가 더 깔끔해집니다.',
  },
  {
    id: 3,
    title: '다국어 지원 시스템 구현하기',
    description: `다국어 지원 시스템을 Context를 사용하여 구현하세요. 다음 기능들이 필요합니다:
    - 언어 변경 기능
    - 문자열 번역 (변수 치환 지원)
    - 날짜/시간 포맷팅
    - 숫자/통화 포맷팅
    성능 최적화와 타입 안정성도 고려해야 합니다.`,
    code: `import { createContext, useContext, useState, useMemo, ReactNode } from 'react';
  
  // 지원할 언어 타입
  type Locale = 'ko' | 'en' | 'ja';
  
  // 번역 데이터 타입
  interface Translations {
    hello: string;
    welcome: string;
    currentTime: string;
    price: string;
  }
  
  // 번역 데이터
  const translations: Record<Locale, Translations> = {
    ko: {
      hello: '안녕하세요',
      welcome: '{name}님 환영합니다',
      currentTime: '현재 시간: {time}',
      price: '가격: {amount}원'
    },
    en: {
      hello: 'Hello',
      welcome: 'Welcome, {name}',
      currentTime: 'Current time: {time}',
      price: 'Price: {amount}'
    },
    ja: {
      hello: 'こんにちは',
      welcome: 'ようこそ、{name}様',
      currentTime: '現在時刻: {time}',
      price: '価格: ¥{amount}'
    }
  };
  
  // TODO: i18n Context 생성
  
  // TODO: Provider 컴포넌트 구현
  
  // TODO: 번역 및 포맷팅 유틸리티 함수 구현
  
  // TODO: 커스텀 훅 구현
  
  function LanguageSelector() {
    // TODO: 언어 선택 컴포넌트 구현
  }
  
  function WelcomeMessage() {
    // TODO: 환영 메시지 컴포넌트 구현
  }
  
  function CurrentTime() {
    // TODO: 현재 시간 표시 컴포넌트 구현
  }
  
  function PriceDisplay() {
    // TODO: 가격 표시 컴포넌트 구현
  }
  
  export default function App() {
    return (
      // TODO: Provider로 감싸기
      <div>
        <h1>다국어 지원 테스트</h1>
        <LanguageSelector />
        <WelcomeMessage />
        <CurrentTime />
        <PriceDisplay />
      </div>
    );
  }`,
    answer: `올바른 구현은 다음과 같습니다:
  
  \`\`\`typescript
  // 1. Context 및 타입 정의
  interface I18nContextType {
    locale: Locale;
    setLocale: (locale: Locale) => void;
    t: (key: keyof Translations, vars?: Record<string, string | number>) => string;
    formatDate: (date: Date) => string;
    formatNumber: (num: number, style?: 'decimal' | 'currency') => string;
  }
  
  const I18nContext = createContext<I18nContextType | null>(null);
  
  // 2. Provider 컴포넌트
  function I18nProvider({ children }: { children: ReactNode }) {
    const [locale, setLocale] = useState<Locale>('ko');
  
    // 번역 함수
    const t = useCallback((
      key: keyof Translations,
      vars?: Record<string, string | number>
    ) => {
      let text = translations[locale][key];
      
      if (vars) {
        Object.entries(vars).forEach(([key, value]) => {
          text = text.replace(\`{{key}}\`, String(value));
        });
      }
      
      return text;
    }, [locale]);
  
    // 날짜 포맷팅
    const formatDate = useCallback((date: Date) => {
      return new Intl.DateTimeFormat(locale, {
        dateStyle: 'full',
        timeStyle: 'medium'
      }).format(date);
    }, [locale]);
  
    // 숫자 포맷팅
    const formatNumber = useCallback((
      num: number,
      style: 'decimal' | 'currency' = 'decimal'
    ) => {
      const options: Intl.NumberFormatOptions = {
        style,
        currency: locale === 'ko' ? 'KRW' : locale === 'en' ? 'USD' : 'JPY',
        currencyDisplay: 'symbol'
      };
      
      return new Intl.NumberFormat(locale, options).format(num);
    }, [locale]);
  
    // Context 값 메모이제이션
    const value = useMemo(() => ({
      locale,
      setLocale,
      t,
      formatDate,
      formatNumber
    }), [locale, t, formatDate, formatNumber]);
  
    return (
      <I18nContext.Provider value={value}>
        {children}
      </I18nContext.Provider>
    );
  }
  
  // 3. 커스텀 훅
  function useI18n() {
    const context = useContext(I18nContext);
    if (!context) {
      throw new Error('useI18n must be used within I18nProvider');
    }
    return context;
  }
  
  // 4. 컴포넌트 구현
  function LanguageSelector() {
    const { locale, setLocale } = useI18n();
    
    return (
      <select
        value={locale}
        onChange={(e) => setLocale(e.target.value as Locale)}
        className="p-2 border rounded"
      >
        <option value="ko">한국어</option>
        <option value="en">English</option>
        <option value="ja">日本語</option>
      </select>
    );
  }
  
  function WelcomeMessage() {
    const { t } = useI18n();
    
    return (
      <div className="my-4">
        <h2>{t('hello')}</h2>
        <p>{t('welcome', { name: 'User' })}</p>
      </div>
    );
  }
  
  function CurrentTime() {
    const { t, formatDate } = useI18n();
    const [now, setNow] = useState(new Date());
    
    useEffect(() => {
      const timer = setInterval(() => setNow(new Date()), 1000);
      return () => clearInterval(timer);
    }, []);
    
    return (
      <div className="my-4">
        <p>{t('currentTime', { time: formatDate(now) })}</p>
      </div>
    );
  }
  
  function PriceDisplay() {
    const { t, formatNumber } = useI18n();
    const price = 1000000;
    
    return (
      <div className="my-4">
        <p>{t('price', { amount: formatNumber(price, 'currency') })}</p>
      </div>
    );
  }
  
  // 5. 메인 앱
  export default function App() {
    return (
      <I18nProvider>
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">다국어 지원 테스트</h1>
          <LanguageSelector />
          <WelcomeMessage />
          <CurrentTime />
          <PriceDisplay />
        </div>
      </I18nProvider>
    );
  }
  \`\`\``,
    hint: `다국어 지원 시스템 구현 시 다음 사항들을 고려하세요:
  - Context 값을 메모이제이션하여 성능 최적화
  - 변수 치환을 지원하는 번역 함수 구현
  - Intl API를 활용한 날짜/시간/숫자 포맷팅
  - 타입 안정성을 위한 인터페이스 정의
  - 커스텀 훅을 통한 사용성 개선
  - 실시간 업데이트가 필요한 컴포넌트(시계 등) 처리
  - 각 지역에 맞는 통화 기호 및 포맷 처리`,
  },
];
