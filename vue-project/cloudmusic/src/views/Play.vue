<template>
    <div class="plays">
        <div class="palybackimg"
        :style="{backgroundImage: 'url(' + onlynowsong.al.picUrl + ')'}">
        </div>
        <div class="play">
            <Playhead/>
            <Playimgandlrcy/>
            <Slideloader/>
            <Playmode/>
            <!-- <Bottomplay v-if="playsongdata.whetherbottom"/> -->
        </div>
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
            'onlynowsong',
            'playsongdata'
        ])
    },
}
</script>

<style lang="scss" scoped>
.plays{
    position: relative;
    .palybackimg{
        background-repeat: no-repeat;
        background-size: 100% 100%;
        height: 100vh;
    }
    .play{
        height: 100vh;
        width: 100vw;
        background-color: rgba(20, 20, 20, 0.6);
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 0;
        left: 0;
    }
}
</style>