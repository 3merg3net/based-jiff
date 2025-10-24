'use client';

import Image from "next/image";
import { useState, useEffect } from "react";
import { LINKS, CONTRACT_CA, YT_VIDEO_ID } from "./config";
import FloatingPaws from "./components/FloatingPaws";
import { JIFF_LINKS, JIFF_STATS } from "./config";
import VideoWhenVisible from "./components/VideoWhenVisible";
import VideoClickToPlay from "./components/VideoClickToPlay";
import VideoThumbnailLink from "./components/VideoThumbnailLink";




export default function HomePage() {
  const [open, setOpen] = useState(false);

  // ------------------------------------------------------
// SocialCard component helper
// ------------------------------------------------------
function SocialCard({
  label,
  tagline,
  href,
  Icon,
}: {
  label: string;
  tagline: string;
  href: string;
  Icon: React.FC;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="card p-5 hover:bg-white/10 transition flex items-center gap-4"
      aria-label={`${label} — ${tagline}`}
    >
      <div className="h-10 w-10 grid place-items-center rounded-xl bg-white/10 text-white/80">
        <Icon />
      </div>
      <div>
        <div className="font-semibold">{label}</div>
        <div className="text-xs text-white/60">{tagline}</div>
      </div>
    </a>
  );
}


  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 640) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur bg-[#0b1226]/70 border-b border-white/10">
  <div className="container-tight py-4 flex items-center justify-between">

    {/* 🔹 LEFT: LOGO + BRAND */}
    <a
      href="#"
      className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-base/60 rounded"
    >
      <div className="flex items-center gap-2">
        <div className="relative h-10 w-10 rounded-full overflow-hidden">
          {/* Blue glow behind logo */}
          <div className="absolute inset-0 rounded-full blur-lg bg-[var(--base)] opacity-40 -z-10" />
          <Image
            src="/images/logo.png"
            alt="Based Jiff logo"
            fill
            sizes="40px"
            className="object-contain"
            priority
          />
        </div>
        <span className="font-extrabold tracking-wide">Based Jiff</span>
      </div>
    </a>

    {/* 🔹 CENTER/NAV LINKS (Desktop) */}
    <nav className="hidden sm:flex gap-6 text-sm text-white/80">
      <a href="#token" className="link">Token</a>
      <a href="#how" className="link">How to Buy</a>
      <a href="#about" className="link">About</a>
      <a href="#fan" className="link">Fan Flair</a>
      <a href="#faq" className="link">FAQ</a>
      <a href="#cta" className="btn-base">Buy</a>
    </nav>

    {/* 🔹 MOBILE MENU BUTTON */}
    <button
      className="sm:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-base/60"
      aria-label="Open menu"
      onClick={() => setOpen(!open)}
    >
      <svg width="20" height="20" fill="none" stroke="currentColor" className="opacity-90">
        <path strokeLinecap="round" strokeWidth="2" d="M3 6h14M3 10h14M3 14h14" />
      </svg>
    </button>
  </div>

  {/* 🔹 MOBILE MENU DRAWER */}
  {open && (
    <div className="sm:hidden border-t border-white/10 bg-[#0b1226]/95">
      <div className="container-tight py-3 grid gap-2 text-sm">
        <a href="#token" className="py-2 link" onClick={() => setOpen(false)}>Token</a>
        <a href="#how" className="py-2 link" onClick={() => setOpen(false)}>How to Buy</a>
        <a href="#about" className="py-2 link" onClick={() => setOpen(false)}>About</a>
        <a href="#fan" className="py-2 link" onClick={() => setOpen(false)}>Fan Flair</a>
        <a href="#faq" className="py-2 link" onClick={() => setOpen(false)}>FAQ</a>
        <a href="#cta" className="py-2" onClick={() => setOpen(false)}>
          <span className="btn-base w-full">Buy</span>
        </a>
      </div>
    </div>
  )}
</header>


      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* decorative floating paws (desktop only) */}
        <FloatingPaws />

        <div className="container-tight py-14 grid md:grid-cols-2 gap-10 items-center relative">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              The goodest dog on <span className="text-blue-300">Base</span>
            </h1>
            <p className="mt-4 text-white/70 max-w-xl">
              Based Jiff is a community fan token inspired by Jiffpom — bringing cute vibes and
              9M+ followers to Base. No promises. Just dogs and fun.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a id="cta" href={LINKS.DEX_BUY} target="_blank" rel="noopener noreferrer" className="btn-base">Buy $JIFF</a>
              <a href={LINKS.CHART} target="_blank" rel="noopener noreferrer" className="btn-ghost">Chart</a>
            </div>
            <div className="mt-6 text-xs text-white/50 space-x-4">
              <span><b>CA:</b> {0x0e9d2c3f0d69e0e457b35e4a9e192d8895d120f8}</span>
              <span><b>Chain:</b> Base</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-base/20 blur-3xl rounded-[3rem]" />
            <figure className="relative rounded-[2rem] border border-white/10 bg-gradient-to-b from-[#0e1a3a] to-[#0b1226] p-6 shadow-2xl">
              <Image
                src="/images/based-jiff-hero.png"
                alt="Based Jiff hero"
                width={800}
                height={640}
                priority
                className="mx-auto max-h-80 w-auto object-contain"
              />
            </figure>
          </div>
        </div>

        {/* Social counters */}
        <div className="container-tight pb-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="card p-4 text-center"><div className="text-2xl font-bold">9.0M</div><div className="text-xs text-white/60">Instagram</div></div>
          <div className="card p-4 text-center"><div className="text-2xl font-bold">500K</div><div className="text-xs text-white/60">TikTok</div></div>
          <div className="card p-4 text-center"><div className="text-2xl font-bold">280K</div><div className="text-xs text-white/60">YouTube</div></div>
          <div className="card p-4 text-center"><div className="text-2xl font-bold">2</div><div className="text-xs text-white/60">Guinness Records</div></div>
        </div>
      </section>

      {/* TOKENOMICS */}
      <section id="token" className="container-tight py-12 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold">Tokenomics</h2>
          <ul className="mt-4 space-y-2 text-white/80">
            <li>• Ticker: <b>$JIFF</b></li>
            <li>• Supply: <b>1,000,000,000</b></li>
            <li>• Tax: <b>0/0</b></li>
            <li>• LP: <b>Burned / Locked</b></li>
            <li>• Fair launch • Community-owned</li>
          </ul>
          <div className="mt-6 flex gap-3">
            <a href={LINKS.DEX_BUY} target="_blank" rel="noopener noreferrer" className="btn-base">Buy on Base</a>
            <a href={LINKS.CHART} target="_blank" rel="noopener noreferrer" className="btn-ghost rounded-xl">Chart</a>
          </div>
        </div>
        <figure className="card p-4">
          <Image
            src="/images/jiff-records.jpg"
            alt="Jiff Records"
            width={900}
            height={900}
            className="w-full rounded-xl"
          />
        </figure>
      </section>

      {/* HOW TO BUY */}
