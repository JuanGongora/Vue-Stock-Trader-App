<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-info">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{ stock.name }}
                    <small>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small>
                </h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input type="number"
                           class="form-control"
                           placeholder="Quantity"
                           v-model.number="quantity"
                    >
                </div>
                <div class="pull-right">
                    <button
                            class="btn"
                            @click="sellStock"
                            :disabled="insufficientQuantity || quantity <= 0 || !Number.isInteger(quantity)"
                            :class="{'btn-danger': insufficientQuantity, 'btn-success': !insufficientQuantity}"
                    >{{ insufficientQuantity ? 'N/A' : 'Sell' }}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        name: "Stock",
        // property shared by the binding from Stocks component
        props: ["stock"],
        data() {
            return {
                quantity: 0
            }
        },
        computed: {
            insufficientQuantity() {
                return this.quantity > this.stock.quantity;
            }
        },
        methods: {
            ...mapActions({
                // aliasing name so that looping call does not occur inside the sellStock method
                placeSellOrder: 'sellStock'
            }),
            sellStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                };
                // can be called since mapActions already created it for us with an alias to prevent same name call loop
                this.placeSellOrder(order);
                this.quantity = 0;
            }
        }
    }
</script>

<style scoped>

</style>
