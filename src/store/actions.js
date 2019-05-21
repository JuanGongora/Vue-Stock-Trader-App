import Vue from 'vue';

export const loadData = ({commit}) => {
    // no need for $http as we are accessing from Vue object itself
    Vue.http.get('data.json')
    // Promise.then is a method callback stack which is available after a promise is resolved
        .then(response => response.json())
        .then(data => {
            if (data) {
                // extracting data sources from database
                const stocks = data.stocks;
                const funds = data.funds;
                const stockPortfolio = data.stockPortfolio;

                const portfolio = {
                    stockPortfolio,
                    funds
                };

                commit('SET_STOCKS', stocks);
                commit('SET_PORTFOLIO', portfolio);
            }
        });
};
