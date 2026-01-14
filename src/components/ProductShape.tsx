'use client';

import { ProductShape as ShapeType } from '@/types';

interface ProductShapeProps {
  shape: ShapeType;
  size: number;
  showEngraving?: boolean;
  engravingText?: string;
  className?: string;
}

export default function ProductShape({ 
  shape, 
  size, 
  showEngraving = false,
  engravingText = '',
  className = '' 
}: ProductShapeProps) {
  const getShapePath = () => {
    switch (shape) {
      case 'heart':
        return (
          <path
            d="M50 88C50 88 10 60 10 35C10 20 22 10 35 10C42 10 48 14 50 18C52 14 58 10 65 10C78 10 90 20 90 35C90 60 50 88 50 88Z"
            fill="url(#metalGradient)"
            stroke="#9a7b3c"
            strokeWidth="2"
          />
        );
      case 'circle':
        return (
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="url(#metalGradient)"
            stroke="#9a7b3c"
            strokeWidth="2"
          />
        );
      case 'rectangle':
        return (
          <rect
            x="10"
            y="25"
            width="80"
            height="50"
            rx="8"
            fill="url(#metalGradient)"
            stroke="#9a7b3c"
            strokeWidth="2"
          />
        );
      case 'oval':
        return (
          <ellipse
            cx="50"
            cy="50"
            rx="40"
            ry="30"
            fill="url(#metalGradient)"
            stroke="#9a7b3c"
            strokeWidth="2"
          />
        );
      case 'star':
        return (
          <path
            d="M50 10L61 38H90L67 56L78 85L50 67L22 85L33 56L10 38H39L50 10Z"
            fill="url(#metalGradient)"
            stroke="#9a7b3c"
            strokeWidth="2"
          />
        );
      case 'lock':
        return (
          <g>
            {/* Shackle */}
            <path
              d="M30 45 L30 32 C30 20 38 12 50 12 C62 12 70 20 70 32 L70 45"
              fill="none"
              stroke="#9a7b3c"
              strokeWidth="5"
              strokeLinecap="round"
            />
            {/* Body */}
            <rect
              x="20"
              y="42"
              width="60"
              height="46"
              rx="6"
              fill="url(#metalGradient)"
              stroke="#9a7b3c"
              strokeWidth="2"
            />
          </g>
        );
      case 'envelope':
        return (
          <rect
            x="10"
            y="25"
            width="80"
            height="55"
            rx="4"
            fill="url(#metalGradient)"
            stroke="#9a7b3c"
            strokeWidth="2"
          />
        );
      case 'bar':
        return (
          <rect
            x="35"
            y="10"
            width="30"
            height="80"
            rx="6"
            fill="url(#metalGradient)"
            stroke="#9a7b3c"
            strokeWidth="2"
          />
        );
      case 'paw':
        return (
          <g>
            {/* Main pad */}
            <ellipse
              cx="50"
              cy="62"
              rx="22"
              ry="20"
              fill="url(#metalGradient)"
              stroke="#9a7b3c"
              strokeWidth="2"
            />
            {/* Toe pads */}
            <ellipse cx="30" cy="38" rx="9" ry="10" fill="url(#metalGradient)" stroke="#9a7b3c" strokeWidth="2" />
            <ellipse cx="70" cy="38" rx="9" ry="10" fill="url(#metalGradient)" stroke="#9a7b3c" strokeWidth="2" />
            <ellipse cx="42" cy="26" rx="8" ry="9" fill="url(#metalGradient)" stroke="#9a7b3c" strokeWidth="2" />
            <ellipse cx="58" cy="26" rx="8" ry="9" fill="url(#metalGradient)" stroke="#9a7b3c" strokeWidth="2" />
          </g>
        );
      case 'wallet':
        return (
          <g>
            {/* Main wallet body */}
            <rect
              x="15"
              y="15"
              width="70"
              height="70"
              rx="10"
              fill="url(#metalGradient)"
              stroke="#9a7b3c"
              strokeWidth="2"
            />
            {/* Card slot top */}
            <rect
              x="20"
              y="20"
              width="60"
              height="25"
              rx="5"
              fill="#e8d5a3"
              stroke="#9a7b3c"
              strokeWidth="1"
            />
            {/* Card slot notch */}
            <path
              d="M40 85 Q50 78 60 85"
              fill="none"
              stroke="#9a7b3c"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>
        );
      case 'triple-circle':
        return (
          <g>
            {/* Three separate circles representing the triple pendant set */}
            {/* Circle 1 (left) - Più piccolo, allineato in alto */}
            <circle
              cx="20"
              cy="46"
              r="14"
              fill="url(#metalGradient)"
              stroke="#9a7b3c"
              strokeWidth="2"
            />
            {/* Circle 2 (center) - Medio, allineato in alto */}
            <circle
              cx="50"
              cy="48"
              r="16"
              fill="url(#metalGradient)"
              stroke="#9a7b3c"
              strokeWidth="2"
            />
            {/* Circle 3 (right) - Più grande, allineato in alto */}
            <circle
              cx="80"
              cy="50"
              r="18"
              fill="url(#metalGradient)"
              stroke="#9a7b3c"
              strokeWidth="2"
            />
          </g>
        );
      default:
        return (
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="url(#metalGradient)"
            stroke="#9a7b3c"
            strokeWidth="2"
          />
        );
    }
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={`drop-shadow-lg ${className}`}
    >
      <defs>
        <linearGradient id="metalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e8d5a3" />
          <stop offset="30%" stopColor="#c9a962" />
          <stop offset="50%" stopColor="#f5ecd3" />
          <stop offset="70%" stopColor="#c9a962" />
          <stop offset="100%" stopColor="#9a7b3c" />
        </linearGradient>
        <filter id="innerShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur" />
          <feOffset in="blur" dx="1" dy="1" result="offsetBlur" />
          <feComposite in="SourceGraphic" in2="offsetBlur" operator="over" />
        </filter>
      </defs>
      <g filter="url(#innerShadow)">
        {getShapePath()}
      </g>
      {showEngraving && engravingText && (
        <text
          x="50"
          y="55"
          textAnchor="middle"
          fill="#2d2d2d"
          fontSize="12"
          fontFamily="serif"
          className="select-none"
        >
          {engravingText}
        </text>
      )}
    </svg>
  );
}

