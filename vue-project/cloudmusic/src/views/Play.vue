<template>
    <div class="play">
        <Playhead/>
        <Playimgandlrcy/>
        <Slideloader/>
        <Playmode/>
    </div>
</template>

<script>
import Playhead from '@/components/playhead.vue'
import Playimgandlrcy from '@/components/playimgandlrcy.vue'
import Slideloader from '@/components/slideloader.vue'
import Playmode from '@/components/playmode.vue'

export default {
    components:{
        Playhead,
        Playimgandlrcy,
        Slideloader,
        Playmode
    }
}
</script>

<style lang="scss" scoped>
.play{
    height: 100vh;
    width: 100vw;
    background-color: rgba(107, 8, 2, 0.4);
}
</style>