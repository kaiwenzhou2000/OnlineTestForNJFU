<template>
    <div id="wrapper">
        <div id="container" class="middle">
            <div><img src="../assets/Header_images/logo.png" alt=""></div>
            <slot id="nav"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style lang="less" scoped>
    #wrapper{
        width: 100%;
        background-color: #4F005C;
        #container{
            width: 90%;
            display: flex;
            height: 80px;
            font-size: 30px;
            color: #FF7E00;
            line-height: 80px;
            div:nth-child(1){
                margin-right: 160px;
            }
        }
    }
</style>