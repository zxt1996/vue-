<template>
    <div class="search">
        <el-dropdown trigger="click">
            <el-button type="primary">
                {{changeclass}}<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                 v-for="(myclass,index) in searchclass"
                 :key="index"
                 @click.native="forclass(index)"
                 >{{myclass}}</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        <div class="searchtarget">
            <input type="text" placeholder="输入关键词搜索">
        </div>
    </div>
</template>

<script>
  export default {
    data(){
        return{
            searchclass:['全部图片','摄影图','矢量图','新闻','专辑'],
            changeclass:'全部图片'
        }
    },
    methods: {
      handleClick() {
        alert('button click');
      },
      forclass(data){
          this.changeclass = this.searchclass[data];
      }
    }
  }
</script>

<style lang="scss">
.search{
      display: flex;
      border: 1px solid gray;
      width: 800px;
      height: 70px;
      .searchtarget{
          line-height: 1;
          width: 380px;
          input{
              height: 90%;
              width: 100%;
              border: none;
              text-decoration: none;
              outline: none;
          }
      }
  }
  .el-dropdown {
    vertical-align: top;
  }
  .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .el-button--primary {
      background-color: white !important;
      color: black !important;
      border: none !important;
      height: 100% !important;
      width: 140px !important;
  }
  
</style>

