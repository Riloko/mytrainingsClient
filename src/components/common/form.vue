<template>
    <div class="form">
        <div class="form-header">
            <span v-if="struct.greet" class="form-header__text">
                Добро пожаловать!
            </span>
            <span class="form-header__text">
                {{ struct.headerText }}
            </span>
        </div>
        <form class="form-body" :action="struct.URL" :method="struct.method" v-on:submit="sendForm">
            <div class="form-body_inputgroup">
                <div v-for="(input, index) in struct.inputs" :key="index" class="form-body__input">
                    <label :for="input.name">{{ input.title }}</label>
                    <input :type="input.type" v-model="formData[input.name]" :id="input.name" :placeholder="input.placeholder">                                                                         
                </div>                                              
            </div>
            <div class="form-body_linkgroup">
                <router-link v-for="(link, index) in struct.links" :to="link.link" :key="index" class="form-body_linkgroup__link">
                    {{ link.title }}
                </router-link>
            </div>
            <button class="form-body__button" type="submit">{{ struct.buttonText }}</button>                    
        </form> 
    </div>      
</template>

<script>
export default {
    "name": "Form",
    "props": {
        struct: Object
    },
    data() {            
        const inputs = this.struct.inputs;            
        const formData = {}
        inputs.map(input => formData[input.name] = '')                           
        return {formData}            
    },
    "methods": {
        sendForm: function (event) {
            const data = {};
            const props = this.struct;
            const URLbase = "http://localhost:3002";                

            for (let i = 0; i < props.inputs.length; i++ ) {
                data[props.inputs[i].name] = this.formData[props.inputs[i].name]
            }             
            
            event.preventDefault()   
            
            fetch(`${URLbase}${props.URL}`, {
                method: 'POST',
                mode: 'cors', 
                cache: 'no-cache', 
                credentials: 'same-origin', 
                headers: {
                'Content-Type': 'multipart/form-data',
                'Origin': 'http://localhost:8080'                   
                },
                redirect: 'follow', 
                referrerPolicy: 'no-referrer', 
                body: JSON.stringify(data) 
            })
                .then(res => res.json())
                .then(body => {
                    console.log(body)
                    this.$router.push('/dashboard')
                })
                .catch(err => console.log(err))
                
        }
    }
}
</script>