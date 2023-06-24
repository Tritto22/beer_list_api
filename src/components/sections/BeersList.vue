<template>
    <section>
        <div class="beers-list">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-12 col-md-6 col-lg-3">
                        <BeerCard/>
                    </div>
                                        <div class="col-sm-12 col-md-6 col-lg-3">
                            <BeerCard/>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-3">
                            <BeerCard/>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-3">
                            <BeerCard/>
                        </div>

                </div>
            </div>
        </div>
    </section>
</template>

<script>
import BeerCard from '../commons/BeerCard.vue'
export default {
    name: 'BeersList',
    components: {
        BeerCard
    }
}
</script>

<style lang="scss" scoped>
.beers-list{
    width: 80vw;
    margin: auto;
    padding: 20px;
    border: 2px solid red;
    height: 500px;
}
</style>