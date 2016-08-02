import * as types from '../../constants/ActionTypes'

/*
 * action 创建函数
 */
export function add(name) {
    return {
        type: types.ADD_USER,
        name: name
    }
}

export function edit(id) {
    return {
        type: types.EDIT_USER,
        id: id
    }
}

export function del(id) {
    return {
        type: types.DELETE_USER,
        id: id
    }
}
