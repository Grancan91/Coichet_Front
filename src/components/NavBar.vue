<template>
    <div class="navbar-container">
       <h1>Coichet 4 All</h1>
       <div class="social-container">
        <img src="" alt="">
       </div>
        <div class="log-sign-buttons-container">
            <button>Login</button>
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
    padding: 20px;
}

h1{
    margin-left: 8rem;
}
.log-sign-buttons-container{
    display: flex;
    align-items: center;
    gap: 16px;
    margin-right: 2rem;
}

button {
    width: 100px;
    height: 36px;
}


</style>
