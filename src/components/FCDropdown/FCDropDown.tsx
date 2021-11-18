import React from 'react'

import { Typography,Select,Space } from 'antd';

import styles from "./FCDropDown.module.scss"

import {Props} from "./types"

const {Text} =Typography;
const { Option } = Select;

const FCDropDown = (props:Props) => {
    
    const {
     headerText="Random",
     options=[],
     handleChange=(value)=>{
        console.log(value)
     },    
    }=props
 

    return (
        <div>
         <Space direction="vertical" >
            <Text>{headerText}</Text>

            <Select 
             defaultValue={options[0].value} 
             style={{ width: 120 }} 
             onChange={handleChange}
             className={styles.dropDownContainer}
             bordered={false}
          
            >
                {options && 
                 options.length && 
                 options.map((item,index)=>{
                    return(
                        <Option
                         key={item.key} 
                         value={item.value}
                         style={{ width: 120}}
                         >
                             {item.value}
                         </Option>
                    )
                })}
            </Select>
         </Space>   
        </div>
    )
}

export default FCDropDown
