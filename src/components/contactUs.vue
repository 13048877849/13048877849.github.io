<template>
  <div class="contact-us" style="padding:50px">
    <div class="my-pr" style="background-color: white;padding: 5px">
      CONTACT US
    </div>
    <div class="container">
      <div class="parent-container">
        <div class="cont-vist-us">
          <div class="my-text2" id="text-div2">
            <span>CONTACT OR VISIT US</span>
          </div>
          <div class="cont-us">
            <i class="el-icon-message" style="font-size: 1.5em;margin-right: 8px;"></i><span class="bold-text">E-Mail:&nbsp
            </span>
            <span>example@example.com</span><br>
            <i class="el-icon-mobile-phone" style="font-size: 1.5em;margin-right: 8px;"></i><span class="bold-text">Phone
              Number:&nbsp</span>
            <span> +86&nbsp189&nbsp2849&nbsp9245</span><br>
            <i class="el-icon-discover" style="font-size: 1.5em;margin-right: 8px;"></i><span class="bold-text">Web
              Link:&nbsp</span>
            <span> www.milebre.com</span><br>
            <i class="el-icon-service" style="font-size: 1.5em;margin-right: 8px;"></i><span class="bold-text">Online
              Time:&nbsp</span>
            <span> Monday - Friday 9:00 AM to 21:00 PM</span><br>
            <i class="el-icon-position" style="font-size: 1.5em;margin-right: 8px;"></i><span
              class="bold-text">Address:&nbsp</span>
            <span> Near Vienna Hotel Shenzhen King Branch, Longhua District, Shenzhen, Guangdong Province, China</span>
          </div>
        </div>
        <div class="gt-to">
          <div class="my-text2" id="text-div2">
            <span>GET IN TOUCH</span>
          </div>
          <div class="cont-us2">
            <span>If you want to get in touch with us, you can send an email or call us, if you choose to send an email,
              we will contact you within 24 hours.</span><br>
            <span>Feel free to contact us by phone as well. Someone is always there to answer your call during normal
              business hours.</span><br>
          </div>
        </div>
      </div>
      <div class="map-i" style="text-align: left;font-weight: bold;margin-top: 20px;">
        <i class="el-icon-map-location" style="font-size: 1.8em;"></i><span style="font-size: 23px;">MAP</span>
      </div>
      <div class="image-map">
        <img height="100%" src="../imgs/testMap2.png" alt="位置地图" class="image-margin">
      </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
.map-i i,.map-i span{
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
  /* 自适应宽度 */
  margin-right: 40px;
  /* 可选：设置两个盒子之间的间距 */
  line-height: 2;
  font-family: Arial, sans-serif;
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

.my-text2 {
  text-indent: 2em;
  text-align: center;
  line-height: 1.5;
  font-family: Arial, sans-serif;
  font-weight: bold;
}

#text-div2 {
  width: 80%;
  margin: auto;
  padding: 20px;
  background-color: white;
  box-sizing: border-box;
  border: 0px solid #ddd;
  font-size: 25px;
  line-height: 2;
}
</style>