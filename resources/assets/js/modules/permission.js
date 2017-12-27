const state = {
    active: null
}

const getters = {
    getAccess: state => state.active
}

const mutations = {
    changeAccess: (state, payload) => {
        state.active = payload
    },
    addPermission: (state, payload) => {
        if (state.active.indexOf(payload) === -1) {
            state.active.push(payload)
        }
    },
    setExpiration: (state, payload) => {
        state.expires_in = payload
    }
}

// if This will not work we will need to save it in a constant Namespace
export default {
    namespaced: true,
    state,
    getters,
    mutations
}
