import React,{useState, Dispatch, SetStateAction }  from 'react';

import { Typography, Space,Image } from 'antd';

import {UploadOutlined,DeleteFilled} from "@ant-design/icons";

import FCUploadFiles from 'components/FCUploadFiles';

import FCButton from 'components/FCButton';

import { PRIMARY } from 'shared/constants/buttonTypes';

import { LARGE } from 'shared/constants/buttonSizes';

import { Props } from 'components/FCButton/types';

import FCImageResizer from 'components/FCImageResizer';

import styles from "./FCFileUploader.module.scss";

import {props} from "./types";



const { Text } = Typography;


const FCFileUploader = (props: props) => {
    const { titleText="Side rail image",
            bottomText="Please upload an image with 474 X 817px and max 5MB",
            resize=false,
          } = props;
    const ResizeButtonProps:Props = {
        text: props.buttonText,
        type: PRIMARY,
        size: LARGE,
    }
    const [imageName,setImageName]=useState("")
    let previewImage: string | ArrayBuffer | null;
    
    let setPreviewImage: Dispatch<SetStateAction<string | ArrayBuffer | null>>;
    
    [previewImage, setPreviewImage] = useState<string | ArrayBuffer | null>('')
    
    const handleDeleteImage =()=>{
        setImageName("")
        setPreviewImage("")
    }
    return (
        <div className={styles.formMain}>
            <Space direction="vertical" >
                <Text>{titleText} </Text>
           <div className={styles.formContainer}>
               <div className={styles.formPlaceholder}>
               <Space direction="horizontal" align="end" size="small">
               <UploadOutlined /> 
                  <Text  type="secondary"> {imageName? imageName:"Upload an Image"} </Text>  
               </Space>
                {imageName &&
                 <DeleteFilled style={{color:"red"}} onClick={handleDeleteImage}/>
                }
               </div>
            <FCUploadFiles
             setImageName={setImageName}
             setPreviewImage={setPreviewImage}
            />
           </div>
           <Text 
            style={{color:"grey"}}
           >
               {bottomText}</Text> 
           {previewImage && resize &&
            <Space direction="horizontal" align="center" size="large">
              <FCImageResizer
                setImgSrc={setPreviewImage}
                rawImage={previewImage}
              />
           </Space>
           }    
           </Space>
        </div>
    )
};

export default FCFileUploader;
