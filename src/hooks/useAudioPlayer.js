import { useState, useRef, useEffect, useCallback } from 'react';

export function useAudioPlayer(src, defaultVolume = 0.3) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio();
    audio.src = src;
    audio.loop = true;
    audio.volume = defaultVolume;
    audio.preload = 'auto';
    
    const handleCanPlay = () => {
      setIsReady(true);
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleError = (e) => {
      console.error("Audio error:", e);
      // Try to recover or at least stop loading state
      setIsReady(true); 
    };

    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('canplaythrough', handleCanPlay);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('error', handleError);

    audioRef.current = audio;
    
    // Start loading/downloading
    audio.load();

    return () => {
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('canplaythrough', handleCanPlay);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('error', handleError);
      audio.pause();
      audio.src = '';
    };
  }, [src, defaultVolume]);

  const togglePlay = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (audio.paused) {
        // On iOS, play() must be called in a user gesture context
        await audio.play();
      } else {
        audio.pause();
      }
    } catch (err) {
      console.error("Playback interaction failed:", err);
    }
  }, []);

  return { isPlaying, togglePlay, isReady };
}
