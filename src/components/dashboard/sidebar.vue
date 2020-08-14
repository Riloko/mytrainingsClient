<template>
    <div class="sidebar">
        <div class="sidebar__nav">
            <router-link to="/dashboard"  class="sidebar__nav__link">
                <div class="sidebar__nav__link-icon">
                    <trainings />
                </div>
                <span class="sidebar__nav__link-text">
                    Тренировки
                </span>
            </router-link>
            <router-link to="/profile"  class="sidebar__nav__link">
                <div class="sidebar__nav__link-icon">
                    <profile />
                </div>
                <span class="sidebar__nav__link-text">
                    Профиль
                </span>  
            </router-link>            
        </div>
        <div class="sidebar__logo">
            <router-link to="/dashboard"  class="sidebar__logo__link">
                 <logo />
            </router-link> 
        </div>
    </div>
</template>

<script>
// icons
import trainings from '@/assets/icons/svg/trainings.vue';
import profile from '@/assets/icons/svg/profile.vue';
import logo from '@/assets/icons/svg/logo.vue';


export default {
    "name": 'Sidebar',
    "props": {

    },
    components: {
        trainings,
        profile,
        logo
    }
}
</script>