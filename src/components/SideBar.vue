<template>
    <div id="wrapper">
        <div id="container">
            <p>申明</p>
            <p>此网站是对南京林业大学马院在线考试平台的拙劣的模仿</p>
            <p>建站的目的只是单纯的先试试Vue框架</p>
            <p>目前支持单选题，后续会支持更多的题型</p>
            <p>目前次项目还存在非常的多的bug，比如说C++题目会显示undefine（具体原因已知，但是还未找到优雅的解决方案）</p>
            <p>此项目已经在github上开源，请在github上搜索onlineTestForNJFU</p>
            <p>如果有任何侵权行为，请联系我删除</p>
            <p>联系方式：547906080@qq.com</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SideBar"
    }
</script>

<style lang="less" scoped>
    #wrapper{
        padding: 10px;
        width: 300px;
        height: 566px;
        background-color: #252431;
        #container{
            color: #FF7E00;
            font-size: 20px;
            p{
                margin-bottom: 10px;
            }
            p:nth-child(1){
                font-size: 30px;
            }
        }
    }
</style>