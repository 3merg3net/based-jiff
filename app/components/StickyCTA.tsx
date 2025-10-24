'use client';
import { useEffect, useState } from "react";
import { LINKS } from "../config";

export default function StickyCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 280);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <div className="fixed bottom-4 inset-x-0 px-4 sm:hidden z-40">
      <a
        href={LINKS.DEX_BUY}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-base w-full text-center shadow-lg"
      >
        Buy $JIFF
      </a>
    </div>
  );
}
