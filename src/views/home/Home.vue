<template>
    <div class="auth">
        <div class="auth__sidebar">
            <div class="auth__sidebar_logo">
                <router-link to="/login" class="logo">
                    <Logo />
                </router-link>
            </div>
            <Form v-bind:struct="struct"/>
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
    import Form from '../../components/common/form';

    export default {
        name: 'Home',
        components: {
            Logo,
            agile: VueAgile,
            Form
        },
        props: {
            struct: Object
        },
        data() {                           
            return {carouselData}            
        }
    }
</script>