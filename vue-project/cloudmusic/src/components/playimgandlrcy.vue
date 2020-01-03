<template>
    <div class="imgandlrcy">
        <div>
            <img :src="onlynowsong.al.picUrl">
        </div>
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
}
</script>

<style lang="scss" scoped>
.imgandlrcy{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    >div{
        width: 250px;
        height: 250px;
        >img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
    }
}
</style>