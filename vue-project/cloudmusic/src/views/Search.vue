<template>
    <div class="search">
        <Searchhead/>
        <router-view></router-view>
    </div>
</template>

<script>
import Searchhead from '@/components/searchhead.vue'
export default {
    components:{
        Searchhead
    }
}
</script>