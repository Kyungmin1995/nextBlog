"use client";
import React, { useState, useEffect } from "react";

import UrlData from "@/app/(beforeLogin)/_component/Link";
import BackGround from "@/app/(beforeLogin)/_component/Background";

export default function Main() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(true), 800);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div className={loading ? "none" : "backStyle"}>
        <BackGround />
      </div>
      <div className="container">
        <UrlData />
      </div>
    </>
  );
}
