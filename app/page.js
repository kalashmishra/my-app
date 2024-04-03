"use client"
import { useEffect } from "react";
import LandingPage from "./LandingPage/page";

export default function Home() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js', { scope: '/' })
        .then((registration) => {
          console.log('Service worker registered successfully. Scope:', registration.scope);
        })
        .catch((error) => {
          console.error('Service worker registration failed:', error);
        });
    }
  }, []);
  return (
    <>
      <LandingPage />
    </>
  );
}
