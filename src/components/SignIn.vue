<template>
    <div id="component-container">
        <div id="form-container">
            <div id="form-header">
                <img src="./../images/CoichetLogo.png" alt="">
                <h2>Sign In</h2>
                <p>Use your email Account</p>
            </div>
    <div id="form-body">
        <label for="email" :class="{ 'active': isEmailFocused || email }">Email</label>
        <input name="email" :class="{ 'active': isEmailFocused || email }" type="text" v-model="email" @focus="isEmailFocused = true" @blur="isEmailFocused = false">
        <a href="">Forgot password?</a>
    </div>

            <div id="form-footer">
                <a href="">Create Account</a>
                <button id="next" @click="sendEmail">Next</button>
            </div>
        </div>
    </div>
</template>


<script scoped>
export default {
    el: '#component-container',
    data() {
        return {
            email: '',
            isEmailFocused: false
        };
    },
    methods: {
        sendEmail() {
            console.log(`Sending ${this.isEmailFocused}`)
        }
    }
};
</script>


<style scoped>

#component-container{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
}

#form-container{
    width: 380px;
    padding: 28px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); 
}

#form-header{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
}

#form-body{
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 16px;
    margin-bottom: 36px;
}

input{
    height: 48px;
    font-size: 12px;
    color: #3e3e3e;
    padding: 8px;
    margin-bottom: 18px;
    border-radius: 4px;
    border-top: 1px #a2a2a3 solid ;
    border-right:1px #a2a2a3 solid;
    border-bottom: 1px #a2a2a3 solid ;
    border-left: 1px #a2a2a3 solid ;
}

input.active{
    border-radius: 4px;
    border-top: 1px #7B8FF4 solid ;
    border-right:1px #7B8FF4 solid;
    border-bottom: 1px #7B8FF4 solid ;
    border-left: 1px #7B8FF4 solid ;
    color: #706f6f;
}

input:-webkit-autofill {
    background-color: #7b8ff4aa; /* Cambiar el color de fondo */
    color: #b50f0f; /* Cambiar el color del texto */
}

label {
    position: absolute;
    top: 10px; /* Ajusta según sea necesario */
    left: 10px; /* Ajusta según sea necesario */
    padding: 0 5px;
    color: #aaa;
    pointer-events: none;
    transition: top 0.3s, left 0.3s, font-size 0.3s;
}


.active {
    color: #7B8FF4;
    font-weight: 600;
    top: -10px;
    left: 10px; 
    background-color: white;
    transition: top 0.3s, left 0.3s, font-size 0.3s; 
}

#form-footer{
    display: flex;
    align-items:center;
    justify-content: space-between;
}

img{
    height: 160px;
    width: auto;
}

button{
    width: 86px;
    height: 32px;
    background-color: #7B8FF4;
    color: white;
    font-weight: 600;
    border-radius: 4px;
    border-color: #7B8FF4;
    border: 0ch;
    transition:background-color 0.3s, font-size 0.3s; 
}

a{
    text-decoration: none;
    color: #7B8FF4;
    font-weight: 600;
    width: fit-content;
}


button:hover{
    background-color: white;
    border: 1px #7B8FF4 solid;
    color: #7B8FF4;
    font-size: 15px;
    transition:background-color 0.5s, font-size 0.5s; 
}


@media (max-width: 612px) {

    #component-container{
    align-items: start;
    }

    #form-container{
        width: 100%;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.0); 
    }

}


</style>