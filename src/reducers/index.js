import { combineReducers } from 'redux';

//用户数据部分
import userInfo from './userInfo/index.js'
//请求部分
import apiStatus from './apiStatus/index.js'
//游戏状态
import gameStatus from './gameStatus/index.js'
//下载路径
import download from './download/index.js' 



export default combineReducers({
    userInfo,
    apiStatus,
    gameStatus,
    download,
});