import Vuex from 'vuex'

import defaultState from './state/state'
import mutations from './mutations/mutations'
import getters from './getters/getters'
import actions from './actions/actions'

const isDev = process.env.NODE_ENV === 'development'

export default ()=>{
    const store = new Vuex.Store({
        strict: isDev,
        state: defaultState,
        mutations,
        getters,
        actions
    })
    if(module.hot){
        module.hot.accept([
            './state/state',
            './mutations/mutations',
            './getters/getters',
            './actions/actions'
        ],()=>{
            const newState = require('./state/state').default
            const newMutation = require('./mutations/mutations').default
            const newGetter = require('./getters/getters').default
            const newAction = require('./actions/actions').default
            store.hotUpdate({
                state: newState,
                mutations: newMutation,
                actions: newAction,
                getters: newGetter
            })
        })
    }
    return store
}