<template>
  <div>
    <div>
      <div @click="gotodetail(1)">
        <!-- <img width="100%" src="../../imgs/img_4.png" alt="" /> -->
      </div>
    </div>
    <!-- <div>{{ info.title }}</div>
    <div>{{ info.info }}</div> -->
    <div style="margin-left: 1em;margin: 0 auto;margin-top: 5em;">
      <div>
        <div class="grid-content bg-purple " style="display: flex;">
          <div style="margin-left: 0rpx;width: 50%;">
            <img width="480px" height="480px" :src="showImg[iIndex][index]" alt="" />
            <div style="display: flex;width: 480px;flex-wrap: nowrap;margin: -10px auto;">
              <i @click="changeIMges('add')" style="font-size: 2em;" class="el-icon-arrow-left jiantou "></i>
              <div v-lazy-container="{ selector: 'img' }" v-for="(it, index) in showImg[iIndex]"
                style="margin-left: 10px;" :key="index">
                <img @click="change(index)" width="130px" height="130px" :data-src="it" alt="" />
              </div>
              <i @click="changeIMges('del')" style="font-size: 2em;" class="el-icon-arrow-right jiantou"></i>
            </div>
          </div>
          <div class="grid-content bg-purple" style="">
            <div>
              <!-- Product introduction -->
            </div>
            <div style="margin-right: 5em;margin-top: 0em;min-width: 30em;margin-left: 10em;font-size: 20px;">
              <el-table :border='false' :data="info.tableData" height="550" style="width: 100%" text="40px">
                <el-table-column prop="type" width="150">
                </el-table-column>
                <el-table-column prop="value">
                </el-table-column>
              </el-table>
            </div>
          </div>
        </div>
        <div>
          <div style="margin-top: 10em">
            <div v-lazy-container="{ selector: 'img' }" class="imgsView" v-for="(item, index) in info.imgs" :key="index"
              style="margin: 0px;">
              <img :data-src="item" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import detailInfo from "@/util/detailInfo";
import footerCom from "@/components/footerCom";
export default {
  name: "detailInfo",
  components: {
    footerCom,
  },
  computed: {
  },
  props: {
    infoId: {
      default: 0
    }
  },
  watch: {
    infoId() {
      this.initData()
    }
  },
  data() {
    return {
      info: [],
      index: 0,//默认放大的图片
      iIndex: 0,//默认放大的图片
      showImg: [],//定义数组接收裁剪后的数组集合
    };
  },
  mounted() {
    this.initData()
  },
  methods: {
    initData() {
      console.log('detailInfo', detailInfo);
      this.info = detailInfo[this.infoId]
      this.solitSmallImgs()
    },
    changeIMges(val) {
      console.log('切换图片资源', val, this.iIndex);
      if (val === 'add') {
        if (this.iIndex === this.showImg.length - 1) {
          this.iIndex = 0
          return
        }
        this.iIndex = this.iIndex + 1
      } else {
        if (this.iIndex === 0) {
          this.iIndex = this.showImg.length - 1
          return
        }
        this.iIndex = this.iIndex - 1
      }

    },
    solitSmallImgs() {
      this.showImg = []
      let count = 1;
      let arr = []
      for (let i = 1; i <= this.info.smallImgs.length; i++) {
        arr.push(this.info.smallImgs[i])
        if (i % 3 == 0) {
          this.showImg.push(arr)
          arr = []
        }
      }
      console.log(' this.showImg', this.showImg);
    },
    goDetail() {
      console.log("goDetail");
    },
    change(val) {
      this.index = val
    }
  }
};
</script>
 
<style>
page {
  margin: 0px;
}

/* 箭头上下边距 */
.jiantou {
  line-height: 3em;
}

.imgsView>img {
  vertical-align: middle;
}

.el-table td.el-table__cell,
.el-table th.el-table__cell.is-leaf {
  border-bottom: 0px solid #EBEEF5;
}
</style>
