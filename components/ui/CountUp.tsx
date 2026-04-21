"use client";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useCallback } from "react";

interface CountUpProps {
  to: number;
  from?: number;
  duration?: number;
  delay?: number;
  className?: string;
  suffix?: string;
}

export default function CountUp({
  to,
  from = 0,
  duration = 2,
  delay = 0,
  className = "",
  suffix = "",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(from);
  const damping = 20 + 40 * (1 / duration);
  const stiffness = 100 * (1 / duration);
  const springValue = useSpring(motionValue, { damping, stiffness });
  const isInView = useInView(ref, { once: true, margin: "0px" });

  const format = useCallback(
    (n: number) => Math.round(n).toString() + suffix,
    [suffix]
  );

  useEffect(() => {
    if (ref.current) ref.current.textContent = format(from);
  }, [from, format]);

  useEffect(() => {
    if (!isInView) return;
    const id = setTimeout(() => motionValue.set(to), delay * 1000);
    return () => clearTimeout(id);
  }, [isInView, motionValue, to, delay]);

  useEffect(() => {
    const unsub = springValue.on("change", (latest) => {
      if (ref.current) ref.current.textContent = format(latest);
    });
    return unsub;
  }, [springValue, format]);

  return <span ref={ref} className={className} />;
}
