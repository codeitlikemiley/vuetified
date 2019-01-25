const state = {
  access: ""
};

const getters = {
  getAccess: state => state.access
};

const mutations = {
  changeAccess: (state, payload) => {
    state.access = payload;
  }
};

// if This will not work we will need to save it in a constant Namespace
export default {
  namespaced: true,
  state,
  getters,
  mutations
};
