'use client';

import Image from "next/image";
import { useState, useEffect } from "react";
import { LINKS, CONTRACT_CA, YT_VIDEO_ID } from "./config";
import FloatingPaws from "./components/FloatingPaws";

export default function HomePage() {
  const [open, setOpen] = useState(false);

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
          <a
            href="#"
            className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-base/60 rounded"
          >
            <div className="h-9 w-9 rounded-full bg-base grid place-items-center ring-glow">
              <div className="bg-white h-5 w-5 rounded-full relative">
                <div className="absolute left-[3px] right-[3px] top-1/2 -translate-y-1/2 h-[4px] bg-base rounded" />
              </div>
            </div>
            <span className="font-extrabold tracking-wide">Based Jiff</span>
          </a>

          {/* Desktop */}
          <nav className="hidden sm:flex gap-6 text-sm text-white/80">
            <a href="#token" className="link">Token</a>
            <a href="#how" className="link">How to Buy</a>
            <a href="#about" className="link">About</a>
            <a href="#fan" className="link">Fan Flair</a>
            <a href="#faq" className="link">FAQ</a>
            <a href="#cta" className="btn-base">Buy</a>
          </nav>

          {/* Mobile toggle */}
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

        {/* Mobile drawer */}
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
              <span><b>CA:</b> {CONTRACT_CA}</span>
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
            src="/images/tokenomics-wheel.png"
            alt="Tokenomics wheel"
            width={900}
            height={900}
            className="w-full rounded-xl"
          />
        </figure>
      </section>

      {/* HOW TO BUY */}
      <section id="how" className="container-tight py-12">
        <h2 className="text-3xl md:text-4xl font-extrabold">How to Buy</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="card p-6">
            <Image src="/images/how-wallet.png" alt="Create a wallet" width={160} height={160} className="h-20 w-auto mb-3" />
            <div className="font-semibold">Create a wallet</div>
            <p className="text-sm text-white/70 mt-1">Coinbase Wallet or MetaMask.</p>
          </div>
          <div className="card p-6">
            <Image src="/images/how-bridge.png" alt="Bridge to Base" width={160} height={160} className="h-20 w-auto mb-3" />
            <div className="font-semibold">Bridge to Base</div>
            <p className="text-sm text-white/70 mt-1">Use the official Base bridge.</p>
          </div>
          <div className="card p-6">
            <Image src="/images/how-swap.png" alt="Buy $JIFF" width={160} height={160} className="h-20 w-auto mb-3" />
            <div className="font-semibold">Buy $JIFF</div>
            <p className="text-sm text-white/70 mt-1">Swap on your favorite DEX.</p>
          </div>
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
              <b>Disclaimer:</b> Based Jiff is a community fan token and is not affiliated with the real Jiffpom brand.
              No promises, no expectations—just dogs and fun.
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

        {/* YouTube embed */}
        <div className="mt-6 card p-0 overflow-hidden">
          <div className="w-full" style={{ aspectRatio: "16 / 9" }}>
            <iframe
              src={`https://www.youtube.com/embed/${YT_VIDEO_ID}`}
              title="Jiffpom on YouTube"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>

        {/* Social boxes */}
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <a href={LINKS.INSTAGRAM} target="_blank" rel="noopener noreferrer" className="card p-6 hover:bg-white/10 transition">
            <div className="text-sm text-white/60">Instagram</div>
            <div className="mt-1 font-semibold">Follow Jiffpom</div>
            <p className="mt-2 text-white/70 text-sm">Daily cute drops and reels.</p>
          </a>

          <a href={LINKS.TIKTOK} target="_blank" rel="noopener noreferrer" className="card p-6 hover:bg-white/10 transition">
            <div className="text-sm text-white/60">TikTok</div>
            <div className="mt-1 font-semibold">Viral Tricks</div>
            <p className="mt-2 text-white/70 text-sm">Shorts, tricks, and trends.</p>
          </a>

          <a href={LINKS.YOUTUBE} target="_blank" rel="noopener noreferrer" className="card p-6 hover:bg-white/10 transition">
            <div className="text-sm text-white/60">YouTube</div>
            <div className="mt-1 font-semibold">Classic Jiff</div>
            <p className="mt-2 text-white/70 text-sm">Compilations and throwbacks.</p>
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-4xl mx-auto px-4 py-14">
        <h2 className="text-3xl md:text-4xl font-extrabold">FAQ</h2>
        <div className="mt-6 space-y-4">
          <details className="card p-5">
            <summary className="cursor-pointer font-semibold">Is this official Jiff?</summary>
            <p className="mt-3 text-white/70">No. This is a community fan token. Not affiliated with the real Jiffpom brand.</p>
          </details>
          <details className="card p-5">
            <summary className="cursor-pointer font-semibold">Which chain?</summary>
            <p className="mt-3 text-white/70">Base.</p>
          </details>
          <details className="card p-5">
            <summary className="cursor-pointer font-semibold">Taxes?</summary>
            <p className="mt-3 text-white/70">0/0. Liquidity burned/locked.</p>
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
