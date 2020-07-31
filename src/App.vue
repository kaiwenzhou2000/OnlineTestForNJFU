<template>
  <div id="app">
    <Header>
      <div class="nav">
        <router-link to="/SingleSelectForMY" class="header_slot">马原</router-link>
        <router-link to="/SingleSelectForMG" class="header_slot">毛概</router-link>
        <router-link to="/SingleSelectForSX" class="header_slot">思修</router-link>
        <router-link to="/SingleSelectForJDS" class="header_slot">近代史</router-link>
        <router-link to="/SingleSelectForCpp" class="header_slot">C++</router-link>
      </div>
    </Header>

    <div id="main">
      <SideBar></SideBar>
      <router-view></router-view>
    </div>
  </div>

</template>

<script>
  import Header from "./components/Header"
  import SideBar from "./components/SideBar"
  export default {
    name: "App",
    components: {
      Header,
      SideBar,
    }
  }

  // 百度分析
  var _hmt = _hmt || [];
  (function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?e37b95508b2d8e1e40993208fe34635b";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
  })();

</script>

<style lang="less">
@import "css/reset.css";
@import "css/base.css";
  a{
    text-decoration-line: none;
    color: #FFF;
  }
  .router-link-active{
    color: #FF7E00;
  }
  .nav{
    display: flex;
    width: 900px;
    justify-content: space-around;
    .header_slot{
    }
  }
  #main{
    display: flex;
  }
</style>
