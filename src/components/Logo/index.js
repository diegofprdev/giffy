import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={312.444}
    height={165.2}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="93.778 -7.6 312.444 165.2"
    style={{
      background: "0 0",
    }}
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <defs>
      <filter id="a" x="-100%" y="-100%" width="300%" height="300%">
        <feFlood floodColor="#93f" result="flood" />
        <feComposite
          operator="in"
          in="flood"
          in2="SourceAlpha"
          result="color"
        />
        <feFlood floodColor="#93f" result="flood2" />
        <feComposite
          operator="in"
          in="flood2"
          in2="SourceAlpha"
          result="color2"
        />
        <feMorphology operator="dilate" radius={2} in="color" result="dilate" />
        <feGaussianBlur stdDeviation={6} in="color" result="blur1" />
        <feGaussianBlur stdDeviation={2.5} in="color" result="blur2" />
        <feGaussianBlur stdDeviation={1} in="SourceAlpha" result="blur3" />
        <feGaussianBlur stdDeviation={6} in="dilate" result="blur4" />
        <feConvolveMatrix
          in="color2"
          result="conv"
          order="3,3"
          divisor={1}
          kernelMatrix="1 1 1 1 1 1 1 1 1"
        />
        <feMerge>
          <feMergeNode in="blur1" />
          <feMergeNode in="blur2" />
          <feMergeNode in="blur4" />
          <feMergeNode in="blur3" />
          <feMergeNode in="blur3" />
          <feMergeNode in="blur3" />
          <feMergeNode in="blur3" />
          <feMergeNode in="conv" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#a)">
      <path
        d="m180.34 88.06 18.38-1.64q-6.55 14.38-6.55 31.03-2.46 1.73-6.05 1.73t-5.87-1.68q-2.27-1.69-2.73-3.42-2.27 2.37-5.96 3.73-3.69 1.37-7.6 1.37-3.91 0-7.32-1.27-3.42-1.28-6.06-4.1-5.82-6.19-5.82-17.93 0-18.2 9.74-29.12 10.01-11.28 27.75-11.28 12.29 0 16.66 6.37 1.36 2 1.36 4.41 0 2.42-1.05 4.46-1.04 2.05-2.68 3.69-3.91 3.64-8.74 3.64-1.91 0-3.73-.64.37-2.73.37-5.91 0-3.19-.23-4.64-.23-1.46-.77-2.64-1.19-2.46-3.78-2.46t-5.46 2.77q-2.87 2.78-5.14 7.33-5.01 10.19-5.01 22.48 0 5.64 2.19 9.64 2.36 4.37 6.55 4.37 1.45 0 2.77-.73 1.32-.72 1.87-1.27l2.91-18.29Zm44.68 24.3q-2.82 6.82-11.83 6.82-4.64 0-7.55-3.18-2.46-2.83-2.46-5.65 0-7.37 3.37-21.75l3.37-17.65 18.47-1.82-5.55 28.76q-1.55 6.73-1.55 9.1 0 5.18 3.73 5.37ZM211.55 58.3q0-3.55 2.96-5.46 2.96-1.91 7.24-1.91 4.27 0 6.87 1.91 2.59 1.91 2.59 5.46t-2.87 5.37q-2.86 1.82-7.14 1.82-4.28 0-6.96-1.82-2.69-1.82-2.69-5.37Zm56.7 6.28q1.27-2.18 1.27-4.55 0-4.19-2.55-4.19-3.91 0-5.55 8.01l-1.36 7.1h8.28l-.55 4.1h-8.55l-8.19 42.31-18.38 1.82 8.73-44.13h-6.46l.82-4.1h6.37l1.91-7.19q1.64-6.64 8.65-9.74 5.09-2.18 13.65-2.18 8.55 0 12.37 2.18 3.82 2.19 3.82 5.1 0 2.91-2.27 4.73-2.27 1.82-4.82 1.82-5.01 0-7.19-1.09Zm34.76 0q1.27-2.18 1.27-4.55 0-4.19-2.54-4.19-3.92 0-5.55 8.01l-1.37 7.1h8.28l-.54 4.1H294l-8.19 42.31-18.38 1.82 8.73-44.13h-6.46l.82-4.1h6.37l1.91-7.19q1.64-6.64 8.65-9.74 5.09-2.18 13.65-2.18 8.55 0 12.37 2.18 3.83 2.19 3.83 5.1 0 2.91-2.28 4.73-2.27 1.82-4.82 1.82-5.01 0-7.19-1.09Zm28.21 42.5q-4.73 4.91-13.38 4.91-10.83 0-13.1-7.92-.73-2.36-.73-5t.55-5.37l4.27-22.75 18.48-1.82-5.01 26.48q-.18 1.18-.45 2.46-.28 1.27-.28 2.59 0 1.32.46 2.19.45.86 1.09 1.41 1.09.72 3.05.72 1.96 0 3.64-2.36 1.68-2.37 2.5-6.46l5.01-25.21 17.92-1.82-6.82 35.76q-3.37 17.47-10.28 24.39-3.55 3.55-8.15 4.96-4.59 1.41-10.51 1.41-9.55 0-15.01-3-5.46-3-5.46-8.01 0-3.73 2.82-5.87t7.19-2.14q3.82 0 6.73 1.64 1.73 1 2.55 2.28-2.09 1.81-2.09 4.82 0 4 3.64 4 6 0 9.46-13.83 1-4.1 1.91-8.46Z"
        fill="none"
        stroke="#ffceff"
        strokeWidth={2}
      />
    </g>
  </svg>
)

export default SvgComponent;



