import { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return (
    <section className="w-full h-screen p-4 bg-slate-50 text-black dark:bg-black dark:text-slate-50">
      {children}
    </section>
  );
}
