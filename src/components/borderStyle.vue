<template>
    <div class="ahn-borderStyle1">
        <div class="ahn-borderStyle2">
          <slot>替换内容</slot>
        </div>
    </div>
</template>

<script>
</script>

<style lang="less" scoped>
@blue: #0ba3ec;
.ahn-borderStyle1 {
  position: relative;
  width: 100%;
  height: 100%;
  box-shadow: 5px -5px 10px gray inset;
  &:before,
  &:after {
    position: absolute;
    width: 20px;
    height: 20px;
    content: "";
    border-top: 4px solid @blue;
    z-index: 999;
  }
  &:before {
    left: 0;
    top: 0;
    border-left: 4px solid @blue;
  }
  &:after {
    top: 0;
    right: 0;
    border-right: 4px solid @blue;
  }
  .ahn-borderStyle2 {
    position: relative;
    width: 100%;
    height: 100%;
    box-shadow: -5px 5px 10px gray inset ;
     z-index: 999;
    &:before,
    &:after {
      position: absolute;
      width: 20px;
      height: 20px;
      content: "";
      border-bottom: 4px solid @blue;
    }
    &:before {
      left: 0;
      bottom: 0;
      border-left: 4px solid @blue;
    }
    &:after {
      bottom: 0;
      right: 0;
      border-right: 4px solid @blue;
    }
  }
}
</style>
