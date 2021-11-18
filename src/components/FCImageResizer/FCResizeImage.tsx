
import React,{useState,useEffect, useRef} from 'react'

import FCImagePreview from 'components/FCImagePreview/FCImagePreview';

import ReactCrop from 'react-image-crop';

import 'react-image-crop/dist/ReactCrop.css';

import {props,CropImageHook} from "./types";

import {useCropImage} from "./hooks"



const FCImageResizer = (props:props) => {

  

  const{
    cropSize,
    getCroppedImg,
    handleCrop,
    handleCropSize,
    preview,
    imageRef,
    setImage,
    crop
    }:CropImageHook=useCropImage()
  
    const{setImgSrc,rawImage}=props
   
    

    return (
        <div   >
            {

              rawImage && 
              <ReactCrop
              style={{
                maxWidth: "400px",
                maxHeight: "400px"
              }}
              ruleOfThirds
              src={rawImage.toString()} 
              crop={crop} 
              onChange={handleCrop} 
              onImageLoaded={(image) => {
                imageRef.current = image
                setImage(image)
              }}
              onComplete={getCroppedImg}
              />
            }
            <p>Your crop size is {handleCropSize(cropSize.height)} x {handleCropSize(cropSize.width)} </p>
            {preview && 
             <FCImagePreview previewImage={preview}  />
            }
        </div>
    )
}

export default FCImageResizer