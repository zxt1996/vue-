<template>
  <div>
    <a-affix :offsetBottom="this.bottom">
      <a-button type="primary" @click="changewea">
          <a-icon type="play-circle" v-if="forplay"/>
          <a-icon type="pause-circle" v-if="!forplay"/>
          一键播放
        </a-button>
    </a-affix>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        bottom: 350,
        forplay:true
      };
    },
    methods:{
        changewea(){
            this.forplay = !this.forplay
            this.$emit('wheatherplay',this.forplay);
        }
    }
  };
</script>

<style>
    .ant-affix{
        display: flex !important;
    }
    .ant-btn-primary{
        background-color: #6ed56c !important;
        border: none !important;
        border-radius: 20px !important;
    }

    .ant-btn > .anticon {
        font-size: 18px;
    }
</style>
