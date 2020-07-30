<template>
  <div id="app">
    <Header>
      <router-link to="/SingleSelectForMY" class="header_slot">马原</router-link>
      <router-link to="/SingleSelectForMG" class="header_slot">毛概</router-link>
      <router-link to="/SingleSelectForSX" class="header_slot">思修</router-link>
      <router-link to="/SingleSelectForJDS" class="header_slot">近代史</router-link>
      <router-link to="/SingleSelectForCpp" class="header_slot">C++</router-link>
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
  .header_slot{
    margin-right: 80px;
  }
  #main{
    display: flex;
  }
</style>
