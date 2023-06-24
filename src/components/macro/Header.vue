<template>
    <header>
        <div class="navbar">
            <img src="../../assets/img/beer_logo.png" alt="Beer Logo">
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style lang="scss" scoped>
    .navbar{
        background-color: rgb(235, 235, 163);
        height: 100px;
        padding: 10px;
        img{
            height: 100%;
        }
    }
</style>