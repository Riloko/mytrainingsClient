<template>
    <div>
        <div>Ошибка: {{ error }}</div>
        <div>Описание: {{ desc }}</div>
    </div>
</template>


<script>
export default {
    'name': "error",
    "props": {
        error: String,
        desc: String
    }
}
</script>