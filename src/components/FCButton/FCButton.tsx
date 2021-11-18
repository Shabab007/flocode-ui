import React from 'react';

import { Button } from 'antd';

import {Props} from "./types";

const FCButton = (props: Props) => {
    const {
        text="Random",
        icon,
        loading,
        type,
        size,
        handleClick,
        styleClassName
    }=props;
    return (
        <Button 
         style={{width:"6rem",height:"3rem", margin:"auto"}}
         type={type} 
         loading={loading} 
         size={size?size:"small"} 
         icon={icon && icon}
         onClick={handleClick}
         className={styleClassName}
         >
         {text}
      </Button>
    )
}

export default FCButton
