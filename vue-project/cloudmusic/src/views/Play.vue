<template>
    <div class="play">
        <Playhead/>
        <Playimgandlrcy/>
        <Slideloader/>
        <Playmode/>
        <!-- <Bottomplay v-if="playsongdata.whetherbottom"/> -->
    </div>
</template>

<script>
import Playhead from '@/components/playhead.vue'
import Playimgandlrcy from '@/components/playimgandlrcy.vue'
import Slideloader from '@/components/slideloader.vue'
import Playmode from '@/components/playmode.vue'
import {mapState} from 'vuex'
// import Bottomplay from '@/components/bottomplay.vue'

export default {
    components:{
        Playhead,
        Playimgandlrcy,
        Slideloader,
        Playmode,
        // Bottomplay
    },
    computed: {
        ...mapState([
            'playsongdata'
        ])
    },
}
</script>

<style lang="scss" scoped>
.play{
    height: 100vh;
    width: 100vw;
    background-color: rgba(107, 8, 2, 0.4);
    display: flex;
    flex-direction: column;
}
</style>