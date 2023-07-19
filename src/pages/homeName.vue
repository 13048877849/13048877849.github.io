<template>
  <div>
    <div>
      <headerCom style="margin-bottom: 11rem;" @key="change" :shopDetail="shopDetail" :index="index+ ''"></headerCom>
      <div v-if="index == 1 ">
        <bodyCom @key="change" @changeIndex="changeIndex"></bodyCom>
      </div>
      <div v-if="index == 2 ">
        <aboutUs></aboutUs>
      </div>
      <div v-if="index == 3 ">
        <productsName :shopDetail="shopDetail"></productsName>
      </div>
      <div v-if="index == 4 ">
        <newsInfo></newsInfo>
      </div>
      <div v-if="index == 5 ">
        <contactUs></contactUs>
      </div>
      <footerCom></footerCom>
    </div>
  </div>
</template>

<script>
import bodyCom from "@/components/bodyCom";
import aboutUs from "@/components/aboutUs";
import productsName from "@/components/productsName";
import contactUs from "@/components/contactUs";
import newsInfo from "@/components/newsInfo";
import headerCom from "@/components/headerCom";
import footerCom from "@/components/footerCom";
export default {
  name: "homeName",
  components:{
    bodyCom,
    headerCom,
    footerCom,
    aboutUs,
    productsName,
    contactUs,
    newsInfo
  },
  data(){
    return{
        index: 1,
        shopDetail: 0,
    }
  },
  created() {
  },
  mounted(){
  },
  methods:{
    change(val,val2){
      this.index = val
      this.shopDetail = val2
      this.$forceUpdate
      console.log("cccccccccccccccc",val,val2)
    },
    changeIndex(val){
      this.index = val
    }
  }
}
</script>

<style scoped>
</style>