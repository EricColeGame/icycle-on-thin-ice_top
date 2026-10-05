export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Icycle on Thin Ice Wiki",
  shortName: "Icycle on Thin Ice",
  logoText: "I",
  tagline: "Walkthroughs, Levels, Collectibles & Achievements",
  description: "A fan-made Icycle on Thin Ice wiki with level walkthroughs, collectible guides, achievements, and gameplay tips for mastering every frozen challenge.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://icycle-on-thin-ice.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://icycle-on-thin-ice.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://store.steampowered.com/app/658990/Icycle_On_Thin_Ice/",
  heroVideoId: "4sQwgPwHuFM", // Icycle: On Thin Ice PC gameplay walkthrough
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