<section id="how" className="container-tight py-12">
  <h2 className="text-3xl md:text-4xl font-extrabold mb-6">How to Buy</h2>
  <div className="card overflow-hidden p-0">
    <Image
      src="/images/how-to-buy.png"
      alt="How to Buy $JIFF"
      width={1000}
      height={400}
      className="w-full h-auto object-contain"
      priority
    />
  </div>
</section>


      {/* ABOUT */}
      <section id="about" className="container-tight py-14">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold">Who is Jiffpom?</h2>
            <p className="mt-4 text-white/70 leading-relaxed">
              Jiffpom is a world–famous Pomeranian known for wholesome content, viral tricks,
              and record-setting cuteness. <b>Based Jiff</b> is a community fan token celebrating that
              culture on Base—bringing pet-friendly vibes and meme energy to crypto.
            </p>
            <ul className="mt-4 text-white/70 space-y-1">
              <li>• 9.0M+ Instagram followers</li>
              <li>• Massive reach on TikTok & YouTube</li>
              <li>• 2× Guinness World Records</li>
            </ul>
            <p className="mt-4 text-white/50 text-sm">
              <b>Disclaimer:</b> Based Jiff is a community fan token on Base and is celebrating the Jiffpom brand.
              Biggest Richest Dogfluencer in the world, no expectations—just dogs and fun.
            </p>
          </div>
          <figure className="card p-4">
            <img
              src="/images/mascot-circle.jpg"
              alt="Based Jiff mascot"
              className="w-full max-w-sm mx-auto"
            />
          </figure>
        </div>
      </section>

      {/* FAN FLAIR */}
<section id="fan" className="container-tight py-14">
  <h2 className="text-3xl md:text-4xl font-extrabold">Jiffpom Fan Flair</h2>
  <p className="mt-2 text-white/60 text-sm">
    Fans call Jiffpom the most famous—maybe even the richest—good dog on the planet.
    This is a community fan page; not affiliated with the official brand.
  </p>

  <div className="mt-6 grid md:grid-cols-3 gap-6 auto-rows-fr items-stretch">
    {/* YouTube */}
<div className="card p-0 h-full flex flex-col">
  <div className="relative aspect-video w-full">
    <VideoThumbnailLink />
  </div>

  <div className="p-5 flex items-center gap-4 mt-auto">
    <div className="h-10 w-10 grid place-items-center rounded-xl bg-white/10 text-white/80">
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path
          fill="currentColor"
          d="M23 7.1a3.1 3.1 0 0 0-2.2-2.2C18.8 4.4 12 4.4 12 4.4s-6.8 0-8.8.5A3.1 3.1 0 0 0 1 7.1 32 32 0 0 0 .5 12 32 32 0 0 0 1 16.9a3.1 3.1 0 0 0 2.2 2.2c2 .5 8.8.5 8.8.5s6.8 0 8.8-.5A3.1 3.1 0 0 0 23 16.9 32 32 0 0 0 23.5 12 32 32 0 0 0 23 7.1zM9.8 15.2V8.8l6 3.2-6 3.2z"
        />
      </svg>
    </div>

    <div>
      <div className="font-semibold">YouTube • {JIFF_STATS.YOUTUBE}+</div>
      <div className="text-xs text-white/60">
        Official Jiffpom Channel — cute compilations & adventures.
      </div>
    </div>
  </div>
