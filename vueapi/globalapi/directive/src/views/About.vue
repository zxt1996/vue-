<template>
    <div>
        <div v-hook-demo>{{count}}</div>
        <button @click="addcount">Add</button>
    </div>
</template>

<script>
export default {
    name:'about',
    data:function(){
        return {
            count:0
        }
    },
    methods:{
        addcount(){
            this.count++;
        }
    }
}
</script>