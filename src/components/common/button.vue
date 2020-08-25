<template>
    <button  :class="className" v-on:click="$emit('prop-event')" :style="`padding: ${py}px ${px}px`">
        {{ name }}
    </button>
</template>

<script>
export default {
    "name": "button",
    "props": {
        name: String,
        py: String,
        px: String,
        outlined: Boolean
    },
    "data": function () {
        const className = this.outlined ? 'btn btn-outlined' : 'btn btn-colored';
        return {
            className
        }
    }
}
</script>
