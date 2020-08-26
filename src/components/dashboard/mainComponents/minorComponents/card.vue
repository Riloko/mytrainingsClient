<template>
    <div class="card" :key="struct.id">
        <div class="card-header">
            <h4 class="card-header__text">
                {{ struct.Name }}
            </h4>
        </div>
        <div class="card-body">
            <div class="card-body-description">
                <p class="card-body-description__title">
                    Описание:
                </p>
                <div class="card-body-description-textarea">
                    <span class="card-body-description-textarea__text">
                        {{ struct.Description }}
                    </span>
                </div>
            </div>
            <div class="card-body-section">
                <p class="card-body-section__title">
                    Время: 
                </p>
                <div class="card-body-section__data">
                    {{ struct.Time }} мин
                </div>
            </div>
            <div class="card-body-section">
                <p class="card-body-section__title">
                    Сложность:  
                </p>
                <div class="card-body-section__data card-body-section__difficulty">
                    <Star v-for="(color, index) in difficulty" :iconColor="color" :key="index"/>
                </div>
            </div>
            <div class="card-body-buttons">
                <Button name="К тренировке" v-bind:outlined="true" px="22" py="10" v-on:prop-event="moveToTraining(struct.ID)"/>
                <Button name="..." v-bind:outlined="true" py="10" px="15"/>
            </div>
        </div>
    </div>
</template>

<script>
import Star from '@/assets/icons/svg/star';
import Button from '@/components/common/button';

export default {
    "name": "Card",
    "components": {
        Star,
        Button
    },
    "props": {
        struct: Object
    },
    "data": function () {
        const difficulty = [];
        // const time = Date(this.struct.Time);

        for (let i = 0; i < 5; i++) {
            if (i < this.struct.Difficulty) {
                difficulty.push("#C99E10")
            }
            else {
                difficulty.push("#E3CF89")
            }
        }

        return {
            difficulty
            }
    },
    "methods": {
        moveToTraining (id) {
            this.$router.push(`/dashboard/training/${id}`)
        }
    }
}
</script>