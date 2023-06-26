<template>
    <div class="beer-card">
        <img :src="beer.image_url" :alt="beer.name">
        <h4>{{beer.name}}</h4>
        <p>{{beer.volume.value}} {{beer.volume.unit}}</p>
    </div>
</template>

<script>
export default {
    name: 'BeerCard',
    props: {
        beer:Object
    }
}
</script>

<style lang="scss" scoped>
.beer-card{
    background-color: rgb(232, 232, 113);
    border-radius: 10px;
    text-align: center;
    padding: 30px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img{
    width: 100%;
    height: 250px;
    object-fit: contain;
    }
    .intruso{
        background-color: aliceblue;
    }
}
</style>