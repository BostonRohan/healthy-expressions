import { ReactNode } from "react";

export function P({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`leading-7 [&:not(:first-child)]:mt-4 text-gray-500 ${className}`}
    >
      {children}
    </p>
  );
}
