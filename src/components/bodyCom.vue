<template>
  <div>
    <div style="background-color:white">
      <div>
        <el-carousel trigger="click" style="object-fit: contain;" class="image-container" :height="screenHehght + 'px'">
          <el-carousel-item v-for="item in 3" :key="item">
            <img style="object-fit: contain;" v-show="item === 2" src="../imgs/idxImg/202.jpg" alt="">
            <img style="object-fit: contain;" v-show="item === 3" src="../imgs/idxImg/201.jpg" alt="">
            <img style="object-fit: contain;" v-show="item === 1" src="../imgs/idxImg/203.jpg" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div>
        <div class="my-pr" style="background-color: white;padding: 60px">
          PRODUCT CATEGORY
        </div>
      </div>
      <div class="web-bd">
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="grid-content bg-purple" v-lazy-container="{ selector: 'img' }">
              <img height="300px" width="500px" @click="goDetail(1)"
                :data-src="require('../imgs/bicycleHandlebar/handLebar_002_004/mainImg/mainImg_01.png')" alt="">
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple" v-lazy-container="{ selector: 'img' }"><img class="lazy" height="300px"
                width="500px" @click="goDetail(5)"
                :data-src="require('../imgs/bicycleParts/SP_100/mainImg/mainImg_04.jpg')" alt=""></div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple" v-lazy-container="{ selector: 'img' }"><img class="lazy" height="300px"
                width="500px" @click="goDetail(6)"
                :data-src="require('../imgs/Fork/gravelFork/Gravel_270/mainImg/mainImg_01.png')" alt=""></div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple" v-lazy-container="{ selector: 'img' }"><img class="lazy" height="300px"
                width="500px" @click="goDetail(7)"
                :data-src="require('../imgs/Fork/roadFork/RF_010/mainImg/mainImg_02.jpg')" alt=""></div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="grid-content bg-purple" v-lazy-container="{ selector: 'img' }"><img class="lazy" height="300px"
                width="500px" @click="goDetail(13)"
                :data-src="require('../imgs/Fork/MTBFork/MF_002/mainImg/mainImg_03.jpg')" alt=""></div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple" v-lazy-container="{ selector: 'img' }"><img class="lazy" height="300px"
                width="500px" @click="goDetail(18)"
                :data-src="require('../imgs/Frame/roadFrame/ROAD_002/mainImg/mainImg_07.png')" alt=""></div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple" v-lazy-container="{ selector: 'img' }"><img class="lazy" height="300px"
                width="500px" @click="goDetail(23)"
                :data-src="require('../imgs/Frame/MTBFrame/MTB_002/mainImg/mainImg_01.jpg')" alt=""></div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple" v-lazy-container="{ selector: 'img' }"><img class="lazy" height="300px"
                width="500px" @click="goDetail(38)"
                :data-src="require('../imgs/Frame/gravelFrame/GRAVEL_078/mainImg/mainImg_02.jpg')" alt=""></div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="grid-content bg-purple" v-lazy-container="{ selector: 'img' }"><img class="lazy" height="300px"
                width="500px" @click="goDetail(39)"
                :data-src="require('../imgs/Frame/trackFrame/TRACK_090/mainImg/mainImg_08.png')" alt=""></div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple" v-lazy-container="{ selector: 'img' }"><img class="lazy" height="300px"
                width="500px" @click="goDetail(40)"
                :data-src="require('../imgs/Frame/foldingFrame/FD_044/mainImg/mainImg_03.jpg')" alt=""></div>
          </el-col>
        </el-row>
      </div>
      <div class="my-pr" style="background-color: white;padding: 60px">
        HOT PRODUCTS
      </div>
      <div class="web-bd" style="background-color: white;">
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="grid-content bg-purple" v-lazy-container="{ selector: 'img' }"><img class="lazy" height="200px"
                width="300px" @click="goDetail(14)"
                :data-src="require('../imgs/Fork/MTBFork/MF_008/mainImg/mainImg_02.jpg')" alt=""></div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple" v-lazy-container="{ selector: 'img' }"><img class="lazy" height="200px"
                width="300px" @click="goDetail(2)"
                :data-src="require('../imgs/bicycleHandlebar/HB_012/mainImg/mainImg_06.jpg')" alt=""></div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple" v-lazy-container="{ selector: 'img' }"><img class="lazy" height="200px"
                width="300px" @click="goDetail(20)"
                :data-src="require('../imgs/Frame/roadFrame/ROAD_150/mainImg/mainImg_03.png')" alt=""></div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple" v-lazy-container="{ selector: 'img' }"><img class="lazy" height="200px"
                width="300px" @click="goDetail(5)"
                :data-src="require('../imgs/bicycleParts/SP_100/mainImg/mainImg_04.jpg')" alt=""></div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="grid-content bg-purple" v-lazy-container="{ selector: 'img' }"><img class="lazy" height="200px"
                width="300px" @click="goDetail(39)"
                :data-src="require('../imgs/Frame/trackFrame/TRACK_090/mainImg/mainImg_07.png')" alt=""></div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple" v-lazy-container="{ selector: 'img' }"><img class="lazy" height="200px"
                width="300px" @click="goDetail(4)"
                :data-src="require('../imgs/bicycleHandlebar/TT_HB_008/mainImg/mainImg_01.png')" alt=""></div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple" v-lazy-container="{ selector: 'img' }"><img class="lazy" height="200px"
                width="300px" @click="goDetail(6)"
                :data-src="require('../imgs/Fork/gravelFork/Gravel_270/mainImg/mainImg_06.png')" alt=""></div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple" v-lazy-container="{ selector: 'img' }"><img class="lazy" height="200px"
                width="300px" @click="goDetail(16)"
                :data-src="require('../imgs/Fork/MTBFork/FK_048_068/mainImg/mainImg_02.png')" alt=""></div>
          </el-col>
        </el-row>
      </div>
      <div class="backGround-img">
        <div class="my-pr" style="background-color: white;padding: 10px">
          ABOUT US
        </div>
        <div class="my-text2" id="text-div2">
          <span>Shenzhen Maixianyi Technology Co., Ltd.</span>
        </div>
        <div class="my-text" id="text-div">
          <span>
            We are a professional production and sales of carbon fiber bicycles. Headquartered in Shenzhen, the company
            has an experienced and skilled R&D team and production team. As one of the leading carbon fiber bicycle
            manufacturers in China, we are committed to producing high-quality, lightweight, high-rigidity products to
            meet the needs of cyclists. Our products are widely used in road bikes, mountain bikes, track bikes and
            electric bike frames, and have been recognized and praised by many consumers and professionals. In terms of
            product design, we adhere to the concept of "scientific and technological innovation, excellence", using the
            most advanced CAD/CAM software for design, and using high-end CNC equipment for processing and production. At
            the same time, we also pay attention to the safety and stability of products, strictly follow the ISO9001
            quality management system standards in the production process, and conduct strict testing and testing on each
            product to ensure that the products meet the relevant standards and requirements. In addition to quality
            products, we also focus on customer service and user experience. We always adhere to the principle of
            "customer first, integrity and compliance", and provide customers with timely and professional pre-sales
            consultation and after-sales service to ensure customer satisfaction and trust. Thank you for your attention
            and support to our company, we look forward to establishing a long-term cooperative relationship with you and
            providing you with the best quality and most reliable carbon fiber bike frame products and services.</span>
        </div>
      </div>
      <div class="contact-us" style="padding:50px">
        <div class="my-pr" style="background-color: white;padding: 5px">
          CONTACT US
        </div>
        <div class="container">
          <div class="parent-container">
            <div>
              <div class="my-text2">
                <span>CONTACT OR VISIT US</span>
              </div>
              <div class="cont-us">
                <i class="el-icon-message" style="font-size: 1.3em;margin-right: 8px;"></i><span
                  class="bold-text">e-Mail:&nbsp
                </span>
                <span>qry@milebrecycle.com & yzn@milebrecycle.com</span><br>
                <i class="el-icon-mobile-phone" style="font-size: 1.3em;margin-right: 8px;"></i><span
                  class="bold-text">Phone
                  Number:&nbsp</span>
                <span> +86 189 2849 9245 & +86 188 2385 8884(Phone number support to add WeChat)</span><br>
                <!-- <i class="el-icon-discover" style="font-size: 1.3em;margin-right: 8px;"></i><span class="bold-text">Web
                  Link:&nbsp</span>
                <span> www.milebre.com</span><br> -->
                <i class="el-icon-service" style="font-size: 1.3em;margin-right: 8px;"></i><span class="bold-text">Online
                  Time:&nbsp</span>
                <span> Monday - Friday 9:00 AM to 21:00 PM (GMT+8)</span><br>
                <i class="el-icon-position" style="font-size: 1.3em;margin-right: 8px;"></i><span
                  class="bold-text">Address:&nbsp</span>
                <span> Near Vienna Hotel Shenzhen King Branch, Longhua District, Shenzhen, Guangdong Province,
                  China</span>
              </div>
            </div>
            <div class="gt-to">
              <div class="my-text2">
                <span>GET IN TOUCH</span>
              </div>
              <div class="cont-us2">
                <span>If you want to get in touch with us, you can send an email or call us, if you choose to send an
                  email,
                  we will contact you within 24 hours.</span><br>
                <span>Feel free to contact us by phone as well. Someone is always there to answer your call during normal
                  business hours.</span><br>
              </div>
            </div>
          </div>
          <div class="i-map">
            <div class="map-i" style="font-weight: bold;margin-top: 20px;">
              <i class="el-icon-map-location" style="font-size: 1.8em;float:left;"></i>
              <span style="font-size: 23px;text-align: left">MAP</span>
            </div>
            <div class="image-map" v-lazy-container="{ selector: 'img' }">
              <img class="image-margin" height="100%"  :data-src="require('../imgs/testMap2.png')"
                alt="位置地图">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "bodyCom",
  data() {
    return {
      screenHehght: screen.availWidth / 2.8
    }
  },
  mounted() {
    console.log(screen, 'location');
  },
  methods: {
    // 跳转详情页
    goDetail(key) {
      this.$emit('key', '3', key)
    }
  },
};

