<script setup>
    import Header from './Header.vue';
    import Sortear from './Sortear.vue';
    import Contagem from './Contagem.vue';
    import Resultado from './Resultado.vue';
    import Footer from './Footer.vue';
</script>

<template>
    <Header/>
    <router-view></router-view>
    <Footer/>
</template>