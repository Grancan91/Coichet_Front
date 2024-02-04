<template>
    <div id="component-container">
        <div id="form-container">
            <div id="form-header">
                <img src="./../images/CoichetLogo.png" alt="">
                <h2>Sign In</h2>
                <p>Use your email Account</p>
            </div>
    <div id="form-body">
        <label for="email" :class="{ 'active': isEmailFocused || email }">Email Label</label>
        <input name="email" type="text" v-model="email" @focus="isEmailFocused = true" @blur="isEmailFocused = false">
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
            console.log(`Sending ${this.email}`)
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
    width: 20%;
    height: 50%;
    padding: 28px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); 
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
#form-body input{
    height: 48px;
    font-size: large;
    padding: 8px;
    margin-bottom: 18px;
}
#form-body label {
    position: absolute;
    top: 10px; /* Ajusta según sea necesario */
    left: 10px; /* Ajusta según sea necesario */
    padding: 0 5px;
    color: #aaa;
    pointer-events: none;
    transition: top 0.3s, left 0.3s, font-size 0.3s;
}

#form-body input:focus + label, 
#form-body input:not(:placeholder-shown) + label {
    top: -10px; /* Ajusta según sea necesario */
    left: 5px; /* Ajusta según sea necesario */
    font-size: 5.8em;
    color: #333;
}

#form-footer{
    display: flex;
    align-items: baseline;
    justify-content: space-between;
}

img{
    height: 160px;
    width: auto;
}


#next{
    width: 86px;
    height: 32px;
    background-color: #7B8FF4;
    color: white;
    font-weight: 600;
    border-radius: 4px;
    border-color: #7B8FF4;
    border: 0ch;

}

a{
    text-decoration: none;
    color: #7B8FF4;
    font-weight: 600;
}




</style>