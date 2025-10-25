// Centralized environment access (NEXT_PUBLIC_* only)
export const ENV = {
  SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || "https://based-jiff.vercel.app",

  // Contract / chain
  CA: process.env.NEXT_PUBLIC_CONTRACT_CA || "0x0e9d2c3f0d69e0e457b35e4a9e192d8895d120f8",
  CHAIN: process.env.NEXT_PUBLIC_CHAIN_NAME || "Base",

  // Buy / chart
  DEX_BUY: process.env.NEXT_PUBLIC_DEX_BUY || "#",
  CHART: process.env.NEXT_PUBLIC_CHART || "#",

  // Project socials
  X: process.env.NEXT_PUBLIC_X || "#",
  TELEGRAM: process.env.NEXT_PUBLIC_TELEGRAM || "#",

  // Official Jiff links (fallback to your project links if unset)
  JIFF_LINKS: {
    INSTAGRAM:
      process.env.NEXT_PUBLIC_JIFF_INSTAGRAM ||
      process.env.NEXT_PUBLIC_INSTAGRAM ||
      "#",
    TIKTOK:
      process.env.NEXT_PUBLIC_JIFF_TIKTOK ||
      process.env.NEXT_PUBLIC_TIKTOK ||
      "#",
    YOUTUBE:
      process.env.NEXT_PUBLIC_JIFF_YOUTUBE ||
      process.env.NEXT_PUBLIC_YOUTUBE ||
      "#",
    X:
      process.env.NEXT_PUBLIC_JIFF_X ||
      process.env.NEXT_PUBLIC_YOUTUBE || // harmless fallback
      "#",
    TELEGRAM:
      process.env.NEXT_PUBLIC_JIFF_TELEGRAM ||
      process.env.NEXT_PUBLIC_TELEGRAM ||
      "#",
  },

  // Media
  YT_ID: process.env.NEXT_PUBLIC_YT_VIDEO_ID || "",

  // Stats shown on cards
  STATS: {
    INSTAGRAM: process.env.NEXT_PUBLIC_JIFF_IG_COUNT || "9.0M",
    TIKTOK: process.env.NEXT_PUBLIC_JIFF_TT_COUNT || "500K",
    YOUTUBE: process.env.NEXT_PUBLIC_JIFF_YT_COUNT || "280K",
  },
};
