<template>
    <div class="navbar-container">
            <h1 className="font-great-vibes text-4xl mt-2 p-2">Coichet 4 All</h1>
       <div class="social-container">
        <img src="" alt="">
       </div>
        <div class="log-sign-buttons-container">
            <button className="w-40 h-40 bg-primary text-white font-medium rounded-md border-primary transition-all">Login</button>
            <button>Sign Up</button>

        </div>
    </div>
</template>

<script>
//Investigar dónde colocar las imagenes para poder acceder a ellas.
//public no sirve a priori.
</script>

<style scoped>

.navbar-container{
    display: flex;
    justify-content: space-between;
    width: 100vw;
    background-color: rgb(253, 253, 253);
    color: black;
    border-bottom: 1px;
    border-color: rgba(84, 84, 84, 0.607);
    border-style: solid;

}

h1{
    margin-left: 8rem;
}
.log-sign-buttons-container{
    display: flex;
    align-items: center;
    gap: 16px;
    margin-right: 8rem;
}

button {
    width: 100px;
    height: 36px;
}


</style>
