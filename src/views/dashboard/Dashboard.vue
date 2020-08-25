<template>
    <div class="dashboard">
        <Header />
        <div class="dashboard-body">
            <Sidebar />
            <Main :view="view"/>
        </div>
    </div>
</template>


<script>
import Header from '@/components/dashboard/header.vue';
import Sidebar from '@/components/dashboard/sidebar.vue';
import Main from '@/components/dashboard/main.vue';



import '@/assets/sass/dashboard/style.sass';

export default {
    "name": "Dashboard",
    "components": {
        Header,
        Sidebar,
        Main
    },
    "props": {
        view: String
    }
}
</script>