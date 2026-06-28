import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#1e3a5f',
          borderRadius: 36,
        }}
      >
        <svg width="112" height="112" viewBox="0 0 32 32" fill="none">
          <path
            d="M5.5 14.5L16 6l10.5 8.5"
            stroke="#c9a227"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M7.5 14v12.5h17V14" fill="#c9a227" />
          <rect x="13" y="19" width="6" height="7.5" rx="0.5" fill="#1e3a5f" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
