<template>
  <div style="position: relative;min-height: 600px;">
    <div id="upper"></div>
    <div style="margin-left: 15em">
      <detailInfo :infoId="index" />
    </div>
    <div style="position: absolute;top: 0px;">
      <div :style="'display:' + isShow"
        style="position: fixed;bottom: 100px;right: 100px;width: 10em;height: 3em;text-align: center;padding-top: 1em;transform: translate(40px, 40px);">
        <div @click="goUpper">
          <i class="el-icon-caret-top" style="font-size: 2em;"></i>
          <div style="font-size: 1em; font-weight: bold; text-align: center;">Top</div>
        </div>
      </div>
      <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
        :collapse="isCollapse">
        <el-submenu index="1">
          <template slot="title">
            <span slot="title" style="font-size: 16px;"><strong>Bicycle Handlebar</strong></span>
          </template>
          <el-menu-item-group class="el-group-item">
            <el-menu-item style="font-size: 16px;" index="1-1" @click="changePage('0')">Gravel-HB-200</el-menu-item>
            <el-menu-item style="font-size: 16px;" index="1-2" @click="changePage('1')">HB-002-004</el-menu-item>
            <el-menu-item style="font-size: 16px;" index="1-3" @click="changePage('2')">HB-012</el-menu-item>
            <el-menu-item style="font-size: 16px;" index="1-4" @click="changePage('3')">HB-6000</el-menu-item>
            <el-menu-item style="font-size: 16px;" index="1-5" @click="changePage('4')">TT-HB-008</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <span slot="title" style="font-size: 16px;"><strong>Bicycle Parts</strong></span>
          </template>
          <el-menu-item-group class="el-group-item">
            <el-menu-item style="font-size: 16px;" index="2-1" @click="changePage('5')">SP-100</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <span slot="title" style="font-size: 16px;"><strong>Gravel Fork</strong></span>
          </template>
          <el-menu-item-group class="el-group-item">
            <el-menu-item style="font-size: 16px;" index="3-1" @click="changePage('6')">GRAVEL-FK-270</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <span slot="title" style="font-size: 16px;"><strong>Road Fork</strong></span>
          </template>
          <el-menu-item-group class="el-group-item">
            <el-menu-item style="font-size: 16px;" index="4-1" @click="changePage('7')">RF-010</el-menu-item>
            <el-menu-item style="font-size: 16px;" index="4-2" @click="changePage('8')">RF-016</el-menu-item>
            <el-menu-item style="font-size: 16px;" index="4-3" @click="changePage('9')">RF-018</el-menu-item>
            <el-menu-item style="font-size: 16px;" index="4-4" @click="changePage('10')">RF-020</el-menu-item>
            <el-menu-item style="font-size: 16px;" index="4-5" @click="changePage('11')">FK-078</el-menu-item>
            <el-menu-item style="font-size: 16px;" index="4-6" @click="changePage('12')">RF-230</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="5">
          <template slot="title">
            <span slot="title" style="font-size: 16px;"><strong>MTB Fork</strong></span>
          </template>
          <el-menu-item-group class="el-group-item">
            <el-menu-item style="font-size: 16px;" index="5-1" @click="changePage('13')">MF-002</el-menu-item>
            <el-menu-item style="font-size: 16px;" index="5-2" @click="changePage('14')">MF-008</el-menu-item>
            <el-menu-item style="font-size: 16px;" index="5-3" @click="changePage('15')">FK-028</el-menu-item>
            <el-menu-item style="font-size: 16px;" index="5-4" @click="changePage('16')">FK-048/068</el-menu-item>
            <el-menu-item style="font-size: 16px;" index="5-5" @click="changePage('17')">FK-036</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="6">
          <template slot="title">
            <span slot="title" style="font-size: 16px;"><strong>Road Frame</strong></span>
          </template>
          <el-menu-item-group class="el-group-item">
            <el-menu-item style="font-size: 16px;" index="6-1" @click="changePage('18')">ROAD-002</el-menu-item>
            <el-menu-item style="font-size: 16px;" index="6-2" @click="changePage('19')">ROAD-070</el-menu-item>
            <el-menu-item style="font-size: 16px;" index="6-3" @click="changePage('20')">ROAD-150</el-menu-item>
            <el-menu-item style="font-size: 16px;" index="6-4" @click="changePage('21')">ROAD-230</el-menu-item>
            <el-menu-item style="font-size: 16px;" index="6-5" @click="changePage('22')">ROAD-250</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="7">
          <template slot="title">
            <span slot="title" style="font-size: 16px;"><strong>MTB Frame</strong></span>
          </template>
          <el-menu-item-group class="el-group-item">
            <el-menu-item style="font-size: 16px;" index="7-1" @click="changePage('23')">MTB-002</el-menu-item>
            <el-menu-item style="font-size: 16px;" index="7-2" @click="changePage('24')">MTB-030</el-menu-item>
            <el-menu-item style="font-size: 16px;" index="7-3" @click="changePage('25')">MTB-072</el-menu-item>
            <el-menu-item style="font-size: 16px;" index="7-4" @click="changePage('26')">MTB-092</el-menu-item>
            <el-menu-item style="font-size: 16px;" index="7-5" @click="changePage('27')">MTB-154</el-menu-item>
            <el-menu-item style="font-size: 16px;" index="7-6" @click="changePage('28')">MTB-174</el-menu-item>
            <el-menu-item style="font-size: 16px;" index="7-7" @click="changePage('29')">MTB-194</el-menu-item>
            <el-menu-item style="font-size: 16px;" index="7-8" @click="changePage('30')">MTB-214</el-menu-item>
            <el-menu-item style="font-size: 16px;" index="7-9" @click="changePage('31')">MTB-234</el-menu-item>
            <el-menu-item style="font-size: 16px;" index="7-10" @click="changePage('32')">MTB-254</el-menu-item>
            <el-menu-item style="font-size: 16px;" index="7-11" @click="changePage('33')">MTB-274</el-menu-item>
            <el-menu-item style="font-size: 16px;" index="7-12" @click="changePage('34')">MTB-294</el-menu-item>
            <el-menu-item style="font-size: 16px;" index="7-13" @click="changePage('35')">MTB-156</el-menu-item>
            <el-menu-item style="font-size: 16px;" index="7-14" @click="changePage('36')">MTB-SD24</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="8">
          <template slot="title">
            <span slot="title" style="font-size: 16px;"><strong>Gravel Frame</strong></span>
          </template>
          <el-menu-item-group class="el-group-item">
            <el-menu-item style="font-size: 16px;" index="8-1" @click="changePage('37')">GRAVEL-270</el-menu-item>
            <el-menu-item style="font-size: 16px;" index="8-2" @click="changePage('38')">GRAVEL-078</el-menu-item>

          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="9">
          <template slot="title">
            <span slot="title" style="font-size: 16px;"><strong>Track Frame</strong></span>
          </template>
          <el-menu-item-group class="el-group-item">
            <el-menu-item style="font-size: 16px;" index="9-1" @click="changePage('39')">TRACK-090</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="10">
          <template slot="title">
            <span slot="title" style="font-size: 16px;"><strong>Folding Frame</strong></span>
          </template>
          <el-menu-item-group class="el-group-item">
            <el-menu-item style="font-size: 16px;" index="10-1" @click="changePage('40')">FD-044</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>

