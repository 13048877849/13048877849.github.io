<template>
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
</template>

<script>
export default {
  name: "aboutUs"
}
</script>

<style scoped>

.backGround-img{
  width: 100%;
  /* height: 810px; 设置容器的高度 */
  background-image: url('../imgs/background.png'); /* 替换为你的图像路径 */
  background-size: cover; /* 控制背景图像的大小 */
  background-position: center; /* 控制背景图像的位置 */
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

/* 公司介绍文本的格式：首行空格两字符、左对齐、1.5 倍行距 */
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
.my-pr {
  font-size: 40px;
  font-weight: bold;
}</style>