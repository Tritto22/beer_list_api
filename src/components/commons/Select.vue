<template>
    <select v-model="selectValue" name="" id="">
        <option value="">tipes of beers</option>
        <option value="bitter">bitter</option>
        <option value="weisse">weisse</option>
        <option value="pilsner">pilsner</option>
        <option value="black">black</option>
        <option value="ipa">red</option>
        <option value="ipa">IPA</option>
        <option value="scotch">scotch</option>
        <option value="wheat">wheat</option>
        <option value="wine">wine</option>
        <option value="whisky">whisky</option>
    </select>
</template>

<script>
export default {
    name: 'Select',
    props: {
        info:Object
    },
    data() {
        return{
            selectValue: ''
        }
    }
}
</script>

<style lang="scss" scoped>
select{
    border: none;
    padding: 10px 15px;
    border-radius: 10px;
    background-color: #5e5b5a;
    color: white;
    cursor: pointer;
    text-transform: capitalize;
}
option{
    border-radius: 10px;
}

</style>