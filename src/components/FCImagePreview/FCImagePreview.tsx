import React from 'react'

import {Image} from "antd"

interface imagePreviewProps{
  previewImage?:string;
  width?:number;
}

const FCImagePreview = (props:imagePreviewProps) => {
    const {previewImage,width}=props;
    return (
        <div>
        <img 
        style={{ maxWidth: '100%' }}
             width={width}
             src={previewImage}
        />
        </div>
    )
}

export default FCImagePreview
