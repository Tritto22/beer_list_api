<template>
    <div class="beer-card">
        <img src="https://images.punkapi.com/v2/keg.png" alt="">
        <h4>Buzz</h4>
        <p>20 litres</p>
    </div>
</template>

<script>
export default {
    name: 'BeerCard'
}
</script>

<style lang="scss" scoped>
.beer-card{
    text-align: center;
    img{
    width: 100%;
    height: 400px;
    object-fit: contain;
    }
}
</style>