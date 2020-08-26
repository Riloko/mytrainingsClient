<template>
    <div class="main-wrapper">
        <Trainings v-if="view === 'trainings' || view === 'add_training'" :view="view" :struct="fields"/>
        <TrainingDetails v-if="view === 'training_detailed'" :view="view" :struct="fields" />
    </div>
</template>

<script>
import Trainings from './mainViews/trainings';
import TrainingDetails from './mainViews/trainingDetails';

import fields from '@/constants/dashboard/fields.json';

export default {   
    "name": 'Main',
    "props": {
        view: String
    },
    "components": {
        Trainings,
        TrainingDetails
    },    
    computed: {
        fields () {
            return fields;
        }
    }
}
</script>