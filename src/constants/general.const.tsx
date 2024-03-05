import {
  IconBuilding,
  IconDashboard,
  IconMessage,
  IconPersons,
  IconProfile,
  IconStar,
} from "@/components/icons";
import { TDropdownData, TSidebarLink } from "@/types/general.types";

export const sidebarLinks: TSidebarLink[] = [
  {
    title: "Dashboard",
    icon: <IconDashboard />,
    path: "/",
  },
  {
    title: "Property",
    icon: <IconBuilding />,
    path: "/property",
  },
  {
    title: "Agent",
    icon: <IconPersons />,
    path: "/agent",
  },
  {
    title: "Review",
    icon: <IconStar />,
    path: "/review",
  },
  {
    title: "Message",
    icon: <IconMessage />,
    path: "/message",
  },
  {
    title: "My Profile",
    icon: <IconProfile />,
    path: "/mt-profile",
  },
];

export const statusData: TDropdownData[] = [
  {
    label: "Any status",
    value: "",
  },
  {
    label: "For sale",
    value: "sale",
  },
  {
    label: "For rent",
    value: "rent",
  },
];
