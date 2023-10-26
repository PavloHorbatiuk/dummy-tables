export interface TabType {
    id: string;
    title: string;
    order: number;
    path: string;
}

export interface TabTypes {
    tabs: TabType[];
}
