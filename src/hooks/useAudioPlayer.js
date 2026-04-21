import { useState, useRef, useEffect, useCallback } from 'react';

export function useAudioPlayer(src, defaultVolume = 0.3) {
  const [isMuted, setIsMuted] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const audioCtxRef = useRef(null);
  const sourceNodeRef = useRef(null);
  const gainNodeRef = useRef(null);
  const initializedRef = useRef(false);

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

      const sourceNode = ctx.createBufferSource();
      sourceNode.buffer = audioBuffer;
      sourceNode.loop = true;
      sourceNode.connect(gainNode);
      sourceNodeRef.current = sourceNode;

      sourceNode.start(0);
      setIsReady(true);
      // It starts unmuted (playing) upon first interaction
      setIsMuted(false); 
    } catch (error) {
      console.error("Failed to initialize audio:", error);
      initializedRef.current = false; // Allow retry on failure
    }
  }, [src, defaultVolume]);

  const toggleMute = useCallback(async () => {
    if (!initializedRef.current) {
      await initAudio();
      return; // The first click initializes and starts playback (unmuted)
    }

    const ctx = audioCtxRef.current;
    const gainNode = gainNodeRef.current;

    if (!ctx || !gainNode) return;

    // If context is suspended (some browsers do this even after creation), resume it
    if (ctx.state === 'suspended') {
      await ctx.resume();
    }

    if (isMuted) {
      // Unmute: Ramp volume back to default
      gainNode.gain.linearRampToValueAtTime(defaultVolume, ctx.currentTime + 0.6);
      setIsMuted(false);
    } else {
      // Mute: Ramp volume down to 0
      gainNode.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.6);
      setIsMuted(true);
    }
  }, [initAudio, isMuted, defaultVolume]);

  useEffect(() => {
    return () => {
      // Cleanup on unmount
      if (audioCtxRef.current) {
        if (sourceNodeRef.current) {
          try {
            sourceNodeRef.current.stop();
          } catch (e) {
            // Ignore errors if it hasn't started yet
          }
          sourceNodeRef.current.disconnect();
        }
        if (gainNodeRef.current) {
          gainNodeRef.current.disconnect();
        }
        audioCtxRef.current.close();
      }
    };
  }, []);

  return { isMuted, toggleMute, isReady };
}