<script>
import detailInfo from '../pages/detail/detailInfo.vue'
export default {
  name: "productsName",
  components: {
    detailInfo
  },
  props: {
    shopDetail: {
      default: 0
    }
  },
  data() {
    return {
      isCollapse: false,
      index: '0',//默认使用0导航页面
      isShow: 'none', //控制回到顶部按钮显示
      changeIndex: 2
    }
  },
  mounted() {
    //监听窗口滑动
    window.addEventListener('scroll',
      this.handleScroll);
    this.index = this.shopDetail
    this.$emit('changeIndex', this.changeIndex)
  },
  watch: {
    shopDetail: {
      handler() {
        this.index = this.shopDetail
        console.log('http://192.168.94.108:8081/#/homeName', this.index);
      }
    }
  },
  methods: {
    // 触发回到顶部
    goUpper() {
      this.scrollToTop()
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    changePage(val) {
      console.log("点击了", val);
      this.index = val
    },
    // 显示或隐藏“回到顶部”按钮
    handleScroll() {
      if (window.scrollY > 1000) {
        this.isShow = 'block';
      } else {
        this.isShow = 'none';
      }
    },
    // 平滑滚动至顶部
    scrollToTop() {
      const scrollDuration = 500;
      // 滚动时间（毫秒）  
      let scrollStep = -window.scrollY / (scrollDuration / 15);
      const scrollInterval = setInterval(() => {
        if (window.scrollY !== 0) {
          window.scrollBy(0, scrollStep);
        } else {
          clearInterval(scrollInterval);
        }
      },
        15);
    },
  },
}
</script>

<style scoped>
.el-group-item{
  font-family: Arial, sans-serif;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>