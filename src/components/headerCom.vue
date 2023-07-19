<template>
  <div>
    <div id="fixed-div" class="c1">
      <div>
        <!-- <img style="margin-top: 10px;" src="../imgs/logo.png" alt=""> -->
        <img style="margin-top: 40px;" src="../imgs/img_1.png" alt="">

      </div>
      <div class="line"></div>
      <el-menu style="width: 100%;"  :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
        background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-menu-item style="width: 11%; font-size: 16px; font-family: Arial, sans-serif;" index="1">
          <strong>HOME</strong>
        </el-menu-item>
        <el-menu-item style="width: 11%;font-size: 16px; font-family: Arial, sans-serif;" index="2">
          <strong>ABOUT US</strong>
        </el-menu-item>
        <el-menu-item ref="shopingInfo" style="width: 11%;font-size: 16px; font-family: Arial, sans-serif;" index="3">
          <strong>PRODUCTS</strong>
        </el-menu-item>
        <!-- <el-menu-item index="4">
          <strong>NEWS</strong>
        </el-menu-item> -->
        <el-menu-item  style="width: 11%;font-size: 16px; font-family: Arial, sans-serif;" index="5">
          <strong>CONTACT US</strong>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: "headerCom",
  data() {
    return {
      activeIndex: '1',
    }
  },
  props:{
    index:{
      default: '0'
    },
    shopDetail:{
      default: 1
    }
  },
  watch:{
    index(){
      // this.activeIndex = this.index
      if(this.index!=3)retrun
      document.getElementById('shopingInfo')
      this.$refs.shopingInfo.$el.click()
      
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.$emit('key', keyPath,this.shopDetail)
    }
  }
}
</script>

<style scoped>
/* .page{
  min-height: 10rem;
} */
#fixed-div {
  position: fixed;
  top: 0px;
  left: 0;
  width: 100%;
  background-color: #f5f5f5;
  /* padding: 20px; */
  box-sizing: border-box;
  border-bottom: 1px solid #ddd;
  z-index: 999;
}

body {
  margin: 0;
  padding-top: 80px;
  /* 留出空间给固定的 div */
}

p {
  margin-top: 50px;
  /* 模拟内容区域 */
}
</style>