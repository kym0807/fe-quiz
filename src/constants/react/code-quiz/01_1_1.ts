export const codeQuizzes = [
  {
    id: 1,
    title: '기본적인 카운터 구현하기',
    description: `useActionState를 사용하여 증가/감소가 가능한 카운터를 구현하세요.
요구사항:
- 카운터는 0 미만으로 내려가지 않아야 합니다
- 증가/감소 버튼 클릭 시 적절한 시각적 피드백을 제공해야 합니다
- 로딩 상태를 적절히 처리해야 합니다`,
    initialCode: `import { useActionState } from "react";

function Counter() {
  // TODO: updateCounter 함수와 useActionState 구현
  
  return (
    <form className="flex gap-4 items-center p-4 border rounded-lg">
      <span className="text-xl font-semibold">카운트: {/* TODO: 현재 상태 표시 */}</span>
      <div className="space-x-2">
        <button 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          formAction={/* TODO */}
          disabled={/* TODO */}
        >
          증가
        </button>
        <button 
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          formAction={/* TODO */}
          disabled={/* TODO */}
        >
          감소
        </button>
      </div>
      {/* TODO: 로딩 상태 표시 */}
    </form>
  );
}

export default Counter;`,
    solution: `import { useActionState } from "react";

interface CounterState {
  value: number;
  lastAction?: 'increment' | 'decrement';
}

async function updateCounter(prevState: CounterState, formData: FormData) {
  // 실제 환경을 시뮬레이션하기 위한 지연
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const type = formData.get("type") as string;
  const newValue = type === "increment" 
    ? prevState.value + 1 
    : Math.max(0, prevState.value - 1);
    
  return {
    value: newValue,
    lastAction: type as 'increment' | 'decrement'
  };
}

function Counter() {
  const [state, formAction, isPending] = useActionState(updateCounter, {
    value: 0
  });
  
  return (
    <form className="flex gap-4 items-center p-4 border rounded-lg">
      <span className="text-xl font-semibold">
        카운트: {state.value}
        {state.lastAction && (
          <span className="text-sm text-gray-500 ml-2">
            마지막 동작: {state.lastAction === 'increment' ? '증가' : '감소'}
          </span>
        )}
      </span>
      
      <div className="space-x-2">
        <button 
          className={\`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 
            \${isPending ? 'opacity-50' : ''}\`}
          formAction={formAction.bind(null, new FormData([["type", "increment"]]))}
          disabled={isPending}
        >
          {isPending ? '처리 중...' : '증가'}
        </button>
        <button 
          className={\`px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600
            \${isPending ? 'opacity-50' : ''}\`}
          formAction={formAction.bind(null, new FormData([["type", "decrement"]]))}
          disabled={isPending || state.value === 0}
        >
          {isPending ? '처리 중...' : '감소'}
        </button>
      </div>
      
      {isPending && (
        <span className="text-sm text-gray-500">처리 중...</span>
      )}
    </form>
  );
}

export default Counter;`,
    explanation: `이 구현의 주요 포인트:

1. 상태 관리
- CounterState 인터페이스를 정의하여 타입 안전성 확보
- 값뿐만 아니라 마지막 수행된 액션도 저장

2. 액션 처리
- FormData를 사용하여 액션 타입 전달
- bind를 사용하여 각 버튼에 적절한 액션 연결
- Math.max를 사용하여 최소값 제한

3. 사용자 경험
- 로딩 상태에 따른 버튼 비활성화
- 시각적 피드백 (투명도, 텍스트 변경)
- 마지막 수행된 액션 표시

4. 접근성과 스타일링
- 의미 있는 클래스명 사용
- 상호작용 상태에 따른 스타일 변경
- 로딩 상태의 명확한 표시`,
    hint: '상태 객체에 부가 정보를 추가하여 사용자 경험을 향상시킬 수 있습니다. isPending을 활용하여 적절한 로딩 상태를 표시하세요.',
  },
  {
    id: 2,
    title: '비동기 폼 제출 처리하기',
    description: `useActionState를 사용하여 비동기 폼 제출을 구현하세요.
요구사항:
- 제출 중 로딩 상태 표시
- 성공/실패에 대한 적절한 피드백
- 폼 유효성 검사
- 중복 제출 방지`,
    initialCode: `import { useActionState } from "react";

interface FormState {
  status: 'idle' | 'success' | 'error';
  message?: string;
  data?: any;
}

// TODO: submitForm 함수 구현

function SubmitForm() {
  // TODO: useActionState 구현
  
  return (
    <form className="space-y-4 p-4 border rounded-lg">
      <div className="space-y-2">
        <label htmlFor="email">이메일</label>
        <input 
          type="email" 
          id="email"
          name="email" 
          className="w-full p-2 border rounded"
          required 
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="message">메시지</label>
        <textarea
          id="message"
          name="message"
          className="w-full p-2 border rounded"
          required
        />
      </div>
      
      {/* TODO: 제출 버튼 및 상태 표시 */}
    </form>
  );
}

export default SubmitForm;`,
    solution: `import { useActionState } from "react";

interface FormState {
  status: 'idle' | 'success' | 'error';
  message?: string;
  data?: {
    email: string;
    message: string;
  };
}

async function submitForm(prevState: FormState, formData: FormData): Promise<FormState> {
  // 실제 API 호출을 시뮬레이션
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;
  
  // 기본적인 유효성 검사
  if (!email.includes('@')) {
    return {
      status: 'error',
      message: '유효한 이메일 주소를 입력하세요.'
    };
  }
  
  if (message.length < 10) {
    return {
      status: 'error',
      message: '메시지는 최소 10자 이상이어야 합니다.'
    };
  }
  
  // 성공 시 처리
  return {
    status: 'success',
    message: '메시지가 성공적으로 전송되었습니다!',
    data: { email, message }
  };
}

function SubmitForm() {
  const [state, formAction, isPending] = useActionState<FormState>(submitForm, {
    status: 'idle'
  });
  
  return (
    <form className="space-y-4 p-4 border rounded-lg" action={formAction}>
      <div className="space-y-2">
        <label htmlFor="email" className="block font-medium">
          이메일
        </label>
        <input 
          type="email" 
          id="email"
          name="email" 
          className={\`w-full p-2 border rounded
            \${state.status === 'error' ? 'border-red-500' : 'border-gray-300'}
            focus:ring-2 focus:ring-blue-500 outline-none\`}
          required 
          disabled={isPending}
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="message" className="block font-medium">
          메시지
        </label>
        <textarea
          id="message"
          name="message"
          className={\`w-full p-2 border rounded
            \${state.status === 'error' ? 'border-red-500' : 'border-gray-300'}
            focus:ring-2 focus:ring-blue-500 outline-none\`}
          required
          disabled={isPending}
          rows={4}
        />
      </div>
      
      <div className="space-y-2">
        <button
          type="submit"
          className={\`w-full py-2 px-4 rounded font-medium
            \${isPending ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'}
            text-white transition-colors\`}
          disabled={isPending}
        >
          {isPending ? '제출 중...' : '제출하기'}
        </button>
        
        {state.status === 'success' && (
          <div className="p-3 bg-green-100 text-green-700 rounded">
            {state.message}
          </div>
        )}
        
        {state.status === 'error' && (
          <div className="p-3 bg-red-100 text-red-700 rounded">
            {state.message}
          </div>
        )}
        
        {state.data && (
          <div className="mt-4 p-4 bg-gray-50 rounded">
            <h3 className="font-medium">제출된 데이터:</h3>
            <pre className="mt-2 text-sm">
              {JSON.stringify(state.data, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </form>
  );
}

export default SubmitForm;`,
    explanation: `주요 구현 포인트:

1. 상태 관리
- 명확한 상태 타입 정의 (idle, success, error)
- 제출된 데이터 보존
- 상태별 메시지 관리

2. 폼 유효성 검사
- 클라이언트 측 기본 검증 (required 속성)
- 서버 측 상세 검증 (이메일 형식, 메시지 길이)

3. 사용자 경험
- 입력 필드 비활성화 처리
- 로딩 상태 표시
- 성공/실패 피드백
- 시각적 피드백 (테두리 색상, 알림 메시지)

4. 접근성과 스타일링
- 레이블과 입력 필드 연결
- 상태에 따른 스타일 변경
- 포커스 상태 관리
- 반응형 디자인`,
    hint: 'FormState 인터페이스를 활용하여 다양한 상태를 체계적으로 관리하세요. isPending과 status를 조합하여 UI 상태를 결정할 수 있습니다.',
  },
];
