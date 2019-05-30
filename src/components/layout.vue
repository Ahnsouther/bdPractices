<template>
    <div class="ahn-layout">
        <div class="ahn-header">
            <p>数据可视化展示</p>
        </div>
        <div class="ahn-wrap">
            <div class="ahn-col-25pct">
                <borderStyle>
                    <bar></bar>
                </borderStyle>
            </div>
            <div class="ahn-col-25pct">
                <borderStyle>
                    <pie></pie>
                </borderStyle>
            </div>
            <div class="ahn-col-25pct">
                <borderStyle></borderStyle>
            </div>
            <div class="ahn-col-25pct">
                <borderStyle></borderStyle>
            </div>
        </div>
        <div class="ahn-wrap">
           <div class="ahn-col-25pct">
                <borderStyle></borderStyle>
            </div>
            <div class="ahn-col-25pct">
                <borderStyle></borderStyle>
            </div>
            <div class="ahn-col-25pct">
                <borderStyle></borderStyle>
            </div>
            <div class="ahn-col-25pct">
                <borderStyle></borderStyle>
            </div>
        </div>
    </div>
</template>

<script>
import borderStyle from "@/components/borderStyle"
import bar from "@/components/bar"
import pie from "@/components/pie"

export default {
  name: "layout",
  components: {
    borderStyle,
    bar,
    pie
  }
};
</script>
<style lang="less" scoped>
.ahn-layout {
  width: calc(100% - 60px);
  height: calc(100% - 20px);
  box-sizing: border-box;
  margin: 10px 30px;
  display: flex;
  flex-direction: column;
  .ahn-header {
    width: 100%;
    height: 6%;
    color: #fff;
    font-size: 30px;
    text-align: center;
  }
  .ahn-wrap {
    width: 100%;
    height: 47%;
    box-sizing: border-box;
    display: flex;
    &:last-child {
      margin-top: 1%;
    }
    .ahn-col-25pct {
      width: 25%;
      height: 100%;
      margin-right: 1%;
    }
    .ahn-col-25pct:last-child {
      margin-right: 0%;
    }
  }
}
</style>
