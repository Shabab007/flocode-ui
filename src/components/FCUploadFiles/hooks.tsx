import { UploadChangeParam } from 'antd/lib/upload';

import { onUploadPreview, onUploadChange } from './helper';

import { props } from './types';

export const useUploadButton = (props: props) => {
    const onChange = async (info: UploadChangeParam) => {
        await onUploadChange(info, props);
      }
    
    const onPreview = async (file: object) => {
        onUploadPreview(file, props)
        }
    
    return { onChange, onPreview}
};


