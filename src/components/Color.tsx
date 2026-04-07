import type { ReactNode } from "react";

type ColorProps = {
  children: ReactNode;
  color: string;
};

export default function Color({ children, color }: ColorProps) {
  return (
    <span
      style={{
        color,
      }}
    >
      {children}
    </span>
  );
}
