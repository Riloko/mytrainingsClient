<template>
    <div class="main">
        <Popup v-if="view === 'add_training'">
            <Form v-bind:struct="struct.add_training"/>
        </Popup> 
        <MainHeader>
            <template v-slot:btn>
                <Button name="Добавить тренировку" py="15" px="22" v-bind:outlined="false" v-on:prop-event="openPopup"/>
            </template> 
            <template v-slot:pagging>
                <Pagging :trainingsCount="trainingsCount" :trainingsArr="trainingsArr"/> 
            </template>                       
        </MainHeader>
        <MainBody>
            <Card v-for="training in trainings" v-bind:struct="training" :key="training.id"/>
        </MainBody>
    </div>
</template>


<script>
import MainHeader from '../mainComponents/Header';
import MainBody from '../mainComponents/Body';

import Card from '@/components/dashboard/mainComponents/minorComponents/card';
import Button from '@/components/common/button';
import Pagging from '@/components/common/pagging';

import Popup from '@/components/common/popup';
import Form from '@/components/common/form';


export default {
    "name": "trainings",
    "props": {
        view: String,
        struct: Object
    },
    "components": {
        MainHeader,
        MainBody,
        Card,
        Button,
        Pagging,
        Popup,
        Form
    },    
    computed: {
        trainings () {
            return this.$store.getters.TRAININGS;
        },
        trainingsCount () {            
            return this.$store.getters.TRAININGSCOUNT;
        },
        trainingsPageLimit () {
            return this.$store.getters.TRAININGSPAGELIMITS;
        },
        trainingsArr () {            
            let arr = [];
            for (let i = 0; i < Math.ceil(this.$store.getters.TRAININGSCOUNT / this.$store.getters.TRAININGSPAGELIMITS); i++) {
                arr.push(i + 1)
            } 
            
            return arr
        }
    },
    "methods": { 
        openPopup () {
            this.$router.push('/dashboard/add_trainings')
        }       
    },
    created() {
        this.$store.dispatch('GET_TRAININGS_COUNT');
        this.$store.dispatch('GET_TRAININGS');        
    },
    updated() {
        
    }
}
</script>