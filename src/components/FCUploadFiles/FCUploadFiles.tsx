import { Upload } from 'antd';

import { UploadOutlined } from '@ant-design/icons';

import FCButton from 'components/FCButton/FCButton';

import styles from "./FCUploadButton.module.scss"

import { props } from './types';

import {useUploadButton} from './hooks';

const FCUploadFiles = (props: props) => {
  
  const btnprops = useUploadButton(props);


    return (
        <>
        <Upload {...btnprops} showUploadList={false} multiple={false} >
        <FCButton text={"Upload"} styleClassName={styles.button} icon={<UploadOutlined />}/>
        </Upload>
     
    </>
    )
}

export default FCUploadFiles
