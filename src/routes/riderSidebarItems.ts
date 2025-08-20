import Profile from "@/pages/Profile";
import { ISidebarItem } from "@/types";

export const riderSidebarItems: ISidebarItem[] = [
  {
    title: "History",
    items: [
      {
        title: "My Profile",
        url: "/rider/me",
        component: Profile,
      },
    ],
  },
];
