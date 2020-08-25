<template>
    <Trainings v-if="view === 'trainings' || view === 'add_trainings'" :view="view" :struct="fields"/>
</template>

<script>
import Trainings from './mainViews/trainings';

import fields from '@/constants/dashboard/fields.json';

export default {   
    "name": 'Main',
    "props": {
        view: String
    },
    "components": {
        Trainings
    },    
    computed: {
        fields () {
            return fields;
        }
    }
}
</script>