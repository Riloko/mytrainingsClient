<template>
    <div class="popup">
        <div class="popup-wrapper" v-on:click="closePopup"></div>
        <div class="popup-content">
            <span class="popup-content-closer" v-on:click="closePopup">
                <Cross />
            </span>
            <slot></slot>
        </div>
    </div>
</template>


<script>
import '@/assets/sass/components/popup/popup.sass';

import Cross from '@/assets/icons/svg/cross';

export default {
    "name": "popup",
    "props": {
    },
    "components": {
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