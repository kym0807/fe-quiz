export const codeQuizzes = [
  {
    id: 1,
    title: 'API 상태 디버깅',
    description:
      'API 호출의 상태를 관리하는 커스텀 훅에 useDebugValue를 추가하여 현재 상태와 데이터를 디버깅하기 쉽게 만드세요.',
    code: `import { useState, useEffect, useDebugValue } from 'react';

interface ApiState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

function useFetch<T>(url: string) {
  const [state, setState] = useState<ApiState<T>>({
    data: null,
    loading: true,
    error: null
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setState({ data: json, loading: false, error: null });
      } catch (error) {
        setState({ data: null, loading: false, error: error as Error });
      }
    };

    fetchData();
  }, [url]);

  // TODO: useDebugValue를 사용하여 현재 상태를 디버그하기 쉽게 표시
  
  return state;
}

// 사용 예시
function UserProfile({ userId }: { userId: string }) {
  const { data, loading, error } = useFetch(
    \`https://api.example.com/users/\${userId}\`
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return <div>User: {data?.name}</div>;
}`,
    answer: `올바른 구현은 다음과 같습니다:

\`\`\`typescript
function useFetch<T>(url: string) {
  const [state, setState] = useState<ApiState<T>>({
    data: null,
    loading: true,
    error: null
  });

  // 기본적인 상태 디버그 값
  useDebugValue(state, (state) => ({
    status: state.loading ? 'loading' : state.error ? 'error' : 'success',
    data: state.data,
    error: state.error?.message
  }));

  // 또는 더 간단한 문자열 형태로:
  useDebugValue(
    state.loading ? 'Loading...' :
    state.error ? \`Error: \${state.error.message}\` :
    \`Data: \${JSON.stringify(state.data, null, 2)}\`
  );

  // ... 나머지 구현
}
\`\`\`

이 구현은 다음과 같은 장점이 있습니다:
1. 현재 상태를 한눈에 파악 가능
2. 데이터나 에러 존재 여부를 즉시 확인 가능
3. DevTools에서 상태 변화를 추적하기 쉬움`,
    hint: 'useDebugValue에 객체를 전달할 때는 포맷팅 함수를 사용하여 필요한 정보만 표시하는 것이 좋습니다. 또한 문자열로 변환할 때는 JSON.stringify를 활용할 수 있습니다.',
  },
  {
    id: 2,
    title: '폼 유효성 검사 디버깅',
    description:
      '폼의 유효성 검사 상태를 관리하는 커스텀 훅에 useDebugValue를 추가하여 현재 오류 상태를 디버깅하기 쉽게 만드세요.',
    code: `import { useState, useDebugValue } from 'react';

interface ValidationRules {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
}

interface ValidationErrors {
  required?: boolean;
  minLength?: boolean;
  maxLength?: boolean;
  pattern?: boolean;
}

function useFormValidation(
  value: string,
  rules: ValidationRules
) {
  const [errors, setErrors] = useState<ValidationErrors>({});

  const validate = () => {
    const newErrors: ValidationErrors = {};
    
    if (rules.required && !value) {
      newErrors.required = true;
    }
    
    if (rules.minLength && value.length < rules.minLength) {
      newErrors.minLength = true;
    }
    
    if (rules.maxLength && value.length > rules.maxLength) {
      newErrors.maxLength = true;
    }
    
    if (rules.pattern && !rules.pattern.test(value)) {
      newErrors.pattern = true;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // TODO: useDebugValue를 사용하여 현재 유효성 검사 상태를 표시
  
  return { errors, validate };
}

// 사용 예시
function PasswordField() {
  const [password, setPassword] = useState('');
  const { errors, validate } = useFormValidation(password, {
    required: true,
    minLength: 8,
    pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
  });

  return (
    <div>
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        onBlur={validate}
      />
      {errors.required && <span>필수 입력입니다</span>}
      {errors.minLength && <span>최소 8자 이상이어야 합니다</span>}
      {errors.pattern && <span>영문자와 숫자를 포함해야 합니다</span>}
    </div>
  );
}`,
    answer: `올바른 구현은 다음과 같습니다:

\`\`\`typescript
function useFormValidation(
  value: string,
  rules: ValidationRules
) {
  const [errors, setErrors] = useState<ValidationErrors>({});

  // 복잡한 유효성 검사 상태를 읽기 쉽게 포맷팅
  useDebugValue(
    { value, errors },
    ({ value, errors }) => {
      const errorMessages = [];
      
      if (!value && rules.required) {
        errorMessages.push('Required');
      }
      
      if (rules.minLength && value.length < rules.minLength) {
        errorMessages.push(\`Too short (min: \${rules.minLength})\`);
      }
      
      if (rules.maxLength && value.length > rules.maxLength) {
        errorMessages.push(\`Too long (max: \${rules.maxLength})\`);
      }
      
      if (rules.pattern && !rules.pattern.test(value)) {
        errorMessages.push('Pattern mismatch');
      }
      
      return {
        value: value || '(empty)',
        length: value.length,
        valid: Object.keys(errors).length === 0,
        errors: errorMessages.length > 0 ? errorMessages : 'No errors'
      };
    }
  );

  // ... 나머지 구현
}
\`\`\`

이 구현의 장점:
1. 현재 입력값과 길이를 즉시 확인 가능
2. 유효성 검사 오류를 사람이 읽기 쉬운 형태로 표시
3. 개발 중에 패턴 매칭 실패 원인을 쉽게 파악 가능`,
    hint: '포맷팅 함수를 사용하여 오류 메시지를 사람이 읽기 쉬운 형태로 변환하세요. 또한 value가 비어있는 경우를 명시적으로 표시하면 디버깅에 도움이 됩니다.',
  },
  {
    id: 3,
    title: '로컬 스토리지 상태 디버깅',
    description:
      '로컬 스토리지와 상태를 동기화하는 커스텀 훅에 useDebugValue를 추가하여 현재 저장된 값과 동기화 상태를 디버깅하기 쉽게 만드세요.',
    code: `import { useState, useEffect, useDebugValue } from 'react';

function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T) => void] {
  // 초기 상태 설정
  const [state, setState] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  // localStorage와 상태 동기화
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(state));
    } catch (error) {
      console.error(error);
    }
  }, [key, state]);

  // TODO: useDebugValue를 사용하여 현재 저장된 값과 동기화 상태를 표시
  
  return [state, setState];
}

// 사용 예시
function UserPreferences() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const [fontSize, setFontSize] = useLocalStorage('fontSize', 16);

  return (
    <div>
      <select value={theme} onChange={e => setTheme(e.target.value)}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      <input
        type="number"
        value={fontSize}
        onChange={e => setFontSize(Number(e.target.value))}
      />
    </div>
  );
}`,
    answer: `올바른 구현은 다음과 같습니다:

\`\`\`typescript
function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T) => void] {
  const [state, setState] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  // 저장된 값과 메모리 상의 값 비교를 위한 디버그 값
  useDebugValue(
    { key, state },
    ({ key, state }) => {
      const storedValue = window.localStorage.getItem(key);
      const parsedStoredValue = storedValue ? JSON.parse(storedValue) : undefined;
      
      return {
        key,
        memoryValue: state,
        storedValue: parsedStoredValue,
        synchronized: storedValue === JSON.stringify(state),
        storageAvailable: (() => {
          try {
            localStorage.setItem('test', 'test');
            localStorage.removeItem('test');
            return true;
          } catch {
            return false;
          }
        })()
      };
    }
  );

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(state));
    } catch (error) {
      console.error(error);
    }
  }, [key, state]);

  return [state, setState];
}
\`\`\`

이 구현의 장점:
1. 메모리상의 값과 localStorage에 저장된 값을 동시에 확인 가능
2. 동기화 상태를 즉시 확인 가능
3. localStorage 사용 가능 여부 확인 가능
4. 키 이름도 함께 표시되어 여러 개의 useLocalStorage 사용 시 구분이 쉬움`,
    hint: 'localStorage의 값과 메모리상의 값을 비교하여 동기화 상태를 표시하세요. 또한 localStorage 사용 가능 여부를 체크하여 개발 중 발생할 수 있는 문제를 미리 파악할 수 있습니다.',
  },
];
