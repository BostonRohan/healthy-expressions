import { ReactNode } from "react";

export function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="scroll-m-20 text-4xl font-semibold tracking-tight first:mt-0">
      {children}
    </h2>
  );
}
