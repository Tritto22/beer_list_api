<template>
    <section>
        <div class="selection d-flex justify-content-center">
            <Select :beers="info"/>
        </div>
        <div class="beers-list">
            <div class="container-fluid">
                <div class="row gy-4">
                    <div 
                    class="col-sm-12 col-md-6 col-lg-3"
                    v-for="(beer,i) in beers" :key="i"
                    >
                        <BeerCard :beer="beer"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import BeerCard from '../commons/BeerCard.vue'
import axios from 'axios'
import Select from '../commons/Select.vue'

export default {
    name: 'BeersList',
    components: {
        BeerCard,
        Select
    },
    data() {
        return{
            beers: null
        }
    },
    created() {
        axios.get('https://api.punkapi.com/v2/beers')
            .then(response => {
                // handle success
                this.beers = response.data
                console.log(this.beers);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }
    
}
</script>

<style lang="scss" scoped>
.beers-list{
    width: 80vw;
    margin: auto;
    padding: 20px;
}
</style>