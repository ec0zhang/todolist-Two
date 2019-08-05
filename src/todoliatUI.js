import React from "react";


import {Input, Button} from 'antd';
import {List, Typography} from 'antd';

const TodolistUI = (props) => {
    return(
        <div style={{margin: '10px 20px'}}>
            <Input
                value={props.inputValue}
                style={{width: '300px', marginRight: '20px'}}
                placeholder="todo Info"
                onChange={props.handleInputChange}
            />
            <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
            <List
                style={{width: '385px', marginTop: '20px'}}
                bordered
                dataSource={props.list}
                renderItem={(item,index) => (
                    <List.Item onClick={()=>{props.handleItemDelete(index)}}>
                        <Typography.Text>{item}</Typography.Text>
                    </List.Item>
                )}
            />
        </div>
    )

};
export default TodolistUI;