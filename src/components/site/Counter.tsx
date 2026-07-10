import { useEffect, useRef, useState } from "react";

export function useCounter(target: number, duration = 1600) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const step = (now: number) => {
              const p = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setValue(Math.floor(eased * target));
              if (p < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);

  return { ref, value };
}

function formatNumber(n: number, suffix?: string) {
  if (suffix === "K+") return `${n}K+`;
  if (suffix === "M+") return `${n}M+`;
  if (suffix === "+") return `${n}+`;
  return String(n);
}

export function Counter({
  target,
  suffix,
  decimals = 0,
}: {
  target: number;
  suffix?: string;
  decimals?: number;
}) {
  const { ref, value } = useCounter(target);
  const display =
    decimals > 0 ? (value / Math.pow(10, decimals)).toFixed(decimals) : formatNumber(value, suffix);
  return <span ref={ref}>{display}</span>;
}
