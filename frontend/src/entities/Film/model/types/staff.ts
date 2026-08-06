export interface Staff {
    staffId: number;
    nameRu: string;
    nameEn: string;
    description: string | null;
    posterUrl: string;
    professionText: string;
    professionKey: "ACTOR" | "DIRECTOR" | "PRODUCER" | "WRITER" | "OPERATOR" | "COMPOSER" | "DESIGN" | "EDITOR";
}