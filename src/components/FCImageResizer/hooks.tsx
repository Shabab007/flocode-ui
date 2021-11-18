import { useState,useRef } from "react"


export const useCropImage =()=>{
    const [crop, setCrop] = useState(
        { 
            x: 0,
            y: 0,
            width: 100,
            height: 100
          }
    );
    const [image,setImage]=useState<undefined|HTMLImageElement>()
    const [preview,setPreview]=useState("")
    const imageRef = useRef<HTMLImageElement | null>(null)
    const [cropSize,setCropSize]=useState({
      height:"",
      width:""
    })

    const getCroppedImg = () => {
        if(image && crop){
        const canvas = document.createElement("canvas");
        const pixelRatio = window.devicePixelRatio;
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        const ctx = canvas.getContext("2d");
        canvas.width = crop.width * pixelRatio * scaleX;
        canvas.height = crop.height * pixelRatio * scaleY;
        if(ctx){
        ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
        ctx.imageSmoothingQuality = "high";
        ctx.drawImage(
          image,
          crop.x * scaleX,
          crop.y * scaleY,
          crop.width * scaleX,
          crop.height * scaleY,
          0,
          0,
          crop.width * scaleX,
          crop.height * scaleY
        );
        // As Base64 string
         const base64Image = canvas.toDataURL("image/jpeg", 1);
        setPreview(base64Image)
      }
    }
  }
  const handleCrop =(newCrop:any)=>{
    setCropSize({...cropSize,height:newCrop.height,width:newCrop.width})
       setCrop(newCrop)
      
   }
   const handleCropSize =(value:string)=>{
      return parseInt(value);
   }
  return {
      setImage,
      preview,
      imageRef,
      cropSize,
      crop,
      handleCrop,
      handleCropSize,
      getCroppedImg
    }

}