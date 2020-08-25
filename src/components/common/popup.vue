<template>
    <div class="popup">
        <div class="popup-wrapper" v-on:click="closePopup"></div>
        <div class="popup-content">
            <span class="popup-content-closer" v-on:click="closePopup">
                <Cross />
            </span>
            <Form v-bind:struct="struct"/>
        </div>
    </div>
</template>


<script>
import '@/assets/sass/components/popup/popup.sass';

import Form from '@/components/common/form';


import Cross from '@/assets/icons/svg/cross';

export default {
    "name": "popup",
    "props": {
        struct: Object
    },
    "components": {
        Form,
        Cross
    },
    "computed": {
        
    },
    "methods": {
        closePopup () {
            if (confirm('Действительно хотите закрыть окно?')) {
                this.$router.go(-1)
            } else {
                return
            }
        }
    }
}
</script>