import {
  ClipboardList,
  FileClock,
  LayoutDashboard,
  Settings,
  ShieldHalf,
} from "lucide-react";

interface MENU {
  name: string;
  route: string;
  label?: string;
  ext: {
    icon: any;
  };
}

/**
 * This data might be backend depending
 * on how configurable it has to be.
 */

export const userMenu: MENU[] = [
  {
    name: "Dashboard",
    route: "/user/dashboard",
    ext: { icon: LayoutDashboard },
  },
  { name: "Requests", route: "/user/jobs", ext: { icon: ClipboardList } },
  { name: "Logs", route: "/user/logs", ext: { icon: FileClock } },
  { name: "Setting", route: "/user/settings", ext: { icon: Settings } },
  { name: "Rank", route: "/user/rank", ext: { icon: ShieldHalf } },
];

export const adminMenu: MENU[] = [];
