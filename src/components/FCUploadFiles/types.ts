import { UploadChangeParam } from "antd/lib/upload";
import { Dispatch, SetStateAction } from "hoist-non-react-statics/node_modules/@types/react";
// import React from 'react'

export interface props {
    setImageName: Dispatch<SetStateAction<string>>;
    setPreviewImage: Dispatch<SetStateAction<string | ArrayBuffer | null>>;
};

export interface ButtonUploadProps {
    onChange: (info: UploadChangeParam) => void;
      onPreview : (file: object) => void;
};