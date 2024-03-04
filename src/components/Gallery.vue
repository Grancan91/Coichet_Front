<template>
    <div>
        <Card v-for="coichito in coichitos" key="coichito.id" :coichito="coichito"/>
        <h1>Ponga</h1>
    </div>
</template>
<script setup>

</script>
<style lang="">

h1{
    color: white
}
</style>
