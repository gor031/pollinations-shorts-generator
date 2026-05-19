import { usePollinations } from './hooks/usePollinations';
import PromptInput from './components/PromptInput';
import ShortsPlayer from './components/ShortsPlayer';

function App() {
  const { images, loading, error, generateShorts } = usePollinations();

  return (
    <div className="app">
      <header className="app-header">
        <h1>🎬 Pollinations Shorts Generator</h1>
        <p>AI로 생성한 이미지를 연결해 짧은 쇼츠를 만들어보세요</p>
        <a
          href="https://pollinations.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="credit-badge"
        >
          Built with Pollinations
        </a>
      </header>

      <main className="app-main">
        <section className="control-section">
          <PromptInput onGenerate={generateShorts} loading={loading} />
          {error && <div className="error-msg">오류: {error}</div>}
        </section>

        <section className="player-section">
          <ShortsPlayer images={images} />
        </section>

        {images.length > 0 && (
          <section className="gallery-section">
            <h2>생성된 이미지</h2>
            <div className="image-gallery">
              {images.map((img, idx) => (
                <div key={img.seed} className="gallery-item">
                  <img src={img.url} alt={`generated-${idx}`} loading="lazy" />
                  <a href={img.url} target="_blank" rel="noopener noreferrer" download>
                    다운로드
                  </a>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      <footer className="app-footer">
        <p>
          Powered by{' '}
          <a href="https://pollinations.ai" target="_blank" rel="noopener noreferrer">
            pollinations.ai
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
