import React from 'react';
import styled from 'styled-components';

// Styled container for the circle progress bar
const ProgressContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: ${(props) => props.size || '100px'};
  height: ${(props) => props.size || '100px'};
`;

// Styled SVG for the progress circle
const Svg = styled.svg`
  transform: rotate(-90deg);
  width: 100%;
  height: 100%;
`;

const Circle = styled.circle`
  fill: none;
  stroke-width: ${(props) => props.strokeWidth || '10px'};
`;

const CircleBackground = styled(Circle)`
  stroke: ${(props) => props.bgcolor || '#e0e0e0'};
`;

const CircleProgress = styled(Circle)`
  stroke: ${(props) => props.color || '#76c7c0'};
  stroke-dasharray: ${(props) => props.circumference};
  stroke-dashoffset: ${(props) => props.offset};
  transition: stroke-dashoffset 0.35s;
`;

// Adjusted ProgressText for vertical alignment
const ProgressText = styled.text`
  fill: ${(props) => props.textcolor || '#000'};
  font-size: ${(props) => props.fontSize || '16px'};
  text-anchor: middle;
  dominant-baseline: middle;
  transform: rotate(90deg); /* Rotate text to be vertical */
  transform-origin: center; /* Ensure rotation around the center */
  x: ${(props) => props.x};
  y: ${(props) => props.y};
`;

// CircleProgressBar component
const CircleProgressBar = ({ total = 100, attempt = 0, size = '100px', strokeWidth = '10px', color = '#76c7c0', bgcolor = '#e0e0e0', textcolor = '#000', fontSize = '16px' }) => {
  // Ensure size and strokeWidth are numbers
  const parsedSize = parseFloat(size);
  const parsedStrokeWidth = parseFloat(strokeWidth);

  // Check for valid numbers
  if (isNaN(parsedSize) || isNaN(parsedStrokeWidth) || parsedSize <= 0 || parsedStrokeWidth <= 0) {
    console.error('Invalid size or strokeWidth values:', size, strokeWidth);
    return null; // Return nothing if invalid
  }

  const radius = (parsedSize / 2) - (parsedStrokeWidth / 2);
  const circumference = 2 * Math.PI * radius;
  const progress = (attempt / total) * 100;
  const offset = circumference - (progress / 100 * circumference);

  return (
    <ProgressContainer size={size}>
      <Svg viewBox={`0 0 ${parsedSize} ${parsedSize}`}>
        <CircleBackground
          cx={parsedSize / 2}
          cy={parsedSize / 2}
          r={radius}
          strokeWidth={parsedStrokeWidth}
          bgcolor={bgcolor}
        />
        <CircleProgress
          cx={parsedSize / 2}
          cy={parsedSize / 2}
          r={radius}
          strokeWidth={parsedStrokeWidth}
          color={color}
          circumference={circumference}
          offset={offset}
          strokeLinecap="round" 
        />
        <ProgressText
          x={parsedSize / 2}
          y={parsedSize / 2}
          textcolor={textcolor}
          fontSize={fontSize}
        >
          {attempt}/{total}
        </ProgressText>
      </Svg>
    </ProgressContainer>
  );
};

export default CircleProgressBar;
