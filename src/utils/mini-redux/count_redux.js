import { INCREMENT, DECREMENT } from './constant'
const initDefault = 0;
function count_redux(state = initDefault, action) {
    const { type, data } = action
    switch (type) {
        case INCREMENT:
            return state + (data || 1);
        case DECREMENT:
            return state - (data || 1);
        default:
            return state
    }
}

export default count_redux