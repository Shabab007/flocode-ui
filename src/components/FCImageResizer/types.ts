import { Dispatch, MutableRefObject, SetStateAction } from "hoist-non-react-statics/node_modules/@types/react";

export interface props{
    
    setImgSrc:(img:string)=>void;
    rawImage:string | ArrayBuffer | null;
}
interface Crop{
    x:number;
    y:number;
    width:number;
    height:number;
  }
export interface CropImageHook{
    cropSize:{height:string,width:string},
    getCroppedImg:()=>void,
    preview:string;
    handleCropSize: (value: string) => number;
    crop:Crop;
    handleCrop:(newCrop: any) => void;
    setImage:Dispatch<SetStateAction<HTMLImageElement | undefined>>;
    imageRef:MutableRefObject<HTMLImageElement | null>;

}