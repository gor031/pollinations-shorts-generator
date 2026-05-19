import { ShortsImage } from '../hooks/usePollinations';

interface ShortsPlayerProps {
  images: ShortsImage[];
}

export default function ShortsPlayer({ images }: ShortsPlayerProps) {
  if (images.length === 0) {
    return (
      <div className="player-placeholder">
        <p>이미지를 생성하면 여기에 쇼츠가 재생됩니다</p>
      </div>
    );
  }

  return (
    <div className="shorts-player">
      <div className="shorts-slideshow">
        {images.map((img, idx) => (
          <div key={img.seed} className="shorts-slide" style={{ animationDelay: `${idx * 3}s` }}>
            <img src={img.url} alt={`shorts-${idx}`} loading="lazy" />
            <div className="shorts-overlay">
              <span className="shorts-scene">{idx + 1} / {images.length}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="shorts-progress">
        {images.map((img, idx) => (
          <div key={img.seed} className="progress-bar" style={{ animationDelay: `${idx * 3}s` }} />
        ))}
      </div>
    </div>
  );
}
