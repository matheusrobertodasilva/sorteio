<script>
     export default {
        data(){
            return{
                contador:"5"
            }
        },
        methods:{
            contagemRegressiva(tempo){
                const pararContagem = () => clearInterval(id)
                const contar = () => {
                    if(tempo === 0){
                        pararContagem()
                        window.location.href = "/resultado"
                    } else {
                        console.log(tempo)
                        tempo--
                    }
                    
                    this.contador = tempo
                }
                const id = setInterval(contar, 1000);
            }
        },
        mounted(){
            this.contagemRegressiva(5)
        }
    }
</script>

<template>
    <transition>
        <section class="h-[80vh] flex justify-center items-center">
            <translation class="v-enter-active" appear>
                <div class="bg-slate-500 p-20 rounded-full">
                    <span class="text-[100px]  font-bold m-12">
                        {{contador}}
                    </span>
                </div>
            </translation>
        </section>
    </transition>
</template>

<style>
    .v-enter-active {
        animation: entrada 2s ease-in-out;
    }

    .v-leave-active {
        animation: saida 2s ease-in-out;
    }

    @keyframes entrada {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
    }

    @keyframes saida {
        from {
          opacity: 1;
        }
        to {
          opacity: 0;
        }
    }
</style>