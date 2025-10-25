'use client';

import { ENV } from "../config";

export default function StickyCTA() {
  // If no buy URL is configured, don't render the sticky bar on mobile
  if (!ENV.DEX_BUY || ENV.DEX_BUY === "#") return null;

  return (
    <div className="fixed bottom-4 inset-x-0 px-4 sm:hidden z-40">
      <a
        href={ENV.DEX_BUY}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-base w-full text-center shadow-lg"
      >
        Buy $JIFF
      </a>
    </div>
  );
}
