<template>
    <div>
        <h1>The Portfolio Component</h1>
        <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import Stock from './Stock.vue';

    export default {
        name: "Portfolio",
        computed: {
            ...mapGetters({
                // alias for getter from modules portfolio
                stocks: 'stockPortfolio'
            })
        },
        components: {
            appStock: Stock
        }
    }
</script>

<style scoped>

</style>
