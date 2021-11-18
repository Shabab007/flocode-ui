import { buttonSizeType } from "shared/types/sizes";

import { buttonType } from "shared/types/Types";


export interface Props {
    text:string;
    icon?:JSX.Element;
    loading?:boolean;
    type?: buttonType;
    size?: buttonSizeType;
    handleClick?:()=>void;
    styleClassName?:string|undefined;
 }
