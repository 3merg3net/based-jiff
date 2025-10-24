'use client';

export default function VideoThumbnailLink() {
  // Jiffpom main YouTube channel link
  const channelUrl = "https://www.youtube.com/@Jiffpom";
  // Static thumbnail or channel banner
  const thumbUrl = "/images/youtube-banner.jpg"; // add a local image file

  return (
    <a
      href={channelUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block w-full aspect-video overflow-hidden"
      aria-label="Visit Jiffpom on YouTube"
    >
      <img
        src={thumbUrl}
        alt="Jiffpom YouTube"
        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition"
        loading="lazy"
      />
      <span className="absolute inset-0 grid place-items-center">
        <span className="h-14 w-14 rounded-full bg-white/90 grid place-items-center shadow-lg group-hover:scale-105 transition">
          <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
            <path d="M8 5v14l11-7-11-7z" fill="black" />
          </svg>
        </span>
      </span>
      <span className="absolute bottom-2 right-2 text-[11px] bg-black/50 px-2 py-1 rounded">
        Visit Channel
      </span>
    </a>
  );
}
