import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

export default function Logo({ className = '', size = 'medium' }: LogoProps) {
  // Define sizes
  const sizes = {
    small: { width: 180, height: 40 },
    medium: { width: 220, height: 50 },
    large: { width: 280, height: 64 },
  };

  const { width, height } = sizes[size];

  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 280 64" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background shape */}
      <rect width="64" height="64" rx="12" fill="#0A0F1C" />
      
      {/* Abstract geometric emblem */}
      <path d="M32 12C20.954 12 12 20.954 12 32C12 43.046 20.954 52 32 52C43.046 52 52 43.046 52 32C52 20.954 43.046 12 32 12ZM32 18C39.732 18 46 24.268 46 32C46 39.732 39.732 46 32 46C24.268 46 18 39.732 18 32C18 24.268 24.268 18 32 18Z" fill="url(#paint0_linear)" />
      <path d="M32 24C27.582 24 24 27.582 24 32C24 36.418 27.582 40 32 40C36.418 40 40 36.418 40 32C40 27.582 36.418 24 32 24ZM32 28C34.21 28 36 29.79 36 32C36 34.21 34.21 36 32 36C29.79 36 28 34.21 28 32C28 29.79 29.79 28 32 28Z" fill="white" />
      
      {/* AI Workforce */}
      <path d="M76.5 23L79.5 32H80.5L83.5 23H86L82 35H78L74 23H76.5Z" fill="#2F80ED" />
      <path d="M87 23H89V35H87V23Z" fill="#2F80ED" />
      
      {/* Workforce */}
      <path d="M96 23L102 35H99.5L98 32H92L90.5 35H88L94 23H96ZM97 30L95 26L93 30H97Z" fill="#2F80ED" />
      <path d="M103 23H105V33H111V35H103V23Z" fill="#2F80ED" />
      <path d="M119 23V25H114V28H118V30H114V33H119V35H112V23H119Z" fill="#2F80ED" />
      <path d="M126 23H128V35H126L121 27V35H119V23H121L126 31V23Z" fill="#2F80ED" />
      <path d="M135 23V25H130V28H134V30H130V33H135V35H128V23H135Z" fill="#2F80ED" />
      <path d="M137 23H139V33H145V35H137V23Z" fill="#2F80ED" />
      <path d="M146 23H148V35H146V23Z" fill="#2F80ED" />
      <path d="M149 23H151V33H157V35H149V23Z" fill="#2F80ED" />
      <path d="M158 23H165V25H160V28H164V30H160V35H158V23Z" fill="#2F80ED" />
      
      {/* Academy */}
      <path d="M76 43L82 55H79.5L78 52H72L70.5 55H68L74 43H76ZM77 50L75 46L73 50H77Z" fill="#9B51E0" />
      <path d="M90 48C90 49.3333 89.6667 50.5 89 51.5C88.3333 52.5 87.4167 53.25 86.25 53.75C85.0833 54.25 83.75 54.5 82.25 54.5C80.75 54.5 79.4167 54.25 78.25 53.75C77.0833 53.25 76.1667 52.5 75.5 51.5C74.8333 50.5 74.5 49.3333 74.5 48C74.5 46.6667 74.8333 45.5 75.5 44.5C76.1667 43.5 77.0833 42.75 78.25 42.25C79.4167 41.75 80.75 41.5 82.25 41.5C83.75 41.5 85.0833 41.75 86.25 42.25C87.4167 42.75 88.3333 43.5 89 44.5C89.6667 45.5 90 46.6667 90 48ZM87.5 48C87.5 47.1667 87.3333 46.4583 87 45.875C86.6667 45.2917 86.1667 44.8333 85.5 44.5C84.8333 44.1667 84 44 83 44C82 44 81.1667 44.1667 80.5 44.5C79.8333 44.8333 79.3333 45.2917 79 45.875C78.6667 46.4583 78.5 47.1667 78.5 48C78.5 48.8333 78.6667 49.5417 79 50.125C79.3333 50.7083 79.8333 51.1667 80.5 51.5C81.1667 51.8333 82 52 83 52C84 52 84.8333 51.8333 85.5 51.5C86.1667 51.1667 86.6667 50.7083 87 50.125C87.3333 49.5417 87.5 48.8333 87.5 48Z" fill="#9B51E0" />
      <path d="M91.5 43H93.5V53H99.5V55H91.5V43Z" fill="#9B51E0" />
      <path d="M100.5 43H102.5V55H100.5V43Z" fill="#9B51E0" />
      <path d="M110 43H112V55H110L105 47V55H103V43H105L110 51V43Z" fill="#9B51E0" />
      <path d="M113.5 43H115.5V53H121.5V55H113.5V43Z" fill="#9B51E0" />
      <path d="M122.5 43H124.5V55H122.5V43Z" fill="#9B51E0" />
      
      {/* Gradient definitions */}
      <defs>
        <linearGradient id="paint0_linear" x1="12" y1="12" x2="52" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2F80ED" />
          <stop offset="1" stopColor="#9B51E0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
