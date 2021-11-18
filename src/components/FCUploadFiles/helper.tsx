import { UploadChangeParam } from "antd/lib/upload";

import { getBase64 } from "helper/image/base64";

import { props } from "./types";

export const onUploadChange = async (info: UploadChangeParam, props: props) => {
    const { file, fileList } = info
    if (file.status !== 'uploading') {
      let preview = null;
      props.setImageName(file.name)
      if (!file.url && !preview) {
          await getBase64(file.originFileObj as Blob, props.setPreviewImage)
      }
    }
  };

export const onUploadPreview = async (file: any, props: any) => {

  };

