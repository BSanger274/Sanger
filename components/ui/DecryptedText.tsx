"use client";
import { useEffect, useState, useRef, useCallback } from "react";

interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  sequential?: boolean;
  revealDirection?: "start" | "end" | "center";
  useOriginalCharsOnly?: boolean;
  characters?: string;
  className?: string;
  encryptedClassName?: string;
  animateOn?: "view" | "hover";
}

export default function DecryptedText({
  text,
  speed = 45,
  maxIterations = 12,
  sequential = true,
  revealDirection = "start",
  useOriginalCharsOnly = false,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&",
  className = "",
  encryptedClassName = "opacity-40",
  animateOn = "view",
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);
  const [revealedIndices, setRevealedIndices] = useState<Set<number>>(new Set());
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const availableChars = useOriginalCharsOnly
    ? Array.from(new Set(text.split(""))).filter((c) => c !== " ")
    : characters.split("");

  const shuffleText = useCallback(
    (original: string, revealed: Set<number>) =>
      original
        .split("")
        .map((char, i) => {
          if (char === " ") return " ";
          if (revealed.has(i)) return original[i];
          return availableChars[Math.floor(Math.random() * availableChars.length)];
        })
        .join(""),
    [availableChars]
  );

  const getNextIndex = useCallback(
    (revealed: Set<number>): number => {
      const len = text.length;
      if (revealDirection === "start") return revealed.size;
      if (revealDirection === "end") return len - 1 - revealed.size;
      // center
      const mid = Math.floor(len / 2);
      const offset = Math.floor(revealed.size / 2);
      const idx = revealed.size % 2 === 0 ? mid + offset : mid - offset - 1;
      if (idx >= 0 && idx < len && !revealed.has(idx)) return idx;
      for (let i = 0; i < len; i++) if (!revealed.has(i)) return i;
      return 0;
    },
    [text.length, revealDirection]
  );

  const triggerDecrypt = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setRevealedIndices(new Set());
    setIsAnimating(true);

    intervalRef.current = setInterval(() => {
      setRevealedIndices((prev) => {
        if (sequential) {
          if (prev.size < text.length) {
            const next = getNextIndex(prev);
            const newSet = new Set(prev);
            newSet.add(next);
            setDisplayText(shuffleText(text, newSet));
            return newSet;
          } else {
            clearInterval(intervalRef.current ?? undefined);
            setIsAnimating(false);
            setDisplayText(text);
            return prev;
          }
        } else {
          // non-sequential: scramble N times then reveal
          setDisplayText(shuffleText(text, prev));
          return prev;
        }
      });
    }, speed);
  }, [text, speed, sequential, getNextIndex, shuffleText]);

  // non-sequential timeout to stop after maxIterations
  useEffect(() => {
    if (!isAnimating || sequential) return;
    let count = 0;
    const id = setInterval(() => {
      count++;
      if (count >= maxIterations) {
        clearInterval(id);
        clearInterval(intervalRef.current ?? undefined);
        setIsAnimating(false);
        setDisplayText(text);
      }
    }, speed);
    return () => clearInterval(id);
  }, [isAnimating, sequential, maxIterations, speed, text]);

  // view trigger
  useEffect(() => {
    if (animateOn !== "view") return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setTimeout(() => triggerDecrypt(), 300);
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [animateOn, hasAnimated, triggerDecrypt]);

  // hover trigger
  const handleMouseEnter = () => {
    if (animateOn !== "hover") return;
    triggerDecrypt();
  };
  const handleMouseLeave = () => {
    if (animateOn !== "hover") return;
    if (intervalRef.current) clearInterval(intervalRef.current);
    setIsAnimating(false);
    setDisplayText(text);
    setRevealedIndices(new Set());
  };

  return (
    <span
      ref={containerRef}
      className="inline-block whitespace-pre-wrap"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {displayText.split("").map((char, i) => {
          const isRevealed = revealedIndices.has(i) || (!isAnimating && displayText === text);
          return (
            <span key={i} className={isRevealed ? className : encryptedClassName}>
              {char}
            </span>
          );
        })}
      </span>
    </span>
  );
}
