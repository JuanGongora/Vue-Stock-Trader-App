const state = {
    funds: 1000,
    stocks: []
};

const mutations = {
    // pulling data from buyStock()
    'BUY_STOCK' (state, {stockId, quantity, stockPrice}) {
        // check to see if I already own the stock, to increase instead of create
        const record = state.stocks.find(element => element.id === stockId);
        if (record) {
            record.quantity += quantity;
        } else {
            let currentStock = { id: stockId, quantity: quantity };
            state.stocks.push(currentStock);
        }
        state.funds -= stockPrice * quantity;
    },
    'SELL_STOCK' (state, {stockId, quantity, stockPrice}) {
        const record = state.stocks.find(element => element.id == stockId);
        if (record.quantity > quantity) {
            record.quantity -= quantity;
        } else {
            // will only remove one if the user enters more than what's owned
            state.stocks.splice(state.stocks.indexOf(record), 1);
        }
        state.funds += stockPrice * quantity;

    },
    'SET_PORTFOLIO' (state, portfolio) {
        state.funds = portfolio.funds;
        state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
    }
};

const actions = {
    sellStock({commit}, order) {
        commit('SELL_STOCK', order);
    }
};

const getters = {
    stockPortfolio (state, getters) {
        // for each stock object in stocks array
        return state.stocks.map(stock => {
            // using getter from the stocks module to list out stocks in market to those that I own
            const record = getters.stocks.find(element => element.id == stock.id);
            return {
                id: stock.id,
                quantity: stock.quantity,
                // use overall stocks array to get name/price
                name: record.name,
                price: record.price
            }
        });
    },
    funds (state) {
        return state.funds;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}
