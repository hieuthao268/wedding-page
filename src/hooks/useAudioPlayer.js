import { useState, useRef, useEffect, useCallback } from 'react';

export function useAudioPlayer(src, defaultVolume = 0.3) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const audioCtxRef = useRef(null);
  const sourceNodeRef = useRef(null);
  const gainNodeRef = useRef(null);
  const initializedRef = useRef(false);
  const audioBufferRef = useRef(null);

  const initAudio = useCallback(async () => {
    if (initializedRef.current) return;
    initializedRef.current = true;

    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const ctx = new AudioContext();
      audioCtxRef.current = ctx;

      const gainNode = ctx.createGain();
      gainNode.gain.value = defaultVolume;
      gainNode.connect(ctx.destination);
      gainNodeRef.current = gainNode;

      const response = await fetch(src);
      const arrayBuffer = await response.arrayBuffer();
      const audioBuffer = await ctx.decodeAudioData(arrayBuffer);
      audioBufferRef.current = audioBuffer;

      const sourceNode = ctx.createBufferSource();
      sourceNode.buffer = audioBuffer;
      sourceNode.loop = true;
      sourceNode.connect(gainNode);
      sourceNodeRef.current = sourceNode;

      // Start in suspended state
      await ctx.suspend();
      sourceNode.start(0);
      
      setIsReady(true);
      setIsPlaying(false);
    } catch (error) {
      console.error("Failed to initialize audio:", error);
      initializedRef.current = false; 
    }
  }, [src, defaultVolume]);

  // Pre-load audio when component mounts
  useEffect(() => {
    initAudio();
  }, [initAudio]);

  const togglePlay = useCallback(async () => {
    const ctx = audioCtxRef.current;
    if (!ctx || !isReady) return;

    if (ctx.state === 'suspended' || !isPlaying) {
      await ctx.resume();
      setIsPlaying(true);
    } else {
      await ctx.suspend();
      setIsPlaying(false);
    }
  }, [isReady, isPlaying]);

  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        if (sourceNodeRef.current) {
          try {
            sourceNodeRef.current.stop();
          } catch (e) {}
          sourceNodeRef.current.disconnect();
        }
        if (gainNodeRef.current) {
          gainNodeRef.current.disconnect();
        }
        audioCtxRef.current.close();
      }
    };
  }, []);

  return { isPlaying, togglePlay, isReady };
}
