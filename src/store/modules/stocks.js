import stocks from '../../data/stocks';

const state = {
    stocks: []
};

const mutations = {
    // defined in this pattern to assist vue dev tools with mutations
    'SET_STOCKS' (state, stocks) {
        state.stocks = stocks;
    },
    'RND_STOCKS' (state) {
        // this will randomize stock value for a day
    }
};

const actions = {
    // comes from 'context' but only need the appended commit
    buyStock: ({ commit }, order) => {
        commit();
    },
    initStocks: ({commit}) => {
        commit('SET_STOCKS', stocks);
    },
    randomizedStocks: ({commit}) => {
        commit('RND_STOCKS');
    }
};

const getters = {
    stocks: state => {
        return state.stocks;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};
