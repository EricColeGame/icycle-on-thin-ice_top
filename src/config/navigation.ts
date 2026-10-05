import { BookOpen, History, Layers, Lightbulb, MapPin, MonitorSmartphone, Sparkles, type LucideIcon } from "lucide-react";

export interface NavItem {
  key: string;
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
}

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "levels", path: "/levels", icon: Layers, isContentType: true },
  { key: "locations", path: "/locations", icon: MapPin, isContentType: true },
  { key: "platforms", path: "/platforms", icon: MonitorSmartphone, isContentType: true },
  { key: "features", path: "/features", icon: Sparkles, isContentType: true },
  { key: "history", path: "/history", icon: History, isContentType: true },
  { key: "tips", path: "/tips", icon: Lightbulb, isContentType: true },
] satisfies readonly NavItem[];

export const CONTENT_TYPES: string[] = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
