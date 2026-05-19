import { useState, useCallback } from 'react';

export interface ShortsImage {
  url: string;
  seed: number;
  prompt: string;
}

export function usePollinations() {
  const [images, setImages] = useState<ShortsImage[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateShorts = useCallback(async (basePrompt: string, count: number = 6) => {
    setLoading(true);
    setError(null);
    try {
      const newImages: ShortsImage[] = [];
      for (let i = 0; i < count; i++) {
        const seed = Math.floor(Math.random() * 1000000);
        const prompt = `${basePrompt}, scene ${i + 1} of ${count}, high quality, detailed`;
        const encodedPrompt = encodeURIComponent(prompt);
        const url = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=1080&height=1920&seed=${seed}&nologo=true`;
        newImages.push({ url, seed, prompt });
      }
      setImages(newImages);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  }, []);

  return { images, loading, error, generateShorts };
}
