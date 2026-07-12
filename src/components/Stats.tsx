'use client';

import { useEffect, useRef, useState } from 'react';

interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

interface StatsProps {
  stats: Stat[];
}

function AnimatedCounter({ value, suffix }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const steps = 60;
          const stepTime = duration / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += value / steps;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, stepTime);
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-blue-600">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function Stats({ stats }: StatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
      {stats.map((stat, i) => (
        <div key={i} className="text-center">
          <AnimatedCounter value={stat.value} suffix={stat.suffix} />
          <p className="mt-2 text-gray-600">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}