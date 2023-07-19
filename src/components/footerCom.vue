<template>
  <div>
    <div style="background-color: #d3dce6;height: 100px">
      <div>
        <img style="margin-top: 30px" src="../imgs/img_1.png" alt="">
      </div>
      <div style="margin-top: 45px;">
        <el-row :gutter="20" type="flex" justify="center" align="middle">
          <!-- 居中 -->
          <el-col :span="10">
            <div class="grid-content bg-purple" >
              <span class="cout-ltd">Copyright:2023 Maixianyi Technology Co., Ltd. Shenzhen. All rights reserved.</span>
            </div>
            <div class="grid-content bg-purple">
              11111
            </div>
            <!-- <div class="grid-content bg-purple">
              11111
            </div> -->
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footerCom"
}
</script>

<style scoped>
.cout-ltd{
  font-family: Arial, sans-serif;
}</style>