import {
  IconBuilding,
  IconDashboard,
  IconMessage,
  IconPersons,
  IconProfile,
  IconStar,
} from "@/components/icons";
import {
  TDropdownData,
  TSidebarLink,
  TPropertyStatusData,
} from "@/types/general.types";

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

export const propertyStatusData: TPropertyStatusData[] = [
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

export const typeData: TDropdownData[] = [
  {
    label: "Any type",
    value: "",
  },
  {
    label: "Apartments",
    value: "apartment",
  },
  {
    label: "Houses",
    value: "house",
  },
  {
    label: "Commercial",
    value: "commercial",
  },
  {
    label: "Garages",
    value: "garage",
  },
  {
    label: "Lost",
    value: "lot",
  },
];

export const ITEMS_PER_PAGE = 2;
