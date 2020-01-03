<template>
    <div class="slideloader">
        <div>00:00</div>
         <div class="loader">
             <a-slider :defaultValue="30"/>
         </div>
         <div>00:00</div>
    </div>
</template>

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