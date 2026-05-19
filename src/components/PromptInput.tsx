import { FormEvent, useState } from 'react';

interface PromptInputProps {
  onGenerate: (prompt: string, count: number) => void;
  loading: boolean;
}

export default function PromptInput({ onGenerate, loading }: PromptInputProps) {
  const [prompt, setPrompt] = useState('');
  const [count, setCount] = useState(6);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    onGenerate(prompt.trim(), count);
  };

  return (
    <form onSubmit={handleSubmit} className="prompt-form">
      <div className="input-group">
        <label htmlFor="prompt">쇼츠 주제 / 프롬프트</label>
        <textarea
          id="prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="예: 사이버펑크 도시의 밤, 판타지 숲속 마법사, 미래 우주 정거장..."
          rows={3}
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="count">장면 수 ({count}장)</label>
        <input
          id="count"
          type="range"
          min={3}
          max={10}
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
      </div>
      <button type="submit" disabled={loading || !prompt.trim()} className="generate-btn">
        {loading ? '생성 중...' : '쇼츠 생성하기'}
      </button>
    </form>
  );
}
