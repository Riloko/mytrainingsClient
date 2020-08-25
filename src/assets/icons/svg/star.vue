
<template>
    <svg width="13" height="14" viewBox="0 0 13 14" :fill="iconColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.5 0L8.02824 5.07295L12.6819 5.18237L8.97275 8.42705L10.3206 13.5676L6.5 10.5L2.6794 13.5676L4.02725 8.42705L0.318133 5.18237L4.97176 5.07295L6.5 0Z" :fill="iconColor"/>
    </svg>
</template>


<script>
export default {
    props: {
        iconColor: {
            type: String,
            default: 'currentColor'
        }
    }
}
</script>