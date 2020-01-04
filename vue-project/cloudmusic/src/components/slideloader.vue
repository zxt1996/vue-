<template>
    <div class="slideloader">
        <div>00:00</div>
         <div class="loader">
             <a-progress :percent="playsongdata.percenttime" :showInfo="false" />
         </div>
         <div>{{playsongdata.songtime}}</div>
    </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    computed: {
        ...mapState([
            'playsongdata'
        ])
    },
}
</script>
<style lang="scss" scoped>
.slideloader{
    padding: 2% 5%;
    display: flex;
    align-items: center;
    >div{
        font-size: 12px;
    }
    .loader{
        width: 80%;
    }
}
</style>