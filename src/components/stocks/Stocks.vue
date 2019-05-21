<template>
    <div>
        <h1>The Stocks Component</h1>
        <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
    </div>
</template>

<script>
    import Stock from './Stock.vue'
    export default {
        name: "Stocks",
        components: {
            appStock: Stock
        }
    }
</script>

<style scoped>

</style>
