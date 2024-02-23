<template>
{{  coichito }}
</template>
<script scoped>
import { defineAsyncComponent } from 'vue'
import { getCoichito } from "../services/coichito_service";

export default {
    data() {
        return {
            coichito: ""

        }
    },
    mounted() {
        const AsyncComp = defineAsyncComponent(() => {
            return new Promise((resolve, reject) => {
                // ...load component from server
                console.log("Hola")
                this.coichito = getCoichito().data
                resolve(/* loaded component */
                this.coichito
                )
            })
        })

    }
}
// ... use `AsyncComp` like a normal component
</script>