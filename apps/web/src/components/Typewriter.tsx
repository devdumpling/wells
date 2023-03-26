"use client";

import { Typewriter as ReactTypewriter } from "react-simple-typewriter";

export interface TypewriterProps {
  words: string[];
  loop?: number;
  cursor?: boolean;
  cursorStyle?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  delaySpeed?: number;
  onLoopDone?: () => void;
}

/**
 * Client Component wrapper for react-simple-typewriter
 */
export const Typewriter = (props: TypewriterProps) => {
  return <ReactTypewriter {...props} />;
};