</div>




    {/* Instagram */}
    <a
      href={JIFF_LINKS.INSTAGRAM}
      target="_blank"
      rel="noopener noreferrer"
      className="card p-0 hover:bg-white/5 transition h-full flex flex-col"
      aria-label="Instagram — Daily cute drops & reels"
    >
      <div className="relative aspect-video w-full">
        <Image
          src="/images/ig-preview.jpg"
          alt="Instagram preview"
          fill
          sizes="(max-width:768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="p-5 flex items-center gap-4 mt-auto">
        <div className="h-10 w-10 grid place-items-center rounded-xl bg-white/10 text-white/80">
          <svg viewBox="0 0 24 24" className="w-6 h-6">
            <path fill="currentColor" d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .3 2.5.6.6.3 1 .6 1.5 1.1.5.5.8.9 1.1 1.5.3.5.5 1.3.6 2.5.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 2-.6 2.5-.3.6-.6 1-1.1 1.5-.5.5-.9.8-1.5 1.1-.5.3-1.3.5-2.5.6-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.3-2.5-.6-.6-.3-1-.6-1.5-1.1-.5-.5-.8-.9-1.1-1.5-.3-.5-.5-1.3-.6-2.5C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-2 .6-2.5.3-.6.6-1 1.1-1.5.5-.5.9-.8 1.5-1.1.5-.3 1.3-.5 2.5-.6C8.4 2.2 8.8 2.2 12 2.2zm0 5.1a4.7 4.7 0 1 1 0 9.4 4.7 4.7 0 0 1 0-9.4zm6.1-2.1a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z"/>
          </svg>
        </div>
        <div>
          <div className="font-semibold">Instagram • {JIFF_STATS.INSTAGRAM}+</div>
          <div className="text-xs text-white/60">Daily cute drops & reels.</div>
        </div>
      </div>
    </a>

    {/* TikTok */}
    <a
      href={JIFF_LINKS.TIKTOK}
      target="_blank"
      rel="noopener noreferrer"
      className="card p-0 hover:bg-white/5 transition h-full flex flex-col"
      aria-label="TikTok — Tricks, trends & shorts"
    >
      <div className="relative aspect-video w-full">
        <Image
          src="/images/tt-preview.jpg"
          alt="TikTok preview"
          fill
          sizes="(max-width:768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="p-5 flex items-center gap-4 mt-auto">
        <div className="h-10 w-10 grid place-items-center rounded-xl bg-white/10 text-white/80">
          <svg viewBox="0 0 24 24" className="w-6 h-6">
            <path fill="currentColor" d="M21 8.1a6.8 6.8 0 0 1-4-1.3v7.3a6.1 6.1 0 1 1-6.1-6.1c.4 0 .8 0 1.2.1v2.6a3.5 3.5 0 1 0 2.2 3.2V2h2.5c.4 1.9 1.9 3.5 3.8 3.9v2.2z"/>
          </svg>
        </div>
        <div>
          <div className="font-semibold">TikTok • {JIFF_STATS.TIKTOK}+</div>
          <div className="text-xs text-white/60">Tricks, trends & shorts.</div>
        </div>
      </div>
    </a>
  </div>
</section>




      {/* FAQ */}
      <section id="faq" className="max-w-4xl mx-auto px-4 py-14">
        <h2 className="text-3xl md:text-4xl font-extrabold">FAQ</h2>
        <div className="mt-6 space-y-4">
          <details className="card p-5">
            <summary className="cursor-pointer font-semibold">Is this official Jiff?</summary>
            <p className="mt-3 text-white/70">No. This is a based community fan token. Celebrating with the real most based Jiffpom.</p>
          </details>
          <details className="card p-5">
            <summary className="cursor-pointer font-semibold">Which chain?</summary>
            <p className="mt-3 text-white/70">Base Network. Coinbases layer 2 ETH chain. Low gas. Fast transaction speeds.</p>
          </details>
          <details className="card p-5">
            <summary className="cursor-pointer font-semibold">Taxes?</summary>
            <p className="mt-3 text-white/70">Fair launched on ape store with 0/0 taxes. Liquidity burnt.</p>
          </details>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 text-center text-white/60">
        <div className="container-tight">
          <div className="flex items-center justify-center gap-6 text-sm">
            <a href={LINKS.X} target="_blank" rel="noopener noreferrer" className="link">X</a>
            <a href={LINKS.TELEGRAM} target="_blank" rel="noopener noreferrer" className="link">Telegram</a>
            <a href={LINKS.YOUTUBE} target="_blank" rel="noopener noreferrer" className="link">YouTube</a>
          </div>
          <div className="mt-4 flex items-center justify-center gap-3">
            <Image src="/images/footer-seal.png" alt="Community Fan Token • Built on Base" width={48} height={48} className="h-12 w-12" />
            <span className="text-xs">
              © {new Date().getFullYear()} Based Jiff • Fan-made • Built on Base
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
