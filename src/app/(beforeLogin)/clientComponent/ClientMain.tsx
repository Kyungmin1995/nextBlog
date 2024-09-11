"use client";

import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import React, { useEffect } from "react";

export default function ClientMain() {
  const store = useAppSelector((state) => state.menuReducer);
  console.log(store.value, "store");

  return (
    <div style={{ display: store.value ? "none" : "block" }}>
      <Link href={"/todo"}>todo</Link>
      <div>메인페이지</div>
    </div>
  );
}
