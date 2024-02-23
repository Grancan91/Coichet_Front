<template>
    <div class="border-solid border-2 border-primary w-64 h-80 flex-wrap">
        <h1>{{ props.coichito.name }}</h1>
        <h2>{{ props.coichito.price }}</h2>
        <p> {{ props.coichito.id }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps(['coichito'])



</script>
