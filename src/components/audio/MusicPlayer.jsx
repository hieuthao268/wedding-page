import React from 'react';
import { useAudioPlayer } from '../../hooks/useAudioPlayer';
import { Play, Pause } from 'lucide-react';

export default function MusicPlayer({ src, songTitle, artistName }) {
  const { isPlaying, togglePlay, isReady } = useAudioPlayer(src, 0.3);

  return (
    <div 
      role="region" 
      aria-label="Background music player"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 50,
      }}
    >
      <style>
        {`
          @keyframes equalize {
            0% { height: 4px; }
            50% { height: 14px; }
            100% { height: 4px; }
          }
          .eq-bar {
            width: 3px;
            background-color: #C5A059; /* accent.gold */
            border-radius: 2px;
            transition: all 0.3s ease;
          }
          .eq-playing .eq-bar {
            animation: equalize 1s infinite ease-in-out;
          }
          .eq-paused .eq-bar {
            height: 4px !important;
            background-color: #9CA3AF; /* gray-400 */
            animation: none;
          }
          .pulse-dot {
            width: 6px;
            height: 6px;
            background-color: #C5A059;
            border-radius: 50%;
            animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
          @keyframes pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: .5; transform: scale(1.5); }
          }
        `}
      </style>
      
      <div 
        className="flex items-center gap-[12px] bg-white border border-charcoal/10 rounded-full"
        style={{
          padding: '8px 20px 8px 8px', // Increased padding
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          minWidth: '250px' // Base minimum width
        }}
      >
        <button
          onClick={togglePlay}
          disabled={!isReady}
          aria-label={isPlaying ? "Pause music" : "Play music"}
          className="relative w-[42px] h-[42px] rounded-full flex items-center justify-center bg-charcoal text-white hover:bg-charcoal/90 transition-all focus:outline-none shadow-sm"
        >
          {!isReady ? (
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : isPlaying ? (
            <Pause className="w-5 h-5 fill-current" />
          ) : (
            <Play className="w-5 h-5 fill-current ml-0.5" />
          )}
        </button>

        <div className="flex flex-col justify-center max-w-[250px]"> {/* Increased from 200px (25% increase) */}
          <div className="flex items-center gap-2">
            <span className="text-[13px] font-semibold text-charcoal truncate">
              {songTitle}
            </span>
            
            <div className="flex items-center h-[14px]">
              {!isReady ? (
                <div className="pulse-dot ml-1" />
              ) : (
                <div className={`flex items-end gap-[2px] h-[14px] ${!isPlaying ? 'eq-paused' : 'eq-playing'}`}>
                  <div className="eq-bar" style={{ animationDelay: '0ms' }} />
                  <div className="eq-bar" style={{ animationDelay: '100ms' }} />
                  <div className="eq-bar" style={{ animationDelay: '200ms' }} />
                  <div className="eq-bar" style={{ animationDelay: '150ms' }} />
                  <div className="eq-bar" style={{ animationDelay: '50ms' }} />
                </div>
              )}
            </div>
          </div>
          <span className="text-[11px] text-charcoal/60 truncate">
            {artistName}
          </span>
        </div>
      </div>
    </div>
  );
}
