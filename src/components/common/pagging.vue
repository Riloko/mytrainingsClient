<template>
    <div class="main-header-pagging-body">
        <div class="main-header-pagging-body-info">
            <p class="main-header-pagging-body-info__text">
                Всего тренировок: <span class="main-header-pagging-body-info__text-count">{{ trainingsCount }}</span>
            </p>
            <p class="main-header-pagging-body-info__text">
                Тренировок на странице: 
                <select class="main-header-pagging-body-info__text-count"  v-on:change="onTrainingsLimitChange($event.target.value)">
                    <option v-for="(item, index) in limitsArr" :key="index" :value="item" >{{ item }}</option>
                </select>
            </p>
            
        </div>    
        <div class="main-header-pagging-body-buttons">
            <Button v-for="(page, index)  in trainingsArr" :key="index" :name="page.toString()" py="10" px="15" v-bind:outlined="true" v-on:prop-event="changePage(page)" />
        </div>
    </div>
</template>


<script>
import Button from '@/components/common/button';

export default {
    "name": "pagging",
    "props": {
        trainingsCount: Number,
        trainingsArr: Array
    },
    "components": {
        Button
    },
    computed: {
        limitsArr () {
            return this.$store.getters.LIMITSARR;
        }
    },
    "methods": {
        async onTrainingsLimitChange (value) {
            this.$store.dispatch('UPDATE_TRAININGS_PAGE_LIMITS', parseInt(value));
            this.$store.dispatch('GET_TRAININGS');
        },
        changePage (value) {
            this.$store.dispatch('GET_TRAININGS', value)
        }
    },
    mounted () {
       
    }
}
</script>