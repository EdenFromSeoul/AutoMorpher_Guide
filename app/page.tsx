"use client";

import { useEffect } from "react";
import { BASE_PATH } from "@/lib/site";

export default function LanguageRedirect() {
  useEffect(() => {
    const language = navigator.language.toLowerCase();
    const target = language.startsWith("ko")
      ? "ko"
      : language.startsWith("ja")
        ? "ja"
        : "en";
    window.location.replace(`${BASE_PATH}/${target}/`);
  }, []);

  return (
    <main className="redirect-page">
      <div className="redirect-card">
        <span className="loading-mark">AM</span>
        <h1>Auto Morpher Guide</h1>
        <p>브라우저 언어에 맞는 문서를 준비하고 있습니다.</p>
        <nav aria-label="언어 직접 선택">
          <a href={`${BASE_PATH}/ko/`}>한국어</a>
          <a href={`${BASE_PATH}/ja/`}>日本語</a>
          <a href={`${BASE_PATH}/en/`}>English</a>
        </nav>
      </div>
    </main>
  );
}