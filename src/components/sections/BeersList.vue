<template>
    <section>
        <div class="selection d-flex justify-content-center">
            <Select @value="selectBeer"/>
        </div>
        <div class="beers-list">
            <div class="container-fluid">
                <div v-if="beers != null" class="row gy-4">
                    <div 
                    class="col-sm-12 col-md-6 col-lg-3"
                    v-for="(beer,i) in beersFiltered" :key="i"
                    >
                        <BeerCard :beer="beer"/>
                    </div>
                </div>
                <div v-else class="d-flex justify-content-center">
                    <div class="loader"></div>
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
            beers: null,
            valueTxt: ''
        }
    },
    created() {
        axios.get('https://api.punkapi.com/v2/beers')
            .then(response => {
                this.beers = response.data
            })
            .catch(function (error) {
                console.log(error);
            })
    },
    methods: {
        selectBeer(payload){
            this.valueTxt = payload;
            console.log(this.valueTxt);
        }
    },
    computed: {
        beersFiltered() {
        /*****la condizione va se non metti il loader altrimenti beers resta null perchè ancora non ha caricato i dati/****/
            // if (this.beers === null) {
            //     return []; // Se this.beers è null, restituisci un array vuoto
            // } 
            const arrayFiltered = this.beers.filter(beer => {
                return beer.tagline.toLowerCase().includes(this.valueTxt.toLocaleLowerCase());
            });
            return arrayFiltered;
        }
    }
    
}
</script>

<style lang="scss" scoped>
.beers-list{
    width: 80vw;
    margin: auto;
    padding: 20px;
}
.loader{
    height: 100px;
    width: 100px;
    border-top: 5px solid red;
    border-radius: 50%;
    animation: loader 3s linear infinite;
}
@keyframes loader {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>