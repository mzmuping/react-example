/**
 * 为Count组件生成action对象
 * 
 */
import { INCREMENT, DECREMENT } from './constant'

//同步action，就是指action的值为object类型的一般对象
export const createInCrementAction = (data) => ({ type: INCREMENT, data });
export const craeteInDecrementAction = (data) => ({ type: DECREMENT, data });

//异步action，就是指action的值为函数
export const createIncrementSyncAction = (data, time) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch({ type: INCREMENT, data })
        }, time || 500)
    }
}
