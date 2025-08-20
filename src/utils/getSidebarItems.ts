import { role } from "@/constants/role";
import { adminSidebarItems } from "@/routes/adminSidebarItems";
import { riderSidebarItems } from "@/routes/riderSidebarItems";
import { TRole } from "@/types";

export const getSidebarItems = (userRole: TRole) => {
  switch (userRole) {
    case role.SUPER_ADMIN:
      return [...adminSidebarItems];
    case role.ADMIN:
      return [...adminSidebarItems];
    case role.RIDER:
      return [...riderSidebarItems];
    default:
      return [];
  }
};
