<template>
    <div class="border-solid border-2 border-primary w-64 h-80 flex-wrap rounded-lg p-4">
        <h1 class="text-lg text-center mb-2">{{ props.coichito.name }}</h1>
        <div :style="{ backgroundImage: 'url(' + imageUrl + ')'}"
        className="bg-contain bg-no-repeat h-48 rounded-md"></div>
        <div class="flex justify-between">
            <h2>Categoría</h2>
            <h2>{{ props.coichito.price }}</h2>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

import imageUrl from '../../public/Screenshot_2024-01-28_at_13.18.50-transformed.png'
const props = defineProps(['coichito'])



</script>
