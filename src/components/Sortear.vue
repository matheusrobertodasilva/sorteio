<script>
export default {
    methods:{
        sortear(){
            window.location.href = '/contagem'
        }
    }
}
</script>

<template>
    <section class="h-[80vh] flex justify-center items-center">
        <transition class="v-enter-active .v-leave-active" appear>
            <div class="bg-slate-500 p-5 flex flex-col justify-center rounded-xl">
                <h2 class="text-center text-[32px] w-[15vw] my-10">Vamos sortear um vencedor !?</h2>
                <button @click="sortear" class="bg-slate-700 p-3 rounded-xl hover:bg-slate-600 font-bold">Sortear</button>
            </div>
        </transition>
    </section>
</template>

<style>
    

</style>