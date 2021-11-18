export type smallType = "small";
export type middleType = "middle";
export type largeType = "large";

export interface sizes {
    SMALL: string;
    MIDDLE: string;
    LARGE: string;
}

export type buttonSizeType = smallType | middleType | largeType | undefined;

