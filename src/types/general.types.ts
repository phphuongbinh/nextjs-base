export type TSidebarLink = {
    title: string,
    icon: JSX.Element,
    path: string
}

export type TDropdownData = {
    value: string;
    label: string
}

export type TPropertyStatusData = Omit<TDropdownData, "value"> & {
    value: "" | "sale" | "rent"
}

export type TPropertyTypeData = Omit<TDropdownData, "value"> & {
    value: "" | "apartment" | "house" | "commercial" | "garage" | "lot"
}


export type TFilter = {
    text?: string;
    status: TPropertyStatusData["value"];
    country?: string;
    type?: TPropertyTypeData["value"];
    state?: string;
}