</script>

<style scoped>
.backGround-img{
  width: 100%;
  /* height: 815px; 设置容器的高度 */
  background-image: url('../imgs/background.png'); /* 替换为你的图像路径 */
  background-size: cover; /* 控制背景图像的大小 */
  background-position: center; /* 控制背景图像的位置 */
  min-width: 400px; /* 设置图片的最小宽度 */
}
.lazy {
  width: 100px;
  height: 300px;
  background-color: #eee;
}

.i-map {
  text-align: left;
}

.map-i i,
.map-i span {
  margin-left: 10px;
}

.bold-text {
  font-weight: bold;
  /* 设置为粗体 */
  font-size: 20px;
}

.image-margin {
  margin: 10px;
  width: 100%;
  /* 图片宽度设置为父容器的100% */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.image-map {
  margin-left: 15px;
  /* 左侧边距为视口宽度 */
  margin-right: 15px;
  /* 右侧边距为视口宽度 */
}

.parent-container {
  display: inline-block;
  vertical-align: top;
  /* 可选：垂直对齐方式 */
  margin-left: 30px;
  /* 设置距离页面的间距 */
}

.gt-to {
  display: flex;
  flex-direction: column;
}

.contact-us {
  /* 添加样式以适应您的设计需求 */
  display: inline-block;
  white-space: nowrap;
  /* 不换行 */
}

.my-pr {
  font-size: 40px;
  font-weight: bold;
}

.cont-us,
.cont-us2 {
  font-size: 20px;
  text-align: left;
  /* 设置文本内容左对齐 */
  width: auto;
  line-height: 2;
  font-family: Arial, sans-serif;
  margin-left: auto;
  margin-right: auto;
}

.cont-us span {
  display: inline-block;
  vertical-align: top;
  margin-bottom: 10px
}

.container {
  justify-content: center;
  /* 水平居中 */
  align-items: center;
  /* 垂直居中 */
  display: flex;
  flex-direction: column;
}

.my-text {
  text-indent: 2em;
  text-align: left;
  line-height: 1.5;
  /* 公司介绍文本的格式：首行空格两字符、左对齐、1.5 倍行距 */
  font-family: Arial, sans-serif;
  color: white;
}

.my-text2 {
  text-indent: 2em;
  text-align: center;
  line-height: 1.5;
  font-family: Arial, sans-serif;
  font-weight: bold;
  width: 80%;
  margin: auto;
  padding: 20px;
  background-color: transparent;
  box-sizing: border-box;
  border: 0px solid #ddd;
  font-size: 25px;
  color: white;
}

.el-carousel__item {
  border: 0px solid #ccc;
  /* 这里替换成你需要的边框大小和颜色值 */
}

.el-col {
  background-color: white;
  /* 这里替换成你需要的颜色值 */
}

.el-col img {
  display: block;
  width: 100%;
  /* height: auto; */
  margin: 0;
  padding: 0;
  border: none;
}

.el-col img:first-child {
  margin-right: -4px;
}

.el-col img:last-child {
  margin-left: -4px;
}

img {
  max-width: 100%;
  height: 100%;
}

.my-pr {
  font-size: 40px;
  font-weight: bold;
}

/* 产品介绍打字的效果 */

#text-div {
  color: #ededed;
  width: 80%;
  margin: auto;
  padding: 20px;
  background-color: transparent;
  box-sizing: border-box;
  border: 0px solid transparent;
  font-size: 22px;
  line-height: 2;
  margin-top: 9px;
}

#text-div2 {
  /* width: 80%; */
  margin: auto;
  padding: 20px;
  background-color: transparent;
  box-sizing: border-box;
  border: 0px solid transparent;
  font-size: 25px;
  line-height: 2;
}

.web-bd {
  margin: 60px;
}

/* 大图距离网页边界的距离 */

.grid-content {
  transition: transform 0.5s ease;
  /* 添加过渡效果 */
}

.grid-content:hover {
  transform: scale(1.1);
  /* 鼠标悬停时缩放图像 */
}
</style> 
