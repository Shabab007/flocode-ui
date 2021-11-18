export type textType = "text";
export type linkType = "link";
export type ghostType = "ghost";
export type primaryType = "primary";
export type defaultType = "default";
export type dashedType = "dashed";

export interface buttonTypeInterface {
    TEXT: string;
    LINK: string;
    GHOST: string;
    PRIMARY: string;
    DEFAULT: string;
    DASHED: string;
}

export type buttonType = textType  | linkType  | ghostType  | primaryType  | defaultType  | dashedType  | undefined;


