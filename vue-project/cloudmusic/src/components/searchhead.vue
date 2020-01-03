<template>
    <div class="searchhead">
        <div class="mysearchhead">
            <div @click="backbefore"><i class="iconfont icon-Leftslide_A_px"></i></div>
            <div>
                <a-input-search
                placeholder="input search text"
                style="width: 200px"
                v-model="mydata"
               @search="onSearch()" />
            </div>
            <div><i class="iconfont icon-haoyou"></i></div>
        </div>
    </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'

export default {
    data() {
        return {
            mydata:null
        }
    },
    computed: {
        ...mapState([
            'search'
        ])
    },
    methods: {
        ...mapMutations([
            'changesearch'
        ]),
      onSearch() {
        window.console.log(this.mydata);
        this.changesearch(this.mydata);
        this.mydata = null;
        this.$router.push('/search/searchresult');
      },
      backbefore(){
          this.$router.go(-1);
      }
    },
}
</script>
<style lang="scss" scoped>
.searchhead{
    .mysearchhead{
        padding-top: 5%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 5%;
        >div{
            >i{
                font-size: 30px;
            }
        }
    }
}
</style>