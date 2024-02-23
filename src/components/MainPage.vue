<template>
    <div class="main-container">
        <div class="section-container">
            <section className="flex">
                <img src="./../images/CoichetLogo.png" alt="" className="object-contain h-48 w-48">
                <div className="flex flex-col justify-center">
                    <h2 className="text-2xl font-bold mt-2">Patrones Propios</h2>
                    <p>Soy una artista del crochet especializada en diseño y creación de Amigurumis.</p>
                    <h2 className="text-2xl font-bold mt-2">Encargos Personalizados</h2>
                    <p>Realizo encargos bajo pedido de aquello que más te guste, no dudes en tener tu propio Coichito único en el mundo.</p>
                    <button className="w-40 h-10 mt-4 bg-primary text-white font-medium rounded-md border-primary transition-all">Login</button>
                </div>
            </section>
        </div>
 
    </div>
    <Card v-for="coichito in coichitos" key="coichito.id" :coichito="coichito"/>
</template>


<script setup>
import Card from '../components/Card.vue';
import { onMounted, ref } from 'vue'
import { getCoichitos } from "../services/coichito_service";

const coichitos = ref([])

onMounted(() => {
    const load = async () => {
        const result = await getCoichitos()
        coichitos.value = result 
        console.log(result)
    } 
    load()
})


</script>


<style scoped>

.main-container{
    display: flex;
    width: 100vw;
    justify-content: center;
}

.section-container{
    margin-left: 8rem;
    margin-right: 8rem;
}
</style>