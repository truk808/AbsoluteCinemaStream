export interface Trailer {
    total: number;
    items: Item[];
}

export interface Item {
    url:  string;
    name: string;
    site: string;
}
