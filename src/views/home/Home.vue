<template>
    <div class="auth">
        <div class="auth__sidebar">
            <div class="auth__sidebar_logo">
                <router-link to="/login" class="logo">
                    <Logo />
                </router-link>
            </div>
            <div class="auth__sidebar_form">
                <div class="auth__sidebar_form-header">
                    <span class="auth__sidebar_form-header__text">
                        Добро пожаловать!
                    </span>
                    <span class="auth__sidebar_form-header__text">
                        {{ struct.headerText }}
                    </span>
                </div>
                <form class="auth__sidebar_form-body" :action="struct.URL" :method="struct.method" v-on:submit="sendForm">
                    <div class="auth__sidebar_form-body_inputgroup">
                        <div v-for="(input, name, index) in struct.inputs" :key="index" class="auth__sidebar_form-body__input">
                            <label :for="input.name">{{ input.title }}</label>
                            <input :type="input.type" v-model="formData[input.name]" :id="input.name" :placeholder="input.placeholder">                                                                         
                        </div>
                                              
                    </div>
                    <div class="auth__sidebar_form-body_linkgroup">
                        <router-link v-for="(link, index) in struct.links" :to="link.link" :key="index" class="auth__sidebar_form-body_linkgroup__link">
                            {{ link.title }}
                        </router-link>
                    </div>
                    <button class="auth__sidebar_form-body__button" type="submit">{{ struct.buttonText }}</button>                    
                </form>
            </div>

        </div>
        <agile :nav-buttons="false" :autoplay-speed="5000" :speed="3500" fade pause-on-hover pause-on-dots-hover autoplay class="auth__carousel">
            <div v-for="(img, index) in this.carouselData.imgs" :key="index" class="auth__carousel_slide">
                <img  :src="img.link" :alt="img.name" class="auth__carousel_slide-img">
                <div class="auth__carousel_slide-info">
                    <h4 class="auth__carousel_slide-info-header">
                        {{ img.name }}
                    </h4>
                    <p class="auth__carousel_slide-info-subheader">
                        {{ img.description }}
                    </p>
                </div>
            </div>                
        </agile>        
    </div>
</template>

<script>
    import { VueAgile } from 'vue-agile';    

    import '@/assets/sass/home/style.sass';
    import Logo from '@/assets/icons/svg/logo.vue'; 
    import carouselData from '@/constants/home/carouselData.vue';     

    export default {
        name: 'Home',
        components: {
            Logo,
            agile: VueAgile
        },
        props: {
            struct: Object
        },
        data() {            
            const inputs = this.struct.inputs;            
            const formData = {}
            inputs.map(input => formData[input.name] = '')                      
            return {formData, carouselData}            
        },
        methods: {
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
                    .then(body => console.log(body))
                    .catch(err => console.log(err))
                
            }
        }

    }
</script>