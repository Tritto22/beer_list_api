<template>
    <main>
        <h2>our beers</h2>
        <BeersList/>
    </main>
</template>

<script>
import BeersList from '../sections/BeersList.vue'
export default {
    name: 'Main',
    components: {
        BeersList
    }
}
</script>

<style lang="scss" scoped>
    h2{
        text-transform: uppercase;
        text-align: center;
        padding: 20px;
    }
</style>