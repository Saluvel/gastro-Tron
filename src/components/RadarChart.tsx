import React from 'react';
import { motion } from 'motion/react';

interface RadarData {
  label: string;
  value: number; // 0 to 100
}

interface RadarProps {
  data: RadarData[];
  size?: number;
}

export const RadarChart: React.FC<RadarProps> = ({ data, size = 300 }) => {
  if (data.length < 3) return null;

  const center = size / 2;
  const radius = (size / 2) * 0.8;
  const angleStep = (Math.PI * 2) / data.length;

  const getCoordinatesForAngle = (angle: number, value: number) => {
    const x = center + radius * (value / 100) * Math.cos(angle - Math.PI / 2);
    const y = center + radius * (value / 100) * Math.sin(angle - Math.PI / 2);
    return { x, y };
  };

  const points = data.map((d, i) => getCoordinatesForAngle(i * angleStep, d.value));
  const pathData = points.map((p, i) => (i === 0 ? `M ${p.x},${p.y}` : `L ${p.x},${p.y}`)).join(' ') + ' Z';

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="overflow-visible">
        {/* Background webs */}
        {[20, 40, 60, 80, 100].map((circleValue) => {
          const circlePoints = data.map((_, i) => getCoordinatesForAngle(i * angleStep, circleValue));
          const circlePath = circlePoints.map((p, i) => (i === 0 ? `M ${p.x},${p.y}` : `L ${p.x},${p.y}`)).join(' ') + ' Z';
          return (
            <path
              key={circleValue}
              d={circlePath}
              fill="none"
              stroke="rgba(0, 242, 255, 0.1)"
              strokeWidth="1"
            />
          );
        })}

        {/* Axes */}
        {data.map((_, i) => {
          const { x, y } = getCoordinatesForAngle(i * angleStep, 100);
          return (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={x}
              y2={y}
              stroke="rgba(0, 242, 255, 0.2)"
              strokeWidth="1"
            />
          );
        })}

        {/* Value Polygon */}
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          d={pathData}
          fill="rgba(0, 242, 255, 0.3)"
          stroke="rgba(0, 242, 255, 1)"
          strokeWidth="2"
          className="drop-shadow-[0_0_8px_rgba(0,242,255,0.8)]"
        />

        {/* Data points */}
        {points.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r={3} fill="#fff" className="drop-shadow-[0_0_5px_rgba(255,255,255,1)]" />
        ))}
      </svg>
      
      {/* Labels */}
      {data.map((d, i) => {
        // Push labels slightly further out than 100%
        const { x, y } = getCoordinatesForAngle(i * angleStep, 115);
        return (
          <div
            key={i}
            className="absolute -translate-x-1/2 -translate-y-1/2 text-[9px] uppercase tracking-widest font-mono text-tron-cyan font-bold text-center w-24"
            style={{ left: x, top: y }}
          >
            {d.label}
          </div>
        );
      })}
    </div>
  );
};
