'use client';

// SVG symbols suitable for laser engraving - simple line art / silhouettes
export const engravingSymbols = {
  // AMORE
  heart: (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
  ),
  heartOutline: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
  ),
  infinity: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18.178 8c5.096 0 5.096 8 0 8-5.095 0-7.133-8-12.739-8-4.585 0-4.585 8 0 8 5.606 0 7.644-8 12.74-8z"/>
    </svg>
  ),
  doubleHeart: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3z" opacity="0.5"/>
      <path d="M12 17.35l-1.45-1.32C6.4 12.36 4 10.28 4 7.5 4 5.42 5.42 4 7.5 4c1.74 0 3.41.81 4.5 2.09C13.09 4.81 14.76 4 16.5 4 18.58 4 20 5.42 20 7.5c0 2.78-2.4 4.86-6.55 8.54L12 17.35z"/>
    </svg>
  ),
  kiss: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M8.5 14.5L5 18l3.5 3.5M15.5 14.5L19 18l-3.5 3.5M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l2-2 2 2M7 10.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S9.33 12 8.5 12 7 11.33 7 10.5zm8 0c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5z"/>
    </svg>
  ),

  // NATURA
  star: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  ),
  starOutline: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  ),
  moon: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"/>
    </svg>
  ),
  sun: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="5"/>
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
    </svg>
  ),
  flower: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="3"/>
      <path d="M12 2C9.24 2 7 4.24 7 7c0 1.3.5 2.5 1.3 3.4C7.5 11.3 7 12.6 7 14c0 2.76 2.24 5 5 5s5-2.24 5-5c0-1.4-.5-2.7-1.3-3.6.8-.9 1.3-2.1 1.3-3.4 0-2.76-2.24-5-5-5z"/>
      <ellipse cx="12" cy="7" rx="2" ry="3"/>
      <ellipse cx="7.5" cy="10" rx="2" ry="3" transform="rotate(-60 7.5 10)"/>
      <ellipse cx="16.5" cy="10" rx="2" ry="3" transform="rotate(60 16.5 10)"/>
      <ellipse cx="7.5" cy="14" rx="2" ry="3" transform="rotate(-120 7.5 14)"/>
      <ellipse cx="16.5" cy="14" rx="2" ry="3" transform="rotate(120 16.5 14)"/>
    </svg>
  ),
  rose: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 22c-4.97 0-9-4.03-9-9 0-4.42 3.17-8.1 7.36-8.86C11.14 2.79 12 1.5 12 1.5s.86 1.29 1.64 2.64C17.83 4.9 21 8.58 21 13c0 4.97-4.03 9-9 9z"/>
      <path d="M12 5c-2.5 0-4.5 2-4.5 4.5S9.5 14 12 14s4.5-2 4.5-4.5S14.5 5 12 5z" fill="none" stroke="currentColor" strokeWidth="1"/>
    </svg>
  ),
  leaf: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"/>
    </svg>
  ),
  tree: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L4 12h3v8h10v-8h3L12 2zm0 3.84L16.17 11H15v7h-2v-4h-2v4H9v-7H7.83L12 5.84z"/>
    </svg>
  ),
  mountain: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z"/>
    </svg>
  ),
  wave: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M2 12c1.5-2 3-3 4.5-3s3 2 4.5 3 3 3 4.5 3 3-1 4.5-3"/>
      <path d="M2 17c1.5-2 3-3 4.5-3s3 2 4.5 3 3 3 4.5 3 3-1 4.5-3"/>
    </svg>
  ),
  butterfly: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 22c-.55 0-1-.45-1-1v-9C8.39 12 6 9.5 6 6.5S8.39 1 11 1h2c2.61 0 5 2.5 5 5.5S15.61 12 13 12v9c0 .55-.45 1-1 1zm-1-11c1.1 0 3-1.12 3-4.5S12.1 2 11 2s-3 1.12-3 4.5S9.9 11 11 11zm2 0c1.1 0 3-1.12 3-4.5S14.1 2 13 2v9z"/>
    </svg>
  ),

  // ANIMALI
  pawPrint: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <circle cx="4.5" cy="9.5" r="2.5"/>
      <circle cx="9" cy="5.5" r="2.5"/>
      <circle cx="15" cy="5.5" r="2.5"/>
      <circle cx="19.5" cy="9.5" r="2.5"/>
      <path d="M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z"/>
    </svg>
  ),
  dog: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 4c-1 0-2 .5-2.5 1L14 6H9.5L8 4.5C7.5 4 6.5 4 6 4c-1.5 0-3 1-3 3 0 .5.5 2 1 3v8c0 1.5 1 3 2.5 3h11c1.5 0 2.5-1.5 2.5-3v-8c.5-1 1-2.5 1-3 0-2-1.5-3-3-3zM8 17c-.5 0-1-.5-1-1s.5-1 1-1 1 .5 1 1-.5 1-1 1zm8 0c-.5 0-1-.5-1-1s.5-1 1-1 1 .5 1 1-.5 1-1 1zm2-6H6v-1h12v1z"/>
    </svg>
  ),
  cat: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM4 2l2.5 5H7v4c0 2.76 2.24 5 5 5s5-2.24 5-5V7h.5L20 2c-1 0-2.5.5-3 2h-1c0-1 .5-2 1-2.5-.5.5-1 2-1 2.5h-8c0-.5-.5-2-1-2.5.5.5 1 1.5 1 2.5h-1C6.5 2.5 5 2 4 2z"/>
    </svg>
  ),
  bird: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M21.41 8.64c-.15-.55-.58-1-1.16-1.14-2.42-.57-4.35.94-5.45 2.07-.35-.81-.95-1.5-1.8-1.93V5.5c0-1.38-1.12-2.5-2.5-2.5S8 4.12 8 5.5v2.14C6.95 7.95 6.35 8.64 6 9.45c-1.1-1.13-3.03-2.64-5.45-2.07-.58.14-1.01.59-1.16 1.14-.15.54.01 1.12.44 1.5 2.08 1.87 4.17 2.31 5.17 2.31.04 0 .08 0 .12-.01-.28.71-.42 1.48-.42 2.28C4.7 19.93 9.28 22 12 22s7.3-2.07 7.3-7.4c0-.8-.14-1.57-.42-2.28.04.01.08.01.12.01 1 0 3.09-.44 5.17-2.31.43-.38.59-.96.44-1.5z"/>
    </svg>
  ),
  dove: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3C7.41 3 4 5.34 4 9c0 2.5 1.67 4.73 4 5.95V17h1v-2h2v2h2v-2h2v2h1v-2.05c2.33-1.22 4-3.45 4-5.95 0-3.66-3.41-6-8-6zm-3 7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
      <path d="M2 8l3 3v4l-3 3c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1z"/>
    </svg>
  ),
  lion: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="4"/>
      <path d="M12 2C9.24 2 7 4.24 7 7c0 .5.08 1 .21 1.46C5.32 9.27 4 11.01 4 13c0 2.76 2.24 5 5 5h.05A5.99 5.99 0 0012 20a5.99 5.99 0 002.95-2H15c2.76 0 5-2.24 5-5 0-1.99-1.32-3.73-3.21-4.54.13-.46.21-.96.21-1.46 0-2.76-2.24-5-5-5z"/>
      <circle cx="9" cy="11" r="1"/>
      <circle cx="15" cy="11" r="1"/>
    </svg>
  ),
  horse: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M21.5 9.5c-.28 0-.55.04-.81.1-.23-1.13-1.01-2.07-2.02-2.57L20.5 3l-2.5 2-1.5-2-1.5 2-2.5-2 1.83 4.03c-1.01.5-1.79 1.44-2.02 2.57-.26-.06-.53-.1-.81-.1C8.5 9.5 6 12 6 15v4h3v-1h6v1h3v-4c0-3-2.5-5.5-5.5-5.5-.78 0-1.53.17-2.21.46.46-.6 1.17-1 1.98-1.15L12 9l.27.31c.81.15 1.52.55 1.98 1.15-.68-.29-1.43-.46-2.21-.46-.55 0-1.07.08-1.57.22C10.18 9.48 9.89 9 9.5 9 9 9 8.5 9.5 8.5 10s.5 1 1 1c.39 0 .68-.48.88-.88.29.59.52 1.23.62 1.91-.78.37-1.43.97-1.87 1.72L6.5 12l1.22 2.44c-.14.5-.22 1.02-.22 1.56H6v-1c0-2.76 2.24-5 5-5 .38 0 .74.05 1.09.13-.27.24-.52.51-.74.81-.3.39-.54.82-.72 1.27-.27-.13-.56-.21-.88-.21-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5c.55 0 1.03-.3 1.29-.74.12.44.29.86.5 1.25L12 16l.46-.78c.21-.39.38-.81.5-1.25.26.44.74.74 1.29.74.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5c-.32 0-.61.08-.88.21-.18-.45-.42-.88-.72-1.27-.22-.3-.47-.57-.74-.81.35-.08.71-.13 1.09-.13 2.76 0 5 2.24 5 5v1h-1.5c0-.54-.08-1.06-.22-1.56L17.5 12l-2.63 1.75c-.44-.75-1.09-1.35-1.87-1.72.1-.68.33-1.32.62-1.91.2.4.49.88.88.88.5 0 1-.5 1-1s-.5-1-1-1c-.39 0-.68.48-.88.88-.5-.14-1.02-.22-1.57-.22-.78 0-1.53.17-2.21.46.46-.6 1.17-1 1.98-1.15L12 9l-.27-.31c-.81-.15-1.52-.55-1.98-1.15.68.29 1.43.46 2.21.46z"/>
    </svg>
  ),
  dolphin: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 8c-1.1 0-2 .9-2 2 0-.55-.22-1.05-.59-1.41C18.05 7.22 15.66 6 13 6c-4.42 0-8 2.69-8 6 0 2.87 2.28 5.29 5.41 5.87L10 21h4l-.41-3.13C16.72 17.29 19 14.87 19 12c0-.35-.03-.69-.08-1.02.05.01.1.02.16.02.84 0 1.54-.55 1.79-1.3.53-.11 1.03-.38 1.41-.76.56-.56.72-1.38.72-1.94C23 6.9 22.1 6 21 6c-.55 0-1.05.22-1.41.59-.38-.38-.88-.59-1.59-.59V5c0-.55-.45-1-1-1s-1 .45-1 1v1.5c-.83.36-1.58.85-2.22 1.45C14.28 7.36 14.64 7 15 7c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1s-1 .45-1 1v.35c-1.94.31-3.67 1.22-4.94 2.55C9.61 7.32 10.27 7 11 7c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1s-1 .45-1 1v1.05C6.72 6.06 4 8.76 4 12c0 4.42 4.03 8 9 8 .46 0 .91-.03 1.35-.09L14 22h-4l.23-1.77C6.6 19.39 4 16.03 4 12c0-2.67 1.22-5.05 3.17-6.59C5.84 6.2 5 7.5 5 9c0 .5.1.98.27 1.43.63-1.51 1.67-2.79 2.97-3.74C6.34 7.43 5 9.56 5 12c0 3.31 2.69 6 6 6 .35 0 .69-.03 1.02-.08-.01.05-.02.1-.02.16 0 .92.66 1.68 1.52 1.86L13 22h-2l.59-4.53C8.28 16.72 6 13.97 6 10.5c0-1.24.37-2.39 1-3.36C5.78 8.25 5 9.79 5 11.5c0 3.04 2.46 5.5 5.5 5.5.38 0 .75-.04 1.11-.11L11 20h2l.61-4.7c.26.04.53.07.81.07C17.59 15.37 20 12.96 20 10c0-.55-.09-1.08-.26-1.58.17.52.26 1.07.26 1.58 0 .92-.66 1.68-1.52 1.86L19 14h-2l-.59-4.53c.54-.14 1.05-.35 1.52-.62-.12.38-.19.78-.19 1.2 0 1.76 1.12 3.25 2.68 3.8-.02-.11-.04-.22-.04-.34 0-.74.4-1.38 1-1.73-.15-.6-.24-1.22-.24-1.86 0-4.42 3.58-8 8-8z"/>
    </svg>
  ),

  // SIMBOLI
  crown: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5z"/>
      <path d="M19 19H5v-2h14v2z"/>
    </svg>
  ),
  diamond: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3H5L2 9l10 12L22 9l-3-6zM9.62 8l1.5-3h1.76l1.5 3H9.62zM11 10v6.68L5.44 10H11zm2 0h5.56L13 16.68V10zm6.26-2h-2.65l-1.5-3h2.65l1.5 3zM6.24 5h2.65l-1.5 3H4.74l1.5-3z"/>
    </svg>
  ),
  anchor: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C10.34 2 9 3.34 9 5c0 1.28.8 2.37 1.93 2.82L11 9H8v2h3v8.92c-2.78-.47-5-2.66-5.42-5.42H7v-2H4v2h1.08c.47 3.63 3.21 6.55 6.92 6.92V11h3V9h-3l.07-1.18C13.2 7.37 14 6.28 14 5c0-1.66-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
    </svg>
  ),
  arrow: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/>
    </svg>
  ),
  arrowHeart: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M2 9.5L7 5v3h6.5c.55 0 1-.45 1-1V4l5 4.5-5 4.5V9.5h-1c0 2.21-1.79 4-4 4-.74 0-1.43-.2-2.02-.55-.03.04-.06.08-.08.12-.63 1.05-1.65 2.17-3.2 3.4L2 18l1.7-1.37c1.2-.95 1.95-1.75 2.4-2.5.05-.09.1-.17.15-.26-.78-.73-1.35-1.66-1.6-2.73L4 11H2V9.5z"/>
      <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3z"/>
    </svg>
  ),
  key: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
    </svg>
  ),
  lock: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
    </svg>
  ),
  lockHeart: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm3 13l-1-1c-1.66-1.51-3-2.75-3-4 0-1.1.9-2 2-2 .62 0 1.21.29 1.59.75L12 13l.41-.25c.38-.46.97-.75 1.59-.75 1.1 0 2 .9 2 2 0 1.25-1.34 2.49-3 4l-1 1z"/>
    </svg>
  ),
  cross: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M11 2v7H4v4h7v9h2v-9h7v-4h-7V2h-2z"/>
    </svg>
  ),
  peace: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"/>
      <line x1="12" y1="2" x2="12" y2="22"/>
      <line x1="12" y1="12" x2="5.5" y2="18.5"/>
      <line x1="12" y1="12" x2="18.5" y2="18.5"/>
    </svg>
  ),
  yinYang: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
      <path d="M12 4c-2.21 0-4 3.58-4 8s1.79 8 4 8c4.41 0 8-3.59 8-8s-3.59-8-8-8z"/>
      <circle cx="12" cy="8" r="1.5" fill="white"/>
      <circle cx="12" cy="16" r="1.5"/>
    </svg>
  ),
  om: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-.34.04-.68.07-1.02.07-.34 0-.68-.03-1.02-.07-.33-.04-.66-.1-.98-.18V16.5c0-.83.67-1.5 1.5-1.5h1c.83 0 1.5.67 1.5 1.5v3.25c-.32.08-.65.14-.98.18zM16 14h-2v-2h2v2zm0-4h-2V8h2v2zm-4 4h-2v-2h2v2zm0-4h-2V8h2v2zm-4 4H6v-2h2v2zm0-4H6V8h2v2z"/>
    </svg>
  ),

  // MUSICA
  musicNote: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
    </svg>
  ),
  musicNotes: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M21 3v12.5c0 1.38-1.12 2.5-2.5 2.5S16 16.88 16 15.5s1.12-2.5 2.5-2.5c.57 0 1.08.19 1.5.51V5h-7v10.5c0 1.38-1.12 2.5-2.5 2.5S8 16.88 8 15.5s1.12-2.5 2.5-2.5c.57 0 1.08.19 1.5.51V3h9z"/>
    </svg>
  ),
  guitar: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 3H22v2h-1.59l-3.7 3.7c-.09.09-.2.17-.31.24.1.46.16.95.16 1.45 0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5c.5 0 .99.06 1.45.16.07-.11.15-.22.24-.31L16.95 1.54c.39-.39 1.02-.39 1.41 0L19.59 2.77c.39.39.39 1.02 0 1.41L19.59 3zM11.5 8C9.57 8 8 9.57 8 11.5S9.57 15 11.5 15 15 13.43 15 11.5 13.43 8 11.5 8zm0 5c-.83 0-1.5-.67-1.5-1.5S10.67 10 11.5 10s1.5.67 1.5 1.5S12.33 13 11.5 13z"/>
      <path d="M5.85 14.27l-2.12 2.12c-1.17 1.17-1.17 3.07 0 4.24 1.17 1.17 3.07 1.17 4.24 0l2.12-2.12c-1.64-.41-2.98-1.44-3.78-2.77l-.46.53z"/>
    </svg>
  ),

  // SPORT
  soccer: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93V17h-2v2.93c-3.94-.49-7-3.85-7-7.93h2.93l.51-1.42L5.5 9.5 3.7 11.3c.91-3.38 3.62-6.02 7.06-6.84L12 5.54l1.24-1.08c3.44.82 6.15 3.46 7.06 6.84l-1.8-1.8-1.94 1.08.51 1.42H20c0 4.08-3.06 7.44-7 7.93z"/>
      <path d="M12 8L9.5 13l2.5 2 2.5-2L12 8z"/>
    </svg>
  ),
  basketball: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 2v20M2 12h20M4.93 4.93c4.08 2.17 6.71 6.45 6.71 11.07M19.07 4.93c-4.08 2.17-6.71 6.45-6.71 11.07"/>
    </svg>
  ),
  plane: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
    </svg>
  ),
  boat: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.95 19H4c1.6 0 3.02-.88 4-2 .98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2h.05l1.89-6.68c.08-.26.06-.54-.06-.78s-.34-.42-.6-.5L20 10.62V6c0-1.1-.9-2-2-2h-3V1H9v3H6c-1.1 0-2 .9-2 2v4.62l-1.29.42c-.26.08-.48.26-.6.5s-.15.52-.06.78L3.95 19zM6 6h12v3.97L12 8 6 9.97V6z"/>
      <path d="M1 21c1.6 0 3.02-.88 4-2 .98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2v-2c-1.6 0-3.02-.88-4-2-.98 1.12-2.4 2-4 2s-3.02-.88-4-2c-.98 1.12-2.4 2-4 2s-3.02-.88-4-2c-.98 1.12-2.4 2-4 2v2z"/>
    </svg>
  ),

  // SPECIALI
  angel: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="8" r="4"/>
      <path d="M12 14c-4.42 0-8 1.79-8 4v2h16v-2c0-2.21-3.58-4-8-4z"/>
      <path d="M7 4c-1.66 0-3-1.34-3-3h2c0 .55.45 1 1 1s1-.45 1-1h2c0 1.66-1.34 3-3 3z"/>
      <path d="M17 4c-1.66 0-3-1.34-3-3h2c0 .55.45 1 1 1s1-.45 1-1h2c0 1.66-1.34 3-3 3z"/>
    </svg>
  ),
  wings: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 12c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2s2 .9 2 2v6c0 1.1-.9 2-2 2z"/>
      <path d="M3 9c0-3.31 2.69-6 6-6h.5v2H9c-2.21 0-4 1.79-4 4v2c0 1.1-.9 2-2 2H2v-2c0-.55.45-1 1-1z"/>
      <path d="M21 9c0-3.31-2.69-6-6-6h-.5v2H15c2.21 0 4 1.79 4 4v2c0 1.1.9 2 2 2h1v-2c0-.55-.45-1-1-1z"/>
      <path d="M12 14c2.21 0 4 1.79 4 4v4h-8v-4c0-2.21 1.79-4 4-4z"/>
    </svg>
  ),
  clover: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 22c-.55 0-1-.45-1-1v-5c-2.18-.46-4-2.07-4.65-4.29C4.53 11.36 3 9.61 3 7.5 3 5.01 5.01 3 7.5 3c1.61 0 3.02.85 3.82 2.12C12.14 3.85 13.54 3 15.15 3c2.49 0 4.5 2.01 4.5 4.5 0 2.11-1.53 3.86-3.35 4.21C15.65 13.93 13.82 15.54 11.65 16v5c0 .55-.45 1-1 1-.55 0-.65-.45-.65-1z"/>
    </svg>
  ),
  lightning: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M7 2v11h3v9l7-12h-4l4-8H7z"/>
    </svg>
  ),
  fire: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"/>
    </svg>
  ),
  sparkle: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L9 9H2l6 4.5L5.5 22 12 17l6.5 5L16 13.5 22 9h-7L12 2z"/>
    </svg>
  ),
  rainbow: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M2 17h2c0-4.42 3.58-8 8-8s8 3.58 8 8h2c0-5.52-4.48-10-10-10S2 11.48 2 17z"/>
      <path d="M5 17h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7s-7 3.13-7 7z"/>
      <path d="M8 17h2c0-1.1.9-2 2-2s2 .9 2 2h2c0-2.21-1.79-4-4-4s-4 1.79-4 4z"/>
    </svg>
  ),
  eye: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
    </svg>
  ),
  hamsa: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2c-1.1 0-2 .9-2 2v5H8V4c0-1.1-.9-2-2-2s-2 .9-2 2v9c0 4.42 3.58 8 8 8s8-3.58 8-8V4c0-1.1-.9-2-2-2s-2 .9-2 2v5h-2V4c0-1.1-.9-2-2-2zm0 13c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
    </svg>
  ),
};

