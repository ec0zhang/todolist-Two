import React, {Component} from 'react';
import store from "./store";
import 'antd/dist/antd.css';

import {
    getInputChangeAction,
    getAddItemAction,
    getDeleteItemAction,
    getInitList,
    // initListAction,
    // getToDoList
} from './store/actonCreator';

import TodolistUI from "./todoliatUI";

// import axios from 'axios';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = store.getState();
        // console.log(this.state);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);

        store.subscribe(this.handleStoreChange)
    }

    render() {
        return (
            <TodolistUI
                inputValue={this.state.inputValue}
                list={this.state.list}
                handleInputChange={this.handleInputChange}
                handleBtnClick={this.handleBtnClick}
                handleItemDelete={this.handleItemDelete}
            />
        );
    }

    componentDidMount() {
        // 原生的写法
        // axios.get('/list.json').then((res)=>{
        //     const data = res.data;
        //     const action = initListAction(data);
        //     store.dispatch(action);
        //     // console.log(res);
        // })
        // =========== 使用 thunk 的写法 ============
        // const action = getToDoList();
        // store.dispatch(action);
        // =========== 使用 saga 的写法 =============
        const action = getInitList();
        store.dispatch(action);
    }


    handleInputChange(e) {
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);

        // console.log(e.target.value);
    }

    handleStoreChange() {
        this.setState(store.getState());
    }

    handleBtnClick() {
        const action = getAddItemAction();
        store.dispatch(action);
    }


    handleItemDelete(index) {
        // console.log(index);
        const action = getDeleteItemAction(index);
        store.dispatch(action);
    }

}

export default App;
