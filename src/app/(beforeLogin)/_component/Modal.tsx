"use client";

import { useRouter } from "next/navigation";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <>
      <div
        onClick={() => {
          router.back();
        }}
      >
        {children}
      </div>
    </>
  );
}
