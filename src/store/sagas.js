import {put, takeEvery} from 'redux-saga/effects'
import {initListAction} from "./actonCreator";
import {GET_INIT_LIST} from "./actionTypes";
import axios from 'axios';

function* fetchUser() {
    try {
        const res = yield axios.get('./list.json');
        const action = initListAction(res.data);
        yield put(action);
    } catch (e) {
        console.log('请求失败');
    }
}

function* mySaga() {
    yield takeEvery(GET_INIT_LIST, fetchUser);
}

export default mySaga;