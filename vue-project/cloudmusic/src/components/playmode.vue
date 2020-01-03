<template>
    <div class="playmode">
        <div class="playmodeone">
            <span><i class="iconfont icon-xunhuanbofang"></i></span>
            <span><i class="iconfont icon-bofangye-caozuolan-suijibofang"></i></span>
            <span><i class="iconfont icon-danquxunhuan"></i></span>
        </div>
        <div>
            <span><a-icon type="step-backward" /></span>
            <span>
                <a-icon type="play-circle" />
                <a-icon type="pause-circle" />
            </span>
            <span><a-icon type="step-forward" /></span>
        </div>
        <div><a-icon type="menu-unfold" /></div>
    </div>
</template>

<script>
export default {
    methods: {
        // mymode(data){

        // }
    },
}
</script>
<style lang="scss" scoped>
.playmode{
    display: flex;
    justify-content: space-between;
    padding: 5%;
}
</style>