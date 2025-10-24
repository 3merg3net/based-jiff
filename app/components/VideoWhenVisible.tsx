'use client';
import { useEffect, useMemo, useRef, useState } from "react";

type Props = { videoId: string };

export default function VideoWhenVisible({ videoId }: Props) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [src, setSrc] = useState<string>("");
  const [activated, setActivated] = useState(false);

  // Thumbnail URL (always available even if embedding is blocked)
  const thumb = useMemo(
    () => `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
    [videoId]
  );

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !activated) {
          // try to activate embed on first visibility
          setActivated(true);
          const params = new URLSearchParams({
            autoplay: "1",
            mute: "1",
            rel: "0",
            modestbranding: "1",
            playsinline: "1",
            controls: "1",
            // Using standard domain helps with videos that block nocookie
            // enablejsapi intentionally omitted (not needed for autoplay)
            origin: window.location.origin
          });
          setSrc(`https://www.youtube.com/embed/${videoId}?${params.toString()}`);
        }
      },
      { threshold: 0.5 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [activated, videoId]);

  // If we haven't activated the embed yet, show a pretty thumbnail with a play button.
  const openOnYoutube = () =>
    window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank", "noopener,noreferrer");

  return (
    <div ref={wrapRef} className="relative w-full aspect-video">
      {src ? (
        <iframe
          src={src}
          title="Jiffpom on YouTube"
          className="w-full h-full"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : (
        <button
          type="button"
          onClick={openOnYoutube}
          className="group absolute inset-0 w-full h-full"
          aria-label="Play on YouTube"
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
      {/* Always-offer a small fallback link under the player */}
      <div className="absolute bottom-2 right-2 text-[11px] bg-black/50 px-2 py-1 rounded">
        <a
          href={`https://www.youtube.com/watch?v=${videoId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Open on YouTube
        </a>
      </div>
    </div>
  );
}
