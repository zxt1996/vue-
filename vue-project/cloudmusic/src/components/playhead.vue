<template>
    <div class="playhead">
        <div class="playheadone">
            <div @click="tobefore"><a-icon type="arrow-left" /></div>
            <div>
                <span>{{onlynowsong.name}}</span>
                <span>{{onlynowsong.ar[0].name}}</span>
            </div>
        </div>
        <div><i class="iconfont icon-lianjie"></i></div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    computed: {
        ...mapState([
            'onlynowsong'
        ])
    },
    methods: {
        tobefore(){
            this.$router.go(-1);
        }
    },
}
</script>
<style lang="scss" scoped>
.playhead{
    padding: 5%;
    display: flex;
    justify-content: space-between;
    color: white;
    .playheadone{
        display: flex;
        >div:first-of-type{
            width: 30px;
            margin-right: 10px;
        }
        >div:last-of-type{
            display: flex;
            flex-direction: column;
        }
    }
}
</style>