<template>
    <section class="h-[70vh] flex justify-center items-center">
        <transition class="v-enter-active .v-leave-active" appear>
            <div class="bg-slate-600 p-5 rounded-lg space-y-10">
                <h1 class="font-bold text-center text-[50px]">Ganhador(a)</h1>
                <div class="space-y-5 rounded-xl border-2 p-3">
                    <p>Inscrições:</p>
                    <p>Nome:</p>
                    <p>Telefone:</p>
                    <p>E-mail:</p>
                </div>
                <div class="flex justify-between items-center">
                    <button @click="sortear" class="font-bold p-3 rounded-lg bg-slate-500 hover:duration-150 hover:bg-slate-900">Sortear proximo</button>
                    <button @click="inicio" class="font-bold p-3 rounded-lg bg-slate-500 hover:duration-150 hover:bg-slate-900">Início</button>
                </div>
            </div>
        </transition>
    </section>
</template>

<script>
export default {
    methods:{
        sortear(){
            window.location.href = '/contagem'
        },
        inicio(){
            window.location.href = '/';
        }
    }
}
</script>