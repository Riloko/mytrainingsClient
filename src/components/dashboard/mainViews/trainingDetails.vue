<template>
    <div class="main">
        <Popup v-if="view === 'update_training'">
            <Form v-bind:struct="struct.update_training"/>
        </Popup> 
        <MainHeader>
            <template v-slot:btn>
                <Button name="Начать занятие" py="15" px="22" v-bind:outlined="false" v-on:prop-event="openPopup"/>
                <Button name="Редактировать" py="15" px="22" v-bind:outlined="false" v-on:prop-event="openPopup"/>
                <Button name="Назад" py="15" px="22" v-bind:outlined="false" v-on:prop-event="returnToDashboard"/>
            </template> 
            <template v-slot:pagging>
                <Pagging :trainingsCount="exercisesCount" /> 
            </template>                       
        </MainHeader>
        <MainBody>
            <Card v-for="exercise in exercises" v-bind:struct="exercise" :key="exercise.ID"/>
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
    "name": "trainingDetail",
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
        exercises () {
            return this.$store.getters.EXERCISES;
        },
        exercisesCount () {            
            return this.$store.getters.EXERCISESCOUNT;
        },
        exercisesPageLimit () {
            return this.$store.getters.EXERCISESPAGELIMITS;
        }
        // exercisesArr () {            
        //     let arr = [];
        //     for (let i = 0; i < Math.ceil(this.$store.getters.TRAININGSCOUNT / this.$store.getters.TRAININGSPAGELIMITS); i++) {
        //         arr.push(i + 1)
        //     } 
            
        //     return arr
        // }
    },
    "methods": { 
        openPopup () {
            this.$router.push('/dashboard/add_trainings');
        },
        returnToDashboard () {
            this.$router.push('/dashboard');
        }     
    },
    mounted() {
        this.$store.dispatch('GET_EXERCISES', parseInt(this.$route.params.id)); 
    },
    destroyed(){
        this.$store.dispatch('CLEAR_EXERCISES');
    },
    updated() {
        
    }
}
</script>