import { createStore } from 'redux'

const JudgDate = {
    data: [{ judgment: 'start', date: new Date() }]
}

export function flagReducer(state = JudgDate, action) {
    switch (action.type) {
        case '●':
            return writeReducer(state, action)

        case '×':
            return writeReducer(state, action)

        default:
            return state
    }
}

function writeReducer(state, action) {
    let unshiftData = {
        judgment: action.type,
        date: new Date()
    }
    let newdata = state.data.slice()
    newdata.unshift(unshiftData)
    return {
        data: newdata
    }
}


export function maruAction(judg){
    return{
        type: '●',
    }
}
export function batuAction(judg){
    return{
        type: '×',
    }
}

export default createStore(flagReducer)