'use client';
import { useEffect, useMemo, useState } from "react";

export default function VideoClickToPlay({ videoId }: { videoId: string }) {
  const [playing, setPlaying] = useState(false);

  // Always-available thumbnail—even if embedding is blocked.
  const thumb = useMemo(
    () => `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
    [videoId]
  );

  const watchUrl = `https://www.youtube.com/watch?v=${videoId}`;

  const embedUrl = useMemo(() => {
    const params = new URLSearchParams({
      autoplay: "1",
      mute: "1",           // keep muted for auto-play compliance
      rel: "0",
      modestbranding: "1",
      playsinline: "1",
      controls: "1",
      origin: typeof window !== "undefined" ? window.location.origin : ""
    });
    return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
  }, [videoId]);

  // If you want to auto-activate on scroll later, you can toggle setPlaying(true) with IntersectionObserver.
  // Click-to-play is more reliable when channels restrict autoplay/embeds.

  return (
    <div className="relative w-full aspect-video">
      {playing ? (
        <iframe
          key={videoId}
          src={embedUrl}
          title="Jiffpom on YouTube"
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 w-full h-full text-left"
          aria-label="Play video"
        >
          <img
            src={thumb}
            alt="YouTube preview"
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition"
          />
          <span className="absolute inset-0 grid place-items-center">
            <span className="h-14 w-14 rounded-full bg-white/90 grid place-items-center shadow-lg group-hover:scale-105 transition">
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
                <path d="M8 5v14l11-7-11-7z" fill="black"/>
              </svg>
            </span>
          </span>
        </button>
      )}

      {/* Fallback link always available */}
      <div className="absolute bottom-2 right-2 text-[11px] bg-black/50 px-2 py-1 rounded">
        <a href={watchUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
          Open on YouTube
        </a>
      </div>
    </div>
  );
}