export type SymbolKey = keyof typeof engravingSymbols;

// Symbol categories with SVG keys
export const symbolCategoriesSVG = [
  {
    name: 'Amore',
    symbols: [
      { name: 'Cuore', key: 'heart' as SymbolKey },
      { name: 'Cuore Vuoto', key: 'heartOutline' as SymbolKey },
      { name: 'Infinito', key: 'infinity' as SymbolKey },
      { name: 'Doppio Cuore', key: 'doubleHeart' as SymbolKey },
    ]
  },
  {
    name: 'Natura',
    symbols: [
      { name: 'Stella', key: 'star' as SymbolKey },
      { name: 'Stella Vuota', key: 'starOutline' as SymbolKey },
      { name: 'Luna', key: 'moon' as SymbolKey },
      { name: 'Sole', key: 'sun' as SymbolKey },
      { name: 'Fiore', key: 'flower' as SymbolKey },
      { name: 'Rosa', key: 'rose' as SymbolKey },
      { name: 'Foglia', key: 'leaf' as SymbolKey },
      { name: 'Albero', key: 'tree' as SymbolKey },
      { name: 'Montagna', key: 'mountain' as SymbolKey },
      { name: 'Onda', key: 'wave' as SymbolKey },
      { name: 'Farfalla', key: 'butterfly' as SymbolKey },
    ]
  },
  {
    name: 'Animali',
    symbols: [
      { name: 'Zampa', key: 'pawPrint' as SymbolKey },
      { name: 'Cane', key: 'dog' as SymbolKey },
      { name: 'Gatto', key: 'cat' as SymbolKey },
      { name: 'Uccello', key: 'bird' as SymbolKey },
      { name: 'Colomba', key: 'dove' as SymbolKey },
      { name: 'Leone', key: 'lion' as SymbolKey },
      { name: 'Cavallo', key: 'horse' as SymbolKey },
      { name: 'Delfino', key: 'dolphin' as SymbolKey },
    ]
  },
  {
    name: 'Simboli',
    symbols: [
      { name: 'Corona', key: 'crown' as SymbolKey },
      { name: 'Diamante', key: 'diamond' as SymbolKey },
      { name: 'Ancora', key: 'anchor' as SymbolKey },
      { name: 'Freccia', key: 'arrow' as SymbolKey },
      { name: 'Chiave', key: 'key' as SymbolKey },
      { name: 'Lucchetto', key: 'lock' as SymbolKey },
      { name: 'Lucchetto Cuore', key: 'lockHeart' as SymbolKey },
      { name: 'Croce', key: 'cross' as SymbolKey },
      { name: 'Pace', key: 'peace' as SymbolKey },
      { name: 'Yin Yang', key: 'yinYang' as SymbolKey },
    ]
  },
  {
    name: 'Musica',
    symbols: [
      { name: 'Nota', key: 'musicNote' as SymbolKey },
      { name: 'Note', key: 'musicNotes' as SymbolKey },
      { name: 'Chitarra', key: 'guitar' as SymbolKey },
    ]
  },
  {
    name: 'Sport',
    symbols: [
      { name: 'Calcio', key: 'soccer' as SymbolKey },
      { name: 'Basket', key: 'basketball' as SymbolKey },
      { name: 'Aereo', key: 'plane' as SymbolKey },
      { name: 'Barca', key: 'boat' as SymbolKey },
    ]
  },
  {
    name: 'Speciali',
    symbols: [
      { name: 'Angelo', key: 'angel' as SymbolKey },
      { name: 'Ali', key: 'wings' as SymbolKey },
      { name: 'Quadrifoglio', key: 'clover' as SymbolKey },
      { name: 'Fulmine', key: 'lightning' as SymbolKey },
      { name: 'Fuoco', key: 'fire' as SymbolKey },
      { name: 'Scintilla', key: 'sparkle' as SymbolKey },
      { name: 'Arcobaleno', key: 'rainbow' as SymbolKey },
      { name: 'Occhio', key: 'eye' as SymbolKey },
      { name: 'Hamsa', key: 'hamsa' as SymbolKey },
    ]
  },
];

