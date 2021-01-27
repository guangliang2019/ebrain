import { combineReducers } from 'redux';

//用户数据部分
import userInfo from './userInfo/index.js'
//请求部分
import apiStatus from './apiStatus/index.js'
//游戏状态
import gameStatus from './gameStatus/index.js'
//浏览器动作
import browser from './browser/index.js'


export default combineReducers({
    userInfo,
    apiStatus,
    gameStatus,
    browser
});