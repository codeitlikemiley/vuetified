const state = {
    sponsor: App.sponsor
}

const getters = {
    getSponsor: state => state.sponsor
}

const actions = {

    async changeSponsor ({ commit }, form) {
        form.busy = true
        try {
            const payload = await axios.post(route('api.sponsor.update'), form)
            form.busy = false
            commit('setSponsor', payload.sponsor)
            vm.$popup({ message: payload.message, backgroundColor: '#4db6ac', delay: 5, color: '#fffffa' })
        } catch ({errors, message}) {
            form.errors.set(errors)
            form.busy = false
            vm.$popup({ message: message, backgroundColor: '#e57373', delay: 5, color: '#fffffa' })
        }
    }

}

const mutations = {
    setSponsor: (state, payload) => {
        state.sponsor = payload
    }

}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
