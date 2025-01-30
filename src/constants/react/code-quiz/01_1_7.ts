export const codeQuizzes = [
  {
    id: 1,
    title: '폼 컨트롤 접근성 구현하기',
    description:
      'useId를 사용하여 라벨과 입력 필드를 연결하고, 오류 메시지를 입력 필드와 연관짓는 접근성 있는 폼을 구현하세요.',
    code: `import { useState, useId } from 'react';

interface SignupFormProps {
  onSubmit: (email: string, password: string) => void;
}

function SignupForm({ onSubmit }: SignupFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  
  // TODO: useId를 사용하여 고유한 ID 생성
  // TODO: label, input, error message 연결
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.length < 8) {
      setError('비밀번호는 8자 이상이어야 합니다');
      return;
    }
    onSubmit(email, password);
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        {/* TODO: 이메일 입력 필드 구현 */}
      </div>
      
      <div>
        {/* TODO: 비밀번호 입력 필드 구현 */}
      </div>
      
      {error && (
        {/* TODO: 오류 메시지 구현 */}
      )}
      
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
        가입하기
      </button>
    </form>
  );
}

export default SignupForm;`,
    answer: `올바른 구현은 다음과 같습니다:

\`\`\`typescript
function SignupForm({ onSubmit }: SignupFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  
  // 하나의 useId로 여러 관련 요소의 ID 생성
  const id = useId();
  const emailId = \`\${id}-email\`;
  const passwordId = \`\${id}-password\`;
  const errorId = \`\${id}-error\`;
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.length < 8) {
      setError('비밀번호는 8자 이상이어야 합니다');
      return;
    }
    onSubmit(email, password);
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label 
          htmlFor={emailId}
          className="block text-sm font-medium mb-1"
        >
          이메일
        </label>
        <input
          id={emailId}
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      
      <div>
        <label 
          htmlFor={passwordId}
          className="block text-sm font-medium mb-1"
        >
          비밀번호
        </label>
        <input
          id={passwordId}
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          aria-describedby={error ? errorId : undefined}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      
      {error && (
        <div 
          id={errorId}
          role="alert"
          className="text-red-500 text-sm"
        >
          {error}
        </div>
      )}
      
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
        가입하기
      </button>
    </form>
  );
}
\`\`\`

주요 포인트:
1. 하나의 useId로 여러 관련 요소의 ID 생성
2. label과 input 연결을 위해 htmlFor/id 사용
3. 오류 메시지 연결을 위해 aria-describedby 사용
4. role="alert"로 오류 메시지의 의미 전달
5. 오류가 있을 때만 aria-describedby 설정`,
    hint: '하나의 useId를 사용하여 접두사를 만들고, 이를 기반으로 여러 관련 요소의 ID를 생성하세요. 또한 aria-describedby는 오류가 있을 때만 설정해야 합니다.',
  },
  {
    id: 2,
    title: '탭 패널 접근성 구현하기',
    description:
      'useId를 사용하여 접근성 있는 탭 컴포넌트를 구현하세요. 탭과 패널을 올바르게 연결하고, ARIA 속성을 적절히 사용해야 합니다.',
    code: `import { useState, useId } from 'react';

interface Tab {
  title: string;
  content: string;
}

interface TabsProps {
  tabs: Tab[];
  defaultActiveTab?: number;
}

function AccessibleTabs({ tabs, defaultActiveTab = 0 }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);
  
  // TODO: useId를 사용하여 탭과 패널을 연결하는 ID 생성
  // TODO: 적절한 ARIA 속성 추가
  
  return (
    <div>
      <div role="tablist">
        {/* TODO: 탭 버튼 구현 */}
      </div>
      
      {/* TODO: 탭 패널 구현 */}
    </div>
  );
}

export default AccessibleTabs;`,
    answer: `올바른 구현은 다음과 같습니다:

\`\`\`typescript
function AccessibleTabs({ tabs, defaultActiveTab = 0 }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);
  const baseId = useId();
  
  return (
    <div>
      <div 
        role="tablist" 
        className="flex border-b"
        aria-label="탭 메뉴"
      >
        {tabs.map((tab, index) => {
          const tabId = \`\${baseId}-tab-\${index}\`;
          const panelId = \`\${baseId}-panel-\${index}\`;
          const isActive = activeTab === index;
          
          return (
            <button
              key={index}
              id={tabId}
              role="tab"
              aria-selected={isActive}
              aria-controls={panelId}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveTab(index)}
              className={\`px-4 py-2 \${
                isActive 
                  ? 'border-b-2 border-blue-500 text-blue-500' 
                  : 'text-gray-500'
              }\`}
              onKeyDown={e => {
                const tabCount = tabs.length;
                let nextTab = activeTab;
                
                switch (e.key) {
                  case 'ArrowLeft':
                    nextTab = (activeTab - 1 + tabCount) % tabCount;
                    break;
                  case 'ArrowRight':
                    nextTab = (activeTab + 1) % tabCount;
                    break;
                  case 'Home':
                    nextTab = 0;
                    break;
                  case 'End':
                    nextTab = tabCount - 1;
                    break;
                  default:
                    return;
                }
                
                setActiveTab(nextTab);
              }}
            >
              {tab.title}
            </button>
          );
        })}
      </div>
      
      {tabs.map((tab, index) => {
        const tabId = \`\${baseId}-tab-\${index}\`;
        const panelId = \`\${baseId}-panel-\${index}\`;
        const isActive = activeTab === index;
        
        return (
          <div
            key={index}
            id={panelId}
            role="tabpanel"
            aria-labelledby={tabId}
            hidden={!isActive}
            tabIndex={0}
            className="p-4"
          >
            {tab.content}
          </div>
        );
      })}
    </div>
  );
}
\`\`\`

주요 포인트:
1. useId로 생성한 baseId를 기반으로 탭과 패널 ID 생성
2. 적절한 ARIA 속성 사용 (role, aria-selected, aria-controls, aria-labelledby)
3. 키보드 탐색 지원 (방향키, Home, End)
4. 탭 인덱스(tabIndex) 관리로 키보드 포커스 제어
5. hidden 속성으로 비활성 패널 숨김`,
    hint: 'WAI-ARIA 탭 패턴을 참고하여 구현하세요. 탭과 패널의 연결, 키보드 탐색, 포커스 관리가 중요합니다.',
  },
  {
    id: 3,
    title: '툴팁 구현하기',
    description:
      'useId를 사용하여 접근성 있는 툴팁 컴포넌트를 구현하세요. 툴팁은 트리거 요소와 적절히 연결되어야 하며, 키보드 사용자를 고려해야 합니다.',
    code: `import { useState, useId } from 'react';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
}

function Tooltip({ content, children }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  
  // TODO: useId를 사용하여 툴팁과 트리거 요소 연결
  // TODO: 적절한 ARIA 속성 추가
  // TODO: 키보드 이벤트 처리
  
  return (
    <div className="relative inline-block">
      {/* TODO: 트리거 요소 구현 */}
      
      {/* TODO: 툴팁 콘텐츠 구현 */}
    </div>
  );
}

export default Tooltip;`,
    answer: `올바른 구현은 다음과 같습니다:

\`\`\`typescript
function Tooltip({ content, children }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const id = useId();
  const tooltipId = \`\${id}-tooltip\`;
  
  return (
    <div className="relative inline-block">
      <div
        role="tooltip-trigger"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onFocus={() => setIsVisible(true)}
        onBlur={() => setIsVisible(false)}
        aria-describedby={isVisible ? tooltipId : undefined}
        tabIndex={0}
        onKeyDown={e => {
          if (e.key === 'Escape' && isVisible) {
            setIsVisible(false);
          }
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsVisible(v => !v);
          }
        }}
        className="inline-block"
      >
        {children}
      </div>
      
      {isVisible && (
        <div
          id={tooltipId}
          role="tooltip"
          className="absolute z-10 px-2 py-1 text-sm text-white bg-black rounded
                     bottom-full left-1/2 transform -translate-x-1/2 mb-1"
        >
          {content}
          <div className="absolute border-4 border-transparent border-t-black
                        bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full" />
        </div>
      )}
    </div>
  );
}

// 사용 예시
function App() {
  return (
    <div className="p-8">
      <Tooltip content="자세한 정보를 보여주는 툴팁입니다">
        <button className="px-4 py-2 bg-blue-500 text-white rounded">
          도움말
        </button>
      </Tooltip>
    </div>
  );
}
\`\`\`

주요 포인트:
1. useId로 고유한 툴팁 ID 생성
2. aria-describedby로 툴팁과 트리거 요소 연결
3. 마우스와 키보드 이벤트 모두 처리
4. 적절한 키보드 인터랙션 지원 (Enter, Space, Escape)
5. 포커스 가능한 트리거 (tabIndex)
6. 툴팁이 표시될 때만 aria-describedby 설정`,
    hint: '키보드 사용자를 위해 Enter/Space로 툴팁을 토글하고 Escape로 닫을 수 있게 만드세요. 또한 툴팁이 표시될 때만 aria-describedby를 설정하여 스크린 리더가 적절히 툴팁 내용을 읽도록 하세요.',
  },
];
