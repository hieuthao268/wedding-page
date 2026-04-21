import React from 'react';
import { useAudioPlayer } from '../../hooks/useAudioPlayer';

export default function MusicPlayer({ src, songTitle, artistName }) {
  const { isMuted, toggleMute, isReady } = useAudioPlayer(src, 0.3);

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
          .eq-muted .eq-bar {
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
        className="flex items-center gap-[10px] bg-white border border-charcoal/10 rounded-full"
        style={{
          padding: '6px 16px 6px 6px',
          boxShadow: '0 2px 12px rgba(0,0,0,0.10)',
        }}
      >
        <button
          onClick={toggleMute}
          aria-pressed={!isMuted}
          aria-label={isMuted ? "Unmute music" : "Mute music"}
          title={!isReady ? "Click to play music" : (isMuted ? "Unmute music" : "Mute music")}
          className="relative w-[36px] h-[36px] rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors focus:outline-none"
        >
          {/* Speaker with waves (Playing) */}
          <svg 
            className={`absolute w-4 h-4 text-charcoal transition-opacity duration-200 ${(!isMuted && isReady) ? 'opacity-100' : 'opacity-0'}`} 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
          </svg>
          
          {/* Speaker with X (Muted or Not Ready) */}
          <svg 
            className={`absolute w-4 h-4 text-charcoal transition-opacity duration-200 ${(isMuted || !isReady) ? 'opacity-100' : 'opacity-0'}`} 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <line x1="23" y1="9" x2="17" y2="15"></line>
            <line x1="17" y1="9" x2="23" y2="15"></line>
          </svg>
        </button>

        <div className="flex flex-col justify-center max-w-[200px]">
          <div className="flex items-center gap-2">
            <span className="text-[13px] font-medium text-charcoal truncate">
              {songTitle}
            </span>
            
            <div className="flex items-center h-[14px]">
              {!isReady ? (
                <div className="pulse-dot ml-1" />
              ) : (
                <div className={`flex items-end gap-[2px] h-[14px] ${isMuted ? 'eq-muted' : 'eq-playing'}`}>
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