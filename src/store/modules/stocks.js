const state = {
    stocks: []
};

const mutations = {
    // defined in this pattern to assist vue dev tools with mutations
    'SET_STOCKS' (state, stocks) {
        state.stocks = stocks;
    },
    'RND_STOCKS' (state) {

    }
};

const actions = {
    // comes from 'context' but only need the appended commit
    buyStock: ({ commit }, order) => {
        commit();
    },
    setStocks: ({commit}) => {
        commit('SET_STOCKS');
    }
};
